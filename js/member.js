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

    // --- Get member ID from URL ---
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('id');
    
    // If no ID provided, show error
    if (!memberId) {
        showError();
        return;
    }

    // Fetch member data
    fetchMemberData(memberId);
});

async function fetchMemberData(memberId) {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch member data');
        }
        
        const data = await response.json();
        const member = data.members.find(m => m.id === memberId);
        
        if (member) {
            displayMemberProfile(member);
        } else {
            showError();
        }
    } catch (error) {
        console.error('Error fetching member data:', error);
        showError();
    }
}

function displayMemberProfile(member) {
    // Hide loading message and show content
    document.getElementById('loading-message').classList.add('hidden');
    document.getElementById('member-content').classList.remove('hidden');
    
    // Set basic profile information
    document.getElementById('member-avatar').src = member.avatar;
    document.getElementById('member-avatar').alt = `${member.name}'s avatar`;
    document.getElementById('member-name').textContent = member.name;
    document.getElementById('member-role').textContent = member.role;
    document.getElementById('member-bio').textContent = member.bio;
    
    // Set membership information
    document.getElementById('member-id').textContent = member.id;
    
    // Format and display joining date
    const joiningDate = new Date(member.joiningDate);
    const formattedDate = joiningDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('member-joining-date').textContent = formattedDate;
    
    // Set membership status with appropriate styling
    const statusElement = document.getElementById('member-status');
    statusElement.textContent = member.membershipStatus;
    if (member.membershipStatus === 'Active') {
        statusElement.classList.add('bg-green-100', 'text-green-800');
    } else if (member.membershipStatus === 'Inactive') {
        statusElement.classList.add('bg-red-100', 'text-red-800');
    } else {
        statusElement.classList.add('bg-yellow-100', 'text-yellow-800');
    }
    
    document.getElementById('member-type').textContent = member.membershipType;
    document.getElementById('member-club').textContent = member.club;
    
    // Set email in contact links
    document.getElementById('member-email').href = `mailto:${member.email}`;
    document.getElementById('contact-email').href = `mailto:${member.email}`;
    
    // Display social media links if available
    if (member.social) {
        if (member.social.twitter) {
            const twitterLink = document.getElementById('social-twitter');
            twitterLink.href = member.social.twitter;
            twitterLink.classList.remove('hidden');
        }
        
        if (member.social.linkedin) {
            const linkedinLink = document.getElementById('social-linkedin');
            linkedinLink.href = member.social.linkedin;
            linkedinLink.classList.remove('hidden');
        }
        
        if (member.social.github) {
            const githubLink = document.getElementById('social-github');
            githubLink.href = member.social.github;
            githubLink.classList.remove('hidden');
        }
    }
    
    // Display skills
    const skillsContainer = document.getElementById('member-skills');
    if (member.skills && member.skills.length > 0) {
        member.skills.forEach(skill => {
            const skillBadge = document.createElement('span');
            skillBadge.className = 'inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium';
            skillBadge.textContent = skill;
            skillsContainer.appendChild(skillBadge);
        });
    } else {
        skillsContainer.textContent = 'No skills listed yet.';
    }
    
    // Display events
    const eventList = document.getElementById('event-list');
    const noEventsElement = document.getElementById('no-events');
    
    if (member.events && member.events.length > 0) {
        noEventsElement.classList.add('hidden');
        
        member.events.forEach(event => {
            const eventDate = new Date(event.date);
            const formattedEventDate = eventDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card bg-white rounded-lg shadow-lg overflow-hidden';
            
            // Choose background color based on role
            let roleBgColor = 'bg-blue-100 text-blue-800';
            if (event.role === 'Speaker') {
                roleBgColor = 'bg-yellow-100 text-yellow-800';
            } else if (event.role === 'Organizer') {
                roleBgColor = 'bg-green-100 text-green-800';
            } else if (event.role === 'Instructor') {
                roleBgColor = 'bg-purple-100 text-purple-800';
            }
            
            eventCard.innerHTML = `
                <div class="p-6">
                    <span class="text-sm font-semibold text-blue-600">${formattedEventDate}</span>
                    <h3 class="text-xl font-bold mt-2 mb-2">${event.name}</h3>
                    <span class="inline-block ${roleBgColor} px-2 py-1 rounded text-xs font-semibold">
                        ${event.role}
                    </span>
                </div>
            `;
            
            eventList.appendChild(eventCard);
        });
    } else {
        noEventsElement.classList.remove('hidden');
    }
}

function showError() {
    document.getElementById('loading-message').classList.add('hidden');
    document.getElementById('error-message').classList.remove('hidden');
}