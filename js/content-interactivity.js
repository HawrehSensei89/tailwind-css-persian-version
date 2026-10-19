// Interactivity — ۲۰ صفحه
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
var tile = function (cls, txt) { return '<div class="flex h-16 w-24 shrink-0 items-center justify-center rounded-lg bg-sky-500 text-xs font-semibold text-white ' + cls + '">' + (txt || '') + '</div>' }
var wrap = function (inner) { return '<div class="flex flex-wrap items-center gap-4 p-2">' + inner + '</div>' }
var spacingRows = function (p, css, label) {
  return [
    [p + '-<number>', css + ': calc(var(--spacing) * <number>);'],
    [p + '-x-<number>', css + '-inline: ...'],
    [p + '-y-<number>', css + '-block: ...'],
    [p + 's-<number> / ' + p + 'e-<number>', css + '-inline-start / -inline-end (منطقی)'],
    [p + 't / r / b / l-<number>', css + ' یک طرف'],
  ]
}

C['accent-color'] = page('accent-color', 'کلاس‌هایی برای تعیین رنگ تأکیدی کنترل‌های فرم (چک‌باکس، رادیو، range).', [
  ['accent-inherit', 'accent-color: inherit;'],
  ['accent-current', 'accent-color: currentColor;'],
  ['accent-transparent', 'accent-color: transparent;'],
  ['accent-auto', 'accent-color: auto;'],
  ['accent-black / accent-white', 'accent-color: var(--color-black / white);'],
  ['accent-<color>-<shade>', 'accent-color: var(--color-<color>-<shade>);'],
].concat(arb('accent', 'accent-color')), [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<label class="flex items-center gap-2 text-sm"><input type="checkbox" checked class="size-4 accent-pink-500" /> accent-pink-500</label><label class="flex items-center gap-2 text-sm"><input type="radio" checked class="size-4 accent-sky-500" /> accent-sky-500</label><input type="range" class="accent-indigo-500" />'), '<input type="checkbox" checked class="accent-pink-500" />\n<input type="range" class="accent-indigo-500" />'),
  { t: 'p', text: 'بدون شخصی‌سازی سنگین، با یک کلاس رنگ کنترل‌های بومی مرورگر با برند سایت هماهنگ می‌شود.' },
], 'accent-pink-500')

C['appearance'] = page('appearance', 'کلاس‌هایی برای حذف یا حفظ ظاهر پیش‌فرض مرورگر برای عنصرهای فرم.', [
  ['appearance-none', 'appearance: none;'],
  ['appearance-auto', 'appearance: auto;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`appearance-none` ظاهر بومی select، checkbox و غیره را برمی‌دارد تا خودت ظاهر دلخواه را بدهی (مثلاً با `bg-*`، `border` و یک آیکون فلش سفارشی):' },
  demo(wrap('<select class="appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:bg-slate-800"><option>appearance-none</option></select><select class="appearance-auto rounded-md border border-slate-300 px-3 py-2 text-sm"><option>appearance-auto</option></select>'), '<select class="appearance-none ...">\n  <option>Yes</option>\n  <option>No</option>\n</select>'),
  { t: 'note', text: 'اگر `appearance-none` را روی select بگذاری، فلش کشویی هم حذف می‌شود. باید خودت یک آیکون با `bg-[url(...)]` یا یک SVG کنارش بگذاری.' },
], 'appearance-none')

C['caret-color'] = page('caret-color', 'کلاس‌هایی برای تعیین رنگ نشانگر تایپ (caret) در فیلدهای متنی.', [
  ['caret-inherit', 'caret-color: inherit;'],
  ['caret-current', 'caret-color: currentColor;'],
  ['caret-transparent', 'caret-color: transparent;'],
  ['caret-black / caret-white', 'caret-color: var(--color-black / white);'],
  ['caret-<color>-<shade>', 'caret-color: var(--color-<color>-<shade>);'],
].concat(arb('caret', 'caret-color')), [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<textarea class="caret-pink-500 rounded-md border border-slate-300 bg-transparent p-2 text-sm" rows="2">caret-pink-500: روی این کلیک کن</textarea>'), '<textarea class="caret-pink-500 ..."></textarea>'),
], 'caret-pink-500')

C['color-scheme'] = page('color-scheme', 'کلاس‌هایی برای تعیین اینکه عنصرهای بومی مرورگر (اسکرول‌بار، فیلدهای فرم) با کدام طرح رنگی نمایش داده شوند.', [
  ['scheme-normal', 'color-scheme: normal;'],
  ['scheme-dark', 'color-scheme: dark;'],
  ['scheme-light', 'color-scheme: light;'],
  ['scheme-light-dark', 'color-scheme: light dark;'],
  ['scheme-only-dark', 'color-scheme: only dark;'],
  ['scheme-only-light', 'color-scheme: only light;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'وقتی سایتت تاریک است ولی اسکرول‌بار و فیلدهای فرم سفیدند، `scheme-dark` آن‌ها را هم تیره می‌کند. معمولاً همراه `dark:` استفاده می‌شود:' },
  { t: 'code', text: '<html class="scheme-light dark:scheme-dark">\n  <!-- ... -->\n</html>', file: 'HTML' },
], 'scheme-dark')

var cursorList = ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out']
C['cursor'] = page('cursor', 'کلاس‌هایی برای تعیین شکل نشانگر موس روی عنصر.', cursorList.map(function (c) { return ['cursor-' + c, 'cursor: ' + c + ';'] }).concat(arb('cursor', 'cursor')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'موس را روی هر کادر ببر تا شکل نشانگر را ببینی:' },
  demo(wrap(['pointer', 'wait', 'move', 'not-allowed', 'grab', 'zoom-in', 'help'].map(function (c) { return tile('cursor-' + c, c) }).join('')), '<button type="button" class="cursor-pointer ...">Submit</button>\n<button type="button" class="cursor-progress ...">Saving...</button>\n<button type="button" class="cursor-not-allowed ..." disabled>Confirm</button>'),
  { t: 'note', text: 'در Tailwind ۴ دکمه‌ها به‌صورت پیش‌فرض `cursor: default` دارند (نه `pointer`). اگر می‌خواهی روی دکمه‌ها دست نشان داده شود، `cursor-pointer` را خودت بگذار یا با `@layer base` برای همه‌ی دکمه‌ها تنظیم کن.' },
], 'cursor-pointer')

C['field-sizing'] = page('field-sizing', 'کلاس‌هایی برای اینکه فیلدهای فرم بر اساس محتوایشان خودکار بزرگ شوند.', [
  ['field-sizing-fixed', 'field-sizing: fixed;'],
  ['field-sizing-content', 'field-sizing: content;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'با `field-sizing-content` یک `textarea` با تایپ کردن خودش بلند می‌شود، بدون JavaScript:' },
  demo('<textarea class="field-sizing-content rounded-md border border-slate-300 bg-transparent p-2 text-sm" rows="1">تایپ کن تا بزرگ شود</textarea>', '<textarea class="field-sizing-content ..."></textarea>'),
  { t: 'note', text: 'این قابلیت جدید است و در همه‌ی مرورگرها (مثلاً Firefox قدیمی) پشتیبانی نمی‌شود. در مرورگرهای پشتیبانی‌نکننده فیلد فقط اندازه‌ی ثابت می‌ماند، که بی‌خطر است.' },
], 'field-sizing-content')

C['pointer-events'] = page('pointer-events', 'کلاس‌هایی برای تعیین اینکه عنصر به رویدادهای موس و لمس واکنش نشان بدهد یا نه.', [
  ['pointer-events-auto', 'pointer-events: auto;'],
  ['pointer-events-none', 'pointer-events: none;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`pointer-events-none` عنصر را «شفاف» برای کلیک می‌کند و کلیک از روی آن عبور می‌کند. برای عنصر تزئینی روی دکمه یا حالت غیرفعال مفید است:' },
  demo(wrap('<div class="relative"><button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white">کلیک‌پذیر</button><span class="pointer-events-none absolute inset-0 rounded-md bg-pink-500/30"></span></div><button class="pointer-events-none rounded-md bg-sky-500 px-4 py-2 text-sm text-white opacity-50">pointer-events-none</button>'), '<div class="relative">\n  <button>...</button>\n  <span class="pointer-events-none absolute inset-0"></span>\n</div>'),
  { t: 'note', text: 'این کلاس فقط موس و لمس را غیرفعال می‌کند. کاربر با کیبورد هنوز می‌تواند عنصر را فوکوس کند. برای غیرفعال کردن کامل از ویژگی `disabled` یا `inert` هم استفاده کن.' },
], 'pointer-events-none')

C['resize'] = page('resize', 'کلاس‌هایی برای تعیین اینکه کاربر بتواند اندازه‌ی عنصر را با کشیدن تغییر بدهد.', [
  ['resize-none', 'resize: none;'],
  ['resize', 'resize: both;'],
  ['resize-y', 'resize: vertical;'],
  ['resize-x', 'resize: horizontal;'],
], [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<textarea class="resize-none rounded-md border border-slate-300 bg-transparent p-2 text-xs" rows="2" cols="14">resize-none</textarea><textarea class="resize-y rounded-md border border-slate-300 bg-transparent p-2 text-xs" rows="2" cols="14">resize-y</textarea><textarea class="resize rounded-md border border-slate-300 bg-transparent p-2 text-xs" rows="2" cols="14">resize</textarea>'), '<textarea class="resize-none ..."></textarea>\n<textarea class="resize-y ..."></textarea>\n<textarea class="resize ..."></textarea>'),
  { t: 'p', text: 'برای `textarea` ها معمولاً `resize-y` بهترین انتخاب است تا layout افقی خراب نشود.' },
], 'resize-y')

C['scroll-behavior'] = page('scroll-behavior', 'کلاس‌هایی برای تعیین رفتار اسکرول برنامه‌ای (مثل کلیک روی لینک `#id`).', [
  ['scroll-auto', 'scroll-behavior: auto;'],
  ['scroll-smooth', 'scroll-behavior: smooth;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`scroll-smooth` را روی `html` بگذار تا کلیک روی لینک‌های درون‌صفحه‌ای نرم اسکرول شود:' },
  { t: 'code', text: '<html class="scroll-smooth">\n  <!-- ... -->\n</html>', file: 'HTML' },
  { t: 'note', text: 'برای کاربرانی که حرکت کم انتخاب کرده‌اند، از `motion-safe:scroll-smooth` استفاده کن.' },
], 'scroll-smooth')

C['scrollbar-color'] = page('scrollbar-color', 'کلاس‌هایی برای تعیین رنگ اسکرول‌بار.', [
  ['scrollbar-thumb-<color>', 'رنگ دسته‌ی اسکرول‌بار (thumb)'],
  ['scrollbar-track-<color>', 'رنگ مسیر اسکرول‌بار (track)'],
  ['scrollbar-thumb-(<custom-property>)', 'مقدار از متغیر CSS'],
  ['scrollbar-thumb-[<value>]', 'مقدار دلخواه'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'این کلاس‌ها از ویژگی استاندارد `scrollbar-color` استفاده می‌کنند و رنگ دسته و مسیر را با هم تعیین می‌کنند:' },
  { t: 'code', text: '<div class="h-32 overflow-auto scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-200 ...">\n  ...\n</div>', file: 'HTML' },
  { t: 'note', text: 'نام دقیق این کلاس‌ها را از حافظه نوشتم و با سایت اصلی تطبیق نداده‌ام. اگر در نسخه‌ی شما کار نکرد، با مقدار دلخواه بنویس: `[scrollbar-color:var(--color-sky-500)_var(--color-slate-200)]`.' },
], 'scrollbar-thumb-sky-500')

C['scrollbar-width'] = page('scrollbar-width', 'کلاس‌هایی برای تعیین ضخامت اسکرول‌بار.', [
  ['scrollbar-auto', 'scrollbar-width: auto;'],
  ['scrollbar-thin', 'scrollbar-width: thin;'],
  ['scrollbar-none', 'scrollbar-width: none;'],
].concat(arb('scrollbar', 'scrollbar-width')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`scrollbar-thin` اسکرول‌بار را باریک می‌کند و `scrollbar-none` آن را پنهان می‌کند ولی اسکرول هنوز کار می‌کند (مثلاً برای اسلایدر افقی):' },
  demo('<div class="flex h-20 w-64 gap-2 overflow-x-auto scrollbar-thin">' + [1, 2, 3, 4, 5, 6].map(function (n) { return tile('', n) }).join('') + '</div>', '<div class="overflow-x-auto scrollbar-thin ...">...</div>\n<div class="overflow-x-auto scrollbar-none ...">...</div>'),
  { t: 'note', text: 'چون پنهان کردن اسکرول‌بار ممکن است برای کاربران گیج‌کننده باشد، فقط وقتی از `scrollbar-none` استفاده کن که راه دیگری (مثل دکمه یا نقطه) برای اسکرول نشان داده‌ای.' },
], 'scrollbar-thin')

C['scrollbar-gutter'] = page('scrollbar-gutter', 'کلاس‌هایی برای رزرو فضای اسکرول‌بار تا layout با ظاهر شدنش جابه‌جا نشود.', [
  ['scrollbar-gutter-auto', 'scrollbar-gutter: auto;'],
  ['scrollbar-gutter-stable', 'scrollbar-gutter: stable;'],
  ['scrollbar-gutter-stable-both', 'scrollbar-gutter: stable both-edges;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'وقتی محتوای یک بخش بلند می‌شود و اسکرول‌بار ظاهر می‌شود، عرض محتوا کم می‌شود و صفحه می‌پرد. `stable` فضای اسکرول‌بار را همیشه رزرو می‌کند:' },
  { t: 'code', text: '<div class="overflow-auto scrollbar-gutter-stable ...">...</div>', file: 'HTML' },
  { t: 'note', text: 'نام دقیق این کلاس‌ها را هم از حافظه نوشتم. اگر کار نکرد، مقدار دلخواه `[scrollbar-gutter:stable]` را بنویس.' },
], 'scrollbar-gutter-stable')

C['scroll-margin'] = page('scroll-margin', 'کلاس‌هایی برای تعیین فاصله‌ی عنصر از لبه‌ی ظرف اسکرول وقتی به آن اسکرول می‌شود (snap یا لینک `#id`).', [
  ['scroll-m-<number>', 'scroll-margin: calc(var(--spacing) * <number>);'],
  ['-scroll-m-<number>', 'scroll-margin: calc(var(--spacing) * -<number>);'],
  ['scroll-mx-<number> / scroll-my-<number>', 'scroll-margin-inline / -block'],
  ['scroll-ms-<number> / scroll-me-<number>', 'scroll-margin-inline-start / -end (منطقی)'],
  ['scroll-mt / mr / mb / ml-<number>', 'scroll-margin یک طرف'],
].concat(arb('scroll-m', 'scroll-margin')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'وقتی هدر چسبنده داری و کاربر روی لینک `#section` کلیک می‌کند، عنوان بخش زیر هدر می‌رود. با `scroll-mt-*` روی عنوان، فاصله می‌دهی تا زیر هدر نرود:' },
  { t: 'code', text: '<header class="sticky top-0 h-16 ...">...</header>\n<h2 id="pricing" class="scroll-mt-20 ...">قیمت‌ها</h2>', file: 'HTML' },
], 'scroll-mt-20')

C['scroll-padding'] = page('scroll-padding', 'کلاس‌هایی برای تعیین فاصله‌ی داخلی ظرف اسکرول، که فاصله‌ی هدف از لبه را هنگام اسکرول تنظیم می‌کند.', [
  ['scroll-p-<number>', 'scroll-padding: calc(var(--spacing) * <number>);'],
  ['-scroll-p-<number>', 'scroll-padding: calc(var(--spacing) * -<number>);'],
  ['scroll-px-<number> / scroll-py-<number>', 'scroll-padding-inline / -block'],
  ['scroll-ps-<number> / scroll-pe-<number>', 'scroll-padding-inline-start / -end (منطقی)'],
  ['scroll-pt / pr / pb / pl-<number>', 'scroll-padding یک طرف'],
].concat(arb('scroll-p', 'scroll-padding')), [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'برخلاف `scroll-m-*` که روی هدف می‌نشیند، `scroll-p-*` روی **ظرف اسکرول** (یا `html`) می‌نشیند. برای هدر چسبنده‌ی سراسری، یک بار روی `html` بنویس:' },
  { t: 'code', text: '<html class="scroll-pt-20 scroll-smooth">...</html>', file: 'HTML' },
], 'scroll-pt-20')

C['scroll-snap-align'] = page('scroll-snap-align', 'کلاس‌هایی برای تعیین اینکه عنصر هنگام snap به کدام نقطه‌ی ظرف بچسبد.', [
  ['snap-start', 'scroll-snap-align: start;'],
  ['snap-end', 'scroll-snap-align: end;'],
  ['snap-center', 'scroll-snap-align: center;'],
  ['snap-align-none', 'scroll-snap-align: none;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'ظرف را با `snap-x snap-mandatory` تعریف کن و هر آیتم را با `snap-center` علامت بزن:' },
  demo('<div class="flex w-64 snap-x snap-mandatory gap-3 overflow-x-auto rounded-lg border border-slate-300 p-2">' + [1, 2, 3, 4, 5].map(function (n) { return '<div class="flex h-20 w-48 shrink-0 snap-center items-center justify-center rounded bg-sky-500 text-sm font-semibold text-white">' + n + '</div>' }).join('') + '</div>', '<div class="snap-x snap-mandatory overflow-x-auto flex ...">\n  <div class="shrink-0 snap-center ...">1</div>\n  <div class="shrink-0 snap-center ...">2</div>\n</div>'),
], 'snap-center')

C['scroll-snap-stop'] = page('scroll-snap-stop', 'کلاس‌هایی برای تعیین اینکه اسکرول سریع بتواند از روی یک نقطه‌ی snap بپرد یا نه.', [
  ['snap-normal', 'scroll-snap-stop: normal;'],
  ['snap-always', 'scroll-snap-stop: always;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: 'با `snap-always` اسکرول سریع حتماً روی هر آیتم می‌ایستد و آیتمی را رد نمی‌کند:' },
  { t: 'code', text: '<div class="snap-x snap-mandatory overflow-x-auto flex ...">\n  <div class="snap-center snap-always ...">1</div>\n  <div class="snap-center snap-always ...">2</div>\n</div>', file: 'HTML' },
], 'snap-always')

C['scroll-snap-type'] = page('scroll-snap-type', 'کلاس‌هایی برای فعال کردن snap در ظرف اسکرول و تعیین سخت‌گیری آن.', [
  ['snap-none', 'scroll-snap-type: none;'],
  ['snap-x', 'scroll-snap-type: x var(--tw-scroll-snap-strictness);'],
  ['snap-y', 'scroll-snap-type: y var(--tw-scroll-snap-strictness);'],
  ['snap-both', 'scroll-snap-type: both var(--tw-scroll-snap-strictness);'],
  ['snap-mandatory', '--tw-scroll-snap-strictness: mandatory;'],
  ['snap-proximity', '--tw-scroll-snap-strictness: proximity;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`snap-mandatory` همیشه روی نزدیک‌ترین نقطه می‌چسباند. `snap-proximity` فقط وقتی نزدیک نقطه باشی می‌چسباند و نرم‌تر است:' },
  demo('<div class="flex w-64 snap-x snap-proximity gap-3 overflow-x-auto rounded-lg border border-slate-300 p-2">' + [1, 2, 3, 4, 5].map(function (n) { return '<div class="flex h-20 w-48 shrink-0 snap-start items-center justify-center rounded bg-indigo-500 text-sm font-semibold text-white">' + n + '</div>' }).join('') + '</div>', '<div class="snap-x snap-proximity overflow-x-auto ...">...</div>'),
  { t: 'p', text: 'یادت باشد `snap-x` و `snap-y` را روی **ظرف** و `snap-start/center/end` را روی **آیتم‌ها** بنویسی.' },
], 'snap-x')

C['touch-action'] = page('touch-action', 'کلاس‌هایی برای تعیین اینکه لمس روی عنصر چه حرکت‌هایی (اسکرول، زوم) را فعال کند.', [
  ['touch-auto', 'touch-action: auto;'],
  ['touch-none', 'touch-action: none;'],
  ['touch-pan-x', 'touch-action: pan-x;'],
  ['touch-pan-left', 'touch-action: pan-left;'],
  ['touch-pan-right', 'touch-action: pan-right;'],
  ['touch-pan-y', 'touch-action: pan-y;'],
  ['touch-pan-up', 'touch-action: pan-up;'],
  ['touch-pan-down', 'touch-action: pan-down;'],
  ['touch-pinch-zoom', 'touch-action: pinch-zoom;'],
  ['touch-manipulation', 'touch-action: manipulation;'],
], [
  { t: 'h2', text: 'مثال' },
  { t: 'p', text: '`touch-manipulation` اسکرول و pinch-zoom را نگه می‌دارد ولی دابل‌تپ برای زوم را برمی‌دارد و تأخیر ۳۰۰ میلی‌ثانیه‌ای کلیک روی موبایل را از بین می‌برد. `touch-none` برای بوم نقاشی یا بازی که خودش رویدادهای لمس را مدیریت می‌کند:' },
  { t: 'code', text: '<button class="touch-manipulation ...">...</button>\n<canvas class="touch-none ..."></canvas>', file: 'HTML' },
], 'touch-manipulation')

C['user-select'] = page('user-select', 'کلاس‌هایی برای تعیین اینکه کاربر بتواند متن عنصر را انتخاب کند یا نه.', [
  ['select-none', 'user-select: none;'],
  ['select-text', 'user-select: text;'],
  ['select-all', 'user-select: all;'],
  ['select-auto', 'user-select: auto;'],
], [
  { t: 'h2', text: 'مثال' },
  demo(wrap('<p class="select-none text-sm">select-none: انتخاب نمی‌شود</p><p class="select-all text-sm">select-all: با یک کلیک همه انتخاب می‌شود</p><p class="select-text text-sm">select-text: عادی</p>'), '<div class="select-none ...">Try to select this text</div>\n<div class="select-all ...">Click to select all of this text</div>'),
  { t: 'p', text: '`select-none` برای دکمه‌ها و عنصرهای رابط کاربری که نباید ناخواسته انتخاب شوند مناسب است. `select-all` برای متنی که کاربر باید کپی کند (مثل کد یا لینک) عالی است. از `select-none` روی محتوای اصلی استفاده نکن، چون دسترس‌پذیری را کم می‌کند.' },
], 'select-none')

C['will-change'] = page('will-change', 'کلاس‌هایی برای هشدار به مرورگر درباره‌ی ویژگی‌ای که قرار است تغییر کند تا از قبل بهینه شود.', [
  ['will-change-auto', 'will-change: auto;'],
  ['will-change-scroll', 'will-change: scroll-position;'],
  ['will-change-contents', 'will-change: contents;'],
  ['will-change-transform', 'will-change: transform;'],
].concat(arb('will-change', 'will-change')), [
  { t: 'h2', text: 'مثال' },
  { t: 'code', text: '<div class="overflow-auto will-change-scroll ...">...</div>\n<div class="will-change-transform hover:scale-110 ...">...</div>', file: 'HTML' },
  { t: 'note', text: 'این یک راهنمای بهینه‌سازی است و باید با احتیاط استفاده شود. استفاده‌ی بیش از حد از `will-change` حافظه‌ی بیشتری مصرف می‌کند و می‌تواند عملکرد را بدتر کند. فقط وقتی مشکل واقعی لگ در انیمیشن داری سراغش برو، و در حالت ایده‌آل فقط وقتی لازم است (مثلاً در hover) فعالش کن.' },
], 'will-change-transform')
