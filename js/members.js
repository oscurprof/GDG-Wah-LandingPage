// js/members.js

const membersData = {
    "GDG-M001": {
        name: "Dr. Kashif Ayyub",
        role: "Faculty Head",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Kashif",
        bio: "<p>Dr. Kashif Ayyub serves as the Faculty Head, guiding the GDG community with his extensive experience and passion for technology.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M002": {
        name: "Ubaid-Ur-Rehman",
        role: "Campus Lead",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Ubaid",
        bio: "<p>Ubaid-Ur-Rehman is the Campus Lead, driving the chapter's initiatives and fostering a collaborative environment for all members.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M003": {
        name: "Fakhir Hassan",
        role: "Chairperson",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fakhir",
        bio: "<p>Fakhir Hassan, as the Chairperson, provides strategic direction and leadership to the GDG chapter.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M004": {
        name: "Muhammad Ali Saqib",
        role: "Operation Manager",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Ali Saqib manages the chapter's operations, ensuring that all events and activities run smoothly.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M005": {
        name: "Laiba Faiz",
        role: "General Secretory",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Laiba",
        bio: "<p>Laiba Faiz handles administrative tasks as the General Secretory, playing a vital role in the chapter's organization.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M006": {
        name: "Saad Ali",
        role: "Technical Lead",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Saad",
        bio: "<p>Saad Ali leads the technical direction of the chapter, mentoring members and leading workshops on cutting-edge technologies.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M007": {
        name: "Alisha Fatima",
        role: "Women in Tech",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Alisha",
        bio: "<p>Alisha Fatima champions diversity and inclusion as the Women in Tech lead, empowering female members in the community.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M008": {
        name: "Ayesha Akhtar",
        role: "Treasurer",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ayesha",
        bio: "<p>Ayesha Akhtar manages the chapter's finances, ensuring resources are allocated effectively for events and initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M009": {
        name: "Adeel Asghar",
        role: "Al & Data Science Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Adeel",
        bio: "<p>Adeel Asghar leads the AI & Data Science team, organizing workshops and projects in this exciting field.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M010": {
        name: "Manahil Mirza",
        role: "Al & Data Science Co-Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Manahil",
        bio: "<p>Manahil Mirza co-leads the AI & Data Science team, supporting initiatives and mentoring members.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M011": {
        name: "Muhammad Ismail",
        role: "Web & App Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Ismail heads the Web & App development team, guiding members in creating innovative applications.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M012": {
        name: "Zain Mehboob",
        role: "Web & App Co-Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Zain",
        bio: "<p>Zain Mehboob supports the Web & App team as co-lead, contributing to projects and workshops.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M013": {
        name: "Maleeha Zulfiqar",
        role: "Al Research Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Maleeha",
        bio: "<p>Maleeha Zulfiqar leads AI research initiatives, exploring new frontiers in artificial intelligence.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M014": {
        name: "Tashfeen Liaquat",
        role: "Social Media & Marketing Lead",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Tashfeen",
        bio: "<p>Tashfeen Liaquat manages the chapter's online presence as the Social Media & Marketing Lead.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M015": {
        name: "Fatima Qureshi",
        role: "Social Media & Marketing Co-Lead",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fatima",
        bio: "<p>Fatima Qureshi co-leads the marketing efforts, helping to grow the community's reach.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M016": {
        name: "Muhammad Yousaf",
        role: "Media & Graphics Lead",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Yousaf leads the Media & Graphics team, creating stunning visuals for the chapter's events and promotions.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M017": {
        name: "Syeda Farah Muqtadir",
        role: "Media & Graphics Co-Lead",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Syeda",
        bio: "<p>Syeda Farah Muqtadir co-leads the creative team, contributing to the chapter's visual identity.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M018": {
        name: "Junaid Mehmood",
        role: "Event & Decor Lead",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Junaid",
        bio: "<p>Junaid Mehmood leads the Event & Decor team, ensuring every event is a memorable experience.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M019": {
        name: "Umm-e-Amen Ibrar",
        role: "Event & Decor Co-Lead",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Umm-e-Amen",
        bio: "<p>Umm-e-Amen Ibrar co-leads the events team, helping to organize and execute chapter gatherings.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M020": {
        name: "Ali Noor",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ali",
        bio: "<p>Ali Noor is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M021": {
        name: "M Daud Subhani",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=M+Daud",
        bio: "<p>M Daud Subhani is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M022": {
        name: "Aliyan Abid",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Aliyan",
        bio: "<p>Aliyan Abid is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M023": {
        name: "Sara",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Sara",
        bio: "<p>Sara is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M024": {
        name: "Muhammad Akif",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Akif is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M025": {
        name: "Abdul Ahad",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Abdul",
        bio: "<p>Abdul Ahad is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M026": {
        name: "Ahmed Hassan",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Ahmed",
        bio: "<p>Ahmed Hassan is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M027": {
        name: "Sannila Iqbal",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Sannila",
        bio: "<p>Sannila Iqbal is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M028": {
        name: "Danyal Ahmed",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Danyal",
        bio: "<p>Danyal Ahmed is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M029": {
        name: "Eesha Imran",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Eesha",
        bio: "<p>Eesha Imran is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M030": {
        name: "Zainab Fatima",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Zainab",
        bio: "<p>Zainab Fatima is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M031": {
        name: "Adeel Asghar",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Adeel",
        bio: "<p>Adeel Asghar is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M032": {
        name: "Choudhary Muhammad Bilal Kas",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Choudhary",
        bio: "<p>Choudhary Muhammad Bilal Kas is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M033": {
        name: "Muhammad Asad",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Asad is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M034": {
        name: "Momna Yousaf",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Momna",
        bio: "<p>Momna Yousaf is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M035": {
        name: "Taha Liaquat",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Taha",
        bio: "<p>Taha Liaquat is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M036": {
        name: "Samawia Saif",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Samawia",
        bio: "<p>Samawia Saif is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M037": {
        name: "Abdullah Saghir",
        role: "Al & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Abdullah",
        bio: "<p>Abdullah Saghir is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M038": {
        name: "Malik Faizan Ali",
        role: "AI & DS Member",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Malik",
        bio: "<p>Malik Faizan Ali is an active member of the AI & DS team, contributing to various projects and learning initiatives.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M039": {
        name: "Zaryab Khan",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Zaryab",
        bio: "<p>Zaryab Khan is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M040": {
        name: "Naveed Qasim",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Naveed",
        bio: "<p>Naveed Qasim is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M041": {
        name: "Alia Arshad",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Alia",
        bio: "<p>Alia Arshad is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M042": {
        name: "Alehsa Yasin",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Alehsa",
        bio: "<p>Alehsa Yasin is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M043": {
        name: "Zohaib Arif",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Zohaib",
        bio: "<p>Zohaib Arif is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M044": {
        name: "Ayesha Siddiqui",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ayesha",
        bio: "<p>Ayesha Siddiqui is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M045": {
        name: "Umm e Habiba",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Umm+e",
        bio: "<p>Umm e Habiba is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M046": {
        name: "Tayyab Abdullah",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Tayyab",
        bio: "<p>Tayyab Abdullah is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M047": {
        name: "Faizan Ahmed",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Faizan",
        bio: "<p>Faizan Ahmed is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M048": {
        name: "Fatima Safeer",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Fatima",
        bio: "<p>Fatima Safeer is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M049": {
        name: "Muhammad Sami",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Sami is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M050": {
        name: "Anosh Niazi",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Anosh",
        bio: "<p>Anosh Niazi is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M051": {
        name: "Syed Jarrar",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Syed",
        bio: "<p>Syed Jarrar is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M052": {
        name: "Jawad Ahmed",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Jawad",
        bio: "<p>Jawad Ahmed is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M053": {
        name: "Wamiq Abdullah",
        role: "Web & App Development Member",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Wamiq",
        bio: "<p>Wamiq Abdullah is a member of the Web & App Development team, passionate about building for the web and mobile.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M054": {
        name: "Mariyam Munir",
        role: "Social Media & Marketing Members",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Mariyam",
        bio: "<p>Mariyam Munir is a member of the Social Media & Marketing team, helping to promote the chapter's activities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M055": {
        name: "Tashfeen",
        role: "Social Media & Marketing Members",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Tashfeen",
        bio: "<p>Tashfeen is a member of the Social Media & Marketing team, helping to promote the chapter's activities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M056": {
        name: "M Baseer",
        role: "Social Media & Marketing Members",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=M+Baseer",
        bio: "<p>M Baseer is a member of the Social Media & Marketing team, helping to promote the chapter's activities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M057": {
        name: "Elma Shah",
        role: "Social Media & Marketing Members",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Elma",
        bio: "<p>Elma Shah is a member of the Social Media & Marketing team, helping to promote the chapter's activities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M058": {
        name: "Abdullah Amir",
        role: "Social Media & Marketing Members",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Abdullah",
        bio: "<p>Abdullah Amir is a member of the Social Media & Marketing team, helping to promote the chapter's activities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M059": {
        name: "Mohsin Shakeel",
        role: "Social Media & Marketing Members",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Mohsin",
        bio: "<p>Mohsin Shakeel is a member of the Social Media & Marketing team, helping to promote the chapter's activities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M060": {
        name: "Kiran Yameen",
        role: "Media & Graphics Selected Members",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Kiran",
        bio: "<p>Kiran Yameen is a talented member of the Media & Graphics team, contributing to the chapter's creative output.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M061": {
        name: "Ali Hassan",
        role: "Media & Graphics Selected Members",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Ali",
        bio: "<p>Ali Hassan is a talented member of the Media & Graphics team, contributing to the chapter's creative output.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M062": {
        name: "Laiba Ishfaq",
        role: "Media & Graphics Selected Members",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Laiba",
        bio: "<p>Laiba Ishfaq is a talented member of the Media & Graphics team, contributing to the chapter's creative output.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M063": {
        name: "Sumayya Aamir",
        role: "Media & Graphics Selected Members",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Sumayya",
        bio: "<p>Sumayya Aamir is a talented member of the Media & Graphics team, contributing to the chapter's creative output.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M064": {
        name: "Ayiaza Mudassar",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Ayiaza",
        bio: "<p>Ayiaza Mudassar is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M065": {
        name: "Tania Khan",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Tania",
        bio: "<p>Tania Khan is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M066": {
        name: "Hoorain Malik",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Hoorain",
        bio: "<p>Hoorain Malik is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M067": {
        name: "Muqaddas Uroush",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Muqaddas",
        bio: "<p>Muqaddas Uroush is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M068": {
        name: "Muhammad Talal",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad Talal is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M069": {
        name: "Muhammad",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Muhammad",
        bio: "<p>Muhammad is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M070": {
        name: "Altamash Khan",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Altamash",
        bio: "<p>Altamash Khan is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M071": {
        name: "Fizza Batool",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fizza",
        bio: "<p>Fizza Batool is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M072": {
        name: "Zoha Hussain",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Zoha",
        bio: "<p>Zoha Hussain is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
    "GDG-M073": {
        name: "Malik Muneeb",
        role: "Event Management Member",
        team: "Event & Decor",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Malik",
        bio: "<p>Malik Muneeb is a key member of the Event Management team, helping to organize successful events.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
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

// ========================================
// DYNAMIC CONTENT LOADING FUNCTIONS
// ========================================

// Load leadership team for main homepage
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
    const colorClasses = ['blue', 'green', 'red', 'yellow', 'blue', 'green'];

    // Clear existing content except the first team category (keep the structure)
    const existingCategories = teamsContainer.querySelectorAll('.team-category-container');
    existingCategories.forEach(category => category.remove());

    teamOrder.forEach((teamName, index) => {
        if (!teams[teamName] || teams[teamName].length === 0) return;

        const colorClass = colorClasses[index % colorClasses.length];
        const teamContainer = document.createElement('div');
        teamContainer.className = 'team-category-container mb-12';
        
        teamContainer.innerHTML = `
            <div class="team-category-header category-expanded">
                <i data-lucide="chevron-right" class="category-icon text-${colorClass}-500"></i>
                <h2 class="text-3xl font-bold text-gray-800">${teamName}</h2>
            </div>
            <div class="team-category-content expanded">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    ${teams[teamName].map(member => `
                        <div class="member-card" data-member-id="${member.id}">
                            <img src="${member.imageUrl}" class="w-32 h-32 mx-auto rounded-full shadow-lg" alt="${member.name}">
                            <h3 class="mt-5 text-xl font-bold text-gray-800">${member.name}</h3>
                            <p class="mt-1 text-${colorClass}-600 font-semibold">${member.role}</p>
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

    // Re-attach event handlers
    attachTeamEventHandlers();
}

// Attach event handlers for team page
function attachTeamEventHandlers() {
    // Category toggle functionality
    document.querySelectorAll('.team-category-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            header.classList.toggle('category-expanded');
            content.classList.toggle('expanded');
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
    if (document.querySelector('.team-category-container')) {
        loadAllTeams();
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDynamicContent);
} else {
    initializeDynamicContent();
}