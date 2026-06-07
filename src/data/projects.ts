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
  copy: Record<Locale, ProjectCopy>;
}

const ph = (color: string, text: string) =>
  `https://placehold.co/800x420/${color}/f8fafc?text=${encodeURIComponent(text)}&font=dm-sans`;

const allProjects: Project[] = [
  {
    id: 'swiiftly-ai',
    title: 'Swiiftly AI Assistant',
    year: '2026',
    featured: true,
    category: 'featured',
    accent: '0f766e',
    isPrivate: true,
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
        tagline: 'Restaurant operations AI — RAG, governance, OCR/ASR, and self-learning Q&A.',
        description:
          'Standalone LIA project: a production-minded restaurant AI assistant with hybrid retrieval, grounded synthesis, dual sensitivity models, guest chat, schedule actions, and a full upload pipeline for PDFs and video. Built mock-first for demos with a clear path to OpenAI and platform merge.',
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
        tagline: 'Restaurang-AI — RAG, styrning, OCR/ASR och självlärande Q&A.',
        description:
          'Fristående LIA-projekt: en produktionsinriktad restaurangassistent med hybrid retrieval, grounded synthesis, dual sensitivity-modeller, gästchatt, schemaläggningsåtgärder och upload-pipeline för PDF och video. Mock-first för demo med tydlig väg till OpenAI och plattformsmerge.',
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
        tagline: 'AI për operacionet e restoranteve — RAG, qeverisje, OCR/ASR dhe Q&A vetë-mësim.',
        description:
          'Projekt LIA i pavarur: asistent AI për restorante me retrieval hibrid, grounded synthesis, modele dual sensitivity, chat për mysafirë, veprime orari dhe pipeline upload për PDF dhe video. Mock-first për demo me rrugë të qartë drejt OpenAI dhe merge në platformë.',
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
    category: 'featured',
    accent: 'ea580c',
    github: 'https://github.com/editorjakupi/smartfood',
    demo: 'https://smartfood-ten.vercel.app',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind', 'Google Vision', 'Groq LLM', 'TensorFlow.js', 'SQLite/Postgres'],
    copy: {
      en: {
        tagline: 'AI food classification with nutrition tracking, predictions, and chat assistant.',
        description:
          'Full-stack web app that identifies food from images, shows nutrition data (per 100g and per serving), predicts eating patterns with LSTM when enough history exists, and includes a nutrition chatbot powered by Groq (Llama).',
        highlights: [
          'Google Cloud Vision primary classifier with CNN fallback',
          'Livsmedelsverket & Open Food Facts nutrition APIs',
          'Meal history, CSV export, profiles, and daily goals',
          'Dark mode, water tracker, and streak tracking',
          'Deployed live on Vercel',
        ],
      },
      sv: {
        tagline: 'AI-matklassificering med näringsuppföljning, prediktioner och chattassistent.',
        description:
          'Fullstack-webbapp som identifierar mat från bilder, visar näringsdata (per 100g och portion), förutsäger ätmönster med LSTM vid tillräcklig historik, och inkluderar en näringschattbot driven av Groq (Llama).',
        highlights: [
          'Google Cloud Vision primär klassificerare med CNN-fallback',
          'Livsmedelsverket & Open Food Facts närings-API:er',
          'Måltidshistorik, CSV-export, profiler och dagliga mål',
          'Mörkt läge, vatten-tracker och streak',
          'Deployad live på Vercel',
        ],
      },
      sq: {
        tagline: 'Klasifikim ushqimi me AI, ndjekje ushqyese, parashikime dhe asistent chat.',
        description:
          'Aplikacion web full-stack që identifikon ushqimin nga imazhet, shfaq të dhëna ushqyese (për 100g dhe porcion), parashikon modelet e ngrënies me LSTM kur ka histori të mjaftueshme, dhe përfshin chatbot ushqyes të fuqizuar nga Groq (Llama).',
        highlights: [
          'Google Cloud Vision klasifikues primar me fallback CNN',
          'API Livsmedelsverket & Open Food Facts',
          'Histori vakte, eksport CSV, profile dhe objektiva ditore',
          'Dark mode, tracker uji dhe streak',
          'Deploy live në Vercel',
        ],
      },
    },
  },
  {
    id: 'telco-churn',
    title: 'Telco Churn Prediction',
    year: '2026',
    featured: true,
    category: 'featured',
    accent: '0369a1',
    github: 'https://github.com/editorjakupi/telco-customer-churn-prediction',
    demo: 'https://telco-customer-churn-prediction-editorjakupi.streamlit.app',
    tech: ['Python', 'Jupyter', 'Random Forest', 'Streamlit', 'scikit-learn', 'Pandas'],
    copy: {
      en: {
        tagline: 'ML pipeline predicting telecom customer churn with a live Streamlit app.',
        description:
          'Machine learning solution for predicting customer churn in telecommunications using Random Forest. Includes a comprehensive Jupyter notebook for model development and a Streamlit web application for real-time predictions.',
        highlights: [
          'End-to-end ML workflow in Jupyter Notebook',
          'Random Forest classifier with evaluation metrics',
          'Interactive Streamlit deployment for live predictions',
          'Kaggle Telco Customer Churn dataset',
        ],
      },
      sv: {
        tagline: 'ML-pipeline som förutsäger telekom-kundchurn med live Streamlit-app.',
        description:
          'Maskininlärningslösning för att förutsäga kundchurn inom telekom med Random Forest. Inkluderar Jupyter notebook för modellutveckling och Streamlit-app för realtidsprediktioner.',
        highlights: [
          'End-to-end ML-arbetsflöde i Jupyter Notebook',
          'Random Forest-klassificerare med utvärderingsmått',
          'Interaktiv Streamlit-deploy för live-prediktioner',
          'Kaggle Telco Customer Churn dataset',
        ],
      },
      sq: {
        tagline: 'Pipeline ML që parashikon churn klientësh telekom me app Streamlit live.',
        description:
          'Zgjidhje mësimi makinerik për parashikimin e churn-it të klientëve telekom me Random Forest. Përfshin notebook Jupyter për zhvillimin e modelit dhe aplikacion Streamlit për parashikime në kohë reale.',
        highlights: [
          'Workflow ML end-to-end në Jupyter Notebook',
          'Klasifikues Random Forest me metrika vlerësimi',
          'Deploy interaktiv Streamlit për parashikime live',
          'Dataset Kaggle Telco Customer Churn',
        ],
      },
    },
  },
  {
    id: 'crm-system',
    title: 'CRM System',
    year: '2025',
    featured: true,
    category: 'featured',
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
    category: 'featured',
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
    title: 'Diamonds Analysis',
    year: '2025',
    featured: false,
    category: 'course',
    accent: '64748b',
    github: 'https://github.com/editorjakupi/diamonds-analysis-app',
    tech: ['Python', 'Jupyter', 'Pandas', 'Data Analysis'],
    copy: {
      en: {
        tagline: 'Exploratory data analysis on diamond pricing dataset.',
        description:
          'Jupyter notebook project analyzing diamond characteristics and their relationship to price. Includes statistical analysis, visualizations, and data cleaning workflows.',
        highlights: [
          'Exploratory data analysis with Pandas',
          'Statistical visualizations',
          'Data cleaning and feature exploration',
        ],
      },
      sv: {
        tagline: 'Explorativ dataanalys på diamantprisdataset.',
        description:
          'Jupyter notebook-projekt som analyserar diamantegenskaper och deras relation till pris. Inkluderar statistisk analys, visualiseringar och datastädningsflöden.',
        highlights: [
          'Explorativ dataanalys med Pandas',
          'Statistiska visualiseringar',
          'Datastädning och feature-utforskning',
        ],
      },
      sq: {
        tagline: 'Analizë eksploruese e të dhënave për çmimet e diamanteve.',
        description:
          'Projekt notebook Jupyter që analizon karakteristikat e diamanteve dhe lidhjen me çmimin. Përfshin analizë statistikore, vizualizime dhe workflow pastrimi të dhënash.',
        highlights: [
          'Analizë eksploruese me Pandas',
          'Vizualizime statistikore',
          'Pastrim të dhënash dhe eksplorim features',
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

export const projects: Project[] = [...allProjects].sort(
  (a, b) => Number(b.year) - Number(a.year) || Number(b.featured) - Number(a.featured),
);

export function projectImage(project: Project) {
  return ph(project.accent, project.title.replace(/\s+/g, '+'));
}

export function getProjectCopy(project: Project, locale: Locale): ProjectCopy {
  return project.copy[locale];
}
