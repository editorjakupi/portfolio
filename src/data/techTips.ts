import type { Locale } from '../i18n/types';

export type TechTip = { what: string; use: string };

type TipLocale = 'en' | 'sv' | 'sq';
type TipSet = Record<TipLocale, TechTip>;

/** Hover tip: (1) what it is + how it is used generally (2) how it is used in this case. */
const PROJECT_TECH_TIPS: Record<string, Record<string, TipSet>> = {
  'pi93-ai-assistant': {
    'React 18': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for the assistant chat UI, admin panels, and ops workflows.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för assistentens chat-UI, adminpaneler och ops-flöden.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per UI e chat-it te asistentit, panele admin dhe workflow ops.',
      },
    },
    'TypeScript': {
      en: {
        what: 'Typed JavaScript used to catch errors early and keep large codebases safer.',
        use: 'In this case it is used across the Vite client and Express API contracts.',
      },
      sv: {
        what: 'Typad JavaScript som används för att fånga fel tidigt och hålla stora kodbaser säkrare.',
        use: 'I det här fallet används det i både Vite-klienten och Express-API-kontrakt.',
      },
      sq: {
        what: 'JavaScript i tipizuar qe perdoret per te kapur gabime heret dhe mbajtur kodebazat me te sigurta.',
        use: 'Ne kete rast perdoret ne klientin Vite dhe kontrata API Express.',
      },
    },
    'Vite': {
      en: {
        what: 'A fast frontend build tool used for modern React/SPA development.',
        use: 'In this case it is used for the local assistant UI and production client build.',
      },
      sv: {
        what: 'Ett snabbt frontend-byggverktyg som används för modern React/SPA-utveckling.',
        use: 'I det här fallet används det för assistentens lokala UI och produktionsbuild av klienten.',
      },
      sq: {
        what: 'Nje mjet build frontend i shpejte qe perdoret per zhvillim modern React/SPA.',
        use: 'Ne kete rast perdoret per UI lokale te asistentit dhe build te klientit.',
      },
    },
    'Express': {
      en: {
        what: 'A Node.js web framework used to build HTTP APIs and backend services.',
        use: 'In this case it is used for assistant query APIs, auth, RAG, and tool endpoints.',
      },
      sv: {
        what: 'Ett Node.js-webbframework som används för HTTP-API:er och backend-tjänster.',
        use: 'I det här fallet används det för assistent-API:er, auth, RAG och verktygsendpoints.',
      },
      sq: {
        what: 'Nje framework web Node.js qe perdoret per API HTTP dhe sherbime backend.',
        use: 'Ne kete rast perdoret per API query te asistentit, auth, RAG dhe endpoints mjetesh.',
      },
    },
    'PostgreSQL': {
      en: {
        what: 'A relational database used to store structured application data reliably.',
        use: 'In this case it is used for hub persistence: users, chat, knowledge, and ops state.',
      },
      sv: {
        what: 'En relationell databas som används för att lagra strukturerad appdata pålitligt.',
        use: 'I det här fallet används det för hub-persistens: användare, chat, knowledge och ops-state.',
      },
      sq: {
        what: 'Nje baze relacionale qe perdoret per te ruajtur te dhena te strukturuara te app-it ne menyre te besueshme.',
        use: 'Ne kete rast perdoret per persistencen e hub: perdorues, chat, knowledge dhe gjendje ops.',
      },
    },
    'Docker': {
      en: {
        what: 'A container platform used to package apps and dependencies for repeatable runs.',
        use: 'In this case it is used for the local Postgres stack and reproducible hub setup.',
      },
      sv: {
        what: 'En containerplattform som används för att paketera appar och beroenden för reproducerbara körningar.',
        use: 'I det här fallet används det för lokal Postgres-stack och reproducerbar hub-setup.',
      },
      sq: {
        what: 'Nje platforme kontejneresh qe perdoret per te paketuar app dhe varshmëri per ekzekutim te riprodhueshem.',
        use: 'Ne kete rast perdoret per stack-un lokal Postgres dhe setup te riprodhueshem te hub.',
      },
    },
    'OpenAI': {
      en: {
        what: 'An AI platform used for large language models and related generative APIs.',
        use: 'In this case it is used for grounded assistant answers, embeddings, and voice-related flows.',
      },
      sv: {
        what: 'En AI-plattform som används för stora språkmodeller och generativa API:er.',
        use: 'I det här fallet används det för grounded assistent-svar, embeddings och röstrelaterade flöden.',
      },
      sq: {
        what: 'Nje platforme AI qe perdoret per modele te medha gjuhe dhe API gjenerative.',
        use: 'Ne kete rast perdoret per pergjigje te ankoruara te asistentit, embeddings dhe rrjedha zeri.',
      },
    },
    'RAG': {
      en: {
        what: 'Retrieval-Augmented Generation — fetch relevant docs then answer with an LLM.',
        use: 'In this case it is used so staff questions are answered from business knowledge, not free hallucination.',
      },
      sv: {
        what: 'Retrieval-Augmented Generation — hämta relevanta dokument och svara med en LLM.',
        use: 'I det här fallet används det så personalfrågor besvaras från verksamhetskunskap, inte fri hallucination.',
      },
      sq: {
        what: 'Retrieval-Augmented Generation — mer dokumente relevante pastaj pergjigju me LLM.',
        use: 'Ne kete rast perdoret qe pyetjet e stafit te pergjigjen nga njohuria e biznesit, jo hallucinim i lire.',
      },
    },
    'Raspberry Pi': {
      en: {
        what: 'A small single-board computer used for embedded and edge deployments.',
        use: 'In this case it is the planned thin/edge client target for on-site assistant access.',
      },
      sv: {
        what: 'En liten enkorts dator som används för embedded- och edge-deploy.',
        use: 'I det här fallet är det planerad tunn/edge-klient för assistentåtkomst på plats.',
      },
      sq: {
        what: 'Nje kompjuter i vogel single-board qe perdoret per deploy embedded dhe edge.',
        use: 'Ne kete rast eshte klienti i hollë/edge i planifikuar per qasje te asistentit ne vend.',
      },
    },
  },
  'gematrior': {
    'Next.js 15': {
      en: {
        what: 'A full-stack React framework used to build web apps with UI, APIs, and routing.',
        use: 'In this case it is used for App Router for the SaaS UI, APIs, and auth routes.',
      },
      sv: {
        what: 'Ett fullstack React-ramverk som används för att bygga webbappar med UI, API:er och routing.',
        use: 'I det här fallet används det för App Router för SaaS-UI, API:er och auth-rutter.',
      },
      sq: {
        what: 'Nje framework full-stack React qe perdoret per te ndertuar app web me UI, API dhe routing.',
        use: 'Ne kete rast perdoret per App Router per UI SaaS, API dhe rruge auth.',
      },
    },
    'TypeScript': {
      en: {
        what: 'Typed JavaScript used to catch errors early and keep large codebases safer.',
        use: 'In this case it is used for keeping gematria calculators, billing, and API contracts type-safe.',
      },
      sv: {
        what: 'Typad JavaScript som används för att fånga fel tidigt och hålla stora kodbaser säkrare.',
        use: 'I det här fallet används det för att hålla gematria-beräkningar, billing och API-kontrakt typsäkra.',
      },
      sq: {
        what: 'JavaScript i tipizuar qe perdoret per te kapur gabime heret dhe mbajtur kodebazat me te sigurta.',
        use: 'Ne kete rast perdoret per Mban kalkulatoret e gematrise, billing dhe kontrata API.',
      },
    },
    'Prisma': {
      en: {
        what: 'An ORM used to talk to SQL databases from application code with typed models.',
        use: 'In this case it is used for modeling users, credits, subscriptions, and gematria data.',
      },
      sv: {
        what: 'En ORM som används för att prata med SQL-databaser från appkod med typade modeller.',
        use: 'I det här fallet används det för att modellera användare, krediter, prenumerationer och gematria-data.',
      },
      sq: {
        what: 'Nje ORM qe perdoret per te komunikuar me databaza SQL nga kodi i app-it me modele te tipizuara.',
        use: 'Ne kete rast perdoret per Modelon perdorues, kredi, abonime dhe te dhena gematria.',
      },
    },
    'PostgreSQL': {
      en: {
        what: 'A relational database used to store structured application data reliably.',
        use: 'In this case it is used for storing accounts, Stripe state, and calculation history on the VPS.',
      },
      sv: {
        what: 'En relationell databas som används för att lagra strukturerad appdata pålitligt.',
        use: 'I det här fallet används det för att lagra konton, Stripe-status och beräkningshistorik på VPS.',
      },
      sq: {
        what: 'Nje baze relacionale qe perdoret per te ruajtur te dhena te strukturuara te app-it ne menyre te besueshme.',
        use: 'Ne kete rast perdoret per Ruan llogari, gjendje Stripe dhe historik llogaritjesh ne VPS.',
      },
    },
    'Stripe': {
      en: {
        what: 'A payments platform used to charge customers and manage subscriptions.',
        use: 'In this case it is used for Credits and Pro subscriptions for the live gematria product.',
      },
      sv: {
        what: 'En betalningsplattform som används för att ta betalt och hantera prenumerationer.',
        use: 'I det här fallet används det för Krediter och Pro-prenumerationer för den live gematria-produkten.',
      },
      sq: {
        what: 'Nje platforme pagesash qe perdoret per te tarifuar kliente dhe menaxhuar abonime.',
        use: 'Ne kete rast perdoret per Kredi dhe abonime Pro per produktin live te gematrise.',
      },
    },
    'Docker': {
      en: {
        what: 'A container runtime used to package apps and dependencies for the same run everywhere.',
        use: 'In this case it is used for packaging the Next.js app and Postgres for reproducible VPS deploy.',
      },
      sv: {
        what: 'En containermiljö som används för att paketera appar och beroenden så de körs likadant överallt.',
        use: 'I det här fallet används det för att paketera Next.js-appen och Postgres för reproducerbar VPS-deploy.',
      },
      sq: {
        what: 'Nje runtime kontejneri qe perdoret per te paketizuar app dhe varësi qe te ekzekutohen njesoj kudo.',
        use: 'Ne kete rast perdoret per Paketizon app-in Next.js dhe Postgres per deploy te riprodhueshem.',
      },
    },
    'Caddy': {
      en: {
        what: 'A reverse proxy used to terminate HTTPS and route traffic to app containers.',
        use: 'In this case it is used for fronting the Docker stack on the production domain.',
      },
      sv: {
        what: 'En omvänd proxy som används för att terminera HTTPS och skicka trafik till app-containrar.',
        use: 'I det här fallet används det för att stå framför Docker-stacken på produktionsdomänen.',
      },
      sq: {
        what: 'Nje proxy e kundert qe perdoret per te mbyllur HTTPS dhe drejtuar trafikun te kontejneret e app-it.',
        use: 'Ne kete rast perdoret per Perpara stack-ut Docker ne domainin e prodhimit.',
      },
    },
    'OpenAI': {
      en: {
        what: 'An LLM API used to generate and transform text with large language models.',
        use: 'In this case it is used for powering AI helpers and text tools inside the gematria product.',
      },
      sv: {
        what: 'Ett LLM-API som används för att generera och bearbeta text med stora språkmodeller.',
        use: 'I det här fallet används det för att driva AI-hjälpare och textverktyg i gematria-produkten.',
      },
      sq: {
        what: 'Nje API LLM qe perdoret per te gjeneruar dhe transformuar tekst me modele te medha gjuhe.',
        use: 'Ne kete rast perdoret per Fuqizon ndihmes AI dhe mjete teksti brenda produktit te gematrise.',
      },
    },
  },
  'smartfood': {
    'Next.js 16': {
      en: {
        what: 'A full-stack React framework used to build web apps with UI, APIs, and routing.',
        use: 'In this case it is used for Meal-logging UI, APIs, and auth in one app.',
      },
      sv: {
        what: 'Ett fullstack React-ramverk som används för att bygga webbappar med UI, API:er och routing.',
        use: 'I det här fallet används det för Måltidsloggning-UI, API:er och auth i en app.',
      },
      sq: {
        what: 'Nje framework full-stack React qe perdoret per te ndertuar app web me UI, API dhe routing.',
        use: 'Ne kete rast perdoret per UI regjistrimi vaktash, API dhe auth ne nje app.',
      },
    },
    'TypeScript': {
      en: {
        what: 'Typed JavaScript used to catch errors early and keep large codebases safer.',
        use: 'In this case it is used for Shared types across Vision, OpenAI, and local TF.js flows.',
      },
      sv: {
        what: 'Typad JavaScript som används för att fånga fel tidigt och hålla stora kodbaser säkrare.',
        use: 'I det här fallet används det för Delade typer över Vision, OpenAI och lokala TF.js-flöden.',
      },
      sq: {
        what: 'JavaScript i tipizuar qe perdoret per te kapur gabime heret dhe mbajtur kodebazat me te sigurta.',
        use: 'Ne kete rast perdoret per Tipe te perbashketa per Vision, OpenAI dhe rrjedha TF.js.',
      },
    },
    'Tailwind': {
      en: {
        what: 'A utility CSS framework used to style UIs quickly and consistently.',
        use: 'In this case it is used for Fast, consistent styling for the meal logger UI.',
      },
      sv: {
        what: 'Ett utility-CSS-ramverk som används för att styla UI snabbt och konsekvent.',
        use: 'I det här fallet används det för Snabb, konsekvent styling för måltidsloggarens UI.',
      },
      sq: {
        what: 'Nje framework CSS utility qe perdoret per te stiluar UI shpejt dhe ne menyre konsistente.',
        use: 'Ne kete rast perdoret per Stil i shpejte dhe konsistent per UI e regjistruesit te vaktave.',
      },
    },
    'Google Vision': {
      en: {
        what: 'A cloud vision API used to read text and objects from images.',
        use: 'In this case it is used for reading plates, ingredients, and barcodes from photos.',
      },
      sv: {
        what: 'Ett moln-vision-API som används för att läsa text och objekt från bilder.',
        use: 'I det här fallet används det för att läsa tallrikar, ingredienser och streckkoder från foton.',
      },
      sq: {
        what: 'Nje API vision ne cloud qe perdoret per te lexuar tekst dhe objekte nga imazhet.',
        use: 'Ne kete rast perdoret per Lexon pjata, perberes dhe barkode nga foto.',
      },
    },
    'OpenAI': {
      en: {
        what: 'An LLM API used to generate and transform text with large language models.',
        use: 'In this case it is used for turning vision/OCR signals into structured meal descriptions.',
      },
      sv: {
        what: 'Ett LLM-API som används för att generera och bearbeta text med stora språkmodeller.',
        use: 'I det här fallet används det för att omvandla vision/OCR-signaler till strukturerade måltidsbeskrivningar.',
      },
      sq: {
        what: 'Nje API LLM qe perdoret per te gjeneruar dhe transformuar tekst me modele te medha gjuhe.',
        use: 'Ne kete rast perdoret per Kthen sinjale vision/OCR ne pershkrime te strukturuara vaktash.',
      },
    },
    'TensorFlow.js': {
      en: {
        what: 'An in-browser ML library used to run models on the client.',
        use: 'In this case it is used for Client-side model helpers without a Python backend.',
      },
      sv: {
        what: 'Ett ML-bibliotek i webbläsaren som används för att köra modeller på klienten.',
        use: 'I det här fallet används det för Klientmodeller utan Python-backend.',
      },
      sq: {
        what: 'Nje biblioteke ML ne shfletues qe perdoret per te ekzekutuar modele ne klient.',
        use: 'Ne kete rast perdoret per Ndihmes modelesh ne klient pa backend Python.',
      },
    },
    'SQLite': {
      en: {
        what: 'An embedded SQL database used for local app data without a separate DB server.',
        use: 'In this case it is used for Local app data for meals and sessions without a heavy DB server.',
      },
      sv: {
        what: 'En inbäddad SQL-databas som används för lokal appdata utan separat DB-server.',
        use: 'I det här fallet används det för Lokal appdata för måltider och sessioner utan tung DB-server.',
      },
      sq: {
        what: 'Nje DB SQL e futur qe perdoret per te dhena lokale te app-it pa server te vecante DB.',
        use: 'Ne kete rast perdoret per Te dhena lokale per vakte dhe sesione pa server te rende.',
      },
    },
    'OAuth': {
      en: {
        what: 'A delegated login standard used for secure sign-in with identity providers.',
        use: 'In this case it is used for Secure sign-in for the meal logging product.',
      },
      sv: {
        what: 'En delegerad inloggningsstandard som används för säker inloggning via identitetsleverantörer.',
        use: 'I det här fallet används det för Säker inloggning för måltidsloggprodukten.',
      },
      sq: {
        what: 'Nje standard hyrjeje te deleguar qe perdoret per sign-in te sigurt me ofrues identiteti.',
        use: 'Ne kete rast perdoret per Sign-in i sigurt per produktin e regjistrimit te vaktave.',
      },
    },
    'Docker': {
      en: {
        what: 'A container runtime used to package apps and dependencies for the same run everywhere.',
        use: 'In this case it is used for Ships the Next.js app for self-hosted production.',
      },
      sv: {
        what: 'En containermiljö som används för att paketera appar och beroenden så de körs likadant överallt.',
        use: 'I det här fallet används det för att leverera Next.js-appen för self-hosted produktion.',
      },
      sq: {
        what: 'Nje runtime kontejneri qe perdoret per te paketizuar app dhe varësi qe te ekzekutohen njesoj kudo.',
        use: 'Ne kete rast perdoret per Dergon app-in Next.js per prodhim self-hosted.',
      },
    },
    'Caddy': {
      en: {
        what: 'A reverse proxy used to terminate HTTPS and route traffic to app containers.',
        use: 'In this case it is used for Terminates TLS in front of the SmartFood container.',
      },
      sv: {
        what: 'En omvänd proxy som används för att terminera HTTPS och skicka trafik till app-containrar.',
        use: 'I det här fallet används det för att terminera TLS framför SmartFood-containern.',
      },
      sq: {
        what: 'Nje proxy e kundert qe perdoret per te mbyllur HTTPS dhe drejtuar trafikun te kontejneret e app-it.',
        use: 'Ne kete rast perdoret per Mbyll TLS perpara kontejnerit SmartFood.',
      },
    },
  },
  'swiiftly-ai': {
    'React 18': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for Staff-assistant screens and interactive chat flows.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för Staff-assistant-vyer och interaktiva chattflöden.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Ekrane staff-assistant dhe rrjedha chat interaktive.',
      },
    },
    'TypeScript': {
      en: {
        what: 'Typed JavaScript used to catch errors early and keep large codebases safer.',
        use: 'In this case it is used for Safer contracts between React UI and Express/FastAPI-style services.',
      },
      sv: {
        what: 'Typad JavaScript som används för att fånga fel tidigt och hålla stora kodbaser säkrare.',
        use: 'I det här fallet används det för Säkrare kontrakt mellan React-UI och Express/FastAPI-liknande tjänster.',
      },
      sq: {
        what: 'JavaScript i tipizuar qe perdoret per te kapur gabime heret dhe mbajtur kodebazat me te sigurta.',
        use: 'Ne kete rast perdoret per Kontrata me te sigurta midis UI React dhe sherbimeve Express/FastAPI.',
      },
    },
    'Vite': {
      en: {
        what: 'A frontend build tool used for fast local development and production bundles.',
        use: 'In this case it is used for Fast dev/build for the React staff assistant.',
      },
      sv: {
        what: 'Ett frontend-byggverktyg som används för snabb lokal utveckling och produktionsbyggen.',
        use: 'I det här fallet används det för Snabb dev/build för React staff assistant.',
      },
      sq: {
        what: 'Nje mjet build frontend qe perdoret per zhvillim lokal te shpejte dhe bundle prodhimi.',
        use: 'Ne kete rast perdoret per Dev/build i shpejte per assistant-in React.',
      },
    },
    'Express': {
      en: {
        what: 'A Node.js HTTP framework used to define APIs and server routes.',
        use: 'In this case it is used for API layer around RAG and guardrail endpoints.',
      },
      sv: {
        what: 'Ett Node.js HTTP-ramverk som används för att definiera API:er och serverrutter.',
        use: 'I det här fallet används det för API-lager runt RAG- och guardrail-endpoints.',
      },
      sq: {
        what: 'Nje framework HTTP Node.js qe perdoret per te percaktuar API dhe rruge serveri.',
        use: 'Ne kete rast perdoret per Shtrese API rreth endpoint-eve RAG dhe guardrail.',
      },
    },
    'FastAPI patterns': {
      en: {
        what: 'Python API design patterns used to structure service endpoints cleanly.',
        use: 'In this case it is used for Structured service endpoints for AI pipelines.',
      },
      sv: {
        what: 'Python API-mönster som används för att strukturera service-endpoints tydligt.',
        use: 'I det här fallet används det för Strukturerade service-endpoints för AI-pipelines.',
      },
      sq: {
        what: 'Modele API Python qe perdoren per te strukturuar endpoint sherbimi ne menyre te qarte.',
        use: 'Ne kete rast perdoret per Endpoint sherbimi te strukturuara per pipeline AI.',
      },
    },
    'RAG': {
      en: {
        what: 'Retrieval-augmented generation used to ground LLM answers in your own documents.',
        use: 'In this case it is used for grounding answers in company/staff knowledge.',
      },
      sv: {
        what: 'Retrieval-augmented generation som används för att förankra LLM-svar i egna dokument.',
        use: 'I det här fallet används det för att förankra svar i företags-/staff-kunskap.',
      },
      sq: {
        what: 'RAG qe perdoret per te ankoruar pergjigjet e LLM ne dokumentet e veta.',
        use: 'Ne kete rast perdoret per Ankoron pergjigjet ne njohuri kompani/staff.',
      },
    },
    'OCR/ASR': {
      en: {
        what: 'Text and speech extraction used to pull content from documents and audio.',
        use: 'In this case it is used for pulling text from documents and voice into the assistant.',
      },
      sv: {
        what: 'Text- och talextraktion som används för att hämta innehåll från dokument och ljud.',
        use: 'I det här fallet används det för att hämta text från dokument och röst till assistenten.',
      },
      sq: {
        what: 'Nxjerrje tekst/ze qe perdoret per te marre permbajtje nga dokumente dhe audio.',
        use: 'Ne kete rast perdoret per Sjell tekst nga dokumente dhe ze te assistenti.',
      },
    },
    'LLM Guardrails': {
      en: {
        what: 'Safety controls used to constrain LLM outputs in production assistants.',
        use: 'In this case it is used for constraining model outputs for workplace-safe assistant replies.',
      },
      sv: {
        what: 'Säkerhetskontroller som används för att begränsa LLM-output i produktionsassistenter.',
        use: 'I det här fallet används det för att begränsa modelloutput för arbetsplatssäkra assistent-svar.',
      },
      sq: {
        what: 'Kontrolle sigurie qe perdoren per te kufizuar output-in e LLM ne asistente prodhimi.',
        use: 'Ne kete rast perdoret per Kufizon output-in e modelit per pergjigje te sigurta.',
      },
    },
  },
  'podmanager-lia': {
    'Next.js': {
      en: {
        what: 'A full-stack React framework used to build web apps with UI, APIs, and routing.',
        use: 'In this case it is used for Podcast platform UI and server routes.',
      },
      sv: {
        what: 'Ett fullstack React-ramverk som används för att bygga webbappar med UI, API:er och routing.',
        use: 'I det här fallet används det för Podcastplattforms-UI och serverrutter.',
      },
      sq: {
        what: 'Nje framework full-stack React qe perdoret per te ndertuar app web me UI, API dhe routing.',
        use: 'Ne kete rast perdoret per UI platforme podcast dhe rruge serveri.',
      },
    },
    'React': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for Interactive podcast production surfaces in the LIA app.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för Interaktiva podcastproduktionsytor i LIA-appen.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Siperfaqe interaktive prodhimi podcast ne app-in LIA.',
      },
    },
    'TypeScript': {
      en: {
        what: 'Typed JavaScript used to catch errors early and keep large codebases safer.',
        use: 'In this case it is used for Shared types across Next.js UI and FastAPI services.',
      },
      sv: {
        what: 'Typad JavaScript som används för att fånga fel tidigt och hålla stora kodbaser säkrare.',
        use: 'I det här fallet används det för Delade typer mellan Next.js-UI och FastAPI-tjänster.',
      },
      sq: {
        what: 'JavaScript i tipizuar qe perdoret per te kapur gabime heret dhe mbajtur kodebazat me te sigurta.',
        use: 'Ne kete rast perdoret per Tipe te perbashketa midis UI Next.js dhe sherbimeve FastAPI.',
      },
    },
    'FastAPI': {
      en: {
        what: 'A Python web framework used to build fast typed HTTP APIs.',
        use: 'In this case it is used for Backend for podcast AI jobs and realtime services.',
      },
      sv: {
        what: 'Ett Python-webbramverk som används för att bygga snabba typade HTTP-API:er.',
        use: 'I det här fallet används det för Backend för podcast-AI-jobb och realtime-tjänster.',
      },
      sq: {
        what: 'Nje framework web Python qe perdoret per te ndertuar API HTTP te shpejta dhe te tipizuara.',
        use: 'Ne kete rast perdoret per Backend per jobe AI podcast dhe sherbime realtime.',
      },
    },
    'MongoDB': {
      en: {
        what: 'A document database used to store flexible JSON-like application records.',
        use: 'In this case it is used for storing podcast entities and flexible production metadata.',
      },
      sv: {
        what: 'En dokumentdatabas som används för att lagra flexibla JSON-liknande app-poster.',
        use: 'I det här fallet används det för att lagra podcast-entiteter och flexibel produktionsmetadata.',
      },
      sq: {
        what: 'Nje baze dokumentesh qe perdoret per te ruajtur rekorde fleksibël JSON-like te app-it.',
        use: 'Ne kete rast perdoret per Ruan entitete podcast dhe metadata fleksibel prodhimi.',
      },
    },
    'Whisper': {
      en: {
        what: 'A speech-to-text model used to transcribe audio into text.',
        use: 'In this case it is used for transcribing podcast audio in the pipeline.',
      },
      sv: {
        what: 'En tal-till-text-modell som används för att transkribera ljud till text.',
        use: 'I det här fallet används det för att transkribera podcastljud i pipelinen.',
      },
      sq: {
        what: 'Nje model speech-to-text qe perdoret per te transkriptuar audio ne tekst.',
        use: 'Ne kete rast perdoret per Transkripton audio podcast ne pipeline.',
      },
    },
    'Azure Speech': {
      en: {
        what: 'Cloud speech services used for production speech recognition and synthesis.',
        use: 'In this case it is used for Production speech features alongside Whisper.',
      },
      sv: {
        what: 'Molnbaserade taltjänster som används för taligenkänning och -syntes i produktion.',
        use: 'I det här fallet används det för Produktionstalfunktioner tillsammans med Whisper.',
      },
      sq: {
        what: 'Sherbime speech ne cloud qe perdoren per njohje dhe sinteze te zerit ne prodhim.',
        use: 'Ne kete rast perdoret per Vecori speech prodhimi se bashku me Whisper.',
      },
    },
    'Socket.io': {
      en: {
        what: 'A realtime library used for live updates over WebSockets.',
        use: 'In this case it is used for Live audio/status updates during podcast workflows.',
      },
      sv: {
        what: 'Ett realtime-bibliotek som används för liveuppdateringar via WebSockets.',
        use: 'I det här fallet används det för Live ljud-/statusuppdateringar under podcastflöden.',
      },
      sq: {
        what: 'Nje biblioteke realtime qe perdoret per perditesime live me WebSockets.',
        use: 'Ne kete rast perdoret per Perditesime live audio/status gjate rrjedhave podcast.',
      },
    },
    'Azure Blob': {
      en: {
        what: 'Object storage used to keep large files and media in the cloud.',
        use: 'In this case it is used for holding podcast media assets in the cloud.',
      },
      sv: {
        what: 'Objektlagring som används för att spara stora filer och media i molnet.',
        use: 'I det här fallet används det för att lagra podcast-mediafiler i molnet.',
      },
      sq: {
        what: 'Ruajtje objektesh qe perdoret per te mbajtur skedare te medha dhe media ne cloud.',
        use: 'Ne kete rast perdoret per Mban media podcast ne cloud.',
      },
    },
  },
  'telco-churn': {
    'Python': {
      en: {
        what: 'A programming language used for scripting, data work, APIs, and ML.',
        use: 'In this case it is used for Data prep, model training, and Streamlit app logic.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för skript, dataarbete, API:er och ML.',
        use: 'I det här fallet används det för Dataprep, modellträning och Streamlit-applogik.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per skriptim, pune me te dhena, API dhe ML.',
        use: 'Ne kete rast perdoret per Pergatitje te dhenash, trajnim modeli dhe logjike Streamlit.',
      },
    },
    'Jupyter': {
      en: {
        what: 'Interactive notebooks used to explore data and run experiments step by step.',
        use: 'In this case it is used for Explored churn features and model experiments.',
      },
      sv: {
        what: 'Interaktiva notebooks som används för att utforska data och köra experiment steg för steg.',
        use: 'I det här fallet används det för Utforskade churn-features och modellexperiment.',
      },
      sq: {
        what: 'Notebook interaktive qe perdoren per te eksploruar te dhena dhe ekzekutuar eksperimente hap pas hapi.',
        use: 'Ne kete rast perdoret per Eksplorim features churn dhe eksperimente modeli.',
      },
    },
    'Random Forest': {
      en: {
        what: 'An ensemble ML model used for classification and regression on tabular data.',
        use: 'In this case it is used for predicting telecom customer churn risk.',
      },
      sv: {
        what: 'En ensemble-ML-modell som används för klassificering och regression på tabelldata.',
        use: 'I det här fallet används det för att prediktera churn-risk för telekomkunder.',
      },
      sq: {
        what: 'Nje model ML ensemble qe perdoret per klasifikim dhe regression ne te dhena tabelare.',
        use: 'Ne kete rast perdoret per Parashikon rrezikun e churn per kliente telekom.',
      },
    },
    'Streamlit': {
      en: {
        what: 'A Python UI framework used to turn scripts into interactive web apps quickly.',
        use: 'In this case it is used for Live dashboard for churn predictions.',
      },
      sv: {
        what: 'Ett Python UI-ramverk som används för att snabbt göra skript till interaktiva webbappar.',
        use: 'I det här fallet används det för Live dashboard för churn-prediktioner.',
      },
      sq: {
        what: 'Nje framework UI Python qe perdoret per te kthyer skripta ne app web interaktive shpejt.',
        use: 'Ne kete rast perdoret per Dashboard live per parashikime churn.',
      },
    },
    'scikit-learn': {
      en: {
        what: 'A classical ML library used to train and evaluate tabular models.',
        use: 'In this case it is used for Training/evaluation pipeline for the churn model.',
      },
      sv: {
        what: 'Ett klassiskt ML-bibliotek som används för att träna och utvärdera tabellmodeller.',
        use: 'I det här fallet används det för Tränings-/utvärderingspipeline för churn-modellen.',
      },
      sq: {
        what: 'Nje biblioteke ML klasike qe perdoret per te trajnuar dhe vleresuar modele tabelare.',
        use: 'Ne kete rast perdoret per Pipeline trajnimi/vleresimi per modelin e churn.',
      },
    },
    'Pandas': {
      en: {
        what: 'A tabular data library used to clean, join, and reshape datasets.',
        use: 'In this case it is used for cleaning and shapes telco customer datasets.',
      },
      sv: {
        what: 'Ett tabelldatabibliotek som används för att rensa, joina och forma om dataset.',
        use: 'I det här fallet används det för att rensa och formar telekomkunddataset.',
      },
      sq: {
        what: 'Nje biblioteke te dhenash tabelare qe perdoret per te pastruar, bashkuar dhe riformuar dataset.',
        use: 'Ne kete rast perdoret per Pastron dhe formon dataset klientesh telekom.',
      },
    },
    'Docker': {
      en: {
        what: 'A container runtime used to package apps and dependencies for the same run everywhere.',
        use: 'In this case it is used for packaging the Streamlit churn app for VPS hosting.',
      },
      sv: {
        what: 'En containermiljö som används för att paketera appar och beroenden så de körs likadant överallt.',
        use: 'I det här fallet används det för att paketera Streamlit-churn-appen för VPS-hosting.',
      },
      sq: {
        what: 'Nje runtime kontejneri qe perdoret per te paketizuar app dhe varësi qe te ekzekutohen njesoj kudo.',
        use: 'Ne kete rast perdoret per Paketizon app-in Streamlit churn per hosting VPS.',
      },
    },
    'Caddy': {
      en: {
        what: 'A reverse proxy used to terminate HTTPS and route traffic to app containers.',
        use: 'In this case it is used for serving the deployed churn dashboard securely.',
      },
      sv: {
        what: 'En omvänd proxy som används för att terminera HTTPS och skicka trafik till app-containrar.',
        use: 'I det här fallet används det för att servera den deployade churn-dashboarden säkert.',
      },
      sq: {
        what: 'Nje proxy e kundert qe perdoret per te mbyllur HTTPS dhe drejtuar trafikun te kontejneret e app-it.',
        use: 'Ne kete rast perdoret per Shërben dashboard-in churn te deployuar ne menyre te sigurt.',
      },
    },
  },
  'diamonds-analysis': {
    'Python': {
      en: {
        what: 'A programming language used for scripting, data work, APIs, and ML.',
        use: 'In this case it is used for Analysis scripts and Streamlit app code.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för skript, dataarbete, API:er och ML.',
        use: 'I det här fallet används det för Analysskript och Streamlit-appkod.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per skriptim, pune me te dhena, API dhe ML.',
        use: 'Ne kete rast perdoret per Skripta analize dhe kod app Streamlit.',
      },
    },
    'Streamlit': {
      en: {
        what: 'A Python UI framework used to turn scripts into interactive web apps quickly.',
        use: 'In this case it is used for Interactive diamond price/analysis dashboard.',
      },
      sv: {
        what: 'Ett Python UI-ramverk som används för att snabbt göra skript till interaktiva webbappar.',
        use: 'I det här fallet används det för Interaktiv dashboard för diamantpris/analys.',
      },
      sq: {
        what: 'Nje framework UI Python qe perdoret per te kthyer skripta ne app web interaktive shpejt.',
        use: 'Ne kete rast perdoret per Dashboard interaktiv per cmim/analize diamantesh.',
      },
    },
    'Pandas': {
      en: {
        what: 'A tabular data library used to clean, join, and reshape datasets.',
        use: 'In this case it is used for loading and transforms diamond datasets for analysis.',
      },
      sv: {
        what: 'Ett tabelldatabibliotek som används för att rensa, joina och forma om dataset.',
        use: 'I det här fallet används det för att ladda och transformerar diamant-dataset för analys.',
      },
      sq: {
        what: 'Nje biblioteke te dhenash tabelare qe perdoret per te pastruar, bashkuar dhe riformuar dataset.',
        use: 'Ne kete rast perdoret per Ngarkon dhe transformon dataset diamantesh per analize.',
      },
    },
    'Data Analysis': {
      en: {
        what: 'Exploratory analysis used to find patterns, drivers, and decision metrics in data.',
        use: 'In this case it is used for exploring price drivers and diamond features.',
      },
      sv: {
        what: 'Utforskande analys som används för att hitta mönster, drivare och beslutsmått i data.',
        use: 'I det här fallet används det för att utforska prisdrivare och diamantfeatures.',
      },
      sq: {
        what: 'Analize eksploruese qe perdoret per te gjetur modele, faktore dhe metrika vendimmarrjeje ne te dhena.',
        use: 'Ne kete rast perdoret per Eksploron faktore cmimi dhe features diamantesh.',
      },
    },
    'Jupyter': {
      en: {
        what: 'Interactive notebooks used to explore data and run experiments step by step.',
        use: 'In this case it is used for Exploratory analysis before the Streamlit app.',
      },
      sv: {
        what: 'Interaktiva notebooks som används för att utforska data och köra experiment steg för steg.',
        use: 'I det här fallet används det för Utforskande analys före Streamlit-appen.',
      },
      sq: {
        what: 'Notebook interaktive qe perdoren per te eksploruar te dhena dhe ekzekutuar eksperimente hap pas hapi.',
        use: 'Ne kete rast perdoret per Analize eksploruese para app-it Streamlit.',
      },
    },
    'Docker': {
      en: {
        what: 'A container runtime used to package apps and dependencies for the same run everywhere.',
        use: 'In this case it is used for deploying the diamonds Streamlit app on the VPS.',
      },
      sv: {
        what: 'En containermiljö som används för att paketera appar och beroenden så de körs likadant överallt.',
        use: 'I det här fallet används det för att deploya diamonds-Streamlit-appen på VPS.',
      },
      sq: {
        what: 'Nje runtime kontejneri qe perdoret per te paketizuar app dhe varësi qe te ekzekutohen njesoj kudo.',
        use: 'Ne kete rast perdoret per Deployon app-in Streamlit diamonds ne VPS.',
      },
    },
    'Caddy': {
      en: {
        what: 'A reverse proxy used to terminate HTTPS and route traffic to app containers.',
        use: 'In this case it is used for fronting the hosted diamonds analysis app.',
      },
      sv: {
        what: 'En omvänd proxy som används för att terminera HTTPS och skicka trafik till app-containrar.',
        use: 'I det här fallet används det för Framför den hostade diamonds-analysappen.',
      },
      sq: {
        what: 'Nje proxy e kundert qe perdoret per te mbyllur HTTPS dhe drejtuar trafikun te kontejneret e app-it.',
        use: 'Ne kete rast perdoret per Perpara app-it te hostuar te analizes se diamanteve.',
      },
    },
  },
  'crm-system': {
    'React': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for CRM screens and workflows under test.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för CRM-vyer och flöden under test.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Ekrane CRM dhe rrjedha nen test.',
      },
    },
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for ASP.NET CRM API and business logic.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för ASP.NET CRM-API och affärslogik.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per API CRM ASP.NET dhe logjike biznesi.',
      },
    },
    'ASP.NET Core': {
      en: {
        what: 'A .NET web framework used to build REST APIs and server apps.',
        use: 'In this case it is used for REST API for the CRM system under test.',
      },
      sv: {
        what: 'Ett .NET-webbramverk som används för att bygga REST API:er och serverappar.',
        use: 'I det här fallet används det för REST API för CRM-systemet under test.',
      },
      sq: {
        what: 'Nje framework web .NET qe perdoret per te ndertuar REST API dhe app serveri.',
        use: 'Ne kete rast perdoret per REST API per sistemin CRM nen test.',
      },
    },
    'PostgreSQL': {
      en: {
        what: 'A relational database used to store structured application data reliably.',
        use: 'In this case it is used for CRM entities used by API and test suites.',
      },
      sv: {
        what: 'En relationell databas som används för att lagra strukturerad appdata pålitligt.',
        use: 'I det här fallet används det för CRM-entiteter använda av API och testsviter.',
      },
      sq: {
        what: 'Nje baze relacionale qe perdoret per te ruajtur te dhena te strukturuara te app-it ne menyre te besueshme.',
        use: 'Ne kete rast perdoret per Entitete CRM te perdorura nga API dhe suite testesh.',
      },
    },
    'xUnit': {
      en: {
        what: 'A .NET unit-test framework used to automate checks of application logic.',
        use: 'In this case it is used for Automated tests for C# CRM logic.',
      },
      sv: {
        what: 'Ett .NET-enhetstestramverk som används för att automatisera kontroller av applogik.',
        use: 'I det här fallet används det för Automatiserade tester för C# CRM-logik.',
      },
      sq: {
        what: 'Nje framework unit-test .NET qe perdoret per te automatizuar kontrolle te logjikes se app-it.',
        use: 'Ne kete rast perdoret per Teste te automatizuara per logjiken CRM ne C#.',
      },
    },
    'Playwright': {
      en: {
        what: 'A browser automation tool used for end-to-end UI testing.',
        use: 'In this case it is used for UI flows against the CRM frontend.',
      },
      sv: {
        what: 'Ett webbläsarautomationsverktyg som används för end-to-end UI-testning.',
        use: 'I det här fallet används det för UI-flöden mot CRM-frontend.',
      },
      sq: {
        what: 'Nje mjet automatizimi shfletuesi qe perdoret per testim UI end-to-end.',
        use: 'Ne kete rast perdoret per Rrjedha UI kunder frontend CRM.',
      },
    },
    'Postman': {
      en: {
        what: 'An API client used to call and verify HTTP endpoints during development and testing.',
        use: 'In this case it is used for Manual/collection checks of CRM endpoints.',
      },
      sv: {
        what: 'En API-klient som används för att anropa och verifiera HTTP-endpoints under utveckling och test.',
        use: 'I det här fallet används det för Manuella/collection-kontroller av CRM-endpoints.',
      },
      sq: {
        what: 'Nje klient API qe perdoret per te thirrur dhe verifikuar endpoint HTTP gjate zhvillimit dhe testimit.',
        use: 'Ne kete rast perdoret per Kontrolle manuale/collection te endpoint-eve CRM.',
      },
    },
  },
  'ai-ml-exercises': {
    'Python': {
      en: {
        what: 'A programming language used for scripting, data work, APIs, and ML.',
        use: 'In this case it is used for Classical ML and DL exercise notebooks.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för skript, dataarbete, API:er och ML.',
        use: 'I det här fallet används det för Klassiska ML- och DL-övningsnotebooks.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per skriptim, pune me te dhena, API dhe ML.',
        use: 'Ne kete rast perdoret per Notebook ushtrimesh ML klasike dhe DL.',
      },
    },
    'Jupyter': {
      en: {
        what: 'Interactive notebooks used to explore data and run experiments step by step.',
        use: 'In this case it is used for Runnable chapter exercises and theory checks.',
      },
      sv: {
        what: 'Interaktiva notebooks som används för att utforska data och köra experiment steg för steg.',
        use: 'I det här fallet används det för Körbara kapitelövningar och teorikontroller.',
      },
      sq: {
        what: 'Notebook interaktive qe perdoren per te eksploruar te dhena dhe ekzekutuar eksperimente hap pas hapi.',
        use: 'Ne kete rast perdoret per Ushtrime kapitulli dhe kontrolle teorie te ekzekutueshme.',
      },
    },
    'scikit-learn': {
      en: {
        what: 'A classical ML library used to train and evaluate tabular models.',
        use: 'In this case it is used for Regression, classification, clustering exercises.',
      },
      sv: {
        what: 'Ett klassiskt ML-bibliotek som används för att träna och utvärdera tabellmodeller.',
        use: 'I det här fallet används det för Övningar i regression, klassificering, klustring.',
      },
      sq: {
        what: 'Nje biblioteke ML klasike qe perdoret per te trajnuar dhe vleresuar modele tabelare.',
        use: 'Ne kete rast perdoret per Ushtrime regression, klasifikim, clustering.',
      },
    },
    'TensorFlow/Keras': {
      en: {
        what: 'A deep-learning stack used to train and run neural networks.',
        use: 'In this case it is used for Neural-net exercises in the course set.',
      },
      sv: {
        what: 'En djupinlärningsstack som används för att träna och köra neurala nätverk.',
        use: 'I det här fallet används det för Neuronnätsövningar i kurssetet.',
      },
      sq: {
        what: 'Nje stack deep learning qe perdoret per te trajnuar dhe ekzekutuar rrjeta neurale.',
        use: 'Ne kete rast perdoret per Ushtrime rrjetash neurale ne setin e kursit.',
      },
    },
    'Streamlit': {
      en: {
        what: 'A Python UI framework used to turn scripts into interactive web apps quickly.',
        use: 'In this case it is used for wrapping some exercise models in simple UIs.',
      },
      sv: {
        what: 'Ett Python UI-ramverk som används för att snabbt göra skript till interaktiva webbappar.',
        use: 'I det här fallet används det för att kapsla in vissa övningsmodeller i enkla UI:n.',
      },
      sq: {
        what: 'Nje framework UI Python qe perdoret per te kthyer skripta ne app web interaktive shpejt.',
        use: 'Ne kete rast perdoret per Mbeshtjell disa modele ushtrimesh ne UI te thjeshta.',
      },
    },
    'Pandas': {
      en: {
        what: 'A tabular data library used to clean, join, and reshape datasets.',
        use: 'In this case it is used for loading CSVs used across ML exercises.',
      },
      sv: {
        what: 'Ett tabelldatabibliotek som används för att rensa, joina och forma om dataset.',
        use: 'I det här fallet används det för att ladda CSV:er som används i ML-övningarna.',
      },
      sq: {
        what: 'Nje biblioteke te dhenash tabelare qe perdoret per te pastruar, bashkuar dhe riformuar dataset.',
        use: 'Ne kete rast perdoret per Ngarkon CSV te perdorura ne ushtrimet ML.',
      },
    },
  },
  'del1-kod': {
    'Python': {
      en: {
        what: 'A programming language used for scripting, data work, APIs, and ML.',
        use: 'In this case it is used for DL knowledge-check notebooks and apps.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för skript, dataarbete, API:er och ML.',
        use: 'I det här fallet används det för DL knowledge-check notebooks och appar.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per skriptim, pune me te dhena, API dhe ML.',
        use: 'Ne kete rast perdoret per Notebook dhe app per knowledge-check DL.',
      },
    },
    'TensorFlow/Keras': {
      en: {
        what: 'A deep-learning stack used to train and run neural networks.',
        use: 'In this case it is used for ANN/CNN/RNN style models in del1 code.',
      },
      sv: {
        what: 'En djupinlärningsstack som används för att träna och köra neurala nätverk.',
        use: 'I det här fallet används det för ANN/CNN/RNN-liknande modeller i del1-koden.',
      },
      sq: {
        what: 'Nje stack deep learning qe perdoret per te trajnuar dhe ekzekutuar rrjeta neurale.',
        use: 'Ne kete rast perdoret per Modele stili ANN/CNN/RNN ne kodin del1.',
      },
    },
    'KerasTuner': {
      en: {
        what: 'A hyperparameter search tool used to tune neural-network training setups.',
        use: 'In this case it is used for tuning neural nets for course tasks.',
      },
      sv: {
        what: 'Ett hyperparametersökningsverktyg som används för att finjustera träningssetups för neurala nät.',
        use: 'I det här fallet används det för att finjustera neuronnät för kursuppgifter.',
      },
      sq: {
        what: 'Nje mjet kerkimi hiperparametrash qe perdoret per te rregulluar setup trajnimi te rrjetave neurale.',
        use: 'Ne kete rast perdoret per Rregullon rrjeta neurale per detyra kursi.',
      },
    },
    'Streamlit': {
      en: {
        what: 'A Python UI framework used to turn scripts into interactive web apps quickly.',
        use: 'In this case it is used for exposing trained models in small web apps.',
      },
      sv: {
        what: 'Ett Python UI-ramverk som används för att snabbt göra skript till interaktiva webbappar.',
        use: 'I det här fallet används det för att exponera tränade modeller i små webbappar.',
      },
      sq: {
        what: 'Nje framework UI Python qe perdoret per te kthyer skripta ne app web interaktive shpejt.',
        use: 'Ne kete rast perdoret per Ekspozon modele te trajnuara ne app te vogla web.',
      },
    },
    'RAG': {
      en: {
        what: 'Retrieval-augmented generation used to ground LLM answers in your own documents.',
        use: 'In this case it is used for Chapter chatbot/RAG knowledge-check work.',
      },
      sv: {
        what: 'Retrieval-augmented generation som används för att förankra LLM-svar i egna dokument.',
        use: 'I det här fallet används det för Kapitel chatbot/RAG knowledge-check.',
      },
      sq: {
        what: 'RAG qe perdoret per te ankoruar pergjigjet e LLM ne dokumentet e veta.',
        use: 'Ne kete rast perdoret per Pune knowledge-check chatbot/RAG kapitulli.',
      },
    },
    'Google GenAI': {
      en: {
        what: 'Google\'s generative AI API used to call Gemini models from apps.',
        use: 'In this case it is used for powering RAG/chatbot exercises in the course.',
      },
      sv: {
        what: 'Googles generativa AI-API som används för att anropa Gemini-modeller från appar.',
        use: 'I det här fallet används det för att driva RAG/chatbot-övningar i kursen.',
      },
      sq: {
        what: 'API e AI gjeneruese e Google qe perdoret per te thirrur modelet Gemini nga app-et.',
        use: 'Ne kete rast perdoret per Fuqizon ushtrimet RAG/chatbot ne kurs.',
      },
    },
  },
  'dissatisfiedcustomer': {
    'JavaScript': {
      en: {
        what: 'A programming language used for browser UIs and Node.js services.',
        use: 'In this case it is used for Language of the group CRM UI and Node services.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
        use: 'I det här fallet används det för Språket för gruppens CRM-UI och Node-tjänster.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
        use: 'Ne kete rast perdoret per Gjuha e UI CRM te grupit dhe sherbimeve Node.',
      },
    },
    'React': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for Customer/CRM screens in the group project.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för Kund-/CRM-vyer i grupprojektet.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Ekrane klient/CRM ne projektin e grupit.',
      },
    },
    'Node.js': {
      en: {
        what: 'A JavaScript runtime used to run server-side applications and APIs.',
        use: 'In this case it is used for Backend services for the CRM group app.',
      },
      sv: {
        what: 'En JavaScript-runtime som används för att köra serverside-appar och API:er.',
        use: 'I det här fallet används det för Backendtjänster för CRM-gruppappen.',
      },
      sq: {
        what: 'Nje runtime JavaScript qe perdoret per te ekzekutuar app dhe API ne server.',
        use: 'Ne kete rast perdoret per Sherbime backend per app-in CRM te grupit.',
      },
    },
    'CRM': {
      en: {
        what: 'Customer-relationship workflows used to track cases, contacts, and follow-ups.',
        use: 'In this case it is used for Dissatisfied-customer workflows as a CRM case.',
      },
      sv: {
        what: 'Kundrelationsflöden som används för att följa ärenden, kontakter och uppföljning.',
        use: 'I det här fallet används det för Missnöjda-kund-flöden som CRM-case.',
      },
      sq: {
        what: 'Rrjedha CRM qe perdoren per te ndjekur raste, kontakte dhe ndjekje.',
        use: 'Ne kete rast perdoret per Rrjedha klientesh te pakenaqur si case CRM.',
      },
    },
  },
  'shoptester': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for Shop API implementation under test.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för Shop-API-implementation under test.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Implementim API dyqani nen test.',
      },
    },
    '.NET Core': {
      en: {
        what: 'A cross-platform .NET runtime used to host modern APIs and services.',
        use: 'In this case it is used for hosting the shop REST API.',
      },
      sv: {
        what: 'En plattformsoberoende .NET-runtime som används för att hosta moderna API:er och tjänster.',
        use: 'I det här fallet används det för att hosta shop-REST-API:t.',
      },
      sq: {
        what: 'Nje runtime .NET nderplatformesh qe perdoret per te hostuar API dhe sherbime moderne.',
        use: 'Ne kete rast perdoret per Hoston REST API e dyqanit.',
      },
    },
    'REST': {
      en: {
        what: 'An HTTP API style used to expose create/read/update/delete resources over the web.',
        use: 'In this case it is used for Endpoints exercised by Postman/tests.',
      },
      sv: {
        what: 'En HTTP API-stil som används för att exponera skapa/läsa/uppdatera/ta bort-resurser över webben.',
        use: 'I det här fallet används det för Endpoints som körs av Postman/tester.',
      },
      sq: {
        what: 'Nje stil API HTTP qe perdoret per te ekspozuar burime create/read/update/delete ne web.',
        use: 'Ne kete rast perdoret per Endpoint te ushtruara nga Postman/testet.',
      },
    },
    'Postman': {
      en: {
        what: 'An API client used to call and verify HTTP endpoints during development and testing.',
        use: 'In this case it is used for Collection-based verification of shop endpoints.',
      },
      sv: {
        what: 'En API-klient som används för att anropa och verifiera HTTP-endpoints under utveckling och test.',
        use: 'I det här fallet används det för Collection-baserad verifiering av shop-endpoints.',
      },
      sq: {
        what: 'Nje klient API qe perdoret per te thirrur dhe verifikuar endpoint HTTP gjate zhvillimit dhe testimit.',
        use: 'Ne kete rast perdoret per Verifikim me collection i endpoint-eve te dyqanit.',
      },
    },
    'EF Core': {
      en: {
        what: 'A .NET ORM used to map C# objects to relational database tables.',
        use: 'In this case it is used for mapping shop entities to the database.',
      },
      sv: {
        what: 'En .NET-ORM som används för att mappa C#-objekt till relationella databastabeller.',
        use: 'I det här fallet används det för att mappa shop-entiteter till databasen.',
      },
      sq: {
        what: 'Nje ORM .NET qe perdoret per te hartuar objekte C# ne tabela databaze relacionale.',
        use: 'Ne kete rast perdoret per Harton entitete dyqani ne databaze.',
      },
    },
    'Swagger': {
      en: {
        what: 'An OpenAPI UI used to document and try HTTP API endpoints.',
        use: 'In this case it is used for documenting and tries shop API endpoints.',
      },
      sv: {
        what: 'Ett OpenAPI-UI som används för att dokumentera och prova HTTP API-endpoints.',
        use: 'I det här fallet används det för att dokumentera och provar shop-API-endpoints.',
      },
      sq: {
        what: 'Nje UI OpenAPI qe perdoret per te dokumentuar dhe provuar endpoint API HTTP.',
        use: 'Ne kete rast perdoret per Dokumenton dhe provon endpoint-et e API dyqani.',
      },
    },
  },
  'bankomat': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for ATM domain logic written with TDD.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för Bankomat-domänlogik skriven med TDD.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Logjike domain ATM e shkruar me TDD.',
      },
    },
    '.NET 9': {
      en: {
        what: 'A modern .NET runtime used to run current C# applications and tests.',
        use: 'In this case it is used for running the ATM exercise and tests.',
      },
      sv: {
        what: 'En modern .NET-runtime som används för att köra aktuella C#-appar och tester.',
        use: 'I det här fallet används det för att köra bankomatövningen och testerna.',
      },
      sq: {
        what: 'Nje runtime modern .NET qe perdoret per te ekzekutuar app dhe teste aktuale C#.',
        use: 'Ne kete rast perdoret per Ekzekuton ushtrimin ATM dhe testet.',
      },
    },
    'xUnit': {
      en: {
        what: 'A .NET unit-test framework used to automate checks of application logic.',
        use: 'In this case it is used for Unit tests driving the ATM design.',
      },
      sv: {
        what: 'Ett .NET-enhetstestramverk som används för att automatisera kontroller av applogik.',
        use: 'I det här fallet används det för Enhetstester som driver bankomatdesignen.',
      },
      sq: {
        what: 'Nje framework unit-test .NET qe perdoret per te automatizuar kontrolle te logjikes se app-it.',
        use: 'Ne kete rast perdoret per Unit teste qe drejtojne dizajnin ATM.',
      },
    },
    'TDD': {
      en: {
        what: 'A test-first workflow used to grow features from failing automated tests.',
        use: 'In this case it is used for Features grown from failing tests.',
      },
      sv: {
        what: 'Ett test-först-arbetsflöde som används för att växa features från fallande automatiska tester.',
        use: 'I det här fallet används det för Features vaxte från fallande tester.',
      },
      sq: {
        what: 'Nje rrjedhe test-first qe perdoret per te rritur vecori nga teste te automatizuara qe deshtojne fillimisht.',
        use: 'Ne kete rast perdoret per Vecori te rritura nga teste qe deshtojne fillimisht.',
      },
    },
  },
  'uitestning-shoptester': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for UI test scripts against the shop system.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för UI-testskript mot shopsystemet.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Skripta UI test kunder sistemit te dyqanit.',
      },
    },
    '.NET': {
      en: {
        what: 'Microsoft\'s application platform used to build and run C# software.',
        use: 'In this case it is used for Tooling host for Selenium UI tests.',
      },
      sv: {
        what: 'Microsofts applikationsplattform som används för att bygga och köra C#-mjukvara.',
        use: 'I det här fallet används det för Verktygshost för Selenium UI-tester.',
      },
      sq: {
        what: 'Platforma e aplikacioneve e Microsoft qe perdoret per te ndertuar dhe ekzekutuar software C#.',
        use: 'Ne kete rast perdoret per Host mjetesh per UI teste Selenium.',
      },
    },
    'Selenium': {
      en: {
        what: 'Browser automation used to drive real browsers in UI tests.',
        use: 'In this case it is used for End-to-end UI tests for the shop.',
      },
      sv: {
        what: 'Webbläsarautomation som används för att styra riktiga webbläsare i UI-tester.',
        use: 'I det här fallet används det för End-to-end UI-tester för shoppen.',
      },
      sq: {
        what: 'Automatizim shfletuesi qe perdoret per te drejtuar shfletues reale ne teste UI.',
        use: 'Ne kete rast perdoret per UI teste end-to-end per dyqanin.',
      },
    },
    'UI Testing': {
      en: {
        what: 'End-user interface testing used to validate screens and click-paths.',
        use: 'In this case it is used for Validating shop screens and user flows.',
      },
      sv: {
        what: 'Gränssnittstestning som används för att validera vyer och klickvägar.',
        use: 'I det här fallet används det för Validera shop-vyer och anvandarflöden.',
      },
      sq: {
        what: 'Testim i nderfaqes qe perdoret per te validuar ekrane dhe rrjedha klikimesh.',
        use: 'Ne kete rast perdoret per Validim ekranesh dyqani dhe rrjedhash perdoruesi.',
      },
    },
  },
  'react-context': {
    'React': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for Learning Context API state sharing.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för Lärande av Context API för delad state.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Mesim i Context API per state te perbashket.',
      },
    },
    'JavaScript': {
      en: {
        what: 'A programming language used for browser UIs and Node.js services.',
        use: 'In this case it is used for React Context exercise without TypeScript.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
        use: 'I det här fallet används det för React Context-övning utan TypeScript.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
        use: 'Ne kete rast perdoret per Ushtrim React Context pa TypeScript.',
      },
    },
    'Context API': {
      en: {
        what: 'React\'s built-in state sharing used to pass data without deep prop drilling.',
        use: 'In this case it is used for avoiding prop drilling in the exercise.',
      },
      sv: {
        what: 'Reacts inbyggda state-delning som används för att skicka data utan djup prop drilling.',
        use: 'I det här fallet används det för att undvika prop drilling i övningen.',
      },
      sq: {
        what: 'Ndarja e integruar e state ne React qe perdoret per te derguar te dhena pa prop drilling te thelle.',
        use: 'Ne kete rast perdoret per Shmang prop drilling ne ushtrim.',
      },
    },
  },
  'react-router': {
    'React': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for Multi-page SPA exercise.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för Flersidig SPA-övning.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Ushtrim SPA me shume faqe.',
      },
    },
    'React Router': {
      en: {
        what: 'A client router used to navigate between views inside a React SPA.',
        use: 'In this case it is used for navigating views inside the React SPA.',
      },
      sv: {
        what: 'En klientrouter som används för att navigera mellan vyer inuti en React-SPA.',
        use: 'I det här fallet används det för att navigera vyer inuti React-SPA:n.',
      },
      sq: {
        what: 'Nje router klienti qe perdoret per te naviguar midis pamjeve brenda nje SPA React.',
        use: 'Ne kete rast perdoret per Navigon pamje brenda SPA React.',
      },
    },
    'JavaScript': {
      en: {
        what: 'A programming language used for browser UIs and Node.js services.',
        use: 'In this case it is used for React Router learning project.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
        use: 'I det här fallet används det för React Router-lärandeprojekt.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
        use: 'Ne kete rast perdoret per Projekt mesimi React Router.',
      },
    },
  },
  'first-react': {
    'React': {
      en: {
        what: 'A UI library used to build interactive component-based web interfaces.',
        use: 'In this case it is used for First components and JSX practice.',
      },
      sv: {
        what: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
        use: 'I det här fallet används det för Första komponenter och JSX-övning.',
      },
      sq: {
        what: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
        use: 'Ne kete rast perdoret per Komponentet e pare dhe praktike JSX.',
      },
    },
    'JavaScript': {
      en: {
        what: 'A programming language used for browser UIs and Node.js services.',
        use: 'In this case it is used for Introductory React exercises.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
        use: 'I det här fallet används det för Introduktionsövningar i React.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
        use: 'Ne kete rast perdoret per Ushtrime hyrese ne React.',
      },
    },
    'HTML': {
      en: {
        what: 'Markup used to structure content and elements on web pages.',
        use: 'In this case it is used for Structure around early React components.',
      },
      sv: {
        what: 'Markup som används för att strukturera innehåll och element på webbsidor.',
        use: 'I det här fallet används det för Struktur runt tidiga React-komponenter.',
      },
      sq: {
        what: 'Markup qe perdoret per te strukturuar permbajtje dhe elemente ne faqe web.',
        use: 'Ne kete rast perdoret per Strukture rreth komponenteve te hershme React.',
      },
    },
    'CSS': {
      en: {
        what: 'Stylesheet language used to lay out and style web interfaces.',
        use: 'In this case it is used for Basic layout for the first React pages.',
      },
      sv: {
        what: 'Stilmallsspråk som används för att layouta och styla webbgränssnitt.',
        use: 'I det här fallet används det för Grundläggande layout för de första React-sidorna.',
      },
      sq: {
        what: 'Gjuhe stilesh qe perdoret per layout dhe stil te nderfaqeve web.',
        use: 'Ne kete rast perdoret per Layout baze per faqet e para React.',
      },
    },
  },
  'first-rest-api': {
    'Node.js': {
      en: {
        what: 'A JavaScript runtime used to run server-side applications and APIs.',
        use: 'In this case it is used for hosting the first REST API exercise.',
      },
      sv: {
        what: 'En JavaScript-runtime som används för att köra serverside-appar och API:er.',
        use: 'I det här fallet används det för att hosta den första REST API-övningen.',
      },
      sq: {
        what: 'Nje runtime JavaScript qe perdoret per te ekzekutuar app dhe API ne server.',
        use: 'Ne kete rast perdoret per Hoston ushtrimin e pare REST API.',
      },
    },
    'Express': {
      en: {
        what: 'A Node.js HTTP framework used to define APIs and server routes.',
        use: 'In this case it is used for defining early REST routes and handlers.',
      },
      sv: {
        what: 'Ett Node.js HTTP-ramverk som används för att definiera API:er och serverrutter.',
        use: 'I det här fallet används det för att definiera tidiga REST-rutter och handlers.',
      },
      sq: {
        what: 'Nje framework HTTP Node.js qe perdoret per te percaktuar API dhe rruge serveri.',
        use: 'Ne kete rast perdoret per Percakton rruge dhe handler te hershem REST.',
      },
    },
    'REST': {
      en: {
        what: 'An HTTP API style used to expose create/read/update/delete resources over the web.',
        use: 'In this case it is used for CRUD-style endpoints for learning.',
      },
      sv: {
        what: 'En HTTP API-stil som används för att exponera skapa/läsa/uppdatera/ta bort-resurser över webben.',
        use: 'I det här fallet används det för CRUD-liknande endpoints för lärande.',
      },
      sq: {
        what: 'Nje stil API HTTP qe perdoret per te ekspozuar burime create/read/update/delete ne web.',
        use: 'Ne kete rast perdoret per Endpoint stili CRUD per mesim.',
      },
    },
    'JavaScript': {
      en: {
        what: 'A programming language used for browser UIs and Node.js services.',
        use: 'In this case it is used for Node/Express REST practice.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
        use: 'I det här fallet används det för Node/Express REST-övning.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
        use: 'Ne kete rast perdoret per Praktike REST Node/Express.',
      },
    },
  },
  'csharp-example': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for Small learning example in C#.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för Litet lärandeexempel i C#.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Shembull i vogel mesimi ne C#.',
      },
    },
    '.NET': {
      en: {
        what: 'Microsoft\'s application platform used to build and run C# software.',
        use: 'In this case it is used for running the C# learning sample.',
      },
      sv: {
        what: 'Microsofts applikationsplattform som används för att bygga och köra C#-mjukvara.',
        use: 'I det här fallet används det för att köra C#-lärandesamplet.',
      },
      sq: {
        what: 'Platforma e aplikacioneve e Microsoft qe perdoret per te ndertuar dhe ekzekutuar software C#.',
        use: 'Ne kete rast perdoret per Ekzekuton sample-in e mesimit C#.',
      },
    },
  },
  'husmanskors': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for Group .NET application logic.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för Gruppens .NET-applikationslogik.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Logjike aplikacioni .NET e grupit.',
      },
    },
    '.NET': {
      en: {
        what: 'Microsoft\'s application platform used to build and run C# software.',
        use: 'In this case it is used for Group project application runtime.',
      },
      sv: {
        what: 'Microsofts applikationsplattform som används för att bygga och köra C#-mjukvara.',
        use: 'I det här fallet används det för Runtime för grupprojektets applikation.',
      },
      sq: {
        what: 'Platforma e aplikacioneve e Microsoft qe perdoret per te ndertuar dhe ekzekutuar software C#.',
        use: 'Ne kete rast perdoret per Runtime i aplikacionit te projektit te grupit.',
      },
    },
  },
  'holidaymaker': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for Holiday booking group app logic.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för Logik för gruppens holiday booking-app.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Logjike e app-it holiday booking te grupit.',
      },
    },
    '.NET': {
      en: {
        what: 'Microsoft\'s application platform used to build and run C# software.',
        use: 'In this case it is used for running the holidaymaker group application.',
      },
      sv: {
        what: 'Microsofts applikationsplattform som används för att bygga och köra C#-mjukvara.',
        use: 'I det här fallet används det för att köra holidaymaker-gruppapplikationen.',
      },
      sq: {
        what: 'Platforma e aplikacioneve e Microsoft qe perdoret per te ndertuar dhe ekzekutuar software C#.',
        use: 'Ne kete rast perdoret per Ekzekuton aplikacionin e grupit holidaymaker.',
      },
    },
    'SQL': {
      en: {
        what: 'A query language used to read and write relational database data.',
        use: 'In this case it is used for Data access for bookings/stays.',
      },
      sv: {
        what: 'Ett frågespråk som används för att läsa och skriva relationell databasedata.',
        use: 'I det här fallet används det för Dataåtkomst för bokningar/vistelser.',
      },
      sq: {
        what: 'Nje gjuhe query qe perdoret per te lexuar dhe shkruar te dhena ne databaza relacionale.',
        use: 'Ne kete rast perdoret per Akses te dhenash per rezervime/qendrime.',
      },
    },
  },
  'nodejs-course': {
    'Node.js': {
      en: {
        what: 'A JavaScript runtime used to run server-side applications and APIs.',
        use: 'In this case it is used for Course module for server-side JavaScript.',
      },
      sv: {
        what: 'En JavaScript-runtime som används för att köra serverside-appar och API:er.',
        use: 'I det här fallet används det för Kursmodul för serverside JavaScript.',
      },
      sq: {
        what: 'Nje runtime JavaScript qe perdoret per te ekzekutuar app dhe API ne server.',
        use: 'Ne kete rast perdoret per Modul kursi per JavaScript ne server.',
      },
    },
    'JavaScript': {
      en: {
        what: 'A programming language used for browser UIs and Node.js services.',
        use: 'In this case it is used for Node course exercises and demos.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
        use: 'I det här fallet används det för Node-kursövningar och demos.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
        use: 'Ne kete rast perdoret per Ushtrime dhe demo te kursit Node.',
      },
    },
    'Express': {
      en: {
        what: 'A Node.js HTTP framework used to define APIs and server routes.',
        use: 'In this case it is used for Routing practice in the Node course.',
      },
      sv: {
        what: 'Ett Node.js HTTP-ramverk som används för att definiera API:er och serverrutter.',
        use: 'I det här fallet används det för Routingövning i Node-kursen.',
      },
      sq: {
        what: 'Nje framework HTTP Node.js qe perdoret per te percaktuar API dhe rruge serveri.',
        use: 'Ne kete rast perdoret per Praktike routing ne kursin Node.',
      },
    },
  },
  'programming1-csharp': {
    'C#': {
      en: {
        what: 'A programming language used for .NET apps, APIs, and tooling.',
        use: 'In this case it is used for Programming 1 course fundamentals.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
        use: 'I det här fallet används det för Grunder i Programmering 1-kursen.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
        use: 'Ne kete rast perdoret per Themelet e kursit Programming 1.',
      },
    },
    '.NET': {
      en: {
        what: 'Microsoft\'s application platform used to build and run C# software.',
        use: 'In this case it is used for Toolchain for the C# course module.',
      },
      sv: {
        what: 'Microsofts applikationsplattform som används för att bygga och köra C#-mjukvara.',
        use: 'I det här fallet används det för Verktygskedja för C#-kursmodulen.',
      },
      sq: {
        what: 'Platforma e aplikacioneve e Microsoft qe perdoret per te ndertuar dhe ekzekutuar software C#.',
        use: 'Ne kete rast perdoret per Zincir mjetesh per modulin e kursit C#.',
      },
    },
  },
  'java-course': {
    'Java': {
      en: {
        what: 'A programming language used for object-oriented applications and course exercises.',
        use: 'In this case it is used for OOP course module and exercises.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för objektorienterade appar och kursövningar.',
        use: 'I det här fallet används det för OOP-kursmodul och övningar.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per aplikacione OOP dhe ushtrime kursi.',
        use: 'Ne kete rast perdoret per Modul kursi OOP dhe ushtrime.',
      },
    },
    'OOP': {
      en: {
        what: 'Object-oriented design used to model software with classes and objects.',
        use: 'In this case it is used for Classes/objects practice in Java.',
      },
      sv: {
        what: 'Objektorienterad design som används för att modellera mjukvara med klasser och objekt.',
        use: 'I det här fallet används det för Klass-/objektövning i Java.',
      },
      sq: {
        what: 'Dizajn OOP qe perdoret per te modeluar software me klasa dhe objekte.',
        use: 'Ne kete rast perdoret per Praktike klasash/objektesh ne Java.',
      },
    },
  },
  'c-introduction': {
    'C': {
      en: {
        what: 'A systems programming language used for low-level and foundational code.',
        use: 'In this case it is used for Introductory C programming module.',
      },
      sv: {
        what: 'Ett systemspråk som används för lågnivå- och grundläggande programmering.',
        use: 'I det här fallet används det för Introduktionsmodul i C-programmering.',
      },
      sq: {
        what: 'Nje gjuhe programimi sistemi qe perdoret per kod te nivelit te ulet dhe themeleve.',
        use: 'Ne kete rast perdoret per Modul hyres i programimit C.',
      },
    },
    'Systems Programming': {
      en: {
        what: 'Low-level programming focused on memory, processes, and close-to-hardware behavior.',
        use: 'In this case it is used for Memory and fundamentals in C.',
      },
      sv: {
        what: 'Lågnivåprogrammering med fokus på minne, processer och hårdvarunära beteende.',
        use: 'I det här fallet används det för Minne och grunder i C.',
      },
      sq: {
        what: 'Programim i nivelit te ulet me fokus ne kujtese, procese dhe sjellje afer harduerit.',
        use: 'Ne kete rast perdoret per Kujtese dhe themele ne C.',
      },
    },
  },
  'python-skript': {
    'Python': {
      en: {
        what: 'A programming language used for scripting, data work, APIs, and ML.',
        use: 'In this case it is used for Automation and course scripts.',
      },
      sv: {
        what: 'Ett programmeringsspråk som används för skript, dataarbete, API:er och ML.',
        use: 'I det här fallet används det för Automation och kursskript.',
      },
      sq: {
        what: 'Nje gjuhe programimi qe perdoret per skriptim, pune me te dhena, API dhe ML.',
        use: 'Ne kete rast perdoret per Automatizim dhe skripta kursi.',
      },
    },
    'Jupyter': {
      en: {
        what: 'Interactive notebooks used to explore data and run experiments step by step.',
        use: 'In this case it is used for Interactive scripting / demo cells.',
      },
      sv: {
        what: 'Interaktiva notebooks som används för att utforska data och köra experiment steg för steg.',
        use: 'I det här fallet används det för Interaktiva skript-/democeller.',
      },
      sq: {
        what: 'Notebook interaktive qe perdoren per te eksploruar te dhena dhe ekzekutuar eksperimente hap pas hapi.',
        use: 'Ne kete rast perdoret per Qeliza interaktive skriptimi/demo.',
      },
    },
    'Automation': {
      en: {
        what: 'Scripted automation used to reduce repetitive manual tasks.',
        use: 'In this case it is used for Small scripts that automate repetitive work.',
      },
      sv: {
        what: 'Skriptad automation som används för att minska repetitiva manuella uppgifter.',
        use: 'I det här fallet används det för Små skript som automatiserar repetitivt arbete.',
      },
      sq: {
        what: 'Automatizim me skripta qe perdoret per te zvogeluar detyra manuale te perseritura.',
        use: 'Ne kete rast perdoret per Skripta te vogla qe automatizojne pune te perseritura.',
      },
    },
  },
};

export function getTechTip(projectId: string, tech: string, locale: Locale): TechTip | undefined {
  const tip = PROJECT_TECH_TIPS[projectId]?.[tech];
  if (!tip) return undefined;
  if (locale === 'sv' || locale === 'sq') return tip[locale];
  return tip.en;
}
