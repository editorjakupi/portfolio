import type { Locale } from '../i18n/types';

export type ProjectCategory = 'featured' | 'course';

export interface ProjectCopy {
  tagline: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  year: string;
  tech: string[];
  github?: string;
  demo?: string;
  isPrivate?: boolean;
  featured: boolean;
  category: ProjectCategory;
  accent: string;
  /** Optional local banner under /project-banners/{id}.png|jpg|webp */
  image?: string;
  /** CSS object-position for cropped banner (e.g. "center top") */
  bannerPosition?: string;
  /** CSS object-fit override (default cover) — use "contain" to avoid cropping key UI */
  bannerFit?: 'cover' | 'contain';
  /** Background behind contain letterboxing */
  bannerBg?: string;
  copy: Record<'en' | 'sv' | 'sq', ProjectCopy>;
}

const ph = (color: string, text: string) =>
  `https://placehold.co/800x420/${color}/f8fafc?text=${encodeURIComponent(text)}&font=dm-sans`;

/** Prefer a local banner when present; otherwise colored placeholder. */
const BANNER_VERSION = '9';

const bannerIds = new Set([
  'gematrior',
  'smartfood',
  'swiiftly-ai',
  'podmanager-lia',
  'telco-churn',
  'diamonds-analysis',
]);

export function projectImage(project: Project) {
  if (project.image) return project.image;
  if (bannerIds.has(project.id)) {
    // Version in the path (not only query) so CDN/browser caches cannot stick on an old PNG.
    return `/project-banners/${project.id}-v${BANNER_VERSION}.png`;
  }
  return ph(project.accent, project.title.replace(/\s+/g, '+'));
}

const allProjects: Project[] = [
  {
    id: 'gematrior',
    title: 'Gematrior',
    year: '2026',
    featured: true,
    category: 'featured',
    accent: '1e3a5f',
    bannerPosition: 'center top',
    github: 'https://github.com/editorjakupi/gematrior',
    demo: 'https://gematrior.com',
    tech: [
      'Next.js 15',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Docker',
      'Caddy',
      'OpenAI',
    ],
    copy: {
      en: {
        tagline:
          'Universal gematria product — many ciphers, tools, and AI readings in one live SaaS.',
        description:
          'Gematrior is a production web app I designed, built, and host myself. Visitors enter a word or phrase and instantly see values across 20+ letter–number systems (Albanian, English/Latin, Greek, Hebrew, and more), with letter breakdowns and cipher keys. The product also includes compare mode, text scan, number/date tools, astrology and scripture lookups, plus accounts, Stripe billing, and OpenAI-powered readings — a full journey from UX to VPS deployment.',
        highlights: [
          '20+ ciphers with digraph-aware Albanian gematria and on-screen cipher keys',
          'Compare phrases, text scan, date/number tools, and guided AI readings',
          'Auth, Stripe (credits & Pro), and a polished dark multilingual UI',
          'Self-hosted SaaS: Next.js, Prisma, Postgres, Docker, Caddy',
          'Live at gematrior.com — owned end-to-end from idea to production',
        ],
      },
      sv: {
        tagline:
          'Universell gematria-produkt — många system, verktyg och AI-läsningar i en live SaaS.',
        description:
          'Gematrior är en produktionswebbapp jag designat, byggt och hostar själv. Besökare skriver ett ord eller en fras och ser direkt värden i 20+ bokstav–siffer-system (albanska, engelska/latin, grekiska, hebreiska m.m.), med bokstavsuppdelning och cipher-nycklar. Produkten har även jämförläge, textscan, datum-/nummerverktyg, astrologi- och skriftuppslag, plus konton, Stripe-betalning och OpenAI-läsningar — hela vägen från UX till VPS-deploy.',
        highlights: [
          '20+ system med digrafmedveten albansk gematria och synliga cipher-nycklar',
          'Jämför fraser, textscan, datum-/nummerverktyg och AI-läsningar',
          'Auth, Stripe (krediter & Pro) och polerad mörk flerspråkig UI',
          'Självhostad SaaS: Next.js, Prisma, Postgres, Docker, Caddy',
          'Live på gematrior.com — från idé till produktion',
        ],
      },
      sq: {
        tagline:
          'Produkt universale gematrie — shumë sisteme, mjete dhe leximë AI në një SaaS live.',
        description:
          'Gematrior është një aplikacion web prodhimi që e kam dizajnuar, ndërtuar dhe hostuar vetë. Vizitorët shkruajnë një fjalë ose frazë dhe shohin menjëherë vlera në 20+ sisteme shkronjë–numër (shqip, anglisht/latin, greqisht, hebraisht etj.), me ndarje shkronjash dhe çelësa cipher. Produkti përfshin krahasim, text scan, mjete date/numër, kërkime astrologjie/shkrimi, plus llogari, Stripe dhe leximë OpenAI — nga UX te deploy në VPS.',
        highlights: [
          '20+ sisteme me gematria shqipe digraf-aware dhe çelësa cipher në ekran',
          'Krahasim frazash, text scan, mjete date/numër dhe leximë AI',
          'Auth, Stripe (kredi & Pro) dhe UI e errët shumëgjuhëshe',
          'SaaS self-hosted: Next.js, Prisma, Postgres, Docker, Caddy',
          'Live te gematrior.com — nga ideja te prodhimi',
        ],
      },
    },
  },
  {
    id: 'swiiftly-ai',
    title: 'Swiiftly AI Assistant',
    year: '2026',
    featured: true,
    category: 'featured',
    accent: '0f766e',
    isPrivate: true,
    demo: 'https://swiiftly.dk/',
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Express',
      'FastAPI patterns',
      'RAG',
      'OCR/ASR',
      'LLM Guardrails',
    ],
    copy: {
      en: {
        tagline: 'In-app AI Staff Assistant for restaurant POS — daily support for staff and managers.',
        description:
          'Second LIA internship at Swiiftly (Denmark): developed an AI Staff Assistant inside restaurant POS workflows. The assistant answers operational questions with role-based access, knowledge retrieval (RAG), grounded chat responses, and uploads for PDFs and video — with guardrails for sensitive data. Built mock-first for demos, with a clear path to OpenAI and integration into the Swiiftly platform.',
        highlights: [
          'Unified assistant brain powering chat and REST query API',
          'Hybrid RAG with RBAC, citations, and readiness gate (GO/HOLD/NO-GO)',
          'OCR for scanned PDFs and optional video ASR transcription',
          'PII vault, outbound guard, and dual sensitivity matrix',
          'Self-learning Q&A loop with feedback ingestion',
          'Multilingual UI foundation (EN, SV, DA) from internship work',
        ],
      },
      sv: {
        tagline: 'In-app AI Staff Assistant för restaurang-POS — vardagsstöd för personal och chefer.',
        description:
          'Andra LIA-praktiken hos Swiiftly (Danmark): utvecklade en AI Staff Assistant integrerad i restaurang-POS. Assistenten ger rollanpassade svar från operativ kunskap via RAG, grounded chatt, uppladdning av PDF och video samt skydd för känslig data. Mock-first för demo, med tydlig väg till OpenAI och integration i Swiiftlys plattform.',
        highlights: [
          'Enhetlig assistenthjärna för chatt och REST query API',
          'Hybrid RAG med RBAC, citat och readiness gate (GO/HOLD/NO-GO)',
          'OCR för skannade PDF:er och valfri video-ASR',
          'PII vault, outbound guard och dual sensitivity-matris',
          'Självlärande Q&A-loop med feedback-ingestion',
          'Flerspråkig UI-grund (EN, SV, DA) från LIA-arbetet',
        ],
      },
      sq: {
        tagline: 'AI Staff Assistant in-app për POS restoranti — mbështetje ditore për stafin dhe menaxherët.',
        description:
          'Praktika e dytë LIA në Swiiftly (Danimarkë): zhvillova një AI Staff Assistant të integruar në rrjedhat e punës POS të restoranteve. Asistenti jep përgjigje të bazuara në rol, retrieval (RAG), chat të grounded, ngarkim PDF/video dhe mbrojtje për të dhëna sensitive. Mock-first për demo, me rrugë të qartë drejt OpenAI dhe integrimit në platformën Swiiftly.',
        highlights: [
          'Truri i unifikuar i asistentit për chat dhe REST query API',
          'RAG hibrid me RBAC, citime dhe readiness gate (GO/HOLD/NO-GO)',
          'OCR për PDF të skanuara dhe ASR video opsionale',
          'PII vault, outbound guard dhe matricë dual sensitivity',
          'Loop Q&A vetë-mësim me ingestion feedback',
          'Bazë UI shumëgjuhëshe (EN, SV, DA) nga praktika LIA',
        ],
      },
    },
  },
  {
    id: 'podmanager-lia',
    title: 'PodManager.AI',
    year: '2025',
    featured: true,
    category: 'featured',
    accent: '7c3aed',
    isPrivate: true,
    demo: 'https://podmanager.ai',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'FastAPI',
      'MongoDB',
      'Whisper',
      'Azure Speech',
      'Socket.io',
      'Azure Blob',
    ],
    copy: {
      en: {
        tagline: 'LIA internship — AI-powered podcast platform with real-time audio workflows.',
        description:
          'Full-stack internship at PodManager.AI (The Knowledge Formula). Worked on AI-driven audio editing, transcription with Whisper and Azure Speech, real-time recording via Socket.io, and secure file handling in Azure Blob Storage.',
        highlights: [
          'Next.js + React + TypeScript frontend',
          'FastAPI backend with MongoDB',
          'Whisper & Azure Speech transcription pipelines',
          'Real-time recording with Socket.io',
          'Secure uploads to Azure Blob Storage',
        ],
      },
      sv: {
        tagline: 'LIA — AI-driven podcastplattform med realtidsljudflöden.',
        description:
          'Fullstack-LIA hos PodManager.AI (The Knowledge Formula). Arbetade med AI-driven ljudredigering, transkription med Whisper och Azure Speech, realtidsinspelning via Socket.io och säker filhantering i Azure Blob Storage.',
        highlights: [
          'Next.js + React + TypeScript frontend',
          'FastAPI-backend med MongoDB',
          'Transkriptionspipelines med Whisper & Azure Speech',
          'Realtidsinspelning med Socket.io',
          'Säkra uppladdningar till Azure Blob Storage',
        ],
      },
      sq: {
        tagline: 'Praktikë LIA — platformë podcast me AI dhe flukse audio në kohë reale.',
        description:
          'Praktikë full-stack në PodManager.AI (The Knowledge Formula). Punova në redaktimin e audios me AI, transkriptim me Whisper dhe Azure Speech, regjistrim në kohë reale via Socket.io dhe menaxhim të sigurt të skedarëve në Azure Blob Storage.',
        highlights: [
          'Frontend Next.js + React + TypeScript',
          'Backend FastAPI me MongoDB',
          'Pipeline transkriptimi Whisper & Azure Speech',
          'Regjistrim në kohë reale me Socket.io',
          'Upload të sigurt në Azure Blob Storage',
        ],
      },
    },
  },
  {
    id: 'smartfood',
    title: 'SmartFood',
    year: '2026',
    featured: true,
    category: 'course',
    accent: 'ea580c',
    bannerPosition: 'center center',
    bannerFit: 'contain',
    bannerBg: '#d1dcd2',
    github: 'https://github.com/editorjakupi/smartfood',
    demo: 'https://smartfood.editorjakupi.com',
    tech: [
      'Next.js 16',
      'TypeScript',
      'Tailwind',
      'Google Vision',
      'OpenAI',
      'TensorFlow.js',
      'SQLite',
      'OAuth',
      'Docker',
      'Caddy',
    ],
    copy: {
      en: {
        tagline: 'See your plate clearly — AI meal logging from photo, ingredients, or barcode.',
        description:
          'SmartFood is a polished full-stack nutrition app: classify meals from an image, typed ingredients, or barcode, then track calories, macros, water, streaks, and goals in a calm dark UI. It combines Google Cloud Vision (with CNN fallback), Livsmedelsverket / Open Food Facts, LSTM predictions when history allows, and an OpenAI-powered nutrition chat. Live as a Next.js standalone + SQLite app on my Hetzner VPS behind Caddy (smartfood.editorjakupi.com), with Google OAuth and Facebook Login wired for production redirects.',
        highlights: [
          'Multimodal input: photo upload/camera, free-text ingredients, barcode lookup',
          'Vision AI + nutrition APIs with daily goals, streaks, and water tracking',
          'LSTM eating-pattern predictions and OpenAI nutrition assistant',
          'Google OAuth + Facebook Login (Meta app ready; Live after business verification)',
          'Self-hosted on Hetzner: Next.js standalone, SQLite, Docker, shared Caddy + TLS',
        ],
      },
      sv: {
        tagline: 'See your plate clearly — AI-måltidslogning via foto, ingredienser eller streckkod.',
        description:
          'SmartFood är en polerad fullstack-näringsapp: klassificera måltider från bild, ingredienstext eller streckkod och följ kalorier, makro, vatten, streaks och mål i ett lugnt mörkt UI. Den kombinerar Google Cloud Vision (med CNN-fallback), Livsmedelsverket / Open Food Facts, LSTM-prediktioner vid tillräcklig historik och en OpenAI-driven näringschatt. Live som Next.js standalone + SQLite på min Hetzner-VPS bakom Caddy (smartfood.editorjakupi.com), med Google OAuth och Facebook Login kopplade för produktions-redirects.',
        highlights: [
          'Multimodal inmatning: foto/kamera, fri text, streckkodsuppslag',
          'Vision-AI + närings-API:er med dagliga mål, streaks och vatten',
          'LSTM-ätmönster och OpenAI näringsassistent',
          'Google OAuth + Facebook Login (Meta-app redo; Live efter företagsverifiering)',
          'Self-hostad på Hetzner: Next.js standalone, SQLite, Docker, delad Caddy + TLS',
        ],
      },
      sq: {
        tagline: 'See your plate clearly — regjistrim ushqimi me AI nga foto, përbërës ose barkod.',
        description:
          'SmartFood është një app ushqyes full-stack i rafinuar: klasifiko vakte nga imazhi, përbërës të shkruar ose barkod, pastaj ndjek kalori, makro, ujë, streak dhe objektiva në një UI të qetë të errët. Kombinon Google Cloud Vision (me fallback CNN), Livsmedelsverket / Open Food Facts, parashikime LSTM dhe chat ushqyes me OpenAI. Live si Next.js standalone + SQLite në VPS-in tim Hetzner pas Caddy (smartfood.editorjakupi.com), me Google OAuth dhe Facebook Login të lidhura për redirect-e prodhimi.',
        highlights: [
          'Hyrje multimodale: foto/kamerë, tekst përbërësish, lookup barkodi',
          'Vision AI + API ushqyese me objektiva, streak dhe ujë',
          'Parashikime LSTM dhe asistent OpenAI',
          'Google OAuth + Facebook Login (Meta app gati; Live pas verifikimit të biznesit)',
          'Self-hosted në Hetzner: Next.js standalone, SQLite, Docker, Caddy + TLS i përbashkët',
        ],
      },
    },
  },
  {
    id: 'telco-churn',
    title: 'Telco Churn Prediction',
    year: '2026',
    featured: true,
    category: 'course',
    accent: '0369a1',
    github: 'https://github.com/editorjakupi/telco-customer-churn-prediction',
    demo: 'https://churn.editorjakupi.com',
    tech: ['Python', 'Jupyter', 'Random Forest', 'Streamlit', 'scikit-learn', 'Pandas', 'Docker', 'Caddy'],
    copy: {
      en: {
        tagline: 'From customer data to a clear HIGH RISK decision — live churn dashboard.',
        description:
          'End-to-end machine learning project that predicts telecom customer churn with Random Forest, then surfaces results in a dark Streamlit dashboard: churn vs retention probability, a color risk gauge, and a concrete recommended action (e.g. offer a special deal). Live at churn.editorjakupi.com on my Hetzner VPS behind shared Caddy + TLS — from Jupyter model work to a production-style demo recruiters can click.',
        highlights: [
          'Random Forest pipeline trained and evaluated in Jupyter',
          'Live Streamlit UI: risk banner, probabilities, and gauge visualization',
          'Actionable output — not just a score, but a recommended next step',
          'scikit-learn + Pandas on the classic Telco Customer Churn dataset',
          'Self-hosted on Hetzner (Docker + Caddy) at churn.editorjakupi.com',
        ],
      },
      sv: {
        tagline: 'Från kunddata till tydligt HIGH RISK-beslut — live churn-dashboard.',
        description:
          'End-to-end maskininlärningsprojekt som förutsäger telekom-kundchurn med Random Forest och visar resultatet i en mörk Streamlit-dashboard: churn- vs retentionssannolikhet, färgriskmätare och konkret rekommenderad åtgärd (t.ex. erbjud specialdeal). Live på churn.editorjakupi.com på min Hetzner-VPS bakom delad Caddy + TLS — från Jupyter-modell till produktionslik demo rekryterare kan testa.',
        highlights: [
          'Random Forest-pipeline tränad och utvärderad i Jupyter',
          'Live Streamlit-UI: riskbanner, sannolikheter och gauge',
          'Handlingsbart resultat — poäng plus rekommenderad nästa åtgärd',
          'scikit-learn + Pandas på Telco Customer Churn-dataset',
          'Self-hostad på Hetzner (Docker + Caddy) på churn.editorjakupi.com',
        ],
      },
      sq: {
        tagline: 'Nga të dhënat e klientit te vendim HIGH RISK — dashboard churn live.',
        description:
          'Projekt ML end-to-end që parashikon churn klientësh telekom me Random Forest dhe e shfaq në një dashboard Streamlit të errët: probabilitet churn vs retention, matës risku me ngjyra dhe veprim i rekomanduar (p.sh. ofertë speciale). Live në churn.editorjakupi.com në VPS-in tim Hetzner pas Caddy + TLS — nga modeli Jupyter te një demo prodhimi që rekrutuesit mund ta provojnë.',
        highlights: [
          'Pipeline Random Forest i trajnuar dhe vlerësuar në Jupyter',
          'UI Streamlit live: banner risku, probabilitete dhe gauge',
          'Rezultat actionable — jo vetëm score, por hapi i radhës',
          'scikit-learn + Pandas mbi dataset-in Telco Customer Churn',
          'Self-hosted në Hetzner (Docker + Caddy) në churn.editorjakupi.com',
        ],
      },
    },
  },
  {
    id: 'crm-system',
    title: 'CRM System',
    year: '2025',
    featured: true,
    category: 'course',
    accent: '4f46e5',
    github: 'https://github.com/editorjakupi/testning-av-crmsystem',
    tech: ['React', 'C#', 'ASP.NET Core', 'PostgreSQL', 'xUnit', 'Playwright', 'Postman'],
    copy: {
      en: {
        tagline: 'Full-stack CRM with unit, API, and UI test coverage.',
        description:
          'Comprehensive CRM system with React frontend, C# ASP.NET Core backend, and extensive testing: unit tests, API tests with Postman, and UI tests. Manages customers, interactions, and workflows.',
        highlights: [
          'Layered full-stack architecture',
          'PostgreSQL database integration',
          'Unit, API, and UI test suites',
          'GitHub Actions CI workflows',
        ],
      },
      sv: {
        tagline: 'Fullstack CRM med enhets-, API- och UI-testtäckning.',
        description:
          'Omfattande CRM-system med React-frontend, C# ASP.NET Core-backend och omfattande testning: enhetstester, API-tester med Postman och UI-tester. Hanterar kunder, interaktioner och arbetsflöden.',
        highlights: [
          'Lagerindelad fullstack-arkitektur',
          'PostgreSQL-databasintegration',
          'Testsviter för enhet, API och UI',
          'GitHub Actions CI-workflows',
        ],
      },
      sq: {
        tagline: 'CRM full-stack me mbulim testesh unit, API dhe UI.',
        description:
          'Sistem CRM gjithëpërfshirës me frontend React, backend C# ASP.NET Core dhe testim të gjerë: teste unit, teste API me Postman dhe teste UI. Menaxhon klientë, interaksione dhe workflow.',
        highlights: [
          'Arkitekturë full-stack e shtresuar',
          'Integrim databaze PostgreSQL',
          'Suite testesh unit, API dhe UI',
          'CI workflows GitHub Actions',
        ],
      },
    },
  },
  {
    id: 'del1-kod',
    title: 'AI Knowledge Check',
    year: '2026',
    featured: true,
    category: 'course',
    accent: 'be123c',
    github: 'https://github.com/editorjakupi/del1-kod',
    tech: ['Python', 'TensorFlow/Keras', 'KerasTuner', 'Streamlit', 'RAG', 'Google GenAI'],
    copy: {
      en: {
        tagline: 'MNIST/CIFAR-100 deep learning, transfer learning, and PDF RAG chatbot.',
        description:
          'Knowledge check covering chapters 7, 8, and 10: ANN on MNIST with KerasTuner, CNN on CIFAR-100 with transfer learning, Streamlit image classifier, and a RAG chatbot answering questions from a PDF document.',
        highlights: [
          'Hyperparameter tuning with KerasTuner',
          'Transfer learning with MobileNetV2 on CIFAR-100',
          'Streamlit apps for image classification and RAG Q&A',
          'Semantic search + text generation pipeline',
        ],
      },
      sv: {
        tagline: 'MNIST/CIFAR-100 deep learning, transfer learning och PDF RAG-chatbot.',
        description:
          'Kunskapskontroll kapitel 7, 8 och 10: ANN på MNIST med KerasTuner, CNN på CIFAR-100 med transfer learning, Streamlit-bildklassificerare och RAG-chatbot som svarar på frågor från PDF.',
        highlights: [
          'Hyperparameter-tuning med KerasTuner',
          'Transfer learning med MobileNetV2 på CIFAR-100',
          'Streamlit-appar för bildklassificering och RAG Q&A',
          'Pipeline för semantisk sökning + textgenerering',
        ],
      },
      sq: {
        tagline: 'Deep learning MNIST/CIFAR-100, transfer learning dhe chatbot RAG PDF.',
        description:
          'Kontrolli i njohurive kapitujt 7, 8 dhe 10: ANN në MNIST me KerasTuner, CNN në CIFAR-100 me transfer learning, klasifikues imazhesh Streamlit dhe chatbot RAG që përgjigjet nga PDF.',
        highlights: [
          'Tuning hyperparameter me KerasTuner',
          'Transfer learning me MobileNetV2 në CIFAR-100',
          'Aplikacione Streamlit për klasifikim imazhesh dhe RAG Q&A',
          'Pipeline kërkim semantik + gjenerim teksti',
        ],
      },
    },
  },
  {
    id: 'dissatisfiedcustomer',
    title: 'Dissatisfied Customer CRM',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/dissatisfiedcustomer',
    tech: ['JavaScript', 'React', 'Node.js', 'CRM'],
    copy: {
      en: {
        tagline: 'CRM web app for tickets, users, companies, and feedback.',
        description:
          'Customer relationship management system with dashboard, user/employee management, ticket handling, admin panels, and customer feedback. Built as a team project with role-based access.',
        highlights: [
          'Dashboard with users, tickets, and companies overview',
          'Role-based admin and super-admin panels',
          'Ticket creation, handling, and feedback system',
          'Full CRUD for users, employees, and products',
        ],
      },
      sv: {
        tagline: 'CRM-webbapp för ärenden, användare, företag och feedback.',
        description:
          'CRM-system med dashboard, användar-/personalhantering, ärendehantering, adminpaneler och kundfeedback. Byggt som teamprojekt med rollbaserad åtkomst.',
        highlights: [
          'Dashboard med översikt av användare, ärenden och företag',
          'Rollbaserade admin- och super-admin-paneler',
          'Skapande, hantering och feedback för ärenden',
          'Full CRUD för användare, anställda och produkter',
        ],
      },
      sq: {
        tagline: 'Aplikacion web CRM për tiketa, përdorues, kompani dhe feedback.',
        description:
          'Sistem menaxhimi marrëdhëniesh me klientët me dashboard, menaxhim përdoruesish/punonjësish, menaxhim tiketash, panele admin dhe feedback klientësh. Ndërtuar si projekt ekipi me akses bazuar në role.',
        highlights: [
          'Dashboard me përdorues, tiketa dhe kompani',
          'Panele admin dhe super-admin me role',
          'Krijim, menaxhim tiketash dhe sistem feedback',
          'CRUD i plotë për përdorues, punonjës dhe produkte',
        ],
      },
    },
  },
  {
    id: 'shoptester',
    title: 'Shop API Tester',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/shoptester-postman-apitesting',
    tech: ['C#', '.NET Core', 'REST', 'Postman', 'EF Core', 'Swagger'],
    copy: {
      en: {
        tagline: '.NET REST API for e-commerce with Postman API testing.',
        description:
          'ASP.NET Core Web API for managing an online shop: products, categories, users, orders with session-based auth, role-based access, and comprehensive Postman test collections.',
        highlights: [
          'CRUD for products, users, and orders',
          'Session auth with Admin/User roles',
          'Swagger/OpenAPI documentation',
          'Postman API test suite',
        ],
      },
      sv: {
        tagline: '.NET REST API för e-handel med Postman API-testning.',
        description:
          'ASP.NET Core Web API för att hantera en webbshop: produkter, kategorier, användare, ordrar med sessionsbaserad auth, rollbaserad åtkomst och Postman-testsamlingar.',
        highlights: [
          'CRUD för produkter, användare och ordrar',
          'Sessionsauth med Admin/User-roller',
          'Swagger/OpenAPI-dokumentation',
          'Postman API-testsuite',
        ],
      },
      sq: {
        tagline: 'REST API .NET për e-commerce me testim Postman API.',
        description:
          'ASP.NET Core Web API për menaxhimin e një dyqani online: produkte, kategori, përdorues, porosi me auth session, akses bazuar në role dhe koleksione testesh Postman.',
        highlights: [
          'CRUD për produkte, përdorues dhe porosi',
          'Auth session me role Admin/User',
          'Dokumentacion Swagger/OpenAPI',
          'Suite testesh Postman API',
        ],
      },
    },
  },
  {
    id: 'bankomat',
    title: 'Bankomat .NET',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/bankomat-unittesting',
    tech: ['C#', '.NET 9', 'xUnit', 'TDD'],
    copy: {
      en: {
        tagline: 'ATM simulation with comprehensive xUnit test coverage.',
        description:
          'Simulated bank ATM in C# demonstrating Test-Driven Development. Covers card insertion, PIN validation, withdrawals, balance checks, card blocking after failed attempts, and cash management.',
        highlights: [
          'TDD workflow with positive and negative test cases',
          'PIN lockout after too many failed attempts',
          'Balance and machine cash validation',
          'xUnit test suite for business rules',
        ],
      },
      sv: {
        tagline: 'Bankomat-simulation med omfattande xUnit-testtäckning.',
        description:
          'Simulerad bankomat i C# som demonstrerar testdriven utveckling. Täcker kortinmatning, PIN-validering, uttag, saldokontroll, kortspärr efter misslyckade försök och kontanthantering.',
        highlights: [
          'TDD-arbetsflöde med positiva och negativa testfall',
          'PIN-spärr efter för många misslyckade försök',
          'Validering av saldo och bankomatens kontanter',
          'xUnit-testsuite för affärsregler',
        ],
      },
      sq: {
        tagline: 'Simulim bankomati me mbulim të plotë testesh xUnit.',
        description:
          'Bankomat i simuluar në C# që demonstron zhvillim të drejtuar nga testet. Mbulon futjen e kartës, validimin PIN, tërheqje, kontroll balanci, bllokim karte pas përpjekjeve të dështuara dhe menaxhim parash.',
        highlights: [
          'Workflow TDD me raste testi pozitive dhe negative',
          'Bllokim PIN pas shumë përpjekjeve të dështuara',
          'Validim balanci dhe parash bankomati',
          'Suite testesh xUnit për rregullat e biznesit',
        ],
      },
    },
  },
  {
    id: 'uitestning-shoptester',
    title: 'Shop UI Testing',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/uitestning-av-shoptester',
    tech: ['C#', '.NET', 'Selenium', 'UI Testing'],
    copy: {
      en: {
        tagline: 'Automated UI tests for an e-commerce shop application.',
        description:
          'UI testing project for a shop application using automated browser tests. Validates user flows, form submissions, and navigation across the e-commerce interface.',
        highlights: [
          'Automated UI test suite',
          'E-commerce user flow validation',
          'Integration with .NET test framework',
        ],
      },
      sv: {
        tagline: 'Automatiserade UI-tester för en e-handelsapplikation.',
        description:
          'UI-testprojekt för en shop-applikation med automatiserade webbläsartester. Validerar användarflöden, formulärinlämningar och navigation i e-handelsgränssnittet.',
        highlights: [
          'Automatiserad UI-testsuite',
          'Validering av e-handelsflöden',
          'Integration med .NET-testramverk',
        ],
      },
      sq: {
        tagline: 'Teste UI të automatizuara për aplikacion e-commerce.',
        description:
          'Projekt testimi UI për aplikacion dyqani me teste automatizuese shfletuesi. Validon flukset e përdoruesit, dërgimet e formularëve dhe navigimin në ndërfaqen e-commerce.',
        highlights: [
          'Suite testesh UI e automatizuar',
          'Validim flukse e-commerce',
          'Integrim me framework testimi .NET',
        ],
      },
    },
  },
  {
    id: 'diamonds-analysis',
    title: 'Diamonds Intelligence',
    year: '2025',
    featured: true,
    category: 'course',
    accent: '64748b',
    bannerPosition: 'center top',
    github: 'https://github.com/editorjakupi/diamonds-analysis-app',
    demo: 'https://diamonds.editorjakupi.com',
    tech: ['Python', 'Streamlit', 'Pandas', 'Data Analysis', 'Jupyter', 'Docker', 'Caddy'],
    copy: {
      en: {
        tagline: 'Decision support for diamond buying — from the 4Cs to a clear recommendation.',
        description:
          'Interactive Streamlit app (Guldfynd portfolio) that turns diamond market data into purchasing decisions. Stakeholders filter and explore the assortment, then score a single stone on carat, price, cut, color, clarity and dimensions to get a data-driven recommendation. Live at diamonds.editorjakupi.com on my Hetzner VPS behind shared Caddy + TLS — exploratory analysis packaged as board-ready decision support.',
        highlights: [
          'Interactive filters and stats on a large diamond dataset',
          'Decision-support form for individual purchase recommendations',
          'Clear product UI aimed at assortment, pricing and purchasing',
          'Python + Pandas analysis packaged as a slim Streamlit app',
          'Self-hosted on Hetzner (Docker + Caddy) at diamonds.editorjakupi.com',
        ],
      },
      sv: {
        tagline: 'Beslutstöd för diamantköp — från 4C till tydlig rekommendation.',
        description:
          'Interaktiv Streamlit-app (Guldfynd-portfolio) som gör diamantmarknadsdata till inköpsbeslut. Intressenter filtrerar och utforskar sortimentet, och kan sedan bedöma en enskild sten utifrån carat, pris, slipning, färg, klarhet och mått för en datadriven rekommendation. Live på diamonds.editorjakupi.com på min Hetzner-VPS bakom delad Caddy + TLS — explorativ analys som styrelseredovisat beslutstöd.',
        highlights: [
          'Interaktiva filter och statistik på stort diamantdataset',
          'Beslutstödsformulär för rekommendation per enskild sten',
          'Tydlig produkt-UI för sortiment, prissättning och inköp',
          'Python + Pandas packat som slim Streamlit-app',
          'Self-hostad på Hetzner (Docker + Caddy) på diamonds.editorjakupi.com',
        ],
      },
      sq: {
        tagline: 'Mbështetje vendimi për blerje diamantesh — nga 4C te rekomandim i qartë.',
        description:
          'App interaktiv Streamlit (portfolio Guldfynd) që e kthen të dhënat e tregut të diamanteve në vendime blerjeje. Palët filtrojnë dhe eksplorojnë sortimentin, pastaj vlerësojnë një gur të vetëm sipas carat, çmimit, cut, color, clarity dhe dimensioneve për një rekomandim të bazuar në të dhëna. Live në diamonds.editorjakupi.com në VPS-in tim Hetzner pas Caddy + TLS — analizë eksploruese e paketuar si vendimmarrje për bord.',
        highlights: [
          'Filtra dhe statistika interaktive mbi dataset të madh diamantesh',
          'Formular vendimi për rekomandim blerjeje individuale',
          'UI produkti për sortiment, çmim dhe blerje',
          'Python + Pandas i paketuar si app Streamlit slim',
          'Self-hosted në Hetzner (Docker + Caddy) në diamonds.editorjakupi.com',
        ],
      },
    },
  },
  {
    id: 'react-context',
    title: 'React Context Posts',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/react-context-post-example',
    tech: ['React', 'JavaScript', 'Context API'],
    copy: {
      en: {
        tagline: 'React Context API example with post management.',
        description:
          'Learning project demonstrating React Context for global state management with a post CRUD example.',
        highlights: ['React Context API pattern', 'Component composition', 'State lifting alternatives'],
      },
      sv: {
        tagline: 'React Context API-exempel med inläggshantering.',
        description:
          'Lärandeprojekt som demonstrerar React Context för global state management med CRUD-exempel för inlägg.',
        highlights: ['React Context API-mönster', 'Kompositionsmönster', 'Alternativ till state lifting'],
      },
      sq: {
        tagline: 'Shembull React Context API me menaxhim postimesh.',
        description:
          'Projekt mësimor që demonstron React Context për menaxhim global state me shembull CRUD postimesh.',
        highlights: ['Pattern React Context API', 'Kompozim komponentësh', 'Alternativa për state lifting'],
      },
    },
  },
  {
    id: 'react-router',
    title: 'React Router',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/my-first-react-router',
    tech: ['React', 'React Router', 'JavaScript'],
    copy: {
      en: {
        tagline: 'First React Router project with multi-page navigation.',
        description: 'Introductory React project exploring client-side routing with React Router.',
        highlights: ['Client-side routing', 'Nested routes', 'Navigation components'],
      },
      sv: {
        tagline: 'Första React Router-projektet med flersidig navigation.',
        description: 'Introduktionsprojekt i React som utforskar klientside-routing med React Router.',
        highlights: ['Klientside-routing', 'Nästlade routes', 'Navigationskomponenter'],
      },
      sq: {
        tagline: 'Projekti i parë React Router me navigim shumëfaqe.',
        description: 'Projekt hyrës React që eksploron routing në anën e klientit me React Router.',
        highlights: ['Routing client-side', 'Routes të mbivendosura', 'Komponentë navigimi'],
      },
    },
  },
  {
    id: 'first-react',
    title: 'My First React App',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/my-first-react-app',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    copy: {
      en: {
        tagline: 'Introductory React application.',
        description: 'First steps into React development — components, props, and basic interactivity.',
        highlights: ['React components and props', 'JSX syntax', 'Basic state management'],
      },
      sv: {
        tagline: 'Introduktionsapplikation i React.',
        description: 'Första stegen in i React-utveckling — komponenter, props och grundläggande interaktivitet.',
        highlights: ['React-komponenter och props', 'JSX-syntax', 'Grundläggande state management'],
      },
      sq: {
        tagline: 'Aplikacion hyrës React.',
        description: 'Hapat e parë në zhvillimin React — komponentë, props dhe interaktivitet bazë.',
        highlights: ['Komponentë dhe props React', 'Sintaksë JSX', 'Menaxhim state bazë'],
      },
    },
  },
  {
    id: 'first-rest-api',
    title: 'My First REST API',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/my-first-rest-api',
    tech: ['Node.js', 'Express', 'REST', 'JavaScript'],
    copy: {
      en: {
        tagline: 'Introductory Node.js REST API.',
        description: 'First REST API built with Node.js and Express — CRUD endpoints and JSON responses.',
        highlights: ['Express server setup', 'RESTful CRUD endpoints', 'JSON API responses'],
      },
      sv: {
        tagline: 'Introduktions-REST API i Node.js.',
        description: 'Första REST API byggt med Node.js och Express — CRUD-endpoints och JSON-svar.',
        highlights: ['Express-server setup', 'RESTful CRUD-endpoints', 'JSON API-svar'],
      },
      sq: {
        tagline: 'REST API hyrës Node.js.',
        description: 'REST API i parë i ndërtuar me Node.js dhe Express — endpoints CRUD dhe përgjigje JSON.',
        highlights: ['Setup server Express', 'Endpoints RESTful CRUD', 'Përgjigje JSON API'],
      },
    },
  },
  {
    id: 'csharp-example',
    title: 'C# Project Example',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/csharp-project-example',
    tech: ['C#', '.NET'],
    copy: {
      en: {
        tagline: 'C# fundamentals and project structure example.',
        description: 'Example C# project demonstrating core language concepts and .NET project organization.',
        highlights: ['C# language fundamentals', '.NET project structure', 'OOP patterns'],
      },
      sv: {
        tagline: 'C#-grunder och projektstruktur-exempel.',
        description: 'Exempelprojekt i C# som demonstrerar grundläggande språkkoncept och .NET-projektorganisation.',
        highlights: ['C#-språkgrund', '.NET-projektstruktur', 'OOP-mönster'],
      },
      sq: {
        tagline: 'Shembull themelore C# dhe strukture projekti.',
        description: 'Projekt shembull C# që demonstron konceptet bazë të gjuhës dhe organizimin e projektit .NET.',
        highlights: ['Themelore gjuhës C#', 'Strukturë projekti .NET', 'Pattern OOP'],
      },
    },
  },
  {
    id: 'husmanskors',
    title: 'Husmanskors',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/husmanskors',
    tech: ['C#', '.NET'],
    copy: {
      en: {
        tagline: 'C# course project — Swedish cuisine themed application.',
        description: 'School project in C# exploring object-oriented programming with a Swedish food theme.',
        highlights: ['OOP in C#', 'Class hierarchies', 'Console/menu-driven UI'],
      },
      sv: {
        tagline: 'C#-kursprojekt — svensk husmanskost-tema.',
        description: 'Skolprojekt i C# som utforskar objektorienterad programmering med svenskt mattema.',
        highlights: ['OOP i C#', 'Klasshierarkier', 'Konsol-/menydriven UI'],
      },
      sq: {
        tagline: 'Projekt kursi C# — temë kuzhinë suedeze.',
        description: 'Projekt shkollor në C# që eksploron programimin objekt-orientuar me temë ushqimi suedeze.',
        highlights: ['OOP në C#', 'Hierarki klasash', 'UI konsol/menu'],
      },
    },
  },
  {
    id: 'holidaymaker',
    title: 'Holidaymaker',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/holidaymaker',
    tech: ['C#', '.NET', 'SQL'],
    copy: {
      en: {
        tagline: 'Holiday booking system in C#.',
        description: 'C# application for managing holiday bookings — demonstrates database integration and business logic.',
        highlights: ['Booking domain model', 'Database integration', 'C# business logic'],
      },
      sv: {
        tagline: 'Semesterbokningssystem i C#.',
        description: 'C#-applikation för att hantera semesterbokningar — demonstrerar databasintegration och affärslogik.',
        highlights: ['Bokningsdomänmodell', 'Databasintegration', 'C#-affärslogik'],
      },
      sq: {
        tagline: 'Sistem rezervimi pushimesh në C#.',
        description: 'Aplikacion C# për menaxhimin e rezervimeve të pushimeve — demonstron integrim databaze dhe logjikë biznesi.',
        highlights: ['Model domeni rezervimi', 'Integrim databaze', 'Logjikë biznesi C#'],
      },
    },
  },
  {
    id: 'nodejs-course',
    title: 'Node.js Course',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/nodejs-course',
    tech: ['Node.js', 'JavaScript', 'Express'],
    copy: {
      en: {
        tagline: 'Node.js course exercises and projects.',
        description: 'Collection of Node.js coursework covering server-side JavaScript, modules, and Express basics.',
        highlights: ['Node.js modules and npm', 'File system operations', 'Express routing basics'],
      },
      sv: {
        tagline: 'Node.js-kursövningar och projekt.',
        description: 'Samling Node.js-kursarbete som täcker serverside JavaScript, moduler och Express-grunder.',
        highlights: ['Node.js-moduler och npm', 'Filsystemoperationer', 'Express routing-grunder'],
      },
      sq: {
        tagline: 'Ushtrime dhe projekte kursi Node.js.',
        description: 'Koleksion punë kursi Node.js që mbulon JavaScript server-side, module dhe bazat Express.',
        highlights: ['Module Node.js dhe npm', 'Operacione file system', 'Bazat routing Express'],
      },
    },
  },
  {
    id: 'programming1-csharp',
    title: 'Programming 1 C#',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/programming1-csharp',
    tech: ['C#', '.NET'],
    copy: {
      en: {
        tagline: 'Introductory C# programming course assignments.',
        description: 'First programming course in C# — variables, control flow, methods, and basic OOP.',
        highlights: ['C# syntax and control flow', 'Methods and parameters', 'Introduction to classes'],
      },
      sv: {
        tagline: 'Introduktionskurs i C#-programmering.',
        description: 'Första programmeringskursen i C# — variabler, kontrollflöde, metoder och grundläggande OOP.',
        highlights: ['C#-syntax och kontrollflöde', 'Metoder och parametrar', 'Introduktion till klasser'],
      },
      sq: {
        tagline: 'Detyra kursi hyrës programimi C#.',
        description: 'Kursi i parë programimi në C# — variabla, kontroll flukse, metoda dhe OOP bazë.',
        highlights: ['Sintaksë dhe kontroll flukse C#', 'Metoda dhe parametra', 'Hyrje në klasa'],
      },
    },
  },
  {
    id: 'java-course',
    title: 'Java Programming Course',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/java-programming-course',
    tech: ['Java', 'OOP'],
    copy: {
      en: {
        tagline: 'Java programming course exercises.',
        description: 'Java coursework from Halmstad University — OOP, collections, and university-level programming assignments.',
        highlights: ['Java OOP fundamentals', 'Collections and generics', 'University coursework'],
      },
      sv: {
        tagline: 'Java-programmeringskursövningar.',
        description: 'Java-kursarbete från Halmstads högskola — OOP, collections och universitetsnivå-uppgifter.',
        highlights: ['Java OOP-grunder', 'Collections och generics', 'Högskolekursarbete'],
      },
      sq: {
        tagline: 'Ushtrime kursi programimi Java.',
        description: 'Punë kursi Java nga Universiteti i Halmstad — OOP, collections dhe detyra universitare.',
        highlights: ['Themelore OOP Java', 'Collections dhe generics', 'Punë kursi universitare'],
      },
    },
  },
  {
    id: 'c-introduction',
    title: 'C Introduction',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/c-introduction',
    tech: ['C', 'Systems Programming'],
    copy: {
      en: {
        tagline: 'Introductory C programming exercises.',
        description: 'Low-level C programming fundamentals — pointers, memory, and structured programming.',
        highlights: ['C syntax and pointers', 'Memory management basics', 'Structured programming'],
      },
      sv: {
        tagline: 'Introduktionsövningar i C-programmering.',
        description: 'Grundläggande C-programmering på låg nivå — pekare, minne och strukturerad programmering.',
        highlights: ['C-syntax och pekare', 'Minneshanteringsgrunder', 'Strukturerad programmering'],
      },
      sq: {
        tagline: 'Ushtrime hyrëse programimi C.',
        description: 'Themelore programimi C në nivel të ulët — pointerë, memorie dhe programim i strukturuar.',
        highlights: ['Sintaksë dhe pointerë C', 'Bazat menaxhimit memorie', 'Programim i strukturuar'],
      },
    },
  },
  {
    id: 'python-skript',
    title: 'Python Scripts',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/python_skript',
    tech: ['Python', 'Jupyter', 'Automation'],
    copy: {
      en: {
        tagline: 'Collection of Python scripts and notebooks.',
        description: 'Various Python scripts and Jupyter notebooks from coursework and practice exercises.',
        highlights: ['Python scripting patterns', 'Jupyter notebook workflows', 'Data processing scripts'],
      },
      sv: {
        tagline: 'Samling Python-skript och notebooks.',
        description: 'Olika Python-skript och Jupyter notebooks från kursarbete och övningar.',
        highlights: ['Python-skriptmönster', 'Jupyter notebook-flöden', 'Databehandlingsskript'],
      },
      sq: {
        tagline: 'Koleksion skriptash Python dhe notebook.',
        description: 'Skripta të ndryshme Python dhe notebook Jupyter nga punë kursi dhe ushtrime.',
        highlights: ['Pattern skriptimi Python', 'Workflow notebook Jupyter', 'Skripta përpunimi të dhënash'],
      },
    },
  },
];

const coursePalette = [
  '2563eb', '059669', 'dc2626', '0891b2', 'db2777', '7c3aed', 'f59e0b',
  '16a34a', '6366f1', 'b45309', '0284c7', '65a30d', '9333ea', 'c2410c',
  '0d9488', 'ca8a04', '5b21b6',
];
let paletteIndex = 0;
for (const project of allProjects) {
  if (project.accent === '64748b') {
    project.accent = coursePalette[paletteIndex % coursePalette.length];
    paletteIndex += 1;
  }
}

/** Showcase order: Swiiftly → SmartFood → Gematrior, then other live demos, then the rest. */
const showcaseOrder: Record<string, number> = {
  'swiiftly-ai': 1,
  smartfood: 2,
  gematrior: 3,
};

export const projects: Project[] = [...allProjects].sort((a, b) => {
  const aRank = showcaseOrder[a.id] ?? (a.demo ? 50 : 100);
  const bRank = showcaseOrder[b.id] ?? (b.demo ? 50 : 100);
  if (aRank !== bRank) return aRank - bRank;
  return Number(b.year) - Number(a.year) || Number(b.featured) - Number(a.featured);
});

type ProjectLocale = 'en' | 'sv' | 'sq';

export function getProjectCopy(project: Project, locale: Locale): ProjectCopy {
  const key: ProjectLocale =
    locale === 'sv' || locale === 'sq' ? locale : 'en';
  return project.copy[key];
}
