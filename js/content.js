// محتوای هر صفحه اینجاست. کلید = slug صفحه (همان نام در آدرس).
// انواع بلوک: h2, h3, p, code, step, note
window.CONTENT = {
  installation: {
    heading: 'نصب و شروع کار با Tailwind CSS',
    lead: 'Tailwind همه‌ی فایل‌های HTML، کامپوننت‌های جاوااسکریپت و هر قالب دیگری را برای پیدا کردن نام کلاس‌ها اسکن می‌کند، استایل متناظر را می‌سازد و در یک فایل CSS ثابت می‌نویسد. سریع، انعطاف‌پذیر و بدون runtime است.',
    blocks: [
      { t: 'h2', text: 'نصب Tailwind به‌صورت پلاگین Vite' },
      { t: 'p', text: 'نصب به‌شکل پلاگین Vite ساده‌ترین راه برای استفاده در فریم‌ورک‌هایی مثل Laravel، SvelteKit، React Router، Nuxt و SolidJS است.' },
      { t: 'step', n: 1, title: 'ساخت پروژه', text: 'اگر هنوز پروژه‌ای نداری، با Create Vite یک پروژه‌ی جدید بساز.', code: 'npm create vite@latest my-project\ncd my-project', file: 'ترمینال' },
      { t: 'step', n: 2, title: 'نصب Tailwind CSS', text: 'پکیج‌های tailwindcss و @tailwindcss/vite را با npm نصب کن.', code: 'npm install tailwindcss @tailwindcss/vite', file: 'ترمینال' },
      { t: 'step', n: 3, title: 'تنظیم پلاگین Vite', text: 'پلاگین @tailwindcss/vite را به تنظیمات Vite اضافه کن.', code: "import { defineConfig } from 'vite'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [\n    tailwindcss(),\n  ],\n})", file: 'vite.config.ts' },
      { t: 'step', n: 4, title: 'ایمپورت Tailwind در CSS', text: 'در فایل CSS اصلی، Tailwind را با یک @import اضافه کن.', code: '@import "tailwindcss";', file: 'CSS' },
      { t: 'step', n: 5, title: 'اجرای پروژه', text: 'با npm run dev یا هر دستور دیگری که در package.json تعریف شده، پروژه را اجرا کن.', code: 'npm run dev', file: 'ترمینال' },
      { t: 'step', n: 6, title: 'استفاده در HTML', text: 'مطمئن شو فایل CSS در <head> لود شده (بعضی فریم‌ورک‌ها خودشان این کار را می‌کنند) و بعد کلاس‌های utility را روی عناصر بگذار.', code: '<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link href="/src/style.css" rel="stylesheet">\n</head>\n<body>\n  <h1 class="text-3xl font-bold underline">\n    Hello world!\n  </h1>\n</body>\n</html>', file: 'HTML' },
      { t: 'note', text: 'روش‌های دیگر نصب: PostCSS، Tailwind CLI، راهنمای فریم‌ورک‌ها و Play CDN. این بخش‌ها در مرحله‌های بعدی به همین صفحه اضافه می‌شوند.' },
    ],
  },
}
