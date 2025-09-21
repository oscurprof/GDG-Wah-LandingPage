// js/members.js

const membersData = {
    "GDG-M001": {
        name: "Dr. Kashif Ayub",
        role: "Faculty Lead",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Kashif",
        bio: "<p>A passionate community builder and tech enthusiast, Dr Kashif leads GDG Wah Campus with a vision to create a thriving ecosystem for developers. He is dedicated to fostering an inclusive environment where everyone can learn, share, and grow.</p><p>Her interests lie in project management and exploring how technology can be used to solve real-world problems. She believes in the power of collaboration and is always looking for ways to bring people together around shared interests in technology.</p><p>When she's not organizing events or mentoring community members, Ayesha enjoys reading about emerging technologies and their potential impact on society.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" },
            { type: "twitter", url: "#" }
        ]
    },
    "GDG-M002": {
        name: "Ubaid ur Rehman",
        role: "Campus Lead",
        team: "Executives",
        imageUrl: "/assets/images/M002.png",
        bio: "<p>Ubaid is a seasoned developer with a knack for leadership. As Campus-Lead, he supports the community's technical direction and helps organize hands-on workshops. He is always eager to dive into new technologies and share his findings with the community.</p><p>With years of experience in software development, Ubaid brings a practical perspective to technical discussions and mentoring sessions. He specializes in backend development and cloud technologies, making him a valuable resource for community members working on various projects.</p><p>Bilal is passionate about open source contribution and encourages community members to participate in meaningful projects that can make a difference.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" }
        ]
    },
    "GDG-M003": {
        name: "Fatima Ali",
        role: "Community Manager",
        team: "Executives",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Fatima",
        bio: "<p>Fatima is the heart of our community engagement. She ensures that all members feel welcome and connected. She manages our communication channels, organizes networking events, and is always looking for new ways to make our community more vibrant.</p><p>Her background in communications and psychology helps her understand the needs of different community members and create programs that cater to diverse learning styles and interests. She's particularly passionate about creating opportunities for underrepresented groups in tech.</p><p>Outside of community management, Fatima enjoys photography and documenting the journey of GDG Wah Campus through visual storytelling.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "instagram", url: "#" }
        ]
    },
    "GDG-M004": {
        name: "Saad Malik",
        role: "AI Lead",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Saad",
        bio: "<p>Saad leads our AI and Data Science initiatives. With a deep passion for machine learning and neural networks, he organizes study jams and workshops that demystify complex AI topics for students and enthusiasts alike.</p><p>Currently pursuing advanced studies in Artificial Intelligence, Saad has worked on several research projects involving natural language processing and computer vision. He believes in making AI accessible to everyone and often conducts beginner-friendly sessions on Python programming and data analysis.</p><p>In his free time, Saad contributes to open-source AI projects and enjoys exploring the ethical implications of artificial intelligence in modern society.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" }
        ]
    },
    "GDG-M005": {
        name: "Hina Tariq",
        role: "Data Science Core",
        team: "AI & DS",
        imageUrl: "https://placehold.co/256x256/0F9D58/FFFFFF?text=Hina",
        bio: "<p>Hina is a data enthusiast who loves turning raw numbers into insightful stories. She assists in creating content for our Data Science workshops and is a mentor to members starting their journey in the world of data.</p><p>With a background in statistics and mathematics, Hina specializes in data visualization and predictive analytics. She's particularly interested in using data science for social good and has worked on projects related to healthcare analytics and educational data mining.</p><p>Hina is known for her patient teaching style and ability to explain complex statistical concepts in simple terms that anyone can understand.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    },
     "GDG-M006": {
        name: "Usman Cheema",
        role: "Web Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Usman",
        bio: "<p>Usman is a full-stack web developer who leads our web development team. He's passionate about modern web technologies and frameworks, and enjoys teaching others how to build beautiful, responsive, and functional websites.</p><p>With expertise in both frontend and backend technologies, Usman has experience working with React, Node.js, and various cloud platforms. He's particularly interested in web performance optimization and progressive web applications.</p><p>Usman regularly conducts workshops on modern web development practices and is always excited to share the latest trends and best practices in the rapidly evolving web development landscape.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" }
        ]
    },
    "GDG-M007": {
        name: "Zara Iqbal",
        role: "App Lead",
        team: "Web & App",
        imageUrl: "https://placehold.co/256x256/DB4437/FFFFFF?text=Zara",
        bio: "<p>Zara is our go-to expert for mobile app development. Whether it's Android or iOS, she has a wealth of knowledge to share. She leads workshops that cover everything from UI/UX design to publishing an app on the store.</p><p>Specializing in cross-platform development with Flutter and React Native, Zara has published several apps on both Google Play Store and Apple App Store. She's passionate about creating user-friendly mobile experiences and often emphasizes the importance of good design principles.</p><p>When not coding, Zara enjoys studying user behavior and mobile app trends, always looking for ways to improve user engagement and app performance.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "github", url: "#" }
        ]
    },
    "GDG-M008": {
        name: "Ali Raza",
        role: "Marketing Lead",
        team: "Social Media & Marketing",
        imageUrl: "https://placehold.co/256x256/F4B400/FFFFFF?text=Ali",
        bio: "<p>Ali is the creative mind behind our marketing and social media presence. He crafts engaging content that keeps our community informed and excited about upcoming events. His strategies help us reach a wider audience and grow our community.</p><p>With a background in digital marketing and content creation, Ali understands how to create compelling narratives around technology events and educational content. He's skilled in various marketing tools and platforms, from social media management to email marketing campaigns.</p><p>Ali is passionate about storytelling and believes that every technical concept can be made interesting and accessible through the right narrative approach.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "instagram", url: "#" }
        ]
    },
    "GDG-M009": {
        name: "Sana Javed",
        role: "Graphics Lead",
        team: "Media & Graphics",
        imageUrl: "https://placehold.co/256x256/4285F4/FFFFFF?text=Sana",
        bio: "<p>Sana is the artistic talent that gives GDG Wah Campus its visual identity. From event banners to social media posts, her designs capture the energy and spirit of our community. She also conducts design workshops for aspiring artists.</p><p>With expertise in graphic design, branding, and user interface design, Sana brings creativity and professionalism to every visual element of our community. She's proficient in various design tools including Adobe Creative Suite and Figma.</p><p>Sana believes that good design is not just about aesthetics but also about effective communication, and she strives to create visuals that are both beautiful and functional.</p>",
        socials: [
            { type: "linkedin", url: "#" },
            { type: "dribbble", url: "#" }
        ]
    },
    "GDG-M010": {
        name: "Imran Khan",
        role: "Event Lead",
        team: "Event & Decor",
        imageUrl: "/assets/images/imran-khan.jpg",
        bio: "<p>Imran is the master of logistics and planning. He ensures that all our events run smoothly, from securing venues to coordinating with speakers. His attention to detail makes every GDG event a memorable experience.</p><p>With extensive experience in project management and event coordination, Imran has successfully organized numerous tech events, workshops, and hackathons. He's skilled in budget management, vendor coordination, and timeline planning.</p><p>Imran takes pride in creating seamless experiences for attendees and believes that well-organized events are crucial for effective learning and networking opportunities.</p>",
        socials: [
            { type: "linkedin", url: "#" }
        ]
    }
};