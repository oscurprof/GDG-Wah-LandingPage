// members/js/members.js - Members page functionality

document.addEventListener('DOMContentLoaded', () => {
    // Initialize lucide icons
    lucide.createIcons();

    // Initialize mobile menu
    initializeMobileMenu();
    
    // Load all team members
    loadTeamMembers();
    
    // Initialize search and filter functionality
    initializeSearchAndFilter();
    
    // Initialize category toggle functionality
    initializeCategoryToggles();
    
    // Update statistics
    updateTeamStatistics();
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

// Load and display all team members
function loadTeamMembers() {
    const teamsContainer = document.getElementById('teams-container');
    const loadingState = document.getElementById('loading-state');
    
    if (!teamsContainer) return;
    
    // Show loading state
    loadingState?.classList.remove('hidden');
    
    try {
        // Clear existing content
        teamsContainer.innerHTML = '';
        
        // Get all teams
        const teams = getAllTeams();
        
        teams.forEach(teamName => {
            const teamSection = createTeamSection(teamName);
            teamsContainer.appendChild(teamSection);
        });
        
        // Hide loading state
        loadingState?.classList.add('hidden');
        
        // Re-initialize lucide icons for dynamically created content
        lucide.createIcons();
        
    } catch (error) {
        console.error('Error loading team members:', error);
        
        // Show error state
        teamsContainer.innerHTML = `
            <div class="text-center py-12">
                <i data-lucide="alert-circle" class="w-16 h-16 text-red-400 mx-auto mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Error Loading Members</h3>
                <p class="text-gray-600 mb-4">There was a problem loading the team members.</p>
                <button onclick="loadTeamMembers()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Try Again
                </button>
            </div>
        `;
        
        loadingState?.classList.add('hidden');
    }
}

// Create team section with members
function createTeamSection(teamName) {
    const teamMembers = getMembersByTeam(teamName);
    const teamConfig = getTeamConfig(teamName);
    
    if (!teamMembers || teamMembers.length === 0) return null;
    
    const section = document.createElement('div');
    section.className = 'team-category-container mb-12 team-section';
    section.dataset.team = teamName;
    
    // Set CSS custom property for team color
    if (teamConfig?.color) {
        section.style.setProperty('--team-color', teamConfig.color);
    }
    
    section.innerHTML = `
        <div class="team-category-header category-expanded" data-team="${teamName}">
            <i data-lucide="chevron-right" class="category-icon" style="color: ${teamConfig?.color || '#4285F4'}"></i>
            <div class="team-header flex-1">
                <div class="team-icon">
                    <i data-lucide="${teamConfig?.icon || 'users'}" class="w-6 h-6"></i>
                </div>
                <div class="team-title">
                    <h2>${teamName}</h2>
                    <p class="team-description">${teamConfig?.description || 'Dedicated team members'}</p>
                </div>
                <div class="team-member-count">
                    ${teamMembers.length} member${teamMembers.length !== 1 ? 's' : ''}
                </div>
            </div>
        </div>
        <div class="team-category-content expanded">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                ${teamMembers.map(member => createMemberCard(member, teamName)).join('')}
            </div>
        </div>
    `;
    
    return section;
}

// Create individual member card
function createMemberCard(member, teamName) {
    const memberId = getKeyByValue(membersData, member);
    const teamConfig = getTeamConfig(teamName);
    const teamColor = teamConfig?.color || '#4285F4';
    
    // Create fallback image URL with team color
    const fallbackImage = `https://placehold.co/128x128/${teamColor.replace('#', '')}/FFFFFF?text=${member.name.split(' ').map(n => n[0]).join('')}`;
    
    return `
        <div class="member-card" 
             data-member-id="${memberId}" 
             data-team="${teamName}"
             data-name="${member.name.toLowerCase()}"
             data-role="${member.role.toLowerCase()}"
             style="--team-color: ${teamColor}">
            <img src="${member.imageUrl}" 
                 class="w-24 h-24 mx-auto rounded-full object-cover" 
                 alt="${member.name}"
                 onerror="this.src='${fallbackImage}'">
            <h3 class="member-name">${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <p class="member-email">${member.email || 'Not provided'}</p>
            <div class="member-socials">
                ${member.socials.slice(0, 4).map(social => `
                    <a href="${social.url}" 
                       class="social-link" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       onclick="event.stopPropagation()"
                       title="${social.type}">
                        <i data-lucide="${social.type}" class="w-4 h-4"></i>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

// Initialize search and filter functionality
function initializeSearchAndFilter() {
    const searchInput = document.getElementById('member-search');
    const filterButtons = document.querySelectorAll('.team-filter');
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(performSearch, 300));
    }
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const team = button.dataset.team;
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Apply filter
            applyTeamFilter(team);
        });
    });
}

// Perform search functionality
function performSearch() {
    const searchTerm = document.getElementById('member-search').value.toLowerCase().trim();
    const memberCards = document.querySelectorAll('.member-card');
    const teamSections = document.querySelectorAll('.team-section');
    const noResultsState = document.getElementById('no-results-state');
    
    let hasVisibleResults = false;
    
    // If no search term, show all cards
    if (!searchTerm) {
        memberCards.forEach(card => {
            card.style.display = '';
        });
        teamSections.forEach(section => {
            section.style.display = '';
        });
        noResultsState?.classList.add('hidden');
        return;
    }
    
    // Search through member cards
    memberCards.forEach(card => {
        const name = card.dataset.name || '';
        const role = card.dataset.role || '';
        
        const matches = name.includes(searchTerm) || role.includes(searchTerm);
        
        if (matches) {
            card.style.display = '';
            hasVisibleResults = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Hide/show team sections based on visible members
    teamSections.forEach(section => {
        const visibleCards = section.querySelectorAll('.member-card:not([style*="display: none"])');
        if (visibleCards.length > 0) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
    
    // Show/hide no results state
    if (hasVisibleResults) {
        noResultsState?.classList.add('hidden');
    } else {
        noResultsState?.classList.remove('hidden');
    }
}

// Apply team filter
function applyTeamFilter(selectedTeam) {
    const teamSections = document.querySelectorAll('.team-section');
    const noResultsState = document.getElementById('no-results-state');
    
    let hasVisibleResults = false;
    
    teamSections.forEach(section => {
        const teamName = section.dataset.team;
        
        if (selectedTeam === 'all' || teamName === selectedTeam) {
            section.style.display = '';
            section.classList.remove('filtered-out');
            hasVisibleResults = true;
        } else {
            section.style.display = 'none';
            section.classList.add('filtered-out');
        }
    });
    
    // Clear search when filtering
    const searchInput = document.getElementById('member-search');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Show/hide no results state
    if (hasVisibleResults) {
        noResultsState?.classList.add('hidden');
    } else {
        noResultsState?.classList.remove('hidden');
    }
}

// Initialize category toggle functionality
function initializeCategoryToggles() {
    document.querySelectorAll('.team-category-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isExpanded = header.classList.contains('category-expanded');
            
            if (isExpanded) {
                header.classList.remove('category-expanded');
                content.classList.remove('expanded');
            } else {
                header.classList.add('category-expanded');
                content.classList.add('expanded');
            }
        });
    });
    
    // Member card click handlers
    document.addEventListener('click', (e) => {
        const memberCard = e.target.closest('.member-card');
        if (memberCard) {
            const memberId = memberCard.dataset.memberId;
            if (memberId) {
                window.location.href = `/members/member?id=${memberId}`;
            }
        }
    });
}

// Update team statistics
function updateTeamStatistics() {
    try {
        const totalMembers = Object.keys(membersData).length;
        const totalTeams = getAllTeams().length;
        
        // Update stats in header
        const totalMembersEl = document.getElementById('total-members');
        const totalTeamsEl = document.getElementById('total-teams');
        
        if (totalMembersEl) {
            totalMembersEl.textContent = totalMembers;
        }
        
        if (totalTeamsEl) {
            totalTeamsEl.textContent = totalTeams;
        }
        
        // Animate counters
        animateCounters();
        
    } catch (error) {
        console.error('Error updating statistics:', error);
    }
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('#total-members, #total-teams, #total-projects, #total-events');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\+/g, '')) || 0;
                const hasPlus = counter.textContent.includes('+');
                
                animateValue(counter, 0, target, 1000, hasPlus);
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Animate single counter value
function animateValue(element, start, end, duration, hasPlus = false) {
    const startTimestamp = performance.now();
    
    function updateCounter(currentTimestamp) {
        const progress = Math.min((currentTimestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        element.textContent = current + (hasPlus ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Utility function to get key by value (member ID by member object)
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fallback functions if members-data.js is not loaded
function getMembersByTeam(teamName) {
    if (typeof membersData === 'undefined') {
        console.warn('Members data not loaded');
        return [];
    }
    return Object.values(membersData).filter(member => member.team === teamName);
}

function getAllTeams() {
    if (typeof teamConfig === 'undefined') {
        console.warn('Team config not loaded');
        return ['Executives', 'AI & DS', 'Web & App', 'Social Media & Marketing', 'Media & Graphics', 'Event & Decor'];
    }
    return Object.keys(teamConfig);
}

function getTeamConfig(teamName) {
    if (typeof teamConfig === 'undefined') {
        console.warn('Team config not loaded');
        return { color: '#4285F4', icon: 'users', description: 'Team members' };
    }
    return teamConfig[teamName] || null;
}

// Export functions for debugging/external use
if (typeof window !== 'undefined') {
    window.GDGMembers = {
        loadTeamMembers,
        performSearch,
        applyTeamFilter,
        updateTeamStatistics,
        getMembersByTeam,
        getAllTeams,
        getTeamConfig
    };
}

// Error handling for missing dependencies
window.addEventListener('error', (e) => {
    if (e.message.includes('membersData') || e.message.includes('teamConfig')) {
        console.warn('Members data dependencies not fully loaded. Some features may not work properly.');
        
        // Show error message to user
        const teamsContainer = document.getElementById('teams-container');
        if (teamsContainer && teamsContainer.innerHTML.trim() === '') {
            teamsContainer.innerHTML = `
                <div class="text-center py-12">
                    <i data-lucide="wifi-off" class="w-16 h-16 text-orange-400 mx-auto mb-4"></i>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Data Loading Issue</h3>
                    <p class="text-gray-600 mb-4">The member data is still loading. Please refresh the page.</p>
                    <button onclick="window.location.reload()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                        Refresh Page
                    </button>
                </div>
            `;
        }
    }
});