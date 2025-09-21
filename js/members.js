// Single source of truth for all member information
const members = [
  {
    id: "kashif-ayub",
    name: "Kashif Ayub",
    role: "Faculty Head",
    image: "assets/images/members/kashif-ayub.jpg",
    isLeadership: true,
    leadershipOrder: 1,
    joinDate: "2021-01-15",
    membershipStatus: "Active",
    membershipType: "Faculty",
    club: "GDG Wah",
    email: "kashif.ayub@example.com",
    github: "https://github.com/kashifayub",
    linkedin: "https://linkedin.com/in/kashifayub",
    bio: "Kashif Ayub is the Faculty Head of GDG Wah. He has extensive experience in...",
    expertise: ["Web Development", "Cloud Computing", "Project Management"],
    achievements: ["Best Faculty Award 2022", "Published 3 research papers"],
    projects: [
      {
        name: "Smart Campus Initiative",
        description: "A project to digitize campus operations",
        link: "#"
      }
    ]
  },
  {
    id: "ubaid-ur-rehman",
    name: "Ubaid ur Rehman",
    role: "Campus Lead",
    image: "assets/images/members/ubaid-ur-rehman.jpg",
    isLeadership: true,
    leadershipOrder: 2,
    joinDate: "2022-03-10",
    membershipStatus: "Active",
    membershipType: "Student",
    club: "GDG Wah",
    email: "ubaid.rehman@example.com",
    github: "https://github.com/ubaidrehman",
    linkedin: "https://linkedin.com/in/ubaidrehman",
    bio: "Ubaid leads campus initiatives and coordinates between faculty and students...",
    expertise: ["Mobile App Development", "UI/UX Design", "Event Management"],
    achievements: ["Google Developer Student Award", "Hackathon Winner 2023"],
    projects: [
      {
        name: "GDG Events App",
        description: "Mobile application for managing GDG events",
        link: "#"
      }
    ]
  },
  {
    id: "fakhir-hassan",
    name: "Fakhir Hassan",
    role: "Chair Person",
    image: "assets/images/members/fakhir-hassan.jpg",
    isLeadership: true,
    leadershipOrder: 3,
    joinDate: "2022-01-05",
    membershipStatus: "Active",
    membershipType: "Student",
    club: "GDG Wah",
    email: "fakhir.hassan@example.com",
    github: "https://github.com/fakhirhassan",
    linkedin: "https://linkedin.com/in/fakhirhassan",
    bio: "Fakhir oversees all GDG operations and strategic planning...",
    expertise: ["Leadership", "AI/ML", "Community Building"],
    achievements: ["Dean's List 2022", "Community Leader Award"],
    projects: [
      {
        name: "AI Workshop Series",
        description: "A series of workshops teaching AI fundamentals",
        link: "#"
      }
    ]
  },
  {
    id: "saad-ali",
    name: "Saad Ali",
    role: "Technical Lead",
    image: "assets/images/members/saad-ali.jpg",
    isLeadership: true,
    leadershipOrder: 4,
    joinDate: "2022-02-20",
    membershipStatus: "Active",
    membershipType: "Student",
    club: "GDG Wah",
    email: "saad.ali@example.com",
    github: "https://github.com/saadali",
    linkedin: "https://linkedin.com/in/saadali",
    bio: "Saad leads technical initiatives and workshops for GDG Wah...",
    expertise: ["Web Development", "DevOps", "Open Source"],
    achievements: ["Google Cloud Certified", "Open Source Contributor"],
    projects: [
      {
        name: "Tech Bootcamp Platform",
        description: "Online platform for technical bootcamps",
        link: "#"
      }
    ]
  },
  // Add more regular members here...
  {
    id: "member-5",
    name: "Jane Doe",
    role: "Member",
    image: "assets/images/members/jane-doe.jpg",
    isLeadership: false,
    joinDate: "2023-01-15",
    membershipStatus: "Active",
    membershipType: "Student",
    club: "GDG Wah",
    email: "jane.doe@example.com",
    github: "https://github.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
    bio: "Jane is passionate about web development and community engagement...",
    expertise: ["Frontend Development", "UI Design"],
    achievements: ["Hackathon Finalist 2023"],
    projects: [
      {
        name: "Portfolio Website",
        description: "Personal portfolio showcasing projects",
        link: "#"
      }
    ]
  }
  // Add as many members as needed
];

// Export members for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { members };
} else {
  // For browser context
  window.GDGMembers = { members };
}