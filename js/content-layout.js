// گروه Layout — هر صفحه با window.CONTENT['slug'] = {...} اضافه می‌شود.
var C = window.CONTENT

var box = 'rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500'

C['aspect-ratio'] = {
  heading: 'aspect-ratio',
  lead: 'کلاس‌هایی برای کنترل نسبت عرض به ارتفاع (aspect ratio) یک عنصر.',
  blocks: [
    { t: 'table', rows: [
      ['aspect-<ratio>', 'aspect-ratio: <ratio>;'],
      ['aspect-square', 'aspect-ratio: 1 / 1;'],
      ['aspect-video', 'aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */'],
      ['aspect-auto', 'aspect-ratio: auto;'],
      ['aspect-(<custom-property>)', 'aspect-ratio: var(<custom-property>);'],
      ['aspect-[<value>]', 'aspect-ratio: <value>;'],
    ] },

    { t: 'h2', text: 'مثال‌ها' },
    { t: 'h3', text: 'استفاده از یک نسبت مشخص' },
    { t: 'p', text: 'با کلاس‌هایی مثل `aspect-3/2` می‌توانی نسبت دلخواه را مستقیم بنویسی. عدد اول عرض و عدد دوم ارتفاع است.' },
    { t: 'demo', html: '<div class="aspect-3/2 w-64 ' + box + '"></div>', code: '<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />' },

    { t: 'h3', text: 'استفاده از نسبت نام‌دار' },
    { t: 'p', text: 'Tailwind چند نسبت پرکاربرد را با اسم ارائه می‌دهد. مثلاً `aspect-video` نسبت `16 / 9` می‌دهد و برای ویدیو و iframe مناسب است.' },
    { t: 'demo', html: '<div class="aspect-video w-64 ' + box + '"></div>', code: '<iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>' },

    { t: 'h3', text: 'استفاده از مقدار دلخواه' },
    { t: 'p', text: 'با ساختار `aspect-[<value>]` هر مقدار دلخواهی را بنویس:' },
    { t: 'code', text: '<img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />', file: 'HTML' },
    { t: 'p', text: 'برای متغیرهای CSS می‌توانی از `aspect-(<custom-property>)` استفاده کنی. این فقط میان‌بر `aspect-[var(<custom-property>)]` است و تابع `var()` را خودش اضافه می‌کند:' },
    { t: 'code', text: '<img class="aspect-(--my-aspect-ratio) ..." src="/img/villas.jpg" />', file: 'HTML' },

    { t: 'h3', text: 'ریسپانسیو' },
    { t: 'p', text: 'جلوی هر کلاس aspect-ratio یک پیشوند breakpoint مثل `md:` بگذار تا فقط از اندازه‌ی صفحه‌ی متوسط به بالا اعمال شود. در این مثال، صفحه‌ی کوچک `16 / 9` و از `md` به بعد مربع می‌شود:' },
    { t: 'demo', html: '<div class="aspect-video w-64 md:aspect-square ' + box + '"></div>', code: '<iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>' },

    { t: 'h2', text: 'سفارشی‌سازی تم' },
    { t: 'p', text: 'با متغیرهای `--aspect-*` در `@theme` می‌توانی کلاس‌های aspect-ratio خودت را بسازی:' },
    { t: 'code', text: '@theme {\n  --aspect-retro: 4 / 3;\n}', file: 'CSS' },
    { t: 'p', text: 'حالا کلاس `aspect-retro` در HTML قابل استفاده است:' },
    { t: 'code', text: '<iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>', file: 'HTML' },
  ],
}
