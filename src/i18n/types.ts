export type Locale = 'en' | 'sv' | 'sq';

export const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'sv', label: 'Svenska' },
  { code: 'sq', label: 'Shqip' },
];

export interface Translations {
  nav: {
    about: string;
    projects: string;
    references: string;
    contact: string;
    github: string;
  };
  hero: {
    greeting: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
    location: string;
    status: string;
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
