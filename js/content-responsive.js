// طراحی ریسپانسیو — نسخه‌ی کامل با مثال‌ها و توضیح‌های اختصاصی این پروژه
var C = window.CONTENT
var L = function () { return Array.prototype.slice.call(arguments).join('\n') }
var h2 = function (t) { return { t: 'h2', text: t } }
var h3 = function (t) { return { t: 'h3', text: t } }
var p = function (t) { return { t: 'p', text: t } }
var code = function (t, f) { return { t: 'code', text: t, file: f || 'HTML' } }
var demo = function (html, c) { return { t: 'demo', html: html, code: c } }
var note = function (t) { return { t: 'note', text: t } }
var table = function (rows, heads) { return { t: 'table', rows: rows, heads: heads } }
var cell = function (n, c) { return '<div class="flex h-12 items-center justify-center rounded-lg bg-sky-500 text-sm font-semibold text-white ' + (c || '') + '">' + n + '</div>' }
var cells = function (n, c) { var s = ''; for (var i = 1; i <= n; i++) s += cell(i, c); return s }

C['responsive-design'] = {
  heading: 'طراحی ریسپانسیو',
  lead: 'با پیشوندهای breakpoint رابطی بساز که با هر اندازه‌ی صفحه، از موبایل تا دسکتاپ، درست نمایش داده شود.',
  blocks: [
    h2('مقدمه'),
    p('در Tailwind هر utility را می‌توان با یک **پیشوند breakpoint** مثل `md:` ترکیب کرد تا فقط از آن عرض صفحه به بالا اعمال شود. برای اینکه اصلاً ریسپانسیو کار کند، اول باید این تگ را در `<head>` صفحه داشته باشی، وگرنه مرورگرهای موبایل صفحه را مثل یک دسکتاپ کوچک‌شده نمایش می‌دهند:'),
    code('<meta name="viewport" content="width=device-width, initial-scale=1.0" />'),
    p('بعد پیشوند را جلوی utility بگذار. مثلاً این تصویر در موبایل ۶۴ پیکسل، از `md` به بالا ۱۲۸ پیکسل و از `lg` به بالا ۱۹۲ پیکسل است:'),
    demo('<div class="flex items-end gap-3"><div class="size-16 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 md:size-32 lg:size-48"></div><p class="text-sm text-slate-500">پنجره‌ی مرورگر را کوچک و بزرگ کن</p></div>',
      '<img class="w-16 md:w-32 lg:w-48" src="..." />'),
    p('نکته‌ی کلیدی: breakpoint ها بر اساس **عرض پنجره‌ی مرورگر** عمل می‌کنند، نه اندازه‌ی خود عنصر. برای حالت دوم (اندازه‌ی والد) از container query ها استفاده کن که پایین‌تر آمده است.'),

    h2('breakpoint های پیش‌فرض'),
    p('Tailwind پنج breakpoint آماده دارد. هرکدام یک media query از نوع `min-width` است:'),
    table([
      ['sm', '@media (width >= 40rem) { ... }   /* 640px */'],
      ['md', '@media (width >= 48rem) { ... }   /* 768px */'],
      ['lg', '@media (width >= 64rem) { ... }   /* 1024px */'],
      ['xl', '@media (width >= 80rem) { ... }   /* 1280px */'],
      ['2xl', '@media (width >= 96rem) { ... }  /* 1536px */'],
    ], ['پیشوند', 'media query']),
    p('عدد پیکسلی کنار هر ردیف فقط برای درک بهتر است. مقدارها در واقع بر حسب `rem` هستند تا با تنظیم اندازه‌ی فونت مرورگر کاربر هماهنگ بمانند.'),

    h2('رویکرد mobile-first'),
    p('Tailwind اول موبایل است. یعنی کلاس بدون پیشوند (مثل `text-center`) روی **همه‌ی اندازه‌ها** اعمال می‌شود و پیشوند فقط از آن عرض به **بالا** اثر می‌کند. پس `sm:text-center` یعنی «از ۶۴۰ پیکسل به بالا وسط‌چین».'),
    p('اشتباه رایج این است که کسی بخواهد روی موبایل استایلی بدهد و `sm:` بنویسد. چون `sm` یعنی «از sm به بالا»، روی موبایل اثری ندارد:'),
    code(L('<!-- اشتباه: روی موبایل اثر نمی‌کند -->', '<div class="sm:text-center"></div>', '', '<!-- درست: موبایل وسط‌چین، از sm به بعد چپ‌چین -->', '<div class="text-center sm:text-left"></div>')),
    p('الگوی درست: اول طراحی موبایل را با کلاس‌های بدون پیشوند بنویس. بعد با `sm:`، `md:` و `lg:` برای صفحه‌های بزرگ‌تر override کن. این روش معمولاً کد کمتر و قابل‌پیش‌بینی‌تری می‌دهد.'),
    p('یک مثال کامل: در موبایل عنصرها زیر هم‌اند، از `sm` به بعد کنار هم می‌روند و فاصله‌شان بیشتر می‌شود:'),
    demo('<div class="flex flex-col gap-2 sm:flex-row sm:gap-6">' + cell('01', 'sm:flex-1 h-12') + cell('02', 'sm:flex-1 h-12') + cell('03', 'sm:flex-1 h-12') + '</div>',
      L('<div class="flex flex-col gap-2 sm:flex-row sm:gap-6">', '  <div class="sm:flex-1">01</div>', '  <div class="sm:flex-1">02</div>', '  <div class="sm:flex-1">03</div>', '</div>')),

    h2('تغییر چند ویژگی در یک breakpoint'),
    p('برای هر ویژگی که باید عوض شود یک کلاس با پیشوند می‌نویسی. این کارت در موبایل فشرده و در صفحه‌ی بزرگ راحت‌تر و با متن بزرگ‌تر است:'),
    demo('<div class="rounded-xl bg-white p-4 shadow-md ring-1 ring-slate-900/5 md:p-8 dark:bg-slate-800"><h3 class="text-base font-semibold text-slate-900 md:text-xl dark:text-white">Responsive card</h3><p class="mt-1 text-sm text-slate-500 md:mt-3 md:text-base">Padding, title size and spacing all change at the md breakpoint.</p></div>',
      L('<div class="p-4 md:p-8 ...">', '  <h3 class="text-base md:text-xl ...">Responsive card</h3>', '  <p class="mt-1 text-sm md:mt-3 md:text-base ...">...</p>', '</div>')),

    h2('نمایش و پنهان کردن بر اساس اندازه'),
    p('ترکیب `hidden` با `md:block` (یا برعکس) رایج‌ترین راه برای نمایش یک عنصر فقط در موبایل یا فقط در دسکتاپ است. مثلاً دکمه‌ی منو فقط در موبایل و لینک‌های ناوبری فقط در دسکتاپ:'),
    code(L('<button class="md:hidden">منو</button>', '<nav class="hidden md:flex">', '  <a href="#">خانه</a>', '  <a href="#">مقالات</a>', '</nav>')),
    p('همین سایت هم برای دکمه‌ی منوی موبایل و سایدبار از همین الگو استفاده می‌کند (با `lg:hidden` و `hidden lg:block`).'),

    h2('هدف قرار دادن فقط موبایل'),
    p('چون پیشوندها از یک عرض به بالا اعمال می‌شوند، «فقط موبایل» را به‌صورت «زیر یک breakpoint» می‌نویسیم. برای این کار variant های `max-*` وجود دارند:'),
    table([
      ['max-sm', '@media (width < 40rem) { ... }'],
      ['max-md', '@media (width < 48rem) { ... }'],
      ['max-lg', '@media (width < 64rem) { ... }'],
      ['max-xl', '@media (width < 80rem) { ... }'],
      ['max-2xl', '@media (width < 96rem) { ... }'],
    ], ['پیشوند', 'media query']),
    demo('<p class="text-sm text-slate-600 max-md:rounded-lg max-md:bg-amber-100 max-md:p-3 max-md:text-amber-900">این کادر فقط در عرض کمتر از md رنگی می‌شود</p>',
      '<div class="max-md:hidden">...</div>\n<div class="max-lg:flex-col ...">...</div>'),

    h2('هدف قرار دادن یک بازه'),
    p('می‌توانی یک variant معمولی را با یک `max-*` ترکیب کنی تا استایل فقط **بین دو breakpoint** اعمال شود. در مثال زیر `flex` فقط از `md` تا قبل از `xl` فعال است:'),
    code('<div class="md:max-xl:flex">\n  <!-- فقط بین md و xl -->\n</div>'),
    p('برای هدف قرار دادن فقط یک breakpoint، همان breakpoint را با `max-*` ی بعدی ترکیب کن، مثل `md:max-lg:flex`.'),

    h2('breakpoint سفارشی'),
    p('متغیرهای تم `--breakpoint-*` داخل `@theme` تعیین می‌کنند چه پیشوندهایی وجود داشته باشند. می‌توانی مقدار را عوض کنی یا breakpoint جدید اضافه کنی:'),
    code(L('@import "tailwindcss";', '', '@theme {', '  --breakpoint-xs: 30rem;', '  --breakpoint-2xl: 100rem;', '  --breakpoint-3xl: 120rem;', '}'), 'CSS'),
    p('با این تعریف `xs:` و `3xl:` اضافه می‌شوند و `2xl:` مقدار جدید می‌گیرد.'),
    h3('حذف breakpoint های پیش‌فرض'),
    p('برای حذف یک breakpoint، آن را `initial` کن. برای شروع از صفر هم کل namespace را پاک کن و فقط اسم‌های خودت را بنویس:'),
    code(L('@theme {', '  --breakpoint-2xl: initial;', '}', '', '/* یا شروع کامل از صفر */', '@theme {', '  --breakpoint-*: initial;', '  --breakpoint-tablet: 40rem;', '  --breakpoint-laptop: 64rem;', '  --breakpoint-desktop: 80rem;', '}'), 'CSS'),
    p('حالا فقط `tablet:`، `laptop:` و `desktop:` وجود دارند و `md:` دیگر کار نمی‌کند.'),
    note('برای همه‌ی breakpoint ها از یک واحد استفاده کن (مثلاً همه `rem`). اگر واحدها را قاطی کنی ممکن است ترتیب media query ها در CSS خروجی با انتظارت نخواند.'),

    h2('مقدار دلخواه'),
    p('برای یک بار استفاده از یک اندازه‌ی خاص که ارزش ساختن breakpoint ندارد، از `min-[...]` و `max-[...]` استفاده کن:'),
    code('<div class="min-[320px]:text-center max-[600px]:bg-sky-300">\n  <!-- ... -->\n</div>'),

    h2('container query ها'),
    p('گاهی باید ظاهر یک کامپوننت را بر اساس **اندازه‌ی خودش یا والدش** عوض کنی، نه کل پنجره. مثلاً کارتی که هم در سایدبار باریک و هم در ناحیه‌ی اصلی پهن استفاده می‌شود. برای این کار والد را با `@container` علامت بزن و در فرزندان از variant های `@sm:`، `@md:` و مشابه آن استفاده کن:'),
    code(L('<div class="@container">', '  <div class="flex flex-col @md:flex-row">', '    <!-- ... -->', '  </div>', '</div>')),
    p('در دمو زیر عرض کادر را با کشیدن گوشه‌ی پایین راستش تغییر بده. وقتی عرض‌اش از ۲۴rem بیشتر شود، چیدمان از ستونی به ردیفی تبدیل می‌شود (صفحه ثابت می‌ماند، فقط کادر تغییر می‌کند):'),
    demo('<div class="@container w-72 max-w-full resize-x overflow-auto rounded-lg border border-dashed border-slate-400 p-3"><div class="flex flex-col gap-2 @sm:flex-row @sm:items-center"><div class="size-10 shrink-0 rounded-full bg-sky-500"></div><p class="text-sm">این چیدمان به عرض والد واکنش نشان می‌دهد، نه عرض پنجره</p></div></div>',
      L('<div class="@container">', '  <div class="flex flex-col @sm:flex-row @sm:items-center">', '    <img class="size-10 rounded-full" src="..." />', '    <p>...</p>', '  </div>', '</div>')),
    h3('اندازه‌های پیش‌فرض container'),
    table([
      ['@3xs', '@container (width >= 16rem)'], ['@2xs', '@container (width >= 18rem)'],
      ['@xs', '@container (width >= 20rem)'], ['@sm', '@container (width >= 24rem)'],
      ['@md', '@container (width >= 28rem)'], ['@lg', '@container (width >= 32rem)'],
      ['@xl', '@container (width >= 36rem)'], ['@2xl', '@container (width >= 42rem)'],
      ['@3xl', '@container (width >= 48rem)'], ['@4xl', '@container (width >= 56rem)'],
      ['@5xl', '@container (width >= 64rem)'], ['@6xl', '@container (width >= 72rem)'],
      ['@7xl', '@container (width >= 80rem)'],
    ], ['پیشوند', 'container query']),
    h3('حداکثر و بازه'),
    p('مثل breakpoint ها، `@max-*` برای «زیر یک اندازه» است و با ترکیب `@min-*` و `@max-*` یک بازه می‌سازی:'),
    code(L('<div class="@container">', '  <div class="flex flex-row @max-md:flex-col">...</div>', '</div>', '', '<div class="@container">', '  <div class="flex @min-md:@max-xl:hidden">...</div>', '</div>')),
    h3('container نام‌دار'),
    p('وقتی container ها تو در تو هستند، به هرکدام یک اسم بده و در variant به همان اسم ارجاع بده تا مشخص باشد کدام والد مدنظر است:'),
    code(L('<div class="@container/main">', '  <!-- ... -->', '  <div class="flex flex-row @sm/main:flex-col">', '    <!-- ... -->', '  </div>', '</div>')),
    h3('مقدار دلخواه و واحد container'),
    code(L('<div class="@container">', '  <div class="flex flex-col @min-[475px]:flex-row">...</div>', '</div>')),
    p('واحدهای container query مثل `cqw` (درصدی از عرض container) را هم با مقدار دلخواه می‌توانی استفاده کنی:'),
    code(L('<div class="@container">', '  <div class="w-[50cqw]">نصف عرض container</div>', '</div>')),
    h3('اندازه‌ی container سفارشی'),
    code('@theme {\n  --container-8xl: 96rem;\n}', 'CSS'),
    p('حالا `@8xl:` هم در دسترس است. همین متغیر `--container-*` عرض‌های `max-w-*` را هم تعیین می‌کند.'),

    h2('الگوهای رایج'),
    h3('grid ریسپانسیو'),
    demo('<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">' + cells(4, '') + '</div>',
      '<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">\n  <div>01</div>\n  <div>02</div>\n  <div>03</div>\n  <div>04</div>\n</div>'),
    p('موبایل یک ستون، از `sm` دو ستون و از `lg` چهار ستون.'),
    h3('اندازه‌ی متن ریسپانسیو'),
    demo('<h2 class="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-5xl dark:text-white">Responsive heading</h2>', '<h2 class="text-2xl font-bold sm:text-3xl lg:text-5xl">...</h2>'),
    h3('فاصله‌ی ریسپانسیو'),
    code('<section class="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">\n  <!-- ... -->\n</section>'),
    h3('ظرف وسط‌چین'),
    code('<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">\n  <!-- ... -->\n</div>'),

    h2('نکته‌های عملی'),
    table([
      ['طراحی از موبایل شروع شود', 'کلاس‌های بدون پیشوند را برای کوچک‌ترین صفحه بنویس و بعد بزرگ‌تر کن.'],
      ['فقط جایی که لازم است breakpoint بگذار', 'اگر یک ویژگی در همه‌ی اندازه‌ها یکی است، پیشوند نمی‌خواهد.'],
      ['از rem استفاده کن', 'breakpoint ها بر حسب rem با تنظیمات فونت کاربر هماهنگ می‌مانند.'],
      ['در مرورگر تست کن', 'در DevTools (کلید F12) حالت Device Toolbar را روشن کن و اندازه‌ها را امتحان کن.'],
      ['برای کامپوننت‌های قابل‌استفاده‌ی مجدد از container query استفاده کن', 'تا بدون وابستگی به عرض کل صفحه درست کار کنند.'],
      ['در RTL از ویژگی‌های منطقی استفاده کن', 'مثلاً `ps-*` و `ms-*` به‌جای `pl-*` و `ml-*` تا با تغییر جهت خودکار درست شوند.'],
    ], ['توصیه', 'توضیح']),
  ],
}
