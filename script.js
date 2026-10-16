/* IzuTech web: language switch (French first, English available) and contact form. */
(function () {
  "use strict";

  var EN = {
    "skip": "Skip to content",
    "navLabel": "Main navigation",
    "langAria": "Passer en français",
    "nav.offer": "Pricing",
    "nav.work": "Examples",
    "nav.method": "How it works",
    "nav.faq": "Questions",
    "nav.cta": "Get a quote",

    "hero.kicker": "Websites for tradespeople, shops and associations. Based in Pau, on site or remote.",
    "hero.title": "A clear website, online in a week.",
    "hero.lead": "Your customers look you up on their phone. I build a simple, fast website that shows what you do, where to find you and how to reach you. Fixed price of €490, no compulsory subscription.",
    "hero.cta": "Get a free quote",
    "hero.secondary": "See websites I’ve built",
    "hero.note": "Free quote, no commitment, within one working day.",

    "offer.title": "Pricing",
    "offer.lead": "A fixed price, known from the start. You only pay for the options you need.",
    "offer.main.t": "Essential website",
    "offer.main.d": "Everything you need to be found and contacted.",
    "offer.main.i1": "Up to 5 pages, or a single page with 5 sections",
    "offer.main.i2": "Easy to read and fast on phone, tablet and computer",
    "offer.main.i3": "Search basics: titles, descriptions, opening hours and address that Google can read",
    "offer.main.i4": "Contact form that sends requests to your email",
    "offer.main.i5": "Hosting included, no yearly fees",
    "offer.main.i6": "A short training session so you can edit text and photos yourself",
    "offer.once": "one-time price",
    "offer.optionsTitle": "Options",
    "offer.o1.t": "Bilingual version",
    "offer.o1.d": "The site in French and one other language.",
    "offer.o2.t": "Online payments",
    "offer.o2.d": "Memberships, registrations or small sales, by card.",
    "offer.o3.t": "Logo design",
    "offer.o3.d": "A simple logo, delivered in the formats you need.",
    "offer.o4.t": "Updates and support",
    "offer.o4.d": "I make your changes and keep an eye on your domain name renewal. No commitment.",
    "offer.perMonth": "€30 / month",
    "offer.domain": "The domain name (for example your-business.fr) is registered in your name. It usually costs less than €20 a year, paid directly to the company that registers it.",

    "work.title": "Websites I’ve built",
    "work.lead": "Three local organisations, three different needs.",
    "work.visit": "Visit the site",
    "work.preview": "See a preview",
    "work.w1.kind": "Garden equipment repair, Ariège",
    "work.w1.d": "Services, the villages covered, opening hours and a quote request in a few clicks.",
    "work.w2.kind": "Parents’ association, Lézat-sur-Lèze",
    "work.w2.d": "The year’s events, sign-ups for the dance and useful information for families.",
    "work.w3.kind": "Basketball club, Carla-Bayle",
    "work.w3.d": "Team schedules, membership fees, registrations and the club’s sponsors. This site is no longer online.",

    "method.title": "How it works",
    "method.s1.t": "We talk it through",
    "method.s1.d": "A call or a meeting to understand your business, your customers and what the site needs to do. You get a fixed quote.",
    "method.s2.t": "I build the site in 5 to 7 working days",
    "method.s2.d": "You send me your text and photos, or we prepare them together.",
    "method.s3.t": "You review it",
    "method.s3.d": "You see the site before it goes live. I make your corrections.",
    "method.s4.t": "Launch and handover",
    "method.s4.d": "The site goes live on your domain name. I show you how to make small changes yourself.",

    "about.title": "Who builds your site",
    "about.role": "IzuTech",
    "about.photoAlt": "Portrait of Izumi Bérat",
    "about.p1": "I’m Izumi Bérat, an engineer. I spent many years in IT and the web, including as Director for Web Initiatives at Columbia University in New York.",
    "about.p2": "Today I build websites for small organisations around me. You deal with one person, from the first call to launch, and I answer you directly.",
    "about.p3": "Away from the screen, I practise yoga, meditation and running every day. That’s also why I like simple websites: you update them in a few minutes, then get back to your work.",
    "about.more": "I also help small businesses automate repetitive work with AI: <a href=\"https://izutech.fr/\">izutech.fr</a>",

    "faq.title": "Questions",
    "faq.q1": "How long does it take?",
    "faq.a1": "5 to 7 working days after our first conversation, once I have your text and photos.",
    "faq.q2": "Can I edit the site myself?",
    "faq.a2": "Yes, for text and photos. I show you how at handover. For bigger changes, I can handle them with the monthly support option, or on a quote.",
    "faq.q3": "Are there yearly costs?",
    "faq.a3": "Hosting is included, with no yearly fees. Only the domain name renews each year, usually for less than €20. It’s in your name: the site belongs to you.",
    "faq.q4": "What if I have no text or photos?",
    "faq.a4": "We prepare them together after a conversation. A few photos taken with your phone are often enough.",
    "faq.q5": "Will my site be found on Google?",
    "faq.a5": "The site is built so Google can read it well: clear titles, address, opening hours, fast pages. I can’t promise first place, and nobody honestly can.",

    "contact.title": "Let’s talk about your website",
    "contact.lead": "Tell me in a few lines what you do and what the site should show. I’ll send you a free quote within one working day.",
    "contact.or": "Would you rather talk it through?",
    "contact.call": "Book a 30-minute call",
    "contact.mail": "By email:",

    "form.name": "Your name",
    "form.email": "Your email",
    "form.phone": "Phone",
    "form.business": "Your business",
    "form.optional": "(optional)",
    "form.businessPh": "For example: bakery, garage, sports club",
    "form.message": "Your project",
    "form.messagePh": "What you do, what the site should show, and any options you’re interested in.",
    "form.submit": "Request my quote",
    "form.sending": "Sending…",
    "form.ok": "Thank you. Your request is on its way. You’ll hear from me within one working day.",
    "form.err": "Sending didn’t work. Please write to me directly at contact@izutech.fr.",
    "form.missing": "Please fill in your name, a valid email and your project.",

    "footer.where": "Websites for tradespeople, shops and associations.",
    "footer.ai": "AI automation for small businesses",
    "footer.seniors": "Tech help for seniors (in French)",
    "footer.events": "Event dashboards",
    "footer.legal": "Legal notice and privacy (in French)",

    "meta.title": "IzuTech · Websites for tradespeople, shops and associations",
    "meta.description": "A clear, fast website that works on phones. Fixed price of €490, online in 5 to 7 working days. Based in Pau, working across France."
  };

  var FR_EXTRA = {
    "langAria": "Switch to English",
    "navLabel": "Navigation principale",
    "form.sending": "Envoi en cours…",
    "form.ok": "Merci. Votre demande est bien partie. Je vous réponds sous 24 h ouvrées.",
    "form.err": "L'envoi n'a pas fonctionné. Écrivez-moi directement à contact@izutech.fr.",
    "form.missing": "Merci d'indiquer votre nom, un email valide et votre projet."
  };

  var STORE_KEY = "izutech-web-lang";
  var FR = {};
  var current = "fr";

  function store(get, value) {
    try {
      if (get) return window.localStorage.getItem(STORE_KEY);
      window.localStorage.setItem(STORE_KEY, value);
    } catch (e) { return null; }
    return null;
  }

  // French is the page's own text; capture it once so we can switch back.
  function captureFrench() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!(k in FR)) FR[k] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      FR[el.getAttribute("data-i18n-placeholder")] = el.getAttribute("placeholder");
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      FR[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt");
    });
    FR["meta.title"] = document.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) FR["meta.description"] = md.getAttribute("content");
    Object.keys(FR_EXTRA).forEach(function (k) { FR[k] = FR_EXTRA[k]; });
  }

  function t(key) {
    var dict = current === "en" ? EN : FR;
    return dict[key] != null ? dict[key] : (FR[key] || "");
  }

  function apply(lang) {
    current = lang === "en" ? "en" : "fr";
    var dict = current === "en" ? EN : FR;
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-placeholder")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];
    var md = document.querySelector('meta[name="description"]');
    if (md && dict["meta.description"]) md.setAttribute("content", dict["meta.description"]);
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = current === "en" ? "FR" : "EN";
  }

  // French unless the visitor asked for English, or their device is set to a language other than French.
  function initialLanguage() {
    var param = null;
    try { param = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
    if (param === "en" || param === "fr") return param;
    var saved = store(true);
    if (saved === "en" || saved === "fr") return saved;
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || "fr"];
    var primary = String(langs[0] || "fr").toLowerCase();
    return primary.indexOf("fr") === 0 ? "fr" : "en";
  }

  function setupForm() {
    var form = document.getElementById("lead-form");
    if (!form) return;
    var status = document.getElementById("form-status");
    var submit = document.getElementById("f-submit");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      var name = form.elements.name, email = form.elements.email, task = form.elements.message;
      var bad = false;
      [name, email, task].forEach(function (f) {
        var invalid = !f.value.trim() || (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
        f.setAttribute("aria-invalid", invalid ? "true" : "false");
        if (invalid) bad = true;
      });
      if (bad) { status.textContent = t("form.missing"); status.classList.add("err"); return; }

      submit.disabled = true;
      var label = submit.textContent;
      submit.textContent = t("form.sending");
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error("status " + r.status);
          form.reset();
          status.textContent = t("form.ok");
          status.classList.add("ok");
        })
        .catch(function () {
          status.textContent = t("form.err");
          status.classList.add("err");
        })
        .finally(function () { submit.disabled = false; submit.textContent = label; });
    });
  }

  function init() {
    captureFrench();
    apply(initialLanguage());
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.addEventListener("click", function () {
      var next = current === "en" ? "fr" : "en";
      apply(next);
      store(false, next);
    });
    setupForm();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
