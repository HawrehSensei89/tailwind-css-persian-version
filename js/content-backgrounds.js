// Backgrounds — ۸ صفحه
var C = window.CONTENT
var demo = function (html, code) { return { t: 'demo', html: html, code: code } }
var tbl = function (rows) { return { t: 'table', rows: rows } }
var rep = function (cls) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + cls + '` یا `md:' + cls + '`.' }
}
var arb = function (p, css) {
  return [[p + '-(<custom-property>)', css + ': var(<custom-property>);'], [p + '-[<value>]', css + ': <value>;']]
}
var pic = 'background-image:linear-gradient(135deg,#38bdf8 0%,#6366f1 50%,#ec4899 100%);'

C['background-attachment'] = {
  heading: 'background-attachment',
  lead: 'کلاس‌هایی برای تعیین رفتار تصویر پس‌زمینه هنگام اسکرول.',
  blocks: [
    tbl([
      ['bg-fixed', 'background-attachment: fixed;'],
      ['bg-local', 'background-attachment: local;'],
      ['bg-scroll', 'background-attachment: scroll;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`bg-fixed` پس‌زمینه را نسبت به پنجره ثابت نگه می‌دارد و محتوا روی آن اسکرول می‌شود (افکت parallax ساده). `bg-local` پس‌زمینه را همراه محتوای داخل خود عنصر اسکرول می‌کند. `bg-scroll` (پیش‌فرض) پس‌زمینه را به عنصر می‌چسباند و با اسکرول صفحه حرکت می‌کند، ولی با اسکرول داخلی عنصر نه:' },
    { t: 'code', text: '<div class="bg-[url(/img/mountains.jpg)] bg-fixed ...">...</div>\n<div class="bg-[url(/img/mountains.jpg)] bg-local ...">...</div>\n<div class="bg-[url(/img/mountains.jpg)] bg-scroll ...">...</div>', file: 'HTML' },
    { t: 'note', text: '`bg-fixed` روی بیشتر مرورگرهای موبایل (مخصوصاً iOS) درست کار نمی‌کند.' },
    rep('bg-fixed'),
  ],
}

C['background-clip'] = {
  heading: 'background-clip',
  lead: 'کلاس‌هایی برای تعیین اینکه پس‌زمینه تا کجای عنصر کشیده شود.',
  blocks: [
    tbl([
      ['bg-clip-border', 'background-clip: border-box;'],
      ['bg-clip-padding', 'background-clip: padding-box;'],
      ['bg-clip-content', 'background-clip: content-box;'],
      ['bg-clip-text', 'background-clip: text;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'برش تا border، padding یا محتوا' },
    demo('<div class="flex gap-3 text-center text-xs"><div class="size-24 border-4 border-dashed border-slate-400 bg-sky-500 p-3 bg-clip-border text-white">border</div><div class="size-24 border-4 border-dashed border-slate-400 bg-sky-500 p-3 bg-clip-padding text-white">padding</div><div class="size-24 border-4 border-dashed border-slate-400 bg-sky-500 p-3 bg-clip-content text-white">content</div></div>', '<div class="border-4 border-dashed bg-indigo-500 p-3 bg-clip-border ...">...</div>\n<div class="... bg-clip-padding ...">...</div>\n<div class="... bg-clip-content ...">...</div>'),
    { t: 'h3', text: 'متن گرادیانی' },
    { t: 'p', text: '`bg-clip-text` پس‌زمینه را فقط داخل شکل حروف نشان می‌دهد. همراه `text-transparent` متن گرادیانی می‌سازد:' },
    demo('<p class="bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent">Gradient text</p>', '<em class="bg-linear-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent ...">Hello world</em>'),
    rep('bg-clip-text'),
  ],
}

C['background-color'] = {
  heading: 'background-color',
  lead: 'کلاس‌هایی برای تعیین رنگ پس‌زمینه‌ی عنصر.',
  blocks: [
    tbl([
      ['bg-inherit', 'background-color: inherit;'],
      ['bg-current', 'background-color: currentColor;'],
      ['bg-transparent', 'background-color: transparent;'],
      ['bg-black', 'background-color: var(--color-black); /* #000 */'],
      ['bg-white', 'background-color: var(--color-white); /* #fff */'],
      ['bg-<color>-<shade>', 'background-color: var(--color-<color>-<shade>);'],
      ['bg-(<custom-property>)', 'background-color: var(<custom-property>);'],
      ['bg-[<value>]', 'background-color: <value>;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    demo('<div class="flex gap-2"><button class="rounded-md bg-sky-500 px-4 py-2 text-sm text-white">Button A</button><button class="rounded-md bg-indigo-500 px-4 py-2 text-sm text-white">Button B</button><button class="rounded-md bg-pink-500 px-4 py-2 text-sm text-white">Button C</button></div>', '<button class="bg-blue-500 ...">Button A</button>\n<button class="bg-cyan-500 ...">Button B</button>\n<button class="bg-pink-500 ...">Button C</button>'),
    { t: 'h3', text: 'شفافیت' },
    demo('<div class="flex gap-2"><div class="size-14 rounded bg-sky-500/100"></div><div class="size-14 rounded bg-sky-500/75"></div><div class="size-14 rounded bg-sky-500/50"></div><div class="size-14 rounded bg-sky-500/25"></div></div>', '<button class="bg-sky-500/100 ..."></button>\n<button class="bg-sky-500/75 ..."></button>\n<button class="bg-sky-500/50 ..."></button>'),
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="bg-[#50d71e] ...">...</div>\n<div class="bg-(--my-color) ...">...</div>', file: 'HTML' },
    rep('bg-sky-500'),
  ],
}

C['background-image'] = {
  heading: 'background-image',
  lead: 'کلاس‌هایی برای تعیین تصویر پس‌زمینه‌ی عنصر، از جمله گرادیان‌ها.',
  blocks: [
    tbl([
      ['bg-none', 'background-image: none;'],
      ['bg-[<value>]', 'background-image: <value>;'],
      ['bg-(image:<custom-property>)', 'background-image: var(<custom-property>);'],
      ['bg-linear-to-t', 'background-image: linear-gradient(to top, <color-stops>);'],
      ['bg-linear-to-tr / r / br / b / bl / l / tl', 'گرادیان خطی به سمت بالا-راست، راست، پایین-راست، پایین، پایین-چپ، چپ، بالا-چپ'],
      ['bg-linear-<angle>', 'background-image: linear-gradient(<angle>deg, <color-stops>);'],
      ['-bg-linear-<angle>', 'زاویه‌ی منفی'],
      ['bg-linear-(<custom-property>)', 'background-image: linear-gradient(var(<custom-property>), <color-stops>);'],
      ['bg-radial', 'background-image: radial-gradient(in oklab, <color-stops>);'],
      ['bg-radial-[<value>]', 'background-image: radial-gradient(<value>, <color-stops>);'],
      ['bg-conic', 'background-image: conic-gradient(from 0deg in oklab, <color-stops>);'],
      ['bg-conic-<angle>', 'background-image: conic-gradient(from <angle>deg in oklab, <color-stops>);'],
      ['bg-conic-[<value>]', 'background-image: conic-gradient(<value>, <color-stops>);'],
    ]),
    { t: 'note', text: 'در نسخه‌ی ۴ کلاس‌های `bg-gradient-to-*` به `bg-linear-to-*` تغییر نام داده‌اند. نام قدیمی هنوز برای سازگاری کار می‌کند.' },
    { t: 'h2', text: 'تصویر پس‌زمینه' },
    { t: 'p', text: 'برای یک تصویر مشخص از مقدار دلخواه با `url()` استفاده کن:' },
    { t: 'code', text: '<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center ..."></div>', file: 'HTML' },
    { t: 'h2', text: 'گرادیان خطی' },
    { t: 'p', text: 'اول جهت یا زاویه را با `bg-linear-*` بگذار و بعد رنگ‌ها را با `from-*`، `via-*` و `to-*`:' },
    demo('<div class="space-y-2"><div class="h-14 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500"></div><div class="h-14 rounded-lg bg-gradient-to-br from-sky-500 via-indigo-500 to-pink-500"></div><div class="h-14 rounded-lg bg-gradient-to-b from-sky-500 to-indigo-500"></div></div>',
      '<div class="bg-linear-to-r from-cyan-500 to-blue-500"></div>\n<div class="bg-linear-to-br from-sky-500 via-indigo-500 to-pink-500"></div>\n<div class="bg-linear-65 from-indigo-500 via-purple-500 to-pink-500"></div>'),
    { t: 'h3', text: 'جای توقف رنگ' },
    { t: 'p', text: 'با کلاس‌های `from-10%`، `via-30%` و `to-90%` مکان هر رنگ را مشخص کن:' },
    { t: 'code', text: '<div class="bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>', file: 'HTML' },
    { t: 'h3', text: 'هماهنگی رنگ‌ها (interpolation)' },
    { t: 'p', text: 'می‌توانی با modifier مثل `/srgb`، `/oklch` یا `/longer` روش ترکیب رنگ را عوض کنی:' },
    { t: 'code', text: '<div class="bg-linear-to-r/srgb from-indigo-500 to-teal-400 ..."></div>\n<div class="bg-linear-to-r/oklch from-indigo-500 to-teal-400 ..."></div>\n<div class="bg-linear-to-r/longer from-indigo-500 to-teal-400 ..."></div>', file: 'HTML' },
    { t: 'h2', text: 'گرادیان شعاعی' },
    demo('<div class="size-28 rounded-lg bg-radial from-sky-400 to-indigo-600"></div>', '<div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>'),
    { t: 'h2', text: 'گرادیان مخروطی' },
    demo('<div class="size-28 rounded-full bg-conic from-sky-500 via-pink-500 to-sky-500"></div>', '<div class="size-18 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>'),
    { t: 'h2', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ..."></div>\n<div class="bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% ..."></div>', file: 'HTML' },
    rep('bg-linear-to-r'),
  ],
}

C['background-origin'] = {
  heading: 'background-origin',
  lead: 'کلاس‌هایی برای تعیین اینکه موقعیت پس‌زمینه نسبت به کدام قسمت عنصر محاسبه شود.',
  blocks: [
    tbl([
      ['bg-origin-border', 'background-origin: border-box;'],
      ['bg-origin-padding', 'background-origin: padding-box;'],
      ['bg-origin-content', 'background-origin: content-box;'],
    ]),
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'تعیین می‌کند تصویر پس‌زمینه از گوشه‌ی border، padding یا محتوا شروع شود. معمولاً همراه `bg-no-repeat` و `bg-position-*` استفاده می‌شود:' },
    { t: 'code', text: '<div class="border-4 border-dashed bg-[url(/img/dot.png)] bg-no-repeat bg-origin-border p-3 ...">...</div>\n<div class="border-4 border-dashed bg-[url(/img/dot.png)] bg-no-repeat bg-origin-padding p-3 ...">...</div>\n<div class="border-4 border-dashed bg-[url(/img/dot.png)] bg-no-repeat bg-origin-content p-3 ...">...</div>', file: 'HTML' },
    rep('bg-origin-padding'),
  ],
}

C['background-position'] = {
  heading: 'background-position',
  lead: 'کلاس‌هایی برای تعیین موقعیت تصویر پس‌زمینه.',
  blocks: [
    tbl([
      ['bg-top-left', 'background-position: top left;'],
      ['bg-top', 'background-position: top;'],
      ['bg-top-right', 'background-position: top right;'],
      ['bg-left', 'background-position: left;'],
      ['bg-center', 'background-position: center;'],
      ['bg-right', 'background-position: right;'],
      ['bg-bottom-left', 'background-position: bottom left;'],
      ['bg-bottom', 'background-position: bottom;'],
      ['bg-bottom-right', 'background-position: bottom right;'],
      ['bg-position-(<custom-property>)', 'background-position: var(<custom-property>);'],
      ['bg-position-[<value>]', 'background-position: <value>;'],
    ]),
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: 'پرکاربردترین حالت `bg-center` است که معمولاً همراه `bg-cover` می‌آید تا تصویر وسط کادر بماند:' },
    { t: 'code', text: '<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center ..."></div>\n<div class="bg-[url(/img/mountains.jpg)] bg-position-[center_top_1rem] ..."></div>', file: 'HTML' },
    rep('bg-center'),
  ],
}

C['background-repeat'] = {
  heading: 'background-repeat',
  lead: 'کلاس‌هایی برای کنترل تکرار تصویر پس‌زمینه.',
  blocks: [
    tbl([
      ['bg-repeat', 'background-repeat: repeat;'],
      ['bg-repeat-x', 'background-repeat: repeat-x;'],
      ['bg-repeat-y', 'background-repeat: repeat-y;'],
      ['bg-repeat-space', 'background-repeat: space;'],
      ['bg-repeat-round', 'background-repeat: round;'],
      ['bg-no-repeat', 'background-repeat: no-repeat;'],
    ]),
    { t: 'h2', text: 'مثال' },
    { t: 'p', text: '`bg-repeat-space` تکرار می‌کند و فاصله‌ی مساوی بین تکه‌ها می‌گذارد، طوری که هیچ تکه‌ای بریده نشود. `bg-repeat-round` تکه‌ها را کمی کوچک یا بزرگ می‌کند تا دقیقاً جا شوند:' },
    demo('<div class="h-20 w-full rounded-lg bg-repeat-x" style="background-image:radial-gradient(circle,#0ea5e9 40%,transparent 41%);background-size:28px 28px;"></div>', '<div class="bg-[url(/img/dot.png)] bg-repeat-x ..."></div>\n<div class="bg-[url(/img/dot.png)] bg-no-repeat ..."></div>'),
    rep('bg-no-repeat'),
  ],
}

C['background-size'] = {
  heading: 'background-size',
  lead: 'کلاس‌هایی برای تعیین اندازه‌ی تصویر پس‌زمینه.',
  blocks: [
    tbl([
      ['bg-auto', 'background-size: auto;'],
      ['bg-cover', 'background-size: cover;'],
      ['bg-contain', 'background-size: contain;'],
      ['bg-size-(<custom-property>)', 'background-size: var(<custom-property>);'],
      ['bg-size-[<value>]', 'background-size: <value>;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'table', rows: [
      ['bg-auto', 'تصویر با اندازه‌ی اصلی خودش'],
      ['bg-cover', 'کادر را کاملاً می‌پوشاند، با حفظ نسبت (ممکن است بخشی بریده شود)'],
      ['bg-contain', 'کل تصویر داخل کادر جا می‌شود، با حفظ نسبت (ممکن است فضای خالی بماند)'],
    ] },
    { t: 'code', text: '<div class="bg-[url(/img/mountains.jpg)] bg-auto bg-center bg-no-repeat ..."></div>\n<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center ..."></div>\n<div class="bg-[url(/img/mountains.jpg)] bg-contain bg-center bg-no-repeat ..."></div>', file: 'HTML' },
    { t: 'h3', text: 'مقدار دلخواه' },
    { t: 'code', text: '<div class="bg-size-[auto_100px] ..."></div>', file: 'HTML' },
    rep('bg-cover'),
  ],
}
