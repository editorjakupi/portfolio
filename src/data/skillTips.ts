import type { Locale } from '../i18n/types';

type TipLocale = 'en' | 'sv' | 'sq';

/** Skill-chip hover: what it is + how it is used (general, no project case). */
const SKILL_TIPS: Record<string, Record<TipLocale, string>> = {
  'TypeScript': {
    en: 'Typed JavaScript used to catch errors early and keep large codebases safer.',
    sv: 'Typad JavaScript som används för att fånga fel tidigt och hålla stora kodbaser säkrare.',
    sq: 'JavaScript i tipizuar qe perdoret per te kapur gabime heret dhe mbajtur kodebazat me te sigurta.',
  },
  'JavaScript': {
    en: 'A programming language used for browser UIs and Node.js services.',
    sv: 'Ett programmeringsspråk som används för webbläsar-UI och Node.js-tjänster.',
    sq: 'Nje gjuhe programimi qe perdoret per UI shfletuesi dhe sherbime Node.js.',
  },
  'Python': {
    en: 'A programming language used for scripting, data work, APIs, and machine learning.',
    sv: 'Ett programmeringsspråk som används för skript, dataarbete, API:er och maskininlärning.',
    sq: 'Nje gjuhe programimi qe perdoret per skriptim, pune me te dhena, API dhe machine learning.',
  },
  'C#': {
    en: 'A programming language used for .NET apps, APIs, and tooling.',
    sv: 'Ett programmeringsspråk som används för .NET-appar, API:er och verktyg.',
    sq: 'Nje gjuhe programimi qe perdoret per app .NET, API dhe mjete.',
  },
  'Java': {
    en: 'A programming language used for object-oriented applications and backend services.',
    sv: 'Ett programmeringsspråk som används för objektorienterade appar och backend-tjänster.',
    sq: 'Nje gjuhe programimi qe perdoret per aplikacione OOP dhe sherbime backend.',
  },
  'SQL': {
    en: 'A query language used to read and write relational database data.',
    sv: 'Ett frågespråk som används för att läsa och skriva relationell databasedata.',
    sq: 'Nje gjuhe query qe perdoret per te lexuar dhe shkruar te dhena ne databaza relacionale.',
  },
  'HTML': {
    en: 'Markup used to structure content and elements on web pages.',
    sv: 'Markup som används för att strukturera innehåll och element på webbsidor.',
    sq: 'Markup qe perdoret per te strukturuar permbajtje dhe elemente ne faqe web.',
  },
  'CSS': {
    en: 'Stylesheet language used to lay out and style web interfaces.',
    sv: 'Stilmallsspråk som används för att layouta och styla webbgränssnitt.',
    sq: 'Gjuhe stilesh qe perdoret per layout dhe stil te nderfaqeve web.',
  },
  'React': {
    en: 'A UI library used to build interactive component-based web interfaces.',
    sv: 'Ett UI-bibliotek som används för att bygga interaktiva, komponentbaserade webbgränssnitt.',
    sq: 'Nje biblioteke UI qe perdoret per te ndertuar nderfaqe web interaktive me komponente.',
  },
  'Next.js': {
    en: 'A full-stack React framework used to build web apps with UI, APIs, and routing.',
    sv: 'Ett fullstack React-ramverk som används för att bygga webbappar med UI, API:er och routing.',
    sq: 'Nje framework full-stack React qe perdoret per te ndertuar app web me UI, API dhe routing.',
  },
  'React Native': {
    en: 'A React framework used to build native-feeling mobile apps from one JavaScript codebase.',
    sv: 'Ett React-ramverk som används för att bygga native-känsla mobilappar från en JavaScript-kodbas.',
    sq: 'Nje framework React qe perdoret per te ndertuar app mobile me ndjesi native nga nje kodebaze JavaScript.',
  },
  'Vite': {
    en: 'A frontend build tool used for fast local development and production bundles.',
    sv: 'Ett frontend-byggverktyg som används för snabb lokal utveckling och produktionsbyggen.',
    sq: 'Nje mjet build frontend qe perdoret per zhvillim lokal te shpejte dhe bundle prodhimi.',
  },
  'jQuery': {
    en: 'A JavaScript library used to simplify DOM updates and browser scripting.',
    sv: 'Ett JavaScript-bibliotek som används för att förenkla DOM-uppdateringar och webbläsarscript.',
    sq: 'Nje biblioteke JavaScript qe perdoret per te thjeshtuar perditesime DOM dhe skriptim shfletuesi.',
  },
  'Node.js': {
    en: 'A JavaScript runtime used to run server-side applications and APIs.',
    sv: 'En JavaScript-runtime som används för att köra serverside-appar och API:er.',
    sq: 'Nje runtime JavaScript qe perdoret per te ekzekutuar app dhe API ne server.',
  },
  'FastAPI': {
    en: 'A Python web framework used to build fast typed HTTP APIs.',
    sv: 'Ett Python-webbramverk som används för att bygga snabba typade HTTP-API:er.',
    sq: 'Nje framework web Python qe perdoret per te ndertuar API HTTP te shpejta dhe te tipizuara.',
  },
  '.NET': {
    en: 'Microsoft\'s application platform used to build and run C# software.',
    sv: 'Microsofts applikationsplattform som används för att bygga och köra C#-mjukvara.',
    sq: 'Platforma e aplikacioneve e Microsoft qe perdoret per te ndertuar dhe ekzekutuar software C#.',
  },
  'REST APIs': {
    en: 'HTTP APIs used to expose create/read/update/delete resources between clients and servers.',
    sv: 'HTTP-API:er som används för att exponera skapa/läsa/uppdatera/ta bort-resurser mellan klient och server.',
    sq: 'API HTTP qe perdoren per te ekspozuar burime create/read/update/delete midis klientit dhe serverit.',
  },
  'Express': {
    en: 'A Node.js HTTP framework used to define APIs and server routes.',
    sv: 'Ett Node.js HTTP-ramverk som används för att definiera API:er och serverrutter.',
    sq: 'Nje framework HTTP Node.js qe perdoret per te percaktuar API dhe rruge serveri.',
  },
  'Machine Learning': {
    en: 'Algorithms that learn patterns from data, used for prediction and decision support.',
    sv: 'Algoritmer som lär mönster från data, används för prediktion och beslutstöd.',
    sq: 'Algoritme qe mesojne modele nga te dhenat, perdoren per parashikim dhe mbeshtetje vendimesh.',
  },
  'RAG': {
    en: 'Retrieval-augmented generation used to ground LLM answers in your own documents.',
    sv: 'Retrieval-augmented generation som används för att förankra LLM-svar i egna dokument.',
    sq: 'RAG qe perdoret per te ankoruar pergjigjet e LLM ne dokumentet e veta.',
  },
  'LLM Integration': {
    en: 'Wiring large language models into products for chat, summarization, and assistants.',
    sv: 'Att koppla in stora språkmodeller i produkter för chatt, sammanfattning och assistenter.',
    sq: 'Integrim i modeleve te medha gjuhe ne produkte per chat, permbledhje dhe asistente.',
  },
  'Whisper': {
    en: 'A speech-to-text model used to transcribe audio into text.',
    sv: 'En tal-till-text-modell som används för att transkribera ljud till text.',
    sq: 'Nje model speech-to-text qe perdoret per te transkriptuar audio ne tekst.',
  },
  'Azure Speech': {
    en: 'Cloud speech services used for production speech recognition and synthesis.',
    sv: 'Molnbaserade taltjänster som används för taligenkänning och -syntes i produktion.',
    sq: 'Sherbime speech ne cloud qe perdoren per njohje dhe sinteze te zerit ne prodhim.',
  },
  'TensorFlow/Keras': {
    en: 'A deep-learning stack used to train and run neural networks.',
    sv: 'En djupinlärningsstack som används för att träna och köra neurala nätverk.',
    sq: 'Nje stack deep learning qe perdoret per te trajnuar dhe ekzekutuar rrjeta neurale.',
  },
  'Streamlit': {
    en: 'A Python UI framework used to turn scripts into interactive web apps quickly.',
    sv: 'Ett Python UI-ramverk som används för att snabbt göra skript till interaktiva webbappar.',
    sq: 'Nje framework UI Python qe perdoret per te kthyer skripta ne app web interaktive shpejt.',
  },
  'Docker': {
    en: 'A container runtime used to package apps and dependencies for the same run everywhere.',
    sv: 'En containermiljö som används för att paketera appar och beroenden så de körs likadant överallt.',
    sq: 'Nje runtime kontejneri qe perdoret per te paketizuar app dhe varësi qe te ekzekutohen njesoj kudo.',
  },
  'Git': {
    en: 'Version control used to track code changes and collaborate safely.',
    sv: 'Versionskontroll som används för att spåra kodändringar och samarbeta säkert.',
    sq: 'Kontroll versioni qe perdoret per te ndjekur ndryshime kodi dhe bashkepunuar ne menyre te sigurt.',
  },
  'GitHub': {
    en: 'A Git hosting platform used for repositories, pull requests, and CI workflows.',
    sv: 'En Git-hostingplattform som används för repos, pull requests och CI-flöden.',
    sq: 'Nje platforme hosting Git qe perdoret per repo, pull request dhe rrjedha CI.',
  },
  'Git Bash': {
    en: 'A Bash shell for Windows used to run Git and Unix-style command-line tools.',
    sv: 'Ett Bash-skal för Windows som används för Git och Unix-liknande kommandoradsverktyg.',
    sq: 'Nje shell Bash per Windows qe perdoret per Git dhe mjete command-line stil Unix.',
  },
  'Postman': {
    en: 'An API client used to call and verify HTTP endpoints during development and testing.',
    sv: 'En API-klient som används för att anropa och verifiera HTTP-endpoints under utveckling och test.',
    sq: 'Nje klient API qe perdoret per te thirrur dhe verifikuar endpoint HTTP gjate zhvillimit dhe testimit.',
  },
  'HTTPie': {
    en: 'A command-line HTTP client used to explore and debug APIs quickly.',
    sv: 'En kommandorads-HTTP-klient som används för att snabbt utforska och felsöka API:er.',
    sq: 'Nje klient HTTP ne command-line qe perdoret per te eksploruar dhe debuguar API shpejt.',
  },
  'VS Code': {
    en: 'A code editor used for everyday development, debugging, and extensions.',
    sv: 'En kodeditor som används för daglig utveckling, debugging och tillägg.',
    sq: 'Nje editor kodi qe perdoret per zhvillim te perditshem, debugging dhe extensions.',
  },
  'JetBrains Toolbox': {
    en: 'A JetBrains app manager used to install and update IDEs like Rider and IntelliJ.',
    sv: 'En JetBrains-hanterare som används för att installera och uppdatera IDE:er som Rider och IntelliJ.',
    sq: 'Nje menaxher JetBrains qe perdoret per te instaluar dhe perditesuar IDE si Rider dhe IntelliJ.',
  },
  'Cursor': {
    en: 'An AI-assisted code editor used to write, refactor, and navigate codebases faster.',
    sv: 'En AI-assisterad kodeditor som används för att skriva, refaktorera och navigera kodbaser snabbare.',
    sq: 'Nje editor kodi me AI qe perdoret per te shkruar, refaktoruar dhe naviguar kodebaza me shpejt.',
  },
  'Scrum': {
    en: 'An agile framework used to plan, deliver, and improve work in short iterations.',
    sv: 'Ett agilt ramverk som används för att planera, leverera och förbättra arbete i korta iterationer.',
    sq: 'Nje framework agil qe perdoret per te planifikuar, dorezuar dhe permiresuar punen ne iteracione te shkurtra.',
  },
  'CI/CD': {
    en: 'Automation pipelines used to build, test, and deploy software reliably.',
    sv: 'Automationspipelines som används för att bygga, testa och deploya mjukvara pålitligt.',
    sq: 'Pipeline automatizimi qe perdoren per te ndertuar, testuar dhe deployuar software ne menyre te besueshme.',
  },
  'WebRTC': {
    en: 'A browser realtime stack used for peer-to-peer audio, video, and data streams.',
    sv: 'En webbläsar-realtime-stack som används för peer-to-peer ljud, video och dataflöden.',
    sq: 'Nje stack realtime shfletuesi qe perdoret per audio, video dhe rrjedha te dhenash peer-to-peer.',
  },
  'Socket.io': {
    en: 'A realtime library used for live updates over WebSockets.',
    sv: 'Ett realtime-bibliotek som används för liveuppdateringar via WebSockets.',
    sq: 'Nje biblioteke realtime qe perdoret per perditesime live me WebSockets.',
  },
  'MongoDB': {
    en: 'A document database used to store flexible JSON-like application records.',
    sv: 'En dokumentdatabas som används för att lagra flexibla JSON-liknande app-poster.',
    sq: 'Nje baze dokumentesh qe perdoret per te ruajtur rekorde fleksibël JSON-like te app-it.',
  },
  'PostgreSQL': {
    en: 'A relational database used to store structured application data reliably.',
    sv: 'En relationell databas som används för att lagra strukturerad appdata pålitligt.',
    sq: 'Nje baze relacionale qe perdoret per te ruajtur te dhena te strukturuara te app-it ne menyre te besueshme.',
  },
  'Azure Blob Storage': {
    en: 'Cloud object storage used to keep large files and media assets.',
    sv: 'Molnbaserad objektlagring som används för att spara stora filer och media.',
    sq: 'Ruajtje objektesh ne cloud qe perdoret per te mbajtur skedare te medha dhe media.',
  },
  'IT Support': {
    en: 'Hands-on troubleshooting used to keep users and systems running day to day.',
    sv: 'Praktisk felsökning som används för att hålla användare och system igång i vardagen.',
    sq: 'Troubleshooting praktik qe perdoret per te mbajtur perdoruesit dhe sistemet ne pune perditshme.',
  },
  'Microsoft Office': {
    en: 'Productivity apps used for documents, spreadsheets, and everyday business work.',
    sv: 'Produktivitetsappar som används för dokument, kalkylblad och vardagligt kontorsarbete.',
    sq: 'App produktiviteti qe perdoren per dokumente, spreadsheet dhe pune te perditshme zyre.',
  },
  'Commodities': {
    en: 'Retail commodities trading focused on markets, positions, and structured execution.',
    sv: 'Handel i retail-commodities med fokus på marknader, positioner och strukturerad execution.',
    sq: 'Tregtim commodities retail me fokus ne tregje, pozicione dhe ekzekutim te strukturuar.',
  },
  'Market analysis': {
    en: 'Reading price action and context used to form trading hypotheses under uncertainty.',
    sv: 'Att läsa prisrörelse och kontext som används för att forma tradinghypoteser under osäkerhet.',
    sq: 'Lexim i veprimit te cmimit dhe kontekstit qe perdoret per te formuar hipoteza trading nen pasiguri.',
  },
  'Risk discipline': {
    en: 'Position sizing and rules used to limit downside and stay consistent over time.',
    sv: 'Positionsstorlek och regler som används för att begränsa nedsida och hålla konsekvens över tid.',
    sq: 'Madhesi pozicioni dhe rregulla qe perdoren per te kufizuar humbjen dhe mbajtur konsistence ne kohe.',
  },
};

const SKILL_ALIASES: Record<string, string> = {
  'REST API:er': 'REST APIs',
  'REST API': 'REST APIs',
  'Maskininlärning': 'Machine Learning',
  'Mësim makinerik': 'Machine Learning',
  'LLM-integration': 'LLM Integration',
  'LLM-Integration': 'LLM Integration',
  'Integración LLM': 'LLM Integration',
  'Intégration LLM': 'LLM Integration',
  'Integrazione LLM': 'LLM Integration',
  'Integracja LLM': 'LLM Integration',
  'Integrim LLM': 'LLM Integration',
  'IT-support': 'IT Support',
  'IT-Support': 'IT Support',
  'Soporte IT': 'IT Support',
  'Support IT': 'IT Support',
  'Supporto IT': 'IT Support',
  'Wsparcie IT': 'IT Support',
  'Råvaror': 'Commodities',
  'Rohstoffe': 'Commodities',
  'Materias primas': 'Commodities',
  'Matières premières': 'Commodities',
  'Materie prime': 'Commodities',
  'Surowce': 'Commodities',
  'Lëndë të para': 'Commodities',
  'Marknadsanalys': 'Market analysis',
  'Marktanalyse': 'Market analysis',
  'Análisis de mercado': 'Market analysis',
  'Analyse de marché': 'Market analysis',
  'Analisi di mercato': 'Market analysis',
  'Analiza rynku': 'Market analysis',
  'Analizë tregu': 'Market analysis',
  'Riskdisciplin': 'Risk discipline',
  'Risikodisziplin': 'Risk discipline',
  'Disciplina de riesgo': 'Risk discipline',
  'Discipline du risque': 'Risk discipline',
  'Disciplina del rischio': 'Risk discipline',
  'Dyscyplina ryzyka': 'Risk discipline',
  'Disiplinë rreziku': 'Risk discipline',
};

export function getSkillTip(skill: string, locale: Locale): string | undefined {
  const key = SKILL_ALIASES[skill] ?? skill;
  const tip = SKILL_TIPS[key];
  if (!tip) return undefined;
  if (locale === 'sv' || locale === 'sq') return tip[locale];
  return tip.en;
}
