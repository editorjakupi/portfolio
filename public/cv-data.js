const CV_SKILLS = [
  "TypeScript / JavaScript",
  "React / Next.js",
  "Node.js / Express",
  "Python / FastAPI",
  "C# / .NET",
  "Java",
  "HTML & CSS",
  "SQL (PostgreSQL)",
  "NoSQL (MongoDB)",
  "REST APIs",
  "AI / ML / Deep Learning",
  "RAG / LLM",
  "React Native",
  "Astro / Vite",
  "Docker",
  "WebRTC",
  "Git / GitHub",
  "DevOps / CI/CD",
  "Scrum",
  "Postman / HTTPie",
  "VS Code / JetBrains / Cursor",
  "VU1 Security Training"
];

const NBI_DIPLOMA_URL =
  "https://true.nbi-handelsakademin.se/examensbevis-nbi-356401-8604/?zone=truecrt&lang=se";

const EUROPASS_PDF_SV =
  "https://www.nbi-handelsakademin.se/wp-content/uploads/Europass-MAI24HA-SV.pdf";
const EUROPASS_PDF_EN =
  "https://www.nbi-handelsakademin.se/wp-content/uploads/Europass-MAI24HA-ENG.pdf";

function europassPdfForLang(lang) {
  return lang === "sv" ? EUROPASS_PDF_SV : EUROPASS_PDF_EN;
}

window.CV_DATA = {
  langs: [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "pl", label: "Polski" },
    { code: "sv", label: "Svenska" },
    { code: "sq", label: "Shqip" },
  ],
  entries: {
    en: {
      subtitle: "Software Developer · AI Specialist",
      profile:
        "Creative software developer with strong problem-solving skills and a focus on building user-friendly and efficient systems. I work well in teams, communicate clearly, and adapt quickly to new technologies and workflows. Founder of Pi93 AB (IT and related services). Background also includes parking enforcement and security guard training.",
      sections: {
        profile: "Summary",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        interests: "Interests",
        traits: "Characteristics",
      },
      experience: [
        {
          title: "Founder — Pi93 AB",
          period: "Oct 2026 – Present",
          sub: "Halmstad, Sweden · Own company",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Founded and run Pi93 AB (org.nr 559605-1853): IT consulting and related services, company website (pi93.se), and products such as pi93guide and the Pi93 AI Assistant. I put as much time into the company as I can and build products end-to-end.",
        },
        {
          title: "AI Intern — Swiiftly POS",
          period: "Mar 2026 – May 2026",
          sub: "Swiiftly · Denmark",
          desc: "AI Intern at Swiiftly (Denmark). Developed an in-app AI Staff Assistant for restaurant POS — helping staff and managers get faster, clearer answers during daily operations through role-based support, knowledge retrieval (RAG), grounded responses, and an improved chat experience.",
        },
        {
          title: "Software Developer — PodManager.AI",
          period: "Sep 2025 – Dec 2025",
          sub: "The Knowledge Formula · Sweden",
          desc: "Completed my LIA internship at PodManager.AI with a focus on full-stack development using Next.js, React, TypeScript, FastAPI, and MongoDB. Contributed to AI-powered audio editing, transcription (Whisper, Azure Speech), real-time recording via Socket.io, and secure file management in Azure Blob Storage.",
        },
        {
          title: "Parking Officer — Aimo Park",
          period: "Sep 2018 – Jul 2021",
          sub: "Halmstad, Sweden",
          desc: "Parking surveillance and issuing fees, plus technical maintenance of ticket machines and installing signage when needed.",
        },
      ],
      education: [
        {
          title:
            "Higher Vocational Education — Software Developer specialized in AI, NBI Handelsakademin",
          period: "Aug 2024 – Jun 2026",
          sub: "Halmstad, Sweden",
          desc: "Combined modern development in C#, Python and JavaScript with AI and machine learning. Completed courses in OOP, databases, agile development, project management and data-driven applications, along with 24 weeks of internship (LIA).",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. Computer Engineering — Halmstad University",
          period: "Aug 2021 – Jun 2022",
          sub: "Halmstad, Sweden",
          desc: "Completed one year of studies in the Master of Science in Computer Engineering program. Courses: Perspectives on Computer Engineering, Algebra and Discrete Mathematics, Digital Technology, and Programming in Java.",
        },
        {
          title:
            "Parking Surveillance & Security Guard Training — Väktarskolan",
          period: "Jun 2021",
          sub: "Göteborg, Sweden",
          desc: "Completed with certificates.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "High School Diploma — Natural Sciences, Sannarpsgymnasiet",
          period: "Aug 2011 – Jun 2014",
          sub: "Halmstad, Sweden",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Swedish (C2)", "English (C2)", "Albanian (C2)"],
      interests: ["Gym", "Travel", "Books"],
      traits: ["Social and pleasant", "Organized and efficient"],
    },
    sv: {
      subtitle: "Mjukvaruutvecklare · AI-specialist",
      profile:
        "Kreativ mjukvaruutvecklare med stark problemlösningsförmåga och fokus på användarvänliga och effektiva system. Jag arbetar bra i team, kommunicerar tydligt och anpassar mig snabbt till nya tekniker och arbetsflöden. Grundare av Pi93 AB (IT och relaterade tjänster). Erfarenhet även från parkeringsövervakning och väktarutbildning.",
      sections: {
        profile: "Sammanfattning",
        experience: "Erfarenhet",
        education: "Utbildning",
        skills: "Kompetenser",
        languages: "Språk",
        interests: "Intressen",
        traits: "Egenskaper",
      },
      experience: [
        {
          title: "Grundare — Pi93 AB",
          period: "okt 2026 – nu",
          sub: "Halmstad · Eget bolag",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Grundat och driver Pi93 AB (org.nr 559605-1853): IT-konsult och relaterade tjänster, företagssajt (pi93.se) samt produkter som pi93guide och Pi93 AI Assistant. Jag lägger så mycket tid jag kan på bolaget och bygger produkter från ax till limpa.",
        },
        {
          title: "AI-praktikant — Swiiftly POS",
          period: "mar 2026 – maj 2026",
          sub: "Swiiftly · Danmark",
          desc: "AI-praktikant hos Swiiftly (Danmark). Utvecklade en in-app AI Staff Assistant för restaurang-POS — så att personal och chefer får snabbare och tydligare svar i vardagen genom rollbaserat stöd, kunskapshämtning (RAG), grounded svar och förbättrad chattupplevelse.",
        },
        {
          title: "Mjukvaruutvecklare — PodManager.AI",
          period: "sep 2025 – dec 2025",
          sub: "The Knowledge Formula · Sverige",
          desc: "Genomförde LIA hos PodManager.AI med fokus på fullstack i Next.js, React, TypeScript, FastAPI och MongoDB. Bidrog till AI-driven ljudredigering, transkription (Whisper, Azure Speech), realtidsinspelning via Socket.io och säker filhantering i Azure Blob Storage.",
        },
        {
          title: "Parkeringsvakt — Aimo Park",
          period: "sep 2018 – juli 2021",
          sub: "Halmstad",
          desc: "Parkeringsövervakning och avgifter, samt tekniskt underhåll av biljettautomater och uppsättning av skyltar vid behov.",
        },
      ],
      education: [
        {
          title:
            "Yrkeshögskoleexamen — Mjukvaruutvecklare med AI, NBI Handelsakademin",
          period: "aug 2024 – jun 2026",
          sub: "Halmstad",
          desc: "Kombinerade modern utveckling i C#, Python och JavaScript med AI och maskininlärning. Kurser i OOP, databaser, agil utveckling, projektledning och datadrivna applikationer, samt 24 veckors LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "Civilingenjör datateknik — Halmstads högskola",
          period: "aug 2021 – jun 2022",
          sub: "Halmstad",
          desc: "Avslutade ett års studier på civilingenjörsprogrammet. Kurser: Perspektiv på datateknik, Algebra och diskret matematik, Digital teknik och Programmering i Java.",
        },
        {
          title: "Parkeringsövervakning & väktarutbildning — Väktarskolan",
          period: "jun 2021",
          sub: "Göteborg",
          desc: "Avslutad med intyg.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "Gymnasieexamen — Naturvetenskap, Sannarpsgymnasiet",
          period: "aug 2011 – jun 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Svenska (C2)", "Engelska (C2)", "Albanska (C2)"],
      interests: ["Gym", "Resor", "Böcker"],
      traits: ["Social och trevlig", "Strukturerad och effektiv"],
    },
    sq: {
      subtitle: "Zhvillues Softueri · Specialist AI",
      profile:
        "Zhvillues kreativ softueri me aftësi të forta zgjidhjeje problemesh dhe fokus në sisteme miqësore dhe efikase. Punoj mirë në ekip, komunikoj qartë dhe adaptohem shpejt. Themelues i Pi93 AB (IT dhe shërbime të lidhura). Përvojë edhe nga mbikëqyrja e parkimit dhe trajnimi i rojes.",
      sections: {
        profile: "Përmbledhje",
        experience: "Përvoja",
        education: "Edukimi",
        skills: "Aftësitë",
        languages: "Gjuhët",
        interests: "Interesat",
        traits: "Karakteristikat",
      },
      experience: [
        {
          title: "Themelues — Pi93 AB",
          period: "tet 2026 – tani",
          sub: "Halmstad · Kompani e vetë",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Themelova dhe drejtoj Pi93 AB (org.nr 559605-1853): konsultim IT dhe shërbime të lidhura, website kompanie (pi93.se), dhe produkte si pi93guide dhe Pi93 AI Assistant. I kushtoj kompanisë aq kohë sa mundem dhe ndërtoj produkte nga fillimi deri te prodhimi.",
        },
        {
          title: "Praktikant AI — Swiiftly POS",
          period: "mar 2026 – maj 2026",
          sub: "Swiiftly · Danimarkë",
          desc: "Praktikant AI në Swiiftly (Danimarkë). Zhvillova një AI Staff Assistant in-app për POS restorantesh — që stafi dhe menaxherët të marrin përgjigje më të shpejta dhe më të qarta në operacionet e përditshme, me mbështetje bazuar në role, retrieval (RAG), përgjigje të grounded dhe përvojë chat të përmirësuar.",
        },
        {
          title: "Zhvillues Softueri — PodManager.AI",
          period: "sht 2025 – dhj 2025",
          sub: "The Knowledge Formula · Suedi",
          desc: "Kam përfunduar praktikën LIA në PodManager.AI me fokus në zhvillim full-stack: Next.js, React, TypeScript, FastAPI dhe MongoDB. Kontribova në redaktimin audio me AI, transkriptim (Whisper, Azure Speech), regjistrim në kohë reale me Socket.io dhe menaxhim të sigurt të skedarëve në Azure Blob Storage.",
        },
        {
          title: "Roje parkimi — Aimo Park",
          period: "sht 2018 – kor 2021",
          sub: "Halmstad",
          desc: "Monitorim parkimesh dhe tarifa, plus mirëmbajtje teknike e makinerave të biletave dhe vendosje e tabelave kur nevojitej.",
        },
      ],
      education: [
        {
          title:
            "Arsim i Lartë Profesional — Zhvillues Softueri me AI, NBI Handelsakademin",
          period: "gus 2024 – qer 2026",
          sub: "Halmstad",
          desc: "Zhvillim modern në C#, Python, JavaScript me AI/ML. Kurse OOP, databaza, agile, menaxhim projektesh dhe 24 javë LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. Inxhinieri Kompjuterike — Universiteti i Halmstad",
          period: "gus 2021 – qer 2022",
          sub: "Halmstad",
          desc: "Përfundova një vit studimesh. Kurse: perspektiva inxhinierie, algjebër, matematikë diskrete, teknologji digjitale, Java.",
        },
        {
          title: "Trajnim sigurie & parkimi — Väktarskolan",
          period: "qer 2021",
          sub: "Göteborg",
          desc: "E përfunduar me certifikata.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "Diplomë shkolle mesme — Shkenca natyrore, Sannarpsgymnasiet",
          period: "gus 2011 – qer 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Suedisht (C2)", "Anglisht (C2)", "Shqip (C2)"],
      interests: ["Palestër", "Udhëtime", "Libra"],
      traits: ["Social dhe i sjellshem", "I organizuar dhe efikas"],
    },
    de: {
      subtitle: "Softwareentwickler · KI-Spezialist",
      profile:
        "Kreativer Softwareentwickler mit starken Problemlösungsfähigkeiten und Fokus auf benutzerfreundliche, effiziente Systeme. Teamfähig, klare Kommunikation, schnelle Anpassung an neue Technologien. Gründer von Pi93 AB (IT und verwandte Dienste). Erfahrung auch aus Parkraumüberwachung und Wachschutz-Ausbildung.",
      sections: {
        profile: "Zusammenfassung",
        experience: "Berufserfahrung",
        education: "Ausbildung",
        skills: "Fähigkeiten",
        languages: "Sprachen",
        interests: "Interessen",
        traits: "Eigenschaften",
      },
      experience: [
        {
          title: "Gründer — Pi93 AB",
          period: "Okt 2026 – heute",
          sub: "Halmstad · Eigenes Unternehmen",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Gegründet und führe Pi93 AB (Org.nr 559605-1853): IT-Beratung und verwandte Dienste, Firmenwebsite (pi93.se) sowie Produkte wie pi93guide und Pi93 AI Assistant. Ich investiere so viel Zeit wie möglich und baue Produkte end-to-end.",
        },
        {
          title: "KI-Praktikant — Swiiftly POS",
          period: "Mär 2026 – Mai 2026",
          sub: "Swiiftly · Dänemark",
          desc: "KI-Praktikant bei Swiiftly (Dänemark). Entwicklung eines in-app AI Staff Assistant für Restaurant-POS — damit Personal und Manager im Alltag schnellere, klarere Antworten erhalten: rollenbasierter Support, Wissensabruf (RAG), grounded Antworten und verbesserte Chat-Erfahrung.",
        },
        {
          title: "Softwareentwickler — PodManager.AI",
          period: "Sep 2025 – Dez 2025",
          sub: "The Knowledge Formula · Schweden",
          desc: "LIA-Praktikum bei PodManager.AI mit Fokus auf Full-Stack-Entwicklung in Next.js, React, TypeScript, FastAPI und MongoDB. Mitwirkung an KI-gestützter Audiobearbeitung, Transkription (Whisper, Azure Speech), Echtzeit-Aufnahme via Socket.io und sicherer Dateiverwaltung in Azure Blob Storage.",
        },
        {
          title: "Parkraumüberwachung — Aimo Park",
          period: "Sep 2018 – Jul 2021",
          sub: "Halmstad",
          desc: "Parküberwachung und Gebühren, plus technische Wartung von Automaten und Beschilderung bei Bedarf.",
        },
      ],
      education: [
        {
          title:
            "Higher Vocational Education — Softwareentwickler KI, NBI Handelsakademin",
          period: "Aug 2024 – Jun 2026",
          sub: "Halmstad",
          desc: "C#, Python, JavaScript mit KI/ML. OOP, Datenbanken, Agile, Projektmanagement, 24 Wochen LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. Computertechnik — Universität Halmstad",
          period: "Aug 2021 – Jun 2022",
          sub: "Halmstad",
          desc: "Ein Jahr abgeschlossen. Algebra, diskrete Mathematik, Digitaltechnik, Java.",
        },
        {
          title: "Sicherheitsausbildung — Väktarskolan",
          period: "Jun 2021",
          sub: "Göteborg",
          desc: "Mit Zertifikaten abgeschlossen.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "Gymnasium — Naturwissenschaften, Sannarpsgymnasiet",
          period: "Aug 2011 – Jun 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Schwedisch (C2)", "Englisch (C2)", "Albanisch (C2)"],
      interests: ["Fitness", "Reisen", "Bücher"],
      traits: ["Sozial und freundlich", "Strukturiert und effizient"],
    },
    fr: {
      subtitle: "Développeur logiciel · Spécialiste IA",
      profile:
        "Développeur créatif avec de solides compétences en résolution de problèmes et un focus sur des systèmes efficaces et conviviaux. Travail d'équipe, communication claire, adaptation rapide. Fondateur de Pi93 AB (IT et services associés). Expérience aussi en surveillance de parkings et formation de garde.",
      sections: {
        profile: "Résumé",
        experience: "Expérience",
        education: "Formation",
        skills: "Compétences",
        languages: "Langues",
        interests: "Intérêts",
        traits: "Qualités",
      },
      experience: [
        {
          title: "Fondateur — Pi93 AB",
          period: "Oct 2026 – aujourd’hui",
          sub: "Halmstad · Entreprise propre",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Fondateur et dirigeant de Pi93 AB (org.nr 559605-1853) : conseil IT et services associés, site entreprise (pi93.se), et produits (pi93guide, Pi93 AI Assistant). J’y mets autant de temps que possible et construis les produits de bout en bout.",
        },
        {
          title: "Stagiaire IA — Swiiftly POS",
          period: "Mar 2026 – Mai 2026",
          sub: "Swiiftly · Danemark",
          desc: "Stagiaire IA chez Swiiftly (Danemark). Développement d’un AI Staff Assistant in-app pour le POS restaurant — afin que le personnel et les managers obtiennent des réponses plus rapides et plus claires au quotidien : support par rôle, retrieval (RAG), réponses grounded et expérience chat améliorée.",
        },
        {
          title: "Développeur — PodManager.AI",
          period: "Sep 2025 – Déc 2025",
          sub: "The Knowledge Formula · Suède",
          desc: "Stage LIA chez PodManager.AI axé sur le full-stack : Next.js, React, TypeScript, FastAPI et MongoDB. Contribution à l’édition audio IA, la transcription (Whisper, Azure Speech), l’enregistrement temps réel via Socket.io et la gestion sécurisée des fichiers dans Azure Blob Storage.",
        },
        {
          title: "Agent de surveillance — Aimo Park",
          period: "Sep 2018 – Jul 2021",
          sub: "Halmstad",
          desc: "Surveillance des parkings et amendes, plus maintenance technique des automates et signalisation si nécessaire.",
        },
      ],
      education: [
        {
          title:
            "Formation professionnelle supérieure — Développeur IA, NBI Handelsakademin",
          period: "Aoû 2024 – Jun 2026",
          sub: "Halmstad",
          desc: "C#, Python, JavaScript avec IA/ML. POO, bases de données, agile, gestion de projet, 24 semaines LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. génie informatique — Université de Halmstad",
          period: "Aoû 2021 – Jun 2022",
          sub: "Halmstad",
          desc: "Une année complétée. Algèbre, mathématiques discrètes, technologie numérique, Java.",
        },
        {
          title: "Formation sécurité — Väktarskolan",
          period: "Jun 2021",
          sub: "Göteborg",
          desc: "Certificats obtenus.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "Baccalauréat — Sciences naturelles, Sannarpsgymnasiet",
          period: "Aoû 2011 – Jun 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Suédois (C2)", "Anglais (C2)", "Albanais (C2)"],
      interests: ["Sport", "Voyage", "Livres"],
      traits: ["Sociable et agréable", "Organisé et efficace"],
    },
    es: {
      subtitle: "Desarrollador de software · Especialista en IA",
      profile:
        "Desarrollador creativo con fuertes habilidades de resolución de problemas y enfoque en sistemas eficientes y fáciles de usar. Trabajo en equipo, comunicación clara y adaptación rápida. Fundador de Pi93 AB (IT y servicios relacionados). Experiencia también en control de aparcamiento y formación de vigilante.",
      sections: {
        profile: "Resumen",
        experience: "Experiencia",
        education: "Formación",
        skills: "Habilidades",
        languages: "Idiomas",
        interests: "Intereses",
        traits: "Cualidades",
      },
      experience: [
        {
          title: "Fundador — Pi93 AB",
          period: "Oct 2026 – presente",
          sub: "Halmstad · Empresa propia",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Fundé y dirijo Pi93 AB (org.nr 559605-1853): consultoría IT y servicios relacionados, web de empresa (pi93.se) y productos como pi93guide y Pi93 AI Assistant. Dedico el tiempo que puedo a la empresa y construyo productos de extremo a extremo.",
        },
        {
          title: "Prácticas IA — Swiiftly POS",
          period: "Mar 2026 – May 2026",
          sub: "Swiiftly · Dinamarca",
          desc: "Prácticas de IA en Swiiftly (Dinamarca). Desarrollé un AI Staff Assistant in-app para POS de restaurante — para que personal y gerentes obtengan respuestas más rápidas y claras en el día a día: soporte por roles, retrieval (RAG), respuestas grounded y mejor experiencia de chat.",
        },
        {
          title: "Desarrollador — PodManager.AI",
          period: "Sep 2025 – Dic 2025",
          sub: "The Knowledge Formula · Suecia",
          desc: "Completé mis prácticas LIA en PodManager.AI con enfoque full-stack: Next.js, React, TypeScript, FastAPI y MongoDB. Contribuí a edición de audio con IA, transcripción (Whisper, Azure Speech), grabación en tiempo real con Socket.io y gestión segura de archivos en Azure Blob Storage.",
        },
        {
          title: "Control de aparcamiento — Aimo Park",
          period: "Sep 2018 – Jul 2021",
          sub: "Halmstad",
          desc: "Vigilancia de aparcamientos y multas, además de mantenimiento técnico de máquinas expendedoras y señalización cuando era necesario.",
        },
      ],
      education: [
        {
          title:
            "Formación profesional superior — Desarrollador IA, NBI Handelsakademin",
          period: "Ago 2024 – Jun 2026",
          sub: "Halmstad",
          desc: "C#, Python, JavaScript con IA/ML. POO, bases de datos, agile, gestión de proyectos, 24 semanas LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. ingeniería informática — Universidad de Halmstad",
          period: "Ago 2021 – Jun 2022",
          sub: "Halmstad",
          desc: "Un año completado. Álgebra, matemática discreta, tecnología digital, Java.",
        },
        {
          title: "Formación seguridad — Väktarskolan",
          period: "Jun 2021",
          sub: "Göteborg",
          desc: "Certificados obtenidos.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "Bachillerato — Ciencias naturales, Sannarpsgymnasiet",
          period: "Ago 2011 – Jun 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Sueco (C2)", "Inglés (C2)", "Albanés (C2)"],
      interests: ["Gimnasio", "Viajes", "Libros"],
      traits: ["Social y agradable", "Organizado y eficiente"],
    },
    it: {
      subtitle: "Sviluppatore software · Specialista IA",
      profile:
        "Sviluppatore creativo con solide capacità di problem solving e focus su sistemi efficienti e usabili. Lavoro di squadra, comunicazione chiara, adattamento rapido. Fondatore di Pi93 AB (IT e servizi correlati). Esperienza anche nel controllo parcheggi e formazione di vigilanza.",
      sections: {
        profile: "Riassunto",
        experience: "Esperienza",
        education: "Formazione",
        skills: "Competenze",
        languages: "Lingue",
        interests: "Interessi",
        traits: "Qualità",
      },
      experience: [
        {
          title: "Fondatore — Pi93 AB",
          period: "Ott 2026 – oggi",
          sub: "Halmstad · Azienda propria",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Ho fondato e gestisco Pi93 AB (org.nr 559605-1853): consulenza IT e servizi correlati, sito aziendale (pi93.se) e prodotti come pi93guide e Pi93 AI Assistant. Investo tutto il tempo possibile e costruisco i prodotti end-to-end.",
        },
        {
          title: "Tirocinio IA — Swiiftly POS",
          period: "Mar 2026 – Mag 2026",
          sub: "Swiiftly · Danimarca",
          desc: "Tirocinio IA presso Swiiftly (Danimarca). Sviluppo di un AI Staff Assistant in-app per POS ristorante — affinché staff e manager ottengano risposte più rapide e chiare ogni giorno: supporto per ruolo, retrieval (RAG), risposte grounded ed esperienza chat migliorata.",
        },
        {
          title: "Sviluppatore — PodManager.AI",
          period: "Set 2025 – Dic 2025",
          sub: "The Knowledge Formula · Svezia",
          desc: "Completato lo stage LIA presso PodManager.AI con focus full-stack: Next.js, React, TypeScript, FastAPI e MongoDB. Contributo a editing audio IA, trascrizione (Whisper, Azure Speech), registrazione in tempo reale via Socket.io e gestione sicura dei file in Azure Blob Storage.",
        },
        {
          title: "Addetto parcheggi — Aimo Park",
          period: "Set 2018 – Lug 2021",
          sub: "Halmstad",
          desc: "Sorveglianza parcheggi e multe, più manutenzione tecnica degli automi e segnaletica quando necessario.",
        },
      ],
      education: [
        {
          title:
            "Formazione professionale superiore — Sviluppatore IA, NBI Handelsakademin",
          period: "Ago 2024 – Giu 2026",
          sub: "Halmstad",
          desc: "C#, Python, JavaScript con IA/ML. OOP, database, agile, project management, 24 settimane LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. ingegneria informatica — Università di Halmstad",
          period: "Ago 2021 – Giu 2022",
          sub: "Halmstad",
          desc: "Un anno completato. Algebra, matematica discreta, tecnologia digitale, Java.",
        },
        {
          title: "Formazione sicurezza — Väktarskolan",
          period: "Giu 2021",
          sub: "Göteborg",
          desc: "Certificati ottenuti.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title:
            "Diploma scuola superiore — Scienze naturali, Sannarpsgymnasiet",
          period: "Ago 2011 – Giu 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Svedese (C2)", "Inglese (C2)", "Albanese (C2)"],
      interests: ["Palestra", "Viaggi", "Libri"],
      traits: ["Socievole e cordiale", "Organizzato ed efficiente"],
    },
    pl: {
      subtitle: "Programista · Specjalista AI",
      profile:
        "Kreatywny programista z mocnymi umiejętnościami rozwiązywania problemów i naciskiem na użyteczne, wydajne systemy. Praca zespołowa, jasna komunikacja, szybka adaptacja. Założyciel Pi93 AB (IT i powiązane usługi). Doświadczenie także z kontroli parkowania i szkolenia ochrony.",
      sections: {
        profile: "Podsumowanie",
        experience: "Doświadczenie",
        education: "Edukacja",
        skills: "Umiejętności",
        languages: "Języki",
        interests: "Zainteresowania",
        traits: "Cechy",
      },
      experience: [
        {
          title: "Założyciel — Pi93 AB",
          period: "Paź 2026 – teraz",
          sub: "Halmstad · Własna firma",
          linkUrl: "https://pi93.se",
          linkLabel: "Pi93 AB",
          desc: "Założyłem i prowadzę Pi93 AB (org.nr 559605-1853): konsulting IT i powiązane usługi, strona firmowa (pi93.se) oraz produkty jak pi93guide i Pi93 AI Assistant. Inwestuję tyle czasu, ile mogę, i buduję produkty end-to-end.",
        },
        {
          title: "Staż AI — Swiiftly POS",
          period: "Mar 2026 – Maj 2026",
          sub: "Swiiftly · Dania",
          desc: "Staż AI w Swiiftly (Dania). Opracowałem in-app AI Staff Assistant dla POS restauracji — aby personel i managerowie szybciej i jaśniej uzyskiwali odpowiedzi na co dzień: wsparcie oparte na rolach, retrieval (RAG), odpowiedzi grounded i lepsze doświadczenie czatu.",
        },
        {
          title: "Programista — PodManager.AI",
          period: "Wrz 2025 – Gru 2025",
          sub: "The Knowledge Formula · Szwecja",
          desc: "Ukończyłem praktyki LIA w PodManager.AI z naciskiem na full-stack: Next.js, React, TypeScript, FastAPI i MongoDB. Współtworzyłem edycję audio z AI, transkrypcję (Whisper, Azure Speech), nagrywanie w czasie rzeczywistym przez Socket.io i bezpieczne zarządzanie plikami w Azure Blob Storage.",
        },
        {
          title: "Kontrola parkowania — Aimo Park",
          period: "Wrz 2018 – Lip 2021",
          sub: "Halmstad",
          desc: "Nadzór parkingów i mandaty, a także konserwacja techniczna automatów biletowych i oznakowanie w razie potrzeby.",
        },
      ],
      education: [
        {
          title:
            "Wykształcenie zawodowe wyższe — Programista AI, NBI Handelsakademin",
          period: "Sie 2024 – Cze 2026",
          sub: "Halmstad",
          desc: "C#, Python, JavaScript z AI/ML. OOP, bazy danych, agile, zarządzanie projektami, 24 tygodnie LIA.",
          verifyUrl: NBI_DIPLOMA_URL,
        },
        {
          title: "M.Sc. inżynieria komputerowa — Uniw. Halmstad",
          period: "Sie 2021 – Cze 2022",
          sub: "Halmstad",
          desc: "Ukończony jeden rok. Algebra, matematyka dyskretna, technologia cyfrowa, Java.",
        },
        {
          title: "Szkolenie ochrony — Väktarskolan",
          period: "Cze 2021",
          sub: "Göteborg",
          desc: "Ukończone z certyfikatami.",
          verifyUrl: "/credentials/vu1-utbildningsbevis.png",
        },
        {
          title: "Matura — Nauki przyrodnicze, Sannarpsgymnasiet",
          period: "Sie 2011 – Cze 2014",
          sub: "Halmstad",
          desc: "",
        },
      ],
      skills: CV_SKILLS,
      spokenLanguages: ["Szwedzki (C2)", "Angielski (C2)", "Albański (C2)"],
      interests: ["Siłownia", "Podróże", "Książki"],
      traits: ["Towarzyski i miły", "Zorganizowany i skuteczny"],
    },
  },
};
