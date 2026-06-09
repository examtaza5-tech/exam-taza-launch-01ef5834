(function () {
  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Language switch on single job posts
  document.querySelectorAll('[data-lang-switch]').forEach(function (sw) {
    var article = sw.closest('.article-card');
    if (!article) return;
    var en = article.querySelector('[data-lang-en]');
    var hi = article.querySelector('[data-lang-hi]');
    var titleEl = article.querySelector('.article-banner h1');
    sw.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        sw.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var lang = btn.getAttribute('data-lang');
        if (en) en.style.display = (lang === 'en') ? '' : 'none';
        if (hi) hi.style.display = (lang === 'hi') ? '' : 'none';
        if (titleEl) {
          var alt = titleEl.getAttribute('data-' + lang);
          if (alt) titleEl.textContent = alt;
        }
      });
    });
  });
})();
