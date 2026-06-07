import type { Translations } from '../types';

const de: Translations = {
  nav: {
    about: 'Über mich',
    projects: 'Projekte',
    references: 'Referenzen',
    contact: 'Kontakt',
    github: 'GitHub',
    cv: 'Lebenslauf',
  },
  hero: {
    greeting: 'Hallo, ich bin Editor Jakupi',
    titleLine1: 'Full-Stack-Entwickler &',
    titleLine2: 'KI-Spezialist',
    subtitle:
      'Softwareentwickler in Halmstad, Schweden. Ich entwickle Full-Stack-Webanwendungen, KI-gestützte Tools und robuste APIs — von Restaurant-Assistenten und Podcast-Plattformen bis zu ML-Pipelines und getesteten .NET-Systemen.',
    viewWork: 'Meine Arbeit ansehen',
    getInTouch: 'Kontakt aufnehmen',
    downloadCv: 'Lebenslauf herunterladen',
    location: 'Standort Halmstad, SE',
    status: 'Offen für Möglichkeiten',
  },
  about: {
    label: 'Über mich',
    title: 'Vom Lagerboden zum Produktionscode.',
    p1:
      'Bevor ich Software entwickelte, arbeitete ich in Lagern, der Parküberwachung und im IT-Support — Tätigkeiten, die mir Disziplin, Fehlersuche unter Druck und zuverlässige Lieferung lehrten. Diese praktische Einstellung prägt heute, wie ich Code schreibe: strukturiert, getestet und für echte Nutzer gebaut.',
    p2:
      'Ich habe meine KI-orientierte Ausbildung an der NBI Handelsakademin abgeschlossen (Juni 2026) und setze mein Ingenieurstudium in Computertechnik an der Universität Halmstad fort. Praktika bei PodManager.AI (Full-Stack Audio/KI) und Swiiftly (Restaurant-KI mit RAG, OCR und Governance).',
    skillsTitle: 'Technische Fähigkeiten',
    skillGroups: [
      {
        title: 'Sprachen',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend & Mobile',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend & APIs',
        items: ['Node.js', 'FastAPI', '.NET', 'REST APIs', 'Express'],
      },
      {
        title: 'KI & Daten',
        items: ['Machine Learning', 'RAG', 'LLM-Integration', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Tools & DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Postman', 'HTTPie', 'VS Code', 'JetBrains', 'Scrum'],
      },
      {
        title: 'Echtzeit & Cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
    ],
  },
  projects: {
    label: 'Projekte',
    title: 'Ausgewählte Arbeiten',
    subtitle: 'Klicken Sie auf eine Karte für die vollständige Fallstudie. Alle öffentlichen GitHub-Repos sind aufgelistet.',
    readMore: 'Mehr lesen',
    private: 'Privat',
    filterAll: 'Alle',
    filterFeatured: 'Highlights',
    filterCourse: 'Kurs & Lernen',
  },
  modal: {
    highlights: 'Highlights',
    techStack: 'Tech-Stack',
    viewGithub: 'Auf GitHub ansehen',
    liveDemo: 'Live-Demo',
    privateRepo: 'Privates Repository — Quellcode auf Anfrage verfügbar.',
    close: 'Schließen',
  },
  references: {
    label: 'Referenzen',
    title: 'Personen, mit denen ich gearbeitet habe',
    subtitle: 'Kontaktdaten auf Anfrage — schreiben Sie mir per E-Mail.',
  },
  contact: {
    label: 'Kontakt',
    title: 'Lassen Sie uns etwas bauen',
    subtitle:
      'Suchen Sie einen Entwickler für ein Praktikum, eine Junior-Stelle oder eine Projektzusammenarbeit? Ich freue mich auf Ihre Nachricht.',
    email: 'E-Mail',
    phone: 'Telefon',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
};

export default de;
