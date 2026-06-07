import type { Translations } from '../types';

const it: Translations = {
  nav: {
    about: 'Chi sono',
    projects: 'Progetti',
    references: 'Referenze',
    contact: 'Contatto',
    github: 'GitHub',
    cv: 'CV',
  },
  hero: {
    greeting: 'Ciao, sono Editor Jakupi',
    titleLine1: 'Sviluppatore Full-Stack &',
    titleLine2: 'Specialista IA',
    subtitle:
      'Sviluppatore software con base a Halmstad, Svezia. Realizzo applicazioni web full-stack, strumenti basati sull\'IA e API robuste — dagli assistenti per ristoranti alle piattaforme podcast, fino alle pipeline ML e ai sistemi .NET testati.',
    viewWork: 'Vedi il mio lavoro',
    getInTouch: 'Contattami',
    downloadCv: 'Scarica CV',
    location: 'Basato a Halmstad, SE',
    status: 'Aperto a opportunità',
  },
  about: {
    label: 'Chi sono',
    title: 'Dal magazzino al codice di produzione.',
    p1:
      'Prima dello sviluppo software ho lavorato in magazzino, sorveglianza parcheggi e supporto IT — ruoli che mi hanno insegnato disciplina, troubleshooting sotto pressione e affidabilità. Questo approccio pratico guida oggi il mio modo di scrivere codice: strutturato, testato e pensato per utenti reali.',
    p2:
      'Ho completato la formazione in sviluppo software con focus IA alla NBI Handelsakademin (giugno 2026) e continuo gli studi di ingegneria informatica all\'Università di Halmstad. Tirocinio LIA presso PodManager.AI (piattaforma full-stack audio/IA) e Swiiftly (assistente IA ristoranti con RAG, OCR e governance).',
    skillsTitle: 'Competenze tecniche',
    skillGroups: [
      {
        title: 'Linguaggi',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend e mobile',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend e API',
        items: ['Node.js', 'FastAPI', '.NET', 'REST API', 'Express'],
      },
      {
        title: 'IA e dati',
        items: ['Machine Learning', 'RAG', 'Integrazione LLM', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Strumenti e DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Postman', 'HTTPie', 'VS Code', 'JetBrains', 'Scrum'],
      },
      {
        title: 'Real-time e cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
    ],
  },
  projects: {
    label: 'Progetti',
    title: 'Lavori selezionati',
    subtitle: 'Clicca su una scheda per aprire il case study completo. Tutti i repo pubblici GitHub sono elencati.',
    readMore: 'Leggi di più',
    private: 'Privato',
    filterAll: 'Tutti',
    filterFeatured: 'In evidenza',
    filterCourse: 'Corso e apprendimento',
  },
  modal: {
    highlights: 'Punti salienti',
    techStack: 'Stack tecnologico',
    viewGithub: 'Vedi su GitHub',
    liveDemo: 'Demo live',
    privateRepo: 'Repository privato — codice sorgente disponibile su richiesta.',
    close: 'Chiudi',
  },
  references: {
    label: 'Referenze',
    title: 'Persone con cui ho lavorato',
    subtitle: 'Contatti disponibili su richiesta — scrivimi via e-mail.',
  },
  contact: {
    label: 'Contatto',
    title: 'Costruiamo qualcosa insieme',
    subtitle:
      'Cerchi uno sviluppatore per stage, ruolo junior o collaborazione su un progetto? Mi farebbe piacere sentirti.',
    email: 'E-mail',
    phone: 'Telefono',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'Tutti i diritti riservati.',
  },
};

export default it;
