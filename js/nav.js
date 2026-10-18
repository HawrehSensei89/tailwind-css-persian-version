// ساختار سایدبار دقیقاً به ترتیب tailwindcss.com/docs (نسخه 4.x)
// هر آیتم: [slug, عنوان]. عنوان utility ها همان نام CSS انگلیسی است (مثل سایت اصلی).
const u = (list) => list.map((s) => [s, s])

window.NAV = [
  {
    title: 'شروع کار',
    pages: [
      ['installation', 'نصب'],
      ['editor-setup', 'تنظیم ادیتور'],
      ['compatibility', 'سازگاری'],
      ['upgrade-guide', 'راهنمای ارتقا'],
    ],
  },
  {
    title: 'مفاهیم اصلی',
    pages: [
      ['styling-with-utility-classes', 'استایل‌دهی با کلاس‌های utility'],
      ['hover-focus-and-other-states', 'حالت‌های hover، focus و غیره'],
      ['responsive-design', 'طراحی ریسپانسیو'],
      ['dark-mode', 'حالت تاریک'],
      ['theme', 'متغیرهای تم'],
      ['colors', 'رنگ‌ها'],
      ['adding-custom-styles', 'افزودن استایل سفارشی'],
      ['detecting-classes-in-source-files', 'تشخیص کلاس‌ها در فایل‌های سورس'],
      ['functions-and-directives', 'توابع و دستورها'],
    ],
  },
  { title: 'استایل‌های پایه', pages: [['preflight', 'Preflight']] },
  {
    title: 'Layout',
    pages: u([
      'aspect-ratio','columns','break-after','break-before','break-inside','box-decoration-break',
      'box-sizing','display','float','clear','isolation','object-fit','object-position','overflow',
      'overscroll-behavior','position','top-right-bottom-left','visibility','z-index',
    ]),
  },
  {
    title: 'Flexbox & Grid',
    pages: u([
      'flex-basis','flex-direction','flex-wrap','flex','flex-grow','flex-shrink','order',
      'grid-template-columns','grid-column','grid-template-rows','grid-row','grid-auto-flow',
      'grid-auto-columns','grid-auto-rows','gap','justify-content','justify-items','justify-self',
      'align-content','align-items','align-self','place-content','place-items','place-self',
    ]),
  },
  { title: 'Spacing', pages: u(['padding', 'margin']) },
  {
    title: 'Sizing',
    pages: u([
      'width','min-width','max-width','height','min-height','max-height','inline-size',
      'min-inline-size','max-inline-size','block-size','min-block-size','max-block-size',
    ]),
  },
  {
    title: 'Typography',
    pages: u([
      'font-family','font-size','font-smoothing','font-style','font-weight','font-stretch',
      'font-variant-numeric','font-feature-settings','letter-spacing','line-clamp','line-height',
      'list-style-image','list-style-position','list-style-type','text-align','color',
      'text-decoration-line','text-decoration-color','text-decoration-style',
      'text-decoration-thickness','text-underline-offset','text-transform','text-overflow',
      'text-wrap','text-indent','tab-size','vertical-align','white-space','word-break',
      'overflow-wrap','hyphens','content',
    ]),
  },
  {
    title: 'Backgrounds',
    pages: u([
      'background-attachment','background-clip','background-color','background-image',
      'background-origin','background-position','background-repeat','background-size',
    ]),
  },
  {
    title: 'Borders',
    pages: u([
      'border-radius','border-width','border-color','border-style','outline-width',
      'outline-color','outline-style','outline-offset',
    ]),
  },
  {
    title: 'Effects',
    pages: u([
      'box-shadow','text-shadow','opacity','mix-blend-mode','background-blend-mode','mask-clip',
      'mask-composite','mask-image','mask-mode','mask-origin','mask-position','mask-repeat',
      'mask-size','mask-type',
    ]),
  },
  {
    title: 'Filters',
    pages: [
      ['filter', 'filter'],
      ...['blur','brightness','contrast','drop-shadow','grayscale','hue-rotate','invert','saturate','sepia']
        .map((n) => [`filter-${n}`, n, 1]),
      ['backdrop-filter', 'backdrop-filter'],
      ...['blur','brightness','contrast','grayscale','hue-rotate','invert','opacity','saturate','sepia']
        .map((n) => [`backdrop-filter-${n}`, n, 1]),
    ],
  },
  {
    title: 'Tables',
    pages: u(['border-collapse', 'border-spacing', 'table-layout', 'caption-side']),
  },
  {
    title: 'Transitions & Animation',
    pages: u([
      'transition-property','transition-behavior','transition-duration',
      'transition-timing-function','transition-delay','animation',
    ]),
  },
  {
    title: 'Transforms',
    pages: u([
      'backface-visibility','perspective','perspective-origin','rotate','scale','skew','transform',
      'transform-origin','transform-style','translate','zoom',
    ]),
  },
  {
    title: 'Interactivity',
    pages: u([
      'accent-color','appearance','caret-color','color-scheme','cursor','field-sizing',
      'pointer-events','resize','scroll-behavior','scrollbar-color','scrollbar-width',
      'scrollbar-gutter','scroll-margin','scroll-padding','scroll-snap-align','scroll-snap-stop',
      'scroll-snap-type','touch-action','user-select','will-change',
    ]),
  },
  { title: 'SVG', pages: u(['fill', 'stroke', 'stroke-width']) },
  { title: 'Accessibility', pages: u(['forced-color-adjust']) },
]

window.FLAT = window.NAV.flatMap(function (s) {
  return s.pages.map(function (p) { return { slug: p[0], title: p[1], section: s.title } })
})
