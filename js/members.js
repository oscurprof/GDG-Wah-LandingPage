document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // --- Mobile menu toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

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

    // --- Header scroll effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.add('py-4');
            header.classList.remove('py-2');
        }
    });

    // Fetch and display members
    fetchMembers();

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button styles
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800');
            });
            button.classList.remove('bg-gray-200', 'text-gray-800');
            button.classList.add('bg-blue-600', 'text-white');
            
            // Apply filter
            const filter = button.getAttribute('data-filter');
            filterMembers(filter);
        });
    });

    // Set up search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        searchMembers(searchTerm);
    });
});

let allMembers = []; // Store all members for filtering

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch member data');
        }
        
        const data = await response.json();
        allMembers = data.members;
        
        displayMembers(allMembers);
    } catch (error) {
        console.error('Error fetching members:', error);
        document.getElementById('loading-message').textContent = 'Error loading members. Please try again later.';
    }
}

function displayMembers(members) {
    const membersGrid = document.getElementById('members-grid');
    const loadingMessage = document.getElementById('loading-message');
    const noResults = document.getElementById('no-results');
    
    // Clear previous content
    membersGrid.innerHTML = '';
    
    // Hide loading message
    loadingMessage.classList.add('hidden');
    
    if (members.length === 0) {
        // Show no results message
        noResults.classList.remove('hidden');
        membersGrid.classList.add('hidden');
    } else {
        // Hide no results message and show grid
        noResults.classList.add('hidden');
        membersGrid.classList.remove('hidden');
        
        // Create member cards
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'team-member bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300';
            memberCard.setAttribute('data-type', member.membershipType);
            
            memberCard.innerHTML = `
                <a href="member.html?id=${member.id}" class="block hover:no-underline">
                    <div class="relative">
                        <img src="${member.avatar}" alt="${member.name}" class="w-full h-48 object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-4">
                            <span class="text-white text-sm font-medium">${member.membershipType}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800">${member.name}</h3>
                        <p class="text-blue-600 font-semibold">${member.role}</p>
                        <p class="text-gray-500 mt-2 text-sm">Joined: ${formatDate(member.joiningDate)}</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            ${member.skills && member.skills.length > 0 
                                ? member.skills.slice(0, 2).map(skill => 
                                    `<span class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">${skill}</span>`
                                ).join('')
                                : ''}
                            ${member.skills && member.skills.length > 2 
                                ? `<span class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">+${member.skills.length - 2} more</span>`
                                : ''}
                        </div>
                    </div>
                </a>
            `;
            
            membersGrid.appendChild(memberCard);
        });
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function filterMembers(filter) {
    let filteredMembers;
    
    if (filter === 'all') {
        filteredMembers = allMembers;
    } else {
        filteredMembers = allMembers.filter(member => member.membershipType === filter);
    }
    
    // Also apply current search term
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    if (searchTerm) {
        filteredMembers = filteredMembers.filter(member => 
            member.name.toLowerCase().includes(searchTerm) ||
            member.role.toLowerCase().includes(searchTerm) ||
            (member.skills && member.skills.some(skill => skill.toLowerCase().includes(searchTerm)))
        );
    }
    
    displayMembers(filteredMembers);
}

function searchMembers(searchTerm) {
    // Get current active filter
    const activeFilter = document.querySelector('.filter-btn.bg-blue-600').getAttribute('data-filter');
    
    let filteredMembers;
    if (activeFilter === 'all') {
        filteredMembers = allMembers;
    } else {
        filteredMembers = allMembers.filter(member => member.membershipType === activeFilter);
    }
    
    // Apply search term
    if (searchTerm) {
        filteredMembers = filteredMembers.filter(member => 
            member.name.toLowerCase().includes(searchTerm) ||
            member.role.toLowerCase().includes(searchTerm) ||
            (member.skills && member.skills.some(skill => skill.toLowerCase().includes(searchTerm)))
        );
    }
    
    displayMembers(filteredMembers);
}