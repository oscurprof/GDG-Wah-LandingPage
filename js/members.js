// js/members.js - Centralized Member Data Management System

const membersData = {
    "GDG-M001": {
        name: "Dr. Kashif Ayyub",
        role: "Faculty Head",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Kashif",
        bio: "<p>Dr. Kashif Ayyub serves as the Faculty Head, guiding the GDG community with his extensive experience and passion for technology. With over 15 years of experience in computer science and software engineering, he has been instrumental in bridging the gap between academia and industry. His research interests include machine learning, software engineering practices, and educational technology.</p><p>Under his guidance, GDG Wah Campus has grown to become one of the most active developer communities in the region, fostering innovation and collaboration among students and professionals alike.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Faculty Advisor",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Machine Learning", "Software Engineering", "Educational Technology", "Research Methodology"],
        achievements: ["Founded GDG Wah Campus", "Published 25+ research papers", "Mentored 100+ students"],
        email: "kashif.ayyub@gdgwah.dev",
        phone: "+92-300-1234567",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/kashif-ayyub" },
            { type: "twitter", url: "https://twitter.com/kashif_ayyub" }
        ]
    },
    "GDG-M002": {
        name: "Ubaid-Ur-Rehman",
        role: "Campus Lead",
        team: "Executives",
        imageUrl: "/assets/images/M002.png",
        bio: "<p>Ubaid-Ur-Rehman is the Campus Lead, driving the chapter's initiatives and fostering a collaborative environment for all members. As a passionate software developer and community builder, he has been instrumental in organizing numerous tech events, workshops, and hackathons.</p><p>His leadership has helped establish strong partnerships with industry professionals and has created opportunities for students to gain real-world experience through internships and project collaborations.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Campus Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Full-Stack Development", "Community Management", "Event Organization", "Leadership"],
        achievements: ["Organized 15+ tech events", "Built 500+ member community", "Led 3 successful hackathons"],
        email: "ubaid@gdgwah.dev",
        phone: "+92-301-2345678",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/ubaid-ur-rehman" },
            { type: "github", url: "https://github.com/ubaid-ur-rehman" },
            { type: "twitter", url: "https://twitter.com/ubaid_dev" }
        ]
    },
    "GDG-M003": {
        name: "Fakhir Hassan",
        role: "Chairperson",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fakhir",
        bio: "<p>Fakhir Hassan, as the Chairperson, provides strategic direction and leadership to the GDG chapter. With a strong background in computer science and exceptional organizational skills, he ensures that all chapter activities align with the community's goals and Google Developer Group's mission.</p><p>His vision has helped establish GDG Wah Campus as a hub for innovation, learning, and professional development in the region.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Executive Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Strategic Planning", "Project Management", "Android Development", "Team Leadership"],
        achievements: ["Increased member engagement by 200%", "Established industry partnerships", "Led strategic planning initiatives"],
        email: "fakhir@gdgwah.dev",
        phone: "+92-302-3456789",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/fakhir-hassan" },
            { type: "github", url: "https://github.com/fakhir-hassan" }
        ]
    },
    "GDG-M004": {
        name: "Muhammad Ali Saqib",
        role: "Operation Manager",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Ali Saqib manages the chapter's operations, ensuring that all events and activities run smoothly. With exceptional organizational and coordination skills, he handles logistics, scheduling, and resource management for all GDG activities.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Executive Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Operations Management", "Event Coordination", "Resource Planning", "Team Coordination"],
        achievements: ["Managed 15+ successful events", "Improved operational efficiency by 150%", "Coordinated with 20+ industry partners"],
        email: "ali.saqib@gdgwah.dev",
        phone: "+92-304-5678901",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M005": {
        name: "Laiba Faiz",
        role: "General Secretory",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Laiba",
        bio: "<p>Laiba Faiz handles administrative tasks as the General Secretory, playing a vital role in the chapter's organization. Her meticulous attention to detail ensures that all records are maintained, communications are sent out promptly, and the executive team is well-supported.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Executive Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Administration", "Communication", "Record Keeping", "Meeting Coordination"],
        achievements: ["Streamlined communication channels", "Organized meeting minutes efficiently", "Managed member registration processes"],
        email: "laiba.faiz@gdgwah.dev",
        phone: "+92-305-1112233",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M006": {
    "name": "Saad Ali",
    "role": "Technical Lead",
    "team": "Executives",
    "imageUrl": "/assets/images/M006.png",
    "bio": "<p>A Computer Science student at COMSATS with 4+ years of experience in software development. Passionate about AI/ML, Saad has built projects like a context-aware AI (BookBuddy) and a brain tumor segmentation tool, holding certifications from Harvard, Google, and IBM.</p><p>He is also a game developer using Unreal Engine 5 and the co-founder of Aviskens, an AI-focused startup. Outside of tech, he is an avid chess player, storyteller, and calisthenics enthusiast.</p>",
    "joiningDate": "2025-09-11",
    "membershipStatus": "Active",
    "membershipType": "Technical Lead",
    "club": "GDG Wah Campus",
    "department": "Computer Science",
    "university": "Comsats University Islamabad, Wah Campus",
    "expertise": [
        "AI/ML",
        "Game Development (Unreal Engine 5)",
        "Python",
        "C++",
        "Java",
        "DBMS (MySQL, MS Access)"
    ],
    "achievements": [
        "Delivered 50+ real-world software solutions",
        "Co-founder of Aviskens, an AI-focused startup",
        "Developed BookBuddy (context-aware AI)",
        "Built a brain tumor segmentation tool using U-Net & Gemini AI"
    ],
    "email": "oscurprof@gmail.com",
    "phone": "+92-303-4567890",
    "location": "Wah Cantt, Pakistan",
    "socials": [
        { "type": "linkedin", "url": "https://linkedin.com/in/oscurprof" },
        { "type": "github", "url": "https://github.com/oscurprof" }
    ]
  },
    "GDG-M007": {
        name: "Alisha Fatima",
        role: "Women in Tech",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Alisha",
        bio: "<p>Alisha Fatima champions diversity and inclusion as the Women in Tech lead. She is dedicated to creating an empowering and supportive environment for female members in the community by organizing women-focused events, mentorship programs, and networking opportunities.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Executive Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Community Building", "Advocacy", "Event Planning", "Mentorship Programs"],
        achievements: ["Launched mentorship program for women", "Increased female participation by 40%", "Organized 'Code with Her' hackathon"],
        email: "alisha.fatima@gdgwah.dev",
        phone: "+92-306-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M008": {
        name: "Ayesha Akhtar",
        role: "Treasurer",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ayesha",
        bio: "<p>Ayesha Akhtar manages the chapter's finances with precision and integrity. As Treasurer, she ensures that resources are allocated effectively for events and initiatives, handles budgeting, and seeks sponsorship opportunities to support the chapter's growth.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Executive Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Financial Management", "Budgeting", "Sponsorships", "Financial Reporting"],
        achievements: ["Secured funding for 3 major events", "Maintained transparent financial records", "Optimized budget for cost savings"],
        email: "ayesha.akhtar@gdgwah.dev",
        phone: "+92-307-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M009": {
        name: "Adeel Asghar",
        role: "Al & Data Science Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Adeel",
        bio: "<p>Adeel Asghar leads the AI & Data Science team, organizing workshops and projects in this exciting field. He is passionate about machine learning and enjoys guiding team members through complex AI projects and research initiatives, fostering a collaborative learning environment.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Machine Learning", "Python", "Data Analysis", "TensorFlow"],
        achievements: ["Led a winning team in a national AI competition", "Conducted 5+ workshops on ML", "Published a paper on predictive modeling"],
        email: "adeel.asghar@gdgwah.dev",
        phone: "+92-308-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" }
        ]
    },
    "GDG-M010": {
        name: "Manahil Mirza",
        role: "Al & Data Science Co-Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Manahil",
        bio: "<p>Manahil Mirza co-leads the AI & Data Science team, supporting initiatives and mentoring members. She has a strong background in deep learning and natural language processing, and she actively contributes to the team's research projects and technical workshops.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Co-Lead",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Deep Learning", "TensorFlow", "NLP", "Python"],
        achievements: ["Co-authored a research paper on sentiment analysis", "Mentored junior members on projects", "Organized an 'Intro to NLP' series"],
        email: "manahil.mirza@gdgwah.dev",
        phone: "+92-309-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M011": {
        name: "Muhammad Ismail",
        role: "Web & App Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Ismail heads the Web & App development team, guiding members in creating innovative and user-friendly applications. He is proficient in modern web frameworks and is always eager to explore new technologies to solve real-world problems through code.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["React", "Node.js", "Firebase", "API Integration"],
        achievements: ["Developed the official GDG chapter website", "Won 'Best Mobile App' at a hackathon", "Leads weekly coding sessions"],
        email: "muhammad.ismail@gdgwah.dev",
        phone: "+92-310-6677889",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" }
        ]
    },
    "GDG-M012": {
        name: "Zain Mehboob",
        role: "Web & App Co-Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Zain",
        bio: "<p>Zain Mehboob supports the Web & App team as co-lead, with a strong focus on mobile development using Flutter. He is passionate about creating beautiful user interfaces and contributes to both project development and mentoring fellow team members.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Co-Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Flutter", "Dart", "UI/UX Design", "Mobile Development"],
        achievements: ["Designed and developed two cross-platform apps", "Organized a Flutter study jam", "Contributed to open-source Flutter projects"],
        email: "zain.mehboob@gdgwah.dev",
        phone: "+92-311-7788990",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M013": {
        name: "Maleeha Zulfiqar",
        role: "Al Research Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Maleeha",
        bio: "<p>Maleeha Zulfiqar leads AI research initiatives, exploring new frontiers in artificial intelligence. She is particularly interested in computer vision and enjoys diving deep into complex algorithms and academic papers to push the boundaries of what's possible.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["AI Research", "Computer Vision", "PyTorch", "Academic Writing"],
        achievements: ["Published research in a student journal", "Presented findings at a university symposium", "Organized a research paper reading group"],
        email: "maleeha.zulfiqar@gdgwah.dev",
        phone: "+92-312-8899001",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M014": {
        name: "Tashfeen Liaquat",
        role: "Social Media & Marketing Lead",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Tashfeen",
        bio: "<p>Tashfeen Liaquat manages the chapter's online presence as the Social Media & Marketing Lead. He develops and executes strategies to grow the GDG community, promote events, and engage with members across various digital platforms.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Digital Marketing", "Content Creation", "SEO", "Social Media Strategy"],
        achievements: ["Grew social media following by 150%", "Ran successful promotional campaigns for events", "Launched a weekly tech newsletter"],
        email: "tashfeen.liaquat@gdgwah.dev",
        phone: "+92-313-9900112",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M015": {
        name: "Fatima Qureshi",
        role: "Social Media & Marketing Co-Lead",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fatima",
        bio: "<p>Fatima Qureshi co-leads the marketing efforts, helping to grow the community's reach. With a keen eye for analytics, she measures the impact of marketing campaigns and uses data-driven insights to refine the team's strategy.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Co-Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Social Media Management", "Analytics", "Email Marketing", "Content Strategy"],
        achievements: ["Designed and executed a viral marketing campaign", "Improved engagement rates across all platforms", "Developed a content calendar"],
        email: "fatima.qureshi@gdgwah.dev",
        phone: "+92-314-0011223",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M016": {
        name: "Muhammad Yousaf",
        role: "Media & Graphics Lead",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Yousaf leads the Media & Graphics team, creating stunning visuals for the chapter's events and promotions. He is a creative professional with a passion for design, ensuring a consistent and appealing visual identity for the GDG chapter.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Graphic Design", "Adobe Creative Suite", "Video Editing", "Branding"],
        achievements: ["Designed all branding materials for a major conference", "Produced promotional videos for events", "Mentored junior designers"],
        email: "muhammad.yousaf@gdgwah.dev",
        phone: "+92-315-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M017": {
        name: "Syeda Farah Muqtadir",
        role: "Media & Graphics Co-Lead",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Syeda",
        bio: "<p>Syeda Farah Muqtadir co-leads the creative team, contributing to the chapter's visual identity. She specializes in illustration and motion graphics, bringing a dynamic and artistic flair to the team's projects.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Co-Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Illustration", "UI/UX Design", "Motion Graphics", "Adobe After Effects"],
        achievements: ["Created animated logos and intros", "Contributed to the redesign of the chapter's branding", "Won a university-level design competition"],
        email: "syeda.farah@gdgwah.dev",
        phone: "+92-316-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M018": {
        name: "Junaid Mehmood",
        role: "Event & Decor Lead",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Junaid",
        bio: "<p>Junaid Mehmood leads the Event & Decor team, ensuring every event is a memorable experience. He excels at planning, logistics, and execution, transforming venues into engaging spaces for learning and networking.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Event Management", "Logistics", "Vendor Coordination", "Venue Management"],
        achievements: ["Successfully managed the logistics for a 300+ attendee event", "Decorated venues for 10+ events", "Negotiated with vendors for cost-effective solutions"],
        email: "junaid.mehmood@gdgwah.dev",
        phone: "+92-317-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M019": {
        name: "Umm-e-Amen Ibrar",
        role: "Event & Decor Co-Lead",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Umm-e-Amen",
        bio: "<p>Umm-e-Amen Ibrar co-leads the events team, helping to organize and execute chapter gatherings. She has a talent for hospitality and ensures that all attendees, speakers, and volunteers have a positive and seamless experience.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Co-Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Event Planning", "Volunteer Management", "Hospitality", "Public Relations"],
        achievements: ["Coordinated volunteer teams for all major events", "Ensured a smooth and welcoming experience for attendees", "Managed on-site registration"],
        email: "umme.amen@gdgwah.dev",
        phone: "+92-318-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M020": {
        name: "Ali Noor",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ali",
        bio: "<p>Ali Noor is a dedicated member of the AI & Data Science team, with a keen interest in natural language processing and computer vision. He actively participates in team projects, contributing to the development of machine learning models. Ali is passionate about applying AI to solve real-world problems and is always eager to learn new techniques.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Natural Language Processing", "Computer Vision", "Python", "Scikit-learn"],
        achievements: ["Contributed to a sentiment analysis project for the university", "Presented a workshop on introductory Python for data science"],
        email: "ali.noor@gdgwah.dev",
        phone: "+92-320-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M021": {
        name: "M Daud Subhani",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=M+Daud",
        bio: "<p>M Daud Subhani is a motivated member of the AI & DS team, focusing on data analysis and visualization. He enjoys finding patterns in large datasets and presenting his findings in a clear and impactful way. Daud is proficient with tools like Pandas and Matplotlib and is always looking to enhance his data storytelling skills.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Data Analysis", "Data Visualization", "Pandas", "Matplotlib"],
        achievements: ["Created insightful visualizations for a chapter project", "Won second place in a university data-thon"],
        email: "daud.subhani@gdgwah.dev",
        phone: "+92-321-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
     "GDG-M022": {
        name: "Aliyan Abid",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Aliyan",
        bio: "<p>Aliyan Abid is an enthusiastic member of the AI & DS team with a passion for reinforcement learning. He actively contributes to research-oriented projects, exploring how autonomous agents can learn and make decisions. Aliyan is always up for a challenge and enjoys collaborating with his peers on complex problems.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Reinforcement Learning", "Python", "OpenAI Gym", "Problem Solving"],
        achievements: ["Developed a simple game-playing AI agent", "Actively participates in Kaggle competitions"],
        email: "aliyan.abid@gdgwah.dev",
        phone: "+92-322-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M023": {
        name: "Sara Ahmed",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Sara",
        bio: "<p>Sara Ahmed is a member of the AI & DS team who is passionate about ethical AI and fairness in machine learning. She contributes to projects by ensuring that models are built responsibly and their societal impact is considered. Sara is a strong advocate for creating technology that is inclusive and beneficial for everyone.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Ethical AI", "Fairness in ML", "Data Privacy", "Critical Thinking"],
        achievements: ["Presented on 'The Importance of Ethics in AI' at a university event", "Contributed to a project on bias detection in algorithms"],
        email: "sara.ahmed@gdgwah.dev",
        phone: "+92-323-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M024": {
        name: "Muhammad Akif",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Akif is a detail-oriented member of the AI & DS team. He focuses on data engineering and building robust data pipelines for machine learning projects. Akif is skilled in SQL and is learning more about cloud-based data warehousing solutions.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Data Engineering", "SQL", "ETL Processes", "Database Management"],
        achievements: ["Designed a data pipeline for a real-time analytics project", "Optimized database queries for improved performance"],
        email: "muhammad.akif@gdgwah.dev",
        phone: "+92-324-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M025": {
        name: "Abdul Ahad",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Abdul",
        bio: "<p>Abdul Ahad is a curious and analytical member of the AI & DS team. His interests lie in exploratory data analysis and feature engineering. Abdul enjoys uncovering hidden insights from data and preparing it for modeling. He is an active contributor to the team's brainstorming sessions.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Exploratory Data Analysis", "Feature Engineering", "Python", "Statistics"],
        achievements: ["Discovered key insights that improved model accuracy by 10%", "Contributed to a data cleaning and preprocessing library"],
        email: "abdul.ahad@gdgwah.dev",
        phone: "+92-325-6677889",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M026": {
        name: "Ahmed Hassan",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Ahmed",
        bio: "<p>Ahmed Hassan is a member of the AI & DS team with a strong interest in time-series analysis and forecasting. He is passionate about building models that can predict future trends. Ahmed is currently working on a project to forecast stock prices using LSTMs.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Time-Series Analysis", "Forecasting", "LSTMs", "Keras"],
        achievements: ["Developed a forecasting model with 95% accuracy", "Presented his work at a local tech meetup"],
        email: "ahmed.hassan@gdgwah.dev",
        phone: "+92-326-7788990",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M027": {
        name: "Sannila Iqbal",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Sannila",
        bio: "<p>Sannila Iqbal is a valuable member of the AI & DS team who specializes in data collection and web scraping. She is proficient in using tools like BeautifulSoup and Scrapy to gather data for various projects. Sannila plays a crucial role in providing the team with high-quality datasets.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Web Scraping", "Data Collection", "BeautifulSoup", "Scrapy"],
        achievements: ["Scraped and cleaned a dataset of over 100,000 records", "Automated the data collection process for a daily report"],
        email: "sannila.iqbal@gdgwah.dev",
        phone: "+92-327-8899001",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M028": {
        name: "Danyal Ahmed",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Danyal",
        bio: "<p>Danyal Ahmed is a member of the AI & DS team who is passionate about deploying machine learning models into production. He has experience with tools like Docker and Flask for creating and containerizing ML-powered APIs. Danyal is focused on bridging the gap between development and deployment.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["MLOps", "Docker", "Flask", "API Development"],
        achievements: ["Successfully deployed a machine learning model as a web service", "Created a CI/CD pipeline for an ML project"],
        email: "danyal.ahmed@gdgwah.dev",
        phone: "+92-328-9900112",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M029": {
        name: "Eesha Imran",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Eesha",
        bio: "<p>Eesha Imran is a member of the AI & DS team with a strong foundation in statistical analysis and hypothesis testing. She brings a rigorous, data-driven approach to the team's projects. Eesha enjoys applying statistical methods to validate models and draw meaningful conclusions from data.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Statistical Analysis", "Hypothesis Testing", "R", "Data Interpretation"],
        achievements: ["Conducted a comprehensive statistical analysis for a research paper", "Helped the team make data-backed decisions"],
        email: "eesha.imran@gdgwah.dev",
        phone: "+92-329-0011223",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M030": {
        name: "Zainab Fatima",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Zainab",
        bio: "<p>Zainab Fatima is a proactive member of the AI & DS team, with a growing interest in cloud computing and big data technologies. She is currently learning about services like AWS SageMaker and Google AI Platform to train and deploy models at scale. Zainab is excited about the future of cloud-native AI.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Cloud Computing", "AWS", "Google Cloud Platform", "Big Data"],
        achievements: ["Earned an AWS Certified Cloud Practitioner certification", "Experimenting with serverless functions for ML inference"],
        email: "zainab.fatima@gdgwah.dev",
        phone: "+92-330-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M031": {
        name: "Adeel Asghar",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Adeel",
        bio: "<p>Adeel Asghar is a collaborative member of the AI & DS team, known for his problem-solving skills and teamwork. He enjoys working in a group to tackle challenging machine learning problems. Adeel is a reliable team player who is always willing to help his peers.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Teamwork", "Problem Solving", "Python", "Collaboration"],
        achievements: ["Contributed to the success of several team projects", "Known for his positive and supportive attitude"],
        email: "adeel.asghar2@gdgwah.dev",
        phone: "+92-331-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M032": {
        name: "Choudhary Muhammad Bilal Kas",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Choudhary",
        bio: "<p>Choudhary Muhammad Bilal Kas is a member of the AI & DS team with an interest in computer graphics and generative models. He is exploring how AI can be used to create art and other creative content. Bilal is experimenting with GANs to generate realistic images.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Computer Graphics", "Generative Models", "GANs", "Creative AI"],
        achievements: ["Generated a series of unique digital art pieces using a GAN", "Exploring the intersection of art and AI"],
        email: "bilal.kas@gdgwah.dev",
        phone: "+92-332-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M033": {
        name: "Muhammad Asad",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Asad is a member of the AI & DS team who is passionate about recommendation systems. He is interested in how companies like Netflix and Amazon use data to provide personalized recommendations. Asad is building a movie recommendation engine as a personal project.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Recommendation Systems", "Collaborative Filtering", "Content-Based Filtering", "Python"],
        achievements: ["Building a movie recommendation engine from scratch", "Presented a talk on the basics of recommendation systems"],
        email: "muhammad.asad@gdgwah.dev",
        phone: "+92-333-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M034": {
        name: "Momna Yousaf",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Momna",
        bio: "<p>Momna Yousaf is a member of the AI & DS team with a focus on deep learning for medical imaging. She is passionate about using AI to improve healthcare outcomes. Momna is working on a project to detect diseases from medical scans.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Medical Imaging", "Deep Learning", "CNNs", "Healthcare AI"],
        achievements: ["Developed a model for early-stage disease detection", "Collaborating with medical professionals on her research"],
        email: "momna.yousaf@gdgwah.dev",
        phone: "+92-334-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M035": {
        name: "Taha Liaquat",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Taha",
        bio: "<p>Taha Liaquat is a member of the AI & DS team with an interest in autonomous systems and robotics. He is exploring how AI can be used to create intelligent robots that can navigate and interact with the world. Taha is building a small autonomous car as a hobby project.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Robotics", "Autonomous Systems", "Computer Vision", "ROS"],
        achievements: ["Building and programming an autonomous car", "Won a university robotics competition"],
        email: "taha.liaquat@gdgwah.dev",
        phone: "+92-335-6677889",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M036": {
        name: "Samawia Saif",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Samawia",
        bio: "<p>Samawia Saif is a member of the AI & DS team who is passionate about bioinformatics and using AI to analyze biological data. She is interested in how machine learning can be applied to genomics and proteomics. Samawia is working on a project to predict protein structures.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Bioinformatics", "Genomics", "Proteomics", "Machine Learning"],
        achievements: ["Developing a model to predict protein folding", "Presented her research at a bioinformatics conference"],
        email: "samawia.saif@gdgwah.dev",
        phone: "+92-336-7788990",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M037": {
        name: "Abdullah Saghir",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Abdullah",
        bio: "<p>Abdullah Saghir is a member of the AI & DS team who enjoys the mathematical foundations of machine learning. He has a strong understanding of linear algebra, calculus, and probability theory. Abdullah helps the team understand the theory behind the algorithms they use.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Mathematics for ML", "Linear Algebra", "Calculus", "Probability Theory"],
        achievements: ["Tutored his peers in the mathematics behind machine learning", "Helped derive and implement an algorithm from scratch"],
        email: "abdullah.saghir@gdgwah.dev",
        phone: "+92-337-8899001",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M038": {
        name: "Malik Faizan Ali",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Malik",
        bio: "<p>Malik Faizan Ali is a member of the AI & DS team with a passion for competitive programming and algorithmic problem-solving. He enjoys tackling complex challenges and finding efficient solutions. Faizan brings a strong analytical mindset to the team's projects.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Competitive Programming", "Algorithms", "Data Structures", "Problem Solving"],
        achievements: ["Ranked in the top 10% in a national programming competition", "Solved over 500 problems on online judges"],
        email: "faizan.ali@gdgwah.dev",
        phone: "+92-338-9900112",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M039": {
        name: "Zaryab Khan",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Zaryab",
        bio: "<p>Zaryab Khan is a creative front-end developer in the Web & App team. He has a passion for crafting beautiful and responsive user interfaces that provide an exceptional user experience. Zaryab is proficient with modern JavaScript frameworks and is always experimenting with new animation libraries to bring his designs to life.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["HTML5", "CSS3", "JavaScript", "React", "UI/UX"],
        achievements: ["Developed the front-end for three team projects", "Won 'Best UI/UX' in a local hackathon", "Mentored junior members on CSS Flexbox and Grid"],
        email: "zaryab.khan@gdgwah.dev",
        phone: "+92-333-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M040": {
        name: "Naveed Qasim",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Naveed",
        bio: "<p>Naveed Qasim is a back-end developer in the Web & App team, specializing in building robust and scalable server-side applications. He is proficient in Node.js and has experience with both SQL and NoSQL databases. Naveed is passionate about writing clean, efficient, and well-documented code.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "API Design"],
        achievements: ["Built the back-end for the chapter's event management system", "Implemented a secure authentication system using JWT", "Contributed to an open-source project on GitHub"],
        email: "naveed.qasim@gdgwah.dev",
        phone: "+92-334-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M041": {
        name: "Alia Arshad",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Alia",
        bio: "<p>Alia Arshad is a full-stack developer in the Web & App team, comfortable working on both the front-end and back-end. She enjoys the challenge of building complete applications from start to finish. Alia is a quick learner and is always eager to pick up new technologies.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["JavaScript", "React", "Node.js", "MongoDB", "Full-Stack Development"],
        achievements: ["Led the development of a social media clone for a class project", "Contributed to both front-end and back-end codebases for chapter projects"],
        email: "alia.arshad@gdgwah.dev",
        phone: "+92-335-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M042": {
        name: "Alehsa Yasin",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Alehsa",
        bio: "<p>Alehsa Yasin is a mobile app developer in the Web & App team, with a focus on creating native Android applications. She is proficient in Kotlin and has a strong understanding of the Android SDK. Alehsa is passionate about building user-friendly and performant mobile apps.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Android Development", "Kotlin", "Java", "Android SDK", "Firebase"],
        achievements: ["Developed a weather app with real-time updates", "Published a simple game on the Google Play Store", "Attended several Android development workshops"],
        email: "alehsa.yasin@gdgwah.dev",
        phone: "+92-336-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M043": {
        name: "Zohaib Arif",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Zohaib",
        bio: "<p>Zohaib Arif is a developer in the Web & App team with a strong interest in DevOps and cloud infrastructure. He is learning how to use tools like Jenkins and Terraform to automate the deployment and scaling of web applications. Zohaib is passionate about building reliable and efficient systems.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["DevOps", "CI/CD", "Jenkins", "Terraform", "AWS"],
        achievements: ["Set up a CI/CD pipeline for a team project", "Exploring infrastructure as code with Terraform", "Earned an AWS certification"],
        email: "zohaib.arif@gdgwah.dev",
        phone: "+92-337-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M044": {
        name: "Ayesha Siddiqui",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ayesha",
        bio: "<p>Ayesha Siddiqui is a UI/UX designer in the Web & App team. She has a talent for creating intuitive and visually appealing user interfaces. Ayesha is proficient in design tools like Figma and Adobe XD and enjoys conducting user research to inform her designs. She is passionate about creating products that people love to use.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["UI/UX Design", "User Research", "Wireframing", "Prototyping", "Figma"],
        achievements: ["Designed the user interface for a mobile banking app concept", "Conducted usability testing and iterated on her designs based on feedback"],
        email: "ayesha.siddiqui@gdgwah.dev",
        phone: "+92-338-6677889",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "dribbble", url: "#" }]
    },
    "GDG-M045": {
        name: "Umm e Habiba",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Umm+e",
        bio: "<p>Umm e Habiba is a developer in the Web & App team who is passionate about accessibility. She is a strong advocate for building websites and applications that are usable by everyone, regardless of their abilities. Umm e Habiba is knowledgeable about WCAG guidelines and ARIA attributes.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Web Accessibility", "WCAG", "ARIA", "Semantic HTML", "Screen Readers"],
        achievements: ["Conducted an accessibility audit of the chapter's website and identified areas for improvement", "Presented a workshop on inclusive design"],
        email: "umme.habiba@gdgwah.dev",
        phone: "+92-339-7788990",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M046": {
        name: "Tayyab Abdullah",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Tayyab",
        bio: "<p>Tayyab Abdullah is a developer in the Web & App team with an interest in cybersecurity. He is learning about common web vulnerabilities and how to write secure code. Tayyab is passionate about protecting applications from malicious attacks.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Cybersecurity", "Secure Coding", "OWASP Top 10", "Penetration Testing"],
        achievements: ["Identified and fixed a security vulnerability in a team project", "Participated in a capture the flag (CTF) competition"],
        email: "tayyab.abdullah@gdgwah.dev",
        phone: "+92-340-8899001",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M047": {
        name: "Faizan Ahmed",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Faizan",
        bio: "<p>Faizan Ahmed is a developer in the Web & App team who is passionate about performance optimization. He enjoys finding ways to make websites and applications faster and more efficient. Faizan is knowledgeable about techniques like code splitting, lazy loading, and caching.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Web Performance", "Code Optimization", "Caching", "Page Speed Insights"],
        achievements: ["Improved the load time of a website by 50%", "Wrote a blog post on front-end performance best practices"],
        email: "faizan.ahmed@gdgwah.dev",
        phone: "+92-341-9900112",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M048": {
        name: "Fatima Safeer",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Fatima",
        bio: "<p>Fatima Safeer is a developer in the Web & App team with a talent for writing clean and maintainable code. She is a strong advocate for following best practices and writing code that is easy for others to understand and contribute to. Fatima is proficient in using linters and formatters to ensure code quality.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Clean Code", "Software Design Patterns", "Code Quality", "Testing"],
        achievements: ["Refactored a large codebase to improve its readability and maintainability", "Introduced a style guide for a team project"],
        email: "fatima.safeer@gdgwah.dev",
        phone: "+92-342-0011223",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M049": {
        name: "Muhammad Sami",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Sami is a developer in the Web & App team who enjoys working with APIs. He has experience consuming and building RESTful APIs and is learning about GraphQL. Sami is passionate about creating well-designed APIs that are easy for other developers to use.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["API Development", "REST", "GraphQL", "Postman", "API Documentation"],
        achievements: ["Built a REST API for a to-do list application", "Wrote comprehensive documentation for an API using Swagger"],
        email: "muhammad.sami@gdgwah.dev",
        phone: "+92-343-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M050": {
        name: "Anosh Niazi",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Anosh",
        bio: "<p>Anosh Niazi is a developer in the Web & App team with a passion for learning new things. He is a self-starter who is always exploring new technologies and frameworks. Anosh is currently learning about WebAssembly and its potential to bring high-performance computing to the web.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Continuous Learning", "WebAssembly", "Rust", "Problem Solving"],
        achievements: ["Built a simple 'Hello, World!' application in WebAssembly", "Constantly reading tech blogs and watching conference talks to stay up-to-date"],
        email: "anosh.niazi@gdgwah.dev",
        phone: "+92-344-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M051": {
        name: "Syed Jarrar",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Syed",
        bio: "<p>Syed Jarrar is a developer in the Web & App team who enjoys working on open-source projects. He is an active contributor to the open-source community and has submitted pull requests to several popular repositories. Jarrar is passionate about collaboration and believes in the power of open source to drive innovation.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Open Source", "Git", "GitHub", "Collaboration", "Community"],
        achievements: ["Contributed to a popular open-source JavaScript library", "Helped a newcomer make their first open-source contribution"],
        email: "syed.jarrar@gdgwah.dev",
        phone: "+92-345-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "github", url: "#" }]
    },
    "GDG-M052": {
        name: "Jawad Ahmed",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Jawad",
        bio: "<p>Jawad Ahmed is a developer in the Web & App team who is passionate about writing automated tests. He is a strong advocate for test-driven development (TDD) and believes that writing tests leads to higher-quality code. Jawad is proficient in using testing frameworks like Jest and Cypress.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Automated Testing", "TDD", "Jest", "Cypress", "Quality Assurance"],
        achievements: ["Increased the test coverage of a project from 20% to 80%", "Wrote end-to-end tests to catch bugs before they reached production"],
        email: "jawad.ahmed@gdgwah.dev",
        phone: "+92-346-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M053": {
        name: "Wamiq Abdullah",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Wamiq",
        bio: "<p>Wamiq Abdullah is a developer in the Web & App team with a strong interest in functional programming. He enjoys writing code that is declarative, predictable, and easy to reason about. Wamiq is learning about functional programming concepts like immutability, pure functions, and higher-order functions.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Functional Programming", "JavaScript", "Elm", "PureScript"],
        achievements: ["Refactored a complex piece of imperative code into a more functional style", "Exploring the benefits of functional programming for front-end development"],
        email: "wamiq.abdullah@gdgwah.dev",
        phone: "+92-347-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M054": {
        name: "Mariyam Munir",
        role: "Social Media & Marketing Member",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Mariyam",
        bio: "<p>Mariyam Munir is a creative and strategic member of the Social Media & Marketing team. She excels at crafting engaging content and building online communities. Mariyam is responsible for managing several of the chapter's social media channels, where she has successfully increased follower engagement and event attendance through her innovative campaigns.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Content Strategy", "Social Media Analytics", "Community Management", "Copywriting"],
        achievements: ["Increased Instagram engagement by 50%", "Managed the live-tweeting for a major tech conference", "Wrote a series of successful blog posts promoting GDG events"],
        email: "mariyam.munir@gdgwah.dev",
        phone: "+92-345-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "twitter", url: "#" }]
    },
    "GDG-M055": {
        name: "Tashfeen Liaquat",
        role: "Social Media & Marketing Member",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Tashfeen",
        bio: "<p>Tashfeen Liaquat is a results-driven member of the Social Media & Marketing team. He has a talent for search engine optimization (SEO) and helps to ensure that the chapter's online content is discoverable. Tashfeen is always looking for new ways to improve the chapter's search rankings and drive organic traffic.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["SEO", "Keyword Research", "Link Building", "Google Analytics"],
        achievements: ["Improved the chapter's search ranking for key terms", "Drove a 30% increase in organic traffic to the website"],
        email: "tashfeen.liaquat2@gdgwah.dev",
        phone: "+92-346-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M056": {
        name: "M Baseer",
        role: "Social Media & Marketing Member",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=M+Baseer",
        bio: "<p>M Baseer is a member of the Social Media & Marketing team who specializes in email marketing. He designs and writes compelling email newsletters to keep the community informed about upcoming events and news. Baseer is passionate about building relationships with members through personalized and valuable content.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Email Marketing", "Copywriting", "Mailchimp", "A/B Testing"],
        achievements: ["Grew the chapter's email list by 20%", "Achieved a 40% open rate on his email campaigns"],
        email: "m.baseer@gdgwah.dev",
        phone: "+92-347-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M057": {
        name: "Elma Shah",
        role: "Social Media & Marketing Member",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Elma",
        bio: "<p>Elma Shah is a member of the Social Media & Marketing team with a passion for video content creation. She produces engaging videos to promote the chapter's events and showcase its culture. Elma is proficient in video editing software and is always looking for new ways to tell stories through video.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Video Production", "Video Editing", "Storytelling", "Adobe Premiere Pro"],
        achievements: ["Created a promotional video that received over 10,000 views", "Produced a series of interview videos with industry professionals"],
        email: "elma.shah@gdgwah.dev",
        phone: "+92-348-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "youtube", url: "#" }]
    },
    "GDG-M058": {
        name: "Abdullah Amir",
        role: "Social Media & Marketing Member",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Abdullah",
        bio: "<p>Abdullah Amir is a member of the Social Media & Marketing team who enjoys interacting with the community online. He is responsible for responding to comments and messages on social media, fostering a sense of community and engagement. Abdullah is a friendly and approachable representative of the chapter.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Community Management", "Customer Service", "Social Media Engagement", "Communication"],
        achievements: ["Maintained a positive and welcoming online environment", "Helped to resolve member queries in a timely manner"],
        email: "abdullah.amir@gdgwah.dev",
        phone: "+92-349-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M059": {
        name: "Mohsin Shakeel",
        role: "Social Media & Marketing Member",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Mohsin",
        bio: "<p>Mohsin Shakeel is a member of the Social Media & Marketing team who is passionate about public relations. He works to build relationships with local media and influencers to increase the chapter's visibility. Mohsin is a strong communicator and enjoys telling the chapter's story to a wider audience.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Public Relations", "Media Outreach", "Press Releases", "Storytelling"],
        achievements: ["Secured media coverage for a major chapter event", "Built a network of contacts in the local tech community"],
        email: "mohsin.shakeel@gdgwah.dev",
        phone: "+92-350-6677889",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "twitter", url: "#" }]
    },
    "GDG-M060": {
        name: "Kiran Yameen",
        role: "Media & Graphics Member",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Kiran",
        bio: "<p>Kiran Yameen is a talented designer in the Media & Graphics team. She has a strong eye for detail and a passion for creating visually compelling graphics for social media, event posters, and presentations. Kiran is proficient in Adobe Photoshop and Illustrator and enjoys turning ideas into beautiful designs.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Graphic Design", "Adobe Photoshop", "Adobe Illustrator", "Typography"],
        achievements: ["Designed posters for five major events", "Created a new set of social media templates for the chapter", "Received 'Designer of the Month' award"],
        email: "kiran.yameen@gdgwah.dev",
        phone: "+92-346-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "behance", url: "#" }]
    },
    "GDG-M061": {
        name: "Ali Hassan",
        role: "Media & Graphics Member",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Ali",
        bio: "<p>Ali Hassan is a creative member of the Media & Graphics team who specializes in video production and editing. He has a talent for storytelling and enjoys creating engaging video content to promote the chapter's events and activities. Ali is proficient in Adobe Premiere Pro and After Effects.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Video Production", "Video Editing", "Motion Graphics", "Adobe Premiere Pro", "After Effects"],
        achievements: ["Produced a series of highlight reels for past events", "Created an animated intro for the chapter's YouTube channel"],
        email: "ali.hassan@gdgwah.dev",
        phone: "+92-347-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "youtube", url: "#" }]
    },
    "GDG-M062": {
        name: "Laiba Ishfaq",
        role: "Media & Graphics Member",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Laiba",
        bio: "<p>Laiba Ishfaq is a member of the Media & Graphics team with a passion for photography. She captures high-quality photos of the chapter's events, showcasing the energy and excitement of the community. Laiba has a keen eye for composition and lighting.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Photography", "Photo Editing", "Adobe Lightroom", "Event Photography"],
        achievements: ["Served as the official photographer for a major conference", "Created a stunning photo gallery for the chapter's website"],
        email: "laiba.ishfaq@gdgwah.dev",
        phone: "+92-348-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "instagram", url: "#" }]
    },
    "GDG-M063": {
        name: "Sumayya Aamir",
        role: "Media & Graphics Member",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Sumayya",
        bio: "<p>Sumayya Aamir is a member of the Media & Graphics team who enjoys creating illustrations and custom graphics. She has a unique artistic style and brings a creative flair to the team's projects. Sumayya is proficient in Procreate and other digital illustration tools.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Illustration", "Digital Art", "Procreate", "Character Design"],
        achievements: ["Created a series of custom illustrations for the chapter's blog", "Designed a mascot for the GDG chapter"],
        email: "sumayya.aamir@gdgwah.dev",
        phone: "+92-349-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }, { type: "dribbble", url: "#" }]
    },
    "GDG-M064": {
        name: "Ayiaza Mudassar",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ayiaza",
        bio: "<p>Ayiaza Mudassar is a key member of the Event Management team, helping to organize successful events from start to finish. She is highly organized and excels at coordinating logistics, managing schedules, and ensuring that everything runs smoothly on event day. Ayiaza is passionate about creating memorable experiences for the community.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Event Planning", "Logistics Coordination", "Time Management", "Problem Solving"],
        achievements: ["Assisted in the planning of a 2-day conference", "Managed the volunteer team for a recent workshop", "Received positive feedback for her organizational skills"],
        email: "ayiaza.mudassar@gdgwah.dev",
        phone: "+92-347-3344556",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M065": {
        name: "Tania Khan",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Tania",
        bio: "<p>Tania Khan is a member of the Event Management team who excels at building relationships with speakers and sponsors. She is a strong communicator and enjoys networking with industry professionals. Tania plays a crucial role in securing high-quality speakers and sponsors for the chapter's events.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Speaker Outreach", "Sponsorship Acquisition", "Networking", "Relationship Building"],
        achievements: ["Secured a keynote speaker from a leading tech company", "Brought in three new sponsors for a recent event"],
        email: "tania.khan@gdgwah.dev",
        phone: "+92-348-4455667",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M066": {
        name: "Hoorain Malik",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Hoorain",
        bio: "<p>Hoorain Malik is a member of the Event Management team with a passion for creating engaging and interactive experiences for attendees. She is full of creative ideas and enjoys planning activities that go beyond the traditional tech talk format. Hoorain is always looking for new ways to make events more fun and memorable.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Event Experience Design", "Gamification", "Interactive Activities", "Creative Thinking"],
        achievements: ["Organized a live coding competition with prizes", "Planned a networking session with icebreaker activities"],
        email: "hoorain.malik@gdgwah.dev",
        phone: "+92-349-5566778",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M067": {
        name: "Muqaddas Uroush",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Muqaddas",
        bio: "<p>Muqaddas Uroush is a member of the Event Management team who is responsible for managing the event budget. She is detail-oriented and ensures that all expenses are tracked and accounted for. Muqaddas is skilled at finding cost-effective solutions without compromising on the quality of the event.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Budget Management", "Financial Planning", "Cost Control", "Negotiation"],
        achievements: ["Managed the budget for a large-scale event and came in under budget", "Negotiated with vendors to get the best prices"],
        email: "muqaddas.uroush@gdgwah.dev",
        phone: "+92-350-6677889",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M068": {
        name: "Muhammad Talal",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Talal is a member of the Event Management team who excels at on-site logistics and operations. He is a calm and collected problem-solver who can handle any challenges that arise on the day of the event. Talal ensures that everything runs smoothly from setup to teardown.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["On-Site Management", "Problem Solving", "Crisis Management", "Logistics"],
        achievements: ["Managed the registration desk and check-in process for over 500 attendees", "Quickly resolved a technical issue with the audiovisual equipment"],
        email: "muhammad.talal@gdgwah.dev",
        phone: "+92-351-7788990",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M069": {
        name: "Muhammad",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad is a member of the Event Management team who is responsible for post-event follow-up. He sends out thank you notes to speakers and sponsors, collects feedback from attendees, and compiles a post-event report. Muhammad plays a crucial role in ensuring that the chapter learns from each event and continues to improve.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Post-Event Analysis", "Feedback Collection", "Reporting", "Communication"],
        achievements: ["Created a post-event survey that received a 70% response rate", "Wrote a detailed report with key takeaways and recommendations for future events"],
        email: "muhammad@gdgwah.dev",
        phone: "+92-352-8899001",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M070": {
        name: "Altamash Khan",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Altamash",
        bio: "<p>Altamash Khan is a member of the Event Management team with a passion for virtual events. He is exploring new platforms and technologies to create engaging and interactive online experiences. Altamash believes that virtual events can be just as impactful as in-person events if they are well-planned and executed.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Virtual Events", "Online Engagement", "Streaming Platforms", "Digital Marketing"],
        achievements: ["Organized a successful online workshop with over 200 attendees", "Experimenting with virtual reality for networking sessions"],
        email: "altamash.khan@gdgwah.dev",
        phone: "+92-353-9900112",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M071": {
        name: "Fizza Batool",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fizza",
        bio: "<p>Fizza Batool is a member of the Event Management team who is responsible for volunteer management. She recruits, trains, and manages a team of volunteers to help with the chapter's events. Fizza is a strong leader who is passionate about creating a positive and rewarding experience for volunteers.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Volunteer Management", "Leadership", "Training", "Team Building"],
        achievements: ["Recruited a team of 50 volunteers for a major conference", "Developed a training program for new volunteers"],
        email: "fizza.batool@gdgwah.dev",
        phone: "+92-354-0011223",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M072": {
        name: "Zoha Hussain",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Zoha",
        bio: "<p>Zoha Hussain is a member of the Event Management team with a talent for creating beautiful and inviting event spaces. She has a strong sense of aesthetics and enjoys decorating venues to create a memorable atmosphere. Zoha is passionate about making events feel special and unique.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Computer Science",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Event Decor", "Interior Design", "Aesthetics", "Creative Thinking"],
        achievements: ["Transformed a plain lecture hall into a vibrant and engaging event space", "Received numerous compliments on her decor from attendees"],
        email: "zoha.hussain@gdgwah.dev",
        phone: "+92-355-1122334",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    },
    "GDG-M073": {
        name: "Malik Muneeb",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Malik",
        bio: "<p>Malik Muneeb is a member of the Event Management team who is passionate about sustainability. He is always looking for ways to make the chapter's events more environmentally friendly. Muneeb is a strong advocate for reducing waste and promoting sustainable practices.</p>",
        joiningDate: "2025-09-11",
        membershipStatus: "Active",
        membershipType: "Team Member",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        university: "Comsats University Islamabd, Wah Campus",
        expertise: ["Sustainability", "Green Events", "Waste Reduction", "Environmental Awareness"],
        achievements: ["Implemented a recycling program at a recent event", "Partnered with a local organization to donate leftover food"],
        email: "malik.muneeb@gdgwah.dev",
        phone: "+92-356-2233445",
        location: "Wah Cantt, Pakistan",
        socials: [{ type: "linkedin", url: "#" }]
    }
};

// ========================================
// CENTRALIZED MEMBER MANAGEMENT FUNCTIONS
// ========================================

// Get members by role (for main homepage leadership display)
function getMembersByRole(...roles) {
    return Object.entries(membersData)
        .filter(([id, member]) => roles.includes(member.role))
        .map(([id, member]) => ({ id, ...member }));
}

// Get members by team (for team page display)
function getMembersByTeam(teamName) {
    return Object.entries(membersData)
        .filter(([id, member]) => member.team === teamName)
        .map(([id, member]) => ({ id, ...member }));
}

// Get all teams with their members
function getAllTeamsWithMembers() {
    const teams = {};
    Object.entries(membersData).forEach(([id, member]) => {
        if (!teams[member.team]) {
            teams[member.team] = [];
        }
        teams[member.team].push({ id, ...member });
    });
    return teams;
}

// Get specific member by ID
function getMemberById(memberId) {
    return membersData[memberId] ? { id: memberId, ...membersData[memberId] } : null;
}

// Get leadership members for homepage (Faculty Head, Campus Lead, Chairperson, Technical Lead)
function getLeadershipMembers() {
    return getMembersByRole('Faculty Head', 'Campus Lead', 'Chairperson', 'Technical Lead');
}

// Get team statistics
function getTeamStats() {
    const teams = getAllTeamsWithMembers();
    return {
        totalMembers: Object.keys(membersData).length,
        totalTeams: Object.keys(teams).length,
        teamBreakdown: Object.entries(teams).map(([teamName, members]) => ({
            team: teamName,
            count: members.length
        }))
    };
}

// Format date helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Calculate membership duration
function getMembershipDuration(joiningDate) {
    const joinDate = new Date(joiningDate);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - joinDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) {
        return `${diffYears} year${diffYears > 1 ? 's' : ''}`;
    } else if (diffMonths > 0) {
        return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    } else {
        return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
    }
}

// ========================================
// DYNAMIC CONTENT LOADING FUNCTIONS
// ========================================

// Load leadership team for main homepage (only 4 members)
function loadHomepageLeadership() {
    const teamContainer = document.querySelector('#team .grid');
    if (!teamContainer) return;

    const leadership = getLeadershipMembers();
    const colorClasses = [
        { bg: 'C4D7FE', color: '4285F4', textColor: 'blue-600' },
        { bg: 'F8DDC4', color: 'DB4437', textColor: 'red-600' },
        { bg: 'FDEBC4', color: 'F4B400', textColor: 'yellow-600' },
        { bg: 'C4E8D8', color: '0F9D58', textColor: 'green-600' }
    ];

    teamContainer.innerHTML = '';

    leadership.slice(0, 4).forEach((member, index) => {
        const colorClass = colorClasses[index] || colorClasses[0];
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member text-center p-4';
        memberElement.innerHTML = `
            <img src="https://placehold.co/200x200/${colorClass.bg}/${colorClass.color}?text=${encodeURIComponent(member.name.split(' ')[0])}" 
                 class="w-40 h-40 mx-auto rounded-full shadow-lg" alt="${member.name}">
            <h3 class="mt-4 text-xl font-bold">${member.name}</h3>
            <p class="text-${colorClass.textColor} font-semibold">${member.role}</p>
        `;
        teamContainer.appendChild(memberElement);
    });
}

// Load all teams for members page
function loadAllTeams() {
    const teamsContainer = document.querySelector('.container.mx-auto.px-6.max-w-6xl');
    if (!teamsContainer) return;

    const teams = getAllTeamsWithMembers();
    const teamOrder = ['Executives', 'AI & DS', 'Web & App', 'Social Media & Marketing', 'Media & Graphics', 'Event & Decor'];
    const colorClasses = ['blue', 'green', 'red', 'yellow', 'purple', 'indigo'];

    // Clear existing content
    teamsContainer.innerHTML = '';

    teamOrder.forEach((teamName, index) => {
        if (!teams[teamName] || teams[teamName].length === 0) return;

        const colorClass = colorClasses[index % colorClasses.length];
        const teamContainer = document.createElement('div');
        teamContainer.className = 'team-category-container mb-12';

        teamContainer.innerHTML = `
            <div class="team-category-header category-expanded cursor-pointer">
                <i data-lucide="chevron-right" class="category-icon text-${colorClass}-500 transition-transform duration-300"></i>
                <h2 class="text-3xl font-bold text-gray-800">${teamName}</h2>
                <span class="ml-auto bg-${colorClass}-100 text-${colorClass}-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ${teams[teamName].length} member${teams[teamName].length > 1 ? 's' : ''}
                </span>
            </div>
            <div class="team-category-content expanded">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                    ${teams[teamName].map(member => `
                        <div class="member-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border hover:border-${colorClass}-200" data-member-id="${member.id}">
                            <div class="p-6 text-center">
                                <img src="${member.imageUrl}" class="w-20 h-20 mx-auto rounded-full shadow-md mb-4" alt="${member.name}">
                                <h3 class="font-bold text-gray-800 mb-1">${member.name}</h3>
                                <p class="text-${colorClass}-600 font-medium text-sm mb-2">${member.role}</p>
                                <div class="flex justify-center space-x-2 text-xs text-gray-500">
                                    <span class="bg-gray-100 px-2 py-1 rounded">${member.membershipType}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
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
    attachTeamEventHandlers();
}

// Attach event handlers for team page
function attachTeamEventHandlers() {
    // Category toggle functionality
    document.querySelectorAll('.team-category-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.category-icon');

            header.classList.toggle('category-expanded');
            content.classList.toggle('expanded');

            if (header.classList.contains('category-expanded')) {
                icon.style.transform = 'rotate(90deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Member card click handler
    document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', () => {
            const memberId = card.dataset.memberId;
            window.location.href = `/members/member?id=${memberId}`;
        });
    });
}

// Initialize content based on current page
function initializeDynamicContent() {
    // Check if we're on the main homepage
    if (document.querySelector('#team .grid')) {
        loadHomepageLeadership();
    }

    // Check if we're on the members page
    if (document.querySelector('.container.mx-auto.px-6.max-w-6xl') && (window.location.pathname.includes('/members') || window.location.pathname.includes('/teams'))) {
        loadAllTeams();
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDynamicContent);
} else {
    initializeDynamicContent();
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        membersData,
        getMembersByRole,
        getMembersByTeam,
        getAllTeamsWithMembers,
        getMemberById,
        getLeadershipMembers,
        getTeamStats,
        formatDate,
        getMembershipDuration
    };
}

