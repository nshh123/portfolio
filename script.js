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
    "Hi there! I'm the Alpha Core Agent. I'm here to help you navigate Sam's world. What would you like to know?": { fr: "Salut ! Je suis l'agent Alpha Core. Je suis là pour vous aider à naviguer dans l'univers de Sam. Que voulez-vous savoir ?", kn: "Muraho! Ndi Alpha Core Agent. Ndi hano kugirango mbagufashe kumenya ibya Sam. Murifuza kumenya iki?" },
    "Greetings, human. I am the Alpha Core. Systems operational. How can I assist you today?": { fr: "Salutations, humain. Je suis l'Alpha Core. Systèmes opérationnels. Comment puis-je vous aider aujourd'hui ?", kn: "Muraho, muntu. Ndi Alpha Core. Sisitemu irakora neza. Nabafasha nte uyu munsi?" },
    "Welcome! I'm Sam's digital companion. I can tell you about his skills, projects, or how to get in touch.": { fr: "Bienvenue ! Je suis le compagnon numérique de Sam. Je peux vous parler de ses compétences, de ses projets ou de la façon de le contacter.", kn: "Murakaza neza! Ndi umufasha wa Sam mu buryo bw'ikoranabuhanga. Nshobora kubabwira kubuhanga bwe, imishinga ye, cyangwa uko mwamuvugisha." },
    "Nice to meet you! I've updated my registers. Now, what can I tell you about Sam's work?": { fr: "Ravi de vous rencontrer ! J'ai mis à jour mes registres. Maintenant, que puis-je vous dire sur le travail de Sam ?", kn: "Nishimiye kubamenya! Namaze kubashyira muri sisitemu yanjye. None se, nababwira iki ku mirimo ya Sam?" },
    "I'm still learning! I didn't quite catch that. You can ask me about Sam's projects, skills, or how to contact him.": { fr: "J'apprends encore ! Je n'ai pas bien compris. Vous pouvez me poser des questions sur les projets de Sam, ses compétences ou comment le contacter.", kn: "Ndacyiyiga! Sinumvise neza icyo mushatse kuvuga. Mushobora kumbaza kubyerekeye imishinga ya Sam, ubuhanga bwe, cyangwa uko mwamuvugisha." },
    "Great! What else would you like to know?": { fr: "Génial ! Que voulez-vous savoir d'autre ?", kn: "Nibyiza cyane! Hari ikindi mwifuza kumenya?" },
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
    let lastIntent = null;
    let userName = sessionStorage.getItem('agent_user_name') || null;

    // Multi-turn responses
    const msgGreeting = [
        "Hi there! I'm the Alpha Core Agent. I'm here to help you navigate Sam's world. What would you like to know?",
        "Greetings, human. I am the Alpha Core. Systems operational. How can I assist you today?",
        "Welcome! I'm Sam's digital companion. I can tell you about his skills, projects, or how to get in touch."
    ];
    
    const msgAbout = "Sam Musoni is a Full Stack Engineer based in Kigali, Rwanda. He is passionate about Artificial Intelligence and Machine Learning. Would you like to hear about his skills or projects?";
    const msgSkills = "His primary toolkit includes Node.js, React, and Python. He is also highly proficient in C++, Postgres, and Docker. Are you looking for a specific skill?";
    const msgProjects = "You can view his full portfolio above, but some standout projects include Aether AI Hub and Focus Assistant. Shall I provide more details?";
    const msgResume = "Please navigate to the About or Awards sections to see his qualifications, or reach out via Email for a formal resume PDF.";
    const msgContact = "The best way to reach Sam is via email or by connecting on LinkedIn. He generally responds within 24 hours. You can also use the <a href='contact.html' style='color: var(--primary); text-decoration: underline;'>contact form here</a>.";
    const msgAvailability = "Currently, Sam is open to exciting full-time roles and freelance projects. Feel free to contact him to discuss opportunities!";
    const msgPricing = "Project rates depend entirely on scope and requirements. Sam would love to hear about your project to give you an accurate estimate. Should I provide his email?";
    const msgFun = "When not coding, Sam is usually brewing an unnecessarily complicated cup of coffee or diving deep into cyberpunk lore. And the meaning of life? 42, obviously.";
    const msgWeather = "Unable to fetch external APIs. It's always cyberpunk weather here.";
    const msgAdmin = "Access denied. This terminal is strictly monitored by The Alpha Core.";
    const msgNameIdentify = (name) => `Nice to meet you! I've updated my registers. Now, what can I tell you about Sam's work?`;

    const knowledgeBase = {
        "hello": msgGreeting, "hi": msgGreeting, "hey": msgGreeting, "greeting": msgGreeting, "morning": msgGreeting, "who are you": msgGreeting, "bot": msgGreeting, "help": msgGreeting, "status": msgGreeting,
        "about": msgAbout, "who is": msgAbout, "background": msgAbout, "bio": msgAbout, "story": msgAbout, "where from": msgAbout, "sam": msgAbout, "where": msgAbout, "location": msgAbout,
        "skill": msgSkills, "technolog": msgSkills, "stack": msgSkills, "tool": msgSkills, "software": msgSkills, "language": msgSkills, "good at": msgSkills, "framework": msgSkills,
        "project": msgProjects, "portfolio": msgProjects, "work": msgProjects, "example": msgProjects, "case study": msgProjects, "built": msgProjects, "show me": msgProjects,
        "resume": msgResume, "cv": msgResume, "download": msgResume, "pdf": msgResume, "document": msgResume, "paper": msgResume, "experience": msgResume, "education": msgResume,
        "contact": msgContact, "email": msgContact, "hire": msgContact, "freelance": msgContact, "message": msgContact, "reach out": msgContact, "talk": msgContact, "phone": msgContact, "get in touch": msgContact, "how can i": msgContact,
        "availab": msgAvailability, "job": msgAvailability, "looking": msgAvailability, "open": msgAvailability, "hiring": msgAvailability,
        "cost": msgPricing, "price": msgPricing, "rate": msgPricing, "hourly": msgPricing, "budget": msgPricing, "charge": msgPricing, "fee": msgPricing,
        "joke": msgFun, "fun": msgFun, "hobbi": msgFun, "music": msgFun, "coffee": msgFun, "pizza": msgFun, "meaning of life": msgFun,
        "weather": msgWeather,
        "sudo": msgAdmin, "admin": msgAdmin
    };

    function typewriter(text, element, callback) {
        let i = 0;
        const speed = 25; // realistic speed
        element.innerHTML = '<span data-i18n-orig="> Agent:">&gt; Agent:</span> ';
        const textSpan = document.createElement('span');
        element.appendChild(textSpan);
        const cursor = document.createElement('span');
        cursor.className = 'agent-cursor';
        element.appendChild(cursor);

        // Handle HTML tags by injecting them directly
        if (text.includes('<')) {
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
        
        // append user message
        const userMsgHTML = `<p style="color: var(--text-main); margin-bottom: 4px;"><span data-i18n-orig="> User:">&gt; User:</span> ${val}</p>`;
        agentOutput.insertAdjacentHTML('beforeend', userMsgHTML);
        agentInput.value = '';

        // process agent response
        let responseOrig = "I'm still learning! I didn't quite catch that. You can ask me about Sam's projects, skills, or how to contact him.";
        const valLower = val.toLowerCase();

        // 1. Check for Name Introduction
        const nameMatch = valLower.match(/(my name is|i'm|i am|call me) ([a-z]+)/i);
        if (nameMatch && nameMatch[2]) {
            userName = nameMatch[2].charAt(0).toUpperCase() + nameMatch[2].slice(1);
            sessionStorage.setItem('agent_user_name', userName);
            responseOrig = msgNameIdentify(userName);
        }
        // 2. Handle simple follow-ups (Yes/Sure/etc.)
        else {
            const affirmatives = ["yes", "sure", "ok", "yep", "yeah", "absolutely", "please", "do it"];
            const isAffirmative = affirmatives.some(a => new RegExp(`\\b${a}\\b`, 'i').test(valLower));

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
                    responseOrig = userName ? `Glad I could help, ${userName}! What else?` : "Great! What else would you like to know?";
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
                    [msgAdmin]: 10
                };
                // Check if msgGreeting is an array and handle it
                if (Array.isArray(msgGreeting)) {
                    msgGreeting.forEach(g => priorities[g] = 1);
                }

                let bestMatch = null;
                let highestPriority = -1;

                Object.keys(knowledgeBase).forEach(k => {
                    const regex = new RegExp(`\\b${k}(s|es|ies)?\\b`, 'i');
                    if (regex.test(valLower)) {
                        let response = knowledgeBase[k];
                        if (Array.isArray(response)) {
                            response = response[Math.floor(Math.random() * response.length)];
                        }
                        const priority = priorities[response] || 0;
                        
                        if (priority > highestPriority || (priority === highestPriority && k.length > (bestMatch ? bestMatch.length : 0))) {
                            highestPriority = priority;
                            bestMatch = k;
                            responseOrig = response;
                            lastIntent = response;
                        }
                    }
                });
            }
        }

        // simulate processing delay
        setTimeout(() => {
            const agentLine = document.createElement('p');
            agentLine.style.color = 'var(--primary)';
            agentLine.style.marginBottom = '8px';
            agentLine.className = 'agent-msg-line';
            agentOutput.appendChild(agentLine);
            
            typewriter(responseOrig, agentLine, () => {
                agentOutput.scrollTop = agentOutput.scrollHeight;
                if (typeof setLang === 'function') setLang(currentLang);
            });
            
            agentOutput.scrollTop = agentOutput.scrollHeight;
        }, 500);
        
        agentOutput.scrollTop = agentOutput.scrollHeight;
    }

    agentBtn.addEventListener('click', runAgent);
    agentInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') runAgent();
    });
}
