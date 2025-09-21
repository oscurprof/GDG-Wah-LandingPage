document.addEventListener('DOMContentLoaded', function() {
  // Get member ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get('id');
  
  if (!memberId) {
    document.getElementById('profile-container').innerHTML = '<div class="error">Member not found</div>';
    return;
  }
  
  // Find the member with the matching ID
  const member = window.GDGMembers.members.find(m => m.id === memberId);
  
  if (!member) {
    document.getElementById('profile-container').innerHTML = '<div class="error">Member not found</div>';
    return;
  }
  
  // Update page title
  document.title = `${member.name} - GDG Wah`;
  
  // Get the container where the profile will be displayed
  const profileContainer = document.getElementById('profile-container');
  
  if (profileContainer) {
    // Format the join date
    const joinDate = new Date(member.joinDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Populate the profile container
    profileContainer.innerHTML = `
      <div class="profile-header">
        <div class="profile-image">
          <img src="../../${member.image}" alt="${member.name}">
        </div>
        <div class="profile-details">
          <h1>${member.name}</h1>
          <p class="profile-role">${member.role}</p>
          <div class="profile-badges">
            <span class="badge membership-status">${member.membershipStatus}</span>
            <span class="badge membership-type">${member.membershipType}</span>
            <span class="badge club">${member.club}</span>
          </div>
          <div class="profile-meta">
            <p><i class="fas fa-calendar-alt"></i> Joined: ${joinDate}</p>
            <div class="profile-social">
              ${member.github ? `<a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
              ${member.linkedin ? `<a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
              ${member.email ? `<a href="mailto:${member.email}"><i class="fas fa-envelope"></i></a>` : ''}
            </div>
          </div>
        </div>
      </div>
      
      <div class="profile-content">
        <div class="profile-section">
          <h2>About</h2>
          <p>${member.bio}</p>
        </div>
        
        <div class="profile-section">
          <h2>Expertise</h2>
          <div class="expertise-tags">
            ${member.expertise.map(skill => `<span class="tag">${skill}</span>`).join('')}
          </div>
        </div>
        
        <div class="profile-section">
          <h2>Achievements</h2>
          <ul class="achievements-list">
            ${member.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
        
        <div class="profile-section">
          <h2>Projects</h2>
          <div class="projects-grid">
            ${member.projects.map(project => `
              <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                ${project.link ? `<a href="${project.link}" class="project-link">View Project</a>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
});