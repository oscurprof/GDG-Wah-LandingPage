document.addEventListener('DOMContentLoaded', function() {
  // Get all members
  const allMembers = window.GDGMembers.members;
  
  // Get the container where all members will be displayed
  const membersContainer = document.getElementById('members-container');
  
  if (membersContainer) {
    // Clear existing content
    membersContainer.innerHTML = '';
    
    // Add each member
    allMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'member-card';
      memberCard.innerHTML = `
        <div class="member-image">
          <img src="../${member.image}" alt="${member.name}">
        </div>
        <div class="member-info">
          <h3>${member.name}</h3>
          <p class="member-role">${member.role}</p>
          <p class="member-since">Member since: ${new Date(member.joinDate).toLocaleDateString()}</p>
          <div class="member-social">
            ${member.github ? `<a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
            ${member.linkedin ? `<a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
            ${member.email ? `<a href="mailto:${member.email}"><i class="fas fa-envelope"></i></a>` : ''}
          </div>
          <a href="member/index.html?id=${member.id}" class="view-profile-btn">View Profile</a>
        </div>
      `;
      membersContainer.appendChild(memberCard);
    });
  }
});