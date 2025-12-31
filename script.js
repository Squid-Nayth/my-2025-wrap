const timelineData = [
    {
        date: "Janvier 2025",
        title: "Setup de Pro",
        description: "J’ai construit un setup de travail confortable et bien équipé pour commencer l'année sur de bonnes bases.",
        image: "#",
        type: "image"
    },
    {
        date: "Hiver 2025",
        title: "Une période sombre",
        description: "J’ai traversé 9 mois de dépression et de crises d’anxiété sévères, seul. Une épreuve difficile qui a forgé ma résilience.",
        image: "#",
        type: "image"
    },
    {
        date: "Février 2025",
        title: "Le deuil",
        description: "J’ai perdu quelqu’un que je ne voulais vraiment pas perdre. Un moment marquant de mon année.",
        image: "#",
        type: "image"
    },
    {
        date: "Mars 2025",
        title: "Premiers pas en thérapie",
        description: "J’ai fait ma première (et dernière) année de suivi chez un psychologue. Une étape importante pour ma santé mentale.",
        image: "#",
        type: "image"
    },
    {
        date: "Avril 2025",
        title: "L'entrepreneur",
        description: "J’ai ouvert ma micro-entreprise de développement web. Le début d'une aventure professionnelle indépendante.",
        image: "#",
        type: "image"
    },
    {
        date: "Mai 2025",
        title: "Collaboration Clients",
        description: "J’ai collaboré avec 3 clients différents en l’espace de 5 mois. Même si les contrats n'ont pas tous abouti, l'expérience fut enrichissante.",
        image: "#",
        type: "image"
    },
    {
        date: "Mai 2025",
        title: "Le 7ème Art",
        description: "J’ai découvert le cinéma pour la première fois de ma vie. Une révélation culturelle.",
        image: "#",
        type: "image"
    },
    {
        date: "Juin 2025",
        title: "Réussite Académique",
        description: "J’ai réussi ma première année d’études supérieures en informatique avec des moyennes supérieures à 12 à chaque semestre.",
        image: "#",
        type: "image"
    },
    {
        date: "Juin 2025",
        title: "Première visite au Musée",
        description: "J’ai visité un Musée pour la première fois de ma vie, ouvrant mon esprit à l'art et à l'histoire.",
        image: "#",
        type: "image"
    },
    {
        date: "Juillet 2025",
        title: "Stage CTO",
        description: "J’ai effectué mon premier stage aux côtés du CTO d’une ESN. Une immersion totale dans le monde professionnel technique.",
        image: "#",
        type: "image"
    },
    {
        date: "Août 2025",
        title: "Sensations Fortes",
        description: "J’ai découvert un parc d’attractions pour la première fois de ma vie.",
        image: "#",
        type: "image"
    },
    {
        date: "Septembre 2025",
        title: "Projets Web",
        description: "J’ai déployé 4 sites web en ligne. L'un d'eux a récolté 10 000 vues et 100 likes sur un forum de niche, un autre m'a généré mes premiers revenus (200€).",
        image: "#",
        type: "image"
    },
    {
        date: "Septembre 2025",
        title: "Paris à Vélo",
        description: "J’ai roulé à vélo électrique dans les rues de Paris après 7 ans sans pédaler. J'ai visité la Tour Eiffel, l'Arc de Triomphe, La Défense et la Tour Montparnasse.",
        image: "#",
        type: "image"
    },
    {
        date: "Octobre 2025",
        title: "Délégué de classe",
        description: "J’ai été élu délégué de ma classe pour la première fois de toute ma scolarité. Une nouvelle responsabilité sociale.",
        image: "#",
        type: "image"
    },
    {
        date: "Novembre 2025",
        title: "Objectif Physique",
        description: "J’ai atteint les 70 kilos. Un objectif physique accompli.",
        image: "#",
        type: "image"
    },
    {
        date: "Décembre 2025",
        title: "Bilan Social",
        description: "Pas de nouvelles bonnes rencontres cette année hormis sur le plan professionnel. Une année centrée sur moi-même et ma carrière.",
        image: "#",
        type: "image"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Initialize things
    renderTimeline();
    initCursor();
    initAnimations();
});

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    
    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('timeline-item');
        
        // Handle empty/placeholder images gracefully for display
        // Using a solid color placeholder if source is '#' to prevent ugly broken icon
        const imgSrc = item.image === '#' ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdHJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjRmNGY0IiAvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iIzccccccIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+' : item.image;

        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-visual">
                <div class="img-container" onclick="openModal(${index})">
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
}

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Stagger
    gsap.from(".hero > *", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Timeline line drawing
    // Not explicitly drawn but we could animate the height via CSS or GSAP
    
    // Timeline Items progressively appearing
    const items = document.querySelectorAll('.timeline-item');
    
    items.forEach(item => {
        // Fade in and slide up
        gsap.fromTo(item, 
            { 
                y: 100, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%", // Starts animation when top of item hits 85% viewport
                    end: "top 50%",
                    toggleActions: "play none none reverse", // Reverses on scroll up
                    // scrub: 1 // smooth scrubbing effect? "Apparaissent progressivement via ScrollTrigger" usually implies scrub or just trigger. Let's stick to simple trigger for cleanliness, or very subtle scrub.
                    // Let's use clean trigger play/reverse for a "premium" feel.
                }
            }
        );
        
        // Parallax effect on images?
        const img = item.querySelector('.timeline-img');
        if(img) {
            gsap.to(img, {
                y: -20, // subtle movement
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
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth follow
    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
        cursorX += (mouseX - cursorX) * dt;
        cursorY += (mouseY - cursorY) * dt;
        
        gsap.set(cursor, { x: cursorX, y: cursorY });
    });

    // Hover effects
    const clickables = document.querySelectorAll('a, button, .img-container');
    
    // We need to re-attach listeners because items are dynamic
    // Use delegation or observer if we were adding items later, but here we render first.
    // However renderTimeline happens before this if initCursor is called after.
    // But let's use a timeout or just select them now that they are in DOM.
    
    // Re-select after render
    setTimeout(() => {
        const interactive = document.querySelectorAll('a, button, .img-container');
        interactive.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    }, 100);
}

// Modal Logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDate = document.getElementById('modal-date');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

function openModal(index) {
    const data = timelineData[index];
    
    // Set content
    // Use same placeholder logic
    const imgSrc = data.image === '#' ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdHJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjRmNGY0IiAvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZmlsbD0iIzccccccIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+' : data.image;
    
    modalImg.src = imgSrc;
    modalDate.textContent = data.date;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description; // Detailed description same as short for now, but in real app could be different field

    // Show
    modal.classList.add('active');
    
    // Animation for content
    gsap.fromTo('.modal-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
}

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
