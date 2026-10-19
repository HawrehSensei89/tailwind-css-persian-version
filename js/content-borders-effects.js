// Borders + Effects — ۲۲ صفحه
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
var card = function (cls, txt) { return '<div class="' + cls + ' flex size-20 items-center justify-center bg-sky-500 text-xs font-semibold text-white">' + (txt || '') + '</div>' }
var row = function () { return '<div class="flex flex-wrap gap-3">' + Array.prototype.join.call(arguments, '') + '</div>' }

/* ===================== Borders ===================== */
C['border-radius'] = page('border-radius', 'کلاس‌هایی برای گرد کردن گوشه‌های عنصر.', [
  ['rounded-xs', 'border-radius: var(--radius-xs); /* 0.125rem */'],
  ['rounded-sm', 'border-radius: var(--radius-sm); /* 0.25rem */'],
  ['rounded-md', 'border-radius: var(--radius-md); /* 0.375rem */'],
  ['rounded-lg', 'border-radius: var(--radius-lg); /* 0.5rem */'],
  ['rounded-xl', 'border-radius: var(--radius-xl); /* 0.75rem */'],
  ['rounded-2xl', 'border-radius: var(--radius-2xl); /* 1rem */'],
  ['rounded-3xl', 'border-radius: var(--radius-3xl); /* 1.5rem */'],
  ['rounded-4xl', 'border-radius: var(--radius-4xl); /* 2rem */'],
  ['rounded-none', 'border-radius: 0;'],
  ['rounded-full', 'border-radius: calc(infinity * 1px);'],
  ['rounded-s-* / rounded-e-*', 'گوشه‌های سمت شروع / پایان (منطقی)'],
  ['rounded-t-* / r / b / l', 'گوشه‌های بالا / راست / پایین / چپ'],
  ['rounded-ss / se / ee / es', 'گوشه‌ی منطقی منفرد (start-start، start-end، end-end، end-start)'],
  ['rounded-tl / tr / br / bl', 'گوشه‌ی فیزیکی منفرد'],
].concat(arb('rounded', 'border-radius')), [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'h3', text: 'اندازه‌ها' },
  demo(row(card('rounded-none', 'none'), card('rounded-sm', 'sm'), card('rounded-md', 'md'), card('rounded-lg', 'lg'), card('rounded-2xl', '2xl'), card('rounded-full', 'full')), '<div class="rounded-none ..."></div>\n<div class="rounded-sm ..."></div>\n<div class="rounded-md ..."></div>\n<div class="rounded-lg ..."></div>\n<div class="rounded-xl ..."></div>'),
  { t: 'h3', text: 'دایره و قرص' },
  { t: 'p', text: '`rounded-full` روی عنصر مربع دایره می‌سازد و روی مستطیل شکل قرص (pill):' },
  demo(row(card('rounded-full', ''), '<div class="flex h-10 w-28 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">pill</div>'), '<img class="size-24 rounded-full ..." src="..." />\n<button class="rounded-full px-4 py-2 ...">Save</button>'),
  { t: 'h3', text: 'گرد کردن یک سمت یا یک گوشه' },
  demo(row(card('rounded-t-xl', 'rounded-t-xl'), card('rounded-e-xl', 'rounded-e-xl'), card('rounded-tl-3xl', 'rounded-tl-3xl'), card('rounded-br-3xl', 'rounded-br-3xl')), '<div class="rounded-t-lg ..."></div>\n<div class="rounded-e-lg ..."></div>\n<div class="rounded-tl-lg ..."></div>'),
  { t: 'p', text: '`rounded-s-*` و `rounded-e-*` و گوشه‌های `rounded-ss/se/ee/es` منطقی‌اند و با RTL جابه‌جا می‌شوند. در فارسی `rounded-s-lg` گوشه‌های **راست** را گرد می‌کند.' },
  { t: 'note', text: 'در نسخه‌ی ۴، `rounded` به‌تنهایی دیگر مقیاس قدیمی را نمی‌دهد. به‌جایش `rounded-sm` (همان ۰.۲۵rem) و `rounded-xs` را به‌کار ببر.' },
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'code', text: '@theme {\n  --radius-5xl: 2.5rem;\n}', file: 'CSS' },
], 'rounded-lg')

C['border-width'] = page('border-width', 'کلاس‌هایی برای تعیین ضخامت border عنصر.', [
  ['border', 'border-width: 1px;'],
  ['border-<number>', 'border-width: <number>px;'],
  ['border-x / border-x-<number>', 'border-inline-width'],
  ['border-y / border-y-<number>', 'border-block-width'],
  ['border-s / border-s-<number>', 'border-inline-start-width'],
  ['border-e / border-e-<number>', 'border-inline-end-width'],
  ['border-t / border-t-<number>', 'border-top-width'],
  ['border-r / border-r-<number>', 'border-right-width'],
  ['border-b / border-b-<number>', 'border-bottom-width'],
  ['border-l / border-l-<number>', 'border-left-width'],
  ['divide-x / divide-x-<number>', 'border بین فرزندان در راستای افقی'],
  ['divide-y / divide-y-<number>', 'border بین فرزندان در راستای عمودی'],
  ['divide-x-reverse / divide-y-reverse', 'برای ترتیب معکوس (flex-row-reverse)'],
].concat(arb('border', 'border-width')), [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'h3', text: 'همه‌ی طرف‌ها' },
  demo(row(card('border-2 border-sky-700 bg-sky-100 text-sky-900', 'border-2'), card('border-4 border-sky-700 bg-sky-100 text-sky-900', 'border-4'), card('border-8 border-sky-700 bg-sky-100 text-sky-900', 'border-8')), '<div class="border border-indigo-600 ..."></div>\n<div class="border-2 border-indigo-600 ..."></div>\n<div class="border-4 border-indigo-600 ..."></div>'),
  { t: 'h3', text: 'یک طرف' },
  demo(row(card('border-t-4 border-sky-700 bg-sky-100 text-sky-900', 'border-t-4'), card('border-b-4 border-sky-700 bg-sky-100 text-sky-900', 'border-b-4'), card('border-s-4 border-sky-700 bg-sky-100 text-sky-900', 'border-s-4')), '<div class="border-t-4 border-indigo-500 ..."></div>\n<div class="border-b-4 ..."></div>\n<div class="border-s-4 ..."></div>'),
  { t: 'p', text: '`border-s-*` و `border-e-*` منطقی‌اند (در فارسی `border-s-4` سمت **راست** است). به‌ویژه برای نوار رنگی کنار کارت‌ها مفیدند.' },
  { t: 'h3', text: 'خط جداکننده بین فرزندان (divide)' },
  demo('<div class="w-48 divide-y divide-slate-300 overflow-hidden rounded-lg border border-slate-300 text-sm"><div class="p-2">01</div><div class="p-2">02</div><div class="p-2">03</div></div>', '<div class="grid grid-cols-3 divide-x-4 ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>\n\n<div class="flex flex-col divide-y ...">...</div>'),
  { t: 'note', text: 'یادت باشد در Tailwind ۴ رنگ پیش‌فرض border برابر `currentColor` است. حتماً رنگ را صریح بنویس، مثل `border-gray-200`.' },
], 'border-2')

C['border-color'] = page('border-color', 'کلاس‌هایی برای تعیین رنگ border عنصر.', [
  ['border-inherit', 'border-color: inherit;'],
  ['border-current', 'border-color: currentColor;'],
  ['border-transparent', 'border-color: transparent;'],
  ['border-black / border-white', 'border-color: var(--color-black / white);'],
  ['border-<color>-<shade>', 'border-color: var(--color-<color>-<shade>);'],
  ['border-x-<color> / border-y-<color>', 'رنگ دو طرف افقی / عمودی'],
  ['border-s-<color> / border-e-<color>', 'رنگ سمت شروع / پایان (منطقی)'],
  ['border-t-<color> / r / b / l', 'رنگ یک طرف'],
  ['divide-<color>', 'رنگ خطوط جداکننده بین فرزندان'],
].concat(arb('border', 'border-color')), [
  { t: 'h2', text: 'مثال‌ها' },
  demo(row(card('border-4 border-sky-500 bg-white text-sky-700', 'sky'), card('border-4 border-indigo-500 bg-white text-indigo-700', 'indigo'), card('border-4 border-pink-500 bg-white text-pink-700', 'pink')), '<input class="border-2 border-gray-300 focus:border-sky-500 ..." />'),
  { t: 'h3', text: 'شفافیت' },
  demo(row(card('border-4 border-sky-500/100 bg-white', ''), card('border-4 border-sky-500/50 bg-white', ''), card('border-4 border-sky-500/25 bg-white', '')), '<div class="border-4 border-sky-500/75 ..."></div>'),
  { t: 'h3', text: 'رنگ هر طرف' },
  { t: 'code', text: '<div class="border-4 border-indigo-500 border-t-pink-500 ..."></div>', file: 'HTML' },
], 'border-sky-500')

C['border-style'] = page('border-style', 'کلاس‌هایی برای تعیین سبک border عنصر.', [
  ['border-solid', 'border-style: solid;'],
  ['border-dashed', 'border-style: dashed;'],
  ['border-dotted', 'border-style: dotted;'],
  ['border-double', 'border-style: double;'],
  ['border-hidden', 'border-style: hidden;'],
  ['border-none', 'border-style: none;'],
  ['divide-solid / dashed / dotted / double / none', 'سبک خطوط جداکننده بین فرزندان'],
], [
  { t: 'h2', text: 'مثال' },
  demo(row(card('border-4 border-solid border-sky-600 bg-white text-sky-700', 'solid'), card('border-4 border-dashed border-sky-600 bg-white text-sky-700', 'dashed'), card('border-4 border-dotted border-sky-600 bg-white text-sky-700', 'dotted'), card('border-4 border-double border-sky-600 bg-white text-sky-700', 'double')), '<div class="border-2 border-dashed ..."></div>'),
  { t: 'p', text: 'چون Preflight همه‌ی border ها را `solid` می‌کند، لازم نیست `border-solid` بنویسی مگر برای برگرداندن سبک دیگر. `border-hidden` در جدول‌هایی که `border-collapse` دارند border را حذف می‌کند و اولویتش بالاتر از بقیه است.' },
], 'border-dashed')

C['outline-width'] = page('outline-width', 'کلاس‌هایی برای تعیین ضخامت outline عنصر.', [
  ['outline', 'outline-style: var(--tw-outline-style); outline-width: 1px;'],
  ['outline-<number>', 'outline-style: var(--tw-outline-style); outline-width: <number>px;'],
].concat(arb('outline', 'outline-width')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'outline مثل border فضا اشغال نمی‌کند و روی layout اثری ندارد. معمولاً برای حالت focus استفاده می‌شود:' },
  demo('<button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white outline-2 outline-offset-2 outline-sky-500">outline-2</button>', '<button class="outline outline-offset-2 outline-sky-500 ...">...</button>\n<button class="focus:outline-2 focus:outline-sky-500 ...">...</button>'),
], 'outline-2')

C['outline-color'] = page('outline-color', 'کلاس‌هایی برای تعیین رنگ outline عنصر.', [
  ['outline-inherit', 'outline-color: inherit;'],
  ['outline-current', 'outline-color: currentColor;'],
  ['outline-transparent', 'outline-color: transparent;'],
  ['outline-black / outline-white', 'outline-color: var(--color-black / white);'],
  ['outline-<color>-<shade>', 'outline-color: var(--color-<color>-<shade>);'],
].concat(arb('outline', 'outline-color')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="flex gap-4"><button class="rounded-md bg-white px-4 py-2 text-sm text-sky-700 outline-2 outline-sky-500">sky</button><button class="rounded-md bg-white px-4 py-2 text-sm text-pink-700 outline-2 outline-pink-500">pink</button></div>', '<button class="outline-2 outline-cyan-500 ...">...</button>\n<button class="outline-2 outline-pink-500 ...">...</button>'),
  { t: 'p', text: 'با `/` شفافیت هم می‌دهی: `outline-black/5` که برای کارت‌های سبک خیلی رایج است.' },
], 'outline-sky-500')

C['outline-style'] = page('outline-style', 'کلاس‌هایی برای تعیین سبک outline عنصر.', [
  ['outline-solid', 'outline-style: solid;'],
  ['outline-dashed', 'outline-style: dashed;'],
  ['outline-dotted', 'outline-style: dotted;'],
  ['outline-double', 'outline-style: double;'],
  ['outline-none', 'outline-style: none;'],
  ['outline-hidden', 'outline: 2px solid transparent; outline-offset: 2px; /* در حالت high contrast دیده می‌شود */'],
], [
  { t: 'h2', text: 'مثال' },
  demo('<div class="flex gap-4"><div class="flex size-20 items-center justify-center text-xs outline-2 outline-dashed outline-sky-500">dashed</div><div class="flex size-20 items-center justify-center text-xs outline-2 outline-dotted outline-sky-500">dotted</div><div class="flex size-20 items-center justify-center text-xs outline-4 outline-double outline-sky-500">double</div></div>', '<button class="outline-2 outline-dashed ...">...</button>'),
  { t: 'note', text: '`outline-hidden` برای حذف خط پیش‌فرض focus مرورگر بهتر از `outline-none` است، چون در حالت high contrast (برای کاربران کم‌بینا) outline همچنان دیده می‌شود. همیشه یک استایل focus جایگزین بگذار.' },
], 'outline-hidden')

C['outline-offset'] = page('outline-offset', 'کلاس‌هایی برای تعیین فاصله‌ی outline از لبه‌ی عنصر.', [
  ['outline-offset-<number>', 'outline-offset: <number>px;'],
  ['-outline-offset-<number>', 'outline-offset: calc(<number>px * -1);'],
].concat(arb('outline-offset', 'outline-offset')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="flex gap-6"><button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white outline-2 outline-sky-500 outline-offset-0">0</button><button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white outline-2 outline-sky-500 outline-offset-2">2</button><button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white outline-2 outline-sky-500 outline-offset-4">4</button></div>', '<button class="outline-2 outline-offset-2 ...">...</button>'),
], 'outline-offset-2')

/* ===================== Effects ===================== */
C['box-shadow'] = page('box-shadow', 'کلاس‌هایی برای سایه‌ی box، حلقه‌ی ring و سایه‌ی داخلی.', [
  ['shadow-2xs', 'box-shadow: 0 1px rgb(0 0 0 / 0.05);'],
  ['shadow-xs', 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);'],
  ['shadow-sm', 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);'],
  ['shadow-md', 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);'],
  ['shadow-lg', 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);'],
  ['shadow-xl', 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);'],
  ['shadow-2xl', 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);'],
  ['shadow-none', 'box-shadow: 0 0 #0000;'],
  ['shadow-<color>', 'رنگ سایه'],
  ['inset-shadow-2xs / xs / sm', 'سایه‌ی داخلی'],
  ['ring / ring-<number>', 'box-shadow: 0 0 0 <number>px (حلقه‌ی دور عنصر)'],
  ['ring-<color>', 'رنگ ring'],
  ['inset-ring / inset-ring-<number>', 'ring داخلی'],
  ['ring-offset-<number>', 'فاصله‌ی ring از عنصر'],
].concat(arb('shadow', 'box-shadow')), [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'h3', text: 'اندازه‌ی سایه' },
  demo('<div class="flex flex-wrap gap-5 rounded-lg bg-white p-5 dark:bg-slate-800">' + ['shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl'].map(function (c) { return '<div class="flex size-20 items-center justify-center rounded-lg bg-white text-xs ' + c + ' dark:bg-slate-700">' + c.replace('shadow-', '') + '</div>' }).join('') + '</div>', '<div class="shadow-md ..."></div>\n<div class="shadow-lg ..."></div>\n<div class="shadow-xl ..."></div>'),
  { t: 'h3', text: 'رنگ سایه' },
  demo('<div class="flex gap-5 p-3"><div class="flex size-20 items-center justify-center rounded-lg bg-sky-500 text-xs text-white shadow-lg shadow-sky-500/50">sky</div><div class="flex size-20 items-center justify-center rounded-lg bg-pink-500 text-xs text-white shadow-lg shadow-pink-500/50">pink</div></div>', '<button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>'),
  { t: 'h3', text: 'ring' },
  { t: 'p', text: '`ring` یک حلقه‌ی دور عنصر می‌سازد که فضا اشغال نمی‌کند. برای حالت focus فراوان استفاده می‌شود:' },
  demo('<div class="flex gap-5 p-3"><button class="rounded-md bg-white px-4 py-2 text-sm ring-2 ring-sky-500 dark:bg-slate-800">ring-2</button><button class="rounded-md bg-white px-4 py-2 text-sm ring-4 ring-pink-500 dark:bg-slate-800">ring-4</button></div>', '<button class="ring-2 ring-blue-500 ...">...</button>\n<button class="focus:ring-4 focus:ring-pink-500 ...">...</button>'),
  { t: 'h3', text: 'سایه‌ی داخلی' },
  demo('<div class="flex gap-5 p-3"><div class="flex size-20 items-center justify-center rounded-lg bg-white text-xs inset-shadow-sm dark:bg-slate-800">inset-shadow-sm</div></div>', '<div class="inset-shadow-sm ..."></div>\n<div class="inset-shadow-sky-300/50 ..."></div>'),
  { t: 'note', text: 'در نسخه‌ی ۴ نام‌ها یک پله جابه‌جا شده‌اند: `shadow-sm` قدیمی حالا `shadow-xs` و `shadow` قدیمی حالا `shadow-sm` است. همچنین عرض پیش‌فرض `ring` از ۳ به ۱ پیکسل رسیده و برای رفتار قبلی باید `ring-3` بنویسی.' },
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'code', text: '@theme {\n  --shadow-3xl: 0 35px 35px rgb(0 0 0 / 0.25);\n  --inset-shadow-md: inset 0 3px 6px rgb(0 0 0 / 0.2);\n}', file: 'CSS' },
], 'shadow-lg')

C['text-shadow'] = page('text-shadow', 'کلاس‌هایی برای سایه‌ی متن.', [
  ['text-shadow-2xs', 'text-shadow: 0px 1px 0px rgb(0 0 0 / 0.15);'],
  ['text-shadow-xs', 'text-shadow: 0px 1px 1px rgb(0 0 0 / 0.2);'],
  ['text-shadow-sm', 'سایه‌ی کوچک با چند لایه'],
  ['text-shadow-md', 'text-shadow: 0px 1px 1px / 1px 2px 2px ... (چند لایه)'],
  ['text-shadow-lg', 'سایه‌ی بزرگ‌تر'],
  ['text-shadow-none', 'text-shadow: none;'],
  ['text-shadow-<color>', 'رنگ سایه'],
].concat(arb('text-shadow', 'text-shadow')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-2xl font-bold"><p class="text-shadow-2xs">text-shadow-2xs</p><p class="text-shadow-sm">text-shadow-sm</p><p class="text-shadow-lg">text-shadow-lg</p></div>', '<p class="text-shadow-2xs ...">...</p>\n<p class="text-shadow-sm ...">...</p>\n<p class="text-shadow-lg ...">...</p>'),
  { t: 'p', text: 'با رنگ: `text-shadow-lg text-shadow-sky-500/50`. این قابلیت از Tailwind 4.1 اضافه شده و در مرورگرهای مدرن کار می‌کند.' },
], 'text-shadow-md')

C['opacity'] = page('opacity', 'کلاس‌هایی برای تعیین شفافیت عنصر.', [
  ['opacity-<number>', 'opacity: <number>%;'],
].concat(arb('opacity', 'opacity')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="flex gap-3">' + [100, 75, 50, 25].map(function (n) { return '<div class="flex size-16 items-center justify-center rounded-lg bg-sky-500 text-xs text-white opacity-' + n + '">' + n + '</div>' }).join('') + '</div>', '<button class="opacity-100 ...">...</button>\n<button class="opacity-75 ...">...</button>\n<button class="opacity-50 ...">...</button>\n<button class="opacity-25 ...">...</button>'),
  { t: 'p', text: 'برای دکمه‌ی غیرفعال معمولاً `disabled:opacity-50` می‌نویسی. هر عدد بین ۰ تا ۱۰۰ قابل استفاده است (مثل `opacity-33`). توجه کن که `opacity` روی کل عنصر و فرزندانش اثر می‌گذارد؛ برای فقط پس‌زمینه، از `bg-black/50` استفاده کن.' },
], 'opacity-50')

var blendNames = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']
C['mix-blend-mode'] = page('mix-blend-mode', 'کلاس‌هایی برای تعیین اینکه عنصر چطور با پس‌زمینه‌ی پشتش ترکیب شود.', blendNames.map(function (n) { return ['mix-blend-' + n, 'mix-blend-mode: ' + n + ';'] }).concat([['mix-blend-plus-darker', 'mix-blend-mode: plus-darker;'], ['mix-blend-plus-lighter', 'mix-blend-mode: plus-lighter;']]), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="relative flex h-24 items-center justify-center overflow-hidden rounded-lg bg-pink-500"><div class="absolute size-24 rounded-full bg-sky-400 mix-blend-multiply"></div><span class="relative text-xs text-white">multiply</span></div>', '<div class="bg-blue-800">\n  <div class="bg-blue-500 mix-blend-multiply ..."></div>\n</div>'),
  { t: 'p', text: 'عنصر با رنگ پشتش ترکیب می‌شود، مثل لایه‌های Photoshop. `isolate` را روی والد بگذار تا ترکیب فقط داخل والد انجام شود.' },
], 'mix-blend-multiply')

C['background-blend-mode'] = page('background-blend-mode', 'کلاس‌هایی برای تعیین اینکه تصویر پس‌زمینه و رنگ پس‌زمینه‌ی یک عنصر چطور با هم ترکیب شوند.', blendNames.map(function (n) { return ['bg-blend-' + n, 'background-blend-mode: ' + n + ';'] }), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="h-24 rounded-lg bg-pink-500 bg-blend-multiply" style="background-image:linear-gradient(135deg,#38bdf8,#6366f1);"></div>', '<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-multiply ..."></div>'),
], 'bg-blend-multiply')

C['mask-clip'] = page('mask-clip', 'کلاس‌هایی برای تعیین ناحیه‌ای که mask روی آن اعمال می‌شود.', [
  ['mask-clip-border', 'mask-clip: border-box;'],
  ['mask-clip-padding', 'mask-clip: padding-box;'],
  ['mask-clip-content', 'mask-clip: content-box;'],
  ['mask-clip-fill', 'mask-clip: fill-box;'],
  ['mask-clip-stroke', 'mask-clip: stroke-box;'],
  ['mask-clip-view', 'mask-clip: view-box;'],
  ['mask-no-clip', 'mask-clip: no-clip;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="mask-clip-border mask-[url(/img/scribble.png)] ..."></div>\n<div class="mask-clip-padding mask-[url(/img/scribble.png)] ..."></div>\n<div class="mask-clip-content mask-[url(/img/scribble.png)] ..."></div>', file: 'HTML' },
  { t: 'p', text: 'قبل از استفاده از کلاس‌های mask، مطمئن شو مرورگرت از آن پشتیبانی می‌کند (مرورگرهای مدرن همه پشتیبانی می‌کنند).' },
], 'mask-clip-padding')

C['mask-composite'] = page('mask-composite', 'کلاس‌هایی برای ترکیب چند mask با هم.', [
  ['mask-add', 'mask-composite: add;'],
  ['mask-subtract', 'mask-composite: subtract;'],
  ['mask-intersect', 'mask-composite: intersect;'],
  ['mask-exclude', 'mask-composite: exclude;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'وقتی عنصر چند تصویر mask دارد (مثلاً دو گرادیان)، این کلاس‌ها تعیین می‌کنند اشتراک، اجتماع یا تفاضل آن‌ها استفاده شود:' },
  { t: 'code', text: '<div class="mask-intersect mask-[url(/img/circle.png),linear-gradient(black,transparent)] ..."></div>', file: 'HTML' },
], 'mask-intersect')

C['mask-image'] = page('mask-image', 'کلاس‌هایی برای تعیین تصویر یا گرادیان mask، یعنی بخش‌هایی از عنصر که پنهان یا نیمه‌شفاف می‌شوند.', [
  ['mask-none', 'mask-image: none;'],
  ['mask-[<value>]', 'mask-image: <value>;'],
  ['mask-(<custom-property>)', 'mask-image: var(<custom-property>);'],
  ['mask-linear-<angle>', 'گرادیان خطی با زاویه'],
  ['mask-linear-from-<number> / to-<number>', 'جای شروع و پایان محو شدن'],
  ['mask-t-from-<number> / mask-r- / mask-b- / mask-l-', 'محو شدن از یک لبه'],
  ['mask-x-from-<number> / mask-y-from-<number>', 'محو شدن از دو لبه‌ی مقابل'],
  ['mask-radial-[<value>] / mask-radial-from-<number>', 'گرادیان شعاعی'],
  ['mask-conic-<angle> / mask-conic-from-<number>', 'گرادیان مخروطی'],
], [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'h3', text: 'محو شدن لبه' },
  { t: 'p', text: 'با `mask-b-from-50%` پایین عنصر محو می‌شود. افکت محبوب برای ناحیه‌ی قابل اسکرول:' },
  demo('<div class="mask-b-from-50% h-24 w-56 rounded-lg bg-gradient-to-b from-sky-500 to-indigo-600"></div>', '<img class="mask-b-from-50% ..." src="/img/mountains.jpg" />'),
  { t: 'h3', text: 'گرادیان با زاویه' },
  demo('<div class="mask-linear-45 mask-linear-from-30% mask-linear-to-70% h-24 w-56 rounded-lg bg-sky-500"></div>', '<div class="mask-linear-65 mask-linear-from-50% mask-linear-to-90% ..."></div>'),
  { t: 'h3', text: 'تصویر دلخواه' },
  { t: 'code', text: '<div class="mask-[url(/img/scribble.png)] mask-size-contain mask-no-repeat ..."></div>', file: 'HTML' },
], 'mask-b-from-50%')

C['mask-mode'] = page('mask-mode', 'کلاس‌هایی برای تعیین اینکه mask بر اساس شفافیت یا روشنایی تصویر عمل کند.', [
  ['mask-alpha', 'mask-mode: alpha;'],
  ['mask-luminance', 'mask-mode: luminance;'],
  ['mask-match', 'mask-mode: match-source;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`mask-alpha` از کانال شفافیت تصویر mask استفاده می‌کند و `mask-luminance` از روشنایی (سفید = نمایان، سیاه = پنهان):' },
  { t: 'code', text: '<div class="mask-alpha mask-[url(/img/scribble.png)] ..."></div>\n<div class="mask-luminance mask-[url(/img/scribble.png)] ..."></div>', file: 'HTML' },
], 'mask-luminance')

C['mask-origin'] = page('mask-origin', 'کلاس‌هایی برای تعیین اینکه موقعیت mask نسبت به کدام قسمت عنصر محاسبه شود.', [
  ['mask-origin-border', 'mask-origin: border-box;'],
  ['mask-origin-padding', 'mask-origin: padding-box;'],
  ['mask-origin-content', 'mask-origin: content-box;'],
  ['mask-origin-fill', 'mask-origin: fill-box;'],
  ['mask-origin-stroke', 'mask-origin: stroke-box;'],
  ['mask-origin-view', 'mask-origin: view-box;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="mask-origin-border mask-[url(/img/scribble.png)] mask-no-repeat ..."></div>\n<div class="mask-origin-padding mask-[url(/img/scribble.png)] mask-no-repeat ..."></div>', file: 'HTML' },
], 'mask-origin-padding')

C['mask-position'] = page('mask-position', 'کلاس‌هایی برای تعیین موقعیت تصویر mask.', [
  ['mask-top-left', 'mask-position: top left;'],
  ['mask-top', 'mask-position: top;'],
  ['mask-top-right', 'mask-position: top right;'],
  ['mask-left', 'mask-position: left;'],
  ['mask-center', 'mask-position: center;'],
  ['mask-right', 'mask-position: right;'],
  ['mask-bottom-left', 'mask-position: bottom left;'],
  ['mask-bottom', 'mask-position: bottom;'],
  ['mask-bottom-right', 'mask-position: bottom right;'],
  ['mask-position-(<custom-property>)', 'mask-position: var(<custom-property>);'],
  ['mask-position-[<value>]', 'mask-position: <value>;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="mask-top-left mask-[url(/img/scribble.png)] mask-size-contain mask-no-repeat ..."></div>\n<div class="mask-center mask-[url(/img/scribble.png)] mask-size-contain mask-no-repeat ..."></div>', file: 'HTML' },
], 'mask-center')

C['mask-repeat'] = page('mask-repeat', 'کلاس‌هایی برای کنترل تکرار تصویر mask.', [
  ['mask-repeat', 'mask-repeat: repeat;'],
  ['mask-repeat-x', 'mask-repeat: repeat-x;'],
  ['mask-repeat-y', 'mask-repeat: repeat-y;'],
  ['mask-repeat-space', 'mask-repeat: space;'],
  ['mask-repeat-round', 'mask-repeat: round;'],
  ['mask-no-repeat', 'mask-repeat: no-repeat;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="mask-repeat-x mask-[url(/img/circle.png)] mask-size-[20px] ..."></div>\n<div class="mask-no-repeat mask-[url(/img/circle.png)] ..."></div>', file: 'HTML' },
], 'mask-no-repeat')

C['mask-size'] = page('mask-size', 'کلاس‌هایی برای تعیین اندازه‌ی تصویر mask.', [
  ['mask-auto', 'mask-size: auto;'],
  ['mask-cover', 'mask-size: cover;'],
  ['mask-contain', 'mask-size: contain;'],
  ['mask-size-(<custom-property>)', 'mask-size: var(<custom-property>);'],
  ['mask-size-[<value>]', 'mask-size: <value>;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="mask-auto mask-[url(/img/scribble.png)] mask-no-repeat ..."></div>\n<div class="mask-cover mask-[url(/img/scribble.png)] mask-no-repeat ..."></div>\n<div class="mask-contain mask-[url(/img/scribble.png)] mask-no-repeat ..."></div>', file: 'HTML' },
], 'mask-cover')

C['mask-type'] = page('mask-type', 'کلاس‌هایی برای تعیین نوع mask در عنصرهای `<mask>` در SVG.', [
  ['mask-type-alpha', 'mask-type: alpha;'],
  ['mask-type-luminance', 'mask-type: luminance;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'این کلاس‌ها روی خود عنصر `<mask>` در SVG گذاشته می‌شوند و مشخص می‌کنند mask بر اساس شفافیت (alpha) یا روشنایی (luminance) محتوایش کار کند:' },
  { t: 'code', text: '<svg>\n  <mask id="blob1" class="mask-type-alpha">\n    <!-- ... -->\n  </mask>\n  <!-- ... -->\n</svg>\n\n<svg>\n  <mask id="blob2" class="mask-type-luminance">\n    <!-- ... -->\n  </mask>\n  <!-- ... -->\n</svg>', file: 'HTML' },
], 'mask-type-alpha')
