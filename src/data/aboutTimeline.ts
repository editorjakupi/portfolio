import { nbiDiploma, nbiEuropass } from './credentials';

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  verifyUrl?: string;
  verifyLabel?: string;
  europassUrl?: string;
  europassLabel?: string;
};

function withNbiCredentials(item: TimelineItem): TimelineItem {
  return {
    ...item,
    verifyUrl: nbiDiploma.url,
    verifyLabel: nbiDiploma.verifyLabel,
    europassUrl: nbiEuropass.pdfEn,
    europassLabel: nbiEuropass.timelineLabel,
  };
}

/** Synced with public/cv-data.js — experience section (English source; Google Translate handles UI). */
export const aboutExperience: TimelineItem[] = [
  { period: 'Mar 2026 – May 2026', title: 'AI Intern — Swiiftly POS', place: 'Swiiftly · Denmark' },
  {
    period: 'Sep 2025 – Dec 2025',
    title: 'Software Developer — PodManager.AI',
    place: 'The Knowledge Formula · Sweden',
  },
  {
    period: 'Jul 2022 – May 2024',
    title: 'IT Support Technician — Simple Solutions IT',
    place: 'Halmstad, Sweden · Part-time / on demand',
  },
  { period: 'Sep 2018 – Jul 2021', title: 'Parking Officer — Aimo Park', place: 'Halmstad, Sweden' },
  {
    period: 'Sep 2015 – Jul 2018',
    title: 'Warehouse Worker — Biltema',
    place: 'Halmstad, Sweden · Part-time / on-call',
  },
];

/** Synced with public/cv-data.js — education section */
export const aboutEducation: TimelineItem[] = [
  withNbiCredentials({
    period: 'Aug 2024 – Jun 2026',
    title: 'Higher Vocational Education — Software Developer specialized in AI, NBI Handelsakademin',
    place: 'Halmstad, Sweden',
  }),
  {
    period: 'Aug 2021 – Jun 2022',
    title: 'M.Sc. Computer Engineering — Halmstad University',
    place: 'Halmstad, Sweden',
  },
  {
    period: 'Jun 2021',
    title: 'Parking Surveillance & Security Guard Training — Väktarskolan',
    place: 'Göteborg, Sweden',
  },
  {
    period: 'Aug 2011 – Jun 2014',
    title: 'High School Diploma — Natural Sciences, Sannarpsgymnasiet',
    place: 'Halmstad, Sweden',
  },
];
