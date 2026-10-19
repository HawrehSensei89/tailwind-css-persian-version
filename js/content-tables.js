// Tables — ۴ صفحه
var C = window.CONTENT
var demo = function (html, code) { return { t: 'demo', html: html, code: code } }
var tbl = function (rows) { return { t: 'table', rows: rows } }
var rep = function (cls) {
  return { t: 'p', text: 'همه‌ی این کلاس‌ها با پیشوندهای حالت و breakpoint ترکیب می‌شوند، مثل `hover:' + cls + '` یا `md:' + cls + '`.' }
}
var arb = function (p, css) {
  return [[p + '-(<custom-property>)', css + ': var(<custom-property>);'], [p + '-[<value>]', css + ': <value>;']]
}
var tableHtml = function (cls, extra) {
  return '<table class="w-full text-sm ' + cls + '">' + (extra || '') + '<thead><tr><th class="border border-slate-400 p-2">Song</th><th class="border border-slate-400 p-2">Artist</th></tr></thead><tbody><tr><td class="border border-slate-300 p-2">The Sliding Mr. Bones</td><td class="border border-slate-300 p-2">Malcolm Lockyer</td></tr><tr><td class="border border-slate-300 p-2">Witchy Woman</td><td class="border border-slate-300 p-2">The Eagles</td></tr></tbody></table>'
}

C['border-collapse'] = {
  heading: 'border-collapse',
  lead: 'کلاس‌هایی برای تعیین اینکه border سلول‌های جدول با هم ادغام شوند یا نه.',
  blocks: [
    tbl([
      ['border-collapse', 'border-collapse: collapse;'],
      ['border-separate', 'border-collapse: separate;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`border-collapse` border های مجاور را به یکی تبدیل می‌کند و ظاهر تمیزتر می‌دهد. `border-separate` (پیش‌فرض مرورگر) هر سلول را border جدا می‌دهد و با `border-spacing` فاصله‌اش را می‌توانی کنترل کنی:' },
    demo(tableHtml('border-collapse'), '<table class="border-collapse border border-gray-400 ...">\n  <thead>\n    <tr>\n      <th class="border border-gray-300 ...">State</th>\n      <th class="border border-gray-300 ...">City</th>\n    </tr>\n  </thead>\n  <!-- ... -->\n</table>'),
    demo(tableHtml('border-separate'), '<table class="border-separate border border-gray-400 ...">...</table>'),
    { t: 'note', text: '`border-radius` روی سلول‌ها فقط با `border-separate` کار می‌کند، چون در حالت `collapse` گوشه‌ها گرد نمی‌شوند.' },
    rep('border-collapse'),
  ],
}

C['border-spacing'] = {
  heading: 'border-spacing',
  lead: 'کلاس‌هایی برای تعیین فاصله‌ی بین border های سلول‌های جدول (فقط با `border-separate`).',
  blocks: [
    tbl([
      ['border-spacing-<number>', 'border-spacing: calc(var(--spacing) * <number>);'],
      ['border-spacing-x-<number>', 'border-spacing: calc(var(--spacing) * <number>) var(--tw-border-spacing-y);'],
      ['border-spacing-y-<number>', 'border-spacing: var(--tw-border-spacing-x) calc(var(--spacing) * <number>);'],
    ].concat(arb('border-spacing', 'border-spacing'))),
    { t: 'h2', text: 'مثال' },
    demo(tableHtml('border-separate border-spacing-2'), '<table class="border-separate border-spacing-2 border border-gray-400 ...">\n  <!-- ... -->\n</table>'),
    { t: 'p', text: 'با `border-spacing-x-*` و `border-spacing-y-*` فاصله‌ی افقی و عمودی را جدا می‌دهی. حتماً همراه `border-separate` بنویس، وگرنه اثری ندارد.' },
    rep('border-spacing-2'),
  ],
}

C['table-layout'] = {
  heading: 'table-layout',
  lead: 'کلاس‌هایی برای تعیین الگوریتم چینش سلول‌ها، ستون‌ها و ردیف‌های جدول.',
  blocks: [
    tbl([
      ['table-auto', 'table-layout: auto;'],
      ['table-fixed', 'table-layout: fixed;'],
    ]),
    { t: 'h2', text: 'مثال‌ها' },
    { t: 'p', text: '`table-auto` (پیش‌فرض) عرض ستون‌ها را بر اساس محتوایشان تعیین می‌کند. `table-fixed` فقط به عرض‌های تعریف‌شده در ردیف اول توجه می‌کند (سریع‌تر رندر می‌شود) و محتوا بقیه‌ی ردیف‌ها را تغییر نمی‌دهد. با `w-full` و عرض ستون‌ها قابل‌پیش‌بینی‌تر است:' },
    demo('<table class="w-full table-fixed text-sm"><thead><tr><th class="w-1/2 border border-slate-400 p-2">Song</th><th class="w-1/4 border border-slate-400 p-2">Artist</th><th class="w-1/4 border border-slate-400 p-2">Year</th></tr></thead><tbody><tr><td class="border border-slate-300 p-2">The Sliding Mr. Bones</td><td class="border border-slate-300 p-2">Lockyer</td><td class="border border-slate-300 p-2">1961</td></tr></tbody></table>', '<table class="table-fixed ...">\n  <thead>\n    <tr>\n      <th class="w-1/2 ...">Song</th>\n      <th class="w-1/4 ...">Artist</th>\n      <th class="w-1/4 ...">Year</th>\n    </tr>\n  </thead>\n  <!-- ... -->\n</table>'),
    rep('table-fixed'),
  ],
}

C['caption-side'] = {
  heading: 'caption-side',
  lead: 'کلاس‌هایی برای تعیین جای عنوان جدول (`<caption>`) نسبت به جدول.',
  blocks: [
    tbl([
      ['caption-top', 'caption-side: top;'],
      ['caption-bottom', 'caption-side: bottom;'],
    ]),
    { t: 'h2', text: 'مثال' },
    demo('<table class="w-full border-collapse text-sm"><caption class="caption-bottom p-2 text-slate-500">Table 3.1: Professional wrestlers and their signature moves.</caption><thead><tr><th class="border border-slate-400 p-2">Wrestler</th><th class="border border-slate-400 p-2">Signature Move</th></tr></thead><tbody><tr><td class="border border-slate-300 p-2">Steve Austin</td><td class="border border-slate-300 p-2">Stone Cold Stunner</td></tr></tbody></table>', '<table>\n  <caption class="caption-top">\n    Table 3.1: Professional wrestlers and their signature moves.\n  </caption>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>'),
    rep('caption-bottom'),
  ],
}
