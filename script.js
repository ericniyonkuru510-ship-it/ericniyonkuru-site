document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    localStorage.setItem("language", button.dataset.langOption);
  });
});

const savedLanguage = localStorage.getItem("language") || "en";

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  if (button.dataset.langOption === savedLanguage) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});
