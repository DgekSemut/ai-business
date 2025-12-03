const dictionary = {
    ru: {
        hero_title: "Автоматизируй бизнес с AI уже сегодня",
        hero_sub: "Боты, системы, интеграции и маркетинг под ключ",
        hero_btn: "Выбрать пакет",

        nav_services: "Услуги",
        nav_packages: "Пакеты",
        nav_about: "О нас",
        nav_faq: "FAQ",
        nav_contacts: "Контакты",

        packages_title: "Наши пакеты",
        p_btn: "Оставить заявку"
    },

    en: {
        hero_title: "Automate your business with AI today",
        hero_sub: "Bots, systems, integrations & marketing",
        hero_btn: "Choose package",

        nav_services: "Services",
        nav_packages: "Packages",
        nav_about: "About",
        nav_faq: "FAQ",
        nav_contacts: "Contacts",

        packages_title: "Our packages",
        p_btn: "Send request"
    }
};

function setLang(lang) {
    document.querySelectorAll("[data-text]").forEach(el => {
        el.textContent = dictionary[lang][el.dataset.text];
    });
}
