// Theme Toggle Logic (default theme: config.js → SITE_CONFIG.defaultTheme)
const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
const htmlEl = document.documentElement;

function getActiveTheme() {
  return htmlEl.classList.contains("light") ? "light" : "dark";
}

function initializeTheme() {
  const isLight = getActiveTheme() === "light";
  themeToggleBtns.forEach((btn) => updateIcons(btn, isLight));
}

function updateIcons(btn, isLight) {
  const sunIcon = btn.querySelector("#sun-icon");
  const moonIcon = btn.querySelector("#moon-icon");
  if (sunIcon && moonIcon) {
    sunIcon.style.display = isLight ? "block" : "none";
    moonIcon.style.display = isLight ? "none" : "block";
  }
}

initializeTheme();

themeToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    htmlEl.classList.toggle("light");
    htmlEl.classList.toggle("dark");

    const isLight = htmlEl.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    themeToggleBtns.forEach((b) => updateIcons(b, isLight));
  });
});

// Hamburger Menu Logic
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle("mobile-open");
    hamburgerBtn.classList.toggle("open", isOpen);
    hamburgerBtn.setAttribute(
      "aria-label",
      isOpen ? "Close Menu" : "Open Menu",
    );
  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll(".nav-link-item").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      hamburgerBtn.classList.remove("open");
      hamburgerBtn.setAttribute("aria-label", "Open Menu");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      navLinks.classList.remove("mobile-open");
      hamburgerBtn.classList.remove("open");
      hamburgerBtn.setAttribute("aria-label", "Open Menu");
    }
  });
}

// Language Toggle Logic
const dict = {
  About: { fr: "À propos", kn: "Ibyanjye" },
  Sandbox: { fr: "Démo", kn: "Igerageza" },
  Projects: { fr: "Projets", kn: "Imishinga" },
  Agent: { fr: "Agent", kn: "Agent" },
  Experience: { fr: "Expérience", kn: "Uburambe" },
  Contact: { fr: "Contact", kn: "Kuvugana" },
  "System Online . Ready for tasks": {
    fr: "Système en Ligne . Prêt pour les tâches",
    kn: "Sisitemu Iriho . Yiteguye",
  },
  "Full Stack Engineer": {
    fr: "Ingénieur Full Stack",
    kn: "Injiniyeri Full Stack",
  },
  "AI/ML Engineer": { fr: "Ingénieur IA/ML", kn: "Injiniyeri AI/ML" },
  "· AI/ML Engineer": { fr: "· Ingénieur IA/ML", kn: "· Injiniyeri AI/ML" },
  "Building scalable, secure backends and highly interactive frontends. Exploring the frontiers of artificial intelligence to design intuitive, robust solutions.":
    {
      fr: "Création de backends évolutifs et de frontends interactifs pour concevoir des solutions robustes.",
      kn: "Nubaka imbuga z' ikoranabuhanga zikomeye cyane kumurongo. Nkunda gukoresha application za AI kugirango mbone ibisubizo bigezweho.",
    },
  "View Featured Projects": { fr: "Voir les Projets", kn: "Reba Imishinga" },
  "Contact Me": { fr: "Me contacter", kn: "Mvugisha" },
  Live_Metrics: { fr: "Métriques_Direct", kn: "Sisitemu_Mpanze" },
  "CPU Usage": { fr: "Moteur CPU", kn: "Gukoresha CPU" },
  "RAM Allocation": { fr: "Allocation RAM", kn: "GUKORESHA RAM" },
  "Network Speed": { fr: "Vitesse Réseau", kn: "Umuvuduko Net" },
  Uptime: { fr: "Disponibilité", kn: "Igihe Gikora" },
  "Tech Stack": { fr: "Technologies", kn: "Ikoranabuhanga" },
  "Core programming languages and frameworks": {
    fr: "Principaux langages et frameworks",
    kn: "Indimi nkuru na frameworks",
  },
  Frontend: { fr: "Frontend", kn: "Imbere" },
  "Backend & Frameworks": { fr: "Backend & Serveurs", kn: "Inyuma na Severi" },
  "Databases & DevOps": { fr: "Bases & Opérations", kn: "Ububiko & DevOps" },
  "Code Demos": { fr: "Démonstrations de Code", kn: "Uburyo Twubaka" },
  "Live architectural demonstrations and examples": {
    fr: "Architecture en direct et exemples",
    kn: "Ingero za Kode nizindi serivisi k'umurongo",
  },
  "Featured Deployments": {
    fr: "Déploiements Récents",
    kn: "Imishinga Nyirizina",
  },
  "Recent high-performance projects": {
    fr: "Projets haute performance",
    kn: "Porogaramu nkoranyambaga ndetse nikoranabuhanga rihanitse",
  },
  "View Live": { fr: "Voir le direct", kn: "Reba kumurongo" },
  "Centralized AI dashboard for real-time model monitoring and performance tracking.":
    {
      fr: "Tableau de bord IA centralisé pour le suivi des modèles en temps réel.",
      kn: "Itsinda ry'ikoranabuhanga rihuza inyigo za AI ako kanya.",
    },
  "A sleek Microsoft Edge extension for focus management, featuring custom website blockers and a distraction-free UI.":
    {
      fr: "Une extension élégante pour la gestion de la concentration.",
      kn: "Porogaramu ifasha gukomeza kumvira imirimo idafite ibirangaza.",
    },
  "Professional-grade financial dashboard featuring fluid animations, monthly state management, and real-time data visualization.":
    {
      fr: "Tableau de bord financier de niveau professionnel.",
      kn: "Urubuga rufasha abantu gucunga umutungo muburyo burambye.",
    },
  "Secure fintech application for seamless peer-to-peer transfers and budget tracking.":
    {
      fr: "Application fintech sécurisée.",
      kn: "Porogaramu y'imari yizewe ihuza uburyo bw'imiyoboro yose.",
    },
  "Sleek, performance-optimized e-commerce rebuild for Simba Supermarket—Next.js App Router with TypeScript, Zustand for global state, and shadcn/ui on Tailwind, deployed on Vercel.":
    {
      fr: "Refonte e-commerce élégante et performante pour Simba Supermarket—Next.js App Router avec TypeScript, Zustand pour l'état global et shadcn/ui sur Tailwind, déployée sur Vercel.",
      kn: "Urubuga rwishya rwa e-commerce rwa Simba Supermarket—Next.js App Router na TypeScript, Zustand yo gucunga ibikubiyemo, shadcn/ui kuri Tailwind, rwashyizwe kuri Vercel.",
    },
  "Modern full-stack lecturer review platform with a clean, responsive UI—React 19, TypeScript, and Vite on the front end; Firebase Firestore and Google Auth on a serverless stack built to scale toward future AI.":
    {
      fr: "Plateforme moderne d'avis sur les enseignants—React 19, TypeScript et Vite à l'avant-plan ; Firestore et Google Auth sur une architecture serverless évolutive, prête pour l'IA.",
      kn: "Porogaramu y'ibitekerezo ku barimu—React 19, TypeScript na Vite imbere; Firebase Firestore na Google Auth kuri serverless yiteguye AI.",
    },
  "Simba E-Comm": { fr: "Simba E-Comm", kn: "Simba E-Comm" },
  ProfAdvisor: { fr: "ProfAdvisor", kn: "ProfAdvisor" },
  "Budget Planner": {
    fr: "Planificateur budgétaire",
    kn: "Gahunda y'ingengo",
  },
  "Focus Assistant": {
    fr: "Assistant de concentration",
    kn: "Umufasha wo kwibanda",
  },
  "Aether AI Hub": { fr: "Aether AI Hub", kn: "Aether AI Hub" },
  "Finova Wallet App": {
    fr: "Application Finova Wallet",
    kn: "Porogaramu Finova Wallet",
  },
  "Initiate Connection": { fr: "Connexion Sécurisée", kn: "Hitamo Uburyo" },
  "Ready to build something extraordinary? Drop a message in the secure channel or reach out via available networks.":
    {
      fr: "Prêt à créer quelque chose d'incroyable ? Contactez-moi dans le canal sécurisé.",
      kn: "Waba witeguye kubaka ibintu bikomeye? Nyandikira wumva unyisanzuyeho rwose.",
    },
  "Secure Message": { fr: "Message direct", kn: "Ubutumwa bwite" },
  "Copyright © 2026 Sam Musoni": {
    fr: "Droits d'auteur © 2026 Sam Musoni",
    kn: "Uburenganzira © 2026 Sam Musoni",
  },
  Awards: { fr: "Prix", kn: "Ibihembo" },
  "Photo Gallery": { fr: "Galerie", kn: "Amashusho" },
  "Visual assets and deployments featured across the interface": {
    fr: "Actifs visuels et déploiements présentés",
    kn: "Amashusho yose yanakoreshejwe murubuga",
  },
  "Interactive Terminal": { fr: "Terminal Interactif", kn: "Terminali" },
  "Execute commands to interact with the system": {
    fr: "Exécuter des commandes pour interagir avec le système",
    kn: "Koresha amategeko kugirango utange amabwiriza",
  },
  "Unique System Visits:": {
    fr: "Visites du système :",
    kn: "Abasuye urubuga :",
  },
  "Honors & Awards": { fr: "Distinctions et Prix", kn: "Ibihembo n'Amashimwe" },
  "Recognition for technical excellence and innovation": {
    fr: "Reconnaissance de l'excellence technique et de l'innovation",
    kn: "Kumenyekana kubera ubuhanga n'ikoranabuhanga",
  },
  "Top Innovator": { fr: "Meilleur Innovateur", kn: "Uwa Mbere mu Guhanga" },
  "Awarded 1st place at Rwanda National Tech Summit for an optimal predictive AI model.":
    {
      fr: "Premier prix au Sommet National du Rwanda pour un modèle prédictif.",
      kn: "Uwambere mu nama ihuza ibyikoranabuhanga mu Rwanda kubera AI.",
    },
  "OS Contributor": { fr: "Contributeur OS", kn: "Umusanzu wa Open Source" },
  "Recognized for significant upstream contributions to high-performance Python libraries.":
    {
      fr: "Reconnu pour des contributions majeures aux bibliothèques Python hautes performances.",
      kn: "Yashimiwe kubera uruhare runini mubyakozwe kuri Python yihuta cyane.",
    },
  "Best Cybersecurity Protocol": {
    fr: "Protocole de Sécurité",
    kn: "Umutekano mwiza w'Ikoranabuhanga",
  },
  "Developed the most resilient encryption logic algorithm during the 2025 Kigali Hackathon.":
    {
      fr: "Développement d'un algorithme de chiffrement extrêmement résilient.",
      kn: "Nakoze ikoranabuhanga rikomeye ricunga umutekano mu ihatana rya Kigali.",
    },
  "Send me a message": { fr: "Envoyez un message", kn: "Ohereza Ubutumwa" },
  Name: { fr: "Nom", kn: "Izina" },
  Message: { fr: "Message", kn: "Ubutumwa" },
  "Send Message": { fr: "Envoyer", kn: "Ohereza" },
  "SYSTEM OFFLINE": { fr: "HORS LIGNE", kn: "NTIRI KUMURONGO" },
  "The requested deployment is currently undergoing scheduled backend architecture maintenance to patch vulnerabilities and upgrade cluster infrastructure. Please check back later.":
    {
      fr: "Le système subit actuellement une maintenance backend planifiée pour corriger des failles.",
      kn: "Inshingano uri gusaba zabaye zikuweho byagateganyo kugirango zivugururwe byisumbyeho. Mwongere mukanya.",
    },
  "Return to Hub": { fr: "Retour", kn: "Subira Inyuma" },
  "# Initialize high-performance quantization": {
    fr: "# Initialisation de la quantification haute performance",
    kn: "# Gutangiza kwanitizasiyo yihuse",
  },
  "// Align memory to page boundaries for optimal L1 cache hits": {
    fr: "// Aligner la mémoire sur les limites de page pour le cache L1",
    kn: "// Gutsindagira ububiko kumpande za paji kubera L1 cache",
  },
  "Welcome to SMUSONI interactive shell.": {
    fr: "Bienvenue dans le shell interactif SMUSONI.",
    kn: "Murakaza neza muri shell ya SMUSONI.",
  },
  Type: { fr: "Tapez", kn: "Andika" },
  "'help'": { fr: "'help'", kn: "'help'" },
  "to see available commands.": {
    fr: "pour voir les commandes.",
    kn: "kugirango urebe commands.",
  },
  "Available commands:": {
    fr: "Commandes disponibles :",
    kn: "Amategeko ahari:",
  },
  "- about: Read system bio": {
    fr: "- about: Lire la bio du système",
    kn: "- about: Soma ibyerekeranye nange",
  },
  "- stack: View core technologies": {
    fr: "- stack: Voir les technologies",
    kn: "- stack: Reba ikoranabuhanga nkoresha",
  },
  "- projects: List active deployments": {
    fr: "- projects: Liste des déploiements",
    kn: "- projects: Reba imishinga mfite",
  },
  "- contact: Initialize commlink": {
    fr: "- contact: Initier la communication",
    kn: "- contact: Ngezaho ubutumwa",
  },
  "- whoami: Access level check": {
    fr: "- whoami: Vérification du niveau",
    kn: "- whoami: Reba uwo uriwe",
  },
  "- status: Server health check": {
    fr: "- status: État du serveur",
    kn: "- status: Reba uko seriveri(server) imeze",
  },
  "- date: Print system time": {
    fr: "- date: Afficher l'heure",
    kn: "- date: Reba isaha n' itariki",
  },
  "- clear: Clear terminal output": {
    fr: "- clear: Effacer le terminal",
    kn: "- clear: Siba ibyanditswe",
  },
  "Full Stack Engineer & LLM Enthusiast based in Kigali, Rwanda. Specializing in high-performance computing.":
    {
      fr: "Ingénieur Full Stack et passionné de LLM basé à Kigali, Rwanda. Spécialisé en calcul haute performance.",
      kn: "Injiniyeri Full Stack n'umukunzi wa LLM uba i Kigali, Rwanda. Yibanda kubara byihuse.",
    },
  "Type 'contact' to request deployment info.": {
    fr: "Tapez 'contact' pour obtenir les infos de déploiement.",
    kn: "Andika 'contact' wumve amakuru y'imishinga.",
  },
  "Secure commlink ready. Reach out via email:": {
    fr: "Lien de communication sécurisé prêt. Contactez par e-mail :",
    kn: "Uburyo bwo kuvugana buriteguye. Koresha imeli:",
  },
  "Click Here": { fr: "Cliquez ici", kn: "Kanda Hano" },
  "guest_user@smusoni-net": {
    fr: "utilisateur_invite@smusoni-net",
    kn: "umushyitsi@smusoni-net",
  },
  "All clusters fully operational. No vulnerabilities detected. Uptime: 99.98%":
    {
      fr: "Tous les clusters sont opérationnels. Aucune vulnérabilité. Disponibilité: 99.98%",
      kn: "Itsinda ryose rirakora. Nta kibazo na kimwe. Igihe: 99.98%",
    },
  "bash: permission denied: root access required. This incident will be reported.":
    {
      fr: "bash: accès refusé: droits root requis. Cet incident sera signalé.",
      kn: "bash: byanzwe: hakenewe root. Iri kosa rigiye gutangazwa.",
    },
  "Wake up, Neo...": { fr: "Réveille-toi, Neo...", kn: "Kanguka, Neo..." },
  "The Matrix has you 😂": {
    fr: "La Matrice t'a...",
    kn: "Matrix iragufite...",
  },
  "> System initialized. AlphaAgent standing by.": {
    fr: "> Système initialisé. AlphaAgent prêt.",
    kn: "> Sisitemu yatangiye. AlphaAgent iriteguye.",
  },
  "> User:": { fr: "> Utilisateur :", kn: "> Umukoresha :" },
  "> Agent:": { fr: "> Agent :", kn: "> Agent :" },
  "Hi there! I'm the Alpha Core Agent. I'm here to help you navigate Sam's world. What would you like to know?":
    {
      fr: "Salut ! Je suis l'agent Alpha Core. Je suis là pour vous aider à naviguer dans l'univers de Sam. Que voulez-vous savoir ?",
      kn: "Muraho! Ndi Alpha Core Agent. Ndi hano kugirango mbagufashe kumenya ibya Sam. Murifuza kumenya iki?",
    },
  "Greetings, human. I am the Alpha Core. Systems operational. How can I assist you today?":
    {
      fr: "Salutations, humain. Je suis l'Alpha Core. Systèmes opérationnels. Comment puis-je vous aider aujourd'hui ?",
      kn: "Muraho, muntu. Ndi Alpha Core. Sisitemu irakora neza. Nabafasha nte uyu munsi?",
    },
  "Welcome! I'm Sam's digital companion. I can tell you about his skills, projects, or how to get in touch.":
    {
      fr: "Bienvenue ! Je suis le compagnon numérique de Sam. Je peux vous parler de ses compétences, de ses projets ou de la façon de le contacter.",
      kn: "Murakaza neza! Ndi umufasha wa Sam mu buryo bw'ikoranabuhanga. Nshobora kubabwira kubuhanga bwe, imishinga ye, cyangwa uko mwamuvugisha.",
    },
  "Nice to meet you! I've updated my registers. Now, what can I tell you about Sam's work?":
    {
      fr: "Ravi de vous rencontrer ! J'ai mis à jour mes registres. Maintenant, que puis-je vous dire sur le travail de Sam ?",
      kn: "Nishimiye kubamenya! Namaze kubashyira muri sisitemu yanjye. None se, nababwira iki ku mirimo ya Sam?",
    },
  "I'm still learning! I didn't quite catch that. You can ask me about Sam's projects, skills, or how to contact him.":
    {
      fr: "J'apprends encore ! Je n'ai pas bien compris. Vous pouvez me poser des questions sur les projets de Sam, ses compétences ou comment le contacter.",
      kn: "Ndacyiyiga! Sinumvise neza icyo mushatse kuvuga. Mushobora kumbaza kubyerekeye imishinga ya Sam, ubuhanga bwe, cyangwa uko mwamuvugisha.",
    },
  "Great! What else would you like to know?": {
    fr: "Génial ! Que voulez-vous savoir d'autre ?",
    kn: "Nibyiza cyane! Hari ikindi mwifuza kumenya?",
  },
  "Sam Musoni is a Full Stack Engineer based in Kigali, Rwanda. He is passionate about Artificial Intelligence and Machine Learning. Would you like to hear about his skills or projects?":
    {
      fr: "Sam Musoni est un ingénieur Full Stack basé à Kigali, au Rwanda. Il est passionné par l'intelligence artificielle et l'apprentissage automatique. Souhaitez-vous en savoir plus sur ses compétences ou ses projets ?",
      kn: "Sam Musoni ni Injiniyeri wa Full Stack uba i Kigali, mu Rwanda. Ukunze cyane Ubuhanga mu by'Ikoranabuhanga (AI) na Machine Learning. Mwifuza kumenya ubumenyi bwe cyangwa imishinga ye?",
    },
  "His primary toolkit includes Node.js, React, and Python. He is also highly proficient in C++, Postgres, and Docker. Are you looking for a specific skill?":
    {
      fr: "Sa boîte à outils principale comprend Node.js, React et Python. Il est également très compétent en C++, Postgres et Docker. Recherchez-vous une compétence spécifique ?",
      kn: "Ibikoresho bye by'ingenzi harimo Node.js, React, na Python. Nanone azi neza C++, Postgres, na Docker. Hari ubumenyi bwihariye mwaba mushaka?",
    },
  "You can view his full portfolio above, but some standout projects include Aether AI Hub and Focus Assistant. Shall I provide more details?":
    {
      fr: "Vous pouvez voir son portfolio complet ci-dessus, mais certains projets notables incluent Aether AI Hub et Focus Assistant. Souhaitez-vous plus de détails ?",
      kn: "Mushobora kureba imishinga ye yose haruguru, ariko imwe mu ikomeye harimo Aether AI Hub na Focus Assistant. Mbabahe andi makuru arambuye?",
    },
  "Please navigate to the About or Awards sections to see his qualifications, or reach out via Email for a formal resume PDF.":
    {
      fr: "Veuillez consulter les sections À propos ou Prix pour voir ses qualifications, ou contactez-le par e-mail pour obtenir un CV au format PDF.",
      kn: "Nyamuneka murebe mu gice cya 'Ibyerekeranye nange' cyangwa 'Ibihembo' kugirango murebe uburambe bwe, cyangwa mumwandikire kuri imeli mumuhe CV ye ya PDF.",
    },
  "The best way to reach Sam is via email or by connecting on LinkedIn. He generally responds within 24 hours. You can also use the <a href='contact.html' style='color: var(--primary); text-decoration: underline;'>contact form here</a>.":
    {
      fr: "Le meilleur moyen de contacter Sam est par e-mail ou en se connectant sur LinkedIn. Il répond généralement sous 24 heures. Vous pouvez aussi utiliser le <a href='contact.html' style='color: var(--primary); text-decoration: underline;'>formulaire de contact ici</a>.",
      kn: "Uburyo bwiza bwo kuvugana na Sam ni kuri imeli cyangwa guhura kuri LinkedIn. Akunze gusubiza mu masaha 24. Mwanakoresha <a href='contact.html' style='color: var(--primary); text-decoration: underline;'>ifomu yo kuvugana hano</a>.",
    },
  "Currently, Sam is open to exciting full-time roles and freelance projects. Feel free to contact him to discuss opportunities!":
    {
      fr: "Actuellement, Sam est ouvert à des rôles à temps plein passionnants et à des projets en freelance. N'hésitez pas à le contacter pour discuter d'opportunités !",
      kn: "Kuri ubu, Sam yiteguye akazi gahoraho cyangwa imishinga y'igihe gito. Mwumve mwisanzuye kumuvugisha kugirango muganire ku mahirwe ahari!",
    },
  "Project rates depend entirely on scope and requirements. Sam would love to hear about your project to give you an accurate estimate. Should I provide his email?":
    {
      fr: "Les tarifs des projets dépendent entièrement de la portée et des exigences. Sam aimerait en savoir plus sur votre projet pour vous donner un devis précis. Dois-je vous donner son e-mail ?",
      kn: "Ibiciro by'imishinga biterwa n'ubunini n'ibikenewe. Sam yabyishimira kumva ibyo mushaka kugirango abahe igiciro gikwiye. Mbabahe imeli ye?",
    },
  "When not coding, Sam is usually brewing an unnecessarily complicated cup of coffee or diving deep into cyberpunk lore. And the meaning of life? 42, obviously.":
    {
      fr: "Quand il ne code pas, Sam prépare généralement une tasse de café inutilement compliquée ou se plonge dans l'univers cyberpunk. Et le sens de la vie ? 42, évidemment.",
      kn: "Iyo adahari ari gukora kode, Sam akunze kuba ari gukora ikawa iteguye mu buryo bugoye cyangwa ari kwiga ku mateka ya cyberpunk. Naho icyo ubuzima bivuze? Ni 42, birumvikana.",
    },
  "Unable to fetch external APIs. It's always cyberpunk weather here.": {
    fr: "Impossible de récupérer les API externes. Il fait toujours un temps cyberpunk ici.",
    kn: "Ntibishoboka kubona amakuru y'ikirere. Hano buri gihe ni ikirere cya cyberpunk.",
  },
  "Access denied. This terminal is strictly monitored by The Alpha Core.": {
    fr: "Accès refusé. Ce terminal est strictement surveillé par l'Alpha Core.",
    kn: "Uburenganzira bwanzwe. Iri koranabuhanga ricungwa cyane na Alpha Core.",
  },
  "Glad I could help! What else?": {
    fr: "Heureux d'avoir pu aider ! Quoi d'autre ?",
    kn: "Nishimiye kubafasha! Hari ikindi?",
  },
  "Skills 🛠️": { fr: "Compétences 🛠️", kn: "Ubuhanga 🛠️" },
  "Projects 🚀": { fr: "Projets 🚀", kn: "Imishinga 🚀" },
  "Contact ✉️": { fr: "Contact ✉️", kn: "Kuvugana ✉️" },
  "About Sam 👋": { fr: "À propos 👋", kn: "Ibyerekeye Sam 👋" },
  "Agent:": { fr: "Agent :", kn: "Agent :" },
  "User:": { fr: "Utilisateur :", kn: "Umukoresha :" },
  Send: { fr: "Envoyer", kn: "Ohereza" },
  "Interact with an AI agent created by Sam": {
    fr: "Interagissez avec un agent AI créé par Sam",
    kn: "Vugana na agent AI yakozwe na Sam",
  },
  "Chat directly with The Alpha Core Agent created by Sam": {
    fr: "Discutez directement avec l'agent Alpha Core créé par Sam",
    kn: "Ganira na Alpha Core Agent yakozwe na Sam",
  },
  "Where I've ": { fr: "Où j'ai ", kn: "Aho " },
  Built: { fr: "Construit", kn: "Nubatse" },
  "From mastering complex algorithms at A2SV to securing the internet's foundation and engineering the future of AI.":
    {
      fr: "De la maîtrise d'algorithmes complexes chez A2SV à la sécurisation des fondations de l'internet et l'ingénierie de l'IA.",
      kn: "Kuva mukumenya algorithm zihanitse muri A2SV kugeza kubaka umutekano w'ikoranabuhanga n'iterambere rya AI.",
    },
  Trainee: { fr: "Stagiaire", kn: "Uwimenyereza" },
  "Dec 2025 -> Present": {
    fr: "Déc 2025 -> Présent",
    kn: "Ukuboza 2025 -> Ubu",
  },
  "Mastered Data Structures and Algorithms through rigorous daily challenges.":
    {
      fr: "Maîtrise des structures de données et des algorithmes grâce à des défis quotidiens rigoureux.",
      kn: "Naminuje imiterere y'amakuru na algorithm binyuze mu mbogamizi zikomeye za buri munsi.",
    },
  "Developed optimized technical solutions using Python for complex problem sets.":
    {
      fr: "Développement de solutions techniques optimisées avec Python pour des problèmes complexes.",
      kn: "Natezimbere ibisubizo byikoranabuhanga nkurikije Python kubibazo bikomeye.",
    },
  "Apprentice & Student Fellow": {
    fr: "Apprenti & Étudiant Chercheur",
    kn: "Uwimenyereza & Umunyeshuri",
  },
  "Oct 2025 -> Feb 2026": {
    fr: "Oct 2025 -> Fév 2026",
    kn: "Ukwakira 2025 -> Gashyantare 2026",
  },
  "Gained hands-on expertise in Cybersecurity, Information Security, and Network Expansion.":
    {
      fr: "Acquisition d'une expertise pratique en cybersécurité, sécurité de l'information et expansion réseau.",
      kn: "Nabonye ubumenyi ngiro muri Cybersecurity, Umutekano w'amakuru, n'iyagurwa ry'umuyoboro.",
    },
  "Attained certification in Advanced Network Operations 2.0.": {
    fr: "Obtention de la certification en Opérations Réseau Avancées 2.0.",
    kn: "Nabonye impamyabumenyi muri Advanced Network Operations 2.0.",
  },
  "Configured and managed Caching DNS Servers for enhanced network performance.":
    {
      fr: "Configuration et gestion de serveurs DNS de cache pour améliorer les performances réseau.",
      kn: "Nashyizeho kandi nicunga Caching DNS Servers kugirango imikorere yumuyoboro yiyongere.",
    },
  "Demonstrated advanced proficiency in UNIX/Linux Shell environments.": {
    fr: "Démonstration d'une compétence avancée dans les environnements Shell UNIX/Linux.",
    kn: "Nerekanye ubuhanga buhanitse muri UNIX/Linux Shell.",
  },
};

let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Update active UI
  document.querySelectorAll(".lang-toggle .lang").forEach((el) => {
    el.classList.toggle("active", el.innerText.toLowerCase() === lang);
  });

  // Translate DOM Nodes
  const walk = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  let n;
  while ((n = walk.nextNode())) {
    const parent = n.parentElement;
    if (
      !parent ||
      parent.tagName === "SCRIPT" ||
      parent.tagName === "STYLE" ||
      parent.id === "term-input"
    )
      continue;

    // Exclude general code blocks, but allow explicit span comments
    if (parent.closest(".code-block") && !parent.classList.contains("comment"))
      continue;

    let originalText;
    if (parent.hasAttribute("data-i18n-orig")) {
      originalText = parent.getAttribute("data-i18n-orig");
    } else {
      if (typeof n.origValue === "undefined") {
        n.origValue = n.nodeValue.trim().replace(/\s+/g, " ");
      }
      originalText = n.origValue;
    }

    if (originalText && dict[originalText]) {
      const localizedText =
        lang === "en" ? originalText : dict[originalText][lang];
      // Use a safer replacement for text content to avoid destroying whitespace if we're not using total replace
      const currentTrimmed = n.nodeValue.trim();
      if (currentTrimmed) {
        n.nodeValue = n.nodeValue.replace(currentTrimmed, localizedText);
      }

      if (parent.hasAttribute("data-text")) {
        parent.setAttribute("data-text", localizedText);
      }
    }
  }

  // Update placeholders
  document.querySelectorAll("input[placeholder]").forEach((input) => {
    if (typeof input.origPlaceholder === "undefined") {
      input.origPlaceholder = input.placeholder;
    }
    const orig = input.origPlaceholder;
    if (dict[orig]) {
      input.placeholder = lang === "en" ? orig : dict[orig][lang];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Inject lang click actions safely mapping to the toggle pill
  document.querySelectorAll(".lang-toggle .lang").forEach((el) => {
    el.addEventListener("click", (e) =>
      setLang(e.target.innerText.toLowerCase()),
    );
  });

  // Trigger localization safely on load without user input if pre-selected
  if (currentLang !== "en") {
    setLang(currentLang);
  } else {
    document.querySelectorAll(".lang-toggle .lang").forEach((el) => {
      el.classList.toggle("active", el.innerText.toLowerCase() === "en");
    });
  }
});

// Metric live simulation
setInterval(() => {
  const cpu = document.getElementById("cpu-val");
  const ram = document.getElementById("ram-val");
  const net = document.getElementById("net-val");

  if (cpu) {
    const val = Math.floor(Math.random() * 20) + 5;
    cpu.innerText = `${val}%`;
    if (cpu.nextElementSibling && cpu.nextElementSibling.firstElementChild) {
      cpu.nextElementSibling.firstElementChild.style.width = `${val}%`;
    }
  }

  if (ram) {
    const val = +(Math.random() * 1.5 + 3).toFixed(1);
    ram.innerText = `${val} GB`;
    if (ram.nextElementSibling && ram.nextElementSibling.firstElementChild) {
      ram.nextElementSibling.firstElementChild.style.width = `${(val / 16) * 100}%`;
    }
  }

  if (net) {
    const val = Math.floor(Math.random() * 150) + 800; // 800-950 Mbps
    net.innerText = `${val} Mbps`;
  }
}, 2000);

// Terminal Logic
const termInput = document.getElementById("term-input");
const termBody = document.getElementById("term-body");
const termForm = document.getElementById("term-form");
const TERM_SUDO_COUNT_KEY = "term_sudo_count";

function getSudoAttemptCount() {
  return parseInt(sessionStorage.getItem(TERM_SUDO_COUNT_KEY) || "0", 10);
}

function incrementSudoAttemptCount() {
  const next = getSudoAttemptCount() + 1;
  sessionStorage.setItem(TERM_SUDO_COUNT_KEY, String(next));
  return next;
}

let termEnterHandled = false;

function runTerminalCommand() {
  const command = termInput.value.trim().toLowerCase();
  if (!command) return;

  // Prevent keydown + keyup + form submit from running the same command 2–3 times
  if (termInput.dataset.busy === "1") return;
  termInput.dataset.busy = "1";
  termInput.value = "";

  // Output command echo
  const html = `
        <p class="term-line"><span class="prompt">usr@smusoni:~$</span> ${command}</p>
    `;

  let response = "";

  if (command === "help") {
    response = `
            <p class="term-line text-primary">Available commands:</p>
            <p class="term-line">- about: Read system bio</p>
            <p class="term-line">- stack: View core technologies</p>
            <p class="term-line">- projects: List active deployments</p>
            <p class="term-line">- contact: Initialize commlink</p>
            <p class="term-line">- whoami: Access level check</p>
            <p class="term-line">- status: Server health check</p>
            <p class="term-line">- date: Print system time</p>
            <p class="term-line">- clear: Clear terminal output</p>
        `;
  } else if (command === "about") {
    response = `<p class="term-line">Full Stack Engineer & LLM Enthusiast based in Kigali, Rwanda. Specializing in high-performance computing.</p>`;
  } else if (command === "stack") {
    response = `<p class="term-line text-secondary">React.js, Node.js, Python, FastAPI, C, PostgreSQL, Ray, Redis</p>`;
  } else if (command === "projects") {
    response = `<p class="term-line text-primary">1. Aether AI Hub<br>2. Focus Assistant<br>3. Budget Planner<br>4. Finova Wallet App<br>5. Simba E-Comm<br>6. ProfAdvisor<br>Type 'contact' to request deployment info.</p>`;
  } else if (command === "contact") {
    response = `<p class="term-line">Secure commlink ready. Reach out via email: <a href="contact.html" style="color:var(--secondary)">Click Here</a></p>`;
  } else if (command === "whoami") {
    response = `<p class="term-line">guest_user@smusoni-net</p>`;
  } else if (command === "status") {
    response = `<p class="term-line text-primary">All clusters fully operational. No vulnerabilities detected. Uptime: 99.98%</p>`;
  } else if (command === "date") {
    response = `<p class="term-line">${new Date().toUTCString()}</p>`;
  } else if (command === "sudo" || command.startsWith("sudo ")) {
    const sudoAttempt = incrementSudoAttemptCount();
    if (sudoAttempt === 2) {
      response = `<p class="term-line text-secondary">Wake up, Neo...<br>The Matrix has you 😂</p>`;
    } else {
      response = `<p class="term-line text-red">bash: permission denied: root access required. This incident will be reported.</p>`;
    }
  } else if (command === "matrix") {
    response = `<p class="term-line text-secondary">Wake up, Neo...<br>The Matrix has you 😂</p>`;
  } else if (command === "clear") {
    document
      .querySelectorAll(".term-line:not(:last-child)")
      .forEach((el) => el.remove());
    requestAnimationFrame(() => {
      delete termInput.dataset.busy;
    });
    return;
  } else {
    response = `<p class="term-line text-red">Command not found: ${command}. Type 'help' for options.</p>`;
  }

  // Insert before the input container
  const inputLine = document.querySelector(".term-input-line");
  inputLine.insertAdjacentHTML("beforebegin", html + response);

  // Scroll to bottom
  termBody.scrollTop = termBody.scrollHeight;

  // Translate new output instantly
  setLang(currentLang);

  requestAnimationFrame(() => {
    delete termInput.dataset.busy;
  });
}

if (termInput) {
  // keydown — standard browsers
  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      termEnterHandled = true;
      runTerminalCommand();
    }
  });

  // keyup — fallback for Samsung/Android keyboards that skip keydown
  termInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (termEnterHandled) {
        termEnterHandled = false;
        return;
      }
      runTerminalCommand();
    }
  });

  // form submit — fires when mobile keyboard "Go" action key is pressed
  if (termForm) {
    termForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (termEnterHandled) return;
      runTerminalCommand();
    });
  }

  // Keep focus when tapping terminal body
  termBody.addEventListener("click", () => {
    termInput.focus();
  });
}

// Sandbox Tabs
const tabs = document.querySelectorAll(".tab");
const codeBlocks = document.querySelectorAll(".code-block");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach((t) => t.classList.remove("active"));
    codeBlocks.forEach((c) => c.classList.remove("active"));

    // set current
    tab.classList.add("active");
    const targetId = `code-${tab.dataset.tab}`;
    document.getElementById(targetId).classList.add("active");
  });
});

// Copy Email Logic
function copyEmail(e) {
  e.preventDefault();
  navigator.clipboard.writeText("nshutisam61@gmail.com").then(() => {
    const btn = e.target;
    const originalText = btn.innerText;
    btn.innerText = "Copied to Clipboard!";
    btn.style.borderColor = "var(--secondary)";
    btn.style.color = "var(--secondary)";

    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 3000);
  });
}

// Contact Form Submission (Formspree AJAX)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const feedback = document.getElementById("form-feedback");
    feedback.innerText = "Transmitting data...";
    feedback.style.color = "var(--text-gray)";

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        feedback.innerText = "Message sent successfully!";
        feedback.style.color = "#34d399"; // green color
        contactForm.reset();
      } else {
        feedback.innerText = "Transmission failed. Try again.";
        feedback.style.color = "var(--red, #ef4444)";
      }
    } catch (error) {
      feedback.innerText = "Connection error. Please try again.";
      feedback.style.color = "var(--red, #ef4444)";
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      feedback.innerText = "";
    }, 5000);
  });
}

// Fluid Scroll Animations (Observer Pattern)
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(
    ".section-title, .expertise-card, .tech-card:not(.metrics-card):not(.experience-card), .project-card, .contact-card, .timeline-item",
  );
  revealElements.forEach((el, index) => {
    el.classList.add("reveal");

    // Add staggered delays for grid items automatically
    if (
      el.classList.contains("expertise-card") ||
      el.classList.contains("project-card") ||
      el.classList.contains("timeline-item")
    ) {
      el.style.transitionDelay = `${(index % 3) * 0.15}s`;
    }

    observer.observe(el);
  });

  // Repeat Hand Click Animation on Scroll
  const handAnimContainer = document.querySelector(".hand-animation-container");
  const clickTarget = document.querySelector(".click-target");

  if (handAnimContainer && clickTarget) {
    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slight delay to allow layout to settle
            setTimeout(() => {
              handAnimContainer.classList.add("run-anim");
              clickTarget.classList.add("run-anim");
            }, 50);
          } else {
            handAnimContainer.classList.remove("run-anim");
            clickTarget.classList.remove("run-anim");
          }
        });
      },
      { threshold: 0.5 },
    );

    animObserver.observe(handAnimContainer.parentElement);
  }
});
// Visit Counter — proxied via Vercel serverless function (/api/counter)
// Calls our own domain so Brave, Firefox, and all browsers receive the real count.
async function initializeVisitCounter() {
  const counterEl = document.getElementById("visit-counter");
  if (!counterEl) return;

  // localStorage fallback: persists and increments if the proxy is unavailable
  function showFallback() {
    const startDate = new Date("2025-10-01").getTime();
    const days = Math.floor((Date.now() - startDate) / (1000 * 60 * 60 * 24));
    const baseEstimate = 1420 + days * 12;
    const stored = parseInt(localStorage.getItem("visit_count_fallback"), 10);
    const newCount =
      !stored || stored < baseEstimate ? baseEstimate : stored + 1;
    localStorage.setItem("visit_count_fallback", newCount);
    counterEl.innerText = newCount.toLocaleString();
  }

  try {
    const response = await fetch("/api/counter");
    if (!response.ok) throw new Error("Proxy error");
    const data = await response.json();
    if (data && data.count) {
      counterEl.innerText = Number(data.count).toLocaleString();
    } else {
      throw new Error("Invalid data");
    }
  } catch (err) {
    showFallback();
  }
}
initializeVisitCounter();

// Agent Runner Logic
const agentInput = document.getElementById("agent-input-field");
const agentBtn = document.getElementById("agent-run-btn");
const agentOutput = document.getElementById("agent-output");

if (agentInput && agentBtn && agentOutput) {
  let lastIntent = null;
  let userName = sessionStorage.getItem("agent_user_name") || null;
  const quickRepliesContainer = document.getElementById("agent-quick-replies");

  // Multi-turn responses
  const msgGreeting = [
    "Hi there! I'm the Alpha Core Agent. I'm here to help you navigate Sam's world. What would you like to know?",
    "Greetings, human. I am the Alpha Core. Systems operational. How can I assist you today?",
    "Welcome! I'm Sam's digital companion. I can tell you about his skills, projects, or how to get in touch.",
  ];

  const msgAbout =
    "Sam Musoni is a Full Stack Engineer based in Kigali, Rwanda. He is passionate about Artificial Intelligence and Machine Learning. Would you like to hear about his skills or projects?";
  const msgSkills =
    "His primary toolkit includes Node.js, React, and Python. He is also highly proficient in C++, Postgres, and Docker. Are you looking for a specific skill?";
  const msgProjects =
    "You can view his full portfolio above, but some standout projects include Aether AI Hub and Focus Assistant. Shall I provide more details?";
  const msgResume =
    "Please navigate to the About or Awards sections to see his qualifications, or reach out via Email for a formal resume PDF.";
  const msgContact =
    "The best way to reach Sam is via email or by connecting on LinkedIn. He generally responds within 24 hours. You can also use the <a href='contact.html' style='color: var(--primary); text-decoration: underline;'>contact form here</a>.";
  const msgAvailability =
    "Currently, Sam is open to exciting full-time roles and freelance projects. Feel free to contact him to discuss opportunities!";
  const msgPricing =
    "Project rates depend entirely on scope and requirements. Sam would love to hear about your project to give you an accurate estimate. Should I provide his email?";
  const msgFun =
    "When not coding, Sam is usually brewing an unnecessarily complicated cup of coffee or diving deep into cyberpunk lore. And the meaning of life? 42, obviously.";
  const msgWeather =
    "Unable to fetch external APIs. It's always cyberpunk weather here.";
  const msgAdmin =
    "Access denied. This terminal is strictly monitored by The Alpha Core.";
  const msgNameIdentify = (name) =>
    `Nice to meet you! I've updated my registers. Now, what can I tell you about Sam's work?`;

  const knowledgeBase = {
    hello: msgGreeting,
    hi: msgGreeting,
    hey: msgGreeting,
    greeting: msgGreeting,
    morning: msgGreeting,
    "who are you": msgGreeting,
    bot: msgGreeting,
    help: msgGreeting,
    status: msgGreeting,
    about: msgAbout,
    "who is": msgAbout,
    background: msgAbout,
    bio: msgAbout,
    story: msgAbout,
    "where from": msgAbout,
    sam: msgAbout,
    where: msgAbout,
    location: msgAbout,
    skill: msgSkills,
    technolog: msgSkills,
    stack: msgSkills,
    tool: msgSkills,
    software: msgSkills,
    language: msgSkills,
    "good at": msgSkills,
    framework: msgSkills,
    project: msgProjects,
    portfolio: msgProjects,
    work: msgProjects,
    example: msgProjects,
    "case study": msgProjects,
    built: msgProjects,
    "show me": msgProjects,
    resume: msgResume,
    cv: msgResume,
    download: msgResume,
    pdf: msgResume,
    document: msgResume,
    paper: msgResume,
    experience: msgResume,
    education: msgResume,
    contact: msgContact,
    email: msgContact,
    hire: msgContact,
    freelance: msgContact,
    message: msgContact,
    "reach out": msgContact,
    talk: msgContact,
    phone: msgContact,
    "get in touch": msgContact,
    "how can i": msgContact,
    availab: msgAvailability,
    job: msgAvailability,
    looking: msgAvailability,
    open: msgAvailability,
    hiring: msgAvailability,
    cost: msgPricing,
    price: msgPricing,
    rate: msgPricing,
    hourly: msgPricing,
    budget: msgPricing,
    charge: msgPricing,
    fee: msgPricing,
    joke: msgFun,
    fun: msgFun,
    hobbi: msgFun,
    music: msgFun,
    coffee: msgFun,
    pizza: msgFun,
    "meaning of life": msgFun,
    weather: msgWeather,
    sudo: msgAdmin,
    admin: msgAdmin,
    "Skills 🛠️": msgSkills,
    "Projects 🚀": msgProjects,
    "Contact ✉️": msgContact,
    "About Sam 👋": msgAbout,
    // French
    bonjour: msgGreeting,
    salut: msgGreeting,
    coucou: msgGreeting,
    allo: msgGreeting,
    propos: msgAbout,
    biographie: msgAbout,
    "qui est": msgAbout,
    presentation: msgAbout,
    présentation: msgAbout,
    parcours: msgAbout,
    competence: msgSkills,
    compétence: msgSkills,
    outil: msgSkills,
    pile: msgSkills,
    langage: msgSkills,
    techno: msgSkills,
    projet: msgProjects,
    travail: msgProjects,
    realisation: msgProjects,
    réalisation: msgProjects,
    curriculum: msgResume,
    contacter: msgContact,
    embaucher: msgContact,
    joindre: msgContact,
    disponibilite: msgAvailability,
    disponibilité: msgAvailability,
    disponible: msgAvailability,
    libre: msgAvailability,
    tarif: msgPricing,
    cout: msgPricing,
    coût: msgPricing,
    combien: msgPricing,
    blague: msgFun,
    cafe: msgFun,
    café: msgFun,
    plaisir: msgFun,
    amusant: msgFun,
    rire: msgFun,
    meteo: msgWeather,
    météo: msgWeather,
    temps: msgWeather,
    ciel: msgWeather,
    // Kinyarwanda
    muraho: msgGreeting,
    bite: msgGreeting,
    amacuru: msgGreeting,
    mwaramutse: msgGreeting,
    mwiriwe: msgGreeting,
    ibyanjye: msgAbout,
    ibyerekeye: msgAbout,
    amakuru: msgAbout,
    ninde: msgAbout,
    ubuhanga: msgSkills,
    ubumenyi: msgSkills,
    "ibyo nzi": msgSkills,
    indimi: msgSkills,
    imishinga: msgProjects,
    "ibyo wakoze": msgProjects,
    "ibyo nakoze": msgProjects,
    uburambe: msgResume,
    amasomo: msgResume,
    kuvugana: msgContact,
    imeli: msgContact,
    twandikire: msgContact,
    vugisha: msgContact,
    igihe: msgAvailability,
    akazi: msgAvailability,
    guhura: msgAvailability,
    umwanya: msgAvailability,
    igiciro: msgPricing,
    amafaranga: msgPricing,
    wishyura: msgPricing,
    urwenya: msgFun,
    ikawa: msgFun,
    bisheke: msgFun,
    sekuro: msgFun,
    ikirere: msgWeather,
    izuba: msgWeather,
    imvura: msgWeather,
  };

  const keywordLangMap = {
    bonjour: "fr",
    salut: "fr",
    coucou: "fr",
    allo: "fr",
    propos: "fr",
    biographie: "fr",
    "qui est": "fr",
    presentation: "fr",
    présentation: "fr",
    parcours: "fr",
    competence: "fr",
    compétence: "fr",
    outil: "fr",
    pile: "fr",
    langage: "fr",
    techno: "fr",
    projet: "fr",
    travail: "fr",
    realisation: "fr",
    réalisation: "fr",
    curriculum: "fr",
    contacter: "fr",
    embaucher: "fr",
    joindre: "fr",
    disponibilite: "fr",
    disponibilité: "fr",
    disponible: "fr",
    libre: "fr",
    tarif: "fr",
    cout: "fr",
    coût: "fr",
    combien: "fr",
    blague: "fr",
    cafe: "fr",
    café: "fr",
    plaisir: "fr",
    amusant: "fr",
    rire: "fr",
    meteo: "fr",
    météo: "fr",
    temps: "fr",
    ciel: "fr",
    muraho: "kn",
    bite: "kn",
    amacuru: "kn",
    mwaramutse: "kn",
    mwiriwe: "kn",
    ibyanjye: "kn",
    ibyerekeye: "kn",
    amakuru: "kn",
    ninde: "kn",
    ubuhanga: "kn",
    ubumenyi: "kn",
    "ibyo nzi": "kn",
    indimi: "kn",
    imishinga: "kn",
    "ibyo wakoze": "kn",
    "ibyo nakoze": "kn",
    uburambe: "kn",
    amasomo: "kn",
    kuvugana: "kn",
    imeli: "kn",
    twandikire: "kn",
    vugisha: "kn",
    igihe: "kn",
    akazi: "kn",
    guhura: "kn",
    umwanya: "kn",
    igiciro: "kn",
    amafaranga: "kn",
    wishyura: "kn",
    urwenya: "kn",
    ikawa: "kn",
    bisheke: "kn",
    sekuro: "kn",
    ikirere: "kn",
    izuba: "kn",
    imvura: "kn",
  };

  function showQuickReplies(
    options = ["Skills 🛠️", "Projects 🚀", "Contact ✉️", "About Sam 👋"],
  ) {
    quickRepliesContainer.innerHTML = "";
    quickRepliesContainer.classList.remove("visible");

    setTimeout(() => {
      options.forEach((opt) => {
        const chip = document.createElement("div");
        chip.className = "reply-chip";
        chip.innerText = opt;
        chip.onclick = () => {
          agentInput.value = opt.split(" ")[0]; // Take first word
          runAgent();
        };
        quickRepliesContainer.appendChild(chip);
      });
      quickRepliesContainer.classList.add("visible");
    }, 300);
  }

  function typewriter(text, element, callback) {
    let i = 0;
    const speed = 25; // realistic speed
    element.innerHTML = '<span data-i18n-orig="> Agent:">&gt; Agent:</span> ';
    const textSpan = document.createElement("span");
    element.appendChild(textSpan);
    const cursor = document.createElement("span");
    cursor.className = "agent-cursor";
    element.appendChild(cursor);

    // Handle HTML tags by injecting them directly
    if (text.includes("<")) {
      textSpan.innerHTML = text; // Just fallback for HTML for now to keep it safe
      cursor.remove();
      if (callback) callback();
      return;
    }

    function type() {
      if (i < text.length) {
        textSpan.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        cursor.remove();
        if (callback) callback();
      }
    }
    type();
  }

  function runAgent() {
    const val = agentInput.value.trim();
    if (!val) return;

    // Hide quick replies while processing
    quickRepliesContainer.classList.remove("visible");

    // append user message
    const userMsgHTML = `<p style="color: var(--text-main); margin-bottom: 4px;"><span data-i18n-orig="> User:">&gt; User:</span> ${val}</p>`;
    agentOutput.insertAdjacentHTML("beforeend", userMsgHTML);
    agentInput.value = "";

    // process agent response
    let responseOrig =
      "I'm still learning! I didn't quite catch that. You can ask me about Sam's projects, skills, or how to contact him.";
    const valLower = val.toLowerCase();

    // 1. Check for Name Introduction
    const nameMatch = valLower.match(/(my name is|i'm|i am|call me) ([a-z]+)/i);
    if (nameMatch && nameMatch[2]) {
      userName = nameMatch[2].charAt(0).toUpperCase() + nameMatch[2].slice(1);
      sessionStorage.setItem("agent_user_name", userName);
      responseOrig = msgNameIdentify(userName);
    }
    // 2. Handle simple follow-ups (Yes/Sure/etc.)
    else {
      const affirmatives = [
        "yes",
        "sure",
        "ok",
        "yep",
        "yeah",
        "absolutely",
        "please",
        "do it",
      ];
      const isAffirmative = affirmatives.some((a) =>
        new RegExp(`\\b${a}\\b`, "i").test(valLower),
      );

      if (isAffirmative && lastIntent) {
        if (lastIntent === msgAbout) {
          responseOrig = msgSkills;
          lastIntent = msgSkills;
        } else if (lastIntent === msgPricing || lastIntent === msgAbout) {
          responseOrig = msgContact;
          lastIntent = msgContact;
        } else if (lastIntent === msgProjects) {
          responseOrig = msgContact;
          lastIntent = msgContact;
        } else {
          responseOrig = userName
            ? `Glad I could help, ${userName}! What else?`
            : "Great! What else would you like to know?";
          lastIntent = null;
        }
      } else {
        // Priority map
        const priorities = {
          [msgAbout]: 2,
          [msgSkills]: 5,
          [msgProjects]: 5,
          [msgContact]: 5,
          [msgResume]: 5,
          [msgAvailability]: 5,
          [msgPricing]: 5,
          [msgFun]: 5,
          [msgWeather]: 5,
          [msgAdmin]: 10,
        };
        // Check if msgGreeting is an array and handle it
        if (Array.isArray(msgGreeting)) {
          msgGreeting.forEach((g) => (priorities[g] = 1));
        }

        let bestMatch = null;
        let highestPriority = -1;

        Object.keys(knowledgeBase).forEach((k) => {
          const regex = new RegExp(`\\b${k}(s|es|ies)?\\b`, "i");
          if (regex.test(valLower)) {
            let response = knowledgeBase[k];
            if (Array.isArray(response)) {
              response = response[Math.floor(Math.random() * response.length)];
            }
            const priority = priorities[response] || 0;

            if (
              priority > highestPriority ||
              (priority === highestPriority &&
                k.length > (bestMatch ? bestMatch.length : 0))
            ) {
              highestPriority = priority;
              bestMatch = k;
              responseOrig = response;
              lastIntent = response;

              // Detect language and switch if matched a specific language keyword
              if (keywordLangMap[k]) {
                const detectedLang = keywordLangMap[k];
                if (detectedLang !== currentLang) {
                  setLang(detectedLang);
                }
              } else if (currentLang !== "en") {
                // If matched an English keyword while in another language, switch back to English
                const commonEn = [
                  "hello",
                  "hi",
                  "about",
                  "skill",
                  "project",
                  "contact",
                  "resume",
                  "status",
                  "who are you",
                ];
                if (commonEn.includes(k)) {
                  setLang("en");
                }
              }
            }
          }
        });
      }
    }

    // simulate processing delay
    setTimeout(() => {
      const agentLine = document.createElement("p");
      agentLine.style.color = "var(--primary)";
      agentLine.style.marginBottom = "8px";
      agentLine.className = "agent-msg-line";
      agentOutput.appendChild(agentLine);

      typewriter(responseOrig, agentLine, () => {
        showQuickReplies();
        agentOutput.scrollTop = agentOutput.scrollHeight;
        if (typeof setLang === "function") setLang(currentLang);
      });

      agentOutput.scrollTop = agentOutput.scrollHeight;
    }, 500);

    agentOutput.scrollTop = agentOutput.scrollHeight;
  }

  // Initialize with quick replies
  setTimeout(() => {
    showQuickReplies();
  }, 1000);

  agentBtn.addEventListener("click", runAgent);
  agentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runAgent();
  });
}
