// members/member/js/member.js - Member Profile Page Functionality

// Social icon mapping
const socialIconMap = {
    linkedin: 'linkedin',
    github: 'github',
    twitter: 'twitter',
    instagram: 'instagram',
    dribbble: 'dribbble',
    facebook: 'facebook'
};

// Role-based responsibilities and interests
const roleDetails = {
    'Faculty Head': {
        responsibilities: 'Providing academic oversight, guiding strategic initiatives, fostering partnerships with educational institutions, and ensuring alignment with university policies.',
        interests: 'Educational technology, curriculum development, academic research, and building bridges between academia and industry.'
    },
    'Campus Lead': {
        responsibilities: 'Leading community initiatives, organizing events, fostering partnerships, and maintaining the overall vision of GDG Wah Campus.',
        interests: 'Community building, project management, technology leadership, and creating inclusive environments for learning.'
    },
    'Chairperson': {
        responsibilities: 'Providing strategic direction, overseeing executive decisions, coordinating between teams, and representing the chapter in official matters.',
        interests: 'Strategic planning, leadership development, organizational management, and stakeholder relations.'
    },
    'Technical Lead': {
        responsibilities: 'Leading the technical direction of the chapter, mentoring members, organizing technical workshops, and overseeing technical projects.',
        interests: 'Software engineering, emerging technologies, technical mentorship, and hands-on development.'
    },
    'Operation Manager': {
        responsibilities: 'Managing day-to-day operations, coordinating logistics, ensuring smooth execution of events, and maintaining organizational efficiency.',
        interests: 'Operations management, process optimization, logistics coordination, and organizational efficiency.'
    },
    'General Secretary': {
        responsibilities: 'Handling administrative tasks, maintaining records, managing communications, and supporting organizational documentation.',
        interests: 'Administration, documentation, communication management, and organizational support.'
    },
    'Women in Tech': {
        responsibilities: 'Championing diversity and inclusion, empowering female members, organizing women-focused events, and promoting gender equality in tech.',
        interests: 'Diversity and inclusion, women empowerment, community outreach, and creating supportive environments.'
    },
    'Treasurer': {
        responsibilities: 'Managing chapter finances, budgeting for events, tracking expenses, and ensuring financial transparency and accountability.',
        interests: 'Financial management, budgeting, resource allocation, and financial planning.'
    },
    'AI & Data Science Lead': {
        responsibilities: 'Leading AI and data science initiatives, organizing study sessions, mentoring members in AI technologies, and coordinating research projects.',
        interests: 'Artificial intelligence, machine learning, data science, neural networks, and research methodologies.'
    },
    'AI & Data Science Co-Lead': {
        responsibilities: 'Supporting AI and data science initiatives, assisting with workshops, mentoring junior members, and contributing to research projects.',
        interests: 'Machine learning, data analysis, AI applications, and collaborative research.'
    },
    'Web & App Lead': {
        responsibilities: 'Leading web and mobile development projects, organizing development workshops, maintaining community web presence, and guiding technical projects.',
        interests: 'Full-stack development, mobile app development, modern frameworks, and user experience design.'
    },
    'Web & App Co-Lead': {
        responsibilities: 'Supporting web and app development initiatives, assisting with technical workshops, and contributing to development projects.',
        interests: 'Frontend/backend development, mobile technologies, web frameworks, and collaborative development.'
    },
    'AI Research Lead': {
        responsibilities: 'Leading AI research initiatives, coordinating research projects, organizing academic collaborations, and exploring new AI frontiers.',
        interests: 'AI research, academic publications, cutting-edge algorithms, and theoretical foundations of AI.'
    },
    'Social Media & Marketing Lead': {
        responsibilities: 'Managing the chapter\'s online presence, creating marketing strategies, content creation, and brand promotion across platforms.',
        interests: 'Digital marketing, social media strategy, content creation, brand development, and community engagement.'
    },
    'Social Media & Marketing Co-Lead': {
        responsibilities: 'Supporting marketing efforts, assisting with content creation, managing social media accounts, and helping grow community reach.',
        interests: 'Content marketing, social media management, digital outreach, and community growth strategies.'
    },
    'Media & Graphics Lead': {
        responsibilities: 'Creating visual content, designing event materials, maintaining brand consistency, conducting design workshops, and leading creative projects.',
        interests: 'Graphic design, visual identity, creative software, user interface design, and digital art.'
    },
    'Media & Graphics Co-Lead': {
        responsibilities: 'Supporting creative initiatives, assisting with design projects, contributing to visual content, and helping maintain brand standards.',
        interests: 'Design principles, creative tools, visual communication, and collaborative design projects.'
    },
    'Event & Decor Lead': {
        responsibilities: 'Planning and executing events, venue coordination, logistics management, decoration planning, and ensuring smooth event operations.',
        interests: 'Event planning, project coordination, logistics management, creative decoration, and hospitality.'
    },
    'Event & Decor Co-Lead': {
        responsibilities: 'Supporting event planning, assisting with logistics, coordinating decorations, and helping execute successful events.',
        interests: 'Event coordination, creative planning, team collaboration, and organizational support.'
    }
};

// Get member ID from URL parameters
function getMemberIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Safe element access helper
function safeSetContent(elementId, content, isHTML = false) {
    const element = document.getElementById(elementId);
    if (element) {
        if (isHTML) {
            element.innerHTML = content;
        } else {
            element.textContent = content;
        }
        return true;
    }
    console.warn(`Element with id '${elementId}' not found`);
    return false;
}

// Safe query selector helper
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && callback) {
        callback(element);
        return true;
    }
    if (!element) {
        console.warn(`Element with selector '${selector}' not found`);
    }
    return false;
}

// Load member profile with enhanced details
function loadMemberProfile() {
    const memberId = getMemberIdFromUrl();
    
    console.log('Loading member profile for ID:', memberId);
    
    // Check if getMemberById is available (from members.js)
    if (typeof getMemberById !== 'function') {
        console.error('getMemberById function not found. Make sure members.js is loaded first.');
        showError();
        return;
    }
    
    const member = getMemberById(memberId);
    
    if (!member) {
        console.error('Member not found for ID:', memberId);
        showError();
        return;
    }
    
    console.log('Member data loaded:', member);
    
    // Show profile content first (unhide it)
    const loadingSection = document.getElementById('loading-section');
    const profileContent = document.getElementById('profile-content');
    
    if (loadingSection) loadingSection.classList.add('hidden');
    if (profileContent) profileContent.classList.remove('hidden');
    
    // Now populate the data
    populateBasicInfo(member);
    populateDetailedInfo(member);
    populateRoleDetails(member);
    populateSocialLinks(member);
    
    // Update page title
    document.title = `${member.name} | GDG Wah Campus`;
    safeSetContent('page-title', `${member.name} | GDG Wah Campus`);
    
    // Add fade-in animation
    setTimeout(() => {
        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            profileCard.classList.add('fade-in');
        }
    }, 100);
    
    // Re-initialize lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Show error state
function showError() {
    const loadingSection = document.getElementById('loading-section');
    const errorSection = document.getElementById('error-section');
    
    if (loadingSection) loadingSection.classList.add('hidden');
    if (errorSection) errorSection.classList.remove('hidden');
}

// Populate basic member information
function populateBasicInfo(member) {
    // Profile image
    const memberImage = document.getElementById('member-image');
    if (memberImage) {
        memberImage.src = member.imageUrl;
        memberImage.alt = member.name;
    }
    
    // Basic info
    safeSetContent('member-name', member.name);
    safeSetContent('member-role', member.role);
    safeSetContent('member-team', `${member.team} Team`);
    safeSetContent('member-bio', member.bio || '<p>Bio coming soon...</p>', true);
    
    // Contact email link
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail && member.email) {
        contactEmail.href = `mailto:${member.email}`;
    }
}

// Populate detailed member information
function populateDetailedInfo(member) {
    // Location
    safeQuerySelector('#member-location span', (el) => {
        el.textContent = member.location || 'Wah Cantt, Pakistan';
    });
    
    // Department and University
    safeSetContent('member-department', member.department || 'Computer Science');
    safeSetContent('member-university', member.university || 'University of Wah');
    
    // Membership details
    safeSetContent('membership-type', member.membershipType || 'Member');
    
    // Joining date - use formatDate if available
    const joiningDateText = typeof formatDate === 'function' ? 
        formatDate(member.joiningDate || '2023-01-01') : 
        member.joiningDate || '2023-01-01';
    safeSetContent('joining-date', joiningDateText);
    
    safeSetContent('club-name', member.club || 'GDG Wah Campus');
    
    // Membership duration
    const duration = typeof getMembershipDuration === 'function' ? 
        getMembershipDuration(member.joiningDate || '2023-01-01') : 
        '1+ years';
    safeSetContent('membership-duration', duration);
    
    // Team role (last word of role)
    const roleWord = member.role.split(' ').pop();
    safeSetContent('team-role', roleWord);
    
    // Contact information
    if (member.email) {
        safeSetContent('contact-email-info', 
            `<i data-lucide="mail" class="w-4 h-4 mr-2"></i><span class="text-sm">${member.email}</span>`, 
            true
        );
    }
    
    if (member.phone) {
        safeSetContent('contact-phone-info', 
            `<i data-lucide="phone" class="w-4 h-4 mr-2"></i><span class="text-sm">${member.phone}</span>`, 
            true
        );
    }
    
    safeQuerySelector('#contact-location-info span', (el) => {
        el.textContent = member.location || 'Wah Cantt, Pakistan';
    });
    
    // Primary role
    safeSetContent('primary-role', member.role);
}

// Populate role-specific details
function populateRoleDetails(member) {
    const roleInfo = roleDetails[member.role];
    
    if (roleInfo) {
        safeSetContent('key-responsibilities', roleInfo.responsibilities);
    } else {
        safeSetContent('key-responsibilities', 
            `As ${member.role}, this member contributes significantly to the ${member.team} team's success and helps drive our community initiatives forward.`
        );
    }
    
    // Populate expertise tags
    const expertiseContainer = document.getElementById('member-expertise');
    if (expertiseContainer) {
        const expertise = member.expertise || ['Technology Enthusiast', 'Team Player', 'Problem Solver'];
        expertiseContainer.innerHTML = expertise.map(skill => 
            `<span class="expertise-tag">${skill}</span>`
        ).join('');
    }
    
    // Populate achievements
    const achievementsContainer = document.getElementById('member-achievements');
    if (achievementsContainer) {
        const achievements = member.achievements || ['Active community member', 'Participated in team projects', 'Contributing to GDG growth'];
        achievementsContainer.innerHTML = achievements.map(achievement => 
            `<div class="achievement-item">
                <i data-lucide="award" class="flex-shrink-0"></i>
                <span>${achievement}</span>
            </div>`
        ).join('');
    }
}

// Populate social links
function populateSocialLinks(member) {
    const socialLinksContainer = document.getElementById('social-links');
    if (!socialLinksContainer) return;
    
    socialLinksContainer.innerHTML = '';
    
    if (member.socials && member.socials.length > 0) {
        member.socials.forEach(social => {
            const socialLink = document.createElement('a');
            socialLink.href = social.url;
            socialLink.target = '_blank';
            socialLink.rel = 'noopener noreferrer';
            socialLink.className = 'social-icon';
            socialLink.setAttribute('aria-label', `${member.name} on ${social.type}`);
            
            const iconName = socialIconMap[social.type] || 'link';
            socialLink.innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5"></i>`;
            
            socialLinksContainer.appendChild(socialLink);
        });
    } else {
        socialLinksContainer.innerHTML = `
            <div class="text-white text-opacity-70 text-sm">
                <i data-lucide="globe" class="w-4 h-4 mr-2 inline"></i>
                Social links coming soon
            </div>
        `;
    }
}

// Add smooth scrolling and interactive elements
function initializeInteractiveElements() {
    // Add click handlers for contact information
    const contactItems = document.querySelectorAll('.contact-info-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('@')) {
                window.location.href = `mailto:${text}`;
            } else if (text.includes('+')) {
                window.location.href = `tel:${text}`;
            }
        });
    });
    
    // Add copy to clipboard functionality
    const copyableElements = document.querySelectorAll('[data-copy]');
    copyableElements.forEach(element => {
        element.addEventListener('click', async function() {
            const textToCopy = this.dataset.copy || this.textContent;
            try {
                await navigator.clipboard.writeText(textToCopy);
                showTooltip(this, 'Copied!');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
    
    // Add hover effects for achievement items
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Show tooltip
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute bg-gray-800 text-white px-2 py-1 rounded text-xs -top-8 left-1/2 transform -translate-x-1/2 z-10';
    tooltip.textContent = message;
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
    }, 2000);
}

// Add scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    const animateElements = document.querySelectorAll('.sidebar-card, .achievement-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize page functionality
function initializePage() {
    console.log('Initializing member profile page...');
    
    loadMemberProfile();
    initializeInteractiveElements();
    initializeScrollAnimations();
    
    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Wait for members.js to load and DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    // DOM is already loaded
    // Add a small delay to ensure members.js is fully loaded
    setTimeout(initializePage, 100);
}