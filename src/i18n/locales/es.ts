import type { Translations } from '../types';

const es: Translations = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    references: 'Referencias',
    contact: 'Contacto',
    github: 'GitHub',
    cv: 'CV',
  },
  hero: {
    greeting: 'Hola, soy Editor Jakupi',
    titleLine1: 'Desarrollador Full-Stack y',
    titleLine2: 'Especialista en IA',
    subtitle:
      'Desarrollador de software en Halmstad, Suecia. Creo aplicaciones web full-stack, herramientas con IA y APIs robustas — desde asistentes para restaurantes y plataformas de podcast hasta pipelines ML y sistemas .NET probados.',
    viewWork: 'Ver mi trabajo',
    getInTouch: 'Contactar',
    downloadCv: 'Descargar CV',
    location: 'Ubicado en Halmstad, SE',
    status: 'Abierto a oportunidades',
    languages: 'Sueco · inglés · albanés (C2)',
  },
  about: {
    label: 'Sobre mí',
    title: 'Del almacén al código de producción.',
    p1:
      'Antes del desarrollo de software trabajé en almacenes, control de aparcamiento y soporte IT — roles que me enseñaron disciplina, resolución de problemas bajo presión y entrega fiable. Esa mentalidad práctica define hoy cómo escribo código: estructurado, probado y pensado para usuarios reales.',
    p2:
      'He completado mi formación profesional superior como desarrollador de software con enfoque en IA en NBI Handelsakademin (junio 2026) y un año del M.Sc. en ingeniería informática en la Universidad de Halmstad (2021–2022). Prácticas LIA en PodManager.AI y Swiiftly.',
    skillsTitle: 'Habilidades técnicas',
    skillGroups: [
      {
        title: 'Lenguajes',
        items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend y móvil',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'jQuery'],
      },
      {
        title: 'Backend y APIs',
        items: ['Node.js', 'FastAPI', '.NET', 'REST APIs', 'Express'],
      },
      {
        title: 'IA y datos',
        items: ['Machine Learning', 'RAG', 'Integración LLM', 'Whisper', 'Azure Speech', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Herramientas y DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Git Bash', 'Postman', 'HTTPie', 'VS Code', 'JetBrains Toolbox', 'Cursor', 'Scrum', 'CI/CD'],
      },
      {
        title: 'Tiempo real y cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
      {
        title: 'Otros',
        items: ['Soporte IT', 'Microsoft Office'],
      },
    ],
  },
  projects: {
    label: 'Proyectos',
    title: 'Trabajo seleccionado',
    subtitle: 'Haz clic en cualquier tarjeta para abrir el caso de estudio completo. Todos los repos públicos de GitHub están listados.',
    readMore: 'Leer más',
    private: 'Privado',
    filterAll: 'Todos',
    filterFeatured: 'Destacados',
    filterCourse: 'Curso y aprendizaje',
  },
  modal: {
    highlights: 'Aspectos destacados',
    techStack: 'Stack tecnológico',
    viewGithub: 'Ver en GitHub',
    liveDemo: 'Demo en vivo',
    privateRepo: 'Repositorio privado — código fuente disponible bajo solicitud.',
    close: 'Cerrar',
  },
  references: {
    label: 'Referencias',
    title: 'Personas con las que he trabajado',
    subtitle: 'Datos de contacto disponibles bajo solicitud — escríbeme por correo.',
    languagesLabel: 'Idiomas',
  },
  contact: {
    label: 'Contacto',
    title: 'Construyamos algo juntos',
    subtitle:
      '¿Buscas un desarrollador para prácticas, un puesto junior o colaboración en un proyecto? No dudes en contactarme.',
    email: 'Correo',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Ubicación',
    languages: 'Idiomas',
    drivingLicence: 'Carnet de conducir',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};

export default es;
