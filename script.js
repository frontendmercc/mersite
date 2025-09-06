
function toggleTranslate() {
  if (!window.googleTranslateInitialized) {
    const gtScript = document.createElement('script');
    gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(gtScript);
    window.googleTranslateInitialized = true;
  } else {
    document.getElementById('google_translate_element').style.display = 'block';
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'es,pt,fr,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const options = {
    threshold: 0.2,
  };

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, options);

  reveals.forEach((el) => {
    revealOnScroll.observe(el);
  });
});
