document.addEventListener('DOMContentLoaded', function() {
  // Get leadership members only and sort by leadership order
  const leadershipMembers = window.GDGMembers.members
    .filter(member => member.isLeadership)
    .sort((a, b) => a.leadershipOrder - b.leadershipOrder);
  
  // Get the container where leadership members will be displayed
  const leadershipContainer = document.getElementById('leadership-container');
  
  if (leadershipContainer) {
    // Clear existing content
    leadershipContainer.innerHTML = '';
    
    // Add each leadership member
    leadershipMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'leadership-card';
      memberCard.innerHTML = `
        <div class="member-image">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="member-info">
          <h3>${member.name}</h3>
          <p class="member-role">${member.role}</p>
          <div class="member-social">
            ${member.github ? `<a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
            ${member.linkedin ? `<a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
            ${member.email ? `<a href="mailto:${member.email}"><i class="fas fa-envelope"></i></a>` : ''}
          </div>
          <a href="members/member/index.html?id=${member.id}" class="view-profile-btn">View Profile</a>
        </div>
      `;
      leadershipContainer.appendChild(memberCard);
    });
  }
});