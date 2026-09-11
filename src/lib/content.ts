export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export type Service = {
  id: string;
  simplyBookId?: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  duration: string;
  price: string;
};

type Content = {
  languageName: string;
  alternateLocale: Locale;
  navigation: { label: string; href: string }[];
  labels: Record<string, string>;
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    servicesEyebrow: string;
    servicesTitle: string;
    trainerEyebrow: string;
    trainerTitle: string;
    trainerBody: string;
    approachEyebrow: string;
    approachTitle: string;
    testimonial: string;
    testimonialAuthor: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: { eyebrow: string; title: string; body: string[]; imageAlt: string; principlesTitle: string };
  services: { eyebrow: string; title: string; intro: string };
  pricing: { eyebrow: string; title: string; intro: string; note: string };
  booking: { eyebrow: string; title: string; intro: string; note: string; widgetTitle: string };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  legal: { privacyTitle: string; imprintTitle: string; placeholder: string };
  servicesList: Service[];
  principles: { number: string; title: string; body: string }[];
};

const sharedServices = {
  personal60: {
    id: "personal-training-60",
    simplyBookId: process.env.NEXT_PUBLIC_SIMPLYBOOK_SERVICE_PERSONAL_60,
    number: "01",
    shortTitle: "Personal Training",
    duration: "60 min",
    price: "CHF 120",
  },
  personal90: {
    id: "personal-training-90",
    simplyBookId: process.env.NEXT_PUBLIC_SIMPLYBOOK_SERVICE_PERSONAL_90,
    number: "02",
    shortTitle: "Personal Training",
    duration: "90 min",
    price: "CHF 170",
  },
  online: {
    id: "online-coaching-60",
    simplyBookId: process.env.NEXT_PUBLIC_SIMPLYBOOK_SERVICE_ONLINE_60,
    number: "03",
    shortTitle: "Online Coaching",
    duration: "60 min",
    price: "CHF 95",
  },
};

const content: Record<Locale, Content> = {
  en: {
    languageName: "English",
    alternateLocale: "de",
    navigation: [
      { label: "Home", href: "/en" },
      { label: "Services", href: "/en/services" },
      { label: "About", href: "/en/about" },
      { label: "Approach", href: "/en#approach" },
      { label: "Contact", href: "/en/contact" },
    ],
    labels: {
      book: "Book a session",
      explore: "Explore",
      menu: "Menu",
      close: "Close",
      viewAll: "View all services",
      send: "Send message",
      back: "Back home",
    },
    home: {
      eyebrow: "Personal training · Zurich",
      title: "Training that makes room for your life.",
      intro:
        "Thoughtful strength and conditioning for people who want to feel capable, clear and at home in their bodies.",
      primaryCta: "Book a session",
      secondaryCta: "Discover my approach",
      imageAlt: "Coach Dili standing in a bright training studio",
      servicesEyebrow: "Ways to work together",
      servicesTitle: "A practice built around you.",
      trainerEyebrow: "Meet your coach",
      trainerTitle: "Training should fit your life — not the other way around.",
      trainerBody:
        "I create calm, focused spaces to build strength, confidence and sustainable momentum. Every session starts with where you are and moves toward where you want to be.",
      approachEyebrow: "The Coach Dili approach",
      approachTitle: "Progress, with perspective.",
      testimonial:
        "I feel stronger, more confident and more connected to my body than I have in years. The work is challenging, but it never feels like punishment.",
      testimonialAuthor: "— Lena, personal training client",
      ctaTitle: "Ready to get started?",
      ctaBody: "Bring your questions, your goals, and the time you have. We will build from there.",
    },
    about: {
      eyebrow: "About Coach Dili",
      title: "A stronger relationship with your body starts with attention.",
      body: [
        "I believe training can be both ambitious and kind. It can ask more of you without asking you to become someone else.",
        "My work combines practical strength training, clear guidance and enough flexibility for real life. We focus on the details that make movement feel better and progress last longer.",
      ],
      imageAlt: "Coach Dili coaching a client",
      principlesTitle: "What guides the work",
    },
    services: {
      eyebrow: "Services",
      title: "Training with intention.",
      intro:
        "Choose the format that fits your current season. Each service is personal, considered and designed to leave you with more energy than you arrived with.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple ways to begin.",
      intro:
        "Start with one session and find your rhythm. Your SimplyBook booking confirms the current availability and price.",
      note: "Prices are shown in Swiss francs. Packages and tailored coaching plans are available on request.",
    },
    booking: {
      eyebrow: "Booking",
      title: "Make time for your next step.",
      intro:
        "Find a time that works for you on SimplyBook. Your booking, reminders and any changes stay securely with SimplyBook.",
      note: "The booking window is provided by SimplyBook.me. No appointment information is stored on this website.",
      widgetTitle: "Choose your service",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s start with a conversation.",
      intro:
        "Questions about training, availability or which format is right for you? Send a note and I will get back to you shortly.",
      formTitle: "Send a message",
      name: "Your name",
      email: "Email address",
      message: "How can I help?",
      submit: "Send message",
    },
    legal: {
      privacyTitle: "Privacy policy",
      imprintTitle: "Impressum",
      placeholder: "This page is prepared for the final legal information and will be completed before launch.",
    },
    servicesList: [
      {
        ...sharedServices.personal60,
        title: "Personal Training",
        description: "Individual training shaped around your goals, your body and your week.",
        detail: "One-to-one coaching with thoughtful programming, technique guidance and room to adapt.",
      },
      {
        ...sharedServices.personal90,
        title: "Strength & Conditioning",
        description: "More time to build strength, refine movement and work at a deeper pace.",
        detail: "A longer session for focused progression, complex goals or a complete reset.",
      },
      {
        ...sharedServices.online,
        title: "Online Coaching",
        description: "Clear structure and personal guidance, wherever you are.",
        detail: "A considered training plan, regular check-ins and support that meets your actual schedule.",
      },
    ],
    principles: [
      {
        number: "01",
        title: "Personal approach",
        body: "Your context matters. We begin with your goals, history and capacity today.",
      },
      {
        number: "02",
        title: "Individual programming",
        body: "Every plan has a purpose, with enough flexibility to stay useful in real life.",
      },
      {
        number: "03",
        title: "Evidence-based training",
        body: "Clear principles, practical coaching and no unnecessary noise.",
      },
      { number: "04", title: "Sustainable progress", body: "The best result is one you can keep building on." },
    ],
  },
  de: {
    languageName: "Deutsch",
    alternateLocale: "en",
    navigation: [
      { label: "Startseite", href: "/de" },
      { label: "Angebot", href: "/de/services" },
      { label: "Über mich", href: "/de/about" },
      { label: "Ansatz", href: "/de#approach" },
      { label: "Kontakt", href: "/de/contact" },
    ],
    labels: {
      book: "Termin buchen",
      explore: "Entdecken",
      menu: "Menü",
      close: "Schliessen",
      viewAll: "Alle Angebote",
      send: "Nachricht senden",
      back: "Zur Startseite",
    },
    home: {
      eyebrow: "Personal Training · Zürich",
      title: "Training, das Platz für dein Leben lässt.",
      intro:
        "Bewusstes Kraft- und Konditionstraining für Menschen, die sich stark, klar und wohl in ihrem Körper fühlen möchten.",
      primaryCta: "Termin buchen",
      secondaryCta: "Meinen Ansatz entdecken",
      imageAlt: "Coach Dili in einem hellen Trainingsstudio",
      servicesEyebrow: "Gemeinsam trainieren",
      servicesTitle: "Ein Training, das sich nach dir richtet.",
      trainerEyebrow: "Dein Coach",
      trainerTitle: "Training soll in dein Leben passen — nicht umgekehrt.",
      trainerBody:
        "Ich schaffe ruhige, fokussierte Räume für mehr Kraft, Vertrauen und nachhaltigen Fortschritt. Jede Einheit beginnt dort, wo du gerade stehst.",
      approachEyebrow: "Der Coach Dili Ansatz",
      approachTitle: "Fortschritt mit Perspektive.",
      testimonial:
        "Ich fühle mich stärker, selbstbewusster und verbundener mit meinem Körper als seit Jahren. Das Training fordert mich, fühlt sich aber nie wie Bestrafung an.",
      testimonialAuthor: "— Lena, Personal-Training-Kundin",
      ctaTitle: "Bereit für den nächsten Schritt?",
      ctaBody: "Bring deine Fragen, deine Ziele und die Zeit mit, die du hast. Wir bauen darauf auf.",
    },
    about: {
      eyebrow: "Über Coach Dili",
      title: "Eine stärkere Beziehung zum eigenen Körper beginnt mit Aufmerksamkeit.",
      body: [
        "Ich glaube, Training darf gleichzeitig ambitioniert und freundlich sein. Es darf mehr von dir verlangen, ohne dass du jemand anderes werden musst.",
        "Meine Arbeit verbindet praktisches Krafttraining, klare Anleitung und genug Flexibilität für das echte Leben. Wir konzentrieren uns auf die Details, die Bewegung besser und Fortschritt nachhaltig machen.",
      ],
      imageAlt: "Coach Dili beim Anleiten einer Kundin",
      principlesTitle: "Was meine Arbeit leitet",
    },
    services: {
      eyebrow: "Angebot",
      title: "Training mit Absicht.",
      intro:
        "Wähle das Format, das zu deiner aktuellen Lebensphase passt. Jede Einheit ist persönlich, durchdacht und gibt dir mehr Energie zurück.",
    },
    pricing: {
      eyebrow: "Preise",
      title: "Einfache Wege, anzufangen.",
      intro:
        "Starte mit einer Einheit und finde deinen Rhythmus. SimplyBook zeigt dir die aktuelle Verfügbarkeit und den verbindlichen Preis.",
      note: "Alle Preise sind in Schweizer Franken. Pakete und individuelle Coaching-Pläne sind auf Anfrage möglich.",
    },
    booking: {
      eyebrow: "Termin buchen",
      title: "Zeit für deinen nächsten Schritt.",
      intro:
        "Finde über SimplyBook einen passenden Termin. Buchung, Erinnerungen und Änderungen bleiben sicher bei SimplyBook.",
      note: "Das Buchungsfenster wird von SimplyBook.me bereitgestellt. Diese Website speichert keine Termindaten.",
      widgetTitle: "Angebot wählen",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns mit einem Gespräch beginnen.",
      intro:
        "Fragen zu Training, Verfügbarkeit oder dem passenden Format? Schreib mir und ich melde mich bald bei dir.",
      formTitle: "Nachricht senden",
      name: "Dein Name",
      email: "E-Mail-Adresse",
      message: "Wie kann ich helfen?",
      submit: "Nachricht senden",
    },
    legal: {
      privacyTitle: "Datenschutz",
      imprintTitle: "Impressum",
      placeholder: "Diese Seite ist für die finalen rechtlichen Angaben vorbereitet und wird vor dem Launch ergänzt.",
    },
    servicesList: [
      {
        ...sharedServices.personal60,
        title: "Personal Training",
        description: "Individuelles Training, abgestimmt auf deine Ziele, deinen Körper und deine Woche.",
        detail: "Persönliches Coaching mit durchdachter Planung, Technik und Raum für Anpassungen.",
      },
      {
        ...sharedServices.personal90,
        title: "Kraft & Kondition",
        description: "Mehr Zeit, um Kraft aufzubauen, Bewegungen zu verfeinern und tiefer zu arbeiten.",
        detail: "Eine längere Einheit für gezielten Fortschritt, komplexe Ziele oder einen kompletten Neustart.",
      },
      {
        ...sharedServices.online,
        title: "Online Coaching",
        description: "Klare Struktur und persönliche Begleitung, wo immer du bist.",
        detail: "Ein durchdachter Trainingsplan, regelmässige Check-ins und Support für deinen echten Alltag.",
      },
    ],
    principles: [
      {
        number: "01",
        title: "Persönlicher Ansatz",
        body: "Dein Kontext zählt. Wir beginnen mit deinen Zielen, deiner Geschichte und deiner Kapazität heute.",
      },
      {
        number: "02",
        title: "Individuelle Planung",
        body: "Jeder Plan hat einen Zweck und genug Flexibilität für das echte Leben.",
      },
      {
        number: "03",
        title: "Evidenzbasiertes Training",
        body: "Klare Prinzipien, praktische Anleitung und kein unnötiger Lärm.",
      },
      {
        number: "04",
        title: "Nachhaltiger Fortschritt",
        body: "Das beste Ergebnis ist eines, auf dem du weiter aufbauen kannst.",
      },
    ],
  },
};

export function getContent(locale: string): Content {
  return content[locale as Locale] ?? content.de;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
