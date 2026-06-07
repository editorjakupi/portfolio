import type { Locale } from '../i18n/types';
import { pickLocalized } from '../i18n/utils';

export interface Reference {
  id: string;
  name: string;
  role: Partial<Record<Locale, string>> & { en: string };
  context: Partial<Record<Locale, string>> & { en: string };
  languages: string;
}

export function getReferenceRole(ref: Reference, locale: Locale) {
  return pickLocalized(ref.role, locale);
}

export function getReferenceContext(ref: Reference, locale: Locale) {
  return pickLocalized(ref.context, locale);
}

export const references: Reference[] = [
  {
    id: 'antonio',
    name: 'Antonio Prgomet',
    role: {
      en: 'AI Teacher · NBI Handelsakademin',
      sv: 'AI-lärare · NBI Handelsakademin',
      sq: 'Mësues AI · NBI Handelsakademin',
    },
    context: {
      en: 'Teacher and mentor during software development with AI studies at NBI Handelsakademin.',
      sv: 'Lärare och mentor under utbildningen i mjukvaruutveckling med AI vid NBI Handelsakademin.',
      sq: 'Mësues dhe mentor gjatë studimeve të zhvillimit të softuerit me AI në NBI Handelsakademin.',
    },
    languages: 'SV · EN',
  },
  {
    id: 'prasad',
    name: 'Prasad Chougule',
    role: {
      en: 'Mentor · Swiiftly LIA Internship',
      sv: 'Mentor · Swiiftly LIA-praktik',
      sq: 'Mentor · Praktikë LIA Swiiftly',
    },
    context: {
      en: 'Supervisor and mentor during my second LIA internship at Swiiftly.',
      sv: 'Handledare och mentor under min andra LIA-praktik hos Swiiftly.',
      sq: 'Supervizor dhe mentor gjatë praktikës së dytë LIA në Swiiftly.',
    },
    languages: 'EN · DA',
  },
  {
    id: 'sebbe',
    name: 'Sebastian Larsson',
    role: {
      en: 'Classmate · NBI Handelsakademin',
      sv: 'Klasskamrat · NBI Handelsakademin',
      sq: 'Shok klasse · NBI Handelsakademin',
    },
    context: {
      en: 'Fellow student at NBI Handelsakademin — frequent collaborator on projects and coursework in software development with AI.',
      sv: 'Studiekamrat vid NBI Handelsakademin — tätt samarbete kring projekt och kursarbete inom mjukvaruutveckling med AI.',
      sq: 'Student bashkë në NBI Handelsakademin — bashkëpunim i shpeshtë në projekte dhe punë kursi për zhvillimin e softuerit me AI.',
    },
    languages: 'SV · EN',
  },
];
