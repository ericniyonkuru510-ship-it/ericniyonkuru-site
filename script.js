const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.insights": "Insights",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Collaborate",
    "brand.role": "EU–Africa Trade · Supply Chain"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.insights": "Analyses",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cta": "Collaborer",
    "brand.role": "Commerce UE–Afrique · Supply Chain"
  },
  nl: {
    "nav.home": "Start",
    "nav.about": "Over mij",
    "nav.insights": "Inzichten",
    "nav.projects": "Projecten",
    "nav.contact": "Contact",
    "nav.cta": "Samenwerken",
    "brand.role": "EU–Afrika handel · Supply chain"
  },
  sw: {
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.insights": "Uchambuzi",
    "nav.projects": "Miradi",
    "nav.contact": "Mawasiliano",
    "nav.cta": "Shirikiana",
    "brand.role": "Biashara EU–Afrika · Ugavi"
  }
};

function setLang(lang) {
  const dictionary = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  const translatableElements = document.querySelectorAll(".translate-only [data-i18n]");

translatableElements.forEach(el => {
  const key = el.getAttribute("data-i18n");
  el.textContent = translations[lang][key];
});

  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
}

document.querySelectorAll("[data-lang-option]").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.dataset.langOption);
  });
});

setLang(localStorage.getItem("language") || "en");
