// js/main.js - Main landing page functionality

document.addEventListener('DOMContentLoaded', () => {

    // Initialize lucide icons
    lucide.createIcons();

    // --- Mobile menu toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Hide mobile menu on link click
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }

    // --- Header scroll effect ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-4');
            } else {
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
        });
    }

    // --- Active navigation link highlighting ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Handle both hash links and regular navigation
                        const href = link.getAttribute('href');
                        if (href.includes('#' + entry.target.id)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // --- Scroll-to-reveal animations ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach((section) => {
        revealObserver.observe(section);
    });

    // --- Back to top button ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or doesn't have a target
            if (href === '#' || !href.includes('#')) return;
            
            const targetId = href.split('#')[1];
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // --- Featured members loading (if on main page) ---
    if (document.getElementById('featured-members')) {
        loadFeaturedMembers();
    }

    // --- Dynamic event loading (placeholder for future enhancement) ---
    loadUpcomingEvents();

    // --- Newsletter signup (placeholder for future enhancement) ---
    initializeNewsletterSignup();

    // --- Statistics counter animation ---
    initializeStatsCounters();

});

// Load featured members for main page
function loadFeaturedMembers() {
    const featuredContainer = document.getElementById('featured-members');
    if (!featuredContainer) return;

    // Clear existing content
    featuredContainer.innerHTML = '';

    try {
        const featured = getFeaturedMembers();
        
        Object.entries(featured).forEach(([role, member]) => {
            if (member) {
                const memberCard = createFeaturedMemberCard(member, role);
                featuredContainer.appendChild(memberCard);
            }
        });
    } catch (error) {
        console.error('Error loading featured members:', error);
        // Fallback content
        featuredContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-500">Featured members will be loaded here.</p>
            </div>
        `;
    }
}

// Create featured member card
function createFeaturedMemberCard(member, role) {
    const card = document.createElement('div');
    card.className = 'team-member text-center p-4 cursor-pointer transform transition-all hover:scale-105 bg-white rounded-lg shadow-md hover:shadow-xl';
    
    // Add click handler to navigate to member profile
    card.addEventListener('click', () => {
        const memberId = getKeyByValue(membersData, member);
        if (memberId) {
            window.location.href = `/members/member?id=${memberId}`;
        }
    });
    
    // Get team color for role styling
    const teamConfig = getTeamConfig(member.team);
    const roleColor = teamConfig ? teamConfig.color : '#4285F4';
    
    card.innerHTML = `
        <img src="${member.imageUrl}" 
             class="w-32 h-32 mx-auto rounded-full shadow-lg object-cover border-4 border-white transition-transform hover:scale-105" 
             alt="${member.name}" 
             onerror="this.src='https://placehold.co/128x128/${roleColor.replace('#', '')}/FFFFFF?text=${member.name.split(' ').map(n => n[0]).join('')}'">
        <h3 class="mt-4 text-lg font-bold text-gray-800">${member.name}</h3>
        <p class="text-base font-semibold mb-1" style="color: ${roleColor}">${role}</p>
        <p class="text-sm text-gray-500">${member.team} Team</p>
        <div class="mt-3 flex justify-center space-x-2">
            ${member.socials.slice(0, 3).map(social => `
                <a href="${social.url}" 
                   class="text-gray-400 hover:text-blue-600 transition-colors" 
                   onclick="event.stopPropagation()" 
                   target="_blank">
                    <i data-lucide="${social.type}" class="w-4 h-4"></i>
                </a>
            `).join('')}
        </div>
    `;
    
    return card;
}

// Utility function to get key by value
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// Load upcoming events (placeholder for future enhancement)
function loadUpcomingEvents() {
    // This function can be enhanced to load dynamic events from a data source
    console.log('Upcoming events loaded');
}

// Initialize newsletter signup (placeholder for future enhancement)
function initializeNewsletterSignup() {
    // Add newsletter signup functionality here
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle newsletter signup
            console.log('Newsletter signup submitted');
        });
    });
}

// Initialize statistics counters (placeholder for future enhancement)
function initializeStatsCounters() {
    const statCounters = document.querySelectorAll('.stat-counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    statCounters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate counter numbers
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Utility functions for featured members
function getMemberById(id) {
    return typeof membersData !== 'undefined' ? membersData[id] || null : null;
}

function getFeaturedMembers() {
    if (typeof featuredMembers === 'undefined' || typeof membersData === 'undefined') {
        return {};
    }
    
    const featured = {};
    Object.entries(featuredMembers).forEach(([role, id]) => {
        featured[role] = membersData[id];
    });
    return featured;
}

function getTeamConfig(teamName) {
    return typeof teamConfig !== 'undefined' ? teamConfig[teamName] || null : null;
}

// Error handling for missing dependencies
window.addEventListener('error', (e) => {
    if (e.message.includes('membersData') || e.message.includes('featuredMembers')) {
        console.warn('Members data not loaded. Some features may not work properly.');
    }
});

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
    window.GDGMain = {
        loadFeaturedMembers,
        createFeaturedMemberCard,
        getMemberById,
        getFeaturedMembers,
        getTeamConfig
    };
}