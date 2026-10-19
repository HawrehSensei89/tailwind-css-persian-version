// Typography — ۳۲ صفحه
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
var lorem = 'The quick brown fox jumps over the lazy dog.'
var line = function (cls, text) { return '<p class="' + cls + '">' + (text || lorem) + '</p>' }
var col = function () { return '<div class="space-y-2">' + Array.prototype.join.call(arguments, '') + '</div>' }
// صفحه‌ی ساده: جدول + یک مثال
var simple = function (heading, lead, rows, body, repCls) {
  return { heading: heading, lead: lead, blocks: [tbl(rows)].concat(body || []).concat(repCls ? [rep(repCls)] : []) }
}

C['font-family'] = simple('font-family', 'کلاس‌هایی برای تعیین خانواده‌ی فونت عنصر.', [
  ['font-sans', 'font-family: var(--font-sans); /* ui-sans-serif, system-ui, sans-serif, ... */'],
  ['font-serif', 'font-family: var(--font-serif); /* ui-serif, Georgia, ... */'],
  ['font-mono', 'font-family: var(--font-mono); /* ui-monospace, SFMono-Regular, ... */'],
  ['font-(family-name:<custom-property>)', 'font-family: var(<custom-property>);'],
  ['font-[<value>]', 'font-family: <value>;'],
], [
  { t: 'h2', text: 'مثال‌ها' },
  demo(col(line('font-sans text-lg'), line('font-serif text-lg'), line('font-mono text-lg')), '<p class="font-sans ...">...</p>\n<p class="font-serif ...">...</p>\n<p class="font-mono ...">...</p>'),
  { t: 'h3', text: 'مقدار دلخواه' },
  { t: 'code', text: '<p class="font-[\'Open_Sans\'] ...">...</p>\n<p class="font-(family-name:--my-font) ...">...</p>', file: 'HTML' },
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'p', text: 'برای فونت فارسی (مثل وزیرمتن) که همین پروژه هم استفاده می‌کند، متغیر `--font-sans` را عوض کن:' },
  { t: 'code', text: '@theme {\n  --font-sans: "Vazirmatn", ui-sans-serif, system-ui, sans-serif;\n  --font-display: "Satoshi", "sans-serif";\n}', file: 'CSS' },
  { t: 'p', text: 'با تعریف `--font-display` کلاس `font-display` هم ساخته می‌شود.' },
], 'font-serif')

C['font-size'] = simple('font-size', 'کلاس‌هایی برای تعیین اندازه‌ی فونت. هر اندازه یک ارتفاع خط پیش‌فرض هم دارد.', [
  ['text-xs', 'font-size: 0.75rem; line-height: calc(1 / 0.75);'],
  ['text-sm', 'font-size: 0.875rem; line-height: calc(1.25 / 0.875);'],
  ['text-base', 'font-size: 1rem; line-height: calc(1.5 / 1);'],
  ['text-lg', 'font-size: 1.125rem; line-height: calc(1.75 / 1.125);'],
  ['text-xl', 'font-size: 1.25rem; line-height: calc(1.75 / 1.25);'],
  ['text-2xl', 'font-size: 1.5rem; line-height: calc(2 / 1.5);'],
  ['text-3xl', 'font-size: 1.875rem; line-height: calc(2.25 / 1.875);'],
  ['text-4xl', 'font-size: 2.25rem; line-height: calc(2.5 / 2.25);'],
  ['text-5xl', 'font-size: 3rem; line-height: 1;'],
  ['text-6xl', 'font-size: 3.75rem; line-height: 1;'],
  ['text-7xl', 'font-size: 4.5rem; line-height: 1;'],
  ['text-8xl', 'font-size: 6rem; line-height: 1;'],
  ['text-9xl', 'font-size: 8rem; line-height: 1;'],
  ['text-(length:<custom-property>)', 'font-size: var(<custom-property>);'],
  ['text-[<value>]', 'font-size: <value>;'],
], [
  { t: 'h2', text: 'مثال‌ها' },
  demo(col(line('text-sm'), line('text-base'), line('text-lg'), line('text-xl'), line('text-2xl')), '<p class="text-sm ...">...</p>\n<p class="text-base ...">...</p>\n<p class="text-lg ...">...</p>\n<p class="text-xl ...">...</p>\n<p class="text-2xl ...">...</p>'),
  { t: 'h3', text: 'تعیین ارتفاع خط همراه اندازه' },
  { t: 'p', text: 'با نوشتن `/` بعد از کلاس اندازه می‌توانی ارتفاع خط را هم بگذاری، بدون کلاس جدا:' },
  demo('<p class="max-w-xs text-sm/6">So I started to walk into the water. I won\'t lie to you boys, I was terrified.</p>', '<p class="text-sm/6 ...">...</p>\n<p class="text-sm/7 ...">...</p>\n<p class="text-sm/[17px] ...">...</p>'),
  { t: 'h3', text: 'مقدار دلخواه' },
  { t: 'code', text: '<p class="text-[14px] ...">...</p>\n<p class="text-(length:--my-size) ...">...</p>', file: 'HTML' },
  { t: 'h2', text: 'سفارشی‌سازی تم' },
  { t: 'code', text: '@theme {\n  --text-tiny: 0.625rem;\n  --text-tiny--line-height: 1.2;\n}', file: 'CSS' },
], 'text-lg')

C['font-smoothing'] = simple('font-smoothing', 'کلاس‌هایی برای هموارسازی (anti-aliasing) فونت. فقط روی macOS و iOS اثر دارد.', [
  ['antialiased', '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'],
  ['subpixel-antialiased', '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`antialiased` متن را روی صفحه‌های تیره باریک‌تر و تمیزتر نشان می‌دهد. این کلاس به‌صورت پیش‌فرض توسط Preflight روی `body` در پروژه‌های بسیاری گذاشته می‌شود. (همین پروژه هم آن را دارد.)' },
  { t: 'code', text: '<p class="antialiased ...">The quick brown fox...</p>\n<p class="subpixel-antialiased ...">The quick brown fox...</p>', file: 'HTML' },
], 'antialiased')

C['font-style'] = simple('font-style', 'کلاس‌هایی برای تعیین سبک فونت (کج یا عادی).', [
  ['italic', 'font-style: italic;'],
  ['not-italic', 'font-style: normal;'],
], [
  { t: 'h2', text: 'مثال' },
  demo(col(line('italic'), line('not-italic')), '<p class="italic ...">The quick brown fox...</p>\n<p class="not-italic ...">The quick brown fox...</p>'),
], 'italic')

C['font-weight'] = simple('font-weight', 'کلاس‌هایی برای تعیین ضخامت فونت.', [
  ['font-thin', 'font-weight: 100;'],
  ['font-extralight', 'font-weight: 200;'],
  ['font-light', 'font-weight: 300;'],
  ['font-normal', 'font-weight: 400;'],
  ['font-medium', 'font-weight: 500;'],
  ['font-semibold', 'font-weight: 600;'],
  ['font-bold', 'font-weight: 700;'],
  ['font-extrabold', 'font-weight: 800;'],
  ['font-black', 'font-weight: 900;'],
  ['font-(<custom-property>)', 'font-weight: var(<custom-property>);'],
  ['font-[<value>]', 'font-weight: <value>;'],
], [
  { t: 'h2', text: 'مثال' },
  demo(col(line('font-light text-lg'), line('font-normal text-lg'), line('font-medium text-lg'), line('font-semibold text-lg'), line('font-bold text-lg')), '<p class="font-light ...">...</p>\n<p class="font-normal ...">...</p>\n<p class="font-medium ...">...</p>\n<p class="font-semibold ...">...</p>\n<p class="font-bold ...">...</p>'),
  { t: 'note', text: 'اگر از وزیرمتن استفاده می‌کنی، مطمئن شو وزن‌های لازم (مثلاً ۴۰۰ تا ۷۰۰) را از Google Fonts لود کرده‌ای، وگرنه مرورگر وزن‌ها را شبیه‌سازی می‌کند.' },
], 'font-bold')

C['font-stretch'] = simple('font-stretch', 'کلاس‌هایی برای تعیین عرض حروف فونت. فقط برای فونت‌های متغیر (variable) که محور عرض دارند کار می‌کند.', [
  ['font-stretch-ultra-condensed', 'font-stretch: 50%;'],
  ['font-stretch-extra-condensed', 'font-stretch: 62.5%;'],
  ['font-stretch-condensed', 'font-stretch: 75%;'],
  ['font-stretch-semi-condensed', 'font-stretch: 87.5%;'],
  ['font-stretch-normal', 'font-stretch: 100%;'],
  ['font-stretch-semi-expanded', 'font-stretch: 112.5%;'],
  ['font-stretch-expanded', 'font-stretch: 125%;'],
  ['font-stretch-extra-expanded', 'font-stretch: 150%;'],
  ['font-stretch-ultra-expanded', 'font-stretch: 200%;'],
  ['font-stretch-<percentage>', 'font-stretch: <percentage>;'],
].concat(arb('font-stretch', 'font-stretch')), [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<p class="font-stretch-extra-condensed ...">The quick brown fox...</p>\n<p class="font-stretch-condensed ...">The quick brown fox...</p>\n<p class="font-stretch-normal ...">The quick brown fox...</p>\n<p class="font-stretch-[66.66%] ...">The quick brown fox...</p>', file: 'HTML' },
], 'font-stretch-condensed')

C['font-variant-numeric'] = simple('font-variant-numeric', 'کلاس‌هایی برای کنترل شکل رقم‌ها، کسرها و اعداد ترتیبی.', [
  ['normal-nums', 'font-variant-numeric: normal;'],
  ['ordinal', 'font-variant-numeric: ordinal;'],
  ['slashed-zero', 'font-variant-numeric: slashed-zero;'],
  ['lining-nums', 'font-variant-numeric: lining-nums;'],
  ['oldstyle-nums', 'font-variant-numeric: oldstyle-nums;'],
  ['proportional-nums', 'font-variant-numeric: proportional-nums;'],
  ['tabular-nums', 'font-variant-numeric: tabular-nums;'],
  ['diagonal-fractions', 'font-variant-numeric: diagonal-fractions;'],
  ['stacked-fractions', 'font-variant-numeric: stacked-fractions;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`tabular-nums` همه‌ی رقم‌ها را هم‌عرض می‌کند و برای ستون‌های عددی (قیمت، آمار) که باید زیر هم تراز شوند عالی است:' },
  demo('<div class="text-right"><p class="tabular-nums">1,111.00</p><p class="tabular-nums">2,345.50</p><p class="tabular-nums">9,876.25</p></div>', '<p class="tabular-nums ...">12121</p>\n<p class="tabular-nums ...">90909</p>'),
  { t: 'note', text: 'این ویژگی‌ها بسته به پشتیبانی خود فونت اثر می‌کنند. بسیاری از فونت‌ها همه‌ی این حالت‌ها را ندارند.' },
], 'tabular-nums')

C['font-feature-settings'] = simple('font-feature-settings', 'کلاس‌هایی برای فعال‌کردن ویژگی‌های پیشرفته‌ی OpenType یک فونت.', [
  ['font-features-[<value>]', 'font-feature-settings: <value>;'],
  ['font-features-(<custom-property>)', 'font-feature-settings: var(<custom-property>);'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'مقدار همان چیزی است که در `font-feature-settings` می‌نویسی، مثلاً فعال کردن small caps یا دیگر ویژگی‌های فونت:' },
  { t: 'code', text: '<p class="font-features-[\'smcp\'] ...">The quick brown fox...</p>', file: 'HTML' },
  { t: 'note', text: 'نام و قابلیت‌های هر ویژگی به فونتی که استفاده می‌کنی بستگی دارد. این utility جدید است؛ اگر در نسخه‌ی شما کار نکرد، از یک مقدار دلخواه `[font-feature-settings:...]` استفاده کن.' },
], 'font-features-[\'smcp\']')

C['letter-spacing'] = simple('letter-spacing', 'کلاس‌هایی برای تعیین فاصله‌ی بین حروف.', [
  ['tracking-tighter', 'letter-spacing: -0.05em;'],
  ['tracking-tight', 'letter-spacing: -0.025em;'],
  ['tracking-normal', 'letter-spacing: 0em;'],
  ['tracking-wide', 'letter-spacing: 0.025em;'],
  ['tracking-wider', 'letter-spacing: 0.05em;'],
  ['tracking-widest', 'letter-spacing: 0.1em;'],
].concat(arb('tracking', 'letter-spacing')), [
  { t: 'h2', text: 'مثال' },
  demo(col(line('tracking-tight'), line('tracking-normal'), line('tracking-widest')), '<p class="tracking-tight ...">...</p>\n<p class="tracking-normal ...">...</p>\n<p class="tracking-widest ...">...</p>'),
  { t: 'note', text: 'در متن فارسی و عربی که حروف به هم می‌چسبند، `letter-spacing` غیرصفر اتصال حروف را می‌شکند و خواندن را سخت می‌کند. برای فارسی تقریباً همیشه `tracking-normal` را نگه دار.' },
], 'tracking-wide')

C['line-clamp'] = simple('line-clamp', 'کلاس‌هایی برای محدود کردن متن به تعداد مشخصی خط و گذاشتن «…» در انتها.', [
  ['line-clamp-<number>', 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <number>;'],
  ['line-clamp-none', '-webkit-line-clamp: unset;'],
].concat(arb('line-clamp', '-webkit-line-clamp')), [
  { t: 'h2', text: 'مثال' },
  demo('<p class="line-clamp-3 w-64 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Praesent commodo cursus magna.</p>', '<p class="line-clamp-3 ...">Lorem ipsum dolor sit amet...</p>'),
  { t: 'p', text: '`line-clamp-none` محدودیت را برمی‌دارد، مثلاً در یک breakpoint بزرگ‌تر: `line-clamp-3 md:line-clamp-none`.' },
], 'line-clamp-3')

C['line-height'] = simple('line-height', 'کلاس‌هایی برای تعیین ارتفاع خط.', [
  ['leading-none', 'line-height: 1;'],
  ['leading-tight', 'line-height: 1.25;'],
  ['leading-snug', 'line-height: 1.375;'],
  ['leading-normal', 'line-height: 1.5;'],
  ['leading-relaxed', 'line-height: 1.625;'],
  ['leading-loose', 'line-height: 2;'],
  ['leading-<number>', 'line-height: calc(var(--spacing) * <number>);'],
].concat(arb('leading', 'line-height')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="grid gap-4 text-sm sm:grid-cols-2"><p class="leading-tight">So I started to walk into the water. I won\'t lie to you boys, I was terrified. leading-tight</p><p class="leading-loose">So I started to walk into the water. I won\'t lie to you boys, I was terrified. leading-loose</p></div>', '<p class="text-sm leading-6">...</p>\n<p class="text-sm leading-8">...</p>'),
  { t: 'p', text: 'برای فارسی، ارتفاع خط بیشتر (مثل `leading-relaxed` یا `leading-loose`) خوانایی را بهتر می‌کند چون حروف فارسی ارتفاع و اِعراب بیشتری دارند. با `/` هم می‌توانی همراه اندازه‌ی فونت بنویسی: `text-base/8`.' },
], 'leading-relaxed')

C['list-style-image'] = simple('list-style-image', 'کلاس‌هایی برای استفاده‌ی تصویر به‌جای نقطه‌ی لیست.', [
  ['list-image-[<value>]', 'list-style-image: <value>;'],
  ['list-image-(<custom-property>)', 'list-style-image: var(<custom-property>);'],
  ['list-image-none', 'list-style-image: none;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<ul class="list-image-[url(/img/checkmark.png)] ...">\n  <li>5 cups chopped Porcini mushrooms</li>\n  <li>1/2 cup of olive oil</li>\n</ul>', file: 'HTML' },
], 'list-image-none')

C['list-style-position'] = simple('list-style-position', 'کلاس‌هایی برای تعیین جای نقطه یا شماره‌ی لیست نسبت به متن.', [
  ['list-inside', 'list-style-position: inside;'],
  ['list-outside', 'list-style-position: outside;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`list-outside` (پیش‌فرض) نقطه را بیرون از بلوک متن می‌گذارد. `list-inside` نقطه را داخل بلوک می‌برد، پس خطوط بعدی زیر نقطه ادامه می‌یابند:' },
  demo('<div class="grid gap-4 text-sm sm:grid-cols-2"><ul class="list-inside list-disc"><li>5 cups chopped Porcini mushrooms and some more words to wrap</li></ul><ul class="list-outside list-disc ps-5"><li>5 cups chopped Porcini mushrooms and some more words to wrap</li></ul></div>', '<ul class="list-inside">...</ul>\n<ul class="list-outside">...</ul>'),
], 'list-inside')

C['list-style-type'] = simple('list-style-type', 'کلاس‌هایی برای تعیین نوع نقطه‌ی لیست.', [
  ['list-disc', 'list-style-type: disc;'],
  ['list-decimal', 'list-style-type: decimal;'],
  ['list-none', 'list-style-type: none;'],
].concat(arb('list', 'list-style-type')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="flex gap-8 text-sm"><ul class="list-disc ps-5"><li>Item</li><li>Item</li></ul><ol class="list-decimal ps-5"><li>Item</li><li>Item</li></ol><ul class="list-none"><li>Item</li><li>Item</li></ul></div>', '<ul class="list-disc ...">...</ul>\n<ol class="list-decimal ...">...</ol>\n<ul class="list-none ...">...</ul>'),
  { t: 'note', text: 'Preflight نقطه‌ها را حذف می‌کند، پس برای نمایش آن‌ها حتماً `list-disc` یا `list-decimal` بگذار و با `ps-*` فضا برایشان باز کن.' },
], 'list-disc')

C['text-align'] = simple('text-align', 'کلاس‌هایی برای تعیین چینش افقی متن.', [
  ['text-left', 'text-align: left;'],
  ['text-center', 'text-align: center;'],
  ['text-right', 'text-align: right;'],
  ['text-justify', 'text-align: justify;'],
  ['text-start', 'text-align: start;'],
  ['text-end', 'text-align: end;'],
], [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-sm"><p class="text-left">text-left</p><p class="text-center">text-center</p><p class="text-right">text-right</p></div>', '<p class="text-left">...</p>\n<p class="text-center">...</p>\n<p class="text-right">...</p>'),
  { t: 'p', text: '`text-start` و `text-end` منطقی‌اند و با جهت صفحه عوض می‌شوند. در یک سایت فارسی، `text-start` متن را به **راست** می‌چسباند. برای متن چندزبانه این‌ها را به `text-left` و `text-right` ترجیح بده.' },
], 'text-center')

C['color'] = {
  heading: 'color (رنگ متن)',
  lead: 'کلاس‌هایی برای تعیین رنگ متن.',
  blocks: [
    tbl([
      ['text-inherit', 'color: inherit;'],
      ['text-current', 'color: currentColor;'],
      ['text-transparent', 'color: transparent;'],
      ['text-black', 'color: var(--color-black); /* #000 */'],
      ['text-white', 'color: var(--color-white); /* #fff */'],
      ['text-<color>-<shade>', 'color: var(--color-<color>-<shade>);'],
      ['text-(<custom-property>)', 'color: var(<custom-property>);'],
      ['text-[<value>]', 'color: <value>;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    demo(col(line('text-sky-500'), line('text-indigo-600'), line('text-pink-500')), '<p class="text-blue-600 ...">...</p>\n<p class="text-sky-500 ...">...</p>'),
    { t: 'h3', text: 'تنظیم شفافیت' },
    { t: 'p', text: 'با `/` شفافیت را مشخص کن:' },
    demo(col(line('text-sky-950/100'), line('text-sky-950/75'), line('text-sky-950/50')), '<p class="text-sky-950/100">...</p>\n<p class="text-sky-950/75">...</p>\n<p class="text-sky-950/50">...</p>'),
    { t: 'p', text: 'لیست کامل رنگ‌ها در صفحه‌ی «رنگ‌ها» (در مفاهیم اصلی) است.' },
    rep('text-sky-500'),
  ],
}

C['text-decoration-line'] = simple('text-decoration-line', 'کلاس‌هایی برای خط‌کشی روی متن.', [
  ['underline', 'text-decoration-line: underline;'],
  ['overline', 'text-decoration-line: overline;'],
  ['line-through', 'text-decoration-line: line-through;'],
  ['no-underline', 'text-decoration-line: none;'],
], [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-sm"><p class="underline">underline</p><p class="overline">overline</p><p class="line-through">line-through</p><p class="no-underline">no-underline</p></div>', '<p class="underline ...">...</p>\n<p class="overline ...">...</p>\n<p class="line-through ...">...</p>\n<p class="no-underline ...">...</p>'),
  { t: 'p', text: 'برای حذف خط زیر لینک‌ها در حالت عادی از `no-underline` و برای نمایش در hover از `hover:underline` استفاده کن.' },
], 'underline')

C['text-decoration-color'] = simple('text-decoration-color', 'کلاس‌هایی برای رنگ خط‌کشی متن.', [
  ['decoration-inherit', 'text-decoration-color: inherit;'],
  ['decoration-current', 'text-decoration-color: currentColor;'],
  ['decoration-transparent', 'text-decoration-color: transparent;'],
  ['decoration-<color>-<shade>', 'text-decoration-color: var(--color-<color>-<shade>);'],
].concat(arb('decoration', 'text-decoration-color')), [
  { t: 'h2', text: 'مثال' },
  demo('<p class="text-lg underline decoration-sky-500 decoration-2">The quick brown fox jumps over the lazy dog.</p>', '<p>I\'m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at <a class="underline decoration-sky-500">My Company, Inc</a>.</p>'),
], 'decoration-sky-500')

C['text-decoration-style'] = simple('text-decoration-style', 'کلاس‌هایی برای سبک خط‌کشی متن.', [
  ['decoration-solid', 'text-decoration-style: solid;'],
  ['decoration-double', 'text-decoration-style: double;'],
  ['decoration-dotted', 'text-decoration-style: dotted;'],
  ['decoration-dashed', 'text-decoration-style: dashed;'],
  ['decoration-wavy', 'text-decoration-style: wavy;'],
], [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-sm underline"><p class="decoration-solid">solid</p><p class="decoration-double">double</p><p class="decoration-dotted">dotted</p><p class="decoration-dashed">dashed</p><p class="decoration-wavy">wavy</p></div>', '<p class="underline decoration-solid">...</p>\n<p class="underline decoration-double">...</p>\n<p class="underline decoration-dotted">...</p>\n<p class="underline decoration-dashed">...</p>\n<p class="underline decoration-wavy">...</p>'),
], 'decoration-wavy')

C['text-decoration-thickness'] = simple('text-decoration-thickness', 'کلاس‌هایی برای ضخامت خط‌کشی متن.', [
  ['decoration-<number>', 'text-decoration-thickness: <number>px;'],
  ['decoration-from-font', 'text-decoration-thickness: from-font;'],
  ['decoration-auto', 'text-decoration-thickness: auto;'],
].concat(arb('decoration', 'text-decoration-thickness')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-sm underline"><p class="decoration-1">decoration-1</p><p class="decoration-2">decoration-2</p><p class="decoration-4">decoration-4</p></div>', '<p class="underline decoration-1">...</p>\n<p class="underline decoration-2">...</p>\n<p class="underline decoration-4">...</p>'),
], 'decoration-2')

C['text-underline-offset'] = simple('text-underline-offset', 'کلاس‌هایی برای فاصله‌ی خط زیر متن از خود متن.', [
  ['underline-offset-<number>', 'text-underline-offset: <number>px;'],
  ['-underline-offset-<number>', 'text-underline-offset: calc(<number>px * -1);'],
  ['underline-offset-auto', 'text-underline-offset: auto;'],
].concat(arb('underline-offset', 'text-underline-offset')), [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-sm underline"><p class="underline-offset-1">underline-offset-1</p><p class="underline-offset-2">underline-offset-2</p><p class="underline-offset-4">underline-offset-4</p><p class="underline-offset-8">underline-offset-8</p></div>', '<p class="underline underline-offset-4">...</p>'),
], 'underline-offset-4')

C['text-transform'] = simple('text-transform', 'کلاس‌هایی برای تغییر حروف بزرگ و کوچک متن لاتین.', [
  ['uppercase', 'text-transform: uppercase;'],
  ['lowercase', 'text-transform: lowercase;'],
  ['capitalize', 'text-transform: capitalize;'],
  ['normal-case', 'text-transform: none;'],
], [
  { t: 'h2', text: 'مثال' },
  demo('<div class="space-y-1 text-sm"><p class="uppercase">The quick brown fox</p><p class="lowercase">The Quick Brown Fox</p><p class="capitalize">the quick brown fox</p><p class="normal-case">The Quick brown fox</p></div>', '<p class="uppercase">...</p>\n<p class="lowercase">...</p>\n<p class="capitalize">...</p>\n<p class="normal-case">...</p>'),
  { t: 'p', text: 'این کلاس‌ها روی متن فارسی اثری ندارند، چون فارسی حروف بزرگ و کوچک ندارد.' },
], 'uppercase')

C['text-overflow'] = simple('text-overflow', 'کلاس‌هایی برای کنترل رفتار متنی که از کادر بیرون می‌زند.', [
  ['truncate', 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'],
  ['text-ellipsis', 'text-overflow: ellipsis;'],
  ['text-clip', 'text-overflow: clip;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`truncate` متن تک‌خطی را می‌بُرد و «…» می‌گذارد:' },
  demo('<p class="w-56 truncate text-sm">The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis.</p>', '<p class="truncate ...">The longest word in any of the major...</p>'),
  { t: 'p', text: '`text-ellipsis` و `text-clip` فقط `text-overflow` را عوض می‌کنند و باید خودت `overflow-hidden` و `whitespace-nowrap` را هم بگذاری. برای چند خط، از `line-clamp-*` استفاده کن.' },
], 'truncate')

C['text-wrap'] = simple('text-wrap', 'کلاس‌هایی برای کنترل شکستن خط‌های متن.', [
  ['text-wrap', 'text-wrap: wrap;'],
  ['text-nowrap', 'text-wrap: nowrap;'],
  ['text-balance', 'text-wrap: balance;'],
  ['text-pretty', 'text-wrap: pretty;'],
], [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'p', text: '`text-balance` طول خط‌ها را تقریباً مساوی می‌کند و برای عنوان‌های کوتاه عالی است. `text-pretty` از وجود یک کلمه‌ی تنها در آخرین خط جلوگیری می‌کند و برای پاراگراف مناسب است:' },
  demo('<div class="grid gap-4 text-sm sm:grid-cols-2"><p class="max-w-xs text-balance text-lg font-semibold">Beloved by nearly all of the world\'s best designers</p><p class="max-w-xs text-wrap text-lg font-semibold">Beloved by nearly all of the world\'s best designers</p></div>', '<h1 class="text-balance ...">Beloved by nearly all of the world...</h1>'),
  { t: 'p', text: '`text-nowrap` از شکستن خط جلوگیری می‌کند.' },
], 'text-balance')

C['text-indent'] = simple('text-indent', 'کلاس‌هایی برای تورفتگی خط اول پاراگراف.', [
  ['indent-<number>', 'text-indent: calc(var(--spacing) * <number>);'],
  ['-indent-<number>', 'text-indent: calc(var(--spacing) * -<number>);'],
  ['indent-px', 'text-indent: 1px;'],
  ['-indent-px', 'text-indent: -1px;'],
].concat(arb('indent', 'text-indent')), [
  { t: 'h2', text: 'مثال' },
  demo('<p class="max-w-xs indent-8 text-sm">So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me.</p>', '<p class="indent-8">So I started to walk into the water...</p>'),
], 'indent-8')

C['tab-size'] = simple('tab-size', 'کلاس‌هایی برای تعیین عرض کاراکتر tab در متن. مفید برای نمایش کد.', [
  ['tab-<number>', 'tab-size: <number>;'],
  ['tab-(<custom-property>)', 'tab-size: var(<custom-property>);'],
  ['tab-[<value>]', 'tab-size: <value>;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<pre class="tab-4 ...">\n\tif (x) {\n\t\treturn y;\n\t}\n</pre>', file: 'HTML' },
  { t: 'note', text: 'اگر این utility در نسخه‌ی مرورگری شما شناخته نشد، می‌توانی با `@utility tab-* { tab-size: --value(integer); }` خودت آن را بسازی (صفحه‌ی «افزودن استایل سفارشی» را ببین).' },
], 'tab-4')

C['vertical-align'] = simple('vertical-align', 'کلاس‌هایی برای تعیین ترازبندی عمودی عنصرهای inline و سلول‌های جدول.', [
  ['align-baseline', 'vertical-align: baseline;'],
  ['align-top', 'vertical-align: top;'],
  ['align-middle', 'vertical-align: middle;'],
  ['align-bottom', 'vertical-align: bottom;'],
  ['align-text-top', 'vertical-align: text-top;'],
  ['align-text-bottom', 'vertical-align: text-bottom;'],
  ['align-sub', 'vertical-align: sub;'],
  ['align-super', 'vertical-align: super;'],
].concat(arb('align', 'vertical-align')), [
  { t: 'h2', text: 'مثال' },
  demo('<p class="text-sm">Hello <span class="inline-block size-4 rounded-full bg-sky-500 align-middle"></span> align-middle, <span class="inline-block size-4 rounded-full bg-sky-500 align-top"></span> align-top, <span class="inline-block size-4 rounded-full bg-sky-500 align-bottom"></span> align-bottom</p>', '<span class="inline-block align-middle ...">...</span>'),
  { t: 'p', text: 'این کلاس‌ها فقط روی عنصرهای inline و `table-cell` اثر دارند. برای ترازبندی عمودی عنصرهای flex از `items-*` استفاده کن.' },
], 'align-middle')

C['white-space'] = simple('white-space', 'کلاس‌هایی برای کنترل نحوه‌ی نمایش فاصله‌ها و خط‌های جدید در متن.', [
  ['whitespace-normal', 'white-space: normal;'],
  ['whitespace-nowrap', 'white-space: nowrap;'],
  ['whitespace-pre', 'white-space: pre;'],
  ['whitespace-pre-line', 'white-space: pre-line;'],
  ['whitespace-pre-wrap', 'white-space: pre-wrap;'],
  ['whitespace-break-spaces', 'white-space: break-spaces;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`whitespace-pre-wrap` فاصله‌ها و خط‌های جدید داخل متن را حفظ می‌کند و در صورت نیاز می‌شکند. `whitespace-nowrap` از شکستن جلوگیری می‌کند:' },
  { t: 'code', text: '<p class="whitespace-pre-wrap ...">\n  Hey everyone!\n\n  It\'s almost 2022 which means\n  it\'s time for another year...\n</p>', file: 'HTML' },
], 'whitespace-nowrap')

C['word-break'] = simple('word-break', 'کلاس‌هایی برای تعیین نحوه‌ی شکستن کلمه‌ها.', [
  ['break-normal', 'overflow-wrap: normal; word-break: normal;'],
  ['break-all', 'word-break: break-all;'],
  ['break-keep', 'word-break: keep-all;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`break-all` کلمه را در هر جایی که لازم باشد می‌شکند (مناسب رشته‌های بلند مثل URL). `break-keep` برای زبان‌های CJK است و شکستن کلمه را ممنوع می‌کند.' },
  demo('<p class="w-48 break-all rounded-sm border border-slate-300 p-2 text-sm">The longest word is Supercalifragilisticexpialidocious.</p>', '<p class="break-all ...">The longest word in any of the major...</p>'),
], 'break-all')

C['overflow-wrap'] = simple('overflow-wrap', 'کلاس‌هایی برای کنترل اینکه کلمه‌ی بلندی که در کادر جا نمی‌شود چطور بشکند.', [
  ['wrap-break-word', 'overflow-wrap: break-word;'],
  ['wrap-anywhere', 'overflow-wrap: anywhere;'],
  ['wrap-normal', 'overflow-wrap: normal;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`wrap-break-word` فقط وقتی کلمه از کادر بیرون می‌زند آن را می‌شکند. `wrap-anywhere` شبیه آن است ولی هنگام محاسبه‌ی اندازه‌ی کمینه (مثلاً در flex) هم شکستن را در نظر می‌گیرد، پس مشکل سرریز در `flex` را حل می‌کند:' },
  { t: 'code', text: '<div class="flex">\n  <img class="size-16 shrink-0" src="..." />\n  <div class="wrap-anywhere">\n    <p>Jordan Sheppard</p>\n    <p>jordan.sheppard.with.a.very.long.email@example.com</p>\n  </div>\n</div>', file: 'HTML' },
], 'wrap-break-word')

C['hyphens'] = simple('hyphens', 'کلاس‌هایی برای کنترل خط‌تیره‌گذاری خودکار هنگام شکستن کلمه.', [
  ['hyphens-none', 'hyphens: none;'],
  ['hyphens-manual', 'hyphens: manual;'],
  ['hyphens-auto', 'hyphens: auto;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`hyphens-auto` مرورگر را وادار می‌کند کلمه‌های بلند را با خط‌تیره بشکند. برای کار کردن باید ویژگی `lang` روی `<html>` درست تنظیم شده باشد:' },
  { t: 'code', text: '<p class="hyphens-auto" lang="en">\n  Officially recognized by the Guinness World Records as the longest word...\n</p>', file: 'HTML' },
  { t: 'p', text: '`hyphens-manual` (پیش‌فرض) فقط در جاهایی که `&shy;` گذاشته‌ای می‌شکند.' },
], 'hyphens-auto')

C['content'] = simple('content', 'کلاس‌هایی برای تعیین محتوای شبه‌عنصرهای `::before` و `::after`.', [
  ['content-none', 'content: none;'],
].concat(arb('content', 'content')), [
  { t: 'h2', text: 'مثال‌ها' },
  { t: 'p', text: 'برای نوشتن متن در شبه‌عنصر، `content-[\'...\']` را همراه `before:` یا `after:` بنویس. زیرخط به فاصله تبدیل می‌شود:' },
  demo('<p class="text-sm before:content-[\'Hello_\'] after:content-[\'_World\']">Tailwind</p>', '<p class="before:content-[\'Hello_\'] after:content-[\'_World\'] ...">Tailwind</p>'),
  { t: 'p', text: 'در Tailwind ۴ وقتی از `before:` و `after:` استفاده می‌کنی، `content: ""` به‌صورت خودکار گذاشته می‌شود، پس برای عنصر تزئینی خالی لازم نیست آن را بنویسی. برای خواندن از ویژگی HTML:' },
  { t: 'code', text: '<a class="after:content-[\'_(\'attr(href)\')\'] ..." href="https://tailwindcss.com">Tailwind</a>', file: 'HTML' },
  { t: 'p', text: '`content-none` محتوا را کاملاً برمی‌دارد:' },
  { t: 'code', text: '<div class="before:content-[\'Hello_World\'] md:before:content-none ...">...</div>', file: 'HTML' },
], 'content-none')
