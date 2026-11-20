const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

function getBaseUrl(testnet) {
  return testnet ? 'https://testnet.binance.vision' : 'https://api.binance.com';
}

function signQuery(params, secret) {
  const query = new URLSearchParams(params).toString();
  const signature = crypto.createHmac('sha256', secret).update(query).digest('hex');
  return `${query}&signature=${signature}`;
}

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'binance-bot-proxy' });
});

app.post('/api/balance', async (req, res) => {
  try {
    const { apiKey, apiSecret, testnet = false } = req.body;
    if (!apiKey || !apiSecret) {
      return res.status(400).json({ ok: false, error: 'مطلوب API Key و API Secret' });
    }

    const baseUrl = getBaseUrl(Boolean(testnet));
    const qs = signQuery({ timestamp: Date.now(), recvWindow: 5000 }, apiSecret);

    const response = await fetch(`${baseUrl}/api/v3/account?${qs}`, {
      headers: { 'X-MBX-APIKEY': apiKey }
    });
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        error: data.msg || 'فشل جلب الرصيد من باينس',
        code: data.code
      });
    }

    const balances = (data.balances || [])
      .map(b => ({
        asset: b.asset,
        free: parseFloat(b.free),
        locked: parseFloat(b.locked)
      }))
      .filter(b => b.free > 0 || b.locked > 0);

    const usdt = balances.find(b => b.asset === 'USDT') || { asset: 'USDT', free: 0, locked: 0 };

    return res.json({
      ok: true,
      usdtFree: usdt.free,
      usdtLocked: usdt.locked,
      balances
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.post('/api/order', async (req, res) => {
  try {
    const {
      apiKey,
      apiSecret,
      symbol,
      side,
      type = 'MARKET',
      quoteOrderQty,
      quantity,
      price,
      testnet = false
    } = req.body;

    if (!apiKey || !apiSecret || !symbol || !side) {
      return res.status(400).json({ ok: false, error: 'بيانات الأمر غير مكتملة' });
    }

    const params = {
      symbol: symbol.toUpperCase(),
      side: side.toUpperCase(),
      type: type.toUpperCase(),
      timestamp: Date.now(),
      recvWindow: 5000
    };

    if (params.type === 'MARKET') {
      if (params.side === 'BUY' && quoteOrderQty) {
        params.quoteOrderQty = Number(quoteOrderQty).toFixed(2);
      } else if (quantity) {
        params.quantity = Number(quantity).toString();
      } else {
        return res.status(400).json({ ok: false, error: 'حدد quoteOrderQty أو quantity للأمر السوقي' });
      }
    } else if (params.type === 'LIMIT') {
      if (!quantity || !price) {
        return res.status(400).json({ ok: false, error: 'حدد quantity و price للأمر الحدّي' });
      }
      params.quantity = Number(quantity).toString();
      params.price = Number(price).toString();
      params.timeInForce = 'GTC';
    }

    const baseUrl = getBaseUrl(Boolean(testnet));
    const qs = signQuery(params, apiSecret);

    const response = await fetch(`${baseUrl}/api/v3/order?${qs}`, {
      method: 'POST',
      headers: { 'X-MBX-APIKEY': apiKey }
    });
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        error: data.msg || 'رفضت باينس تنفيذ الأمر',
        code: data.code
      });
    }

    return res.json({ ok: true, order: data });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Binance Bot Proxy running on http://localhost:${PORT}`);
});
