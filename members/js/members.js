// members/js/members.js - Members Page Specific Functionality

// Load all teams for the members page with enhanced styling
function loadAllTeamsForMembersPage() {
    const teamsContainer = document.getElementById('teams-container');
    if (!teamsContainer) return;

    const teams = getAllTeamsWithMembers();
    const teamOrder = ['Executives', 'AI & DS', 'Web & App', 'Social Media & Marketing', 'Media & Graphics', 'Event & Decor'];
    const teamConfig = {
        'Executives': { 
            color: 'blue', 
            icon: 'crown',
            description: 'Leading the vision and strategic direction of GDG Wah Campus'
        },
        'AI & DS': { 
            color: 'green', 
            icon: 'brain',
            description: 'Exploring artificial intelligence and data science frontiers'
        },
        'Web & App': { 
            color: 'red', 
            icon: 'code',
            description: 'Building innovative web applications and mobile solutions'
        },
        'Social Media & Marketing': { 
            color: 'yellow', 
            icon: 'megaphone',
            description: 'Amplifying our community presence and engagement'
        },
        'Media & Graphics': { 
            color: 'purple', 
            icon: 'palette',
            description: 'Creating stunning visual content and brand identity'
        },
        'Event & Decor': { 
            color: 'indigo', 
            icon: 'calendar',
            description: 'Organizing memorable events and experiences'
        }
    };

    // Clear existing content
    teamsContainer.innerHTML = '';

    // Update stats
    updateTeamStats();

    teamOrder.forEach((teamName, index) => {
        if (!teams[teamName] || teams[teamName].length === 0) return;

        const config = teamConfig[teamName];
        const teamContainer = document.createElement('div');
        teamContainer.className = `team-category-container mb-16 team-${teamName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
        
        teamContainer.innerHTML = `
            <div class="team-category-header category-expanded" data-team="${teamName}">
                <i data-lucide="chevron-right" class="category-icon text-${config.color}-500"></i>
                <div class="flex items-center gap-3">
                    <div class="bg-${config.color}-100 p-2 rounded-lg">
                        <i data-lucide="${config.icon}" class="w-6 h-6 text-${config.color}-600"></i>
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-800">${teamName}</h2>
                        <p class="text-sm text-gray-600 mt-1">${config.description}</p>
                    </div>
                </div>
                <div class="ml-auto flex items-center gap-3">
                    <span class="member-count-badge">
                        ${teams[teamName].length} member${teams[teamName].length > 1 ? 's' : ''}
                    </span>
                </div>
            </div>
            <div class="team-category-content expanded">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                    ${teams[teamName].map(member => createMemberCard(member, config)).join('')}
                </div>
            </div>
        `;
        
        teamsContainer.appendChild(teamContainer);
    });

    // Re-initialize lucide icons and event handlers
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Attach event handlers
    attachEnhancedTeamEventHandlers();
}

// Create enhanced member card
function createMemberCard(member, config) {
    const membershipDuration = getMembershipDuration(member.joiningDate || '2023-01-01');
    const statusColor = member.membershipStatus === 'Active' ? 'green' : 'gray';
    
    return `
        <div class="member-card group" data-member-id="${member.id}">
            <div class="p-6">
                <div class="relative mb-4">
                    <img src="${member.imageUrl}" 
                         class="w-20 h-20 mx-auto rounded-full shadow-md object-cover" 
                         alt="${member.name}">
                    <div class="absolute -bottom-2 -right-2 bg-${statusColor}-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        <i data-lucide="check" class="w-3 h-3 text-white"></i>
                    </div>
                </div>
                
                <div class="text-center">
                    <h3 class="font-bold text-gray-800 mb-1 group-hover:text-${config.color}-600 transition-colors">
                        ${member.name}
                    </h3>
                    <p class="text-${config.color}-600 font-medium text-sm mb-2">${member.role}</p>
                    <p class="text-xs text-gray-500 mb-3">${member.department || 'Computer Science'}</p>
                    
                    <div class="flex justify-center gap-2 mb-3">
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            ${member.membershipType || 'Member'}
                        </span>
                        <span class="bg-${config.color}-100 text-${config.color}-700 px-2 py-1 rounded-full text-xs font-medium">
                            ${membershipDuration}
                        </span>
                    </div>
                    
                    <div class="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        ${(member.socials || []).slice(0, 3).map(social => `
                            <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
                               class="text-gray-400 hover:text-${config.color}-600 transition-colors"
                               onclick="event.stopPropagation();">
                                <i data-lucide="${social.type}" class="w-4 h-4"></i>
                            </a>
                        `).join('')}
                        ${(member.socials || []).length === 0 ? '<span class="text-xs text-gray-400">View Profile</span>' : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update team statistics
function updateTeamStats() {
    const stats = getTeamStats();
    const totalMembersElement = document.getElementById('total-members');
    const totalTeamsElement = document.getElementById('total-teams');
    
    if (totalMembersElement) {
        totalMembersElement.textContent = `${stats.totalMembers}+`;
    }
    if (totalTeamsElement) {
        totalTeamsElement.textContent = stats.totalTeams;
    }
}

// Enhanced event handlers for members page
function attachEnhancedTeamEventHandlers() {
    // Category toggle functionality with animation
    document.querySelectorAll('.team-category-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.category-icon');
            
            // Toggle expanded state
            header.classList.toggle('category-expanded');
            content.classList.toggle('expanded');
            
            // Animate icon
            if (header.classList.contains('category-expanded')) {
                icon.style.transform = 'rotate(90deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
            
            // Add subtle animation feedback
            header.style.transform = 'scale(0.98)';
            setTimeout(() => {
                header.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Enhanced member card click handler
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking on social links
            if (e.target.closest('a')) return;
            
            const memberId = card.dataset.memberId;
            
            // Add click animation
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'translateY(-4px)';
                window.location.href = `member/?id=${memberId}`;
            }, 150);
        });
        
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Search and filter functionality
function initializeSearchAndFilter() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container mb-8';
    searchContainer.innerHTML = `
        <div class="max-w-md mx-auto">
            <div class="relative">
                <input type="text" 
                       id="member-search" 
                       class="search-input w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none bg-white"
                       placeholder="Search members by name, role, or team...">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i data-lucide="search" class="w-5 h-5 text-gray-400"></i>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-4 space-x-2" id="team-filters">
            <!-- Team filter buttons will be added here -->
        </div>
    `;
    
    const teamsContainer = document.getElementById('teams-container');
    if (teamsContainer) {
        teamsContainer.parentNode.insertBefore(searchContainer, teamsContainer);
        
        // Initialize search functionality
        const searchInput = document.getElementById('member-search');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
        
        // Initialize filter buttons
        createFilterButtons();
        
        // Re-initialize lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const memberCards = document.querySelectorAll('.member-card');
    
    memberCards.forEach(card => {
        const memberName = card.querySelector('h3').textContent.toLowerCase();
        const memberRole = card.querySelector('.font-medium').textContent.toLowerCase();
        const teamHeader = card.closest('.team-category-container').querySelector('h2').textContent.toLowerCase();
        
        if (memberName.includes(searchTerm) || 
            memberRole.includes(searchTerm) || 
            teamHeader.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
    
    // Show/hide team sections based on visible members
    document.querySelectorAll('.team-category-container').forEach(container => {
        const visibleCards = container.querySelectorAll('.member-card[style*="display: block"], .member-card:not([style*="display: none"])');
        if (visibleCards.length === 0) {
            container.style.display = 'none';
        } else {
            container.style.display = 'block';
        }
    });
}

// Create filter buttons
function createFilterButtons() {
    const filterContainer = document.getElementById('team-filters');
    if (!filterContainer) return;
    
    const teams = ['All', 'Executives', 'AI & DS', 'Web & App', 'Social Media & Marketing', 'Media & Graphics', 'Event & Decor'];
    const colors = ['gray', 'blue', 'green', 'red', 'yellow', 'purple', 'indigo'];
    
    teams.forEach((team, index) => {
        const button = document.createElement('button');
        const color = colors[index] || 'gray';
        button.className = `px-4 py-2 rounded-full text-sm font-medium transition-all ${
            index === 0 ? `bg-${color}-600 text-white` : `bg-${color}-100 text-${color}-700 hover:bg-${color}-200`
        }`;
        button.textContent = team;
        button.dataset.team = team;
        
        button.addEventListener('click', () => handleFilter(team, button));
        filterContainer.appendChild(button);
    });
}

// Handle team filtering
function handleFilter(teamName, clickedButton) {
    // Update active button
    document.querySelectorAll('#team-filters button').forEach(btn => {
        btn.className = btn.className.replace(/bg-\w+-600 text-white/, 'bg-gray-100 text-gray-700 hover:bg-gray-200');
    });
    clickedButton.className = clickedButton.className.replace(/bg-\w+-100 text-\w+-700 hover:bg-\w+-200/, 'bg-blue-600 text-white');
    
    // Filter team containers
    document.querySelectorAll('.team-category-container').forEach(container => {
        const containerTeam = container.querySelector('[data-team]').dataset.team;
        if (teamName === 'All' || containerTeam === teamName) {
            container.style.display = 'block';
            // Animate in
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
                container.style.transition = 'all 0.3s ease';
            }, 100);
        } else {
            container.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add search and filter after teams are loaded
    setTimeout(() => {
        initializeSearchAndFilter();
    }, 500);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadAllTeamsForMembersPage,
        createMemberCard,
        updateTeamStats,
        attachEnhancedTeamEventHandlers
    };
}