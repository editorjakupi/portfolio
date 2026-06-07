import type { Translations } from '../types';

const fr: Translations = {
  nav: {
    about: 'À propos',
    projects: 'Projets',
    references: 'Références',
    contact: 'Contact',
    github: 'GitHub',
    cv: 'CV',
  },
  hero: {
    greeting: 'Bonjour, je suis Editor Jakupi',
    titleLine1: 'Développeur Full-Stack &',
    titleLine2: 'Spécialiste IA',
    subtitle:
      'Développeur logiciel basé à Halmstad, Suède. Je crée des applications web full-stack, des outils IA et des API robustes — des assistants restaurant aux plateformes podcast, en passant par les pipelines ML et les systèmes .NET testés.',
    viewWork: 'Voir mon travail',
    getInTouch: 'Me contacter',
    downloadCv: 'Télécharger le CV',
    location: 'Basé à Halmstad, SE',
    status: 'Ouvert aux opportunités',
  },
  about: {
    label: 'À propos',
    title: 'Des entrepôts au code de production.',
    p1:
      'Avant le développement logiciel, j\'ai travaillé en entrepôt, dans la surveillance du stationnement et le support IT — des rôles qui m\'ont appris la discipline, le dépannage sous pression et la fiabilité. Cet état d\'esprit pratique guide aujourd\'hui ma façon d\'écrire du code : structuré, testé et conçu pour de vrais utilisateurs.',
    p2:
      'Je termine actuellement ma formation orientée IA à la NBI Handelsakademin (diplôme en juin 2026) en parallèle d\'études d\'ingénierie informatique à l\'université de Halmstad. Stages LIA chez PodManager.AI (plateforme audio/IA full-stack) et Swiiftly (assistant IA restaurant avec RAG, OCR et gouvernance).',
    skillsTitle: 'Compétences techniques',
    skillGroups: [
      {
        title: 'Langages',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend & mobile',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend & APIs',
        items: ['Node.js', 'FastAPI', '.NET', 'REST APIs', 'Express'],
      },
      {
        title: 'IA & données',
        items: ['Machine Learning', 'RAG', 'Intégration LLM', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Outils & DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Postman', 'HTTPie', 'VS Code', 'JetBrains', 'Scrum'],
      },
      {
        title: 'Temps réel & cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
    ],
  },
  projects: {
    label: 'Projets',
    title: 'Travaux sélectionnés',
    subtitle: 'Cliquez sur une carte pour ouvrir l\'étude de cas complète. Tous les dépôts publics GitHub sont listés.',
    readMore: 'En savoir plus',
    private: 'Privé',
    filterAll: 'Tous',
    filterFeatured: 'Sélection',
    filterCourse: 'Cours & apprentissage',
  },
  modal: {
    highlights: 'Points clés',
    techStack: 'Stack technique',
    viewGithub: 'Voir sur GitHub',
    liveDemo: 'Démo live',
    privateRepo: 'Dépôt privé — code source disponible sur demande.',
    close: 'Fermer',
  },
  references: {
    label: 'Références',
    title: 'Personnes avec qui j\'ai travaillé',
    subtitle: 'Coordonnées disponibles sur demande — contactez-moi par e-mail.',
  },
  contact: {
    label: 'Contact',
    title: 'Construisons quelque chose ensemble',
    subtitle:
      'Vous cherchez un développeur pour un stage, un poste junior ou une collaboration ? Écrivez-moi.',
    email: 'E-mail',
    phone: 'Téléphone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
};

export default fr;
