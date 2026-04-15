// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme');
const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
const htmlEl = document.documentElement;

function initializeTheme() {
    if (savedTheme === 'light') {
        htmlEl.classList.add('light');
        htmlEl.classList.remove('dark');
        themeToggleBtns.forEach(btn => updateIcons(btn, true));
    }
}

function updateIcons(btn, isLight) {
    const sunIcon = btn.querySelector('#sun-icon');
    const moonIcon = btn.querySelector('#moon-icon');
    if (sunIcon && moonIcon) {
        sunIcon.style.display = isLight ? 'block' : 'none';
        moonIcon.style.display = isLight ? 'none' : 'block';
    }
}

initializeTheme();

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        htmlEl.classList.toggle('light');
        htmlEl.classList.toggle('dark');

        const isLight = htmlEl.classList.contains('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        themeToggleBtns.forEach(b => updateIcons(b, isLight));
    });
});

// Language Toggle Logic
const dict = {
    "About": { fr: "À propos", kn: "Ibyanjye" },
    "Sandbox": { fr: "Démo", kn: "Igerageza" },
    "Projects": { fr: "Projets", kn: "Imishinga" },
    "Agent": { fr: "Agent", kn: "Agent" },
    "Contact": { fr: "Contact", kn: "Kuvugana" },
    "System Online . Ready for tasks": { fr: "Système en Ligne . Prêt pour les tâches", kn: "Sisitemu Iriho . Yiteguye" },
    "Full Stack Engineer": { fr: "Ingénieur Full Stack", kn: "Injiniyeri Full Stack" },
    "AI/ML Enthusiast": { fr: "Passionné d'IA/ML", kn: "Akarusho kuri AI/ML" },
    "· AI/ML Enthusiast": { fr: "· Passionné d'IA/ML", kn: "· Akarusho kuri AI/ML" },
    "Building scalable, secure backends and highly interactive frontends. Exploring the frontiers of artificial intelligence to design intuitive, robust solutions.": { fr: "Création de backends évolutifs et de frontends interactifs pour concevoir des solutions robustes.", kn: "Nubaka imbuga z' ikoranabuhanga zikomeye cyane kumurongo. Nkunda gukoresha application za AI kugirango mbone ibisubizo bigezweho." },
    "View Featured Projects": { fr: "Voir les Projets", kn: "Reba Imishinga" },
    "Email": { fr: "Email", kn: "Imeli" },
    "Live_Metrics": { fr: "Métriques_Direct", kn: "Sisitemu_Mpanze" },
    "CPU Usage": { fr: "Moteur CPU", kn: "Gukoresha CPU" },
    "RAM Allocation": { fr: "Allocation RAM", kn: "GUKORESHA RAM" },
    "Network Speed": { fr: "Vitesse Réseau", kn: "Umuvuduko Net" },
    "Uptime": { fr: "Disponibilité", kn: "Igihe Gikora" },
    "Tech Stack": { fr: "Technologies", kn: "Ikoranabuhanga" },
    "Core programming languages and frameworks": { fr: "Principaux langages et frameworks", kn: "Indimi nkuru na frameworks" },
    "Frontend": { fr: "Frontend", kn: "Imbere" },
    "Backend & Frameworks": { fr: "Backend & Serveurs", kn: "Inyuma na Severi" },
    "Databases & DevOps": { fr: "Bases & Opérations", kn: "Ububiko & DevOps" },
    "Code Walkthroughs": { fr: "Démonstrations de Code", kn: "Uburyo Twubaka" },
    "Live architectural demonstrations and examples": { fr: "Architecture en direct et exemples", kn: "Ingero za Kode nizindi serivisi k'umurongo" },
    "Featured Deployments": { fr: "Déploiements Récents", kn: "Imishinga Nyirizina" },
    "Recent high-performance projects": { fr: "Projets haute performance", kn: "Porogaramu nkoranyambaga ndetse nikoranabuhanga rihanitse" },
    "View Live": { fr: "Voir le direct", kn: "Reba kumurongo" },
    "Centralized AI dashboard for real-time model monitoring and performance tracking.": { fr: "Tableau de bord IA centralisé pour le suivi des modèles en temps réel.", kn: "Itsinda ry'ikoranabuhanga rihuza inyigo za AI ako kanya." },
    "A sleek Microsoft Edge extension for focus management, featuring custom website blockers and a distraction-free UI.": { fr: "Une extension élégante pour la gestion de la concentration.", kn: "Porogaramu ifasha gukomeza kumvira imirimo idafite ibirangaza." },
    "Professional-grade financial dashboard featuring fluid animations, monthly state management, and real-time data visualization.": { fr: "Tableau de bord financier de niveau professionnel.", kn: "Urubuga rufasha abantu gucunga umutungo muburyo burambye." },
    "Secure fintech application for seamless peer-to-peer transfers and budget tracking.": { fr: "Application fintech sécurisée.", kn: "Porogaramu y'imari yizewe ihuza uburyo bw'imiyoboro yose." },
    "A high-conversion headless e-commerce store with brutalist modern aesthetics.": { fr: "Une boutique e-commerce moderne à forte conversion.", kn: "Idurika rikoranye ubuhanga kumurongo rikora neza cyane." },
    "Initiate Connection": { fr: "Connexion Sécurisée", kn: "Hitamo Uburyo" },
    "Ready to build something extraordinary? Drop a message in the secure channel or reach out via available networks.": { fr: "Prêt à créer quelque chose d'incroyable ? Contactez-moi dans le canal sécurisé.", kn: "Waba witeguye kubaka ibintu bikomeye? Nyandikira wumva unyisanzuyeho rwose." },
    "Secure Message": { fr: "Message direct", kn: "Ubutumwa bwite" },
    "Copyright © 2026 Sam Musoni": { fr: "Droits d'auteur © 2026 Sam Musoni", kn: "Uburenganzira © 2026 Sam Musoni" },
    "Awards": { fr: "Prix", kn: "Ibihembo" },
    "Photo Gallery": { fr: "Galerie", kn: "Amashusho" },
    "Visual assets and deployments featured across the interface": { fr: "Actifs visuels et déploiements présentés", kn: "Amashusho yose yanakoreshejwe murubuga" },
    "Interactive Terminal": { fr: "Terminal Interactif", kn: "Terminali" },
    "Execute commands to interact with the system": { fr: "Exécuter des commandes pour interagir avec le système", kn: "Koresha amategeko kugirango utange amabwiriza" },
    "Unique System Visits:": { fr: "Visites du système :", kn: "Abasuye urubuga :" },
    "Honors & Awards": { fr: "Distinctions et Prix", kn: "Ibihembo n'Amashimwe" },
    "Recognition for technical excellence and innovation": { fr: "Reconnaissance de l'excellence technique et de l'innovation", kn: "Kumenyekana kubera ubuhanga n'ikoranabuhanga" },
    "Top Innovator": { fr: "Meilleur Innovateur", kn: "Uwa Mbere mu Guhanga" },
    "Awarded 1st place at Rwanda National Tech Summit for an optimal predictive AI model.": { fr: "Premier prix au Sommet National du Rwanda pour un modèle prédictif.", kn: "Uwambere mu nama ihuza ibyikoranabuhanga mu Rwanda kubera AI." },
    "OS Contributor": { fr: "Contributeur OS", kn: "Umusanzu wa Open Source" },
    "Recognized for significant upstream contributions to high-performance Python libraries.": { fr: "Reconnu pour des contributions majeures aux bibliothèques Python hautes performances.", kn: "Yashimiwe kubera uruhare runini mubyakozwe kuri Python yihuta cyane." },
    "Best Cybersecurity Protocol": { fr: "Protocole de Sécurité", kn: "Umutekano mwiza w'Ikoranabuhanga" },
    "Developed the most resilient encryption logic algorithm during the 2025 Kigali Hackathon.": { fr: "Développement d'un algorithme de chiffrement extrêmement résilient.", kn: "Nakoze ikoranabuhanga rikomeye ricunga umutekano mu ihatana rya Kigali." },
    "Send me a message": { fr: "Envoyez un message", kn: "Ohereza Ubutumwa" },
    "Name": { fr: "Nom", kn: "Izina" },
    "Message": { fr: "Message", kn: "Ubutumwa" },
    "Send Message": { fr: "Envoyer", kn: "Ohereza" },
    "SYSTEM OFFLINE": { fr: "HORS LIGNE", kn: "NTIRI KUMURONGO" },
    "The requested deployment is currently undergoing scheduled backend architecture maintenance to patch vulnerabilities and upgrade cluster infrastructure. Please check back later.": { fr: "Le système subit actuellement une maintenance backend planifiée pour corriger des failles.", kn: "Inshingano uri gusaba zabaye zikuweho byagateganyo kugirango zivugururwe byisumbyeho. Mwongere mukanya." },
    "Return to Hub": { fr: "Retour", kn: "Subira Inyuma" },
    "# Initialize high-performance quantization": { fr: "# Initialisation de la quantification haute performance", kn: "# Gutangiza kwanitizasiyo yihuse" },
    "// Align memory to page boundaries for optimal L1 cache hits": { fr: "// Aligner la mémoire sur les limites de page pour le cache L1", kn: "// Gutsindagira ububiko kumpande za paji kubera L1 cache" },
    "Welcome to SMUSONI interactive shell.": { fr: "Bienvenue dans le shell interactif SMUSONI.", kn: "Murakaza neza muri shell ya SMUSONI." },
    "Type": { fr: "Tapez", kn: "Andika" },
    "'help'": { fr: "'help'", kn: "'help'" },
    "to see available commands.": { fr: "pour voir les commandes.", kn: "kugirango urebe commands." },
    "Available commands:": { fr: "Commandes disponibles :", kn: "Amategeko ahari:" },
    "- about: Read system bio": { fr: "- about: Lire la bio du système", kn: "- about: Soma ibyerekeranye nange" },
    "- stack: View core technologies": { fr: "- stack: Voir les technologies", kn: "- stack: Reba ikoranabuhanga nkoresha" },
    "- projects: List active deployments": { fr: "- projects: Liste des déploiements", kn: "- projects: Reba imishinga mfite" },
    "- contact: Initialize commlink": { fr: "- contact: Initier la communication", kn: "- contact: Ngezaho ubutumwa" },
    "- whoami: Access level check": { fr: "- whoami: Vérification du niveau", kn: "- whoami: Reba uwo uriwe" },
    "- status: Server health check": { fr: "- status: État du serveur", kn: "- status: Reba uko seriveri(server) imeze" },
    "- date: Print system time": { fr: "- date: Afficher l'heure", kn: "- date: Reba isaha n' itariki" },
    "- clear: Clear terminal output": { fr: "- clear: Effacer le terminal", kn: "- clear: Siba ibyanditswe" },
    "Full Stack Engineer & LLM Enthusiast based in Kigali, Rwanda. Specializing in high-performance computing.": { fr: "Ingénieur Full Stack et passionné de LLM basé à Kigali, Rwanda. Spécialisé en calcul haute performance.", kn: "Injiniyeri Full Stack n'umukunzi wa LLM uba i Kigali, Rwanda. Yibanda kubara byihuse." },
    "Type 'contact' to request deployment info.": { fr: "Tapez 'contact' pour obtenir les infos de déploiement.", kn: "Andika 'contact' wumve amakuru y'imishinga." },
    "Secure commlink ready. Reach out via email:": { fr: "Lien de communication sécurisé prêt. Contactez par e-mail :", kn: "Uburyo bwo kuvugana buriteguye. Koresha imeli:" },
    "Click Here": { fr: "Cliquez ici", kn: "Kanda Hano" },
    "guest_user@smusoni-net": { fr: "utilisateur_invite@smusoni-net", kn: "umushyitsi@smusoni-net" },
    "All clusters fully operational. No vulnerabilities detected. Uptime: 99.98%": { fr: "Tous les clusters sont opérationnels. Aucune vulnérabilité. Disponibilité: 99.98%", kn: "Itsinda ryose rirakora. Nta kibazo na kimwe. Igihe: 99.98%" },
    "bash: permission denied: root access required. This incident will be reported.": { fr: "bash: accès refusé: droits root requis. Cet incident sera signalé.", kn: "bash: byanzwe: hakenewe root. Iri kosa rigiye gutangazwa." },
    "Wake up, Neo...": { fr: "Réveille-toi, Neo...", kn: "Kanguka, Neo..." },
    "The Matrix has you...": { fr: "La Matrice t'a...", kn: "Matrix iragufite..." },
    "> System initialized. AlphaAgent standing by.": { fr: "> Système initialisé. AlphaAgent prêt.", kn: "> Sisitemu yatangiye. AlphaAgent iriteguye." },
    "> User:": { fr: "> Utilisateur :", kn: "> Umukoresha :" },
    "> Agent:": { fr: "> Agent :", kn: "> Agent :" },
    "Greetings, user. System is fully operational.": { fr: "Salutations, utilisateur. Le système est opérationnel.", kn: "Muraho. Sisitemu irakora neza." },
    "All subsystems nominal. Memory at 12% capacity.": { fr: "Sous-systèmes nominaux. Mémoire à 12%.", kn: "Bikomeje kugenda neza. Memory iri kuri 12%." },
    "I am a rudimentary AI. Try saying 'hello', 'status', or 'who are you'.": { fr: "Je suis une IA. Essayez de dire 'hello', 'status' ou 'who are you'.", kn: "Ndi AI. Gerageza kuvuga 'hello', 'status', cyangwa 'who are you'." },
    "I am an autonomous agent deployed on this portfolio.": { fr: "Je suis un agent autonome déployé sur ce portfolio.", kn: "Ndi Agent wigenga ushyizwe kurubu rubuga." },
    "Processing error: Command not recognized.": { fr: "Erreur : Commande non reconnue.", kn: "Ikosa: Itegeko ntirizwi." },
    "Unable to fetch external APIs. It's always cyberpunk weather here.": { fr: "Impossible de récupérer les API externes. C'est toujours une météo cyberpunk ici.", kn: "Sinabasha kubona ikirere cy'ahandi." },
    "Command executed: Aether AI Hub, Focus Assistant, Budget Planner, Finova Wallet, Vanguard.": { fr: "Commande exécutée : Aether AI Hub, Focus Assistant, Budget Planner, Finova Wallet, Vanguard.", kn: "Itegeko ryakozwe: Aether AI Hub, Focus Assistant, Budget Planner, Finova Wallet, Vanguard." },
    "Node.js, React, Vue, Python, C++ core, Docker, Postgres, Redis.": { fr: "Node.js, React, Vue, Python, C++ core, Docker, Postgres, Redis.", kn: "Node.js, React, Vue, Python, C++ core, Docker, Postgres, Redis." },
    "You can send emails directly, or click the 'Contact' navigations to shoot a message!": { fr: "Envoyez un e-mail directement ou cliquez sur 'Contact' !", kn: "Ohereza imeli ukanze ahanditse 'Contact' !" },
    "Access denied. This terminal is strictly monitored by The Alpha Core.": { fr: "Accès refusé. Ce terminal est surveillé par Alpha Core.", kn: "Byanzwe. Alpha Core irakurinda bikomeye." },
    "For professional inquiries, please navigate to the Contact section.": { fr: "Pour toute demande professionnelle, visitez la section de contact.", kn: "Kugirango uvugane nanjye kubijyanye n'akazi, jya kuri Contact." },
    "Sam Musoni is a highly skilled Full Stack Engineer and AI/ML enthusiast.": { fr: "Sam Musoni est un ingénieur Full Stack hautement qualifié et passionné par l'IA/ML.", kn: "Sam Musoni ni injiniyeri ubishyikiriye akaba yikundira cyane AI." },
    "Sam operates centrally from Kigali, Rwanda.": { fr: "Sam opère de façon centralisée depuis Kigali, Rwanda.", kn: "Sam akorera imirimo ye mu mujyi wa Kigali, mu Rwanda." },
    "Sam has extensive experience building scalable backends, highly interactive frontends, and AI integrations.": { fr: "Sam a une vaste expérience dans la création de backends évolutifs, de frontends interactifs et d'intégrations d'IA.", kn: "Sam afite ubuhanga buhambaye mwikoranabuhanga n'imishinga minini cyane cyane iya AI." },
    "Interact with my agent": { fr: "Interagissez avec mon agent", kn: "Vugana na agent yanjye" },
    "Chat directly with The Alpha Core Agent": { fr: "Discutez directement avec l'agent Alpha Core", kn: "Ganira na Alpha Core Agent" }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update active UI
    document.querySelectorAll('.lang-toggle .lang').forEach(el => {
        el.classList.toggle('active', el.innerText.toLowerCase() === lang);
    });

    // Translate DOM Nodes
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while (n = walk.nextNode()) {
        const parent = n.parentElement;
        if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.id === 'term-input') continue;

        // Exclude general code blocks, but allow explicit span comments
        if (parent.closest('.code-block') && !parent.classList.contains('comment')) continue;

        if (typeof n.origValue === 'undefined') {
            n.origValue = n.nodeValue.trim().replace(/\s+/g, ' ');
        }

        let originalText = n.origValue;
        if (originalText && dict[originalText]) {
            const localizedText = (lang === 'en') ? originalText : dict[originalText][lang];
            n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), localizedText);

            if (parent.hasAttribute('data-text')) {
                parent.setAttribute('data-text', localizedText);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Inject lang click actions safely mapping to the toggle pill
    document.querySelectorAll('.lang-toggle .lang').forEach(el => {
        el.addEventListener('click', (e) => setLang(e.target.innerText.toLowerCase()));
    });

    // Trigger localization safely on load without user input if pre-selected
    if (currentLang !== 'en') {
        setLang(currentLang);
    } else {
        document.querySelectorAll('.lang-toggle .lang').forEach(el => {
            el.classList.toggle('active', el.innerText.toLowerCase() === 'en');
        });
    }
});

// Metric live simulation
setInterval(() => {
    const cpu = document.getElementById('cpu-val');
    const ram = document.getElementById('ram-val');
    const net = document.getElementById('net-val');

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
const termInput = document.getElementById('term-input');
const termBody = document.getElementById('term-body');

if (termInput) {
    termInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            this.value = '';

            // Output command
            const html = `
                <p class="term-line"><span class="prompt">usr@smusoni:~$</span> ${command}</p>
            `;

            let response = '';

            if (command === 'help') {
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
            } else if (command === 'about') {
                response = `<p class="term-line">Full Stack Engineer & LLM Enthusiast based in Kigali, Rwanda. Specializing in high-performance computing.</p>`;
            } else if (command === 'stack') {
                response = `<p class="term-line text-secondary">React.js, Node.js, Python, FastAPI, C, PostgreSQL, Ray, Redis</p>`;
            } else if (command === 'projects') {
                response = `<p class="term-line text-primary">1. Aether AI Hub<br>2. Focus Assistant<br>3. Budget Planner<br>4. Finova Wallet App<br>5. Vanguard E-Comm<br>Type 'contact' to request deployment info.</p>`;
            } else if (command === 'contact') {
                response = `<p class="term-line">Secure commlink ready. Reach out via email: <a href="contact.html" style="color:var(--secondary)">Click Here</a></p>`;
            } else if (command === 'whoami') {
                response = `<p class="term-line">guest_user@smusoni-net</p>`;
            } else if (command === 'status') {
                response = `<p class="term-line text-primary">All clusters fully operational. No vulnerabilities detected. Uptime: 99.98%</p>`;
            } else if (command === 'date') {
                response = `<p class="term-line">${new Date().toUTCString()}</p>`;
            } else if (command === 'sudo' || command.startsWith('sudo ')) {
                response = `<p class="term-line text-red">bash: permission denied: root access required. This incident will be reported.</p>`;
            } else if (command === 'matrix') {
                response = `<p class="term-line text-secondary">Wake up, Neo...<br>The Matrix has you...</p>`;
            } else if (command === 'clear') {
                document.querySelectorAll('.term-line:not(:last-child)').forEach(el => el.remove());
                return;
            } else if (command !== '') {
                response = `<p class="term-line text-red">Command not found: ${command}. Type 'help' for options.</p>`;
            }

            // Insert before the input container
            const inputLine = document.querySelector('.term-input-line');
            inputLine.insertAdjacentHTML('beforebegin', html + response);

            // scroll to bottom
            termBody.scrollTop = termBody.scrollHeight;

            // Translate new output instantly
            setLang(currentLang);
        }
    });

    // Keep focus
    termBody.addEventListener('click', () => { termInput.focus(); });
}

// Sandbox Tabs
const tabs = document.querySelectorAll('.tab');
const codeBlocks = document.querySelectorAll('.code-block');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // remove active from all
        tabs.forEach(t => t.classList.remove('active'));
        codeBlocks.forEach(c => c.classList.remove('active'));

        // set current
        tab.classList.add('active');
        const targetId = `code-${tab.dataset.tab}`;
        document.getElementById(targetId).classList.add('active');
    });
});

// Copy Email Logic
function copyEmail(e) {
    e.preventDefault();
    navigator.clipboard.writeText('nshutisam61@gmail.com').then(() => {
        const btn = e.target;
        const originalText = btn.innerText;
        btn.innerText = 'Copied to Clipboard!';
        btn.style.borderColor = 'var(--secondary)';
        btn.style.color = 'var(--secondary)';

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
        }, 3000);
    });
}

// Contact Form Submission (Formspree AJAX)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const feedback = document.getElementById('form-feedback');
        feedback.innerText = 'Transmitting data...';
        feedback.style.color = 'var(--text-gray)';

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                feedback.innerText = 'Message sent successfully!';
                feedback.style.color = '#34d399'; // green color
                contactForm.reset();
            } else {
                feedback.innerText = 'Transmission failed. Try again.';
                feedback.style.color = 'var(--red, #ef4444)';
            }
        } catch (error) {
            feedback.innerText = 'Connection error. Please try again.';
            feedback.style.color = 'var(--red, #ef4444)';
        }

        // Clear message after 5 seconds
        setTimeout(() => {
            feedback.innerText = '';
        }, 5000);
    });
}

// Fluid Scroll Animations (Observer Pattern)
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.section-title, .expertise-card, .tech-card:not(.metrics-card), .project-card, .contact-card');
    revealElements.forEach((el, index) => {
        el.classList.add('reveal');

        // Add staggered delays for grid items automatically
        if (el.classList.contains('expertise-card') || el.classList.contains('project-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }

        observer.observe(el);
    });

    // Repeat Hand Click Animation on Scroll
    const handAnimContainer = document.querySelector('.hand-animation-container');
    const clickTarget = document.querySelector('.click-target');

    if (handAnimContainer && clickTarget) {
        const animObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Slight delay to allow layout to settle
                    setTimeout(() => {
                        handAnimContainer.classList.add('run-anim');
                        clickTarget.classList.add('run-anim');
                    }, 50);
                } else {
                    handAnimContainer.classList.remove('run-anim');
                    clickTarget.classList.remove('run-anim');
                }
            });
        }, { threshold: 0.5 });

        animObserver.observe(handAnimContainer.parentElement);
    }
});
// Visit Counter API Fetch
fetch('https://api.counterapi.dev/v1/sammusoni/portfolio123/up')
    .then(res => res.json())
    .then(data => {
        const counterEl = document.getElementById('visit-counter');
        if (counterEl) {
            counterEl.innerText = (data.count || 1).toLocaleString();
        }
    })
    .catch(() => {
        const counterEl = document.getElementById('visit-counter');
        if (counterEl) counterEl.innerText = "1,024"; // fallback
    });

// Agent Runner Logic
const agentInput = document.getElementById('agent-input-field');
const agentBtn = document.getElementById('agent-run-btn');
const agentOutput = document.getElementById('agent-output');

if (agentInput && agentBtn && agentOutput) {
    const knowledgeBase = {
        "hello": "Greetings, user. System is fully operational.",
        "status": "All subsystems nominal. Memory at 12% capacity.",
        "help": "I am a rudimentary AI. Try saying 'hello', 'status', or 'who are you'.",
        "who are you": "I am an autonomous agent deployed on this portfolio.",
        "weather": "Unable to fetch external APIs. It's always cyberpunk weather here.",
        "project": "Command executed: Aether AI Hub, Focus Assistant, Budget Planner, Finova Wallet, Vanguard.",
        "skill": "Node.js, React, Vue, Python, C++ core, Docker, Postgres, Redis.",
        "contact": "You can send emails directly, or click the 'Contact' navigations to shoot a message!",
        "sudo": "Access denied. This terminal is strictly monitored by The Alpha Core.",
        "admin": "Access denied. This terminal is strictly monitored by The Alpha Core.",
        "hire": "For professional inquiries, please navigate to the Contact section.",
        "sam": "Sam Musoni is a highly skilled Full Stack Engineer and AI/ML enthusiast.",
        "who is sam": "Sam Musoni is a highly skilled Full Stack Engineer and AI/ML enthusiast.",
        "location": "Sam operates centrally from Kigali, Rwanda.",
        "where": "Sam operates centrally from Kigali, Rwanda.",
        "experience": "Sam has extensive experience building scalable backends, highly interactive frontends, and AI integrations.",
        "resume": "Sam has extensive experience building scalable backends, highly interactive frontends, and AI integrations.",
        "education": "Sam has extensive experience building scalable backends, highly interactive frontends, and AI integrations.",
        "background": "Sam has extensive experience building scalable backends, highly interactive frontends, and AI integrations."
    };

    function runAgent() {
        const val = agentInput.value.trim();
        if (!val) return;
        
        // append user message
        const userMsgHTML = `<p style="color: var(--text-main); margin-bottom: 4px;"><span data-i18n-orig="> User:">&gt; User:</span> ${val}</p>`;
        agentOutput.insertAdjacentHTML('beforeend', userMsgHTML);
        agentInput.value = '';

        // process agent response
        let responseOrig = "Processing error: Command not recognized.";
        let match = Object.keys(knowledgeBase).find(k => val.toLowerCase().includes(k));
        if (match) {
            responseOrig = knowledgeBase[match];
        }

        // simulate delay
        setTimeout(() => {
            const agentMsgHTML = `<p style="color: var(--primary); margin-bottom: 8px;"><span data-i18n-orig="> Agent:">&gt; Agent:</span> <span data-i18n-orig="${responseOrig}">${responseOrig}</span></p>`;
            agentOutput.insertAdjacentHTML('beforeend', agentMsgHTML);
            agentOutput.scrollTop = agentOutput.scrollHeight;
            
            if (typeof setLang === 'function') setLang(currentLang);
        }, 500);
        
        agentOutput.scrollTop = agentOutput.scrollHeight;
    }

    agentBtn.addEventListener('click', runAgent);
    agentInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') runAgent();
    });
}
