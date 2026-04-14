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

if(termInput) {
    termInput.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
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
    contactForm.addEventListener('submit', async function(e) {
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
                feedback.style.color = 'var(--secondary, #10B981)'; // keeping neon style
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
});
