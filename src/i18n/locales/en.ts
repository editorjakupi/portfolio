import type { Translations } from '../types';

const en: Translations = {
  nav: {
    about: 'About',
    projects: 'Projects',
    references: 'References',
    contact: 'Contact',
    github: 'GitHub',
    cv: 'CV',
  },
  hero: {
    greeting: "Hi, I'm Editor Jakupi",
    titleLine1: 'Full-Stack Developer &',
    titleLine2: 'AI Specialist',
    subtitle:
      'Software developer based in Halmstad, Sweden. I build full-stack web applications, AI-powered tools, and robust APIs — from restaurant assistants and podcast platforms to ML pipelines and tested .NET systems.',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    downloadCv: 'Download CV',
    location: 'Based in Halmstad, SE',
    status: 'Open to opportunities',
  },
  about: {
    label: 'About',
    title: 'From warehouse floors to production code.',
    p1:
      'Before software development, I worked in warehouses, parking enforcement, and IT support — roles that taught me discipline, troubleshooting under pressure, and how to deliver reliably. That hands-on mindset now shapes how I write code: structured, tested, and built for real users.',
    p2:
      'I have completed my higher vocational education in software development with AI at NBI Handelsakademin (June 2026) and one year of the M.Sc. in Computer Engineering program at Halmstad University (2021–2022). LIA internships at PodManager.AI and Swiiftly.',
    skillsTitle: 'Technical skills',
    skillGroups: [
      {
        title: 'Languages',
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
        title: 'AI & Data',
        items: ['Machine Learning', 'RAG', 'LLM Integration', 'TensorFlow/Keras', 'Streamlit'],
      },
      {
        title: 'Tools & DevOps',
        items: ['Docker', 'Git', 'GitHub', 'Postman', 'HTTPie', 'VS Code', 'JetBrains', 'Scrum'],
      },
      {
        title: 'Real-time & Cloud',
        items: ['WebRTC', 'Socket.io', 'MongoDB', 'PostgreSQL', 'Azure Blob Storage'],
      },
    ],
  },
  projects: {
    label: 'Projects',
    title: 'Selected work',
    subtitle: 'Click any card to open the full case study. All public repos from my GitHub are listed.',
    readMore: 'Read more',
    private: 'Private',
    filterAll: 'All',
    filterFeatured: 'Featured',
    filterCourse: 'Course & learning',
  },
  modal: {
    highlights: 'Highlights',
    techStack: 'Tech stack',
    viewGithub: 'View on GitHub',
    liveDemo: 'Live demo',
    privateRepo: 'Private repository — source available on request.',
    close: 'Close',
  },
  references: {
    label: 'References',
    title: "People I've worked with",
    subtitle: 'Contact details available on request — reach out via email.',
  },
  contact: {
    label: 'Contact',
    title: "Let's build something together",
    subtitle:
      'Looking for a developer for an internship, junior role, or project collaboration? Feel free to get in touch.',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

export default en;
