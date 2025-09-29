// members/member/js/member.js - Member Profile Page Functionality

// Social icon mapping
const socialIconMap = {
    linkedin: 'linkedin',
    github: 'github',
    twitter: 'twitter',
    instagram: 'instagram',
    dribbble: 'dribbble',
    facebook: 'facebook',
    youtube: 'youtube',
    behance: 'square'
};

// Role-based responsibilities
const roleDetails = {
    'Faculty Head': 'Providing academic oversight, guiding strategic initiatives, fostering partnerships with educational institutions, and ensuring alignment with university policies.',
    'Campus Lead': 'Leading community initiatives, organizing events, fostering partnerships, and maintaining the overall vision of GDG Wah Campus.',
    'Chairperson': 'Providing strategic direction, overseeing executive decisions, coordinating between teams, and representing the chapter in official matters.',
    'Technical Lead': 'Leading the technical direction of the chapter, mentoring members, organizing technical workshops, and overseeing technical projects.',
    'Operation Manager': 'Managing day-to-day operations, coordinating logistics, ensuring smooth execution of events, and maintaining organizational efficiency.',
    'General Secretary': 'Handling administrative tasks, maintaining records, managing communications, and supporting organizational documentation.',
    'General Secretory': 'Handling administrative tasks, maintaining records, managing communications, and supporting organizational documentation.',
    'Women in Tech': 'Championing diversity and inclusion, empowering female members, organizing women-focused events, and promoting gender equality in tech.',
    'Treasurer': 'Managing chapter finances, budgeting for events, tracking expenses, and ensuring financial transparency and accountability.',
    'AI & Data Science Lead': 'Leading AI and data science initiatives, organizing study sessions, mentoring members in AI technologies, and coordinating research projects.',
    'AI & Data Science Co-Lead': 'Supporting AI and data science initiatives, assisting with workshops, mentoring junior members, and contributing to research projects.',
    'Al & Data Science Lead': 'Leading AI and data science initiatives, organizing study sessions, mentoring members in AI technologies, and coordinating research projects.',
    'Al & Data Science Co-Lead': 'Supporting AI and data science initiatives, assisting with workshops, mentoring junior members, and contributing to research projects.',
    'Web & App Lead': 'Leading web and mobile development projects, organizing development workshops, maintaining community web presence, and guiding technical projects.',
    'Web & App Co-Lead': 'Supporting web and app development initiatives, assisting with technical workshops, and contributing to development projects.',
    'AI Research Lead': 'Leading AI research initiatives, coordinating research projects, organizing academic collaborations, and exploring new AI frontiers.',
    'Social Media & Marketing Lead': 'Managing the chapter\'s online presence, creating marketing strategies, content creation, and brand promotion across platforms.',
    'Social Media & Marketing Co-Lead': 'Supporting marketing efforts, assisting with content creation, managing social media accounts, and helping grow community reach.',
    'Media & Graphics Lead': 'Creating visual content, designing event materials, maintaining brand consistency, conducting design workshops, and leading creative projects.',
    'Media & Graphics Co-Lead': 'Supporting creative initiatives, assisting with design projects, contributing to visual content, and helping maintain brand standards.',
    'Event & Decor Lead': 'Planning and executing events, venue coordination, logistics management, decoration planning, and ensuring smooth event operations.',
    'Event & Decor Co-Lead': 'Supporting event planning, assisting with logistics, coordinating decorations, and helping execute successful events.'
};

// Get member ID from URL parameters
function getMemberIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Safe element update
function safeUpdate(id, content, isHTML = false) {
    const el = document.getElementById(id);
    if (el) {
        if (isHTML) {
            el.innerHTML = content;
        } else {
            el.textContent = content;
        }
    }
}

// Load member profile
function loadMemberProfile() {
    const memberId = getMemberIdFromUrl();
    
    console.log('Loading member:', memberId);
    
    if (typeof getMemberById !== 'function') {
        console.error('getMemberById not found');
        showError();
        return;
    }
    
    const member = getMemberById(memberId);
    
    if (!member) {
        console.error('Member not found');
        showError();
        return;
    }
    
    console.log('Member loaded:', member);
    
    // Show content
    document.getElementById('loading-section')?.classList.add('hidden');
    document.getElementById('profile-content')?.classList.remove('hidden');
    
    // Populate all sections
    populateHeader(member);
    populateStats(member);
    populateAbout(member);
    populateExpertise(member);
    populateAchievements(member);
    populateResponsibilities(member);
    populateSidebar(member);
    
    // Update page title
    document.title = `${member.name} | GDG Wah Campus`;
    
    // Initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function showError() {
    document.getElementById('loading-section')?.classList.add('hidden');
    document.getElementById('error-section')?.classList.remove('hidden');
}

function populateHeader(member) {
    const img = document.getElementById('member-image');
    if (img) {
        img.src = member.imageUrl;
        img.alt = member.name;
    }
    
    safeUpdate('member-name', member.name);
    safeUpdate('member-role', member.role);
    safeUpdate('member-team', `${member.team} Team`);
    
    const locationEl = document.getElementById('member-location');
    if (locationEl) {
        locationEl.innerHTML = `
            <i data-lucide="map-pin" class="w-4 h-4"></i>
            <span class="font-medium">${member.location || 'Wah Cantt, Pakistan'}</span>
        `;
    }
}

function populateStats(member) {
    // Membership duration
    const duration = typeof getMembershipDuration === 'function' 
        ? getMembershipDuration(member.joiningDate || '2023-01-01')
        : '1+ yrs';
    safeUpdate('membership-duration', duration);
    
    // Team role
    const roleWord = member.role.split(' ').pop();
    safeUpdate('team-role', roleWord);
    
    // Expertise count
    const expertiseCount = member.expertise ? member.expertise.length : 0;
    safeUpdate('expertise-count', expertiseCount);
}

function populateAbout(member) {
    safeUpdate('member-bio', member.bio || '<p class="text-gray-500 italic">Bio coming soon...</p>', true);
}

function populateExpertise(member) {
    const container = document.getElementById('member-expertise');
    if (!container) return;
    
    const expertise = member.expertise || ['Technology Enthusiast', 'Team Player', 'Problem Solver'];
    
    container.innerHTML = expertise.map(skill => 
        `<span class="expertise-tag px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all">${skill}</span>`
    ).join('');
}

function populateAchievements(member) {
    const container = document.getElementById('member-achievements');
    if (!container) return;
    
    const achievements = member.achievements || [
        'Active community member',
        'Participated in team projects',
        'Contributing to GDG growth'
    ];
    
    container.innerHTML = achievements.map(achievement => 
        `<div class="achievement-item flex items-start space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-500 hover:shadow-md transition-all group">
            <i data-lucide="award" class="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-700 font-medium">${achievement}</span>
        </div>`
    ).join('');
}

function populateResponsibilities(member) {
    const responsibilities = roleDetails[member.role] || 
        `As ${member.role}, this member contributes significantly to the ${member.team} team's success and helps drive our community initiatives forward.`;
    
    safeUpdate('key-responsibilities', responsibilities);
}

function populateSidebar(member) {
    // Contact email
    const emailBtn = document.getElementById('contact-email');
    if (emailBtn && member.email) {
        emailBtn.href = `mailto:${member.email}`;
    }
    
    // Social links
    const socialContainer = document.getElementById('social-links');
    if (socialContainer) {
        if (member.socials && member.socials.length > 0) {
            socialContainer.innerHTML = member.socials.map(social => {
                const icon = socialIconMap[social.type] || 'link';
                return `<a href="${social.url}" target="_blank" rel="noopener noreferrer" 
                    class="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl transition-all hover:scale-110 shadow-md"
                    aria-label="${member.name} on ${social.type}">
                    <i data-lucide="${icon}" class="w-5 h-5"></i>
                </a>`;
            }).join('');
        } else {
            socialContainer.innerHTML = `
                <div class="text-white/70 text-sm flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl">
                    <i data-lucide="globe" class="w-4 h-4"></i>
                    <span>Social links coming soon</span>
                </div>
            `;
        }
    }
    
    // Details
    safeUpdate('member-department', member.department || 'Computer Science');
    safeUpdate('member-university', member.university || 'Comsats University Islamabad, Wah Campus');
    safeUpdate('membership-type', member.membershipType || 'Member');
    
    const joiningDate = typeof formatDate === 'function'
        ? formatDate(member.joiningDate || '2023-01-01')
        : member.joiningDate || '2023-01-01';
    safeUpdate('joining-date', joiningDate);
    
    safeUpdate('primary-role', member.role);
}

// Initialize
function initializePage() {
    console.log('Initializing member profile page...');
    loadMemberProfile();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    setTimeout(initializePage, 100);
}