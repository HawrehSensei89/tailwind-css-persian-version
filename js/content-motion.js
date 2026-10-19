// Transitions & Animation + Transforms + SVG + Accessibility — ۲۱ صفحه
var C = window.CONTENT
var demo = function (html, code) { return { t: 'demo', html: html, code: code } }
var tbl = function (rows) { return { t: 'table', rows: rows } }
var rep = function (cls) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + cls + '` یا `md:' + cls + '`.' }
}
var arb = function (p, css) {
  return [[p + '-(<custom-property>)', css + ': var(<custom-property>);'], [p + '-[<value>]', css + ': <value>;']]
}
var page = function (heading, lead, rows, body, repCls) {
  return { heading: heading, lead: lead, blocks: [tbl(rows)].concat(body || []).concat(repCls ? [rep(repCls)] : []) }
}
var sq = function (cls, txt) { return '<div class="flex size-16 items-center justify-center rounded-lg bg-sky-500 text-xs font-semibold text-white ' + cls + '">' + (txt || '') + '</div>' }
var wrap = function (inner) { return '<div class="flex flex-wrap items-center gap-6 p-4">' + inner + '</div>' }
var ex = function (cls) { return sq(cls, cls.split(' ').pop()) }

/* ================= Transitions ================= */
C['transition-property'] = page('transition-property', 'کلاس‌هایی برای تعیین اینکه کدام ویژگی‌های CSS با انیمیشن تغییر کنند.', [
  ['transition', 'transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, ...;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;'],
  ['transition-all', 'transition-property: all; (با مدت و تابع پیش‌فرض)'],
  ['transition-colors', 'transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, ...;'],
  ['transition-opacity', 'transition-property: opacity;'],
  ['transition-shadow', 'transition-property: box-shadow;'],
  ['transition-transform', 'transition-property: transform, translate, scale, rotate;'],
  ['transition-none', 'transition-property: none;'],
].concat(arb('transition', 'transition-property')), [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'p', text: 'با `transition` تغییر حالت (مثلاً hover) نرم می‌شود. موس را روی دکمه‌ها ببر:' },
  demo(wrap('<button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white transition hover:bg-pink-500">transition</button><button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white hover:bg-pink-500">بدون transition</button>'), '<button class="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">Save Changes</button>'),
  { t: 'h3', text: 'ویژگی‌های خاص' },
  { t: 'p', text: 'اگر فقط رنگ‌ها تغییر می‌کنند از `transition-colors`، برای جابه‌جایی و چرخش از `transition-transform` و برای سایه از `transition-shadow` استفاده کن. `transition-all` همه‌ی ویژگی‌ها را انیمیت می‌کند ولی روی عملکرد تأثیر می‌گذارد.' },
  { t: 'h3', text: 'حذف transition' },
  { t: 'code', text: '<button class="transition-none md:transition-all ...">...</button>', file: 'HTML' },
  { t: 'h3', text: 'احترام به کاربران حساس به حرکت' },
  { t: 'code', text: '<button class="motion-safe:transition motion-reduce:transition-none ...">...</button>', file: 'HTML' },
], 'transition')

C['transition-behavior'] = page('transition-behavior', 'کلاس‌هایی برای فعال کردن transition روی ویژگی‌های گسسته (discrete) مثل `display`.', [
  ['transition-normal', 'transition-behavior: normal;'],
  ['transition-discrete', 'transition-behavior: allow-discrete;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'ویژگی‌هایی مثل `display: none` ↔ `block` قابل انیمیت نیستند. با `transition-discrete` مرورگر تغییر آن‌ها را تا پایان انیمیشن سایر ویژگی‌ها عقب می‌اندازد. همراه `starting:` (برای حالت ورود) و `transition-*` برای ساخت انیمیشن نمایش و پنهان شدن بدون JavaScript:' },
  { t: 'code', text: '<div class="hidden opacity-0 transition-discrete transition-all open:block open:opacity-100 starting:open:opacity-0 ...">...</div>', file: 'HTML' },
  { t: 'note', text: 'این قابلیت جدید است و فقط در مرورگرهای مدرن (Chrome، Safari، Firefox جدید) کار می‌کند. در مرورگرهای قدیمی‌تر، تغییر بدون انیمیشن انجام می‌شود، که قابل‌قبول است.' },
], 'transition-discrete')

C['transition-duration'] = page('transition-duration', 'کلاس‌هایی برای تعیین مدت زمان transition.', [
  ['duration-<number>', 'transition-duration: <number>ms;'],
  ['duration-initial', 'transition-duration: initial;'],
].concat(arb('duration', 'transition-duration')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'عدد بر حسب میلی‌ثانیه است. `duration-150` پیش‌فرض `transition` است. موس را روی هر دکمه ببر و سرعت را مقایسه کن:' },
  demo(wrap('<button class="rounded-md bg-sky-500 px-3 py-2 text-xs text-white transition duration-150 hover:bg-pink-500">150</button><button class="rounded-md bg-sky-500 px-3 py-2 text-xs text-white transition duration-700 hover:bg-pink-500">700</button><button class="rounded-md bg-sky-500 px-3 py-2 text-xs text-white transition duration-1000 hover:bg-pink-500">1000</button>'), '<button class="transition duration-150 ease-in-out ...">Button A</button>\n<button class="transition duration-300 ease-in-out ...">Button B</button>\n<button class="transition duration-700 ease-in-out ...">Button C</button>'),
], 'duration-300')

C['transition-timing-function'] = page('transition-timing-function', 'کلاس‌هایی برای تعیین منحنی شتاب (easing) transition.', [
  ['ease-linear', 'transition-timing-function: linear;'],
  ['ease-in', 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);'],
  ['ease-out', 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);'],
  ['ease-in-out', 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);'],
  ['ease-initial', 'transition-timing-function: initial;'],
].concat(arb('ease', 'transition-timing-function')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`ease-out` (شروع سریع، پایان آرام) برای ورود عنصر مناسب است و `ease-in` (شروع آرام، پایان سریع) برای خروج. `ease-in-out` متعادل است:' },
  demo(wrap('<div class="group w-44 rounded bg-slate-200 p-1 dark:bg-slate-700"><div class="size-6 rounded bg-sky-500 transition duration-700 ease-linear group-hover:translate-x-32"></div><p class="mt-1 text-xs">ease-linear (hover)</p></div><div class="group w-44 rounded bg-slate-200 p-1 dark:bg-slate-700"><div class="size-6 rounded bg-pink-500 transition duration-700 ease-in group-hover:translate-x-32"></div><p class="mt-1 text-xs">ease-in (hover)</p></div>'), '<button class="transition duration-300 ease-in ...">...</button>\n<button class="transition duration-300 ease-out ...">...</button>\n<button class="transition duration-300 ease-in-out ...">...</button>'),
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'code', text: '@theme {\n  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);\n  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);\n}', file: 'CSS' },
], 'ease-out')

C['transition-delay'] = page('transition-delay', 'کلاس‌هایی برای تعیین تأخیر قبل از شروع transition.', [
  ['delay-<number>', 'transition-delay: <number>ms;'],
].concat(arb('delay', 'transition-delay')), [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<button class="rounded-md bg-sky-500 px-3 py-2 text-xs text-white transition delay-0 hover:bg-pink-500">0</button><button class="rounded-md bg-sky-500 px-3 py-2 text-xs text-white transition delay-300 hover:bg-pink-500">300</button><button class="rounded-md bg-sky-500 px-3 py-2 text-xs text-white transition delay-700 hover:bg-pink-500">700</button>'), '<button class="transition delay-150 duration-300 ease-in-out ...">Button A</button>\n<button class="transition delay-300 duration-300 ease-in-out ...">Button B</button>'),
  { t: 'p', text: 'برای ساخت ورود پله‌ای چند عنصر (stagger) از تأخیرهای افزایشی استفاده کن.' },
], 'delay-150')

C['animation'] = page('animation', 'کلاس‌هایی برای انیمیشن‌های CSS آماده.', [
  ['animate-spin', 'animation: spin 1s linear infinite; /* rotate 0 → 360deg */'],
  ['animate-ping', 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; /* scale(2) + opacity 0 */'],
  ['animate-pulse', 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; /* opacity 0.5 */'],
  ['animate-bounce', 'animation: bounce 1s infinite; /* پرش عمودی */'],
  ['animate-none', 'animation: none;'],
].concat(arb('animate', 'animation')), [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'h3', text: 'spin' },
  { t: 'p', text: 'برای نشانگر بارگذاری:' },
  demo(wrap('<svg class="size-8 animate-spin text-sky-500" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), '<button type="button" class="bg-indigo-500 ..." disabled>\n  <svg class="size-5 animate-spin ..." viewBox="0 0 24 24"><!-- ... --></svg>\n  Processing...\n</button>'),
  { t: 'h3', text: 'ping' },
  { t: 'p', text: 'برای نشانگر اعلان (دایره‌ای که پخش و محو می‌شود):' },
  demo(wrap('<span class="relative flex size-3"><span class="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span><span class="relative inline-flex size-3 rounded-full bg-sky-500"></span></span>'), '<span class="relative flex size-3">\n  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>\n  <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>\n</span>'),
  { t: 'h3', text: 'pulse' },
  { t: 'p', text: 'برای اسکلت بارگذاری (skeleton):' },
  demo('<div class="w-56 animate-pulse space-y-3"><div class="h-3 rounded bg-slate-300 dark:bg-slate-600"></div><div class="h-3 w-4/5 rounded bg-slate-300 dark:bg-slate-600"></div><div class="h-3 w-3/5 rounded bg-slate-300 dark:bg-slate-600"></div></div>', '<div class="animate-pulse space-y-3">\n  <div class="h-3 rounded bg-gray-200"></div>\n  <div class="h-3 w-4/5 rounded bg-gray-200"></div>\n</div>'),
  { t: 'h3', text: 'bounce' },
  demo(wrap('<div class="flex size-10 animate-bounce items-center justify-center rounded-full bg-sky-500 text-white">↓</div>'), '<svg class="size-6 animate-bounce ..." viewBox="0 0 24 24"><!-- ... --></svg>'),
  { t: 'h3', text: 'احترام به ترجیح کاربر' },
  { t: 'p', text: 'برای کاربرانی که حرکت کمتر را انتخاب کرده‌اند، انیمیشن را فقط وقتی اجرا کن که مجاز باشد:' },
  { t: 'code', text: '<button type="button" class="motion-safe:animate-spin ...">...</button>', file: 'HTML' },
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'p', text: 'انیمیشن و keyframe هایش را داخل `@theme` تعریف کن:' },
  { t: 'code', text: '@theme {\n  --animate-wiggle: wiggle 1s ease-in-out infinite;\n\n  @keyframes wiggle {\n    0%, 100% {\n      transform: rotate(-3deg);\n    }\n    50% {\n      transform: rotate(3deg);\n    }\n  }\n}', file: 'CSS' },
  { t: 'p', text: 'حالا `animate-wiggle` در دسترس است.' },
], 'animate-spin')

/* ================= Transforms ================= */
C['backface-visibility'] = page('backface-visibility', 'کلاس‌هایی برای تعیین اینکه پشت عنصر وقتی در سه‌بعدی برگردانده می‌شود دیده شود یا نه.', [
  ['backface-hidden', 'backface-visibility: hidden;'],
  ['backface-visible', 'backface-visibility: visible;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'برای ساخت کارت چرخان که دو رو دارد، رو و پشت را با `backface-hidden` جدا می‌کنی:' },
  { t: 'code', text: '<div class="perspective-distant">\n  <div class="transform-3d transition duration-500 hover:rotate-y-180">\n    <div class="backface-hidden ...">رو</div>\n    <div class="backface-hidden rotate-y-180 ...">پشت</div>\n  </div>\n</div>', file: 'HTML' },
], 'backface-hidden')

C['perspective'] = page('perspective', 'کلاس‌هایی برای تعیین فاصله‌ی دید از صفحه‌ی z، یعنی شدت اثر سه‌بعدی روی فرزندان.', [
  ['perspective-dramatic', 'perspective: 100px;'],
  ['perspective-near', 'perspective: 300px;'],
  ['perspective-normal', 'perspective: 500px;'],
  ['perspective-midrange', 'perspective: 800px;'],
  ['perspective-distant', 'perspective: 1200px;'],
  ['perspective-none', 'perspective: none;'],
].concat(arb('perspective', 'perspective')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'مقدار کمتر یعنی نزدیک‌تر بودن ناظر و اعوجاج بیشتر. این کلاس روی **والد** گذاشته می‌شود و روی چرخش‌های سه‌بعدی فرزندان اثر می‌گذارد:' },
  demo(wrap('<div class="perspective-near"><div class="size-24 rotate-x-45 rotate-y-12 transform-3d rounded-lg bg-sky-500"></div></div><div class="perspective-distant"><div class="size-24 rotate-x-45 rotate-y-12 transform-3d rounded-lg bg-pink-500"></div></div>'), '<div class="perspective-near">\n  <div class="translate-z-12 rotate-x-18 rotate-y-6 ...">...</div>\n</div>'),
], 'perspective-near')

C['perspective-origin'] = page('perspective-origin', 'کلاس‌هایی برای تعیین نقطه‌ی دید ناظر در perspective.', [
  ['perspective-origin-center', 'perspective-origin: center;'],
  ['perspective-origin-top', 'perspective-origin: top;'],
  ['perspective-origin-top-right', 'perspective-origin: top right;'],
  ['perspective-origin-right', 'perspective-origin: right;'],
  ['perspective-origin-bottom-right', 'perspective-origin: bottom right;'],
  ['perspective-origin-bottom', 'perspective-origin: bottom;'],
  ['perspective-origin-bottom-left', 'perspective-origin: bottom left;'],
  ['perspective-origin-left', 'perspective-origin: left;'],
  ['perspective-origin-top-left', 'perspective-origin: top left;'],
].concat(arb('perspective-origin', 'perspective-origin')), [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="perspective-near perspective-origin-top-left">\n  <div class="rotate-x-45 transform-3d ...">...</div>\n</div>', file: 'HTML' },
], 'perspective-origin-top')

C['rotate'] = page('rotate', 'کلاس‌هایی برای چرخاندن عنصر.', [
  ['rotate-<number>', 'rotate: <number>deg;'],
  ['-rotate-<number>', 'rotate: calc(<number>deg * -1);'],
  ['rotate-none', 'rotate: none;'],
  ['rotate-x-<number>', 'transform: rotateX(<number>deg) ...;'],
  ['rotate-y-<number>', 'transform: rotateY(<number>deg) ...;'],
  ['rotate-z-<number>', 'transform: rotateZ(<number>deg) ...;'],
].concat(arb('rotate', 'rotate')), [
  { t: 'h2', text: 'مثال‌ها' },
  demo(wrap(ex('rotate-0') + ex('rotate-45') + ex('rotate-90') + ex('-rotate-45')), '<img class="rotate-45 ..." src="..." />\n<img class="rotate-90 ..." src="..." />\n<img class="-rotate-45 ..." src="..." />'),
  { t: 'h3', text: 'چرخش حول محورها' },
  { t: 'p', text: '`rotate-x-*` و `rotate-y-*` عنصر را در فضای سه‌بعدی می‌چرخاند. برای دیده شدن عمق، به `perspective-*` روی والد و `transform-3d` نیاز داری:' },
  demo(wrap('<div class="perspective-distant"><div class="rotate-x-50 rotate-z-30 transform-3d size-16 rounded-lg bg-sky-500"></div></div>'), '<div class="perspective-distant">\n  <img class="rotate-x-50 rotate-z-45 ..." src="..." />\n</div>'),
  { t: 'h3', text: 'با hover' },
  { t: 'code', text: '<button class="transition hover:rotate-6 ...">...</button>', file: 'HTML' },
], 'rotate-45')

C['scale'] = page('scale', 'کلاس‌هایی برای بزرگ و کوچک کردن عنصر.', [
  ['scale-<number>', 'scale: <number>% <number>%;'],
  ['-scale-<number>', 'scale: calc(<number>% * -1) calc(<number>% * -1);'],
  ['scale-x-<number>', 'scale: <number>% var(--tw-scale-y);'],
  ['scale-y-<number>', 'scale: var(--tw-scale-x) <number>%;'],
  ['scale-z-<number>', 'scale در محور z'],
  ['scale-3d', 'scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);'],
  ['scale-none', 'scale: none;'],
].concat(arb('scale', 'scale')), [
  { t: 'h2', text: 'مثال‌ها' },
  demo(wrap(ex('scale-75') + ex('scale-100') + ex('scale-125') + ex('-scale-x-100')), '<img class="scale-75 ..." src="..." />\n<img class="scale-100 ..." src="..." />\n<img class="scale-125 ..." src="..." />'),
  { t: 'p', text: '`scale-100` اندازه‌ی اصلی است. `scale-x-*` و `scale-y-*` فقط یک محور را مقیاس می‌دهند. با `-scale-x-100` عنصر در راستای افقی آینه می‌شود. مثلاً برای آیکون فلش در RTL.' },
  { t: 'h3', text: 'با hover' },
  demo(wrap('<button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white transition duration-200 hover:scale-110">hover</button>'), '<button class="transition hover:scale-110 ...">...</button>'),
], 'scale-110')

C['skew'] = page('skew', 'کلاس‌هایی برای کج کردن (skew) عنصر.', [
  ['skew-<number>', 'transform: skewX(<number>deg) skewY(<number>deg);'],
  ['-skew-<number>', 'transform: skewX(calc(<number>deg * -1)) skewY(...);'],
  ['skew-x-<number>', 'transform: skewX(<number>deg);'],
  ['-skew-x-<number>', 'transform: skewX(calc(<number>deg * -1));'],
  ['skew-y-<number>', 'transform: skewY(<number>deg);'],
  ['-skew-y-<number>', 'transform: skewY(calc(<number>deg * -1));'],
].concat(arb('skew', 'transform')), [
  { t: 'h2', text: 'مثال' },
  demo(wrap(ex('skew-x-0') + ex('skew-x-12') + ex('-skew-x-12') + ex('skew-y-6')), '<img class="skew-3 ..." src="..." />\n<img class="skew-6 ..." src="..." />\n<img class="skew-12 ..." src="..." />'),
], 'skew-6')

C['transform'] = page('transform', 'کلاس‌هایی برای اعمال، حذف یا تنظیم نحوه‌ی اجرای transform روی عنصر.', [
  ['transform-none', 'transform: none;'],
  ['transform-gpu', 'transform: translateZ(0) var(--tw-rotate-x, ) ...; /* اجرا روی GPU */'],
  ['transform-cpu', 'transform: var(--tw-rotate-x, ) ...; /* اجرا روی CPU */'],
].concat(arb('transform', 'transform')), [
  { t: 'h2', text: 'مقدمه' },
  { t: 'p', text: 'در Tailwind ۴ لازم نیست `transform` را جداگانه فعال کنی. هر کلاس مثل `rotate-*`، `scale-*`، `translate-*` و `skew-*` به‌تنهایی کار می‌کند و با هم ترکیب می‌شوند. `transform-gpu` فقط وقتی لازم است که بخواهی انیمیشن را روی GPU اجرا کنی تا نرم‌تر شود.' },
  { t: 'code', text: '<div class="rotate-45 scale-110 translate-x-4 ...">...</div>\n<div class="transform-gpu ...">...</div>\n<div class="transform-none md:rotate-45 ...">...</div>', file: 'HTML' },
  { t: 'h3', text: 'مقدار دلخواه' },
  { t: 'code', text: '<div class="transform-[matrix(1,2,3,4,5,6)] ...">...</div>', file: 'HTML' },
], 'transform-gpu')

C['transform-origin'] = page('transform-origin', 'کلاس‌هایی برای تعیین نقطه‌ی مرجع transform (محل چرخش یا مقیاس).', [
  ['origin-center', 'transform-origin: center;'],
  ['origin-top', 'transform-origin: top;'],
  ['origin-top-right', 'transform-origin: top right;'],
  ['origin-right', 'transform-origin: right;'],
  ['origin-bottom-right', 'transform-origin: bottom right;'],
  ['origin-bottom', 'transform-origin: bottom;'],
  ['origin-bottom-left', 'transform-origin: bottom left;'],
  ['origin-left', 'transform-origin: left;'],
  ['origin-top-left', 'transform-origin: top left;'],
].concat(arb('origin', 'transform-origin')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'عنصر حول مرکز می‌چرخد (پیش‌فرض). با `origin-top-left` حول گوشه‌ی بالا-چپ می‌چرخد:' },
  demo(wrap('<div class="size-20 rounded bg-slate-200 dark:bg-slate-700">' + sq('origin-center rotate-45', 'center') + '</div><div class="size-20 rounded bg-slate-200 dark:bg-slate-700">' + sq('origin-top-left rotate-45', 'top-left') + '</div>'), '<img class="origin-center rotate-45 ..." src="..." />\n<img class="origin-top-left rotate-12 ..." src="..." />'),
], 'origin-top-left')

C['transform-style'] = page('transform-style', 'کلاس‌هایی برای تعیین اینکه فرزندان در فضای سه‌بعدی نمایش داده شوند یا روی یک صفحه‌ی تخت.', [
  ['transform-3d', 'transform-style: preserve-3d;'],
  ['transform-flat', 'transform-style: flat;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`transform-3d` به فرزندان اجازه می‌دهد موقعیت سه‌بعدی داشته باشند (مثلاً وجه‌های یک مکعب). `transform-flat` (پیش‌فرض) آن‌ها را روی صفحه‌ی والد تخت می‌کند:' },
  { t: 'code', text: '<div class="size-20 transform-3d rotate-x-45 rotate-z-45 ...">\n  <div class="translate-z-12 ...">1</div>\n  <div class="-translate-z-12 ...">2</div>\n</div>', file: 'HTML' },
], 'transform-3d')

C['translate'] = page('translate', 'کلاس‌هایی برای جابه‌جا کردن عنصر (بدون تأثیر روی layout).', [
  ['translate-<number>', 'translate: calc(var(--spacing) * <number>) calc(var(--spacing) * <number>);'],
  ['-translate-<number>', 'جابه‌جایی منفی'],
  ['translate-<fraction>', 'translate: calc(<fraction> * 100%) calc(<fraction> * 100%);'],
  ['translate-full', 'translate: 100% 100%;'],
  ['-translate-full', 'translate: -100% -100%;'],
  ['translate-px', 'translate: 1px 1px;'],
  ['translate-x-<number>', 'translate: <number> var(--tw-translate-y);'],
  ['translate-y-<number>', 'translate: var(--tw-translate-x) <number>;'],
  ['translate-z-<number>', 'جابه‌جایی در محور z (برای سه‌بعدی)'],
  ['translate-none', 'translate: none;'],
].concat(arb('translate', 'translate')), [
  { t: 'h2', text: 'مثال‌ها' },
  demo(wrap('<div class="size-20 rounded bg-slate-200 dark:bg-slate-700">' + sq('translate-x-4 translate-y-2', 'x-4 y-2') + '</div><div class="size-20 rounded bg-slate-200 dark:bg-slate-700">' + sq('-translate-y-3', '-y-3') + '</div>'), '<img class="translate-x-6 ..." src="..." />\n<img class="-translate-y-3 ..." src="..." />'),
  { t: 'h3', text: 'وسط‌چین مطلق' },
  { t: 'p', text: 'الگوی کلاسیک: عنصر `absolute` را با `top-1/2 left-1/2` به مرکز می‌بری و با `-translate-1/2` خودش را نصف اندازه‌اش برمی‌گردانی:' },
  { t: 'code', text: '<div class="relative size-32">\n  <div class="absolute top-1/2 left-1/2 -translate-1/2 ...">وسط</div>\n</div>', file: 'HTML' },
  { t: 'note', text: 'در RTL، `translate-x-*` جهت فیزیکی است (راست مثبت). برای تغییر جهت خودکار در RTL از `rtl:-translate-x-*` استفاده کن.' },
], 'translate-x-4')

C['zoom'] = page('zoom', 'کلاس‌هایی برای بزرگ‌نمایی یا کوچک‌نمایی عنصر با ویژگی `zoom` که برخلاف `scale` روی layout هم اثر می‌گذارد.', [
  ['zoom-<number>', 'zoom: <number>%;'],
  ['zoom-(<custom-property>)', 'zoom: var(<custom-property>);'],
  ['zoom-[<value>]', 'zoom: <value>;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'برخلاف `scale-*` که فقط ظاهر را بزرگ می‌کند و فضای layout عوض نمی‌شود، `zoom` اندازه‌ی واقعی عنصر را در layout عوض می‌کند و بقیه‌ی عنصرها جابه‌جا می‌شوند:' },
  { t: 'code', text: '<div class="zoom-150 ...">...</div>\n<div class="zoom-[1.5] ...">...</div>', file: 'HTML' },
  { t: 'note', text: 'این utility نسبتاً جدید است. من نام دقیق آن را از حافظه نوشتم و آن را با سایت اصلی تطبیق نداده‌ام. اگر در نسخه‌ی شما کار نکرد، از مقدار دلخواه `[zoom:150%]` استفاده کن.' },
], 'zoom-150')

/* ================= SVG ================= */
C['fill'] = page('fill', 'کلاس‌هایی برای تعیین رنگ داخل عنصرهای SVG.', [
  ['fill-none', 'fill: none;'],
  ['fill-inherit', 'fill: inherit;'],
  ['fill-current', 'fill: currentColor;'],
  ['fill-transparent', 'fill: transparent;'],
  ['fill-black / fill-white', 'fill: var(--color-black / white);'],
  ['fill-<color>-<shade>', 'fill: var(--color-<color>-<shade>);'],
].concat(arb('fill', 'fill')), [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<svg viewBox="0 0 24 24" class="size-10 fill-sky-500"><circle cx="12" cy="12" r="10"/></svg><svg viewBox="0 0 24 24" class="size-10 fill-pink-500"><rect x="3" y="3" width="18" height="18" rx="3"/></svg><svg viewBox="0 0 24 24" class="size-10 fill-current text-indigo-500"><polygon points="12,2 22,22 2,22"/></svg>'), '<svg class="fill-blue-500 ...">...</svg>\n<svg class="fill-current text-indigo-500 ...">...</svg>'),
  { t: 'p', text: '`fill-current` از رنگ متن (`text-*`) استفاده می‌کند و برای آیکون‌هایی که باید با متن هم‌رنگ شوند ایده‌آل است.' },
], 'fill-sky-500')

C['stroke'] = page('stroke', 'کلاس‌هایی برای تعیین رنگ خط دور عنصرهای SVG.', [
  ['stroke-none', 'stroke: none;'],
  ['stroke-inherit', 'stroke: inherit;'],
  ['stroke-current', 'stroke: currentColor;'],
  ['stroke-transparent', 'stroke: transparent;'],
  ['stroke-black / stroke-white', 'stroke: var(--color-black / white);'],
  ['stroke-<color>-<shade>', 'stroke: var(--color-<color>-<shade>);'],
].concat(arb('stroke', 'stroke')), [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<svg viewBox="0 0 24 24" class="size-10 fill-none stroke-sky-500 stroke-2"><circle cx="12" cy="12" r="9"/></svg><svg viewBox="0 0 24 24" class="size-10 fill-none stroke-pink-500 stroke-2"><rect x="4" y="4" width="16" height="16" rx="3"/></svg><svg viewBox="0 0 24 24" class="size-10 fill-none stroke-current stroke-2 text-indigo-500"><polygon points="12,3 21,21 3,21"/></svg>'), '<svg class="stroke-cyan-500 stroke-2 fill-none ...">...</svg>'),
], 'stroke-sky-500')

C['stroke-width'] = page('stroke-width', 'کلاس‌هایی برای تعیین ضخامت خط دور عنصرهای SVG.', [
  ['stroke-<number>', 'stroke-width: <number>;'],
  ['stroke-(length:<custom-property>)', 'stroke-width: var(<custom-property>);'],
  ['stroke-[<value>]', 'stroke-width: <value>;'],
], [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<svg viewBox="0 0 24 24" class="size-10 fill-none stroke-sky-500 stroke-1"><circle cx="12" cy="12" r="9"/></svg><svg viewBox="0 0 24 24" class="size-10 fill-none stroke-sky-500 stroke-2"><circle cx="12" cy="12" r="9"/></svg><svg viewBox="0 0 24 24" class="size-10 fill-none stroke-sky-500 stroke-[3]"><circle cx="12" cy="12" r="9"/></svg>'), '<svg class="stroke-1 ...">...</svg>\n<svg class="stroke-2 ...">...</svg>'),
  { t: 'note', text: 'چون `stroke-*` هم برای رنگ است و هم ضخامت، Tailwind از روی مقدار تشخیص می‌دهد: عدد = ضخامت و رنگ = رنگ. برای متغیر CSS ضخامت، `stroke-(length:--my-width)` بنویس.' },
], 'stroke-2')

/* ================= Accessibility ================= */
C['forced-color-adjust'] = page('forced-color-adjust', 'کلاس‌هایی برای کنترل اینکه مرورگر در حالت forced colors (مثل Windows High Contrast) رنگ‌های عنصر را عوض کند یا نه.', [
  ['forced-color-adjust-auto', 'forced-color-adjust: auto;'],
  ['forced-color-adjust-none', 'forced-color-adjust: none;'],
], [
  { t: 'h2', text: 'مقدمه' },
  { t: 'p', text: 'کاربرانی که حالت forced colors (رنگ‌های اجباری سیستم‌عامل برای افزایش خوانایی) را روشن می‌کنند، رنگ‌های سایت را نمی‌بینند و مرورگر پالت سیستمی خودش را اعمال می‌کند. `forced-color-adjust-auto` (پیش‌فرض) همین رفتار را نگه می‌دارد.' },
  { t: 'h2', text: 'خاموش کردن برای موارد خاص' },
  { t: 'p', text: 'گاهی رنگ خودِ عنصر معنا دارد (مثل انتخاب‌گر رنگ). در این حالت `forced-color-adjust-none` بگذار تا رنگ‌های خودت حفظ شود. ولی با احتیاط، چون ممکن است خوانایی را برای آن کاربران کم کند:' },
  { t: 'code', text: '<form>\n  <fieldset class="forced-color-adjust-none ...">\n    <legend>رنگ را انتخاب کن</legend>\n    <!-- ... -->\n  </fieldset>\n</form>', file: 'HTML' },
  { t: 'h3', text: 'همراه variant ‌ی forced-colors' },
  { t: 'p', text: 'برای استایل مخصوص همین حالت، از `forced-colors:` استفاده کن:' },
  { t: 'code', text: '<div class="forced-color-adjust-none forced-colors:bg-[Canvas] ...">...</div>', file: 'HTML' },
  { t: 'h2', text: 'سایر ابزارهای دسترس‌پذیری' },
  { t: 'p', text: 'کلاس‌های `sr-only` و `not-sr-only` (برای مخفی کردن متن فقط از دید بصری) در صفحه‌ی «display» توضیح داده شده‌اند. variant های `motion-reduce:`، `contrast-more:` و `forced-colors:` هم در صفحه‌ی «حالت‌های hover، focus و غیره» هستند.' },
], 'forced-color-adjust-none')
