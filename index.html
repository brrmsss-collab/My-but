<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>منصة بوتات التداول الحقيقية</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background-color: #181a20;
            color: #eaecef;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            padding-bottom: 88px;
        }
        .card-dark {
            background-color: #1e2329;
            border: 1px solid #2b3139;
            border-radius: 14px;
        }
        .input-dark {
            background-color: #2b3139;
            border: 1px solid #363c45;
            color: #fff;
            border-radius: 8px;
        }
        .input-dark:focus {
            outline: none;
            border-color: #fcd535;
        }
        .nav-bar {
            background-color: #1e2329;
            border-top: 1px solid #2b3139;
        }
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
        }
    </style>
</head>
<body class="max-w-2xl mx-auto min-h-screen relative">

    <!-- الشريط العلوي -->
    <header class="sticky top-0 z-40 bg-[#181a20]/95 backdrop-blur border-b border-[#2b3139] px-4 py-2.5 flex justify-between items-center">
        <div class="flex items-center space-x-2 space-x-reverse">
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" id="connDot"></span>
            <div>
                <div class="text-xs font-bold text-white" id="connStatusText">غير متصل بالمنصة</div>
                <div class="text-[10px] text-gray-400 font-mono" id="proxyUrlLabel">السيرفر: غير محدد</div>
            </div>
        </div>
        <button onclick="openConnectModal()" class="bg-[#fcd535] text-black font-bold text-xs px-3 py-1.5 rounded-lg">
            🔗 ربط المنصة
        </button>
    </header>

    <!-- إشعار منبثق -->
    <div id="toast" class="fixed top-14 left-1/2 transform -translate-x-1/2 bg-[#2b3139] border border-[#fcd535] text-white text-xs px-4 py-2.5 rounded-full shadow-xl z-50 hidden text-center max-w-xs">
        تنبيه
    </div>

    <!-- ==================== 1. الرئيسية ==================== -->
    <main id="tab-home" class="tab-content active p-4 space-y-4">
        <div class="card-dark p-4 space-y-3">
            <div class="flex justify-between items-center border-b border-[#2b3139] pb-2 text-xs">
                <span class="text-gray-400">رصيد USDT الحقيقي المتاح</span>
                <span class="font-mono font-bold text-lg text-[#0ecb81]">$<span id="realUsdtFree">0.00</span></span>
            </div>
            <div class="flex justify-between items-center text-xs">
                <span class="text-gray-400">رصيد USDT المحجوز في أوامر</span>
                <span class="font-mono text-gray-200">$<span id="realUsdtLocked">0.00</span></span>
            </div>
            <div class="flex justify-between items-center pt-1">
                <button onclick="fetchRealBalance()" class="bg-[#2b3139] hover:bg-[#363c45] text-xs text-white font-bold px-3 py-2 rounded-lg">
                    ↻ تحديث الرصيد من باينس
                </button>
                <span class="text-[11px] text-gray-400" id="envBadge">الوضع: حقيقي (Mainnet)</span>
            </div>
        </div>

        <div class="card-dark p-4 space-y-2">
            <h2 class="text-sm font-bold text-white">أرصدة الأصول الموجودة في حسابك</h2>
            <div id="accountAssetsList" class="text-xs text-gray-400 space-y-1.5">
                اربط المنصة واضغط "تحديث الرصيد من باينس" لعرض أرصدتك الفعلية.
            </div>
        </div>
    </main>

    <!-- ==================== 2. الأسواق ==================== -->
    <main id="tab-markets" class="tab-content p-4 space-y-4">
        <div class="card-dark p-3">
            <input type="text" id="marketSearch" onkeyup="renderMarkets()" placeholder="🔍 ابحث عن زوج (BTCUSDT, ETHUSDT, SOLUSDT, BNBUSDT...)" class="w-full input-dark px-3.5 py-2 text-xs">
        </div>
        <div class="card-dark p-4 space-y-2" id="marketsContainer"></div>
    </main>

    <!-- ==================== 3. تنفيذ أمر بوت حقيقي ==================== -->
    <main id="tab-trade" class="tab-content p-4 space-y-4">
        <div class="card-dark p-4 space-y-3.5 border border-[#fcd535]/30">
            <div class="flex justify-between items-center border-b border-[#2b3139] pb-2">
                <div>
                    <h2 class="text-sm font-bold text-white">تنفيذ أمر بوت حقيقي على باينس</h2>
                    <p class="text-[10px] text-gray-400">يرسل الأمر مباشرة إلى السيرفر الوسيط لتنفيذه في حسابك</p>
                </div>
                <span class="text-xs font-mono font-bold text-[#fcd535]" id="selectedSymbolLabel">BTCUSDT</span>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[11px] text-gray-400 block mb-1">الزوج (Symbol)</label>
                    <select id="orderSymbolSelect" onchange="onSymbolChange()" class="w-full input-dark p-2.5 text-xs font-mono font-bold"></select>
                </div>
                <div>
                    <label class="text-[11px] text-gray-400 block mb-1">السعر اللحظي في السوق</label>
                    <input type="text" id="livePriceInput" readonly class="w-full input-dark p-2.5 text-xs font-mono text-[#0ecb81] font-bold">
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2 bg-[#181a20] p-1 rounded-lg">
                <button id="sideBuyBtn" onclick="setSide('BUY')" class="py-2 rounded text-xs font-bold bg-[#0ecb81] text-black">شراء (BUY)</button>
                <button id="sideSellBtn" onclick="setSide('SELL')" class="py-2 rounded text-xs font-bold text-gray-400">بيع (SELL)</button>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[11px] text-gray-400 block mb-1">نوع الأمر</label>
                    <select id="orderTypeSelect" onchange="toggleLimitPrice()" class="w-full input-dark p-2.5 text-xs font-bold">
                        <option value="MARKET">سوق فوري (MARKET)</option>
                        <option value="LIMIT">أمر محدد السعر (LIMIT)</option>
                    </select>
                </div>
                <div id="limitPriceBox" class="hidden">
                    <label class="text-[11px] text-gray-400 block mb-1">سعر LIMIT (USDT)</label>
                    <input type="number" step="any" id="limitPriceInput" placeholder="مثال: 60000" class="w-full input-dark p-2.5 text-xs font-mono">
                </div>
            </div>

            <!-- للشراء السوقي نستخدم مبلغ USDT، وللبيع أو LIMIT نستخدم كمية العملة -->
            <div id="buyMarketQuoteBox">
                <label class="text-[11px] text-gray-400 block mb-1">مبلغ الشراء بـ USDT (مثال: 15)</label>
                <input type="number" step="any" id="quoteOrderQtyInput" placeholder="أدخل مبلغ USDT" class="w-full input-dark p-2.5 text-xs font-mono font-bold">
            </div>

            <div id="baseQuantityBox" class="hidden">
                <label class="text-[11px] text-gray-400 block mb-1">كمية العملة (Quantity)</label>
                <input type="number" step="any" id="baseQuantityInput" placeholder="مثال: 0.001" class="w-full input-dark p-2.5 text-xs font-mono font-bold">
            </div>

            <button onclick="executeRealBotOrder()" id="submitOrderBtn" class="w-full bg-[#fcd535] hover:bg-[#e5c12e] text-black font-bold py-3 rounded-xl text-sm">
                إرسال وتنفيذ الأمر الحقيقي الآن
            </button>
        </div>

        <div class="card-dark p-4 space-y-2">
            <h3 class="text-xs font-bold text-white">سجل التنفيذ الفعلي (الرد الحقيقي من باينس)</h3>
            <div id="realExecutionLog" class="space-y-2 text-xs font-mono text-gray-300 max-h-60 overflow-y-auto">
                <div class="text-gray-500 font-sans text-center py-3">لم يتم إرسال أي أمر بعد.</div>
            </div>
        </div>
    </main>

    <!-- ==================== الشريط السفلي ==================== -->
    <nav class="nav-bar fixed bottom-0 left-0 right-0 max-w-2xl mx-auto flex justify-around items-center py-2.5 z-40">
        <button onclick="switchTab('home')" id="nav-home" class="flex flex-col items-center text-[#fcd535] text-[11px] font-bold w-1/3">
            <span>💰</span><span>الرصيد</span>
        </button>
        <button onclick="switchTab('markets')" id="nav-markets" class="flex flex-col items-center text-gray-400 text-[11px] w-1/3">
            <span>📊</span><span>الأسواق</span>
        </button>
        <button onclick="switchTab('trade')" id="nav-trade" class="flex flex-col items-center text-gray-400 text-[11px] w-1/3">
            <span>⚡</span><span>تنفيذ البوت</span>
        </button>
    </nav>

    <!-- ==================== نافذة ربط المنصة والسيرفر ==================== -->
    <div id="connectModal" class="fixed inset-0 bg-black/85 backdrop-blur-sm hidden flex items-center justify-center p-4 z-50">
        <div class="card-dark p-5 w-full max-w-sm relative space-y-3">
            <button onclick="closeConnectModal()" class="absolute top-4 left-4 text-gray-400 text-lg">✕</button>
            <h2 class="text-base font-bold text-white">ربط السيرفر وباينس</h2>
            <div>
                <label class="text-[11px] text-gray-400 block mb-1">رابط السيرفر الوسيط (Proxy URL)</label>
                <input type="text" id="proxyUrlInput" placeholder="https://your-service.onrender.com" class="w-full input-dark p-2.5 text-xs font-mono">
            </div>
            <div>
                <label class="text-[11px] text-gray-400 block mb-1">API Key</label>
                <input type="text" id="apiKeyInput" placeholder="أدخل Binance API Key" class="w-full input-dark p-2.5 text-xs font-mono">
            </div>
            <div>
                <label class="text-[11px] text-gray-400 block mb-1">API Secret</label>
                <input type="password" id="apiSecretInput" placeholder="أدخل Binance Secret Key" class="w-full input-dark p-2.5 text-xs font-mono">
            </div>
            <label class="flex items-center space-x-2 space-x-reverse text-xs text-gray-300 pt-1">
                <input type="checkbox" id="testnetCheckbox" class="rounded">
                <span>استخدام حساب الاختبار (Binance Spot Testnet)</span>
            </label>
            <button onclick="saveConnectionAndFetch()" class="w-full bg-[#fcd535] text-black font-bold py-3 rounded-xl text-xs">
                حفظ وجلب الرصيد الحقيقي
            </button>
        </div>
    </div>

    <script>
        let proxyUrl = localStorage.getItem('bot_proxy_url') || '';
        let apiKey = '';
        let apiSecret = '';
        let testnet = false;
        let orderSide = 'BUY';

        const pairs = [
            { symbol: 'BTCUSDT', name: 'Bitcoin', price: 0 },
            { symbol: 'ETHUSDT', name: 'Ethereum', price: 0 },
            { symbol: 'SOLUSDT', name: 'Solana', price: 0 },
            { symbol: 'BNBUSDT', name: 'BNB', price: 0 },
            { symbol: 'XRPUSDT', name: 'Ripple', price: 0 }
        ];

        function initSymbolSelect() {
            const sel = document.getElementById('orderSymbolSelect');
            sel.innerHTML = pairs.map(p => `<option value="${p.symbol}">${p.symbol} (${p.name})</option>`).join('');
            onSymbolChange();
        }

        function onSymbolChange() {
            const sym = document.getElementById('orderSymbolSelect').value;
            document.getElementById('selectedSymbolLabel').innerText = sym;
            const item = pairs.find(p => p.symbol === sym);
            document.getElementById('livePriceInput').value = item && item.price ? item.price : 'جاري الجلب...';
        }

        async function fetchLivePrices() {
            try {
                const res = await fetch('https://api.binance.com/api/v3/ticker/price');
                const all = await res.json();
                const map = new Map(all.map(x => [x.symbol, parseFloat(x.price)]));
                pairs.forEach(p => {
                    if (map.has(p.symbol)) p.price = map.get(p.symbol);
                });
                onSymbolChange();
                renderMarkets();
            } catch (_) {}
        }

        function renderMarkets() {
            const q = (document.getElementById('marketSearch').value || '').toUpperCase();
            const list = pairs.filter(p => p.symbol.includes(q) || p.name.toUpperCase().includes(q));
            document.getElementById('marketsContainer').innerHTML = list.map(p => `
                <div onclick="selectSymbolAndGoTrade('${p.symbol}')" class="flex justify-between items-center py-2.5 px-2 hover:bg-[#181a20] rounded-lg cursor-pointer">
                    <div>
                        <div class="text-xs font-bold text-white">${p.symbol}</div>
                        <div class="text-[10px] text-gray-400">${p.name}</div>
                    </div>
                    <div class="font-mono text-xs font-bold text-[#0ecb81]">$${p.price ? p.price.toLocaleString('en-US') : '...'}</div>
                </div>
            `).join('');
        }

        function selectSymbolAndGoTrade(sym) {
            document.getElementById('orderSymbolSelect').value = sym;
            onSymbolChange();
            switchTab('trade');
        }

        function setSide(side) {
            orderSide = side;
            document.getElementById('sideBuyBtn').className = side === 'BUY'
                ? 'py-2 rounded text-xs font-bold bg-[#0ecb81] text-black'
                : 'py-2 rounded text-xs font-bold text-gray-400';
            document.getElementById('sideSellBtn').className = side === 'SELL'
                ? 'py-2 rounded text-xs font-bold bg-[#f6465d] text-white'
                : 'py-2 rounded text-xs font-bold text-gray-400';
            refreshAmountInputs();
        }

        function toggleLimitPrice() {
            const type = document.getElementById('orderTypeSelect').value;
            document.getElementById('limitPriceBox').classList.toggle('hidden', type !== 'LIMIT');
            refreshAmountInputs();
        }

        function refreshAmountInputs() {
            const type = document.getElementById('orderTypeSelect').value;
            const isMarketBuy = type === 'MARKET' && orderSide === 'BUY';
            document.getElementById('buyMarketQuoteBox').classList.toggle('hidden', !isMarketBuy);
            document.getElementById('baseQuantityBox').classList.toggle('hidden', isMarketBuy);
        }

        function openConnectModal() {
            document.getElementById('proxyUrlInput').value = proxyUrl;
            document.getElementById('connectModal').classList.remove('hidden');
        }
        function closeConnectModal() { document.getElementById('connectModal').classList.add('hidden'); }

        async function saveConnectionAndFetch() {
            proxyUrl = document.getElementById('proxyUrlInput').value.trim().replace(/\/+$/, '');
            apiKey = document.getElementById('apiKeyInput').value.trim();
            apiSecret = document.getElementById('apiSecretInput').value.trim();
            testnet = document.getElementById('testnetCheckbox').checked;

            if (!proxyUrl || !apiKey || !apiSecret) {
                return notify('أدخل رابط السيرفر و API Key و API Secret');
            }

            localStorage.setItem('bot_proxy_url', proxyUrl);
            document.getElementById('proxyUrlLabel').innerText = 'السيرفر: ' + proxyUrl;
            document.getElementById('envBadge').innerText = testnet ? 'الوضع: اختبار (Testnet)' : 'الوضع: حقيقي (Mainnet)';
            closeConnectModal();
            await fetchRealBalance();
        }

        async function fetchRealBalance() {
            if (!proxyUrl || !apiKey || !apiSecret) {
                return notify('افتح "ربط المنصة" وأدخل بيانات السيرفر ومفاتيح API');
            }
            try {
                const res = await fetch(`${proxyUrl}/api/balance`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ apiKey, apiSecret, testnet })
                });
                const data = await res.json();
                if (!data.ok) {
                    document.getElementById('connDot').className = 'w-2.5 h-2.5 rounded-full bg-[#f6465d] inline-block';
                    document.getElementById('connStatusText').innerText = 'خطأ في الاتصال بباينس';
                    return notify(data.error || 'تعذر جلب الرصيد');
                }

                document.getElementById('connDot').className = 'w-2.5 h-2.5 rounded-full bg-[#0ecb81] inline-block';
                document.getElementById('connStatusText').innerText = 'متصل وحقيقي';
                document.getElementById('realUsdtFree').innerText = Number(data.usdtFree || 0).toFixed(2);
                document.getElementById('realUsdtLocked').innerText = Number(data.usdtLocked || 0).toFixed(2);

                const assetsEl = document.getElementById('accountAssetsList');
                if (!data.balances || data.balances.length === 0) {
                    assetsEl.innerHTML = 'لا توجد أرصدة غير صفرية في الحساب.';
                } else {
                    assetsEl.innerHTML = data.balances.map(b => `
                        <div class="flex justify-between items-center p-2 bg-[#181a20] rounded-lg border border-[#2b3139] font-mono">
                            <span class="text-white font-bold">${b.asset}</span>
                            <span class="text-[#0ecb81]">متاح: ${b.free}</span>
                            <span class="text-gray-400">محجوز: ${b.locked}</span>
                        </div>
                    `).join('');
                }
                notify('تم تحديث الرصيد الحقيقي من باينس');
            } catch (err) {
                notify('فشل الوصول للسيرفر: ' + err.message);
            }
        }

        async function executeRealBotOrder() {
            if (!proxyUrl || !apiKey || !apiSecret) {
                return notify('اربط المنصة والسيرفر أولاً قبل إرسال الأمر');
            }

            const symbol = document.getElementById('orderSymbolSelect').value;
            const type = document.getElementById('orderTypeSelect').value;
            const quoteOrderQty = document.getElementById('quoteOrderQtyInput').value;
            const quantity = document.getElementById('baseQuantityInput').value;
            const price = document.getElementById('limitPriceInput').value;

            const payload = {
                apiKey,
                apiSecret,
                symbol,
                side: orderSide,
                type,
                testnet
            };

            if (type === 'MARKET' && orderSide === 'BUY') {
                payload.quoteOrderQty = quoteOrderQty;
            } else {
                payload.quantity = quantity;
            }
            if (type === 'LIMIT') {
                payload.price = price;
            }

            const btn = document.getElementById('submitOrderBtn');
            btn.disabled = true;
            btn.innerText = 'جاري الإرسال إلى باينس...';

            try {
                const res = await fetch(`${proxyUrl}/api/order`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();

                if (!data.ok) {
                    prependLog(`❌ رفض الأمر (${symbol} ${orderSide}): ${data.error}`);
                    notify('رفضت باينس الأمر: ' + data.error);
                } else {
                    prependLog(`✅ تم تنفيذ الأمر في باينس | OrderID: ${data.order.orderId} | الحالة: ${data.order.status}`);
                    notify('تم تنفيذ الأمر فعلياً في باينس');
                    await fetchRealBalance();
                }
            } catch (err) {
                prependLog(`❌ خطأ بالاتصال بالسيرفر: ${err.message}`);
                notify('خطأ بالاتصال بالسيرفر');
            } finally {
                btn.disabled = false;
                btn.innerText = 'إرسال وتنفيذ الأمر الحقيقي الآن';
            }
        }

        function prependLog(msg) {
            const box = document.getElementById('realExecutionLog');
            if (box.innerText.includes('لم يتم إرسال أي أمر بعد')) box.innerHTML = '';
            const time = new Date().toLocaleTimeString('ar-SA');
            box.innerHTML = `<div class="p-2 bg-[#181a20] rounded-lg border border-[#2b3139]">[${time}] ${msg}</div>` + box.innerHTML;
        }

        function switchTab(tab) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById('tab-' + tab).classList.add('active');
            ['home', 'markets', 'trade'].forEach(t => {
                const el = document.getElementById('nav-' + t);
                el.className = t === tab
                    ? 'flex flex-col items-center text-[#fcd535] text-[11px] font-bold w-1/3'
                    : 'flex flex-col items-center text-gray-400 text-[11px] w-1/3';
            });
        }

        function notify(msg) {
            const t = document.getElementById('toast');
            t.innerText = msg;
            t.classList.remove('hidden');
            clearTimeout(window.toastTimer);
            window.toastTimer = setTimeout(() => t.classList.add('hidden'), 3500);
        }

        if (proxyUrl) document.getElementById('proxyUrlLabel').innerText = 'السيرفر: ' + proxyUrl;
        initSymbolSelect();
        refreshAmountInputs();
        fetchLivePrices();
        setInterval(fetchLivePrices, 5000);
    </script>
</body>
</html>
