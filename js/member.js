document.addEventListener('DOMContentLoaded', async () => {
    const profileContent = document.getElementById('member-profile-content');
    const loadingState = document.getElementById('loading-state');

    // 1. Get the member ID from the URL
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('id');

    if (!memberId) {
        displayError('No member ID provided in the URL.');
        return;
    }

    try {
        // 2. Fetch all members' data from the correct path
        // The path is relative to member.html, which is in the root.
        const response = await fetch('data/members.json'); // <-- CORRECTED FILE PATH
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();

        // 3. Find the correct member
        const member = members.find(m => m.id === memberId);

        if (member) {
            // 4. If member found, display their profile
            displayProfile(member);
        } else {
            // 5. If not found, display an error
            displayError(`Member with ID "${memberId}" could not be found.`);
        }

    } catch (error) {
        console.error('Error fetching or processing member data:', error);
        displayError('An error occurred while trying to load the member profile.');
    }

    function displayProfile(member) {
        // Update page title
        document.title = `${member.name} | GDG Wah Campus`;

        // Generate the HTML for the profile
        const profileHTML = `
            <div class="relative">
                <div class="h-48 md:h-64 rounded-2xl overflow-hidden">
                    <img src="${member.coverImageUrl}" alt="${member.name}'s cover photo" class="w-full h-full object-cover">
                </div>
                <div class="absolute top-24 md:top-36 left-1/2 -translate-x-1/2 md:left-12 md:-translate-x-0">
                     <img src="${member.imageUrl}" alt="${member.name}" class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg">
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 pt-24 md:pt-8 mt-4">
                <div class="flex flex-col md:flex-row justify-between items-start">
                    <div class="md:ml-48 text-center md:text-left">
                        <h1 class="text-4xl font-bold text-gray-800">${member.name}</h1>
                        <p class="text-blue-600 font-semibold text-xl mt-1">${member.role}</p>
                    </div>
                    <div class="flex space-x-3 mt-4 md:mt-0 mx-auto md:mx-0">
                         ${generateSocialLinks(member.social)}
                    </div>
                </div>

                <div class="mt-8 profile-grid">
                    <!-- Left Column / Sidebar -->
                    <aside>
                        <div class="p-6 bg-gray-50 rounded-xl">
                             <h3 class="font-bold text-lg text-gray-700 mb-4">Membership Details</h3>
                             <ul class="space-y-3 text-gray-600">
                                <li class="flex items-center"><i data-lucide="hash" class="w-4 h-4 mr-3 text-gray-400"></i>ID: <span class="font-semibold ml-2">${member.id}</span></li>
                                <li class="flex items-center"><i data-lucide="calendar" class="w-4 h-4 mr-3 text-gray-400"></i>Joined: <span class="font-semibold ml-2">${new Date(member.details.joiningDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></li>
                                <li class="flex items-center"><i data-lucide="shield" class="w-4 h-4 mr-3 text-gray-400"></i>Status: <span class="status-badge ${member.details.membershipStatus.toLowerCase()} ml-2">${member.details.membershipStatus}</span></li>
                                <li class="flex items-center"><i data-lucide="award" class="w-4 h-4 mr-3 text-gray-400"></i>Type: <span class="font-semibold ml-2">${member.details.membershipType}</span></li>
                                <li class="flex items-center"><i data-lucide="users" class="w-4 h-4 mr-3 text-gray-400"></i>Club: <span class="font-semibold ml-2">${member.details.club}</span></li>
                             </ul>
                        </div>
                    </aside>
                    <!-- Right Column / Main Content -->
                    <main>
                         <div class="p-6">
                            <h3 class="font-bold text-2xl text-gray-800">About Me</h3>
                            <p class="text-lg text-gray-700 mt-3 whitespace-pre-line">${member.bio}</p>

                            <h3 class="font-bold text-2xl text-gray-800 mt-8">Skills</h3>
                            <div class="flex flex-wrap gap-3 mt-4">
                                ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>

                            <h3 class="font-bold text-2xl text-gray-800 mt-8">Projects & Contributions</h3>
                            <div class="space-y-6 mt-4">
                                ${member.projects.map(project => `
                                    <div class="p-4 border rounded-lg">
                                        <h4 class="font-bold text-lg text-gray-700">${project.name}</h4>
                                        <p class="text-gray-600 mt-1">${project.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                         </div>
                    </main>
                </div>
            </div>
        `;
        // Hide loading and show profile
        loadingState.style.display = 'none';
        profileContent.innerHTML = profileHTML;
        // Re-initialize lucide icons for the new content
        lucide.createIcons();
    }

    function generateSocialLinks(social) {
        let links = '';
        if (social.linkedin) links += `<a href="${social.linkedin}" target="_blank" class="text-gray-500 hover:text-blue-700"><i data-lucide="linkedin"></i></a>`;
        if (social.twitter) links += `<a href="${social.twitter}" target="_blank" class="text-gray-500 hover:text-sky-500"><i data-lucide="twitter"></i></a>`;
        if (social.github) links += `<a href="${social.github}" target="_blank" class="text-gray-500 hover:text-gray-900"><i data-lucide="github"></i></a>`;
        return links;
    }

    function displayError(message) {
        loadingState.style.display = 'none';
        profileContent.innerHTML = `
            <div class="text-center py-20">
                <h2 class="text-2xl font-bold text-red-600">Profile Not Found</h2>
                <p class="text-lg text-gray-600 mt-2">${message}</p>
                <a href="index.html" class="inline-block mt-6 bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700">
                    Go Back to Home
                </a>
            </div>
        `;
    }
});

