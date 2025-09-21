// js/members-data.js
// Centralized member data - Single source of truth for all pages

const membersData = {
    // Executives Team
    "GDG-M001": {
        name: "Dr. Kashif Ayub",
        role: "Faculty Head",
        team: "Executives",
        specialRole: "Faculty Head", // For main page display
        imageUrl: "/assets/images/GDG-M001.jpg",
        email: "kashif.ayub@wahcampus.edu.pk",
        phone: "+92-300-1234567",
        joiningDate: "2023-01-15",
        membershipStatus: "Active",
        membershipType: "Faculty Advisor",
        club: "GDG Wah Campus",
        department: "Computer Science",
        qualification: "PhD in Computer Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Dr. Kashif Ayub is a distinguished faculty member and the visionary leader behind GDG Wah Campus. With over 10 years of experience in computer science education and research, he has dedicated his career to fostering innovation and technical excellence among students.</p><p>His expertise spans across software engineering, artificial intelligence, and educational technology. Dr. Ayub believes in the power of community-driven learning and has been instrumental in establishing various tech initiatives at the university.</p><p>Under his leadership, GDG Wah Campus has grown into a thriving community of developers, innovators, and tech enthusiasts, creating opportunities for students to engage with cutting-edge technologies and industry experts.</p>",
        skills: ["Leadership", "Research", "AI/ML", "Software Engineering", "Academic Mentoring"],
        interests: ["Artificial Intelligence", "Educational Technology", "Research Methodology", "Community Building"],
        achievements: [
            "Established GDG Wah Campus chapter",
            "Published 25+ research papers in AI",
            "Supervised 50+ student projects",
            "Organized 10+ tech conferences"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/kashif-ayub" },
            { type: "github", url: "https://github.com/kashif-ayub" },
            { type: "twitter", url: "https://twitter.com/kashif_ayub" }
        ]
    },
    "GDG-M002": {
        name: "Ubaid ur Rehman",
        role: "Campus Lead",
        team: "Executives",
        specialRole: "Campus Lead", // For main page display
        imageUrl: "/assets/images/GDG-M002.jpg",
        email: "ubaid.rehman@gdgwah.com",
        phone: "+92-300-2345678",
        joiningDate: "2023-02-01",
        membershipStatus: "Active",
        membershipType: "Core Team",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        qualification: "BS Software Engineering",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Ubaid ur Rehman is a passionate technology enthusiast and skilled software developer who serves as the Campus Lead for GDG Wah Campus. With a strong foundation in full-stack development and leadership, he bridges the gap between faculty vision and student execution.</p><p>His technical expertise includes modern web technologies, cloud platforms, and mobile development. Ubaid is known for his hands-on approach to learning and his ability to mentor fellow students in complex technical concepts.</p><p>As Campus Lead, he coordinates with Google Developer Expert networks, organizes technical workshops, and ensures that GDG Wah Campus remains aligned with global Google Developer Group standards and practices.</p>",
        skills: ["Full-Stack Development", "Leadership", "Project Management", "Cloud Computing", "Mentoring"],
        interests: ["Web Development", "Cloud Technologies", "Open Source", "Team Leadership"],
        achievements: [
            "Led 15+ successful workshops",
            "Mentored 100+ students",
            "Organized Google I/O Extended events",
            "Developed GDG community platform"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/ubaid-rehman" },
            { type: "github", url: "https://github.com/ubaid-rehman" },
            { type: "twitter", url: "https://twitter.com/ubaid_rehman" }
        ]
    },
    "GDG-M003": {
        name: "Fakhir Hassan",
        role: "Chair Person",
        team: "Executives",
        specialRole: "Chair Person", // For main page display
        imageUrl: "/assets/images/GDG-M003.jpg",
        email: "fakhir.hassan@gdgwah.com",
        phone: "+92-300-3456789",
        joiningDate: "2023-02-15",
        membershipStatus: "Active",
        membershipType: "Executive",
        club: "GDG Wah Campus",
        department: "Computer Science",
        qualification: "BS Computer Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Fakhir Hassan brings exceptional organizational skills and strategic thinking to his role as Chair Person of GDG Wah Campus. With a background in computer science and a passion for community development, he ensures smooth operations and strategic alignment of all GDG activities.</p><p>His strengths lie in event management, stakeholder coordination, and creating sustainable processes that help the community grow and thrive. Fakhir is particularly skilled at building partnerships and maintaining relationships with industry partners.</p><p>Under his chairmanship, GDG Wah Campus has established strong connections with tech companies, improved event quality, and created structured pathways for member growth and development.</p>",
        skills: ["Strategic Planning", "Event Management", "Partnership Development", "Process Optimization", "Communication"],
        interests: ["Strategic Management", "Community Development", "Technology Trends", "Partnership Building"],
        achievements: [
            "Established 5+ industry partnerships",
            "Streamlined GDG operations",
            "Organized major tech conferences",
            "Increased membership by 200%"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/fakhir-hassan" },
            { type: "github", url: "https://github.com/fakhir-hassan" }
        ]
    },
    "GDG-M004": {
        name: "Saad Ali",
        role: "Technical Lead",
        team: "Executives",
        specialRole: "Technical Lead", // For main page display
        imageUrl: "/assets/images/GDG-M004.jpg",
        email: "saad.ali@gdgwah.com",
        phone: "+92-300-4567890",
        joiningDate: "2023-03-01",
        membershipStatus: "Active",
        membershipType: "Technical Lead",
        club: "GDG Wah Campus",
        department: "Artificial Intelligence",
        qualification: "MS Artificial Intelligence",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Saad Ali is a brilliant technologist and AI specialist who serves as the Technical Lead for GDG Wah Campus. With deep expertise in artificial intelligence, machine learning, and modern software development practices, he guides the technical direction of the community.</p><p>His research interests include deep learning, computer vision, and natural language processing. Saad is passionate about making complex AI concepts accessible to students and regularly conducts workshops on cutting-edge technologies.</p><p>As Technical Lead, he ensures that GDG Wah Campus stays current with the latest Google technologies, coordinates technical content for events, and provides technical mentorship to community members pursuing advanced projects.</p>",
        skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python", "TensorFlow", "Technical Leadership"],
        interests: ["AI Research", "Computer Vision", "NLP", "MLOps", "Technical Innovation"],
        achievements: [
            "Published AI research papers",
            "Developed ML models for 10+ projects",
            "Conducted 20+ AI workshops",
            "Mentored students in Google Summer of Code"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/saad-ali-ai" },
            { type: "github", url: "https://github.com/saad-ali" },
            { type: "twitter", url: "https://twitter.com/saad_ali_ai" }
        ]
    },
    "GDG-M005": {
        name: "Fatima Khan",
        role: "Community Manager",
        team: "Executives",
        imageUrl: "/assets/images/GDG-M005.jpg",
        email: "fatima.khan@gdgwah.com",
        phone: "+92-300-5678901",
        joiningDate: "2023-03-15",
        membershipStatus: "Active",
        membershipType: "Core Team",
        club: "GDG Wah Campus",
        department: "Computer Science",
        qualification: "BS Computer Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Fatima Khan is the vibrant force behind GDG Wah Campus's community engagement and member experience. With exceptional communication skills and a deep understanding of community dynamics, she ensures every member feels valued and connected.</p><p>Her background in psychology and computer science gives her a unique perspective on building inclusive tech communities. Fatima is particularly passionate about promoting diversity and creating safe spaces for underrepresented groups in technology.</p><p>Through her efforts, GDG Wah Campus has developed strong community bonds, effective communication channels, and programs that support members at every stage of their technical journey.</p>",
        skills: ["Community Building", "Communication", "Event Coordination", "Diversity & Inclusion", "Social Media Management"],
        interests: ["Community Psychology", "Diversity in Tech", "Digital Marketing", "Educational Psychology"],
        achievements: [
            "Increased community engagement by 300%",
            "Launched diversity initiatives",
            "Organized 25+ networking events",
            "Built community mentorship programs"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/fatima-khan" },
            { type: "instagram", url: "https://instagram.com/fatima_gdg" },
            { type: "twitter", url: "https://twitter.com/fatima_khan" }
        ]
    },

    // AI & DS Team
    "GDG-M006": {
        name: "Ahmad Raza",
        role: "AI Lead",
        team: "AI & DS",
        imageUrl: "/assets/images/GDG-M006.jpg",
        email: "ahmad.raza@gdgwah.com",
        phone: "+92-300-6789012",
        joiningDate: "2023-04-01",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Data Science",
        qualification: "MS Data Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Ahmad Raza leads the AI & Data Science initiatives at GDG Wah Campus with expertise in machine learning algorithms and data analytics. He specializes in developing practical AI solutions and teaching complex concepts in an accessible manner.</p><p>With experience in both academic research and industry applications, Ahmad brings a balanced perspective to AI education. He's particularly interested in the ethical implications of AI and ensuring responsible development practices.</p>",
        skills: ["Machine Learning", "Data Analysis", "Python", "R", "TensorFlow", "Research"],
        interests: ["AI Ethics", "Predictive Analytics", "Computer Vision", "Research Methodology"],
        achievements: [
            "Published 5 research papers",
            "Led 12 AI workshops",
            "Mentored 30+ students in ML projects",
            "Developed university's AI curriculum"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/ahmad-raza" },
            { type: "github", url: "https://github.com/ahmad-raza" }
        ]
    },
    "GDG-M007": {
        name: "Hina Tariq",
        role: "Data Science Core",
        team: "AI & DS",
        imageUrl: "/assets/images/GDG-M007.jpg",
        email: "hina.tariq@gdgwah.com",
        phone: "+92-300-7890123",
        joiningDate: "2023-04-15",
        membershipStatus: "Active",
        membershipType: "Core Member",
        club: "GDG Wah Campus",
        department: "Statistics",
        qualification: "MS Statistics",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Hina Tariq brings strong statistical foundations and data visualization expertise to the GDG Wah Campus AI & DS team. Her background in mathematics and statistics makes her excellent at explaining complex analytical concepts to beginners.</p><p>She specializes in data preprocessing, statistical modeling, and creating compelling data visualizations that tell meaningful stories from raw data.</p>",
        skills: ["Statistics", "Data Visualization", "R", "Python", "SQL", "Tableau"],
        interests: ["Statistical Modeling", "Data Storytelling", "Business Analytics", "Visualization Design"],
        achievements: [
            "Created data science bootcamp curriculum",
            "Led 8 data visualization workshops",
            "Analyzed data for 15+ student projects",
            "Won university data science competition"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/hina-tariq" }
        ]
    },
    "GDG-M008": {
        name: "Bilal Mahmood",
        role: "ML Engineer",
        team: "AI & DS",
        imageUrl: "/assets/images/GDG-M008.jpg",
        email: "bilal.mahmood@gdgwah.com",
        phone: "+92-300-8901234",
        joiningDate: "2023-05-01",
        membershipStatus: "Active",
        membershipType: "Technical Member",
        club: "GDG Wah Campus",
        department: "Computer Engineering",
        qualification: "BS Computer Engineering",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Bilal Mahmood is passionate about implementing machine learning solutions and deploying AI models in production environments. He focuses on the practical aspects of ML engineering and MLOps practices.</p><p>His expertise in both software engineering and machine learning makes him valuable for bridging the gap between research and production-ready solutions.</p>",
        skills: ["MLOps", "Docker", "Kubernetes", "Cloud Computing", "Model Deployment", "Python"],
        interests: ["ML Engineering", "Cloud Computing", "DevOps", "Scalable Systems"],
        achievements: [
            "Deployed 10+ ML models to production",
            "Built GDG's ML pipeline infrastructure",
            "Conducted MLOps workshops",
            "Contributed to open-source ML tools"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/bilal-mahmood" },
            { type: "github", url: "https://github.com/bilal-mahmood" }
        ]
    },
    "GDG-M009": {
        name: "Aisha Malik",
        role: "Research Associate",
        team: "AI & DS",
        imageUrl: "/assets/images/GDG-M009.jpg",
        email: "aisha.malik@gdgwah.com",
        phone: "+92-300-9012345",
        joiningDate: "2023-05-15",
        membershipStatus: "Active",
        membershipType: "Research Member",
        club: "GDG Wah Campus",
        department: "Mathematics",
        qualification: "MS Applied Mathematics",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Aisha Malik contributes strong mathematical foundations to AI research projects at GDG Wah Campus. Her expertise in applied mathematics and optimization theory helps in developing efficient algorithms and understanding the theoretical aspects of machine learning.</p><p>She is particularly interested in the mathematical underpinnings of deep learning and optimization techniques for neural networks.</p>",
        skills: ["Applied Mathematics", "Optimization", "Neural Networks", "Algorithm Design", "Mathematical Modeling"],
        interests: ["Mathematical Optimization", "Deep Learning Theory", "Numerical Analysis", "Algorithm Research"],
        achievements: [
            "Co-authored 3 research papers",
            "Developed optimization algorithms",
            "Taught mathematical foundations workshops",
            "Participated in international math competitions"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/aisha-malik" },
            { type: "github", url: "https://github.com/aisha-malik" }
        ]
    },
    "GDG-M010": {
        name: "Hassan Javed",
        role: "Data Analyst",
        team: "AI & DS",
        imageUrl: "/assets/images/GDG-M010.jpg",
        email: "hassan.javed@gdgwah.com",
        phone: "+92-300-0123456",
        joiningDate: "2023-06-01",
        membershipStatus: "Active",
        membershipType: "Analyst",
        club: "GDG Wah Campus",
        department: "Business Analytics",
        qualification: "BS Business Analytics",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Hassan Javed specializes in business intelligence and data analytics, helping organizations make data-driven decisions. His unique combination of business acumen and technical skills makes him excellent at translating business requirements into analytical solutions.</p><p>He focuses on practical applications of data science in business contexts and teaches others how to derive actionable insights from data.</p>",
        skills: ["Business Intelligence", "Excel", "Power BI", "SQL", "Data Mining", "Statistical Analysis"],
        interests: ["Business Analytics", "Market Research", "Financial Analysis", "Performance Metrics"],
        achievements: [
            "Analyzed data for 20+ business projects",
            "Created BI dashboards for local businesses",
            "Led business analytics workshops",
            "Developed GDG's analytics framework"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/hassan-javed" }
        ]
    },

    // Web & App Team
    "GDG-M011": {
        name: "Usman Cheema",
        role: "Web Lead",
        team: "Web & App",
        imageUrl: "/assets/images/GDG-M011.jpg",
        email: "usman.cheema@gdgwah.com",
        phone: "+92-300-1122334",
        joiningDate: "2023-06-15",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        qualification: "BS Software Engineering",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Usman Cheema leads the web development initiatives at GDG Wah Campus with expertise in modern web technologies and frameworks. He's passionate about creating responsive, accessible, and performant web applications.</p><p>His full-stack development skills and knowledge of modern development practices make him an excellent mentor for students learning web development. He regularly conducts workshops on React, Node.js, and web best practices.</p>",
        skills: ["React", "Node.js", "JavaScript", "TypeScript", "MongoDB", "GraphQL", "Web Performance"],
        interests: ["Modern Web Frameworks", "Web Performance", "Progressive Web Apps", "Web Accessibility"],
        achievements: [
            "Built 15+ web applications",
            "Led 20+ web development workshops",
            "Contributed to open-source projects",
            "Mentored 50+ students in web development"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/usman-cheema" },
            { type: "github", url: "https://github.com/usman-cheema" }
        ]
    },
    "GDG-M012": {
        name: "Zara Iqbal",
        role: "App Lead",
        team: "Web & App",
        imageUrl: "/assets/images/GDG-M012.jpg",
        email: "zara.iqbal@gdgwah.com",
        phone: "+92-300-2233445",
        joiningDate: "2023-07-01",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Mobile Development",
        qualification: "BS Computer Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Zara Iqbal specializes in mobile app development with expertise in both native and cross-platform development. She leads the mobile development team at GDG Wah Campus and is passionate about creating user-friendly mobile experiences.</p><p>Her experience with Flutter, React Native, and native Android development makes her a versatile mobile developer and excellent teacher for students interested in mobile app development.</p>",
        skills: ["Flutter", "React Native", "Android Development", "iOS Development", "Mobile UI/UX", "Firebase"],
        interests: ["Mobile Development", "Cross-platform Solutions", "Mobile UI/UX Design", "App Store Optimization"],
        achievements: [
            "Published 8 apps on Play Store",
            "Led mobile development bootcamps",
            "Won university app development competition",
            "Mentored students in Google Developer Challenge"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/zara-iqbal" },
            { type: "github", url: "https://github.com/zara-iqbal" }
        ]
    },
    "GDG-M013": {
        name: "Ali Hassan",
        role: "Frontend Developer",
        team: "Web & App",
        imageUrl: "/assets/images/GDG-M013.jpg",
        email: "ali.hassan@gdgwah.com",
        phone: "+92-300-3344556",
        joiningDate: "2023-07-15",
        membershipStatus: "Active",
        membershipType: "Developer",
        club: "GDG Wah Campus",
        department: "Web Development",
        qualification: "BS Information Technology",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Ali Hassan is a frontend developer specializing in creating beautiful and interactive user interfaces. He has a keen eye for design and excellent skills in modern CSS frameworks and JavaScript libraries.</p><p>His expertise in responsive design and modern frontend tools makes him valuable for creating engaging web experiences and teaching frontend development best practices.</p>",
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS", "SASS"],
        interests: ["Frontend Architecture", "CSS Animations", "Web Accessibility", "Design Systems"],
        achievements: [
            "Created 25+ responsive websites",
            "Contributed to design system development",
            "Led frontend workshops",
            "Won UI/UX design competition"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/ali-hassan-dev" },
            { type: "github", url: "https://github.com/ali-hassan" },
            { type: "dribbble", url: "https://dribbble.com/ali-hassan" }
        ]
    },
    "GDG-M014": {
        name: "Maria Ahmed",
        role: "Backend Developer",
        team: "Web & App",
        imageUrl: "/assets/images/GDG-M014.jpg",
        email: "maria.ahmed@gdgwah.com",
        phone: "+92-300-4455667",
        joiningDate: "2023-08-01",
        membershipStatus: "Active",
        membershipType: "Developer",
        club: "GDG Wah Campus",
        department: "Software Engineering",
        qualification: "BS Software Engineering",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Maria Ahmed is a backend developer with strong skills in server-side technologies and database design. She specializes in building scalable APIs and robust backend systems that power modern web applications.</p><p>Her expertise in microservices architecture and cloud technologies makes her excellent at teaching backend development concepts and best practices.</p>",
        skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "API Design"],
        interests: ["Microservices", "Database Optimization", "Cloud Architecture", "API Security"],
        achievements: [
            "Built 12+ scalable backend systems",
            "Optimized database performance for 20+ projects",
            "Led backend development workshops",
            "Contributed to open-source backend tools"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/maria-ahmed" },
            { type: "github", url: "https://github.com/maria-ahmed" }
        ]
    },
    "GDG-M015": {
        name: "Hamza Shah",
        role: "Full-Stack Developer",
        team: "Web & App",
        imageUrl: "/assets/images/GDG-M015.jpg",
        email: "hamza.shah@gdgwah.com",
        phone: "+92-300-5566778",
        joiningDate: "2023-08-15",
        membershipStatus: "Active",
        membershipType: "Developer",
        club: "GDG Wah Campus",
        department: "Computer Science",
        qualification: "BS Computer Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Hamza Shah is a versatile full-stack developer with experience across the entire web development stack. His ability to work seamlessly between frontend and backend technologies makes him valuable for end-to-end project development.</p><p>He's particularly skilled at teaching the connections between different parts of web applications and helping students understand the complete development lifecycle.</p>",
        skills: ["MERN Stack", "Django", "Vue.js", "PostgreSQL", "Redis", "DevOps", "Testing"],
        interests: ["Full-Stack Architecture", "DevOps", "Performance Optimization", "Test-Driven Development"],
        achievements: [
            "Developed 10+ full-stack applications",
            "Set up CI/CD pipelines for multiple projects",
            "Mentored junior developers",
            "Led full-stack development bootcamp"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/hamza-shah" },
            { type: "github", url: "https://github.com/hamza-shah" }
        ]
    },

    // Social Media & Marketing Team
    "GDG-M016": {
        name: "Ali Raza",
        role: "Marketing Lead",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/GDG-M016.jpg",
        email: "ali.raza@gdgwah.com",
        phone: "+92-300-6677889",
        joiningDate: "2023-09-01",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Marketing",
        qualification: "BS Marketing",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Ali Raza is a strategic marketer who leads the Social Media & Marketing team. He focuses on building the GDG Wah Campus brand, increasing community reach, and promoting events to a wider audience.</p><p>He is skilled in digital marketing strategies, content creation, and analytics, ensuring all marketing efforts are data-driven and effective.</p>",
        skills: ["Digital Marketing", "Brand Strategy", "Content Creation", "SEO", "Social Media Analytics"],
        interests: ["Brand Management", "Digital Advertising", "Community Engagement", "Marketing Trends"],
        achievements: [
            "Increased social media reach by 400%",
            "Developed successful marketing campaigns for 10+ events",
            "Established GDG Wah Campus brand identity",
            "Built a team of passionate marketers"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/ali-raza-mkt" },
            { type: "twitter", url: "https://twitter.com/ali_raza_mkt" }
        ]
    },
    "GDG-M017": {
        name: "Sana Ahmed",
        role: "Social Media Manager",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/GDG-M017.jpg",
        email: "sana.ahmed@gdgwah.com",
        phone: "+92-300-7788990",
        joiningDate: "2023-09-15",
        membershipStatus: "Active",
        membershipType: "Core Member",
        club: "GDG Wah Campus",
        department: "Communications",
        qualification: "BS Media Studies",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Sana Ahmed manages the day-to-day presence of GDG Wah Campus across all social media platforms. She is an expert in creating engaging content and fostering online conversations.</p><p>She has a knack for understanding audience behavior and tailoring content to different platforms to maximize engagement and impact.</p>",
        skills: ["Social Media Management", "Content Scheduling", "Community Engagement", "Copywriting", "Platform Analytics"],
        interests: ["Social Media Trends", "Digital Storytelling", "Online Community Building", "Visual Communication"],
        achievements: [
            "Grew Instagram followers by 5,000+",
            "Managed live social media coverage for all events",
            "Launched successful hashtag campaigns",
            "Maintained a 95% positive sentiment score online"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/sana-ahmed-social" },
            { type: "instagram", url: "https://instagram.com/sana_gdg" }
        ]
    },
    "GDG-M018": {
        name: "Omar Farooq",
        role: "Content Strategist",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/GDG-M018.jpg",
        email: "omar.farooq@gdgwah.com",
        phone: "+92-300-8899001",
        joiningDate: "2023-10-01",
        membershipStatus: "Active",
        membershipType: "Specialist",
        club: "GDG Wah Campus",
        department: "English Literature",
        qualification: "MA English Literature",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Omar Farooq is the mastermind behind the content strategy for GDG Wah Campus. He develops the editorial calendar, crafts compelling narratives, and ensures all content aligns with the GDG brand voice.</p><p>With a background in literature, he excels at storytelling and creating high-quality written content, from blog posts to social media captions.</p>",
        skills: ["Content Strategy", "Copywriting", "SEO", "Storytelling", "Editorial Planning", "Blogging"],
        interests: ["Brand Narrative", "Content Marketing", "Creative Writing", "Digital Publishing"],
        achievements: [
            "Developed a comprehensive content calendar",
            "Wrote 50+ blog posts on tech topics",
            "Improved website SEO ranking",
            "Standardized the brand's tone of voice"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/omar-farooq-content" },
            { type: "twitter", url: "https://twitter.com/omar_writes" }
        ]
    },
    "GDG-M019": {
        name: "Imaan Ali",
        role: "Community Engagement",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/GDG-M019.jpg",
        email: "imaan.ali@gdgwah.com",
        phone: "+92-300-9900112",
        joiningDate: "2023-10-15",
        membershipStatus: "Active",
        membershipType: "Coordinator",
        club: "GDG Wah Campus",
        department: "Sociology",
        qualification: "BS Sociology",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Imaan Ali focuses on building and nurturing the online community. She is the voice of GDG Wah Campus in online forums, social media comments, and direct messages, ensuring every interaction is positive and helpful.</p><p>She runs online contests, Q&A sessions, and other initiatives to keep the community active and engaged between events.</p>",
        skills: ["Community Management", "Public Relations", "Communication", "Customer Support", "Feedback Analysis"],
        interests: ["Online Communities", "Social Dynamics", "Brand Advocacy", "User Engagement"],
        achievements: [
            "Responded to 1,000+ community queries",
            "Organized 20+ online engagement activities",
            "Grew online forum membership by 150%",
            "Collected and synthesized community feedback"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/imaan-ali" }
        ]
    },
    "GDG-M020": {
        name: "Yasir Khan",
        role: "Digital Analyst",
        team: "Social Media & Marketing",
        imageUrl: "/assets/images/GDG-M020.jpg",
        email: "yasir.khan@gdgwah.com",
        phone: "+92-300-1122333",
        joiningDate: "2023-11-01",
        membershipStatus: "Active",
        membershipType: "Analyst",
        club: "GDG Wah Campus",
        department: "Statistics",
        qualification: "BS Statistics",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Yasir Khan is the data expert on the marketing team. He tracks, analyzes, and reports on the performance of all digital marketing campaigns and social media activities.</p><p>His insights help the team understand what works, optimize their strategies, and demonstrate the impact of their efforts through clear, data-backed reports.</p>",
        skills: ["Data Analysis", "Google Analytics", "Social Media Metrics", "Reporting", "Data Visualization", "A/B Testing"],
        interests: ["Marketing Analytics", "Data-Driven Strategy", "Performance Measurement", "Statistical Analysis"],
        achievements: [
            "Created a comprehensive marketing dashboard",
            "Improved campaign ROI by 30% through analysis",
            "Delivered monthly performance reports",
            "Identified key growth opportunities from data"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/yasir-khan-analytics" }
        ]
    },

    // Media & Graphics Team
    "GDG-M021": {
        name: "Danial Butt",
        role: "Graphics Lead",
        team: "Media & Graphics",
        imageUrl: "/assets/images/GDG-M021.jpg",
        email: "danial.butt@gdgwah.com",
        phone: "+92-301-2233444",
        joiningDate: "2023-09-05",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Fine Arts",
        qualification: "B.Des in Graphic Design",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Danial Butt leads the creative vision for GDG Wah Campus. As the Graphics Lead, he is responsible for all visual branding, design assets, and maintaining a consistent, high-quality aesthetic across all materials.</p><p>He is a master of design principles and software, mentoring his team to produce stunning visuals for events, social media, and the web.</p>",
        skills: ["Graphic Design", "Branding", "Adobe Creative Suite", "Typography", "Art Direction", "UI/UX Design"],
        interests: ["Visual Identity", "Design Systems", "Illustration", "User Interface Design", "Creative Leadership"],
        achievements: [
            "Redesigned the entire GDG Wah Campus brand identity",
            "Created design assets for 30+ events",
            "Mentored a team of 4 designers",
            "Won 'Best Design' award at a university competition"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/danial-butt-design" },
            { type: "dribbble", url: "https://dribbble.com/danialbutt" },
            { type: "behance", url: "https://www.behance.net/danialbutt" }
        ]
    },
    "GDG-M022": {
        name: "Amna Baig",
        role: "UI/UX Designer",
        team: "Media & Graphics",
        imageUrl: "/assets/images/GDG-M022.jpg",
        email: "amna.baig@gdgwah.com",
        phone: "+92-301-3344555",
        joiningDate: "2023-09-20",
        membershipStatus: "Active",
        membershipType: "Designer",
        club: "GDG Wah Campus",
        department: "Computer Science",
        qualification: "BS Computer Science",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Amna Baig specializes in creating intuitive and user-friendly digital experiences. She works closely with the Web & App team to design interfaces that are both beautiful and easy to use.</p><p>Her expertise lies in user research, wireframing, prototyping, and ensuring that all digital products are accessible and meet user needs.</p>",
        skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping", "Wireframing", "Accessibility"],
        interests: ["Human-Computer Interaction", "User-Centered Design", "Interaction Design", "Design Thinking"],
        achievements: [
            "Designed the UI/UX for the GDG Wah Campus website",
            "Conducted user testing sessions to improve app usability",
            "Created a component-based design system",
            "Led workshops on UI/UX fundamentals"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/amna-baig-ux" },
            { type: "dribbble", url: "https://dribbble.com/amna-baig" }
        ]
    },
    "GDG-M023": {
        name: "Zoya Nasir",
        role: "Video Editor",
        team: "Media & Graphics",
        imageUrl: "/assets/images/GDG-M023.jpg",
        email: "zoya.nasir@gdgwah.com",
        phone: "+92-301-4455666",
        joiningDate: "2023-10-05",
        membershipStatus: "Active",
        membershipType: "Specialist",
        club: "GDG Wah Campus",
        department: "Media Production",
        qualification: "BS Media Production",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Zoya Nasir is responsible for all video content, from event highlights to promotional teasers and educational tutorials. She has a strong sense of storytelling and rhythm in her edits.</p><p>She handles the entire video post-production process, including editing, color grading, sound design, and adding motion graphics.</p>",
        skills: ["Video Editing", "Adobe Premiere Pro", "After Effects", "Color Grading", "Sound Design", "Storytelling"],
        interests: ["Cinematography", "Motion Graphics", "Documentary Filmmaking", "Visual Storytelling"],
        achievements: [
            "Produced over 40 videos for the GDG YouTube channel",
            "Created the official GDG Wah Campus brand intro",
            "Documented all major conferences and workshops",
            "Taught a workshop on mobile video editing"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/zoya-nasir-video" },
            { type: "vimeo", url: "https://vimeo.com/zoyanasir" }
        ]
    },
    "GDG-M024": {
        name: "Haris Qureshi",
        role: "Illustrator",
        team: "Media & Graphics",
        imageUrl: "/assets/images/GDG-M024.jpg",
        email: "haris.qureshi@gdgwah.com",
        phone: "+92-301-5566777",
        joiningDate: "2023-10-20",
        membershipStatus: "Active",
        membershipType: "Artist",
        club: "GDG Wah Campus",
        department: "Art & Design",
        qualification: "BFA in Illustration",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Haris Qureshi brings a unique artistic flair to the team with his custom illustrations. He creates bespoke graphics, icons, and character designs that make GDG's branding stand out.</p><p>His work is used across the website, social media, and event materials to add a personal and creative touch.</p>",
        skills: ["Digital Illustration", "Adobe Illustrator", "Procreate", "Character Design", "Iconography", "Vector Art"],
        interests: ["Character Art", "Concept Design", "Digital Painting", "Graphic Novels"],
        achievements: [
            "Created the official mascot for GDG Wah Campus",
            "Designed custom icon sets for all tech teams",
            "Illustrated posters for major events",
            "Had his artwork featured in a local art exhibition"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/haris-qureshi-art" },
            { type: "instagram", url: "https://instagram.com/haris_draws" }
        ]
    },
    "GDG-M025": {
        name: "Nida Pervez",
        role: "Motion Graphics",
        team: "Media & Graphics",
        imageUrl: "/assets/images/GDG-M025.jpg",
        email: "nida.pervez@gdgwah.com",
        phone: "+92-301-6677888",
        joiningDate: "2023-11-05",
        membershipStatus: "Active",
        membershipType: "Designer",
        club: "GDG Wah Campus",
        department: "Animation",
        qualification: "BS Animation",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Nida Pervez brings designs to life with motion. She specializes in creating animated logos, lower thirds for videos, and engaging motion graphics for social media posts.</p><p>Her work adds a dynamic and professional layer to all of GDG Wah Campus's visual communications.</p>",
        skills: ["Motion Graphics", "Adobe After Effects", "Animation Principles", "UI Animation", "Kinetic Typography"],
        interests: ["2D Animation", "Explainer Videos", "Visual Effects", "Interactive Media"],
        achievements: [
            "Animated the logos for all GDG teams",
            "Created motion graphics packages for event videos",
            "Produced animated social media stories that increased engagement",
            "Won an award for 'Best Animated Short' at a film festival"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/nida-pervez-motion" },
            { type: "vimeo", url: "https://vimeo.com/nidapervez" }
        ]
    },

    // Event & Decor Team
    "GDG-M026": {
        name: "Saad Iqbal",
        role: "Events Lead",
        team: "Event & Decor",
        imageUrl: "/assets/images/GDG-M026.jpg",
        email: "saad.iqbal@gdgwah.com",
        phone: "+92-302-7788999",
        joiningDate: "2023-09-10",
        membershipStatus: "Active",
        membershipType: "Team Lead",
        club: "GDG Wah Campus",
        department: "Business Administration",
        qualification: "BBA",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Saad Iqbal is the driving force behind every successful GDG Wah Campus event. As the Events Lead, he oversees the entire event lifecycle, from initial planning and budgeting to on-the-day execution and post-event analysis.</p><p>He is a natural leader with exceptional organizational skills, ensuring every event runs smoothly and provides a great experience for attendees.</p>",
        skills: ["Event Planning", "Project Management", "Budgeting", "Vendor Management", "Leadership", "Logistics"],
        interests: ["Event Management", "Experience Design", "Community Events", "Public Speaking"],
        achievements: [
            "Successfully organized over 20 events, from workshops to large conferences",
            "Managed event budgets totaling over PKR 1,000,000",
            "Negotiated partnerships with venues and sponsors",
            "Maintained a 95% attendee satisfaction rate"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/saad-iqbal-events" }
        ]
    },
    "GDG-M027": {
        name: "Ayesha Khan",
        role: "Logistics Coordinator",
        team: "Event & Decor",
        imageUrl: "/assets/images/GDG-M027.jpg",
        email: "ayesha.khan@gdgwah.com",
        phone: "+92-302-8899000",
        joiningDate: "2023-09-25",
        membershipStatus: "Active",
        membershipType: "Coordinator",
        club: "GDG Wah Campus",
        department: "Supply Chain Management",
        qualification: "BS SCM",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Ayesha Khan is the master of details. She handles all logistical aspects of events, including venue booking, equipment rental, catering, and transportation.</p><p>Her meticulous planning ensures that everything is in the right place at the right time, preventing problems before they can occur.</p>",
        skills: ["Logistics", "Planning", "Vendor Relations", "Inventory Management", "Problem Solving", "Time Management"],
        interests: ["Supply Chain", "Operations Management", "Process Improvement", "Event Logistics"],
        achievements: [
            "Coordinated logistics for 15+ events without a single major issue",
            "Reduced event setup time by 25% through better planning",
            "Managed inventory for all event supplies",
            "Sourced and vetted over 30 local vendors"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/ayesha-khan-logistics" }
        ]
    },
    "GDG-M028": {
        name: "Bilal Ahmed",
        role: "Volunteer Coordinator",
        team: "Event & Decor",
        imageUrl: "/assets/images/GDG-M028.jpg",
        email: "bilal.ahmed@gdgwah.com",
        phone: "+92-302-9900111",
        joiningDate: "2023-10-10",
        membershipStatus: "Active",
        membershipType: "Coordinator",
        club: "GDG Wah Campus",
        department: "Human Resources",
        qualification: "BS HR",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Bilal Ahmed is responsible for recruiting, training, and managing the army of volunteers that makes GDG events possible. He ensures that every volunteer is well-informed, motivated, and assigned a role that matches their skills.</p><p>He is passionate about creating a positive and rewarding experience for volunteers.</p>",
        skills: ["Volunteer Management", "Recruitment", "Training & Development", "Team Leadership", "Communication"],
        interests: ["Human Resources", "Community Organizing", "Leadership Development", "Team Building"],
        achievements: [
            "Built a database of over 100 active volunteers",
            "Developed a comprehensive volunteer training program",
            "Managed volunteer teams of up to 50 people for large events",
            "Achieved a 90% volunteer retention rate"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/bilal-ahmed-hr" }
        ]
    },
    "GDG-M029": {
        name: "Mariam Sohail",
        role: "Decor Specialist",
        team: "Event & Decor",
        imageUrl: "/assets/images/GDG-M029.jpg",
        email: "mariam.sohail@gdgwah.com",
        phone: "+92-302-1122332",
        joiningDate: "2023-10-25",
        membershipStatus: "Active",
        membershipType: "Specialist",
        club: "GDG Wah Campus",
        department: "Interior Design",
        qualification: "Diploma in Interior Design",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Mariam Sohail is the creative mind behind the look and feel of GDG events. She designs the event space, from the stage setup and lighting to the branding and decorative elements, creating an immersive and memorable atmosphere.</p><p>She transforms ordinary venues into exciting, on-brand environments that energize attendees.</p>",
        skills: ["Event Design", "Space Planning", "Decor", "Lighting Design", "Branding Implementation", "Creativity"],
        interests: ["Interior Design", "Experience Design", "Thematic Decor", "Visual Merchandising"],
        achievements: [
            "Designed the decor for 10+ major events",
            "Created immersive photo booths that went viral on social media",
            "Managed the decor budget effectively, often coming in under budget",
            "Won 'Best Event Atmosphere' at an inter-university competition"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/mariam-sohail-design" },
            { type: "instagram", url: "https://instagram.com/mariam_designs" }
        ]
    },
    "GDG-M030": {
        name: "Fahad Malik",
        role: "Operations Manager",
        team: "Event & Decor",
        imageUrl: "/assets/images/GDG-M030.jpg",
        email: "fahad.malik@gdgwah.com",
        phone: "+92-302-2233443",
        joiningDate: "2023-11-10",
        membershipStatus: "Active",
        membershipType: "Manager",
        club: "GDG Wah Campus",
        department: "Management",
        qualification: "BS Management Sciences",
        university: "University of Wah",
        location: "Wah Cantt, Pakistan",
        bio: "<p>Fahad Malik is the on-ground commander during events. He oversees all operational aspects on the day, including registration, crowd control, session timing, and troubleshooting any issues that arise.</p><p>His calm demeanor and quick-thinking ensure that the event runs like a well-oiled machine from start to finish.</p>",
        skills: ["Operations Management", "Crowd Management", "Troubleshooting", "Crisis Management", "On-site Coordination"],
        interests: ["Process Optimization", "Live Event Production", "Risk Management", "Team Coordination"],
        achievements: [
            "Managed on-site operations for events with over 500 attendees",
            "Developed a streamlined registration process that reduced wait times by 40%",
            "Handled 100% of on-site issues with minimal disruption",
            "Received consistent praise from speakers and VIPs for smooth execution"
        ],
        socials: [
            { type: "linkedin", url: "https://linkedin.com/in/fahad-malik-ops" }
        ]
    }
};

const teamConfig = {
    "Executives": {
        color: "#4285F4", // Google Blue
        icon: "users",
        description: "The strategic leadership and core management team responsible for guiding the overall direction and operations of GDG Wah Campus."
    },
    "AI & DS": {
        color: "#DB4437", // Google Red
        icon: "brain-circuit",
        description: "The Artificial Intelligence and Data Science team focuses on machine learning, data analytics, and the latest advancements in AI."
    },
    "Web & App": {
        color: "#0F9D58", // Google Green
        icon: "code",
        description: "This team is dedicated to web and mobile application development, exploring modern frameworks and platforms."
    },
    "Social Media & Marketing": {
        color: "#F4B400", // Google Yellow
        icon: "megaphone",
        description: "Responsible for brand management, community outreach, and promoting our events and activities across all digital platforms."
    },
    "Media & Graphics": {
        color: "#7C4DFF", // A creative purple
        icon: "image",
        description: "The creative powerhouse that handles all visual branding, graphic design, video production, and UI/UX for the chapter."
    },
    "Event & Decor": {
        color: "#FF6F61", // A vibrant coral
        icon: "calendar-check",
        description: "The master planners and executors who organize our workshops, conferences, and meetups, ensuring a memorable experience for all."
    }
};

const featuredMembers = {
    "Faculty Head": "GDG-M001",
    "Campus Lead": "GDG-M002",
    "Chair Person": "GDG-M003",
    "Technical Lead": "GDG-M004"
};