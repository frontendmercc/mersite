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
