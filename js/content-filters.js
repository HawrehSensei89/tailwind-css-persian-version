// Filters — ۲۰ صفحه
var C = window.CONTENT
var demo = function (html, code) { return { t: 'demo', html: html, code: code } }
var tbl = function (rows) { return { t: 'table', rows: rows } }
var rep = function (cls) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + cls + '` یا `md:' + cls + '`.' }
}
var arb = function (p, css) {
  return [[p + '-(<custom-property>)', css + ': var(<custom-property>);'], [p + '-[<value>]', css + ': <value>;']]
}
// تصویر نمونه (گرادیان رنگی با شکل) برای دیدن اثر فیلتر
var sample = function (cls, w) {
  return '<div class="relative h-20 ' + (w || 'w-28') + ' overflow-hidden rounded-lg ' + cls + '" style="background:linear-gradient(135deg,#38bdf8,#6366f1 50%,#ec4899);"><div class="absolute left-3 top-3 size-6 rounded-full bg-yellow-300"></div><div class="absolute bottom-0 left-0 right-0 h-6 bg-emerald-500"></div></div>'
}
var samples = function (classes) {
  return '<div class="flex flex-wrap gap-3">' + classes.map(function (c) { return '<div class="text-center text-xs">' + sample(c) + '<div class="mt-1">' + (c || 'بدون فیلتر') + '</div></div>' }).join('') + '</div>'
}
// بک‌دراپ: عکس پشت + کارت شیشه‌ای
var glass = function (cls) {
  return '<div class="relative h-24 w-40 overflow-hidden rounded-lg" style="background:linear-gradient(135deg,#38bdf8,#6366f1 50%,#ec4899);"><div class="absolute left-4 top-3 size-8 rounded-full bg-yellow-300"></div><div class="absolute bottom-3 right-3 size-10 rounded-sm bg-emerald-400"></div><div class="absolute inset-x-6 inset-y-5 flex items-center justify-center rounded-lg text-xs font-semibold text-white ' + cls + '">' + cls + '</div></div>'
}
var glasses = function (classes) {
  return '<div class="flex flex-wrap gap-3">' + classes.map(glass).join('') + '</div>'
}
var page = function (heading, lead, rows, body, repCls) {
  return { heading: heading, lead: lead, blocks: [tbl(rows)].concat(body || []).concat(repCls ? [rep(repCls)] : []) }
}

/* ============ filter ============ */
C['filter'] = page('filter', 'کلاس‌هایی برای اعمال فیلترهای گرافیکی روی یک عنصر. هر فیلتر یک utility جداگانه دارد و با هم ترکیب می‌شوند.', [
  ['filter-none', 'filter: none;'],
  ['filter-(<custom-property>)', 'filter: var(<custom-property>);'],
  ['filter-[<value>]', 'filter: <value>;'],
], [
  { t: 'h2', text: 'مقدمه' },
  { t: 'p', text: 'در Tailwind ۴ لازم نیست `filter` را جداگانه فعال کنی. کافی است مستقیم `blur-sm`، `grayscale`، `brightness-125` و مشابه آن‌ها را بنویسی و چند فیلتر خودکار با هم ترکیب می‌شوند:' },
  demo(samples(['', 'blur-sm grayscale', 'sepia contrast-125 brightness-110']), '<img class="blur-sm grayscale ..." src="..." />\n<img class="sepia contrast-125 brightness-110 ..." src="..." />'),
  { t: 'h2', text: 'فیلترهای موجود' },
  { t: 'table', rows: [
    ['blur-*', 'محو کردن'],
    ['brightness-*', 'روشنایی'],
    ['contrast-*', 'کنتراست'],
    ['drop-shadow-*', 'سایه‌ی دنبال‌کننده‌ی شکل'],
    ['grayscale', 'خاکستری'],
    ['hue-rotate-*', 'چرخش رنگ‌مایه'],
    ['invert', 'معکوس کردن رنگ'],
    ['saturate-*', 'اشباع رنگ'],
    ['sepia', 'قهوه‌ای قدیمی'],
  ] },
  { t: 'h3', text: 'مقدار دلخواه و حذف فیلتر' },
  { t: 'code', text: '<div class="filter-[url(#my-filter)] ..."></div>\n<div class="filter-none ..."></div>', file: 'HTML' },
  { t: 'p', text: '`filter-none` همه‌ی فیلترها را حذف می‌کند، مثلاً در یک breakpoint بزرگ‌تر یا در حالت hover.' },
], 'filter-none')

// صفحه‌ی فیلتر عددی (درصدی) — مثل brightness, contrast, saturate
var pctPage = function (name, css, title, lead, sampleClass, values, note) {
  return page(title, lead, [
    [name + '-<number>', 'filter: ' + css + '(<number>%);'],
  ].concat(arb(name, 'filter: ' + css + '(...)').map(function (r) { return [r[0], 'filter: ' + css + '(...)'] })), [
    { t: 'h2', text: 'مثال' },
    demo(samples(values.map(function (v) { return name + '-' + v })), values.map(function (v) { return '<img class="' + name + '-' + v + ' ..." src="..." />' }).join('\n')),
    { t: 'p', text: note },
  ], name + '-' + values[1])
}
C['filter-brightness'] = pctPage('brightness', 'brightness', 'brightness', 'کلاس‌هایی برای تعیین روشنایی عنصر.', '', [50, 100, 150], '۱۰۰ یعنی بدون تغییر. عددهای کمتر تیره‌تر و بیشتر روشن‌تر می‌کند. هر عدد دلخواه (مثل `brightness-110`) کار می‌کند.')
C['filter-contrast'] = pctPage('contrast', 'contrast', 'contrast', 'کلاس‌هایی برای تعیین کنتراست عنصر.', '', [50, 100, 150], '۱۰۰ یعنی بدون تغییر. عددهای بیشتر تفاوت تیره و روشن را زیادتر می‌کند.')
C['filter-saturate'] = pctPage('saturate', 'saturate', 'saturate', 'کلاس‌هایی برای تعیین اشباع رنگ عنصر.', '', [0, 100, 200], '۰ تقریباً بی‌رنگ و ۲۰۰ رنگ‌های بسیار زنده می‌دهد.')

C['filter-blur'] = page('blur', 'کلاس‌هایی برای محو کردن عنصر.', [
  ['blur-xs', 'filter: blur(4px);'],
  ['blur-sm', 'filter: blur(8px);'],
  ['blur-md', 'filter: blur(12px);'],
  ['blur-lg', 'filter: blur(16px);'],
  ['blur-xl', 'filter: blur(24px);'],
  ['blur-2xl', 'filter: blur(40px);'],
  ['blur-3xl', 'filter: blur(64px);'],
  ['blur-none', 'filter: ;'],
].concat(arb('blur', 'filter')), [
  { t: 'h2', text: 'مثال' },
  demo(samples(['blur-xs', 'blur-sm', 'blur-md', 'blur-lg']), '<img class="blur-xs ..." src="..." />\n<img class="blur-sm ..." src="..." />\n<img class="blur-md ..." src="..." />'),
  { t: 'note', text: 'در نسخه‌ی ۴ نام‌ها یک پله جابه‌جا شده‌اند: `blur-sm` قدیمی حالا `blur-xs` و `blur` قدیمی حالا `blur-sm` است.' },
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'code', text: '@theme {\n  --blur-2xs: 2px;\n}', file: 'CSS' },
], 'blur-sm')

C['filter-drop-shadow'] = page('drop-shadow', 'کلاس‌هایی برای سایه‌ی دنبال‌کننده‌ی شکل واقعی عنصر (نه فقط کادر مستطیلی).', [
  ['drop-shadow-xs', 'filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));'],
  ['drop-shadow-sm', 'filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15));'],
  ['drop-shadow-md', 'filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12));'],
  ['drop-shadow-lg', 'filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15));'],
  ['drop-shadow-xl', 'filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1));'],
  ['drop-shadow-2xl', 'filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));'],
  ['drop-shadow-none', 'filter: drop-shadow(0 0 #0000);'],
  ['drop-shadow-<color>', 'رنگ سایه'],
].concat(arb('drop-shadow', 'filter')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'برخلاف `shadow-*` که دور کادر عنصر است، `drop-shadow-*` شکل دقیق محتوا را دنبال می‌کند و روی تصویر شفاف PNG و SVG عالی کار می‌کند:' },
  demo('<div class="flex gap-6 p-4"><div class="size-16 rounded-full bg-sky-500 drop-shadow-md"></div><div class="size-16 rounded-full bg-sky-500 drop-shadow-xl"></div><div class="size-16 rounded-full bg-pink-500 drop-shadow-xl drop-shadow-pink-500/50"></div></div>', '<svg class="drop-shadow-md ..."><!-- ... --></svg>\n<svg class="drop-shadow-xl drop-shadow-cyan-500/50 ..."><!-- ... --></svg>'),
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'code', text: '@theme {\n  --drop-shadow-3xl: 0 35px 35px rgb(0 0 0 / 0.25);\n}', file: 'CSS' },
], 'drop-shadow-lg')

C['filter-grayscale'] = page('grayscale', 'کلاس‌هایی برای تبدیل عنصر به سیاه و سفید.', [
  ['grayscale', 'filter: grayscale(100%);'],
  ['grayscale-<number>', 'filter: grayscale(<number>%);'],
].concat(arb('grayscale', 'filter')), [
  { t: 'h2', text: 'مثال' },
  demo(samples(['grayscale-0', 'grayscale-50', 'grayscale']), '<img class="grayscale-0 ..." src="..." />\n<img class="grayscale-50 ..." src="..." />\n<img class="grayscale ..." src="..." />'),
  { t: 'p', text: 'الگوی رایج: `grayscale hover:grayscale-0` تا تصویر با رفتن موس رنگی شود.' },
], 'grayscale')

C['filter-hue-rotate'] = page('hue-rotate', 'کلاس‌هایی برای چرخاندن رنگ‌مایه‌ی (hue) عنصر.', [
  ['hue-rotate-<number>', 'filter: hue-rotate(<number>deg);'],
  ['-hue-rotate-<number>', 'filter: hue-rotate(calc(<number>deg * -1));'],
].concat(arb('hue-rotate', 'filter')), [
  { t: 'h2', text: 'مثال' },
  demo(samples(['hue-rotate-0', 'hue-rotate-90', 'hue-rotate-180']), '<img class="hue-rotate-15 ..." src="..." />\n<img class="hue-rotate-90 ..." src="..." />\n<img class="hue-rotate-180 ..." src="..." />'),
], 'hue-rotate-90')

C['filter-invert'] = page('invert', 'کلاس‌هایی برای معکوس کردن رنگ‌های عنصر.', [
  ['invert', 'filter: invert(100%);'],
  ['invert-<number>', 'filter: invert(<number>%);'],
].concat(arb('invert', 'filter')), [
  { t: 'h2', text: 'مثال' },
  demo(samples(['invert-0', 'invert-50', 'invert']), '<img class="invert-0 ..." src="..." />\n<img class="invert-50 ..." src="..." />\n<img class="invert ..." src="..." />'),
  { t: 'p', text: 'برای آیکون‌های سیاه که باید در حالت تاریک سفید شوند: `dark:invert`.' },
], 'invert')

C['filter-sepia'] = page('sepia', 'کلاس‌هایی برای افکت قهوه‌ای قدیمی روی عنصر.', [
  ['sepia', 'filter: sepia(100%);'],
  ['sepia-<number>', 'filter: sepia(<number>%);'],
].concat(arb('sepia', 'filter')), [
  { t: 'h2', text: 'مثال' },
  demo(samples(['sepia-0', 'sepia-50', 'sepia']), '<img class="sepia-0 ..." src="..." />\n<img class="sepia-50 ..." src="..." />\n<img class="sepia ..." src="..." />'),
], 'sepia')

/* ============ backdrop-filter ============ */
C['backdrop-filter'] = page('backdrop-filter', 'کلاس‌هایی برای اعمال فیلتر روی **پشت** عنصر، یعنی هر چیزی که پشت عنصر دیده می‌شود. مثل حالت «شیشه‌ی مات».', [
  ['backdrop-filter-none', 'backdrop-filter: none;'],
  ['backdrop-filter-(<custom-property>)', 'backdrop-filter: var(<custom-property>);'],
  ['backdrop-filter-[<value>]', 'backdrop-filter: <value>;'],
], [
  { t: 'h2', text: 'مقدمه' },
  { t: 'p', text: 'مثل `filter`، لازم نیست جداگانه فعال شود. کافی است `backdrop-blur-*`، `backdrop-brightness-*` و مشابه آن‌ها را بنویسی. حتماً عنصر باید پس‌زمینه‌ی نیمه‌شفاف داشته باشد (مثل `bg-white/30`) تا اثر دیده شود:' },
  demo(glasses(['bg-white/20 backdrop-blur-md']), '<div class="bg-white/30 backdrop-blur-md backdrop-saturate-150 ...">...</div>'),
  { t: 'h2', text: 'فیلترهای موجود' },
  { t: 'table', rows: [
    ['backdrop-blur-*', 'محو کردن پشت'],
    ['backdrop-brightness-*', 'روشنایی پشت'],
    ['backdrop-contrast-*', 'کنتراست پشت'],
    ['backdrop-grayscale', 'خاکستری کردن پشت'],
    ['backdrop-hue-rotate-*', 'چرخش رنگ‌مایه‌ی پشت'],
    ['backdrop-invert', 'معکوس کردن رنگ پشت'],
    ['backdrop-opacity-*', 'شفافیت پشت'],
    ['backdrop-saturate-*', 'اشباع رنگ پشت'],
    ['backdrop-sepia', 'قهوه‌ای کردن پشت'],
  ] },
], 'backdrop-blur-md')

var bdPct = function (name, css, title, lead, values, note) {
  return page(title, lead, [[name + '-<number>', 'backdrop-filter: ' + css + '(<number>%);']].concat(arb(name, 'backdrop-filter').map(function (r) { return [r[0], 'backdrop-filter: ' + css + '(...)'] })), [
    { t: 'h2', text: 'مثال' },
    demo(glasses(values.map(function (v) { return 'bg-white/20 ' + name + '-' + v })), values.map(function (v) { return '<div class="' + name + '-' + v + ' bg-white/30 ...">...</div>' }).join('\n')),
    { t: 'p', text: note },
  ], name + '-' + values[1])
}
var bdFlag = function (name, css, title, lead) {
  return page(title, lead, [[name, 'backdrop-filter: ' + css + '(100%);'], [name + '-<number>', 'backdrop-filter: ' + css + '(<number>%);']].concat(arb(name, 'backdrop-filter').map(function (r) { return [r[0], 'backdrop-filter: ' + css + '(...)'] })), [
    { t: 'h2', text: 'مثال' },
    demo(glasses(['bg-white/20 ' + name + '-0', 'bg-white/20 ' + name]), '<div class="' + name + '-0 bg-white/30 ...">...</div>\n<div class="' + name + ' bg-white/30 ...">...</div>'),
  ], name)
}

C['backdrop-filter-blur'] = page('backdrop-blur', 'کلاس‌هایی برای محو کردن چیزهایی که پشت عنصر دیده می‌شوند.', [
  ['backdrop-blur-xs', 'backdrop-filter: blur(4px);'],
  ['backdrop-blur-sm', 'backdrop-filter: blur(8px);'],
  ['backdrop-blur-md', 'backdrop-filter: blur(12px);'],
  ['backdrop-blur-lg', 'backdrop-filter: blur(16px);'],
  ['backdrop-blur-xl', 'backdrop-filter: blur(24px);'],
  ['backdrop-blur-2xl', 'backdrop-filter: blur(40px);'],
  ['backdrop-blur-3xl', 'backdrop-filter: blur(64px);'],
  ['backdrop-blur-none', 'backdrop-filter: ;'],
].concat(arb('backdrop-blur', 'backdrop-filter')), [
  { t: 'h2', text: 'مثال' },
  demo(glasses(['bg-white/20 backdrop-blur-xs', 'bg-white/20 backdrop-blur-md', 'bg-white/20 backdrop-blur-xl']), '<div class="bg-white/30 backdrop-blur-xs ...">...</div>\n<div class="bg-white/30 backdrop-blur-md ...">...</div>'),
  { t: 'p', text: 'پرکاربردترین استفاده: هدر چسبنده‌ای که محتوای زیرش با اسکرول محو دیده می‌شود، مثل `sticky top-0 bg-white/80 backdrop-blur`. (هدر همین پروژه هم همین را دارد.)' },
], 'backdrop-blur-md')

C['backdrop-filter-brightness'] = bdPct('backdrop-brightness', 'brightness', 'backdrop-brightness', 'کلاس‌هایی برای تعیین روشنایی چیزهای پشت عنصر.', [50, 100, 150], '۱۰۰ یعنی بدون تغییر.')
C['backdrop-filter-contrast'] = bdPct('backdrop-contrast', 'contrast', 'backdrop-contrast', 'کلاس‌هایی برای تعیین کنتراست چیزهای پشت عنصر.', [50, 100, 150], '۱۰۰ یعنی بدون تغییر.')
C['backdrop-filter-saturate'] = bdPct('backdrop-saturate', 'saturate', 'backdrop-saturate', 'کلاس‌هایی برای تعیین اشباع رنگ چیزهای پشت عنصر.', [0, 100, 200], '۰ تقریباً بی‌رنگ و ۲۰۰ رنگ‌های بسیار زنده می‌دهد.')
C['backdrop-filter-opacity'] = bdPct('backdrop-opacity', 'opacity', 'backdrop-opacity', 'کلاس‌هایی برای تعیین شفافیت چیزهای پشت عنصر.', [25, 50, 100], 'مقدار کمتر یعنی پشت کم‌رنگ‌تر دیده می‌شود.')
C['backdrop-filter-grayscale'] = bdFlag('backdrop-grayscale', 'grayscale', 'backdrop-grayscale', 'کلاس‌هایی برای خاکستری کردن چیزهای پشت عنصر.')
C['backdrop-filter-invert'] = bdFlag('backdrop-invert', 'invert', 'backdrop-invert', 'کلاس‌هایی برای معکوس کردن رنگ چیزهای پشت عنصر.')
C['backdrop-filter-sepia'] = bdFlag('backdrop-sepia', 'sepia', 'backdrop-sepia', 'کلاس‌هایی برای قهوه‌ای کردن چیزهای پشت عنصر.')
C['backdrop-filter-hue-rotate'] = page('backdrop-hue-rotate', 'کلاس‌هایی برای چرخاندن رنگ‌مایه‌ی چیزهای پشت عنصر.', [
  ['backdrop-hue-rotate-<number>', 'backdrop-filter: hue-rotate(<number>deg);'],
  ['-backdrop-hue-rotate-<number>', 'backdrop-filter: hue-rotate(calc(<number>deg * -1));'],
].concat(arb('backdrop-hue-rotate', 'backdrop-filter')), [
  { t: 'h2', text: 'مثال' },
  demo(glasses(['bg-white/20 backdrop-hue-rotate-0', 'bg-white/20 backdrop-hue-rotate-90', 'bg-white/20 backdrop-hue-rotate-180']), '<div class="backdrop-hue-rotate-90 bg-white/30 ...">...</div>'),
], 'backdrop-hue-rotate-90')
