import type { Translations } from '../types';

const pl: Translations = {
  nav: {
    about: 'O mnie',
    projects: 'Projekty',
    references: 'Referencje',
    contact: 'Kontakt',
    github: 'GitHub',
    cv: 'CV',
  },
  hero: {
    greeting: 'Cześć, jestem Editor Jakupi',
    titleLine1: 'Full-Stack Developer &',
    titleLine2: 'Specjalista AI',
    subtitle:
      'Programista z Halmstad w Szwecji. Tworzę aplikacje web full-stack, narzędzia AI i solidne API — od asystentów restauracyjnych i platform podcastowych po pipeline\'y ML i testowane systemy .NET.',
    viewWork: 'Zobacz moją pracę',
    getInTouch: 'Skontaktuj się',
    downloadCv: 'Pobierz CV',
    location: 'Halmstad, SE',
    status: 'Otwarty na możliwości',
  },
  about: {
    label: 'O mnie',
    title: 'Od magazynu do kodu produkcyjnego.',
    p1:
      'Zanim zająłem się programowaniem, pracowałem w magazynie, przy nadzorze parkingów i wsparcia IT — role, które nauczyły mnie dyscypliny, rozwiązywania problemów pod presją i niezawodnej realizacji. To praktyczne podejście kształtuje dziś mój sposób pisania kodu: uporządkowany, testowany i stworzony dla prawdziwych użytkowników.',
    p2:
      'Ukończyłem wykształcenie zawodowe wyższe jako programista AI w NBI Handelsakademin (czerwiec 2026) oraz jeden rok programu M.Sc. inżynierii komputerowej na Uniwersytecie w Halmstad (2021–2022). Praktyki LIA w PodManager.AI i Swiiftly.',
    skillsTitle: 'Umiejętności techniczne',
    skillGroups: [
      {
        title: 'Języki',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend i mobile',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend i API',
        items: ['Node.js', 'FastAPI', '.NET', 'REST API', 'Express'],
      },
      {
        title: 'AI i dane',
        items: ['Machine Learning', 'RAG', 'Integracja LLM', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Narzędzia i DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Postman', 'HTTPie', 'VS Code', 'JetBrains', 'Scrum'],
      },
      {
        title: 'Real-time i chmura',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
    ],
  },
  projects: {
    label: 'Projekty',
    title: 'Wybrane prace',
    subtitle: 'Kliknij kartę, aby otworzyć pełne case study. Wszystkie publiczne repozytoria GitHub są wymienione.',
    readMore: 'Czytaj więcej',
    private: 'Prywatne',
    filterAll: 'Wszystkie',
    filterFeatured: 'Wyróżnione',
    filterCourse: 'Kurs i nauka',
  },
  modal: {
    highlights: 'Najważniejsze',
    techStack: 'Stack technologiczny',
    viewGithub: 'Zobacz na GitHub',
    liveDemo: 'Demo na żywo',
    privateRepo: 'Prywatne repozytorium — kod źródłowy dostępny na życzenie.',
    close: 'Zamknij',
  },
  references: {
    label: 'Referencje',
    title: 'Osoby, z którymi pracowałem',
    subtitle: 'Dane kontaktowe na życzenie — napisz do mnie e-mailem.',
    languagesLabel: 'Języki',
  },
  contact: {
    label: 'Kontakt',
    title: 'Zbudujmy coś razem',
    subtitle:
      'Szukasz developera na staż, stanowisko junior lub współpracę projektową? Napisz do mnie.',
    email: 'E-mail',
    phone: 'Telefon',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'Wszelkie prawa zastrzeżone.',
  },
};

export default pl;
