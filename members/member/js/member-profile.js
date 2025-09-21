// members/member/js/member-profile.js - Member profile page functionality

document.addEventListener('DOMContentLoaded', () => {
    // Initialize lucide icons
    lucide.createIcons();

    // Initialize mobile menu
    initializeMobileMenu();
    
    // Load member profile
    loadMemberProfile();
});

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Hide mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }
}

// Get member ID from URL parameters
function getMemberIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load and display member profile
function loadMemberProfile() {
    const memberId = getMemberIdFromUrl();
    
    if (!memberId) {
        showErrorState('No member ID provided');
        return;
    }

    try {
        const member = getMemberById(memberId);
        
        if (!member) {
            showErrorState('Member not found');
            return;
        }

        // Populate member information
        populateMemberData(member, memberId);
        
        // Set team colors
        setTeamColors(member.team);
        
        // Show profile content
        showProfileContent();
        
    } catch (error) {
        console.error('Error loading member profile:', error);
        showErrorState('Error loading member data');
    }
}

// Populate all member data
function populateMemberData(member, memberId) {
    // Basic info
    document.getElementById('page-title').textContent = `${member.name} | GDG Wah Campus`;
    document.getElementById('member-name').textContent = member.name;
    document.getElementById('member-role').textContent = member.role;
    document.getElementById('member-team').textContent = `${member.team} Team`;
    
    // Profile image with fallback
    const profileImage = document.getElementById('member-image');
    const teamConfig = getTeamConfig(member.team);
    const fallbackColor = teamConfig?.color?.replace('#', '') || '4285F4';
    const initials = member.name.split(' ').map(n => n[0]).join('');
    const fallbackUrl = `https://placehold.co/192x192/${fallbackColor}/FFFFFF?text=${initials}`;
    
    profileImage.src = member.imageUrl;
    profileImage.alt = member.name;
    profileImage.onerror = () => {
        profileImage.src = fallbackUrl;
    };

    // Quick info
    document.getElementById('member-joined').textContent = formatDate(member.joiningDate);
    document.getElementById('member-location').textContent = member.location || 'Not specified';
    document.getElementById('member-qualification').textContent = member.qualification || 'Not specified';
    document.getElementById('member-department').textContent = member.department || 'Not specified';

    // Contact
    const contactEmail = document.getElementById('contact-email');
    if (member.email) {
        contactEmail.href = `mailto:${member.email}`;
    }

    // Bio
    document.getElementById('member-bio').innerHTML = member.bio;

    // Skills
    populateSkills(member.skills || []);

    // Member details
    document.getElementById('member-id').textContent = memberId;
    document.getElementById('member-type').textContent = member.membershipType || 'Member';
    document.getElementById('member-university').textContent = member.university || 'University of Wah';
    document.getElementById('member-phone').textContent = member.phone || 'Not provided';

    // Interests
    populateInterests(member.interests || []);

    // Social links
    populateSocialLinks(member.socials || []);

    // Achievements
    populateAchievements(member.achievements || []);

    // Role description and focus areas
    populateRoleInformation(member);

    // Update status
    updateMemberStatus(member);
}

// Set team colors as CSS custom properties
function setTeamColors(teamName) {
    const teamConfig = getTeamConfig(teamName);
    if (teamConfig?.color) {
        const root = document.documentElement;
        const baseColor = teamConfig.color;
        
        // Generate color variations
        const darkColor = adjustColor(baseColor, -20);
        const lightColor = adjustColor(baseColor, 20);
        
        root.style.setProperty('--team-color', baseColor);
        root.style.setProperty('--team-color-dark', darkColor);
        root.style.setProperty('--team-color-light', lightColor);
    }
}

// Adjust color brightness
function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

// Populate skills section
function populateSkills(skills) {
    const skillsContainer = document.getElementById('member-skills');
    skillsContainer.innerHTML = '';
    
    if (skills.length === 0) {
        skillsContainer.innerHTML = '<p class="text-gray-500">No skills specified</p>';
        return;
    }
    
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

// Populate interests section
function populateInterests(interests) {
    const interestsContainer = document.getElementById('member-interests');
    interestsContainer.innerHTML = '';
    
    if (interests.length === 0) {
        interestsContainer.innerHTML = '<p class="text-gray-500">No interests specified</p>';
        return;
    }
    
    interests.forEach(interest => {
        const interestItem = document.createElement('div');
        interestItem.className = 'interest-item';
        interestItem.textContent = interest;
        interestsContainer.appendChild(interestItem);
    });
}

// Populate social links
function populateSocialLinks(socials) {
    const socialContainer = document.getElementById('social-links');
    socialContainer.innerHTML = '';
    
    const socialIconMap = {
        linkedin: 'linkedin',
        github: 'github',
        twitter: 'twitter',
        instagram: 'instagram',
        dribbble: 'dribbble',
        behance: 'dribbble',
        youtube: 'youtube',
        facebook: 'facebook'
    };
    
    socials.forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = social.url;
        socialLink.target = '_blank';
        socialLink.rel = 'noopener noreferrer';
        socialLink.className = 'social-icon';
        socialLink.title = `${social.type.charAt(0).toUpperCase() + social.type.slice(1)} Profile`;
        
        const iconName = socialIconMap[social.type] || 'link';
        socialLink.innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5"></i>`;
        
        socialContainer.appendChild(socialLink);
    });
    
    if (socials.length === 0) {
        socialContainer.innerHTML = '<p class="text-gray-500 text-sm">No social links available</p>';
    }
}

// Populate achievements section
function populateAchievements(achievements) {
    const achievementsContainer = document.getElementById('member-achievements');
    achievementsContainer.innerHTML = '';
    
    if (achievements.length === 0) {
        achievementsContainer.innerHTML = '<p class="text-gray-500">No achievements recorded yet</p>';
        return;
    }
    
    achievements.forEach((achievement, index) => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item';
        
        achievementItem.innerHTML = `
            <div class="achievement-icon">
                <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <div class="achievement-content">
                <h4>Achievement ${index + 1}</h4>
                <p>${achievement}</p>
            </div>
        `;
        
        achievementsContainer.appendChild(achievementItem);
    });
}

// Populate role information
function populateRoleInformation(member) {
    const roleDescriptions = {
        'Faculty Head': 'Provides academic leadership and strategic vision for the GDG community, ensuring alignment with university goals.',
        'Campus Lead': 'Coordinates day-to-day operations and serves as the primary liaison between students and faculty.',
        'Chair Person': 'Oversees organizational structure and ensures effective governance of community activities.',
        'Technical Lead': 'Guides technical direction and standards for all technology-related initiatives.',
        'Community Manager': 'Manages member engagement and creates inclusive experiences for all community participants.',
        'AI Lead': 'Leads artificial intelligence and machine learning initiatives and educational programs.',
        'Data Science Core': 'Supports data science education and provides analytical expertise for community projects.',
        'ML Engineer': 'Implements and maintains machine learning solutions and infrastructure.',
        'Research Associate': 'Conducts research and contributes to academic publications and presentations.',
        'Data Analyst': 'Analyzes data to provide insights and support decision-making processes.',
        'Web Lead': 'Oversees web development projects and maintains community web presence.',
        'App Lead': 'Manages mobile application development and related educational programs.',
        'Frontend Developer': 'Creates user interfaces and ensures excellent user experience across platforms.',
        'Backend Developer': 'Develops server-side applications and maintains system infrastructure.',
        'Full-Stack Developer': 'Works across the entire technology stack from frontend to backend systems.',
        'Marketing Lead': 'Develops marketing strategies and manages brand communication efforts.',
        'Content Creator': 'Produces educational and promotional content across various media formats.',
        'Social Media Manager': 'Manages social media presence and online community engagement.',
        'PR Coordinator': 'Handles public relations and external communication efforts.',
        'Brand Strategist': 'Develops and maintains consistent brand messaging and visual identity.',
        'Graphics Lead': 'Creates visual designs and manages overall aesthetic direction of community materials.',
        'Video Editor': 'Produces and edits video content for educational and promotional purposes.',
        'Photographer': 'Documents events and creates visual content for community archives.',
        'UI/UX Designer': 'Designs user interfaces and optimizes user experience for digital platforms.',
        'Creative Director': 'Oversees creative vision and ensures quality across all visual communications.',
        'Event Lead': 'Plans and executes community events and manages logistics coordination.',
        'Logistics Coordinator': 'Manages operational aspects of events and resource allocation.',
        'Venue Coordinator': 'Handles venue selection, setup, and space optimization for events.',
        'Decoration Specialist': 'Creates attractive event environments and manages aesthetic elements.',
        'Technical Support': 'Provides technical assistance during events and maintains equipment.'
    };

    const focusAreas = {
        'Executives': 'Strategic planning, community leadership, and organizational development.',
        'AI & DS': 'Artificial intelligence, machine learning, data analysis, and research methodologies.',
        'Web & App': 'Web development, mobile applications, user experience, and software engineering.',
        'Social Media & Marketing': 'Digital marketing, brand management, content creation, and audience engagement.',
        'Media & Graphics': 'Visual design, multimedia production, user interface design, and creative direction.',
        'Event & Decor': 'Event planning, logistics management, venue coordination, and participant experience.'
    };

    document.getElementById('role-description').textContent = 
        roleDescriptions[member.role] || 'Contributes to community growth and development through dedicated service.';
    
    document.getElementById('focus-areas').textContent = 
        focusAreas[member.team] || 'General community support and collaboration.';
}

// Update member status display
function updateMemberStatus(member) {
    const statusBadge = document.getElementById('member-status');
    const statusIndicator = statusBadge.querySelector('.w-2');
    const statusText = statusBadge.querySelector('span');
    
    const status = member.membershipStatus || 'Active';
    statusText.textContent = `${status} Member`;
    
    // Update status colors based on membership status
    if (status === 'Active') {
        statusBadge.className = 'status-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800';
        statusIndicator.style.backgroundColor = '#10b981';
    } else if (status === 'Inactive') {
        statusBadge.className = 'status-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800';
        statusIndicator.style.backgroundColor = '#6b7280';
    } else {
        statusBadge.className = 'status-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800';
        statusIndicator.style.backgroundColor = '#3b82f6';
    }
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'Not specified';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

// Show profile content
function showProfileContent() {
    document.getElementById('loading-section').classList.add('hidden');
    document.getElementById('error-section').classList.add('hidden');
    document.getElementById('profile-content').classList.remove('hidden');
    
    // Re-initialize lucide icons for dynamically created content
    lucide.createIcons();
    
    // Add fade-in animation
    document.getElementById('profile-content').classList.add('fade-in');
}

// Show error state
function showErrorState(message = 'Member not found') {
    document.getElementById('loading-section').classList.add('hidden');
    document.getElementById('profile-content').classList.add('hidden');
    document.getElementById('error-section').classList.remove('hidden');
    
    // Update error message if needed
    const errorMessage = document.querySelector('#error-section p');
    if (errorMessage && message !== 'Member not found') {
        errorMessage.textContent = message;
    }
}

// Utility functions with fallbacks
function getMemberById(id) {
    if (typeof membersData === 'undefined') {
        throw new Error('Members data not loaded');
    }
    return membersData[id] || null;
}

function getTeamConfig(teamName) {
    if (typeof teamConfig === 'undefined') {
        return { color: '#4285F4', icon: 'users', description: 'Team members' };
    }
    return teamConfig[teamName] || null;
}

// Export functions for debugging
if (typeof window !== 'undefined') {
    window.GDGMemberProfile = {
        loadMemberProfile,
        getMemberIdFromUrl,
        populateMemberData,
        setTeamColors,
        showErrorState
    };
}

// Error handling for missing dependencies
window.addEventListener('error', (e) => {
    if (e.message.includes('membersData') || e.message.includes('teamConfig')) {
        console.warn('Member data dependencies not loaded properly');
        showErrorState('Data loading error. Please refresh the page.');
    }
});