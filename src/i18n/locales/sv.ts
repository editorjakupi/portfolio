import type { Translations } from '../types';

const sv: Translations = {
  nav: {
    about: 'Om mig',
    projects: 'Projekt',
    references: 'Referenser',
    contact: 'Kontakt',
    github: 'GitHub',
    cv: 'CV',
  },
  hero: {
    greeting: 'Hej, jag heter Editor Jakupi',
    titleLine1: 'Fullstackutvecklare &',
    titleLine2: 'AI-specialist',
    subtitle:
      'Mjukvaruutvecklare baserad i Halmstad. Jag bygger fullstack-webbappar, AI-drivna verktyg och robusta API:er — från restaurangassistenter och ljudplattformar till ML-pipelines och testade .NET-system.',
    viewWork: 'Se mitt arbete',
    getInTouch: 'Kontakta mig',
    downloadCv: 'Ladda ner CV',
    location: 'Baserad i Halmstad, SE',
    status: 'Öppen för möjligheter',
  },
  about: {
    label: 'Om mig',
    title: 'Från lagergolv till produktionskod.',
    p1:
      'Innan mjukvaruutveckling arbetade jag på lager, med parkeringsövervakning och IT-support — roller som lärde mig disciplin, felsökning under press och att leverera pålitligt. Det praktiska arbetssättet präglar hur jag skriver kod idag: strukturerat, testat och byggt för riktiga användare.',
    p2:
      'Idag slutför jag min AI-inriktade utbildning vid NBI Handelsakademin (examens juni 2026) parallellt med civilingenjörsstudier i datateknik vid Halmstads högskola. Jag har genomfört LIA hos PodManager.AI (fullstack ljud/AI-plattform) och Swiiftly (restaurang-AI med RAG, OCR och styrning).',
    skillsTitle: 'Tekniska färdigheter',
    skillGroups: [
      {
        title: 'Språk',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend & mobil',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend & API:er',
        items: ['Node.js', 'FastAPI', '.NET', 'REST API:er', 'Express'],
      },
      {
        title: 'AI & data',
        items: ['Maskininlärning', 'RAG', 'LLM-integration', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Verktyg & DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Postman', 'HTTPie', 'VS Code', 'JetBrains', 'Scrum'],
      },
      {
        title: 'Realtid & moln',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
    ],
  },
  projects: {
    label: 'Projekt',
    title: 'Utvalt arbete',
    subtitle: 'Klicka på ett kort för att öppna hela case studyn. Alla publika repos från min GitHub listas.',
    readMore: 'Läs mer',
    private: 'Privat',
    filterAll: 'Alla',
    filterFeatured: 'Utvalda',
    filterCourse: 'Kurs & lärande',
  },
  modal: {
    highlights: 'Höjdpunkter',
    techStack: 'Teknikstack',
    viewGithub: 'Visa på GitHub',
    liveDemo: 'Live-demo',
    privateRepo: 'Privat repository — källkod tillgänglig på begäran.',
    close: 'Stäng',
  },
  references: {
    label: 'Referenser',
    title: 'Personer jag arbetat med',
    subtitle: 'Kontaktuppgifter lämnas på begäran — hör av dig via e-post.',
  },
  contact: {
    label: 'Kontakt',
    title: 'Låt oss bygga något tillsammans',
    subtitle:
      'Söker du en utvecklare för LIA, junior roll eller projektsamarbete? Jag hör gärna av dig.',
    email: 'E-post',
    phone: 'Telefon',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'Alla rättigheter förbehållna.',
  },
};

export default sv;
