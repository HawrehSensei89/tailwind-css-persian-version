// گروه «شروع کار» — نصب، تنظیم ادیتور، سازگاری، راهنمای ارتقا
var C = window.CONTENT

var HTML_PAGE = function (href) {
  return '<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link href="' + href + '" rel="stylesheet">\n</head>\n<body>\n  <h1 class="text-3xl font-bold underline">\n    Hello world!\n  </h1>\n</body>\n</html>'
}

/* ======================= نصب ======================= */
C['installation'] = {
  heading: 'نصب Tailwind CSS',
  lead: 'Tailwind همه‌ی فایل‌های HTML، کامپوننت‌های جاوااسکریپت و هر قالب دیگری را برای پیدا کردن نام کلاس‌ها اسکن می‌کند، استایل متناظر را می‌سازد و در یک فایل CSS ثابت می‌نویسد. سریع، انعطاف‌پذیر و بدون runtime است.',
  blocks: [
    { t: 'p', text: 'بسته به ابزاری که در پروژه‌ات استفاده می‌کنی، یکی از پنج روش زیر را انتخاب کن. اگر مطمئن نیستی، روش اول (پلاگین Vite) انتخاب خوبی است.' },

    /* ---- Vite ---- */
    { t: 'h2', text: 'نصب با پلاگین Vite' },
    { t: 'p', text: 'نصب به‌شکل پلاگین Vite ساده‌ترین راه برای استفاده در فریم‌ورک‌هایی مثل Laravel، SvelteKit، React Router، Nuxt و SolidJS است.' },
    { t: 'step', n: 1, title: 'ساخت پروژه', text: 'اگر هنوز پروژه‌ای نداری، با Create Vite یک پروژه‌ی جدید بساز.', code: 'npm create vite@latest my-project\ncd my-project', file: 'ترمینال' },
    { t: 'step', n: 2, title: 'نصب Tailwind CSS', text: 'پکیج‌های `tailwindcss` و `@tailwindcss/vite` را با npm نصب کن.', code: 'npm install tailwindcss @tailwindcss/vite', file: 'ترمینال' },
    { t: 'step', n: 3, title: 'تنظیم پلاگین Vite', text: 'پلاگین `@tailwindcss/vite` را به تنظیمات Vite اضافه کن.', code: "import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(),\n  ],\n})", file: 'vite.config.ts' },
    { t: 'step', n: 4, title: 'ایمپورت Tailwind در CSS', text: 'در فایل CSS اصلی یک `@import` برای Tailwind اضافه کن.', code: '@import "tailwindcss";', file: 'CSS' },
    { t: 'step', n: 5, title: 'اجرای پروژه', text: 'با `npm run dev` یا هر دستور دیگری که در `package.json` تعریف شده، پروژه را اجرا کن.', code: 'npm run dev', file: 'ترمینال' },
    { t: 'step', n: 6, title: 'استفاده در HTML', text: 'مطمئن شو فایل CSS در `<head>` لود شده (بعضی فریم‌ورک‌ها خودشان این کار را می‌کنند) و بعد کلاس‌های utility را روی عناصر بگذار.', code: HTML_PAGE('/src/style.css'), file: 'HTML' },
    { t: 'note', text: 'گیر کردی؟ راه‌اندازی Tailwind با Vite در ابزارهای build مختلف کمی فرق دارد. بخش «راهنمای فریم‌ورک‌ها» پایین همین صفحه را ببین.' },

    /* ---- PostCSS ---- */
    { t: 'h2', text: 'نصب با PostCSS' },
    { t: 'p', text: 'نصب به‌شکل پلاگین PostCSS ساده‌ترین راه برای یکپارچه‌سازی با فریم‌ورک‌هایی مثل Next.js و Angular است.' },
    { t: 'step', n: 1, title: 'نصب Tailwind CSS', text: 'پکیج‌های `tailwindcss`، `@tailwindcss/postcss` و `postcss` را با npm نصب کن.', code: 'npm install tailwindcss @tailwindcss/postcss postcss', file: 'ترمینال' },
    { t: 'step', n: 2, title: 'افزودن به تنظیمات PostCSS', text: '`@tailwindcss/postcss` را به فایل `postcss.config.mjs` یا هر جای دیگری از پروژه که PostCSS را تنظیم می‌کند اضافه کن.', code: 'export default {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n}', file: 'postcss.config.mjs' },
    { t: 'step', n: 3, title: 'ایمپورت Tailwind در CSS', text: 'در فایل CSS اصلی یک `@import` برای Tailwind اضافه کن.', code: '@import "tailwindcss";', file: 'CSS' },
    { t: 'step', n: 4, title: 'اجرای فرایند build', text: 'با `npm run dev` یا هر دستور دیگری که در `package.json` تعریف شده، build را اجرا کن.', code: 'npm run dev', file: 'ترمینال' },
    { t: 'step', n: 5, title: 'استفاده در HTML', text: 'مطمئن شو CSS کامپایل‌شده در `<head>` لود شده و بعد از کلاس‌های utility استفاده کن.', code: HTML_PAGE('/dist/styles.css'), file: 'HTML' },
    { t: 'note', text: 'راه‌اندازی با PostCSS بسته به ابزار build کمی تفاوت دارد. اگر فریم‌ورکت در لیست راهنماها بود، همان را دنبال کن.' },

    /* ---- CLI ---- */
    { t: 'h2', text: 'نصب با Tailwind CLI' },
    { t: 'p', text: 'ساده‌ترین و سریع‌ترین راه برای شروع از صفر، ابزار Tailwind CLI است. این ابزار به‌صورت یک فایل اجرایی مستقل (standalone) هم موجود است، پس اگر نمی‌خواهی Node.js نصب کنی، می‌توانی از آن استفاده کنی.' },
    { t: 'step', n: 1, title: 'نصب Tailwind CSS', text: 'پکیج‌های `tailwindcss` و `@tailwindcss/cli` را با npm نصب کن.', code: 'npm install tailwindcss @tailwindcss/cli', file: 'ترمینال' },
    { t: 'step', n: 2, title: 'ایمپورت Tailwind در CSS', text: 'خط `@import "tailwindcss";` را به فایل CSS اصلی اضافه کن.', code: '@import "tailwindcss";', file: 'src/input.css' },
    { t: 'step', n: 3, title: 'اجرای CLI', text: 'ابزار را اجرا کن تا فایل‌های سورس را برای پیدا کردن کلاس‌ها اسکن کند و CSS را بسازد. گزینه‌ی `--watch` باعث می‌شود با هر تغییر دوباره build شود.', code: 'npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch', file: 'ترمینال' },
    { t: 'step', n: 4, title: 'استفاده در HTML', text: 'فایل CSS ساخته‌شده را در `<head>` اضافه کن و از کلاس‌های utility استفاده کن.', code: HTML_PAGE('./output.css'), file: 'src/index.html' },

    /* ---- Framework guides ---- */
    { t: 'h2', text: 'راهنمای فریم‌ورک‌ها' },
    { t: 'p', text: 'Tailwind برای فریم‌ورک‌ها و ابزارهای محبوب راهنمای نصب مخصوص دارد. بیشتر آن‌ها یکی از دو روش «پلاگین Vite» یا «پلاگین PostCSS» را به‌کار می‌برند.' },
    { t: 'table', rows: [
      ['Laravel', 'پلاگین Vite'],
      ['Nuxt', 'پلاگین Vite'],
      ['SvelteKit', 'پلاگین Vite'],
      ['SolidJS', 'پلاگین Vite'],
      ['React Router', 'پلاگین Vite'],
      ['Astro', 'پلاگین Vite'],
      ['Qwik', 'پلاگین Vite'],
      ['Next.js', 'پلاگین PostCSS'],
      ['Angular', 'پلاگین PostCSS'],
      ['Parcel', 'پلاگین PostCSS'],
      ['Rspack', 'پلاگین PostCSS'],
    ] },
    { t: 'p', text: 'فریم‌ورک‌ها و ابزارهای دیگری هم در سایت اصلی راهنما دارند، از جمله Ruby on Rails، Phoenix، Symfony، Meteor، AdonisJS و Ember.js. اگر فریم‌ورکت در هیچ‌کدام نبود، از Tailwind CLI، پلاگین Vite یا پلاگین PostCSS استفاده کن.' },

    { t: 'h3', text: 'مثال: Next.js' },
    { t: 'p', text: 'Next.js از PostCSS استفاده می‌کند، پس پکیج مخصوص PostCSS لازم است:' },
    { t: 'code', text: 'npx create-next-app@latest my-project\ncd my-project\nnpm install tailwindcss @tailwindcss/postcss postcss', file: 'ترمینال' },
    { t: 'code', text: 'const config = {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n}\nexport default config', file: 'postcss.config.mjs' },
    { t: 'code', text: '@import "tailwindcss";', file: 'app/globals.css' },

    /* ---- Play CDN ---- */
    { t: 'h2', text: 'استفاده از Play CDN' },
    { t: 'p', text: 'با Play CDN می‌توانی Tailwind را مستقیم داخل مرورگر و بدون هیچ مرحله‌ی build امتحان کنی. Play CDN فقط برای توسعه و آزمایش طراحی شده و برای محیط production مناسب نیست.' },
    { t: 'step', n: 1, title: 'افزودن اسکریپت Play CDN', text: 'تگ اسکریپت Play CDN را به `<head>` فایل HTML اضافه کن و بلافاصله از کلاس‌های utility استفاده کن.', code: '<!doctype html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>\n  </head>\n  <body>\n    <h1 class="text-3xl font-bold underline">\n      Hello world!\n    </h1>\n  </body>\n</html>', file: 'index.html' },
    { t: 'step', n: 2, title: 'اضافه کردن CSS سفارشی', text: 'با `type="text/tailwindcss"` می‌توانی CSS سفارشی بنویسی که از همه‌ی قابلیت‌های CSS در Tailwind پشتیبانی می‌کند. این پروژه‌ای که الان می‌بینی هم از همین روش استفاده می‌کند.', code: '<!doctype html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>\n    <style type="text/tailwindcss">\n      @theme {\n        --color-clifford: #da373d;\n      }\n    </style>\n  </head>\n  <body>\n    <h1 class="text-3xl font-bold underline text-clifford">\n      Hello world!\n    </h1>\n  </body>\n</html>', file: 'index.html' },
  ],
}

/* ======================= تنظیم ادیتور ======================= */
C['editor-setup'] = {
  heading: 'تنظیم ادیتور',
  lead: 'ابزارهایی برای بهتر شدن تجربه‌ی کار با Tailwind CSS.',
  blocks: [
    { t: 'h2', text: 'پشتیبانی از سینتکس' },
    { t: 'p', text: 'Tailwind از سینتکس‌های CSS سفارشی مثل `@theme`، `@variant` و `@source` استفاده می‌کند. بعضی ادیتورها این قوانین را نمی‌شناسند و هشدار یا خطا نشان می‌دهند.' },
    { t: 'p', text: 'اگر از VS Code استفاده می‌کنی، افزونه‌ی رسمی Tailwind CSS IntelliSense یک حالت زبانی اختصاصی دارد که همه‌ی at-rule ها و توابع Tailwind را می‌شناسد.' },
    { t: 'p', text: 'گاهی اگر ادیتورت خیلی سخت‌گیر باشد، لازم است اعتبارسنجی و lint پیش‌فرض CSS را خاموش کنی.' },

    { t: 'h2', text: 'IntelliSense برای VS Code' },
    { t: 'p', text: 'افزونه‌ی رسمی Tailwind CSS IntelliSense تجربه‌ی کار با Tailwind را در Visual Studio Code بهتر می‌کند. قابلیت‌های اصلی‌اش:' },
    { t: 'table', rows: [
      ['Autocomplete', 'پیشنهاد هوشمند کلاس‌های utility، توابع و دستورهای CSS'],
      ['Linting', 'نمایش خطا و هشدار برای تداخل کلاس‌ها و سینتکس اشتباه'],
      ['Hover Previews', 'نمایش CSS کامل هر کلاس با رفتن موس روی آن'],
      ['Syntax Highlighting', 'رنگ‌بندی درست سینتکس‌های اختصاصی Tailwind'],
    ] },
    { t: 'p', text: 'افزونه را از بخش Extensions در VS Code با نام `Tailwind CSS IntelliSense` (ناشر: Tailwind Labs) نصب کن.' },

    { t: 'h2', text: 'مرتب‌سازی کلاس‌ها با Prettier' },
    { t: 'p', text: 'یک پلاگین رسمی Prettier برای Tailwind وجود دارد که کلاس‌ها را طبق ترتیب پیشنهادی Tailwind خودکار مرتب می‌کند. با تنظیمات سفارشی Tailwind هم کار می‌کند و چون فقط یک پلاگین Prettier است، در هر ادیتور و IDE و حتی خط فرمان قابل استفاده است.' },
    { t: 'code', text: 'npm install -D prettier prettier-plugin-tailwindcss', file: 'ترمینال' },
    { t: 'code', text: '{\n  "plugins": ["prettier-plugin-tailwindcss"]\n}', file: '.prettierrc' },
    { t: 'p', text: 'نتیجه به این شکل است:' },
    { t: 'code', text: '<!-- قبل -->\n<button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">...</button>\n\n<!-- بعد -->\n<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>', file: 'HTML' },
  ],
}

/* ======================= سازگاری ======================= */
C['compatibility'] = {
  heading: 'سازگاری',
  lead: 'پشتیبانی مرورگرها و سازگاری با ابزارهای دیگر.',
  blocks: [
    { t: 'h2', text: 'پشتیبانی مرورگرها' },
    { t: 'p', text: 'Tailwind CSS نسخه‌ی ۴ برای مرورگرهای مدرن طراحی و تست شده و قابلیت‌های اصلی‌اش به حداقل نسخه‌های زیر وابسته است:' },
    { t: 'table', rows: [
      ['Chrome', '111 و بالاتر (منتشرشده در مارس ۲۰۲۳)'],
      ['Safari', '16.4 و بالاتر (منتشرشده در مارس ۲۰۲۳)'],
      ['Firefox', '128 و بالاتر (منتشرشده در جولای ۲۰۲۴)'],
    ] },
    { t: 'p', text: 'Tailwind از چند قابلیت بسیار جدید پلتفرم هم پشتیبانی می‌کند که در همه‌ی مرورگرها کار نمی‌کنند، مثل `field-sizing: content`، `@starting-style` و `text-wrap: balance`. اگر درباره‌ی پشتیبانی یک قابلیت مطمئن نیستی، سایت Can I use منبع خوبی است.' },
    { t: 'note', text: 'اگر باید مرورگرهای قدیمی‌تر از این نسخه‌ها را پشتیبانی کنی، Tailwind نسخه‌ی ۴ مناسب پروژه‌ات نیست و باید از نسخه‌ی ۳ استفاده کنی.' },

    { t: 'h2', text: 'Sass، Less و Stylus' },
    { t: 'p', text: 'Tailwind CSS نسخه‌ی ۴ یک ابزار کامل build برای CSS است که برای یک روند کاری مشخص طراحی شده و قرار نیست همراه پیش‌پردازنده‌هایی مثل Sass، Less یا Stylus استفاده شود.' },
    { t: 'p', text: 'خود Tailwind را پیش‌پردازنده‌ی خودت در نظر بگیر. به همان دلیلی که Sass را همراه Stylus استفاده نمی‌کنی، Tailwind را هم همراه Sass استفاده نکن.' },

    { t: 'h3', text: 'ایمپورت فایل‌ها' },
    { t: 'p', text: 'نیازی به ابزار جداگانه برای ترکیب فایل‌های CSS نیست. در این مثال، فایل `typography.css` توسط خود Tailwind داخل CSS نهایی قرار می‌گیرد، بدون Sass یا postcss-import:' },
    { t: 'code', text: '@import "tailwindcss";\n@import "./typography.css";', file: 'CSS' },

    { t: 'h3', text: 'متغیرها' },
    { t: 'p', text: 'همه‌ی مرورگرهای مدرن از متغیرهای CSS بومی پشتیبانی می‌کنند و برای استفاده از آن‌ها پیش‌پردازنده لازم نیست.' },

    { t: 'h3', text: 'Nesting' },
    { t: 'p', text: 'پشتیبانی مرورگرها از nesting بومی CSS هم امروز خیلی خوب است، پس حتی بدون Tailwind هم برای تو دلیلی برای استفاده از پیش‌پردازنده جهت nesting نیست.' },

    { t: 'h3', text: 'توابع رنگ' },
    { t: 'p', text: 'در Sass یا Less احتمالاً از توابعی مثل `darken` و `lighten` برای تغییر رنگ استفاده می‌کردی. حالا می‌توانی همین کار را با قابلیت مدرن `color-mix()` مستقیم داخل مرورگر و در زمان اجرا انجام بدهی.' },
  ],
}

/* ======================= راهنمای ارتقا ======================= */
C['upgrade-guide'] = {
  heading: 'راهنمای ارتقا',
  lead: 'ارتقای پروژه‌های Tailwind CSS از نسخه‌ی ۳ به ۴. این صفحه مراحل اصلی را خلاصه می‌کند.',
  blocks: [
    { t: 'h2', text: 'استفاده از ابزار ارتقا' },
    { t: 'p', text: 'برای ارتقای پروژه از نسخه‌ی ۳ به ۴ می‌توانی از ابزار رسمی ارتقا استفاده کنی. این ابزار بیشتر کار سنگین را خودش انجام می‌دهد:' },
    { t: 'code', text: 'npx @tailwindcss/upgrade', file: 'ترمینال' },
    { t: 'p', text: 'این ابزار به Node.js نسخه‌ی ۲۰ یا بالاتر نیاز دارد، پس قبل از اجرا مطمئن شو محیطت به‌روز است. بهتر است ابزار را روی یک branch جدا اجرا کنی و تغییرات را در diff با دقت بررسی کنی.' },

    { t: 'h2', text: 'تغییر در ابزارها' },
    { t: 'h3', text: 'پلاگین PostCSS' },
    { t: 'p', text: 'در نسخه‌ی ۳، پکیج `tailwindcss` خودش پلاگین PostCSS بود. در نسخه‌ی ۴ پلاگین PostCSS در پکیج جداگانه‌ی `@tailwindcss/postcss` است. همچنین `postcss-import` و `autoprefixer` دیگر لازم نیستند، چون Tailwind خودش آن‌ها را مدیریت می‌کند.' },
    { t: 'code', text: 'export default {\n  plugins: {\n    "@tailwindcss/postcss": {},\n  },\n};', file: 'postcss.config.mjs' },
    { t: 'h3', text: 'استفاده با Vite' },
    { t: 'p', text: 'اگر از Vite استفاده می‌کنی، پلاگین اختصاصی `@tailwindcss/vite` را به‌جای PostCSS به‌کار ببر. عملکرد بهتری دارد:' },
    { t: 'code', text: "import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [tailwindcss()],\n})", file: 'vite.config.ts' },
    { t: 'h3', text: 'Tailwind CLI' },
    { t: 'p', text: 'در نسخه‌ی ۴ ابزار CLI در پکیج جداگانه‌ی `@tailwindcss/cli` قرار دارد. دستورهای build را به‌روز کن:' },
    { t: 'code', text: '# قبل\nnpx tailwindcss -i input.css -o output.css\n\n# بعد\nnpx @tailwindcss/cli -i input.css -o output.css', file: 'ترمینال' },

    { t: 'h2', text: 'تغییر در CSS' },
    { t: 'h3', text: 'حذف دستورهای @tailwind' },
    { t: 'p', text: 'در نسخه‌ی ۴ به‌جای سه دستور `@tailwind` فقط یک ایمپورت معمولی CSS لازم است:' },
    { t: 'code', text: '/* قبل */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* بعد */\n@import "tailwindcss";', file: 'CSS' },

    { t: 'h3', text: 'ساخت utility سفارشی' },
    { t: 'p', text: 'در نسخه‌ی ۳ utility های سفارشی داخل `@layer utilities` تعریف می‌شدند. در نسخه‌ی ۴ باید از `@utility` استفاده کنی تا variant هایی مثل `hover:` و `lg:` روی آن‌ها کار کنند. این بخش را ابزار ارتقا خودکار تبدیل نمی‌کند و دستی باید ویرایش شود.' },
    { t: 'code', text: '/* قبل */\n@layer utilities {\n  .tab-4 {\n    tab-size: 4;\n  }\n}\n\n/* بعد */\n@utility tab-4 {\n  tab-size: 4;\n}', file: 'CSS' },

    { t: 'h2', text: 'حذف utility های منسوخ' },
    { t: 'p', text: 'utility هایی که در نسخه‌ی ۳ منسوخ شده بودند و سال‌ها بدون مستندات مانده بودند، در نسخه‌ی ۴ حذف شدند. جایگزین آن‌ها:' },
    { t: 'table', rows: [
      ['bg-opacity-*', 'از مقدار شفافیت در خود رنگ استفاده کن، مثل bg-black/50'],
      ['text-opacity-*', 'text-black/50'],
      ['border-opacity-*', 'border-black/50'],
      ['divide-opacity-*', 'divide-black/50'],
      ['ring-opacity-*', 'ring-black/50'],
      ['placeholder-opacity-*', 'placeholder-black/50'],
      ['flex-shrink-*', 'shrink-*'],
      ['flex-grow-*', 'grow-*'],
      ['overflow-ellipsis', 'text-ellipsis'],
      ['decoration-slice', 'box-decoration-slice'],
      ['decoration-clone', 'box-decoration-clone'],
    ] },

    { t: 'h2', text: 'تغییر نام utility ها' },
    { t: 'p', text: 'برای قابل‌پیش‌بینی‌تر شدن نام‌ها، این utility ها در نسخه‌ی ۴ تغییر نام دادند. دقت کن که مقیاس‌ها یک پله جابه‌جا شده‌اند. مثلاً `shadow-sm` قدیمی حالا `shadow-xs` است و `shadow` قدیمی حالا `shadow-sm` شده:' },
    { t: 'table', rows: [
      ['shadow-sm', 'shadow-xs'],
      ['shadow', 'shadow-sm'],
      ['drop-shadow-sm', 'drop-shadow-xs'],
      ['drop-shadow', 'drop-shadow-sm'],
      ['blur-sm', 'blur-xs'],
      ['blur', 'blur-sm'],
      ['backdrop-blur-sm', 'backdrop-blur-xs'],
      ['backdrop-blur', 'backdrop-blur-sm'],
      ['rounded-sm', 'rounded-xs'],
      ['rounded', 'rounded-sm'],
      ['outline-none', 'outline-hidden'],
      ['ring', 'ring-3'],
    ] },
    { t: 'note', text: 'نکته‌ی `outline-none`: در نسخه‌ی ۴ کلاس `outline-none` واقعاً `outline-style: none` می‌گذارد. کلاس قبلی که outline را برای کاربران عادی پنهان ولی در حالت high contrast نگه می‌داشت، حالا `outline-hidden` نام دارد.' },

    { t: 'h2', text: 'تغییر مقدارهای پیش‌فرض' },
    { t: 'table', rows: [
      ['رنگ border', 'قبلاً gray-200 بود، حالا currentColor است. رنگ را صریح بنویس، مثل border-gray-200'],
      ['عرض ring', 'قبلاً ۳ پیکسل بود، حالا ۱ پیکسل است. برای رفتار قبلی ring-3 بنویس'],
      ['رنگ ring', 'قبلاً blue-500 بود، حالا currentColor است. رنگ را صریح بنویس، مثل ring-blue-500'],
    ] },

    { t: 'h2', text: 'تغییرات دیگر' },
    { t: 'h3', text: 'ترتیب پشته‌ی variant ها' },
    { t: 'p', text: 'در نسخه‌ی ۳ وقتی چند variant را پشت سر هم می‌نوشتی، از راست به چپ اعمال می‌شدند. در نسخه‌ی ۴ از چپ به راست اعمال می‌شوند، شبیه خواندن CSS:' },
    { t: 'code', text: '<!-- قبل -->\n<ul class="py-4 first:*:pt-0 last:*:pb-0">\n\n<!-- بعد -->\n<ul class="py-4 *:first:pt-0 *:last:pb-0">', file: 'HTML' },

    { t: 'h3', text: 'پیشوند (prefix)' },
    { t: 'p', text: 'در نسخه‌ی ۴ پیشوند شبیه یک variant نوشته می‌شود و اول کلاس می‌آید:' },
    { t: 'code', text: '<!-- قبل -->\n<div class="tw-flex tw-bg-red-500">\n\n<!-- بعد -->\n<div class="tw:flex tw:bg-red-500">', file: 'HTML' },

    { t: 'h3', text: 'سینتکس متغیر CSS' },
    { t: 'p', text: 'برای استفاده از متغیر CSS در مقدار دلخواه، به‌جای براکت از پرانتز استفاده می‌شود:' },
    { t: 'code', text: '<!-- قبل -->\n<div class="bg-[--brand-color]"></div>\n\n<!-- بعد -->\n<div class="bg-(--brand-color)"></div>', file: 'HTML' },

    { t: 'h3', text: 'فایل تنظیمات جاوااسکریپت' },
    { t: 'p', text: 'در نسخه‌ی ۴ تنظیمات به‌صورت CSS-first انجام می‌شود (با `@theme` در CSS) و فایل `tailwind.config.js` دیگر خودکار شناسایی نمی‌شود. اگر هنوز به آن نیاز داری، با دستور `@config` آن را صریح لود کن:' },
    { t: 'code', text: '@import "tailwindcss";\n@config "../../tailwind.config.js";', file: 'CSS' },

    { t: 'note', text: 'این صفحه خلاصه‌ی مهم‌ترین تغییرهاست. برای فهرست کامل و جزئیات هر مورد (مثل رفتار hover در دستگاه‌های لمسی، تغییر selector در space-x و space-y، و پیکربندی container) راهنمای ارتقای رسمی را در tailwindcss.com/docs/upgrade-guide ببین.' },
  ],
}
