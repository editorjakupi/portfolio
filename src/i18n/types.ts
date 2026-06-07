export type Locale = 'en' | 'de' | 'fr' | 'es' | 'it' | 'pl' | 'sv' | 'sq';

export const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'pl', label: 'Polski' },
  { code: 'sv', label: 'Svenska' },
  { code: 'sq', label: 'Shqip' },
];

export const LOCALE_STORAGE_KEY = 'portfolio-locale';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    references: string;
    contact: string;
    github: string;
    cv: string;
  };
  hero: {
    greeting: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
    downloadCv: string;
    location: string;
    status: string;
    languages: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    skillsTitle: string;
    skillGroups: {
      title: string;
      items: string[];
    }[];
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    readMore: string;
    private: string;
    filterAll: string;
    filterFeatured: string;
    filterCourse: string;
  };
  modal: {
    highlights: string;
    techStack: string;
    viewGithub: string;
    liveDemo: string;
    privateRepo: string;
    close: string;
  };
  references: {
    label: string;
    title: string;
    subtitle: string;
    languagesLabel: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  footer: {
    rights: string;
  };
}
