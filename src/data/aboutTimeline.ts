import type { Locale } from '../i18n/types';
import { europassUrlForLocale, nbiDiploma, nbiEuropass } from './credentials';
import { vu1Certificate } from './vu1Certificate';

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  verifyUrl?: string;
  verifyLabel?: string;
  europassUrl?: string;
  europassLabel?: string;
  linkUrl?: string;
  linkLabel?: string;
};

function withNbiCredentials(locale: Locale, item: TimelineItem): TimelineItem {
  return {
    ...item,
    verifyUrl: nbiDiploma.url,
    verifyLabel: nbiDiploma.verifyLabel[locale],
    europassUrl: europassUrlForLocale(locale),
    europassLabel: nbiEuropass.timelineLabel[locale],
  };
}

function withVu1Certificate(locale: Locale, item: TimelineItem): TimelineItem {
  return {
    ...item,
    verifyUrl: vu1Certificate.url,
    verifyLabel: vu1Certificate.label[locale],
  };
}

/** Synced with public/cv-data.js — experience section */
export const aboutExperience: Record<Locale, TimelineItem[]> = {
  en: [
    {
      period: 'Oct 2026 – Present',
      title: 'Founder — Pi93 AB',
      place: 'Halmstad, Sweden · Own company',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'Mar 2026 – May 2026', title: 'AI Intern — Swiiftly POS', place: 'Swiiftly · Denmark' },
    {
      period: 'Sep 2025 – Dec 2025',
      title: 'Software Developer — PodManager.AI',
      place: 'The Knowledge Formula · Sweden',
    },
    { period: 'Sep 2018 – Jul 2021', title: 'Parking Officer — Aimo Park', place: 'Halmstad, Sweden' },
  ],
  sv: [
    {
      period: 'okt 2026 – nu',
      title: 'Grundare — Pi93 AB',
      place: 'Halmstad · Eget bolag',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'mar 2026 – maj 2026', title: 'AI-praktikant — Swiiftly POS', place: 'Swiiftly · Danmark' },
    {
      period: 'sep 2025 – dec 2025',
      title: 'Mjukvaruutvecklare — PodManager.AI',
      place: 'The Knowledge Formula · Sverige',
    },
    { period: 'sep 2018 – juli 2021', title: 'Parkeringsvakt — Aimo Park', place: 'Halmstad' },
  ],
  de: [
    {
      period: 'Okt 2026 – heute',
      title: 'Gründer — Pi93 AB',
      place: 'Halmstad · Eigenes Unternehmen',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'Mär 2026 – Mai 2026', title: 'KI-Praktikant — Swiiftly POS', place: 'Swiiftly · Dänemark' },
    {
      period: 'Sep 2025 – Dez 2025',
      title: 'Softwareentwickler — PodManager.AI',
      place: 'The Knowledge Formula · Schweden',
    },
    { period: 'Sep 2018 – Jul 2021', title: 'Parkraumüberwachung — Aimo Park', place: 'Halmstad' },
  ],
  fr: [
    {
      period: 'Oct 2026 – aujourd’hui',
      title: 'Fondateur — Pi93 AB',
      place: 'Halmstad · Entreprise propre',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'Mar 2026 – Mai 2026', title: 'Stagiaire IA — Swiiftly POS', place: 'Swiiftly · Danemark' },
    {
      period: 'Sep 2025 – Déc 2025',
      title: 'Développeur — PodManager.AI',
      place: 'The Knowledge Formula · Suède',
    },
    { period: 'Sep 2018 – Jul 2021', title: 'Agent de surveillance — Aimo Park', place: 'Halmstad' },
  ],
  es: [
    {
      period: 'Oct 2026 – presente',
      title: 'Fundador — Pi93 AB',
      place: 'Halmstad · Empresa propia',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'Mar 2026 – May 2026', title: 'Prácticas IA — Swiiftly POS', place: 'Swiiftly · Dinamarca' },
    {
      period: 'Sep 2025 – Dic 2025',
      title: 'Desarrollador — PodManager.AI',
      place: 'The Knowledge Formula · Suecia',
    },
    { period: 'Sep 2018 – Jul 2021', title: 'Control de aparcamiento — Aimo Park', place: 'Halmstad' },
  ],
  it: [
    {
      period: 'Ott 2026 – oggi',
      title: 'Fondatore — Pi93 AB',
      place: 'Halmstad · Azienda propria',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'Mar 2026 – Mag 2026', title: 'Tirocinio IA — Swiiftly POS', place: 'Swiiftly · Danimarca' },
    {
      period: 'Set 2025 – Dic 2025',
      title: 'Sviluppatore — PodManager.AI',
      place: 'The Knowledge Formula · Svezia',
    },
    { period: 'Set 2018 – Lug 2021', title: 'Addetto parcheggi — Aimo Park', place: 'Halmstad' },
  ],
  pl: [
    {
      period: 'Paź 2026 – teraz',
      title: 'Założyciel — Pi93 AB',
      place: 'Halmstad · Własna firma',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'Mar 2026 – Maj 2026', title: 'Staż AI — Swiiftly POS', place: 'Swiiftly · Dania' },
    {
      period: 'Wrz 2025 – Gru 2025',
      title: 'Programista — PodManager.AI',
      place: 'The Knowledge Formula · Szwecja',
    },
    { period: 'Wrz 2018 – Lip 2021', title: 'Kontrola parkowania — Aimo Park', place: 'Halmstad' },
  ],
  sq: [
    {
      period: 'tet 2026 – tani',
      title: 'Themelues — Pi93 AB',
      place: 'Halmstad · Kompani e vetë',
      linkUrl: 'https://pi93.se',
      linkLabel: 'Pi93 AB',
    },
    { period: 'mar 2026 – maj 2026', title: 'Praktikant AI — Swiiftly POS', place: 'Swiiftly · Danimarkë' },
    {
      period: 'sht 2025 – dhj 2025',
      title: 'Zhvillues Softueri — PodManager.AI',
      place: 'The Knowledge Formula · Suedi',
    },
    { period: 'sht 2018 – kor 2021', title: 'Roje parkimi — Aimo Park', place: 'Halmstad' },
  ],
};

/** Synced with public/cv-data.js — education section */
export const aboutEducation: Record<Locale, TimelineItem[]> = {
  en: [
    withNbiCredentials('en', {
      period: 'Aug 2024 – Jun 2026',
      title: 'Higher Vocational Education — Software Developer specialized in AI, NBI Handelsakademin',
      place: 'Halmstad, Sweden',
    }),
    {
      period: 'Aug 2021 – Jun 2022',
      title: 'M.Sc. Computer Engineering — Halmstad University',
      place: 'Halmstad, Sweden',
    },
    withVu1Certificate('en', {
      period: 'Jun 2021',
      title: 'Parking Surveillance & Security Guard Training — Väktarskolan',
      place: 'Göteborg, Sweden',
    }),
    {
      period: 'Aug 2011 – Jun 2014',
      title: 'High School Diploma — Natural Sciences, Sannarpsgymnasiet',
      place: 'Halmstad, Sweden',
    },
  ],
  sv: [
    withNbiCredentials('sv', {
      period: 'aug 2024 – jun 2026',
      title: 'Yrkeshögskoleexamen — Mjukvaruutvecklare med AI, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    {
      period: 'aug 2021 – jun 2022',
      title: 'Civilingenjör datateknik — Halmstads högskola',
      place: 'Halmstad',
    },
    withVu1Certificate('sv', {
      period: 'jun 2021',
      title: 'Parkeringsövervakning & väktarutbildning — Väktarskolan',
      place: 'Göteborg',
    }),
    {
      period: 'aug 2011 – jun 2014',
      title: 'Gymnasieexamen — Naturvetenskap, Sannarpsgymnasiet',
      place: 'Halmstad',
    },
  ],
  de: [
    withNbiCredentials('de', {
      period: 'Aug 2024 – Jun 2026',
      title: 'Higher Vocational Education — Softwareentwickler KI, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    { period: 'Aug 2021 – Jun 2022', title: 'M.Sc. Computertechnik — Universität Halmstad', place: 'Halmstad' },
    withVu1Certificate('de', {
      period: 'Jun 2021',
      title: 'Sicherheitsausbildung — Väktarskolan',
      place: 'Göteborg',
    }),
    { period: 'Aug 2011 – Jun 2014', title: 'Gymnasium — Naturwissenschaften, Sannarpsgymnasiet', place: 'Halmstad' },
  ],
  fr: [
    withNbiCredentials('fr', {
      period: 'Aoû 2024 – Jun 2026',
      title: 'Formation professionnelle supérieure — Développeur IA, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    { period: 'Aoû 2021 – Jun 2022', title: 'M.Sc. génie informatique — Université de Halmstad', place: 'Halmstad' },
    withVu1Certificate('fr', {
      period: 'Jun 2021',
      title: 'Formation sécurité — Väktarskolan',
      place: 'Göteborg',
    }),
    { period: 'Aoû 2011 – Jun 2014', title: 'Baccalauréat — Sciences naturelles, Sannarpsgymnasiet', place: 'Halmstad' },
  ],
  es: [
    withNbiCredentials('es', {
      period: 'Ago 2024 – Jun 2026',
      title: 'Formación profesional superior — Desarrollador IA, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    { period: 'Ago 2021 – Jun 2022', title: 'M.Sc. ingeniería informática — Universidad de Halmstad', place: 'Halmstad' },
    withVu1Certificate('es', {
      period: 'Jun 2021',
      title: 'Formación seguridad — Väktarskolan',
      place: 'Göteborg',
    }),
    { period: 'Ago 2011 – Jun 2014', title: 'Bachillerato — Ciencias naturales, Sannarpsgymnasiet', place: 'Halmstad' },
  ],
  it: [
    withNbiCredentials('it', {
      period: 'Ago 2024 – Giu 2026',
      title: 'Formazione professionale superiore — Sviluppatore IA, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    { period: 'Ago 2021 – Giu 2022', title: 'M.Sc. ingegneria informatica — Università di Halmstad', place: 'Halmstad' },
    withVu1Certificate('it', {
      period: 'Giu 2021',
      title: 'Formazione sicurezza — Väktarskolan',
      place: 'Göteborg',
    }),
    { period: 'Ago 2011 – Giu 2014', title: 'Diploma scuola superiore — Scienze naturali, Sannarpsgymnasiet', place: 'Halmstad' },
  ],
  pl: [
    withNbiCredentials('pl', {
      period: 'Sie 2024 – Cze 2026',
      title: 'Wykształcenie zawodowe wyższe — Programista AI, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    { period: 'Sie 2021 – Cze 2022', title: 'M.Sc. inżynieria komputerowa — Uniw. Halmstad', place: 'Halmstad' },
    withVu1Certificate('pl', {
      period: 'Cze 2021',
      title: 'Szkolenie ochrony — Väktarskolan',
      place: 'Göteborg',
    }),
    { period: 'Sie 2011 – Cze 2014', title: 'Matura — Nauki przyrodnicze, Sannarpsgymnasiet', place: 'Halmstad' },
  ],
  sq: [
    withNbiCredentials('sq', {
      period: 'gus 2024 – qer 2026',
      title: 'Arsim i Lartë Profesional — Zhvillues Softueri me AI, NBI Handelsakademin',
      place: 'Halmstad',
    }),
    { period: 'gus 2021 – qer 2022', title: 'M.Sc. Inxhinieri Kompjuterike — Universiteti i Halmstad', place: 'Halmstad' },
    withVu1Certificate('sq', {
      period: 'qer 2021',
      title: 'Trajnim sigurie & parkimi — Väktarskolan',
      place: 'Göteborg',
    }),
    { period: 'gus 2011 – qer 2014', title: 'Diplomë shkolle mesme — Shkenca natyrore, Sannarpsgymnasiet', place: 'Halmstad' },
  ],
};
