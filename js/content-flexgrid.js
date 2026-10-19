// Flexbox & Grid + Spacing
var C = window.CONTENT
var L = function () { return Array.prototype.slice.call(arguments).join('\n') }
var b = function (t, c) { return '<div class="flex items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white ' + (c || 'size-12') + '">' + t + '</div>' }
var bs = function (n, c) { var s = ''; for (var i = 1; i <= n; i++) s += b('0' + i, c); return s }
var demo = function (html, code) { return { t: 'demo', html: html, code: code } }
var tbl = function (rows) { return { t: 'table', rows: rows } }
var rep = function (cls) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + cls + '` یا `md:' + cls + '`.' }
}
// جدول کلاس‌های مقدار دلخواه
var arb = function (p, css) {
  return [[p + '-(<custom-property>)', css + ': var(<custom-property>);'], [p + '-[<value>]', css + ': <value>;']]
}

/* ======================= Flexbox ======================= */
C['flex-basis'] = {
  heading: 'flex-basis',
  lead: 'کلاس‌هایی برای تعیین اندازه‌ی اولیه‌ی عنصرهای flex.',
  blocks: [
    tbl([
      ['basis-<number>', 'flex-basis: calc(var(--spacing) * <number>);'],
      ['basis-<fraction>', 'flex-basis: calc(<fraction> * 100%);'],
      ['basis-3xs … basis-7xl', 'flex-basis: var(--container-3xs) … var(--container-7xl);'],
      ['basis-auto', 'flex-basis: auto;'],
      ['basis-full', 'flex-basis: 100%;'],
      ['basis-px', 'flex-basis: 1px;'],
    ].concat(arb('basis', 'flex-basis'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'با مقیاس فاصله' },
    { t: 'p', text: '`basis-64` یعنی اندازه‌ی اولیه ۱۶rem. هر عدد در مقیاس فاصله‌ی تم (هر واحد ۰.۲۵rem) قابل استفاده است:' },
    demo('<div class="flex gap-2 text-sm"><div class="basis-1/4 rounded-sm bg-sky-500 p-3 text-white">01</div><div class="basis-1/4 rounded-sm bg-sky-500 p-3 text-white">02</div><div class="basis-1/2 rounded-sm bg-sky-500 p-3 text-white">03</div></div>',
      '<div class="flex flex-row">\n  <div class="basis-1/4">01</div>\n  <div class="basis-1/4">02</div>\n  <div class="basis-1/2">03</div>\n</div>'),
    { t: 'h3', text: 'کسرها و اندازه‌های نام‌دار' },
    { t: 'code', text: '<div class="flex flex-row">\n  <div class="basis-1/3">01</div>\n  <div class="basis-2/3">02</div>\n</div>\n\n<div class="flex flex-row">\n  <div class="basis-3xs">01</div>\n  <div class="basis-2xs">02</div>\n</div>', file: 'HTML' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="basis-[30vw] ...">...</div>\n<div class="basis-(--my-basis) ...">...</div>', file: 'HTML' },
    { t: 'h3', text: 'ریسپانسیو' },
    { t: 'code', text: '<div class="flex flex-row">\n  <div class="basis-1/4 md:basis-1/3">01</div>\n  <div class="basis-1/4 md:basis-1/3">02</div>\n  <div class="basis-1/2 md:basis-1/3">03</div>\n</div>', file: 'HTML' },
    { t: 'h2', text: 'سفارشی‌سازی تم' },
    { t: 'p', text: 'کلاس‌های اندازه‌دار از `--container-*` می‌آیند و کلاس‌های عددی از `--spacing`.' },
    { t: 'code', text: '@theme {\n  --container-4xs: 14rem;\n}', file: 'CSS' },
  ],
}

C['flex-direction'] = {
  heading: 'flex-direction',
  lead: 'کلاس‌هایی برای کنترل جهت عنصرهای flex.',
  blocks: [
    tbl([
      ['flex-row', 'flex-direction: row;'],
      ['flex-row-reverse', 'flex-direction: row-reverse;'],
      ['flex-col', 'flex-direction: column;'],
      ['flex-col-reverse', 'flex-direction: column-reverse;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'ردیفی (row)' },
    { t: 'p', text: '`flex-row` عنصرها را کنار هم می‌چیند. این حالت پیش‌فرض است. در صفحه‌ی راست‌به‌چپ (فارسی) اولین عنصر در **راست** قرار می‌گیرد:' },
    demo('<div class="flex flex-row gap-2">' + bs(3) + '</div>', '<div class="flex flex-row ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
    { t: 'h3', text: 'ردیفی معکوس' },
    demo('<div class="flex flex-row-reverse gap-2">' + bs(3) + '</div>', '<div class="flex flex-row-reverse ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
    { t: 'h3', text: 'ستونی (col)' },
    demo('<div class="flex flex-col gap-2 w-12">' + bs(3) + '</div>', '<div class="flex flex-col ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
    { t: 'h3', text: 'ستونی معکوس' },
    demo('<div class="flex flex-col-reverse gap-2 w-12">' + bs(3) + '</div>', '<div class="flex flex-col-reverse ...">...</div>'),
    rep('flex-row'),
  ],
}

C['flex-wrap'] = {
  heading: 'flex-wrap',
  lead: 'کلاس‌هایی برای کنترل اینکه عنصرهای flex بشکنند و به خط بعد بروند یا نه.',
  blocks: [
    tbl([
      ['flex-nowrap', 'flex-wrap: nowrap;'],
      ['flex-wrap', 'flex-wrap: wrap;'],
      ['flex-wrap-reverse', 'flex-wrap: wrap-reverse;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'بدون شکستن' },
    { t: 'p', text: '`flex-nowrap` (پیش‌فرض) همه‌ی عنصرها را در یک خط نگه می‌دارد و اگر جا نباشد کوچک می‌شوند یا سرریز می‌شوند.' },
    { t: 'h3', text: 'شکستن' },
    { t: 'p', text: '`flex-wrap` اجازه می‌دهد عنصرها وقتی جا نشد به خط بعد بروند:' },
    demo('<div class="flex w-48 flex-wrap gap-2">' + bs(6) + '</div>', '<div class="flex flex-wrap ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n  <!-- ... -->\n</div>'),
    { t: 'h3', text: 'شکستن معکوس' },
    demo('<div class="flex w-48 flex-wrap-reverse gap-2">' + bs(6) + '</div>', '<div class="flex flex-wrap-reverse ...">...</div>'),
    rep('flex-wrap'),
  ],
}

C['flex'] = {
  heading: 'flex',
  lead: 'کلاس‌هایی برای تعیین اینکه عنصر flex چطور رشد کند یا کوچک شود.',
  blocks: [
    tbl([
      ['flex-<number>', 'flex: <number>;'],
      ['flex-<fraction>', 'flex: calc(<fraction> * 100%);'],
      ['flex-auto', 'flex: 1 1 auto;'],
      ['flex-initial', 'flex: 0 auto;'],
      ['flex-none', 'flex: none;'],
    ].concat(arb('flex', 'flex'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'flex-1' },
    { t: 'p', text: '`flex-1` اجازه می‌دهد عنصر هم رشد کند هم کوچک شود، و اندازه‌ی اولیه‌اش صفر است. پس فضای خالی بین عنصرها **مساوی** تقسیم می‌شود:' },
    demo('<div class="flex gap-2 text-sm"><div class="w-14 flex-none rounded-sm bg-sky-500 p-3 text-white">01</div><div class="flex-1 rounded-sm bg-sky-500 p-3 text-white">02</div><div class="flex-1 rounded-sm bg-sky-500 p-3 text-white">03</div></div>',
      '<div class="flex">\n  <div class="w-14 flex-none ...">01</div>\n  <div class="flex-1 ...">02</div>\n  <div class="flex-1 ...">03</div>\n</div>'),
    { t: 'h3', text: 'flex-auto' },
    { t: 'p', text: '`flex-auto` هم رشد و کوچک‌شدن را اجازه می‌دهد، ولی از اندازه‌ی طبیعی (محتوا یا `width`) شروع می‌کند.' },
    { t: 'h3', text: 'flex-initial' },
    { t: 'p', text: '`flex-initial` فقط اجازه‌ی کوچک‌شدن می‌دهد، رشد نمی‌کند. این رفتار پیش‌فرض flex است.' },
    { t: 'h3', text: 'flex-none' },
    { t: 'p', text: '`flex-none` عنصر را ثابت نگه می‌دارد، نه رشد می‌کند نه کوچک می‌شود. برای آیکون و آواتار کاربردی است.' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="flex-[3_1_0%] ...">...</div>\n<div class="flex-(--my-flex) ...">...</div>', file: 'HTML' },
    rep('flex-1'),
  ],
}

C['flex-grow'] = {
  heading: 'flex-grow',
  lead: 'کلاس‌هایی برای کنترل رشد عنصرهای flex.',
  blocks: [
    tbl([
      ['grow', 'flex-grow: 1;'],
      ['grow-<number>', 'flex-grow: <number>;'],
    ].concat(arb('grow', 'flex-grow'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'رشد کردن' },
    { t: 'p', text: '`grow` عنصر را وادار می‌کند تمام فضای خالی را پر کند:' },
    demo('<div class="flex gap-2 text-sm"><div class="size-12 flex-none rounded-sm bg-sky-500"></div><div class="grow rounded-sm bg-sky-500 p-3 text-white">02 grow</div><div class="size-12 flex-none rounded-sm bg-sky-500"></div></div>',
      '<div class="flex ...">\n  <div class="size-14 flex-none ...">01</div>\n  <div class="grow size-14 ...">02</div>\n  <div class="size-14 flex-none ...">03</div>\n</div>'),
    { t: 'h3', text: 'ضریب رشد' },
    { t: 'p', text: 'اگر چند عنصر `grow` دارند، فضای خالی به نسبت ضریب‌شان تقسیم می‌شود. مثلاً `grow-3` سه برابر `grow` فضا می‌گیرد:' },
    demo('<div class="flex gap-2 text-sm"><div class="size-12 flex-none rounded-sm bg-sky-500"></div><div class="grow-3 rounded-sm bg-sky-500 p-3 text-white">grow-3</div><div class="grow rounded-sm bg-sky-500 p-3 text-white">grow</div></div>',
      '<div class="flex ...">\n  <div class="size-14 flex-none ...">01</div>\n  <div class="size-14 grow-3 ...">02</div>\n  <div class="size-14 grow ...">03</div>\n</div>'),
    { t: 'h3', text: 'جلوگیری از رشد' },
    { t: 'p', text: '`grow-0` رشد را خاموش می‌کند.' },
    rep('grow'),
  ],
}

C['flex-shrink'] = {
  heading: 'flex-shrink',
  lead: 'کلاس‌هایی برای کنترل کوچک‌شدن عنصرهای flex.',
  blocks: [
    tbl([
      ['shrink', 'flex-shrink: 1;'],
      ['shrink-<number>', 'flex-shrink: <number>;'],
    ].concat(arb('shrink', 'flex-shrink'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`shrink` (پیش‌فرض) اجازه می‌دهد عنصر وقتی جا کم است کوچک شود. `shrink-0` این را خاموش می‌کند و عنصر همان اندازه‌ی خودش می‌ماند. معمولاً برای آواتار و آیکون استفاده می‌شود:' },
    demo('<div class="flex w-72 gap-2 text-sm"><div class="h-12 w-32 flex-none rounded-sm bg-sky-500 p-3 text-white">shrink-0</div><div class="h-12 w-48 shrink rounded-sm bg-sky-500 p-3 text-white">shrink</div><div class="h-12 w-32 flex-none rounded-sm bg-sky-500 p-3 text-white">shrink-0</div></div>',
      '<div class="flex ...">\n  <div class="h-14 w-32 shrink-0">01</div>\n  <div class="h-14 w-64 shrink">02</div>\n  <div class="h-14 w-32 shrink-0">03</div>\n</div>'),
    rep('shrink-0'),
  ],
}

C['order'] = {
  heading: 'order',
  lead: 'کلاس‌هایی برای کنترل ترتیب نمایش عنصرهای flex و grid.',
  blocks: [
    tbl([
      ['order-<number>', 'order: <number>;'],
      ['-order-<number>', 'order: calc(<number> * -1);'],
      ['order-first', 'order: -9999;'],
      ['order-last', 'order: 9999;'],
      ['order-none', 'order: 0;'],
    ].concat(arb('order', 'order'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: 'ترتیب بصری را بدون تغییر ترتیب HTML عوض کن. توجه کن که screen reader ها همچنان ترتیب اصلی HTML را می‌خوانند، پس این را برای تغییر معنایی به‌کار نبر:' },
    demo('<div class="flex gap-2"><div class="order-3 ' + 'flex size-12 items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white">01</div><div class="flex size-12 items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white">02</div><div class="order-first flex size-12 items-center justify-center rounded-lg bg-indigo-500 text-sm font-semibold text-white">03</div></div>',
      '<div class="flex justify-between ...">\n  <div class="order-3 ...">01</div>\n  <div class="...">02</div>\n  <div class="order-first ...">03</div>\n</div>'),
    rep('order-first'),
  ],
}

/* ======================= Grid ======================= */
C['grid-template-columns'] = {
  heading: 'grid-template-columns',
  lead: 'کلاس‌هایی برای تعریف ستون‌های یک grid.',
  blocks: [
    tbl([
      ['grid-cols-<number>', 'grid-template-columns: repeat(<number>, minmax(0, 1fr));'],
      ['grid-cols-none', 'grid-template-columns: none;'],
      ['grid-cols-subgrid', 'grid-template-columns: subgrid;'],
    ].concat(arb('grid-cols', 'grid-template-columns'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'تعداد ستون' },
    demo('<div class="grid grid-cols-4 gap-2">' + bs(8, 'h-12') + '</div>', '<div class="grid grid-cols-4 gap-4">\n  <div>01</div>\n  <!-- ... -->\n  <div>09</div>\n</div>'),
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'p', text: 'برای ستون‌های با اندازه‌های متفاوت، مقدار دلخواه بنویس. زیرخط به فاصله تبدیل می‌شود:' },
    { t: 'code', text: '<div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px] ...">...</div>\n<div class="grid grid-cols-(--my-columns) ...">...</div>', file: 'HTML' },
    { t: 'h3', text: 'subgrid' },
    { t: 'p', text: '`grid-cols-subgrid` ستون‌های grid والد را به فرزند هم می‌دهد تا هم‌تراز بمانند:' },
    { t: 'code', text: '<div class="grid grid-cols-4 ...">\n  <div>01</div>\n  <div class="col-span-3 grid grid-cols-subgrid">\n    <div class="col-start-2">06</div>\n  </div>\n</div>', file: 'HTML' },
    { t: 'h3', text: 'ریسپانسیو' },
    { t: 'code', text: '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">...</div>', file: 'HTML' },
  ],
}

C['grid-column'] = {
  heading: 'grid-column',
  lead: 'کلاس‌هایی برای کنترل اینکه عنصر چند ستون از grid را بگیرد.',
  blocks: [
    tbl([
      ['col-span-<number>', 'grid-column: span <number> / span <number>;'],
      ['col-span-full', 'grid-column: 1 / -1;'],
      ['col-start-<number>', 'grid-column-start: <number>;'],
      ['-col-start-<number>', 'grid-column-start: calc(<number> * -1);'],
      ['col-start-auto', 'grid-column-start: auto;'],
      ['col-end-<number>', 'grid-column-end: <number>;'],
      ['-col-end-<number>', 'grid-column-end: calc(<number> * -1);'],
      ['col-end-auto', 'grid-column-end: auto;'],
      ['col-auto', 'grid-column: auto;'],
      ['col-<number>', 'grid-column: <number>;'],
      ['-col-<number>', 'grid-column: calc(<number> * -1);'],
    ].concat(arb('col', 'grid-column'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'span' },
    { t: 'p', text: '`col-span-2` یعنی این عنصر دو ستون را بگیرد. `col-span-full` همه‌ی ستون‌ها را می‌گیرد:' },
    demo('<div class="grid grid-cols-3 gap-2">' + b('01', 'col-span-2 h-12') + b('02', 'h-12') + b('03', 'h-12') + b('04', 'col-span-2 h-12') + b('05', 'col-span-full h-12') + '</div>',
      '<div class="grid grid-cols-3 gap-4">\n  <div class="col-span-2">01</div>\n  <div>02</div>\n  <div>03</div>\n  <div class="col-span-2">04</div>\n  <div class="col-span-full">05</div>\n</div>'),
    { t: 'h3', text: 'شروع و پایان' },
    { t: 'p', text: 'با `col-start-*` و `col-end-*` یا ترکیب با `span`، خانه‌ی دقیق عنصر را مشخص کن. شماره‌ی خط‌ها از ۱ شروع می‌شود:' },
    demo('<div class="grid grid-cols-6 gap-2">' + b('01', 'col-span-4 col-start-2 h-12') + b('02', 'col-start-1 col-end-3 h-12') + b('03', 'col-span-2 col-end-7 h-12') + '</div>',
      '<div class="grid grid-cols-6 gap-4">\n  <div class="col-span-4 col-start-2">01</div>\n  <div class="col-start-1 col-end-3">02</div>\n  <div class="col-span-2 col-end-7">03</div>\n</div>'),
    { t: 'note', text: 'در صفحه‌ی راست‌به‌چپ، خط شماره‌ی ۱ سمت **راست** است و شماره‌ها به سمت چپ بالا می‌روند.' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="col-[16_/_span_16] ...">...</div>', file: 'HTML' },
    rep('col-span-2'),
  ],
}

C['grid-template-rows'] = {
  heading: 'grid-template-rows',
  lead: 'کلاس‌هایی برای تعریف ردیف‌های یک grid.',
  blocks: [
    tbl([
      ['grid-rows-<number>', 'grid-template-rows: repeat(<number>, minmax(0, 1fr));'],
      ['grid-rows-none', 'grid-template-rows: none;'],
      ['grid-rows-subgrid', 'grid-template-rows: subgrid;'],
    ].concat(arb('grid-rows', 'grid-template-rows'))),
    { t: 'h2', text: 'مثال‌ها' },
    demo('<div class="grid grid-flow-col grid-rows-3 gap-2">' + bs(6, 'h-10 w-14') + '</div>',
      '<div class="grid grid-flow-col grid-rows-4 gap-4">\n  <div>01</div>\n  <!-- ... -->\n  <div>09</div>\n</div>'),
    { t: 'p', text: 'معمولاً `grid-rows-*` همراه `grid-flow-col` می‌آید تا عنصرها اول در ستون پر شوند. مقدار دلخواه هم می‌گیرد:' },
    { t: 'code', text: '<div class="grid-rows-[200px_minmax(900px,_1fr)_100px] ...">...</div>', file: 'HTML' },
    rep('grid-rows-3'),
  ],
}

C['grid-row'] = {
  heading: 'grid-row',
  lead: 'کلاس‌هایی برای کنترل اینکه عنصر چند ردیف از grid را بگیرد.',
  blocks: [
    tbl([
      ['row-span-<number>', 'grid-row: span <number> / span <number>;'],
      ['row-span-full', 'grid-row: 1 / -1;'],
      ['row-start-<number>', 'grid-row-start: <number>;'],
      ['-row-start-<number>', 'grid-row-start: calc(<number> * -1);'],
      ['row-start-auto', 'grid-row-start: auto;'],
      ['row-end-<number>', 'grid-row-end: <number>;'],
      ['-row-end-<number>', 'grid-row-end: calc(<number> * -1);'],
      ['row-end-auto', 'grid-row-end: auto;'],
      ['row-auto', 'grid-row: auto;'],
      ['row-<number>', 'grid-row: <number>;'],
      ['-row-<number>', 'grid-row: calc(<number> * -1);'],
    ].concat(arb('row', 'grid-row'))),
    { t: 'h2', text: 'مثال‌ها' },
    demo('<div class="grid grid-flow-col grid-rows-3 gap-2">' + b('01', 'row-span-3 h-auto min-h-24 w-14') + b('02', 'col-span-2 w-14 h-10') + b('03', 'col-span-2 row-span-2 w-14') + '</div>',
      '<div class="grid grid-flow-col grid-rows-3 gap-4">\n  <div class="row-span-3">01</div>\n  <div class="col-span-2">02</div>\n  <div class="col-span-2 row-span-2">03</div>\n</div>'),
    { t: 'p', text: 'همان منطق `col-start` و `col-end` را برای ردیف‌ها دارد: `row-start-2 row-end-4` عنصر را از خط ۲ تا خط ۴ می‌کشد.' },
    rep('row-span-2'),
  ],
}

C['grid-auto-flow'] = {
  heading: 'grid-auto-flow',
  lead: 'کلاس‌هایی برای کنترل چینش خودکار عنصرها در grid.',
  blocks: [
    tbl([
      ['grid-flow-row', 'grid-auto-flow: row;'],
      ['grid-flow-col', 'grid-auto-flow: column;'],
      ['grid-flow-dense', 'grid-auto-flow: dense;'],
      ['grid-flow-row-dense', 'grid-auto-flow: row dense;'],
      ['grid-flow-col-dense', 'grid-auto-flow: column dense;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`grid-flow-row` (پیش‌فرض) خانه‌ها را ردیف به ردیف پر می‌کند و `grid-flow-col` ستون به ستون. گزینه‌های `dense` سعی می‌کنند جاهای خالی را با عنصرهای کوچک‌تر بعدی پر کنند، که ترتیب بصری را ممکن است عوض کند:' },
    demo('<div class="grid grid-flow-col grid-rows-2 gap-2">' + bs(4, 'h-10 w-14') + '</div>',
      '<div class="grid grid-flow-col grid-rows-3 ...">\n  <div>01</div>\n  <div>02</div>\n  <!-- ... -->\n</div>'),
    rep('grid-flow-col'),
  ],
}

var autoPage = function (prefix, prop, title) {
  return {
    heading: title,
    lead: 'کلاس‌هایی برای تعیین اندازه‌ی ' + (prefix === 'auto-cols' ? 'ستون‌های' : 'ردیف‌های') + ' ضمنی (خودکار) در grid.',
    blocks: [
      tbl([
        [prefix + '-auto', prop + ': auto;'],
        [prefix + '-min', prop + ': min-content;'],
        [prefix + '-max', prop + ': max-content;'],
        [prefix + '-fr', prop + ': minmax(0, 1fr);'],
      ].concat(arb(prefix, prop))),
      { t: 'h2', text: 'مثال' },
      { t: 'p', text: 'این کلاس‌ها فقط وقتی عمل می‌کنند که grid به جایی خارج از ستون و ردیف‌های تعریف‌شده عنصر بگذارد. `' + prefix + '-fr` باعث می‌شود همه‌ی آن‌ها فضا را مساوی بین خود تقسیم کنند:' },
      { t: 'code', text: '<div class="grid ' + (prefix === 'auto-cols' ? 'grid-flow-col ' : 'grid-flow-row ') + prefix + '-max ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>', file: 'HTML' },
      rep(prefix + '-fr'),
    ],
  }
}
C['grid-auto-columns'] = autoPage('auto-cols', 'grid-auto-columns', 'grid-auto-columns')
C['grid-auto-rows'] = autoPage('auto-rows', 'grid-auto-rows', 'grid-auto-rows')

C['gap'] = {
  heading: 'gap',
  lead: 'کلاس‌هایی برای کنترل فاصله‌ی بین ردیف‌ها و ستون‌ها در grid و flex.',
  blocks: [
    tbl([
      ['gap-<number>', 'gap: calc(var(--spacing) * <number>);'],
      ['gap-x-<number>', 'column-gap: calc(var(--spacing) * <number>);'],
      ['gap-y-<number>', 'row-gap: calc(var(--spacing) * <number>);'],
      ['gap-px', 'gap: 1px;'],
    ].concat(arb('gap', 'gap'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'فاصله‌ی همه‌ی جهت‌ها' },
    demo('<div class="grid grid-cols-2 gap-4">' + bs(4, 'h-10') + '</div>', '<div class="grid grid-cols-2 gap-4">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n  <div>04</div>\n</div>'),
    { t: 'h3', text: 'فاصله‌ی افقی و عمودی جدا' },
    demo('<div class="grid grid-cols-3 gap-x-8 gap-y-2">' + bs(6, 'h-10') + '</div>', '<div class="grid grid-cols-3 gap-x-8 gap-y-4">\n  <!-- ... -->\n</div>'),
    { t: 'p', text: '`gap` هم در `grid` و هم در `flex` کار می‌کند و بهتر از `margin` برای فاصله‌ی بین عنصرهاست، چون فاصله‌ی اضافی اول و آخر نمی‌سازد.' },
    rep('gap-4'),
  ],
}

/* ======================= Alignment ======================= */
var alignPage = function (o) {
  return {
    heading: o.heading, lead: o.lead,
    blocks: [tbl(o.rows)].concat(o.body || []).concat([rep(o.rep)]),
  }
}

C['justify-content'] = alignPage({
  heading: 'justify-content', rep: 'justify-between',
  lead: 'کلاس‌هایی برای تعیین چینش عنصرها در امتداد محور اصلی ظرف.',
  rows: [
    ['justify-start', 'justify-content: flex-start;'],
    ['justify-end', 'justify-content: flex-end;'],
    ['justify-end-safe', 'justify-content: safe flex-end;'],
    ['justify-center', 'justify-content: center;'],
    ['justify-center-safe', 'justify-content: safe center;'],
    ['justify-between', 'justify-content: space-between;'],
    ['justify-around', 'justify-content: space-around;'],
    ['justify-evenly', 'justify-content: space-evenly;'],
    ['justify-stretch', 'justify-content: stretch;'],
    ['justify-normal', 'justify-content: normal;'],
  ],
  body: [
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: 'برای flex، محور اصلی افقی است (مگر `flex-col`). `justify-start` در حالت راست‌به‌چپ عنصرها را به **راست** می‌چسباند، چون «شروع» به جهت نوشتار بستگی دارد:' },
    demo('<div class="flex justify-center gap-2 rounded-lg border border-slate-300 p-2">' + bs(3) + '</div>', '<div class="flex justify-center ...">...</div>'),
    demo('<div class="flex justify-between gap-2 rounded-lg border border-slate-300 p-2">' + bs(3) + '</div>', '<div class="flex justify-between ...">...</div>'),
    demo('<div class="flex justify-evenly gap-2 rounded-lg border border-slate-300 p-2">' + bs(3) + '</div>', '<div class="flex justify-evenly ...">...</div>'),
    { t: 'h3', text: 'حالت safe' },
    { t: 'p', text: 'نسخه‌های `-safe` اگر محتوا از ظرف بزرگ‌تر باشد، به‌جای بریده شدن از سمت شروع، به شروع می‌چسبند تا محتوا قابل دسترس بماند.' },
  ],
})

C['justify-items'] = alignPage({
  heading: 'justify-items', rep: 'justify-items-center',
  lead: 'کلاس‌هایی برای تعیین چینش افقی آیتم‌ها داخل خانه‌ی grid.',
  rows: [
    ['justify-items-start', 'justify-items: start;'],
    ['justify-items-end', 'justify-items: end;'],
    ['justify-items-end-safe', 'justify-items: safe end;'],
    ['justify-items-center', 'justify-items: center;'],
    ['justify-items-center-safe', 'justify-items: safe center;'],
    ['justify-items-stretch', 'justify-items: stretch;'],
    ['justify-items-normal', 'justify-items: normal;'],
  ],
  body: [
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'این کلاس‌ها روی **ظرف grid** گذاشته می‌شوند و همه‌ی آیتم‌ها را در خانه‌ی خودشان هم‌تراز می‌کنند:' },
    demo('<div class="grid justify-items-center gap-2 rounded-lg border border-slate-300 p-2">' + bs(3) + '</div>', '<div class="grid justify-items-center ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
  ],
})

C['justify-self'] = alignPage({
  heading: 'justify-self', rep: 'justify-self-end',
  lead: 'کلاس‌هایی برای تعیین چینش افقی **یک** آیتم داخل خانه‌ی grid.',
  rows: [
    ['justify-self-auto', 'justify-self: auto;'],
    ['justify-self-start', 'justify-self: start;'],
    ['justify-self-center', 'justify-self: center;'],
    ['justify-self-center-safe', 'justify-self: safe center;'],
    ['justify-self-end', 'justify-self: end;'],
    ['justify-self-end-safe', 'justify-self: safe end;'],
    ['justify-self-stretch', 'justify-self: stretch;'],
  ],
  body: [
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'مثل `justify-items` است ولی روی خود آیتم گذاشته می‌شود و فقط همان را جابه‌جا می‌کند:' },
    demo('<div class="grid grid-cols-3 gap-2 rounded-lg border border-slate-300 p-2"><div></div><div class="justify-self-end">' + b('02') + '</div><div></div></div>', '<div class="grid justify-items-stretch ...">\n  <div>01</div>\n  <div class="justify-self-end ...">02</div>\n  <div>03</div>\n</div>'),
  ],
})

C['align-content'] = alignPage({
  heading: 'align-content', rep: 'content-between',
  lead: 'کلاس‌هایی برای تعیین چینش **ردیف‌ها** در امتداد محور متقاطع (عمودی، در حالت عادی).',
  rows: [
    ['content-normal', 'align-content: normal;'],
    ['content-center', 'align-content: center;'],
    ['content-start', 'align-content: flex-start;'],
    ['content-end', 'align-content: flex-end;'],
    ['content-between', 'align-content: space-between;'],
    ['content-around', 'align-content: space-around;'],
    ['content-evenly', 'align-content: space-evenly;'],
    ['content-baseline', 'align-content: baseline;'],
    ['content-stretch', 'align-content: stretch;'],
  ],
  body: [
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'وقتی چند ردیف داری (مثلاً `flex-wrap` یا grid)، این کلاس‌ها فضای اضافه‌ی عمودی را بین ردیف‌ها تقسیم می‌کنند. ظرف باید ارتفاع بیشتر از محتوا داشته باشد:' },
    demo('<div class="grid h-40 grid-cols-2 content-between gap-2 rounded-lg border border-slate-300 p-2">' + bs(4, 'h-8') + '</div>', '<div class="h-56 grid grid-cols-3 gap-4 content-between ...">\n  <div>01</div>\n  <!-- ... -->\n</div>'),
  ],
})

C['align-items'] = alignPage({
  heading: 'align-items', rep: 'items-center',
  lead: 'کلاس‌هایی برای تعیین چینش آیتم‌ها در امتداد محور متقاطع ظرف.',
  rows: [
    ['items-start', 'align-items: flex-start;'],
    ['items-end', 'align-items: flex-end;'],
    ['items-end-safe', 'align-items: safe flex-end;'],
    ['items-center', 'align-items: center;'],
    ['items-center-safe', 'align-items: safe center;'],
    ['items-baseline', 'align-items: baseline;'],
    ['items-baseline-last', 'align-items: last baseline;'],
    ['items-stretch', 'align-items: stretch;'],
  ],
  body: [
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`items-center` پرکاربردترین است و آیتم‌ها را در امتداد عمودی وسط می‌گذارد:' },
    demo('<div class="flex h-24 items-center gap-2 rounded-lg border border-slate-300 p-2">' + b('01', 'h-8 w-12') + b('02', 'h-14 w-12') + b('03', 'h-10 w-12') + '</div>', '<div class="flex items-center ...">\n  <div class="py-4">01</div>\n  <div class="py-12">02</div>\n  <div class="py-8">03</div>\n</div>'),
    demo('<div class="flex h-24 items-end gap-2 rounded-lg border border-slate-300 p-2">' + b('01', 'h-8 w-12') + b('02', 'h-14 w-12') + b('03', 'h-10 w-12') + '</div>', '<div class="flex items-end ...">...</div>'),
    { t: 'p', text: '`items-baseline` متن‌ها را بر اساس خط پایه‌شان (baseline) هم‌تراز می‌کند و `items-stretch` (پیش‌فرض) همه را به ارتفاع ظرف می‌کشد.' },
  ],
})

C['align-self'] = alignPage({
  heading: 'align-self', rep: 'self-end',
  lead: 'کلاس‌هایی برای تعیین چینش **یک** آیتم در امتداد محور متقاطع.',
  rows: [
    ['self-auto', 'align-self: auto;'],
    ['self-start', 'align-self: flex-start;'],
    ['self-end', 'align-self: flex-end;'],
    ['self-end-safe', 'align-self: safe flex-end;'],
    ['self-center', 'align-self: center;'],
    ['self-center-safe', 'align-self: safe center;'],
    ['self-stretch', 'align-self: stretch;'],
    ['self-baseline', 'align-self: baseline;'],
    ['self-baseline-last', 'align-self: last baseline;'],
  ],
  body: [
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: '`align-items` ظرف را برای همه تعیین می‌کند. با `self-*` فقط یک آیتم را override کن:' },
    demo('<div class="flex h-24 items-stretch gap-2 rounded-lg border border-slate-300 p-2"><div class="flex w-12 items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white">01</div><div class="flex w-12 items-center justify-center self-center rounded-lg bg-indigo-500 text-sm font-semibold text-white">02</div><div class="flex w-12 items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white">03</div></div>', '<div class="flex items-stretch ...">\n  <div>01</div>\n  <div class="self-center">02</div>\n  <div>03</div>\n</div>'),
  ],
})

var placeRows = function (p, prop, hasBetween) {
  var r = [
    [p + '-center', prop + ': center;'],
    [p + '-center-safe', prop + ': safe center;'],
    [p + '-start', prop + ': start;'],
    [p + '-end', prop + ': end;'],
    [p + '-end-safe', prop + ': safe end;'],
  ]
  if (hasBetween) r.push([p + '-between', prop + ': space-between;'], [p + '-around', prop + ': space-around;'], [p + '-evenly', prop + ': space-evenly;'])
  r.push([p + '-baseline', prop + ': baseline;'], [p + '-stretch', prop + ': stretch;'])
  return r
}

C['place-content'] = alignPage({
  heading: 'place-content', rep: 'place-content-center',
  lead: 'کلاس‌هایی برای تعیین چینش محتوا در هر دو محور grid با یک کلاس (میان‌بر `align-content` و `justify-content`).',
  rows: placeRows('place-content', 'place-content', true),
  body: [
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: '`place-content-center` ساده‌ترین راه برای وسط‌چین کردن کامل (افقی و عمودی) یک grid است:' },
    demo('<div class="grid h-40 place-content-center gap-2 rounded-lg border border-slate-300 p-2">' + bs(2, 'h-10 w-24') + '</div>', '<div class="grid h-48 grid-cols-2 place-content-center gap-4 ...">\n  <div>01</div>\n  <div>02</div>\n</div>'),
  ],
})

C['place-items'] = alignPage({
  heading: 'place-items', rep: 'place-items-center',
  lead: 'کلاس‌هایی برای تعیین چینش آیتم‌ها در هر دو محور با یک کلاس (میان‌بر `align-items` و `justify-items`).',
  rows: placeRows('place-items', 'place-items', false),
  body: [
    { t: 'h2', text: 'مثال' },
    demo('<div class="grid h-40 place-items-center gap-2 rounded-lg border border-slate-300 p-2">' + bs(1, 'h-10 w-24') + '</div>', '<div class="grid grid-cols-3 gap-4 place-items-center ...">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
  ],
})

C['place-self'] = alignPage({
  heading: 'place-self', rep: 'place-self-end',
  lead: 'کلاس‌هایی برای تعیین چینش **یک** آیتم در هر دو محور با یک کلاس.',
  rows: [
    ['place-self-auto', 'place-self: auto;'],
    ['place-self-start', 'place-self: start;'],
    ['place-self-end', 'place-self: end;'],
    ['place-self-end-safe', 'place-self: safe end;'],
    ['place-self-center', 'place-self: center;'],
    ['place-self-center-safe', 'place-self: safe center;'],
    ['place-self-stretch', 'place-self: stretch;'],
  ],
  body: [
    { t: 'h2', text: 'مثال' },
    demo('<div class="grid h-32 grid-cols-3 gap-2 rounded-lg border border-slate-300 p-2"><div class="size-8 rounded-sm bg-sky-500"></div><div class="size-8 place-self-center rounded-sm bg-indigo-500"></div><div class="size-8 rounded-sm bg-sky-500"></div></div>', '<div class="grid grid-cols-3 gap-4 ...">\n  <div>01</div>\n  <div class="place-self-center">02</div>\n  <div>03</div>\n</div>'),
  ],
})

/* ======================= Spacing ======================= */
C['padding'] = {
  heading: 'padding',
  lead: 'کلاس‌هایی برای کنترل فاصله‌ی داخلی (padding) یک عنصر.',
  blocks: [
    tbl([
      ['p-<number>', 'padding: calc(var(--spacing) * <number>);'],
      ['p-px', 'padding: 1px;'],
      ['px-<number>', 'padding-inline: calc(var(--spacing) * <number>);'],
      ['py-<number>', 'padding-block: calc(var(--spacing) * <number>);'],
      ['ps-<number>', 'padding-inline-start: calc(var(--spacing) * <number>);'],
      ['pe-<number>', 'padding-inline-end: calc(var(--spacing) * <number>);'],
      ['pt-<number>', 'padding-top: calc(var(--spacing) * <number>);'],
      ['pr-<number>', 'padding-right: calc(var(--spacing) * <number>);'],
      ['pb-<number>', 'padding-bottom: calc(var(--spacing) * <number>);'],
      ['pl-<number>', 'padding-left: calc(var(--spacing) * <number>);'],
    ].concat(arb('p', 'padding'))),
    { t: 'p', text: 'هر عدد در مقیاس فاصله‌ی تم برابر ۰.۲۵rem (۴ پیکسل) است، پس `p-4` یعنی ۱rem و `p-8` یعنی ۲rem. در Tailwind ۴ هر عدد صحیح یا اعشاری دلخواه (مثل `p-13` یا `p-2.5`) کار می‌کند.' },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'همه‌ی طرف‌ها' },
    demo('<div class="rounded-lg bg-sky-100 p-2 dark:bg-sky-950"><div class="rounded-sm bg-sky-500 p-8 text-center text-sm text-white">p-8</div></div>', '<div class="p-8 ...">p-8</div>'),
    { t: 'h3', text: 'یک طرف' },
    { t: 'p', text: 'با `pt-*`، `pr-*`، `pb-*` و `pl-*` یک طرف مشخص را بده:' },
    demo('<div class="rounded-lg bg-sky-100 p-2 dark:bg-sky-950"><div class="rounded-sm bg-sky-500 pt-8 text-center text-sm text-white">pt-8</div></div>', '<div class="pt-6 ...">pt-6</div>\n<div class="pr-4 ...">pr-4</div>\n<div class="pb-8 ...">pb-8</div>\n<div class="pl-2 ...">pl-2</div>'),
    { t: 'h3', text: 'افقی و عمودی' },
    demo('<div class="rounded-lg bg-sky-100 p-2 dark:bg-sky-950"><div class="rounded-sm bg-sky-500 px-8 py-2 text-center text-sm text-white">px-8 py-2</div></div>', '<div class="px-8 ...">px-8</div>\n<div class="py-8 ...">py-8</div>'),
    { t: 'h3', text: 'جهت منطقی (RTL)' },
    { t: 'p', text: '`ps-*` (شروع) و `pe-*` (پایان) با جهت نوشتار تغییر می‌کنند. در فارسی `ps-4` یعنی padding از **راست**. برای سایت‌های چندزبانه یا RTL، به‌جای `pl-*` و `pr-*` از این‌ها استفاده کن:' },
    { t: 'code', text: '<div dir="ltr"><div class="ps-8">ps-8</div></div>\n<div dir="rtl"><div class="ps-8">ps-8</div></div>', file: 'HTML' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="p-[5px] ...">...</div>\n<div class="p-(--my-padding) ...">...</div>', file: 'HTML' },
    rep('p-4'),
    { t: 'h2', text: 'سفارشی‌سازی تم' },
    { t: 'p', text: 'همه‌ی فاصله‌ها از یک متغیر پایه می‌آیند. با تغییر آن، همه‌ی `p-*`، `m-*`، `gap-*`، `w-*` و غیره تغییر می‌کنند:' },
    { t: 'code', text: '@theme {\n  --spacing: 4px;\n}', file: 'CSS' },
  ],
}

C['margin'] = {
  heading: 'margin',
  lead: 'کلاس‌هایی برای کنترل فاصله‌ی خارجی (margin) یک عنصر.',
  blocks: [
    tbl([
      ['m-<number>', 'margin: calc(var(--spacing) * <number>);'],
      ['-m-<number>', 'margin: calc(var(--spacing) * -<number>);'],
      ['m-auto', 'margin: auto;'],
      ['m-px', 'margin: 1px;'],
      ['-m-px', 'margin: -1px;'],
      ['mx-<number>', 'margin-inline: calc(var(--spacing) * <number>);'],
      ['my-<number>', 'margin-block: calc(var(--spacing) * <number>);'],
      ['ms-<number>', 'margin-inline-start: calc(var(--spacing) * <number>);'],
      ['me-<number>', 'margin-inline-end: calc(var(--spacing) * <number>);'],
      ['mt-<number>', 'margin-top: calc(var(--spacing) * <number>);'],
      ['mr-<number>', 'margin-right: calc(var(--spacing) * <number>);'],
      ['mb-<number>', 'margin-bottom: calc(var(--spacing) * <number>);'],
      ['ml-<number>', 'margin-left: calc(var(--spacing) * <number>);'],
      ['space-x-<number>', 'فاصله‌ی افقی بین فرزندان'],
      ['space-y-<number>', 'فاصله‌ی عمودی بین فرزندان'],
      ['space-x-reverse / space-y-reverse', 'برای ترتیب معکوس (flex-row-reverse)'],
    ].concat(arb('m', 'margin'))),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'همه‌ی طرف‌ها' },
    demo('<div class="rounded-lg bg-slate-200 text-center text-sm dark:bg-slate-700"><div class="m-8 rounded-sm bg-sky-500 py-3 text-white">m-8</div></div>', '<div class="m-8 ...">m-8</div>'),
    { t: 'h3', text: 'یک طرف و محور' },
    demo('<div class="rounded-lg bg-slate-200 text-center text-sm dark:bg-slate-700"><div class="mx-12 mt-4 rounded-sm bg-sky-500 py-3 text-white">mx-12 mt-4</div></div>', '<div class="mt-8 ...">mt-8</div>\n<div class="mx-8 ...">mx-8</div>'),
    { t: 'h3', text: 'margin منفی' },
    { t: 'p', text: 'با `-` قبل از کلاس، margin منفی می‌گیری که عنصر را به بیرون یا روی عنصر مجاور می‌کشد:' },
    { t: 'code', text: '<div class="h-16 w-36 bg-sky-400 opacity-20 ..."></div>\n<div class="-mt-8 bg-sky-300 ...">-mt-8</div>', file: 'HTML' },
    { t: 'h3', text: 'margin خودکار' },
    { t: 'p', text: '`mx-auto` عنصری که عرض مشخص دارد را در وسط والد می‌گذارد. در flex هم `ms-auto` عنصر را به انتهای ردیف می‌راند:' },
    demo('<div class="rounded-lg bg-slate-200 py-2 dark:bg-slate-700"><div class="mx-auto w-40 rounded-sm bg-sky-500 py-3 text-center text-sm text-white">mx-auto</div></div>', '<div class="mx-auto max-w-md ...">...</div>'),
    { t: 'h3', text: 'جهت منطقی (RTL)' },
    { t: 'p', text: '`ms-*` و `me-*` مثل `ps-*` و `pe-*` با جهت نوشتار عوض می‌شوند. در پروژه‌های فارسی همیشه ترجیح بده از این‌ها به‌جای `ml-*` و `mr-*` استفاده کنی.' },
    { t: 'h3', text: 'فاصله بین فرزندان (space-x و space-y)' },
    { t: 'p', text: 'با `space-y-4` روی والد، بین همه‌ی فرزندان ۱rem فاصله‌ی عمودی می‌افتد، بدون فاصله‌ی اضافی بالای اولی یا پایین آخری:' },
    demo('<div class="flex w-24 flex-col space-y-3">' + bs(3, 'h-10 w-full') + '</div>', '<div class="space-y-4">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
    demo('<div class="flex space-x-3">' + bs(3) + '</div>', '<div class="flex space-x-4">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>'),
    { t: 'note', text: 'برای ساخت فاصله بین عنصرهای flex و grid، `gap-*` گزینه‌ی بهتری است و با `flex-wrap`، `flex-col-reverse` و RTL هم درست کار می‌کند. `space-*` با این موارد ممکن است مشکل ایجاد کند.' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="m-[5px] ...">...</div>\n<div class="m-(--my-margin) ...">...</div>', file: 'HTML' },
    rep('m-4'),
  ],
}
