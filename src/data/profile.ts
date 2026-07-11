export const identity = {
  name: 'Jovan Simonoski',
  headline: 'Junior TA @ FCSE UKIM | Software Engineer @ CodeChem',
  location: 'Skopje, North Macedonia',
  emails: ['jovan.simonoski@finki.ukim.mk', 'jovan.simonoski@codechem.com'],
  github: 'https://github.com/JovanSimonoski',
};

export interface CourseGroup {
  label?: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  type?: string;
  location?: string;
  description?: string;
  courses?: CourseGroup[];
  repo?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    org: 'CodeChem Inc',
    period: 'Jun 2026 - Present',
    location: 'Skopje, North Macedonia',
  },
  {
    role: 'Junior Teaching Assistant',
    org: 'Faculty of Computer Science and Engineering (FCSE / FINKI), Skopje',
    type: 'Full-time',
    period: 'Oct 2025 - Present',
    location: 'Skopje, North Macedonia · On-site',
    description: 'Conducting auditory and laboratory exercises for the following courses:',
    courses: [
      {
        label: 'Winter semester 2025/2026',
        items: ['Computer Networks and Security', 'System Administration', 'Cloud Computing'],
      },
      {
        label: 'Summer semester 2025/2026',
        items: [
          'Computer Networks Design',
          'Network Administration',
          'Virtualization',
          'Digital Forensics',
        ],
      },
    ],
  },
  {
    role: 'WP5 – T5 Trust & Identity Incubator Member',
    org: 'GÉANT GN5-2',
    type: 'Part-time',
    period: 'Oct 2025 - Present',
    description: 'Software implementation in the area of OpenID Connect.',
  },
  {
    role: 'Trust & Identity Mentorship Programme (TIM) Student Intern',
    org: 'GÉANT GN5-2',
    type: 'Part-time',
    period: 'Mar 2025 - Sep 2025',
    description: 'Built “Bona Fide”, a researcher verification system.',
    repo: 'https://github.com/JovanSimonoski/GEANT-TIM-BonaFide',
  },
  {
    role: 'Laboratory Tutor',
    org: 'FCSE (FINKI), Skopje',
    type: 'Part-time',
    period: 'Oct 2024 - Jul 2025',
    location: 'Skopje, North Macedonia · On-site',
    description: 'Assisted in the laboratory exercises for the following courses:',
    courses: [
      {
        items: [
          'Information Security',
          'Digital Forensics',
          'Cryptography',
          'Computer Networks',
          'System Administration',
          'Object-Oriented Programming',
        ],
      },
    ],
  },
  {
    role: 'Intern',
    org: 'Digital Security Department, iCIS, Radboud University',
    period: 'Aug 2024 - Oct 2024',
    location: 'Nijmegen, Netherlands · On-site',
    description:
      'Software implementation and optimization in Post-Quantum Cryptography, mentored by PhD Simona Samardjiska.',
    repo: 'https://github.com/JovanSimonoski/CrossbredAlgorithm',
  },
];

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  thesis?: string;
}

export const education: EducationItem[] = [
  {
    school: 'FCSE (FINKI), Ss. Cyril and Methodius University, Skopje',
    degree: 'Master’s degree - Internet Technologies and Cyber Security',
    period: 'Oct 2025 - Present',
  },
  {
    school: 'FCSE (FINKI), Ss. Cyril and Methodius University, Skopje',
    degree: 'Bachelor’s degree - Internet, Networks and Security',
    period: 'Sep 2021 - Sep 2025',
    gpa: '9.88 / 10',
    thesis:
      '“Bona Fide? A Researcher Verification System” - mentored by PhD Filiposka Sonja, in collaboration with the TIM team of GÉANT GN5-2.',
  },
  {
    school: 'SOU “Car Samoil”',
    degree: 'Gymnasium - Natural Sciences & Mathematics (A)',
    period: '2017 - 2021',
  },
];

export interface Publication {
  authors: string[];
  title: string;
  venue: string;
}

export const publications: Publication[] = [
  {
    authors: ['Jovan Simonoski', 'Vojdan Kjorveziroski'],
    title: 'Classification and Analysis of Open-Source Gen-AI Penetration Testing Tools',
    venue: 'CIIT 2026',
  },
  {
    authors: ['Zorica Karapancheva', 'Jovan Simonoski', 'Marjan Gushev', 'Dimitar Mileski'],
    title: 'Ollama LLMs Serverless Deployment - Performance Evaluation Using LangChain',
    venue: 'CIIT 2025',
  },
];

export interface Project {
  name: string;
  description: string;
  href: string;
  tags: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    name: 'GEANT-TIM-BonaFide',
    description:
      'Researcher verification system built during the GÉANT TIM internship; also my bachelor thesis project.',
    href: 'https://github.com/JovanSimonoski/GEANT-TIM-BonaFide',
    tags: ['Trust & Identity', 'GÉANT GN5-2', 'Bachelor thesis'],
    icon: 'shield-check',
  },
  {
    name: 'CrossbredAlgorithm',
    description:
      'Post-quantum cryptography work - implementation and optimization of the Crossbred algorithm, from the Radboud University internship.',
    href: 'https://github.com/JovanSimonoski/CrossbredAlgorithm',
    tags: ['Post-Quantum Cryptography', 'Radboud iCIS', 'Research'],
    icon: 'key-round',
  },
];

export const certificates = [
  { name: 'Cybersecurity Essentials', issuer: 'Cisco', year: '2022' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', year: '2022' },
];

export const focusAreas = [
  'Trust & Identity',
  'Programming',
  'Data Engineering',
  'Information Security',
  'Penetration Testing',
  'CTF',
  'LLMs',
  'Cloud Computing',
  'Teaching',
];

export const languages = [
  { name: 'Macedonian', level: 'native' },
  { name: 'English', level: 'fluent' },
];
