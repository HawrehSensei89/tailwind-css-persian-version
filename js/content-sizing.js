// Sizing — ۱۲ صفحه
var C = window.CONTENT
var L = function () { return Array.prototype.slice.call(arguments).join('\n') }
var demo = function (html, code) { return { t: 'demo', html: html, code: code } }
var tbl = function (rows) { return { t: 'table', rows: rows } }
var rep = function (cls) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + cls + '` یا `md:' + cls + '`.' }
}
var arb = function (p, css) {
  return [[p + '-(<custom-property>)', css + ': var(<custom-property>);'], [p + '-[<value>]', css + ': <value>;']]
}
var bar = function (cls, label) { return '<div class="' + cls + ' rounded-lg bg-sky-500 py-3 text-center text-sm font-semibold text-white">' + (label || cls) + '</div>' }

// جدول کلاس‌های اندازه
var sizeRows = function (p, css, o) {
  var rows = [
    [p + '-<number>', css + ': calc(var(--spacing) * <number>);'],
    [p + '-<fraction>', css + ': calc(<fraction> * 100%);'],
  ]
  if (o.container) rows.push([p + '-3xs … ' + p + '-7xl', css + ': var(--container-3xs) … var(--container-7xl);'])
  rows.push([p + '-' + o.none, css + ': ' + o.none + ';'])
  rows.push([p + '-px', css + ': 1px;'], [p + '-full', css + ': 100%;'])
  if (o.vert) {
    rows.push([p + '-screen', css + ': 100vh;'], [p + '-svh', css + ': 100svh;'], [p + '-lvh', css + ': 100lvh;'], [p + '-dvh', css + ': 100dvh;'], [p + '-lh', css + ': 1lh;'])
  } else {
    rows.push([p + '-screen', css + ': 100vw;'], [p + '-svw', css + ': 100svw;'], [p + '-lvw', css + ': 100lvw;'], [p + '-dvw', css + ': 100dvw;'])
  }
  rows.push([p + '-min', css + ': min-content;'], [p + '-max', css + ': max-content;'], [p + '-fit', css + ': fit-content;'])
  return rows.concat(arb(p, css))
}

C['width'] = {
  heading: 'width',
  lead: 'کلاس‌هایی برای تعیین عرض عنصر.',
  blocks: [
    tbl(sizeRows('w', 'width', { container: true, none: 'auto' }).concat([
      ['size-<number>', 'width و height: calc(var(--spacing) * <number>);'],
      ['size-full', 'width و height: 100%;'],
    ])),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'مقیاس فاصله' },
    { t: 'p', text: '`w-64` یعنی ۱۶rem. هر عدد برابر ۰.۲۵rem است و هر عدد دلخواهی (مثل `w-13`) کار می‌کند:' },
    demo('<div class="space-y-2">' + bar('w-24') + bar('w-40') + bar('w-56') + '</div>', '<div class="w-96 ...">w-96</div>\n<div class="w-80 ...">w-80</div>\n<div class="w-64 ...">w-64</div>'),
    { t: 'h3', text: 'درصدی' },
    { t: 'p', text: 'کسرها مثل `w-1/2` و `w-2/5` درصدی از عرض والد می‌گیرند:' },
    demo('<div class="space-y-2"><div class="flex gap-2">' + bar('w-1/2') + bar('w-1/2') + '</div><div class="flex gap-2">' + bar('w-2/5') + bar('w-3/5') + '</div></div>', '<div class="flex ...">\n  <div class="w-1/2 ...">01</div>\n  <div class="w-1/2 ...">02</div>\n</div>'),
    { t: 'h3', text: 'اندازه‌ی ظرف' },
    { t: 'code', text: '<div class="w-xs ...">w-xs</div>\n<div class="w-md ...">w-md</div>\n<div class="w-4xl ...">w-4xl</div>', file: 'HTML' },
    { t: 'h3', text: 'اندازه‌ی محتوا' },
    { t: 'p', text: '`w-fit` به اندازه‌ی محتوا، `w-min` تا کمترین عرض ممکن و `w-max` تا بیشترین عرض (بدون شکستن خط):' },
    { t: 'h3', text: 'واحدهای صفحه‌ی نمایش' },
    { t: 'p', text: '`w-screen` برابر ۱۰۰٪ عرض پنجره است. نسخه‌های `w-svw`، `w-lvw` و `w-dvw` برای مرورگرهای موبایلی هستند که نوار آدرس‌شان جمع و باز می‌شود.' },
    { t: 'h3', text: 'size' },
    { t: 'p', text: '`size-*` عرض و ارتفاع را با هم می‌گذارد و برای مربع و دایره عالی است:' },
    demo('<div class="size-16 rounded-full bg-sky-500"></div>', '<div class="size-16 rounded-full ..."></div>'),
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="w-[323px] ...">...</div>\n<div class="w-(--my-width) ...">...</div>', file: 'HTML' },
    rep('w-full'),
  ],
}

C['min-width'] = {
  heading: 'min-width',
  lead: 'کلاس‌هایی برای تعیین حداقل عرض عنصر.',
  blocks: [
    tbl(sizeRows('min-w', 'min-width', { container: true, none: 'auto' })),
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'عنصر هر چقدر هم والد کوچک شود، از این عرض کمتر نمی‌شود:' },
    demo('<div class="flex gap-2"><div class="min-w-32 rounded-lg bg-sky-500 py-3 text-center text-sm text-white">min-w-32</div><div class="w-12 rounded-lg bg-indigo-500 py-3 text-center text-sm text-white">w-12</div></div>', '<div class="flex ...">\n  <div class="min-w-80 ...">min-w-80</div>\n  <div class="min-w-48 ...">min-w-48</div>\n</div>'),
    rep('min-w-0'),
    { t: 'note', text: 'یک مشکل رایج: فرزند flex که متن بلند دارد به‌خاطر `min-width: auto` پیش‌فرض کوچک نمی‌شود. با `min-w-0` روی آن، می‌تواند کوچک شود و متن بریده شود.' },
  ],
}

C['max-width'] = {
  heading: 'max-width',
  lead: 'کلاس‌هایی برای تعیین حداکثر عرض عنصر.',
  blocks: [
    tbl(sizeRows('max-w', 'max-width', { container: true, none: 'none' })),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`max-w-md` عنصر را در عرض‌های بزرگ از ۲۸rem بزرگ‌تر نمی‌کند، ولی در صفحه‌ی کوچک می‌تواند کوچک شود. معمولاً همراه `mx-auto` برای ظرف وسط‌چین استفاده می‌شود:' },
    demo('<div class="space-y-2">' + bar('max-w-xs') + bar('max-w-sm') + '</div>', '<div class="mx-auto max-w-2xl px-4 ...">...</div>'),
    { t: 'h3', text: 'breakpoint ها' },
    { t: 'p', text: 'در نسخه‌ی ۴ کلاس‌های `max-w-screen-sm` حذف شدند. به‌جایش از متغیر تم استفاده کن:' },
    { t: 'code', text: '<div class="max-w-(--breakpoint-sm) ...">...</div>', file: 'HTML' },
    rep('max-w-md'),
  ],
}

C['height'] = {
  heading: 'height',
  lead: 'کلاس‌هایی برای تعیین ارتفاع عنصر.',
  blocks: [
    tbl(sizeRows('h', 'height', { vert: true, none: 'auto' }).concat([['size-<number>', 'width و height: calc(var(--spacing) * <number>);']])),
    { t: 'h2', text: 'مثال‌ها' },
    demo('<div class="flex items-end gap-2"><div class="h-8 w-12 rounded-sm bg-sky-500"></div><div class="h-16 w-12 rounded-sm bg-sky-500"></div><div class="h-24 w-12 rounded-sm bg-sky-500"></div></div>', '<div class="h-96 ...">h-96</div>\n<div class="h-80 ...">h-80</div>\n<div class="h-64 ...">h-64</div>'),
    { t: 'h3', text: 'ارتفاع صفحه‌ی نمایش' },
    { t: 'p', text: '`h-screen` برابر ۱۰۰٪ ارتفاع پنجره است. روی موبایل بهتر است از `h-dvh` استفاده کنی چون با جمع و باز شدن نوار آدرس مرورگر هماهنگ می‌شود.' },
    { t: 'h3', text: 'ارتفاع خط' },
    { t: 'p', text: '`h-lh` برابر ارتفاع یک خط متن (`1lh`) است و برای آیکون هم‌اندازه‌ی متن عالی است:' },
    { t: 'code', text: '<p class="flex items-center gap-2 ...">\n  <svg class="size-[1lh] ..."></svg> Label\n</p>', file: 'HTML' },
    rep('h-full'),
  ],
}

C['min-height'] = {
  heading: 'min-height',
  lead: 'کلاس‌هایی برای تعیین حداقل ارتفاع عنصر.',
  blocks: [
    tbl(sizeRows('min-h', 'min-height', { vert: true, none: 'auto' })),
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'عنصر با محتوای زیاد بلندتر می‌شود ولی هیچ‌وقت از این حداقل کوتاه‌تر نمی‌شود. `min-h-screen` الگوی رایج برای صفحه‌ای است که باید حداقل کل پنجره را بگیرد (مثلاً تا فوتر پایین بماند):' },
    { t: 'code', text: '<body class="min-h-screen flex flex-col">\n  <header>...</header>\n  <main class="flex-1">...</main>\n  <footer>...</footer>\n</body>', file: 'HTML' },
    rep('min-h-screen'),
  ],
}

C['max-height'] = {
  heading: 'max-height',
  lead: 'کلاس‌هایی برای تعیین حداکثر ارتفاع عنصر.',
  blocks: [
    tbl(sizeRows('max-h', 'max-height', { vert: true, none: 'none' })),
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'همراه `overflow-auto` می‌تواند ناحیه‌ی قابل‌اسکرول با سقف ارتفاع بسازد:' },
    demo('<div class="max-h-20 w-56 overflow-auto rounded-lg border border-slate-300 p-3 text-sm"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>', '<div class="max-h-48 overflow-auto ...">...</div>'),
    rep('max-h-64'),
  ],
}

// اندازه‌ی منطقی
var logical = function (prefix, css, title, lead, note) {
  return {
    heading: title, lead: lead,
    blocks: [
      tbl([
        [prefix + '-<number>', css + ': calc(var(--spacing) * <number>);'],
        [prefix + '-<fraction>', css + ': calc(<fraction> * 100%);'],
        [prefix + '-px', css + ': 1px;'],
        [prefix + '-full', css + ': 100%;'],
        [prefix + '-auto', css + ': auto;'],
        [prefix + '-min', css + ': min-content;'],
        [prefix + '-max', css + ': max-content;'],
        [prefix + '-fit', css + ': fit-content;'],
      ].concat(arb(prefix, css))),
      { t: 'h2', text: 'توضیح' },
      { t: 'p', text: note },
      { t: 'code', text: '<div class="' + prefix + '-64 ...">...</div>', file: 'HTML' },
      { t: 'p', text: 'این کلاس‌ها نسخه‌ی **منطقی** (logical) اندازه‌اند. در نوشتار افقی (فارسی و انگلیسی) `inline` همان عرض و `block` همان ارتفاع است. اگر نوشتار عمودی داشته باشی، جهت‌ها خودکار عوض می‌شوند.' },
      rep(prefix + '-64'),
    ],
  }
}
C['inline-size'] = logical('inline', 'inline-size', 'inline-size', 'کلاس‌هایی برای تعیین اندازه‌ی عنصر در جهت خط نوشتار (معادل منطقی عرض).', '`inline-*` مثل `w-*` است ولی بر اساس جهت نوشتار کار می‌کند.')
C['min-inline-size'] = logical('min-inline', 'min-inline-size', 'min-inline-size', 'کلاس‌هایی برای تعیین حداقل اندازه در جهت خط نوشتار (معادل منطقی `min-width`).', '`min-inline-*` مثل `min-w-*` است ولی منطقی.')
C['max-inline-size'] = logical('max-inline', 'max-inline-size', 'max-inline-size', 'کلاس‌هایی برای تعیین حداکثر اندازه در جهت خط نوشتار (معادل منطقی `max-width`).', '`max-inline-*` مثل `max-w-*` است ولی منطقی.')
C['block-size'] = logical('block', 'block-size', 'block-size', 'کلاس‌هایی برای تعیین اندازه‌ی عنصر در جهت عمود بر خط نوشتار (معادل منطقی ارتفاع).', '`block-*` مثل `h-*` است ولی بر اساس جهت نوشتار کار می‌کند.')
C['min-block-size'] = logical('min-block', 'min-block-size', 'min-block-size', 'کلاس‌هایی برای تعیین حداقل اندازه در جهت block (معادل منطقی `min-height`).', '`min-block-*` مثل `min-h-*` است ولی منطقی.')
C['max-block-size'] = logical('max-block', 'max-block-size', 'max-block-size', 'کلاس‌هایی برای تعیین حداکثر اندازه در جهت block (معادل منطقی `max-height`).', '`max-block-*` مثل `max-h-*` است ولی منطقی.')
