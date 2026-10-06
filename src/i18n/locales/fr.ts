import type { Translations } from '../types';

const fr: Translations = {
  nav: {
    about: 'À propos',
    projects: 'Projets',
    references: 'Références',
    contact: 'Contact',
    github: 'GitHub',
    linkedin: 'LinkedIn',
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
    location: 'Basé à Halmstad, Suède',
    status: 'Ouvert aux opportunités',
    languages: 'Suédois · anglais · albanais',
  },
  about: {
    label: 'À propos',
    title: 'Des entrepôts au code de production.',
    p1:
      'Avant le développement logiciel, j\'ai travaillé en entrepôt, dans la surveillance du stationnement et le support IT — des rôles qui m\'ont appris la discipline, le dépannage sous pression et la fiabilité. Cet état d\'esprit pratique guide aujourd\'hui ma façon d\'écrire du code : structuré, testé et conçu pour de vrais utilisateurs.',
    p2:
      'Après une année en M.Sc. génie informatique à l\'université de Halmstad (2021–2022), j\'ai terminé ma formation professionnelle supérieure de développeur logiciel orientée IA à la NBI Handelsakademin (juin 2026), incluant les stages LIA chez PodManager.AI et Swiiftly.',
    p3:
      'En dehors du développement, je pratique le trading retail sur matières premières — analyse de marché, discipline du risque et prise de décision structurée dans l\'incertitude.',
    skillsTitle: 'Compétences techniques',
    timelineTitle: 'Expérience',
    educationTitle: 'Formation',
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
        items: ['Machine Learning', 'RAG', 'Intégration LLM', 'Whisper', 'Azure Speech', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Outils & DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Git Bash', 'Postman', 'HTTPie', 'VS Code', 'JetBrains Toolbox', 'Cursor', 'Scrum', 'CI/CD'],
      },
      {
        title: 'Temps réel & cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
      {
        title: 'Autre',
        items: ['Support IT', 'Microsoft Office'],
      },
      {
        title: 'Au-delà du code',
        items: ['Matières premières', 'Analyse de marché', 'Discipline du risque'],
      },
    ],
  },
  projects: {
    label: 'Projets',
    title: 'Travaux sélectionnés',
    subtitle: 'Filtrez selon le type de travail — apps live personnelles, LIA, projets de groupe, matériel de cours ou exercices.',
    readMore: 'En savoir plus',
    private: 'Privé',
    filterAll: 'Tous',
    filterOwnLive: 'Perso & live',
    filterLia: 'LIA',
    filterGroup: 'Travail de groupe',
    filterCourseMaterial: 'Matériel de cours',
    filterLearning: 'Apprentissage',
    filterAi: 'AI (ML & DL)',
    filterAiAll: 'Toute l IA',
    filterAiMl: 'ML',
    filterAiDl: 'DL',
    filterAiLlm: 'LLM & agents',
    filterLangPython: 'Python',
    filterLangCsharp: 'C#',
    filterLangJavascript: 'JavaScript',
    filterLangJava: 'Java',
    filterDescAll: 'Tout en une liste — apps perso, LIA, travail de groupe, cours et exercices.',
    filterDescOwnLive: 'Produits que j ai construits et heberges, ouverts en live dans le navigateur.',
    filterDescLia: 'Travail de LIA livre dans des plateformes d entreprise.',
    filterDescGroup: 'Projets d equipe avec des camarades pendant la formation.',
    filterDescCourseMaterial: 'Modules de cours, parcours langages et controles de connaissances.',
    filterDescLearning: 'Petits exercices d apprentissage et pratique de tests.',
    filterDescAi: 'Travaux lies a l IA — ML classique, deep learning et LLM/RAG — aussi visibles ailleurs.',
    filterDescAiMl: 'Machine learning classique : modeles tabulaires, prediction et aide a la decision.',
    filterDescAiDl: 'Deep learning : reseaux de neurones, CNN, vision et livrables de cours.',
    filterDescAiLlm: 'LLM, RAG, ASR et assistants — chat, retrieval et parole.',
    filterDescLangPython: 'Projets qui utilisent Python (et libs data/ML) de facon significative.',
    filterDescLangCsharp: 'Projets qui utilisent C# / .NET de facon significative.',
    filterDescLangJavascript: 'Projets qui utilisent JavaScript ou TypeScript (React, Next.js, Node, ...).',
    filterDescLangJava: 'Projets qui utilisent Java de facon significative.',
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
    languagesLabel: 'Parle',
  },
  contact: {
    label: 'Contact',
    title: 'Construisons quelque chose ensemble',
    subtitle:
      "Vous cherchez un développeur pour un stage, un poste junior ou une collaboration projet ? N'hésitez pas à me contacter.",
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
