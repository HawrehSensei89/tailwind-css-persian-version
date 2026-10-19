// Preflight + بقیه‌ی گروه Layout
var C = window.CONTENT
var L = function () { return Array.prototype.slice.call(arguments).join('\n') }
var bx = 'rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500'
var cell = function (n, extra) { return '<div class="flex items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white ' + (extra || '') + '">' + n + '</div>' }
var variants = function (name) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + name + '` یا `md:' + name + '`. (صفحه‌های «حالت‌ها» و «طراحی ریسپانسیو» را ببین.)' }
}

/* ================= Preflight ================= */
C['preflight'] = {
  heading: 'Preflight',
  lead: 'یک مجموعه استایل پایه‌ی از پیش‌ساخته که تفاوت مرورگرها را از بین می‌برد و کار با Tailwind را ساده می‌کند.',
  blocks: [
    { t: 'h2', text: 'مقدمه' },
    { t: 'p', text: 'Tailwind همراه خودش یک لایه‌ی استایل پایه به نام **Preflight** دارد که بر پایه‌ی Modern Normalize ساخته شده. با `@import "tailwindcss"` خودکار اعمال می‌شود و برای اینکه کار با utility ها قابل‌پیش‌بینی باشد، چند پیش‌فرض مرورگر را عوض می‌کند. این استایل‌ها در لایه‌ی `base` قرار می‌گیرند و utility ها همیشه روی آن‌ها اولویت دارند.' },
    { t: 'p', text: 'در ادامه مهم‌ترین چیزهایی که Preflight عوض می‌کند را می‌بینی.' },

    { t: 'h2', text: 'حذف margin ها' },
    { t: 'p', text: 'همه‌ی margin ها و padding های پیش‌فرض مرورگر پاک می‌شوند، از جمله روی عنصرهایی مثل `h1`، `p`، `blockquote` و `ul`. چون فاصله را خودت با utility ها (مثل `mt-4`) می‌دهی، این از دست‌وپاگیر بودن margin های ناخواسته جلوگیری می‌کند.' },
    { t: 'code', text: '*,\n::after,\n::before,\n::backdrop,\n::file-selector-button {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0 solid;\n}', file: 'CSS' },

    { t: 'h2', text: 'همه‌ی border ها بدون ظاهر' },
    { t: 'p', text: 'همه‌ی عنصرها به‌صورت `border: 0 solid` تنظیم می‌شوند. برای نمایش border کافی است فقط عرض آن را بدهی، مثل `border` یا `border-2`، و نیازی به نوشتن `border-style` نیست. رنگ پیش‌فرض border برابر `currentColor` است، پس معمولاً رنگ را هم خودت می‌دهی، مثل `border-gray-200`.' },
    { t: 'demo', html: '<div class="rounded-lg border border-slate-300 p-4 text-sm">border + border-slate-300</div>',
      code: '<div class="border border-slate-300 p-4">...</div>' },

    { t: 'h2', text: 'عنوان‌ها بدون استایل' },
    { t: 'p', text: 'همه‌ی عنوان‌های `h1` تا `h6` هم‌اندازه و هم‌ضخامت با متن عادی می‌شوند. ظاهر آن‌ها را با utility ها بده، مثل `text-2xl font-bold`. این کار باعث می‌شود اندازه‌ی عنوان به سطح معنایی آن گره نخورد و به‌خاطر سئو و دسترس‌پذیری، سطح درست را انتخاب کنی:' },
    { t: 'code', text: '<h1 class="text-2xl font-bold">Heading</h1>', file: 'HTML' },

    { t: 'h2', text: 'لیست‌ها بدون استایل' },
    { t: 'p', text: 'لیست‌های مرتب و نامرتب نقطه و شماره ندارند و padding هم ندارند. برای برگرداندن آن‌ها از `list-disc` یا `list-decimal` و `ps-*` استفاده کن:' },
    { t: 'code', text: '<ul class="list-disc ps-5">\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>', file: 'HTML' },
    { t: 'note', text: 'اگر لیست در HTML معنای لیست را دارد ولی ظاهرش لیست نیست، بعضی مرورگرها (مثل Safari) آن را برای screen reader لیست اعلام نمی‌کنند. در این حالت `role="list"` اضافه کن.' },

    { t: 'h2', text: 'تصویرها block هستند' },
    { t: 'p', text: 'عنصرهای `img`، `svg`، `video`، `canvas`، `audio`، `iframe`، `embed` و `object` به‌صورت `display: block` و `vertical-align: middle` تنظیم می‌شوند. این از فاصله‌ی عجیب زیر تصویر (به‌خاطر رفتار inline) جلوگیری می‌کند. اگر بخواهی دوباره inline شوند، کلاس `inline` بده.' },
    { t: 'p', text: 'همچنین `img` و `video` به‌صورت پیش‌فرض `max-width: 100%` و `height: auto` دارند، پس از والد بزرگ‌تر نمی‌شوند.' },
    { t: 'code', text: 'img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}', file: 'CSS' },

    { t: 'h2', text: 'عنصرهای فرم' },
    { t: 'p', text: 'عنصرهای `button`، `input`، `select` و `textarea` فونت، اندازه، رنگ و ضخامت را از والد به ارث می‌برند، پس با بقیه‌ی صفحه هماهنگ‌اند. پس‌زمینه‌ی دکمه‌ها شفاف است و border ندارند. دکمه‌ها نشانگر `default` دارند (نه `pointer`)، که اگر می‌خواهی دست نشان بدهد باید `cursor-pointer` بگذاری.' },
    { t: 'p', text: 'رنگ `placeholder` هم در Tailwind ۴ همان رنگ متن با ۵۰٪ شفافیت است، نه خاکستری ثابت.' },

    { t: 'h2', text: 'پیش‌فرض‌های سراسری' },
    { t: 'table', rows: [
      ['line-height', 'برای `html` برابر ۱.۵ است'],
      ['tab-size', 'برابر ۴'],
      ['font-family', 'همان `--font-sans` از تم، پیش‌فرضش پشته‌ی فونت سیستمی است'],
      ['-webkit-text-size-adjust', 'برابر 100% تا روی موبایل متن خودکار بزرگ نشود'],
      ['[hidden]', 'عنصرهای با ویژگی `hidden` همیشه پنهان می‌شوند'],
    ] },

    { t: 'h2', text: 'افزودن استایل پایه‌ی خودت' },
    { t: 'p', text: 'برای اضافه کردن یا override کردن استایل‌های پایه، از `@layer base` استفاده کن تا اولویتش درست باشد:' },
    { t: 'code', text: '@layer base {\n  h1 {\n    font-size: var(--text-2xl);\n  }\n  h2 {\n    font-size: var(--text-xl);\n  }\n  a {\n    color: var(--color-sky-600);\n  }\n}', file: 'CSS' },

    { t: 'h2', text: 'خاموش کردن Preflight' },
    { t: 'p', text: 'اگر Preflight با پروژه‌ات تداخل دارد، به‌جای `@import "tailwindcss"` فقط بخش‌های لازم را ایمپورت کن و `preflight.css` را کنار بگذار:' },
    { t: 'code', text: '@layer theme, base, components, utilities;\n\n@import "tailwindcss/theme.css" layer(theme);\n@import "tailwindcss/utilities.css" layer(utilities);', file: 'CSS' },
    { t: 'p', text: 'اگر بعداً خواستی آن را برگردانی، `@import "tailwindcss/preflight.css" layer(base);` را به همین فایل اضافه کن.' },
  ],
}

/* ================= columns ================= */
C['columns'] = {
  heading: 'columns',
  lead: 'کلاس‌هایی برای تعیین تعداد ستون‌های یک عنصر.',
  blocks: [
    { t: 'table', rows: [
      ['columns-<number>', 'columns: <number>;'],
      ['columns-3xs', 'columns: var(--container-3xs); /* 16rem */'],
      ['columns-2xs', 'columns: var(--container-2xs); /* 18rem */'],
      ['columns-xs', 'columns: var(--container-xs); /* 20rem */'],
      ['columns-sm', 'columns: var(--container-sm); /* 24rem */'],
      ['columns-md', 'columns: var(--container-md); /* 28rem */'],
      ['columns-lg', 'columns: var(--container-lg); /* 32rem */'],
      ['columns-xl', 'columns: var(--container-xl); /* 36rem */'],
      ['columns-2xl … columns-7xl', 'از 42rem تا 80rem'],
      ['columns-auto', 'columns: auto;'],
      ['columns-(<custom-property>)', 'columns: var(<custom-property>);'],
      ['columns-[<value>]', 'columns: <value>;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'تعداد مشخص ستون' },
    { t: 'p', text: 'با `columns-2`، `columns-3` و مشابه آن‌ها تعداد ستون را تعیین کن. عرض ستون‌ها بر اساس عرض والد خودکار حساب می‌شود:' },
    { t: 'demo', html: '<div class="columns-3 gap-3"><div class="mb-3 h-16 rounded-lg bg-sky-400"></div><div class="mb-3 h-24 rounded-lg bg-indigo-400"></div><div class="mb-3 h-20 rounded-lg bg-sky-500"></div><div class="mb-3 h-28 rounded-lg bg-indigo-500"></div><div class="mb-3 h-14 rounded-lg bg-sky-600"></div><div class="mb-3 h-20 rounded-lg bg-indigo-600"></div></div>',
      code: L('<div class="columns-3 gap-8 ...">', '  <img class="aspect-3/2 ..." src="/img/1.jpg" />', '  <img class="aspect-square ..." src="/img/2.jpg" />', '  <!-- ... -->', '</div>') },
    { t: 'h3', text: 'عرض ستون' },
    { t: 'p', text: 'با `columns-xs`، `columns-sm` و مشابه آن، به‌جای تعداد، **عرض ایده‌آل** هر ستون را می‌دهی و مرورگر هر تعداد ستون که جا شود می‌سازد:' },
    { t: 'code', text: '<div class="columns-3xs ...">\n  <img class="aspect-3/2 ..." src="..." />\n  <!-- ... -->\n</div>', file: 'HTML' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="columns-[10rem] ...">...</div>\n<div class="columns-(--my-columns) ...">...</div>', file: 'HTML' },
    { t: 'h3', text: 'ریسپانسیو' },
    { t: 'code', text: '<div class="columns-2 md:columns-3 lg:columns-4 ...">...</div>', file: 'HTML' },
    { t: 'h2', text: 'سفارشی‌سازی تم' },
    { t: 'p', text: 'کلاس‌های عرض‌دار از متغیرهای `--container-*` ساخته می‌شوند:' },
    { t: 'code', text: '@theme {\n  --container-4xs: 14rem;\n}', file: 'CSS' },
  ],
}

/* ================= break-after / before / inside ================= */
var breakPage = function (prop, title, desc, extra) {
  var rows = [
    ['break-' + prop + '-auto', 'break-' + prop + ': auto;'],
    ['break-' + prop + '-avoid', 'break-' + prop + ': avoid;'],
    ['break-' + prop + '-all', 'break-' + prop + ': all;'],
    ['break-' + prop + '-avoid-page', 'break-' + prop + ': avoid-page;'],
    ['break-' + prop + '-page', 'break-' + prop + ': page;'],
    ['break-' + prop + '-left', 'break-' + prop + ': left;'],
    ['break-' + prop + '-right', 'break-' + prop + ': right;'],
    ['break-' + prop + '-column', 'break-' + prop + ': column;'],
  ]
  return {
    heading: title, lead: desc,
    blocks: [
      { t: 'table', rows: rows },
      { t: 'h2', text: 'مثال' },
      { t: 'p', text: extra },
      { t: 'code', text: '<div class="columns-2">\n  <p>Well, let me tell you something, ...</p>\n  <p class="break-' + prop + '-column">Sure, go ahead, laugh...</p>\n  <p>Maybe we can live without...</p>\n</div>', file: 'HTML' },
      variants('break-' + prop + '-column'),
    ],
  }
}
C['break-after'] = breakPage('after', 'break-after', 'کلاس‌هایی برای کنترل شکستن ستون یا صفحه **بعد** از یک عنصر.', 'در این مثال بعد از پاراگراف دوم به‌اجبار ستون جدید شروع می‌شود (در چاپ یا چندستونه):')
C['break-before'] = breakPage('before', 'break-before', 'کلاس‌هایی برای کنترل شکستن ستون یا صفحه **قبل** از یک عنصر.', 'در این مثال پاراگراف دوم همیشه در ابتدای یک ستون جدید شروع می‌شود:')

C['break-inside'] = {
  heading: 'break-inside',
  lead: 'کلاس‌هایی برای کنترل شکستن ستون یا صفحه **داخل** یک عنصر.',
  blocks: [
    { t: 'table', rows: [
      ['break-inside-auto', 'break-inside: auto;'],
      ['break-inside-avoid', 'break-inside: avoid;'],
      ['break-inside-avoid-page', 'break-inside: avoid-page;'],
      ['break-inside-avoid-column', 'break-inside: avoid-column;'],
    ] },
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'برای اینکه یک کارت وسط دو ستون بریده نشود، `break-inside-avoid-column` بده:' },
    { t: 'code', text: '<div class="columns-2">\n  <p>Well, let me tell you something, ...</p>\n  <p class="break-inside-avoid-column">Sure, go ahead, laugh...</p>\n  <p>Maybe we can live without...</p>\n</div>', file: 'HTML' },
    variants('break-inside-avoid'),
  ],
}

/* ================= box-decoration-break ================= */
C['box-decoration-break'] = {
  heading: 'box-decoration-break',
  lead: 'کلاس‌هایی برای تعیین رفتار تزئینات یک عنصر (پس‌زمینه، border، padding) وقتی از یک خط به خط بعد می‌شکند.',
  blocks: [
    { t: 'table', rows: [
      ['box-decoration-clone', 'box-decoration-break: clone;'],
      ['box-decoration-slice', 'box-decoration-break: slice;'],
    ] },
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'با `box-decoration-slice` (پیش‌فرض) تزئینات انگار یک تکه است و در شکست خط بریده می‌شود. با `box-decoration-clone` هر تکه جدا و کامل تزئین می‌شود:' },
    { t: 'demo', html: '<div class="max-w-xs text-2xl font-bold leading-loose"><span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">Hello<br />World</span></div><div class="mt-3 max-w-xs text-2xl font-bold leading-loose"><span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white">Hello<br />World</span></div>',
      code: L('<span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">', '  Hello<br />World', '</span>', '', '<span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">', '  Hello<br />World', '</span>') },
    variants('box-decoration-clone'),
  ],
}

/* ================= box-sizing ================= */
C['box-sizing'] = {
  heading: 'box-sizing',
  lead: 'کلاس‌هایی برای تعیین اینکه مرورگر اندازه‌ی عنصر را چطور حساب کند.',
  blocks: [
    { t: 'table', rows: [
      ['box-border', 'box-sizing: border-box;'],
      ['box-content', 'box-sizing: content-box;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'با border-box' },
    { t: 'p', text: '`box-border` باعث می‌شود border و padding هم **داخل** عرض و ارتفاع عنصر حساب شوند. مثلاً `w-32` همیشه ۱۲۸ پیکسل کل عنصر می‌ماند. Tailwind به‌طور پیش‌فرض (از طریق Preflight) همه‌ی عنصرها را `border-box` می‌کند.' },
    { t: 'demo', html: '<div class="box-border size-32 border-4 border-sky-500 bg-sky-100 p-4 text-sm">128 × 128</div>',
      code: '<div class="box-border size-32 border-4 p-4 ...">128px x 128px</div>' },
    { t: 'h3', text: 'با content-box' },
    { t: 'p', text: '`box-content` اندازه را فقط برای محتوا حساب می‌کند و border و padding **اضافه** می‌شوند، پس عنصر بزرگ‌تر از `size-32` می‌شود:' },
    { t: 'demo', html: '<div class="box-content size-32 border-4 border-sky-500 bg-sky-100 p-4 text-sm">160 × 160</div>',
      code: '<div class="box-content size-32 border-4 p-4 ...">160px x 160px</div>' },
    variants('box-border'),
  ],
}

/* ================= display ================= */
C['display'] = {
  heading: 'display',
  lead: 'کلاس‌هایی برای کنترل نوع نمایش (display) یک عنصر.',
  blocks: [
    { t: 'table', rows: [
      ['inline', 'display: inline;'],
      ['inline-block', 'display: inline-block;'],
      ['block', 'display: block;'],
      ['flow-root', 'display: flow-root;'],
      ['flex', 'display: flex;'],
      ['inline-flex', 'display: inline-flex;'],
      ['grid', 'display: grid;'],
      ['inline-grid', 'display: inline-grid;'],
      ['contents', 'display: contents;'],
      ['table', 'display: table;'],
      ['inline-table', 'display: inline-table;'],
      ['table-caption', 'display: table-caption;'],
      ['table-cell', 'display: table-cell;'],
      ['table-column', 'display: table-column;'],
      ['table-column-group', 'display: table-column-group;'],
      ['table-footer-group', 'display: table-footer-group;'],
      ['table-header-group', 'display: table-header-group;'],
      ['table-row-group', 'display: table-row-group;'],
      ['table-row', 'display: table-row;'],
      ['list-item', 'display: list-item;'],
      ['hidden', 'display: none;'],
      ['sr-only', 'position: absolute; width: 1px; height: 1px; ... (فقط برای screen reader)'],
      ['not-sr-only', 'position: static; width: auto; height: auto; ...'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'block و inline' },
    { t: 'p', text: '`inline` عنصر را در امتداد متن می‌گذارد و عرض و ارتفاع نمی‌پذیرد. `block` تمام عرض را می‌گیرد و از خط جدید شروع می‌شود. `inline-block` هم در امتداد متن است ولی اندازه می‌پذیرد:' },
    { t: 'demo', html: '<div class="text-sm"><span class="inline rounded-sm bg-sky-200 px-2">inline</span> <span class="inline rounded-sm bg-sky-200 px-2">inline</span> <span class="inline rounded-sm bg-sky-200 px-2">inline</span><div class="mt-3"><span class="inline-block rounded-sm bg-indigo-200 px-4 py-2">inline-block</span> <span class="inline-block rounded-sm bg-indigo-200 px-4 py-2">inline-block</span></div><div class="mt-3 space-y-1"><span class="block rounded-sm bg-pink-200 px-2">block</span><span class="block rounded-sm bg-pink-200 px-2">block</span></div></div>',
      code: L('<span class="inline">...</span>', '<span class="inline-block px-4 py-2">...</span>', '<span class="block">...</span>') },
    { t: 'h3', text: 'flow-root' },
    { t: 'p', text: '`flow-root` یک بلوک می‌سازد که یک **block formatting context** جدید دارد. مثلاً وقتی فرزندش `float` است، والد دور آن را می‌پوشاند و فرو نمی‌ریزد:' },
    { t: 'code', text: '<div class="flow-root ...">\n  <div class="my-4 ...">Well, let me tell you something...</div>\n</div>', file: 'HTML' },
    { t: 'h3', text: 'flex و inline-flex' },
    { t: 'p', text: '`flex` یک ظرف flexbox بلوکی می‌سازد و `inline-flex` یک ظرف هم‌خط با متن:' },
    { t: 'demo', html: '<div class="flex items-center gap-2"><div class="flex size-10 items-center justify-center rounded-sm bg-sky-500 text-white">01</div><div class="flex size-10 items-center justify-center rounded-sm bg-sky-500 text-white">02</div><div class="flex size-10 items-center justify-center rounded-sm bg-sky-500 text-white">03</div></div>',
      code: '<div class="flex items-center gap-2">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n</div>' },
    { t: 'h3', text: 'grid و inline-grid' },
    { t: 'demo', html: '<div class="grid grid-cols-3 gap-2">' + cell('01', 'h-10') + cell('02', 'h-10') + cell('03', 'h-10') + cell('04', 'h-10') + cell('05', 'h-10') + cell('06', 'h-10') + '</div>',
      code: '<div class="grid grid-cols-3 gap-4">\n  <div>01</div>\n  <!-- ... -->\n  <div>09</div>\n</div>' },
    { t: 'h3', text: 'contents' },
    { t: 'p', text: '`contents` خود عنصر را از ساختار layout حذف می‌کند ولی فرزندانش باقی می‌مانند، انگار مستقیم در والد او بودند:' },
    { t: 'code', text: '<div class="flex ...">\n  <div class="flex-1 ...">01</div>\n  <div class="contents">\n    <div class="flex-1 ...">02</div>\n    <div class="flex-1 ...">03</div>\n  </div>\n  <div class="flex-1 ...">04</div>\n</div>', file: 'HTML' },
    { t: 'h3', text: 'hidden' },
    { t: 'p', text: '`hidden` عنصر را کاملاً از صفحه حذف می‌کند (جایی هم اشغال نمی‌کند). با `invisible` فرق دارد که جای عنصر را نگه می‌دارد:' },
    { t: 'code', text: '<div class="flex ...">\n  <div class="hidden ...">01</div>\n  <div>02</div>\n  <div>03</div>\n</div>', file: 'HTML' },
    { t: 'h3', text: 'فقط برای screen reader' },
    { t: 'p', text: '`sr-only` عنصر را از دید پنهان می‌کند ولی برای screen reader قابل خواندن می‌ماند، مناسب برچسب دکمه‌های فقط‌آیکون. `not-sr-only` آن را خنثی می‌کند (مثلاً در حالت focus):' },
    { t: 'code', text: '<a href="#">\n  <svg><!-- ... --></svg>\n  <span class="sr-only">Settings</span>\n</a>', file: 'HTML' },
    { t: 'h3', text: 'ریسپانسیو' },
    { t: 'code', text: '<div class="flex md:inline-flex ...">\n  <!-- ... -->\n</div>', file: 'HTML' },
  ],
}

/* ================= float ================= */
C['float'] = {
  heading: 'float',
  lead: 'کلاس‌هایی برای شناور کردن عنصر تا متن دور آن جریان پیدا کند.',
  blocks: [
    { t: 'table', rows: [
      ['float-right', 'float: right;'],
      ['float-left', 'float: left;'],
      ['float-start', 'float: inline-start;'],
      ['float-end', 'float: inline-end;'],
      ['float-none', 'float: none;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: 'با `float-left` یا `float-right`، عنصر به چپ یا راست می‌رود و متن دورش می‌پیچد:' },
    { t: 'demo', html: '<div class="overflow-hidden text-sm leading-6"><div class="float-right ml-3 size-24 ' + bx + '"></div><p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we have lots of fancy gadgets and doodads, but we don\'t really need them. Maybe we can live without libraries.</p></div>',
      code: L('<img class="float-right ..." src="/img/mountains.jpg" />', '<p>Maybe we can live without libraries, people like you and me. ...</p>') },
    { t: 'h3', text: 'float منطقی' },
    { t: 'p', text: '`float-start` و `float-end` بر اساس جهت نوشتار (LTR یا RTL) عمل می‌کنند. در فارسی `float-start` عنصر را به **راست** می‌برد، پس برای سایت‌های چندزبانه بهتر از `float-left` است:' },
    { t: 'code', text: '<article>\n  <img class="float-start ..." src="/img/mountains.jpg" />\n  <p>Maybe we can live without libraries...</p>\n</article>', file: 'HTML' },
    { t: 'h3', text: 'خنثی کردن float' },
    { t: 'p', text: '`float-none` اثر float را در یک breakpoint خاص برمی‌دارد:' },
    { t: 'code', text: '<img class="float-right md:float-none ..." src="..." />', file: 'HTML' },
    variants('float-left'),
  ],
}

/* ================= clear ================= */
C['clear'] = {
  heading: 'clear',
  lead: 'کلاس‌هایی برای تعیین اینکه یک عنصر دور عنصرهای float‌شده چطور بپیچد.',
  blocks: [
    { t: 'table', rows: [
      ['clear-left', 'clear: left;'],
      ['clear-right', 'clear: right;'],
      ['clear-both', 'clear: both;'],
      ['clear-start', 'clear: inline-start;'],
      ['clear-end', 'clear: inline-end;'],
      ['clear-none', 'clear: none;'],
    ] },
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'عنصری که `clear-left` دارد، زیر هر عنصر `float-left` قبلی می‌رود و کنار آن نمی‌نشیند:' },
    { t: 'code', text: '<article>\n  <img class="float-left ..." src="/img/green-mountains.jpg" />\n  <img class="float-right ..." src="/img/blue-mountains.jpg" />\n  <p class="clear-left ...">Maybe we can live without libraries...</p>\n</article>', file: 'HTML' },
    { t: 'p', text: '`clear-start` و `clear-end` منطقی‌اند و با جهت RTL/LTR تغییر می‌کنند.' },
    variants('clear-both'),
  ],
}

/* ================= isolation ================= */
C['isolation'] = {
  heading: 'isolation',
  lead: 'کلاس‌هایی برای کنترل اینکه یک عنصر stacking context جدید بسازد یا نه.',
  blocks: [
    { t: 'table', rows: [
      ['isolate', 'isolation: isolate;'],
      ['isolation-auto', 'isolation: auto;'],
    ] },
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: '`isolate` یک stacking context جدید می‌سازد، پس `z-index` فرزندان فقط داخل همین والد معنا دارد و با عنصرهای بیرون قاطی نمی‌شود. وقتی `z-10` و `z-50` در جاهای مختلف با هم تداخل دارند، این راه ساده‌ای برای مهار آن‌هاست:' },
    { t: 'code', text: '<div class="isolate ...">\n  <div class="z-10 ...">01</div>\n  <div class="z-50 ...">02</div>\n</div>', file: 'HTML' },
    variants('isolate'),
  ],
}

/* ================= object-fit ================= */
C['object-fit'] = {
  heading: 'object-fit',
  lead: 'کلاس‌هایی برای تعیین اینکه تصویر یا ویدیو چطور داخل کادرش جا بگیرد.',
  blocks: [
    { t: 'table', rows: [
      ['object-contain', 'object-fit: contain;'],
      ['object-cover', 'object-fit: cover;'],
      ['object-fill', 'object-fit: fill;'],
      ['object-none', 'object-fit: none;'],
      ['object-scale-down', 'object-fit: scale-down;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'table', rows: [
      ['object-contain', 'کل تصویر دیده می‌شود، با حفظ نسبت (ممکن است فضای خالی بماند)'],
      ['object-cover', 'کادر را کاملاً پر می‌کند، با حفظ نسبت (ممکن است بخشی بریده شود)'],
      ['object-fill', 'تصویر کش می‌آید تا کادر را پر کند (نسبت به‌هم می‌خورد)'],
      ['object-none', 'تصویر با اندازه‌ی اصلی و بدون تغییر می‌ماند'],
      ['object-scale-down', 'مثل none یا contain، هرکدام که کوچک‌تر شود'],
    ] },
    { t: 'code', text: '<img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />\n<img class="h-48 w-96 object-contain ..." src="/img/mountains.jpg" />', file: 'HTML' },
    variants('object-cover'),
  ],
}

/* ================= object-position ================= */
C['object-position'] = {
  heading: 'object-position',
  lead: 'کلاس‌هایی برای تعیین موقعیت تصویر یا ویدیو داخل کادرش.',
  blocks: [
    { t: 'table', rows: [
      ['object-top-left', 'object-position: top left;'],
      ['object-top', 'object-position: top;'],
      ['object-top-right', 'object-position: top right;'],
      ['object-left', 'object-position: left;'],
      ['object-center', 'object-position: center;'],
      ['object-right', 'object-position: right;'],
      ['object-bottom-left', 'object-position: bottom left;'],
      ['object-bottom', 'object-position: bottom;'],
      ['object-bottom-right', 'object-position: bottom right;'],
      ['object-(<custom-property>)', 'object-position: var(<custom-property>);'],
      ['object-[<value>]', 'object-position: <value>;'],
    ] },
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'معمولاً همراه `object-cover` می‌آید تا مشخص کنی کدام بخش تصویر در کادر دیده شود:' },
    { t: 'code', text: '<img class="size-24 object-cover object-top ..." src="/img/mountains.jpg" />\n<img class="size-24 object-cover object-[25%_75%] ..." src="/img/mountains.jpg" />', file: 'HTML' },
    variants('object-top'),
  ],
}

/* ================= overflow ================= */
C['overflow'] = {
  heading: 'overflow',
  lead: 'کلاس‌هایی برای کنترل اینکه محتوای سرریز چطور نمایش داده شود.',
  blocks: [
    { t: 'table', rows: [
      ['overflow-auto', 'overflow: auto;'],
      ['overflow-hidden', 'overflow: hidden;'],
      ['overflow-clip', 'overflow: clip;'],
      ['overflow-visible', 'overflow: visible;'],
      ['overflow-scroll', 'overflow: scroll;'],
      ['overflow-x-auto', 'overflow-x: auto;'],
      ['overflow-y-auto', 'overflow-y: auto;'],
      ['overflow-x-hidden', 'overflow-x: hidden;'],
      ['overflow-y-hidden', 'overflow-y: hidden;'],
      ['overflow-x-clip', 'overflow-x: clip;'],
      ['overflow-y-clip', 'overflow-y: clip;'],
      ['overflow-x-visible', 'overflow-x: visible;'],
      ['overflow-y-visible', 'overflow-y: visible;'],
      ['overflow-x-scroll', 'overflow-x: scroll;'],
      ['overflow-y-scroll', 'overflow-y: scroll;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'overflow-auto' },
    { t: 'p', text: 'فقط وقتی محتوا سرریز شود نوار اسکرول می‌آید:' },
    { t: 'demo', html: '<div class="h-24 w-64 overflow-auto rounded-lg border border-slate-300 p-3 text-sm"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Praesent commodo cursus magna.</p></div>',
      code: '<div class="h-32 overflow-auto ...">...</div>' },
    { t: 'h3', text: 'overflow-hidden' },
    { t: 'p', text: 'هر چیزی که بیرون از کادر برود بریده می‌شود. پرکاربرد برای `rounded` کردن تصویر داخل کارت:' },
    { t: 'code', text: '<div class="overflow-hidden rounded-xl ...">\n  <img src="..." />\n</div>', file: 'HTML' },
    { t: 'h3', text: 'overflow-scroll' },
    { t: 'p', text: '`overflow-scroll` نوار اسکرول را همیشه نشان می‌دهد (حتی اگر لازم نباشد). `overflow-x-scroll` و `overflow-y-scroll` همین کار را روی یک محور می‌کنند.' },
    { t: 'h3', text: 'overflow-clip و overflow-visible' },
    { t: 'p', text: '`overflow-clip` مثل hidden برش می‌دهد ولی اسکرول برنامه‌ای هم ندارد. `overflow-visible` اجازه می‌دهد محتوا بیرون بزند.' },
    variants('overflow-auto'),
  ],
}

/* ================= overscroll-behavior ================= */
C['overscroll-behavior'] = {
  heading: 'overscroll-behavior',
  lead: 'کلاس‌هایی برای کنترل رفتار وقتی کاربر به انتهای ناحیه‌ی اسکرول می‌رسد.',
  blocks: [
    { t: 'table', rows: [
      ['overscroll-auto', 'overscroll-behavior: auto;'],
      ['overscroll-contain', 'overscroll-behavior: contain;'],
      ['overscroll-none', 'overscroll-behavior: none;'],
      ['overscroll-x-auto', 'overscroll-behavior-x: auto;'],
      ['overscroll-x-contain', 'overscroll-behavior-x: contain;'],
      ['overscroll-x-none', 'overscroll-behavior-x: none;'],
      ['overscroll-y-auto', 'overscroll-behavior-y: auto;'],
      ['overscroll-y-contain', 'overscroll-behavior-y: contain;'],
      ['overscroll-y-none', 'overscroll-behavior-y: none;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: 'با `overscroll-contain` وقتی اسکرول داخل یک بخش (مثل مودال یا لیست) به انتها برسد، صفحه‌ی پشتش اسکرول نمی‌شود، ولی افکت bounce در همان بخش می‌ماند:' },
    { t: 'code', text: '<div class="h-48 overflow-auto overscroll-contain ...">\n  <!-- ... -->\n</div>', file: 'HTML' },
    { t: 'p', text: '`overscroll-none` هم مثل contain است ولی افکت bounce و pull-to-refresh را هم خاموش می‌کند. `overscroll-auto` رفتار پیش‌فرض است.' },
    variants('overscroll-contain'),
  ],
}

/* ================= position ================= */
C['position'] = {
  heading: 'position',
  lead: 'کلاس‌هایی برای تعیین نحوه‌ی قرارگیری عنصر در صفحه.',
  blocks: [
    { t: 'table', rows: [
      ['static', 'position: static;'],
      ['fixed', 'position: fixed;'],
      ['absolute', 'position: absolute;'],
      ['relative', 'position: relative;'],
      ['sticky', 'position: sticky;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'static' },
    { t: 'p', text: '`static` حالت عادی است: عنصر در جریان معمولی می‌ماند و `top`، `left` و مشابه آن‌ها روی آن اثر ندارند. همچنین والد برای عنصرهای `absolute` به‌حساب نمی‌آید.' },
    { t: 'h3', text: 'relative' },
    { t: 'p', text: '`relative` عنصر را در جریان نگه می‌دارد ولی با `top-*` و `left-*` جابه‌جا می‌شود، و مهم‌تر اینکه فرزندان `absolute` را به خود مقید می‌کند:' },
    { t: 'demo', html: '<div class="relative h-28 rounded-lg bg-slate-200 p-3 text-sm dark:bg-slate-700">relative parent<div class="absolute right-3 bottom-3 rounded-sm bg-sky-500 px-3 py-1 text-white">absolute</div></div>',
      code: L('<div class="relative ...">', '  <p>Relative parent</p>', '  <div class="absolute bottom-0 left-0 ...">', '    <p>Absolute child</p>', '  </div>', '</div>') },
    { t: 'h3', text: 'absolute' },
    { t: 'p', text: '`absolute` عنصر را از جریان عادی خارج می‌کند و نسبت به نزدیک‌ترین والدِ غیر‌static (مثلاً `relative`) جا می‌دهد.' },
    { t: 'h3', text: 'fixed' },
    { t: 'p', text: '`fixed` عنصر را نسبت به پنجره‌ی مرورگر ثابت می‌کند و با اسکرول جابه‌جا نمی‌شود. برای هدر و دکمه‌ی شناور مناسب است:' },
    { t: 'code', text: '<div class="fixed inset-x-0 top-0 ...">Fixed header</div>', file: 'HTML' },
    { t: 'h3', text: 'sticky' },
    { t: 'p', text: '`sticky` عنصر را در جریان نگه می‌دارد، و وقتی اسکرول به آستانه‌ی `top-*` رسید به آن می‌چسباند. مثل سرتیتر حروف الفبا در لیست مخاطبین:' },
    { t: 'code', text: '<div>\n  <div class="sticky top-0 bg-white ...">A</div>\n  <div>Andrew</div>\n  <div>Anna</div>\n</div>', file: 'HTML' },
    variants('absolute'),
  ],
}

/* ================= top / right / bottom / left ================= */
C['top-right-bottom-left'] = {
  heading: 'top / right / bottom / left',
  lead: 'کلاس‌هایی برای تعیین موقعیت عنصرهای قرارگرفته‌شده (positioned).',
  blocks: [
    { t: 'table', rows: [
      ['inset-<number>', 'inset: calc(var(--spacing) * <number>);'],
      ['-inset-<number>', 'inset: calc(var(--spacing) * -<number>);'],
      ['inset-<fraction>', 'inset: calc(<fraction> * 100%);'],
      ['-inset-<fraction>', 'inset: calc(<fraction> * -100%);'],
      ['inset-full', 'inset: 100%;'],
      ['inset-px', 'inset: 1px;'],
      ['inset-auto', 'inset: auto;'],
      ['inset-(<custom-property>)', 'inset: var(<custom-property>);'],
      ['inset-[<value>]', 'inset: <value>;'],
      ['inset-x-<number>', 'inset-inline: calc(var(--spacing) * <number>);'],
      ['inset-y-<number>', 'inset-block: calc(var(--spacing) * <number>);'],
      ['start-<number>', 'inset-inline-start: calc(var(--spacing) * <number>);'],
      ['end-<number>', 'inset-inline-end: calc(var(--spacing) * <number>);'],
      ['top-<number>', 'top: calc(var(--spacing) * <number>);'],
      ['right-<number>', 'right: calc(var(--spacing) * <number>);'],
      ['bottom-<number>', 'bottom: calc(var(--spacing) * <number>);'],
      ['left-<number>', 'left: calc(var(--spacing) * <number>);'],
    ] },
    { t: 'p', text: 'همه‌ی ردیف‌ها مثل `top-*` با `-`، کسر (`top-1/2`)، `px`، `full`، `auto` و مقدار دلخواه هم کار می‌کنند.' },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'پر کردن والد با inset' },
    { t: 'p', text: '`inset-0` معادل `top-0 right-0 bottom-0 left-0` است و عنصر را روی کل والد می‌کشد:' },
    { t: 'demo', html: '<div class="relative h-24 rounded-lg bg-slate-200 dark:bg-slate-700"><div class="absolute inset-0 m-2 flex items-center justify-center rounded-sm bg-sky-500/80 text-sm text-white">inset-0</div></div>',
      code: '<div class="relative size-32 ...">\n  <div class="absolute inset-0 ..."></div>\n</div>' },
    { t: 'h3', text: 'گوشه‌ها' },
    { t: 'demo', html: '<div class="relative h-28 rounded-lg bg-slate-200 dark:bg-slate-700"><div class="absolute top-0 left-0 m-2 size-6 rounded-sm bg-sky-500"></div><div class="absolute top-0 right-0 m-2 size-6 rounded-sm bg-sky-500"></div><div class="absolute bottom-0 left-0 m-2 size-6 rounded-sm bg-sky-500"></div><div class="absolute right-0 bottom-0 m-2 size-6 rounded-sm bg-sky-500"></div></div>',
      code: '<div class="relative size-32 ...">\n  <div class="absolute top-0 left-0 ..."></div>\n  <div class="absolute top-0 right-0 ..."></div>\n  <div class="absolute bottom-0 left-0 ..."></div>\n  <div class="absolute right-0 bottom-0 ..."></div>\n</div>' },
    { t: 'h3', text: 'مقدار منفی' },
    { t: 'p', text: 'با `-` قبل از کلاس، عنصر به بیرون می‌رود، مثل `-top-2` یا `-inset-x-4`.' },
    { t: 'h3', text: 'منطقی (RTL)' },
    { t: 'p', text: '`start-*` و `end-*` با جهت نوشتار عوض می‌شوند. در فارسی `start-0` یعنی سمت **راست**. پس به‌جای `left-*` و `right-*` از این‌ها استفاده کن تا سایت در هر دو جهت درست کار کند:' },
    { t: 'code', text: '<div class="relative ...">\n  <div class="absolute start-0 top-0 ...">...</div>\n</div>', file: 'HTML' },
    variants('top-0'),
  ],
}

/* ================= visibility ================= */
C['visibility'] = {
  heading: 'visibility',
  lead: 'کلاس‌هایی برای نمایش یا پنهان کردن عنصر، بدون برداشتن آن از layout.',
  blocks: [
    { t: 'table', rows: [
      ['visible', 'visibility: visible;'],
      ['invisible', 'visibility: hidden;'],
      ['collapse', 'visibility: collapse;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`invisible` عنصر را نامرئی می‌کند ولی **جایش را نگه می‌دارد**. فرق با `hidden` (از کلاس display) همین است که `hidden` جا را هم آزاد می‌کند:' },
    { t: 'demo', html: '<div class="flex gap-2"><div class="size-12 rounded-sm bg-sky-500"></div><div class="invisible size-12 rounded-sm bg-sky-500"></div><div class="size-12 rounded-sm bg-sky-500"></div></div>',
      code: '<div class="flex gap-2">\n  <div>01</div>\n  <div class="invisible">02</div>\n  <div>03</div>\n</div>' },
    { t: 'p', text: '`collapse` برای ردیف و ستون جدول است و آن را بدون تغییر اندازه‌ی جدول پنهان می‌کند:' },
    { t: 'code', text: '<table>\n  <thead>\n    <tr><th>Invoice #</th><th>Client</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>#100</td><td>Pendant Publishing</td></tr>\n    <tr class="collapse"><td>#101</td><td>Kruger Industrial</td></tr>\n  </tbody>\n</table>', file: 'HTML' },
    variants('invisible'),
  ],
}

/* ================= z-index ================= */
C['z-index'] = {
  heading: 'z-index',
  lead: 'کلاس‌هایی برای کنترل ترتیب قرارگیری عنصرها روی هم (stack order).',
  blocks: [
    { t: 'table', rows: [
      ['z-<number>', 'z-index: <number>;'],
      ['-z-<number>', 'z-index: calc(<number> * -1);'],
      ['z-auto', 'z-index: auto;'],
      ['z-(<custom-property>)', 'z-index: var(<custom-property>);'],
      ['z-[<value>]', 'z-index: <value>;'],
    ] },
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: 'عنصری که `z-index` بیشتری دارد روی بقیه قرار می‌گیرد. دقت کن که `z-index` فقط روی عنصرهایی کار می‌کند که `position` غیر‌static دارند (یا فرزند flex/grid هستند):' },
    { t: 'demo', html: '<div class="relative h-28"><div class="absolute left-0 top-0 z-40 flex size-16 items-center justify-center rounded-sm bg-sky-500 text-sm text-white">z-40</div><div class="absolute left-10 top-3 z-30 flex size-16 items-center justify-center rounded-sm bg-sky-400 text-sm text-white">z-30</div><div class="absolute left-20 top-6 z-20 flex size-16 items-center justify-center rounded-sm bg-sky-300 text-sm text-sky-900">z-20</div><div class="absolute left-32 top-9 z-10 flex size-16 items-center justify-center rounded-sm bg-sky-200 text-sm text-sky-900">z-10</div></div>',
      code: '<div class="z-40 ...">05</div>\n<div class="z-30 ...">04</div>\n<div class="z-20 ...">03</div>\n<div class="z-10 ...">02</div>\n<div class="z-0 ...">01</div>' },
    { t: 'h3', text: 'مقدار منفی و دلخواه' },
    { t: 'code', text: '<div class="-z-10 ...">...</div>\n<div class="z-[100] ...">...</div>\n<div class="z-(--my-z) ...">...</div>', file: 'HTML' },
    { t: 'note', text: 'اگر `z-index` ها گیج‌کننده شدند، به‌جای عددهای بزرگ، یک والد را با `isolate` به stacking context جدا تبدیل کن.' },
    variants('z-10'),
  ],
}
