const buttons = document.querySelectorAll("[data-lang-option]");
const mobileToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.insights": "Insights",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Work with me",
    "brand.name": "Eric Niyonkuru",
    "brand.role": "EU–Africa Trade · Supply Chain"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.insights": "Analyses",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cta": "Collaborer",
    "brand.name": "Eric Niyonkuru",
    "brand.role": "Commerce UE–Afrique · Supply Chain"
  },
  nl: {
    "nav.home": "Start",
    "nav.about": "Over mij",
    "nav.insights": "Inzichten",
    "nav.projects": "Projecten",
    "nav.contact": "Contact",
    "nav.cta": "Samenwerken",
    "brand.name": "Eric Niyonkuru",
    "brand.role": "EU–Afrika handel · Supply chain"
  },
  sw: {
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.insights": "Uchambuzi",
    "nav.projects": "Miradi",
    "nav.contact": "Mawasiliano",
    "nav.cta": "Fanya kazi nami",
    "brand.name": "Eric Niyonkuru",
    "brand.role": "Biashara EU–Afrika · Ugavi"
  }
};

function setLang(lang) {
  const dictionary = translations[lang] || translations.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dictionary[key]) el.textContent = dictionary[key];
  });

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langOption === lang);
  });

  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.langOption));
});

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

setLang(localStorage.getItem("language") || "en");
