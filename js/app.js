(function () {
  var NAV = window.NAV, FLAT = window.FLAT, CONTENT = window.CONTENT
  var $ = function (id) { return document.getElementById(id) }
  var isLatin = function (s) { return /^[a-zA-Z]/.test(s) }
  var inline = function (s) {
    return esc(s).replace(/`([^`]+)`/g, '<code class="code-ltr mx-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em] text-slate-800 dark:bg-slate-800 dark:text-slate-200">$1</code>')
  }
  var esc = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  /* ---------- سایدبار ---------- */
  function renderSidebar(current) {
    var html = '<nav class="space-y-7 pb-10 text-sm">'
    NAV.forEach(function (sec) {
      html += '<div><h3 class="mb-2 font-semibold text-slate-900 dark:text-white">' + esc(sec.title) + '</h3>'
      html += '<ul class="border-s border-slate-200 dark:border-slate-800">'
      sec.pages.forEach(function (p) {
        var active = p[0] === current
        var cls = '-ms-px block border-s py-1 ' + (p[2] ? 'ps-7 ' : 'ps-4 ') +
          (active ? 'border-sky-500 font-medium text-sky-600 dark:text-sky-400'
                  : 'border-transparent hover:border-slate-400 hover:text-slate-900 dark:hover:text-white') +
          (isLatin(p[1]) ? ' code-ltr' : '')
        html += '<li><a href="#/docs/' + p[0] + '" class="' + cls + '">' + esc(p[1]) + '</a></li>'
      })
      html += '</ul></div>'
    })
    $('sidebar').innerHTML = html + '</nav>'
    var a = $('sidebar').querySelector('.text-sky-600')
    if (a && a.scrollIntoView) a.scrollIntoView({ block: 'nearest' })
  }

  /* ---------- بلوک‌های محتوا ---------- */
  function codeBlock(text, file) {
    return '<div class="code-ltr my-5 overflow-hidden rounded-xl bg-slate-900 text-slate-100 ring-1 ring-slate-800">' +
      (file ? '<div class="border-b border-slate-700 px-4 py-2 text-xs text-slate-400">' + esc(file) + '</div>' : '') +
      '<pre class="overflow-auto p-4 text-sm leading-6"><code>' + esc(text) + '</code></pre></div>'
  }
  var h2n = 0
  function block(b) {
    var h = 'text-slate-900 dark:text-white'
    if (b.t === 'h2') return '<h2 id="s' + (h2n++) + '" class="mb-3 mt-12 text-2xl font-semibold ' + h + '">' + esc(b.text) + '</h2>'
    if (b.t === 'h3') return '<h3 class="mb-2 mt-8 text-lg font-semibold ' + h + '">' + esc(b.text) + '</h3>'
    if (b.t === 'p') return '<p class="my-4 leading-8">' + inline(b.text) + '</p>'
    if (b.t === 'code') return codeBlock(b.text, b.file)
    if (b.t === 'note') return '<div class="my-6 rounded-xl bg-sky-50 p-4 leading-8 text-sky-900 dark:bg-sky-950/50 dark:text-sky-200">' + inline(b.text) + '</div>'
    if (b.t === 'table') {
      var rows = b.rows.map(function (r) {
        return '<tr class="border-t border-slate-200 dark:border-slate-800"><td class="code-ltr whitespace-nowrap px-4 py-2.5 font-mono text-[0.8rem] text-sky-700 dark:text-sky-300">' + esc(r[0]) +
          '</td><td class="code-ltr px-4 py-2.5 font-mono text-[0.8rem]">' + esc(r[1]) + '</td></tr>'
      }).join('')
      return '<div class="my-6 overflow-auto rounded-xl ring-1 ring-slate-200 dark:ring-slate-800"><table class="w-full text-start">' +
        '<thead class="bg-slate-50 text-xs dark:bg-slate-900"><tr><th class="px-4 py-2 text-start font-semibold">کلاس</th><th class="px-4 py-2 text-start font-semibold">استایل</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>'
    }
    if (b.t === 'demo') {
      return '<div class="my-6 overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-800">' +
        '<div class="code-ltr bg-slate-50 p-6 dark:bg-slate-900/60">' + b.html + '</div>' +
        '<div class="code-ltr bg-slate-900 text-slate-100"><pre class="overflow-auto p-4 text-sm leading-6"><code>' + esc(b.code || b.html) + '</code></pre></div></div>'
    }
    if (b.t === 'step') {
      return '<div class="my-8"><h3 class="mb-2 flex items-center gap-3 text-lg font-semibold ' + h + '">' +
        '<span class="flex size-7 items-center justify-center rounded-full bg-sky-100 text-sm text-sky-700 dark:bg-sky-950 dark:text-sky-300">' + b.n + '</span>' +
        esc(b.title) + '</h3><p class="leading-8">' + inline(b.text) + '</p>' +
        (b.code ? codeBlock(b.code, b.file) : '') + '</div>'
    }
    return ''
  }

  /* ---------- صفحه ---------- */
  function renderPage(slug) {
    var i = FLAT.findIndex(function (p) { return p.slug === slug })
    if (i < 0) { location.hash = '#/docs/installation'; return }
    var page = FLAT[i], doc = CONTENT[slug]
    var prev = FLAT[i - 1], next = FLAT[i + 1]
    var h = 'text-slate-900 dark:text-white'

    var html = '<article class="max-w-3xl">' +
      '<p class="mb-2 text-sm font-medium text-sky-600 dark:text-sky-400">' + esc(page.section) + '</p>' +
      '<h1 class="text-3xl font-bold ' + h + (isLatin(page.title) ? ' code-ltr' : '') + '">' + esc(doc && doc.heading || page.title) + '</h1>'
    if (doc && doc.lead) html += '<p class="mt-4 text-lg leading-8">' + inline(doc.lead) + '</p>'
    h2n = 0
    if (doc) {
      var heads = doc.blocks.filter(function (b) { return b.t === 'h2' })
      if (heads.length > 2) {
        html += '<nav class="mt-6 rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-900"><p class="mb-2 font-semibold text-slate-900 dark:text-white">در این صفحه</p><ul class="space-y-1">' +
          heads.map(function (b, k) { return '<li><a href="#s' + k + '" data-jump="s' + k + '" class="hover:text-sky-600">' + esc(b.text) + '</a></li>' }).join('') + '</ul></nav>'
      }
      doc.blocks.forEach(function (b) { html += block(b) })
    } else {
      html += '<div class="mt-10 rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">' +
        '<p class="text-slate-500">محتوای این صفحه هنوز نوشته نشده.</p>' +
        '<p class="mt-2 text-sm text-slate-500">فایل <code class="code-ltr inline-block rounded bg-slate-100 px-1.5 dark:bg-slate-800">js/content.js</code> را ویرایش کن و کلید <code class="code-ltr inline-block rounded bg-slate-100 px-1.5 dark:bg-slate-800">' + esc(slug) + '</code> را اضافه کن.</p></div>'
    }
    html += '<div class="mt-16 flex justify-between gap-4 border-t border-slate-200 pt-6 text-sm dark:border-slate-800">' +
      (prev ? '<a href="#/docs/' + prev.slug + '" class="hover:text-sky-600">‹ ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a href="#/docs/' + next.slug + '" class="hover:text-sky-600">' + esc(next.title) + ' ›</a>' : '<span></span>') +
      '</div></article>'

    $('main').innerHTML = html
    document.title = (doc && doc.heading || page.title) + ' - Tailwind CSS فارسی'
    renderSidebar(slug)
    window.scrollTo(0, 0)
    closeMenu()
  }

  function route() {
    var m = location.hash.match(/^#\/docs\/([\w-]+)/)
    renderPage(m ? m[1] : 'installation')
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-jump]')
    if (!a) return
    e.preventDefault()
    var el = document.getElementById(a.getAttribute('data-jump'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  })
  window.addEventListener('hashchange', route)

  /* ---------- منوی موبایل ---------- */
  var sb = $('sidebar')
  var openCls = ['fixed', 'inset-x-0', 'bottom-0', 'top-14', 'z-30', 'overflow-auto', 'bg-white', 'p-6', 'dark:bg-slate-950']
  function closeMenu() {
    sb.classList.add('hidden')
    openCls.forEach(function (c) { sb.classList.remove(c) })
  }
  $('menuBtn').addEventListener('click', function () {
    if (sb.classList.contains('hidden')) {
      sb.classList.remove('hidden')
      openCls.forEach(function (c) { sb.classList.add(c) })
    } else closeMenu()
  })

  /* ---------- تم ---------- */
  function syncTheme() {
    $('themeBtn').textContent = document.documentElement.classList.contains('dark') ? 'روشن' : 'تاریک'
  }
  $('themeBtn').addEventListener('click', function () {
    var dark = document.documentElement.classList.toggle('dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
    syncTheme()
  })
  syncTheme()

  /* ---------- جستجو ---------- */
  var results = [], idx = 0
  function drawResults() {
    var q = $('searchInput').value.trim().toLowerCase()
    results = q ? FLAT.filter(function (p) {
      return p.title.toLowerCase().indexOf(q) > -1 || p.slug.indexOf(q) > -1
    }).slice(0, 12) : FLAT.slice(0, 8)
    if (idx >= results.length) idx = 0
    $('searchList').innerHTML = results.length ? results.map(function (p, k) {
      return '<li><a href="#/docs/' + p.slug + '" class="flex items-center justify-between rounded-lg px-3 py-2 text-sm ' +
        (k === idx ? 'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300' : '') + '">' +
        '<span class="code-ltr">' + esc(p.title) + '</span><span class="text-xs text-slate-500">' + esc(p.section) + '</span></a></li>'
    }).join('') : '<li class="p-3 text-sm text-slate-500">نتیجه‌ای پیدا نشد.</li>'
  }
  function openSearch() {
    $('searchModal').classList.remove('hidden'); $('searchModal').classList.add('flex')
    $('searchInput').value = ''; idx = 0; drawResults(); $('searchInput').focus()
  }
  function closeSearch() {
    $('searchModal').classList.add('hidden'); $('searchModal').classList.remove('flex')
  }
  $('searchBtn').addEventListener('click', openSearch)
  $('searchModal').addEventListener('click', function (e) { if (e.target === this) closeSearch() })
  $('searchList').addEventListener('click', closeSearch)
  $('searchInput').addEventListener('input', function () { idx = 0; drawResults() })
  $('searchInput').addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); idx = Math.min(idx + 1, results.length - 1); drawResults() }
    else if (e.key === 'ArrowUp') { e.preventDefault(); idx = Math.max(idx - 1, 0); drawResults() }
    else if (e.key === 'Enter' && results[idx]) { location.hash = '#/docs/' + results[idx].slug; closeSearch() }
  })
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch() }
    if (e.key === 'Escape') closeSearch()
  })

  route()
})()
