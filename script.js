const timelineData = [
    {
        date: "Janvier 2025",
        title: "Délégué de classe",
        description: "J’ai été élu délégué de ma classe pour la première fois de toute ma scolarité (Personne ne voulait le poste).",
        image: "#",
        type: "image"
    },
    {
        date: "Février 2025",
        title: "Séparation",
        description: "J’ai perdu quelqu’un que je ne voulais vraiment pas perdre. (Merci la vie, très bon timing)",
        image: "#",
        type: "image"
    },
    {
        date: "Mars 2025",
        title: "Début d'une période sombre",
        description: "J’ai traversé 9 mois de dépression et de crises d’anxiété sévères, seul. (J’ai survécu, donc techniquement : succès !).",
        image: "#",
        type: "image"
    },
    {
        date: "Avril 2025",
        title: "Thérapie",
        description: "J’ai fait ma première (et dernière) année de suivi chez un psychologue. (Je ne reverrai plus jamais la couleur des 200€ que j'ai laché pour ça).",
        image: "#",
        type: "image"
    },
    {
        date: "Mai 2025",
        title: "Le 7ème Art",
        description: "J’ai découvert le cinéma pour la première fois de ma vie.(Finalement c'est plutôt sympa de regarder des films avec des inconnues).",
        image: "#",
        type: "image"
    },
    {
        date: "Juin 2025",
        title: "Réussite Académique",
        description: "J’ai réussi ma première année d’études supérieures en informatique. (Merci Chat GPT).",
        image: "#",
        type: "image"
    },
    {
        date: "Juillet 2025",
        title: "Sensations Fortes",
        description: "J’ai découvert un parc d’attractions pour la première fois de ma vie : Disneyland Paris. (J'ai pleuré toutes les larmes de mon corpsà la sortie des montagnes russes).",
        image: "#",
        type: "image"
    },
    {
        date: "Août 2025",
        title: "Wow, L'entrepreneur !",
        description: "J’ai ouvert ma micro-entreprise de développement web : EVA STUDIO, j’ai pu collaborer avec 3 clients différents en l’espace de 5 mois après l’ouverture de cette dernière.",
        image: "#",
        type: "image"
    },
    {
        date: "Août 2025",
        title: "Setup de Pro",
        description: "J’ai construit un setup de travail confortable et bien équipé. (Attention on peut vite devenir accro à ça).",
        image: "#",
        type: "image"
    },

    {
        date: " Septembre 2025",
        title: "Première visite au Musée",
        description: "J’ai visité un Musée pour la première fois de ma vie (J'ai confondu un pingouin et un manchot une fois)",
        image: "#",
        type: "image"
    },
    {
        date: "Septembre 2025",
        title: "Paris à Vélo",
        description: "J’ai roulé à vélo électrique dans les rues de Paris après 7 ans sans pédaler. J'ai visité la Tour Eiffel, l'Arc de Triomphe, La Défense et la Tour Montparnasse en une journée.",
        image: "#",
        type: "image"
    },
    {
        date: "Octobre - Décembre 2025",
        title: "Stage",
        description: "J’ai effectué mon premier stage aux côtés du CTO d’une ESN. (Entre nous j'ai été pistonné par un pote de la boite)",
        image: "#",
        type: "image"
    }
];

const bilanData = {
    title: "Bilan",
    description: "Pas de nouvelles bonnes rencontres cette année hormis sur le plan professionnel, je me suis rendu compte que j'avais besoin de passer plus de temps avec moi-même qu'avec mes amis ou ma famille. J'ai passé beaucoup de temps cette année à développer et à approfondir mes connaissances sur le développement web créatif ainsi que sur L'UI/UX design. Gagner, perdre, continuer: c'est la vie."
};

document.addEventListener("DOMContentLoaded", () => {
    renderTimeline();
    initCursor();
    initAnimations();

    // Event Listeners
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }
});


const statsData = [
    { value: 4, label: "Sites Web Déployés" },
    { value: 10000, label: "Vues sur les réseaux apportés par mes sites" },
    { value: 100, label: "Likes sur les réseaux apportés par mes sites" },
    { value: 200, label: "Revenus générés par mes sites" },
    { value: 70, label: "Kilos (Objectif)" },
    { value: 25, label: "Livres Lus" }
];

function renderTimeline() {
    const container = document.getElementById('timeline-container');

    // 1. Render main timeline
    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('timeline-item');

        const imgSrc = item.image === '#' ? createPlaceholder(item.title) : item.image;

        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-visual">
                <div class="img-container">
                    <img src="${imgSrc}" alt="${item.title}" class="timeline-img">
                </div>
            </div>
            <div class="timeline-content">
                <span class="timeline-date">${item.date}</span>
                <h2 class="timeline-title">${item.title}</h2>
                <p class="timeline-desc">${item.description}</p>
            </div>
        `;

        container.appendChild(div);
    });

    // 1.5 Render Stats Section
    const statsDiv = document.createElement('div');
    statsDiv.classList.add('stats-section');
    statsData.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.classList.add('stat-item');
        statItem.innerHTML = `
            <span class="stat-number" data-target="${stat.value}">0</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsDiv.appendChild(statItem);
    });
    container.appendChild(statsDiv);

    // 2. Render Bilan Section
    const bilanDiv = document.createElement('div');
    bilanDiv.classList.add('timeline-item', 'bilan-section');
    bilanDiv.innerHTML = `
        <div class="timeline-dot special-dot"></div>
        <div class="timeline-content full-width">
            <span class="timeline-date">Fin 2025</span>
            <h2 class="timeline-title">${bilanData.title}</h2>
            <p class="timeline-desc large-desc">${bilanData.description}</p>
        </div>
    `;
    container.appendChild(bilanDiv);

    // 3. Render 2026 Section
    const futureDiv = document.createElement('div');
    futureDiv.classList.add('timeline-item', 'future-section');
    futureDiv.innerHTML = `
        <div class="timeline-dot special-dot future-dot"></div>
        <div class="timeline-content full-width centered">
            <h2 class="timeline-title big-year">2026 ?</h2>
            <p class="timeline-desc">Plus à venir... si je ne meurs pas</p>
        </div>
    `;
    container.appendChild(futureDiv);
}

function createPlaceholder(text) {
    // Generate a simple SVG placeholder
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdHJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjRmNGY0IiAvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iIzccccccIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+';
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Title: Left to Right, Unblur, Fade In
    gsap.from(".hero-title", {
        x: -100,
        opacity: 0,
        filter: "blur(20px)",
        duration: 2,
        ease: "power3.out"
    });

    // Other hero elements: Fade up
    gsap.from(".hero-subtitle, .scroll-indicator", {
        y: 20,
        opacity: 0,
        duration: 1.5,
        delay: 0.8, // Wait for title to establish
        stagger: 0.3,
        ease: "power3.out"
    });

    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        gsap.fromTo(item,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "top 50%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        const img = item.querySelector('.timeline-img');
        if (img) {
            gsap.to(img, {
                y: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    });

    // Stats Counter Animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        gsap.from(".stat-item", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: statsSection,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const obj = { val: 0 };

            gsap.to(obj, {
                val: target,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: statsSection,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: () => {
                    // Start fast, end slow is handled by ease. 
                    // Format number with spaces if large
                    counter.innerText = Math.floor(obj.val).toLocaleString('fr-FR');
                }
            });
        });
    }
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        // Instant follow without smoothing
        gsap.set(cursor, { x: e.clientX, y: e.clientY });
    });

    const clickables = document.querySelectorAll('a, button, .img-container, .timeline-item');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
}








