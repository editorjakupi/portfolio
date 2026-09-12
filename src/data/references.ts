export interface Reference {
  id: string;
  name: string;
  role: string;
  context: string;
  languages: string[];
}

export function getReferenceRole(ref: Reference) {
  return ref.role;
}

export function getReferenceContext(ref: Reference) {
  return ref.context;
}

export const references: Reference[] = [
  {
    id: 'prasad',
    name: 'Prasad Chougule',
    role: 'Mentor · Swiiftly LIA Internship',
    context: 'Supervisor and mentor during my second LIA internship at Swiiftly.',
    languages: ['EN', 'DA'],
  },
  {
    id: 'sebbe',
    name: 'Sebastian Larsson',
    role: 'Classmate · NBI Handelsakademin',
    context:
      'Fellow student at NBI Handelsakademin — frequent collaborator on projects and coursework in software development with AI.',
    languages: ['SV', 'EN'],
  },
];
