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
    linkedin: string;
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
    p3: string;
    skillsTitle: string;
    timelineTitle: string;
    educationTitle: string;
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
    filterOwnLive: string;
    filterLia: string;
    filterGroup: string;
    filterCourseMaterial: string;
    filterLearning: string;
    filterAi: string;
    filterAiAll: string;
    filterAiMl: string;
    filterAiDl: string;
    filterAiLlm: string;
    filterLangPython: string;
    filterLangCsharp: string;
    filterLangJavascript: string;
    filterLangJava: string;
    filterDatabases: string;
    filterDescAll: string;
    filterDescOwnLive: string;
    filterDescLia: string;
    filterDescGroup: string;
    filterDescCourseMaterial: string;
    filterDescLearning: string;
    filterDescAi: string;
    filterDescAiMl: string;
    filterDescAiDl: string;
    filterDescAiLlm: string;
    filterDescLangPython: string;
    filterDescLangCsharp: string;
    filterDescLangJavascript: string;
    filterDescLangJava: string;
    filterDescDatabases: string;
    filterSubAll: string;
    filterSubProducts: string;
    filterSubData: string;
    filterSubSwiiftly: string;
    filterSubPodmanager: string;
    filterSubCrm: string;
    filterSubDotnetApps: string;
    filterSubAiCourse: string;
    filterSubLangCourses: string;
    filterSubTesting: string;
    filterSubReact: string;
    filterSubCsharpBasics: string;
    filterSubLive: string;
    filterSubCourse: string;
    filterSubApps: string;
    filterSubLearning: string;
    filterSubReactLib: string;
    filterSubScikit: string;
    filterSubTensorflow: string;
    filterSubStreamlit: string;
    filterSubPandas: string;
    filterSubAspnet: string;
    filterSubEfcore: string;
    filterSubXunit: string;
    filterSubSelenium: string;
    filterSubNextjs: string;
    filterSubNodejs: string;
    filterSubTypescript: string;
    filterSubPostgresql: string;
    filterSubSqlite: string;
    filterSubMongodb: string;
    filterSubDocker: string;
    filterDescSubProducts: string;
    filterDescSubData: string;
    filterDescSubSwiiftly: string;
    filterDescSubPodmanager: string;
    filterDescSubCrm: string;
    filterDescSubDotnetApps: string;
    filterDescSubAiCourse: string;
    filterDescSubLangCourses: string;
    filterDescSubTesting: string;
    filterDescSubReact: string;
    filterDescSubCsharpBasics: string;
    filterDescSubLive: string;
    filterDescSubCourse: string;
    filterDescSubApps: string;
    filterDescSubLearning: string;
    filterDescSubReactLib: string;
    filterDescSubScikit: string;
    filterDescSubTensorflow: string;
    filterDescSubStreamlit: string;
    filterDescSubPandas: string;
    filterDescSubAspnet: string;
    filterDescSubEfcore: string;
    filterDescSubXunit: string;
    filterDescSubSelenium: string;
    filterDescSubNextjs: string;
    filterDescSubNodejs: string;
    filterDescSubTypescript: string;
    filterDescSubPostgresql: string;
    filterDescSubSqlite: string;
    filterDescSubMongodb: string;
    filterDescSubDocker: string;
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
