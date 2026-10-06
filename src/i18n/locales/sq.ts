import type { Translations } from '../types';

const sq: Translations = {
  nav: {
    about: 'Rreth meje',
    projects: 'Projektet',
    references: 'Referencat',
    contact: 'Kontakt',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'CV',
  },
  hero: {
    greeting: 'Përshëndetje, unë jam Editor Jakupi',
    titleLine1: 'Zhvillues Full-Stack &',
    titleLine2: 'Specialist i AI',
    subtitle:
      'Zhvillues softueri me bazë në Halmstad, Suedi. Ndërtoj aplikacione web full-stack, mjete me AI dhe API të forta — nga asistentët e restoranteve dhe platformat e audios deri te pipeline-et ML dhe sistemet .NET të testuara.',
    viewWork: 'Shiko punën time',
    getInTouch: 'Kontakto',
    downloadCv: 'Shkarko CV',
    location: 'Me bazë në Halmstad, Suedi',
    status: 'I hapur për mundësi',
    languages: 'Suedisht · anglisht · shqip',
  },
  about: {
    label: 'Rreth meje',
    title: 'Nga magazinat te kodi i prodhimit.',
    p1:
      'Para zhvillimit të softuerit punova në magazina, monitorimin e parkimit dhe IT support — role që më mësojnë disiplinë, zgjidhjen e problemeve nën presion dhe dorëzimin e besueshëm. Ky mentalitet praktik formon mënyrën si shkruaj kod sot: i strukturuar, i testuar dhe i ndërtuar për përdorues realë.',
    p2:
      'Pas një viti në programin M.Sc. in Inxhinieri Kompjuterike në Universitetin e Halmstad (2021–2022), kam përfunduar arsimin profesional të lartë si zhvillues softueri me AI në NBI Handelsakademin (qershor 2026), përfshirë praktikat LIA në PodManager.AI dhe Swiiftly.',
    p3:
      'Përveç zhvillimit, merrem me tregtinë retail të lëndëve të para — analizë tregu, disiplinë rreziku dhe vendime të strukturuara në pasiguri.',
    skillsTitle: 'Aftësi teknike',
    timelineTitle: 'Përvoja',
    educationTitle: 'Edukimi',
    skillGroups: [
      {
        title: 'Gjuhë',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend & mobile',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend & API',
        items: ['Node.js', 'FastAPI', '.NET', 'REST API', 'Express'],
      },
      {
        title: 'AI & të dhëna',
        items: ['Mësim makinerik', 'RAG', 'Integrim LLM', 'Whisper', 'Azure Speech', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Mjete & DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Git Bash', 'Postman', 'HTTPie', 'VS Code', 'JetBrains Toolbox', 'Cursor', 'Scrum', 'CI/CD'],
      },
      {
        title: 'Real-time & cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
      {
        title: 'Të tjera',
        items: ['Support IT', 'Microsoft Office'],
      },
      {
        title: 'Përtej zhvillimit',
        items: ['Lëndë të para', 'Analizë tregu', 'Disiplinë rreziku'],
      },
    ],
  },
  projects: {
    label: 'Projektet',
    title: 'Punë e zgjedhur',
    subtitle: 'Filtro sipas mënyrës së punës — aplike live personale, LIA, punë grupi, material kursi ose ushtrime mësimore.',
    readMore: 'Lexo më shumë',
    private: 'Privat',
    filterAll: 'Të gjitha',
    filterOwnLive: 'Të miat & live',
    filterLia: 'LIA',
    filterGroup: 'Punë grupi',
    filterCourseMaterial: 'Material kursi',
    filterLearning: 'Mësim',
    filterAi: 'AI (ML & DL)',
    filterAiAll: 'E gjithe AI',
    filterAiMl: 'ML',
    filterAiDl: 'DL',
    filterAiLlm: 'LLM & agjente',
    filterLangPython: 'Python',
    filterLangCsharp: 'C#',
    filterLangJavascript: 'JavaScript',
    filterLangJava: 'Java',
    filterDescAll: 'Gjithcka ne nje liste — app personale, LIA, pune grupi, material kursi dhe ushtrime.',
    filterDescOwnLive: 'Produkte qe i kam ndertuar dhe hostuar vete, te hapura live ne shfletues.',
    filterDescLia: 'Pune LIA e dorezuar brenda platformave te kompanive.',
    filterDescGroup: 'Projekte ekipi me bashkenxenës gjate arsimimit.',
    filterDescCourseMaterial: 'Module kursi, permbledhje gjuhesh dhe kontrolle njohurish.',
    filterDescLearning: 'Ushtrime me te vogla dhe praktike testimi nga arsimimi.',
    filterDescAi: 'Pune e lidhur me AI — ML klasik, deep learning dhe LLM/RAG; mund te shfaqet edhe ne filtra te tjere.',
    filterDescAiMl: 'Machine learning klasik: modele tabelare, parashikim dhe mbeshtetje vendimesh.',
    filterDescAiDl: 'Deep learning: rrjeta neurale, CNN, vision dhe dorezime kursi.',
    filterDescAiLlm: 'LLM, RAG, ASR dhe asistente — chat, retrieval dhe speech.',
    filterDescLangPython: 'Projekte qe perdorin Python (dhe librari data/ML) ne menyre te rendesishme.',
    filterDescLangCsharp: 'Projekte qe perdorin C# / .NET ne menyre te rendesishme.',
    filterDescLangJavascript: 'Projekte qe perdorin JavaScript ose TypeScript (React, Next.js, Node, ...).',
    filterDescLangJava: 'Projekte qe perdorin Java ne menyre te rendesishme.',
  },
  modal: {
    highlights: 'Pikat kryesore',
    techStack: 'Stack teknologjik',
    viewGithub: 'Shiko në GitHub',
    liveDemo: 'Demo live',
    privateRepo: 'Repository privat — burimi i kodit në dispozicion me kërkesë.',
    close: 'Mbyll',
  },
  references: {
    label: 'Referencat',
    title: 'Persona me të cilët kam punuar',
    subtitle: 'Detajet e kontaktit në dispozicion me kërkesë — kontaktoni përmes email-it.',
    languagesLabel: 'Gjuhët',
  },
  contact: {
    label: 'Kontakt',
    title: 'Le të ndërtojmë diçka së bashku',
    subtitle:
      'Po kërkoni një zhvillues për praktikë, rol junior ose bashkëpunim projekti? Më kontaktoni pa hezitim.',
    email: 'Email',
    phone: 'Telefon',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'Të gjitha të drejtat e rezervuara.',
  },
};

export default sq;
