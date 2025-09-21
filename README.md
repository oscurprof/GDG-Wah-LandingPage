# \# GDG Wah Campus Website

# 

# A modern, responsive website for Google Developer Group Wah Campus featuring centralized member management, dynamic content loading, and comprehensive team profiles.

# 

# \## 🚀 Features

# 

# \### ✨ Centralized Member Management

# \- \*\*Single Source of Truth\*\*: All member data stored in `/js/members-data.js`

# \- \*\*Automatic Updates\*\*: Changes reflect across all pages instantly

# \- \*\*Comprehensive Profiles\*\*: Detailed member information including skills, achievements, and social links

# \- \*\*Dynamic Content Loading\*\*: Members displayed based on roles and teams

# 

# \### 🎨 Modern Design

# \- \*\*Responsive Layout\*\*: Optimized for all devices and screen sizes

# \- \*\*Team Color Theming\*\*: Dynamic colors based on team membership

# \- \*\*Smooth Animations\*\*: Engaging transitions and hover effects

# \- \*\*Accessibility First\*\*: Keyboard navigation and screen reader support

# 

# \### 📱 Multi-Page Architecture

# \- \*\*Main Landing Page\*\*: Features leadership team and community overview

# \- \*\*Team Directory\*\*: Comprehensive member listing with search and filters

# \- \*\*Individual Profiles\*\*: Detailed member pages with full information

# \- \*\*Modular Structure\*\*: Clean separation of CSS, JS, and HTML files

# 

# \## 📁 Project Structure

# 

# ```

# /

# ├── index.html                          # Main landing page

# ├── README.md                          # Project documentation

# ├── project-structure.txt              # Detailed structure reference

# ├── assets/                            # Static assets

# │   ├── images/                        # Member profile images (GDG-M001.jpg, etc.)

# │   ├── videos/                        # Video files

# │   └── documents/                     # Document files

# ├── css/                               # Main site styles

# │   └── style.css                      # Global styles for main site

# ├── js/                                # Main site JavaScript

# │   ├── main.js                        # Main site functionality

# │   └── members-data.js                # Centralized member data ⭐

# ├── members/                           # Members listing page

# │   ├── index.html                     # Team members listing

# │   ├── css/

# │   │   └── members.css               # Styles specific to members page

# │   └── js/

# │       └── members.js                # Members page functionality

# └── members/member/                    # Individual member profiles

# &nbsp;   ├── index.html                     # Single member profile template

# &nbsp;   ├── css/

# &nbsp;   │   └── member-profile.css        # Styles for member profiles

# &nbsp;   └── js/

# &nbsp;       └── member-profile.js         # Member profile functionality

# ```

# 

# \## 🎯 Key Components

# 

# \### Featured Leadership (Main Page)

# The main page displays 4 key leadership roles:

# \- \*\*Faculty Head\*\*: Dr. Kashif Ayub (GDG-M001)

# \- \*\*Campus Lead\*\*: Ubaid ur Rehman (GDG-M002)

# \- \*\*Chair Person\*\*: Fakhir Hassan (GDG-M003)

# \- \*\*Technical Lead\*\*: Saad Ali (GDG-M004)

# 

# \### Team Structure

# \- \*\*Executives\*\*: Leadership team (5 members)

# \- \*\*AI \& DS Team\*\*: Artificial Intelligence \& Data Science (5 members)

# \- \*\*Web \& App Team\*\*: Web and Mobile Development (5 members)

# \- \*\*Social Media \& Marketing\*\*: Brand and communications (5 members)

# \- \*\*Media \& Graphics\*\*: Visual design and content (5 members)

# \- \*\*Event \& Decor\*\*: Event planning and execution (5 members)

# 

# \## 🛠️ Technical Implementation

# 

# \### Centralized Data Management

# ```javascript

# // All member data in one place

# const membersData = {

# &nbsp;   "GDG-M001": {

# &nbsp;       name: "Dr. Kashif Ayub",

# &nbsp;       role: "Faculty Head",

# &nbsp;       team: "Executives",

# &nbsp;       specialRole: "Faculty Head",

# &nbsp;       // ... comprehensive member data

# &nbsp;   }

# &nbsp;   // ... all other members

# };

# 

# // Easy utility functions

# function getMemberById(id) { /\* ... \*/ }

# function getMembersByTeam(teamName) { /\* ... \*/ }

# function getFeaturedMembers() { /\* ... \*/ }

# ```

# 

# \### Dynamic Content Loading

# \- Main page automatically loads featured members

# \- Members page displays all teams with expandable sections

# \- Search and filter functionality

# \- Individual profile pages load detailed information

# 

# \### Responsive Design

# \- Mobile-first approach

# \- Flexible grid layouts

# \- Touch-friendly interactions

# \- Optimized image loading

# 

# \## 📝 Adding/Editing Members

# 

# \### 1. Add New Member

# Edit `/js/members-data.js`:

# 

# ```javascript

# "GDG-M031": {

# &nbsp;   name: "John Doe",

# &nbsp;   role: "Developer",

# &nbsp;   team: "Web \& App",

# &nbsp;   imageUrl: "/assets/images/GDG-M031.jpg",

# &nbsp;   email: "john.doe@gdgwah.com",

# &nbsp;   phone: "+92-300-1234567",

# &nbsp;   joiningDate: "2024-01-15",

# &nbsp;   membershipStatus: "Active",

# &nbsp;   membershipType: "Developer",

# &nbsp;   club: "GDG Wah Campus",

# &nbsp;   department: "Computer Science",

# &nbsp;   qualification: "BS Computer Science",

# &nbsp;   university: "University of Wah",

# &nbsp;   location: "Wah Cantt, Pakistan",

# &nbsp;   bio: "<p>Bio content here...</p>",

# &nbsp;   skills: \["Skill1", "Skill2", "Skill3"],

# &nbsp;   interests: \["Interest1", "Interest2"],

# &nbsp;   achievements: \["Achievement1", "Achievement2"],

# &nbsp;   socials: \[

# &nbsp;       { type: "linkedin", url: "https://linkedin.com/in/johndoe" },

# &nbsp;       { type: "github", url: "https://github.com/johndoe" }

# &nbsp;   ]

# }

# ```

# 

# \### 2. Add Member Image

# Place image at `/assets/images/GDG-M031.jpg`

# 

# \### 3. Changes Reflect Automatically

# \- Main page (if featured member)

# \- Members page team section  

# \- Individual profile page

# \- Search results

# 

# \## 🎨 Customization

# 

# \### Team Colors

# Edit `teamConfig` in `/js/members-data.js`:

# ```javascript

# const teamConfig = {

# &nbsp;   "Team Name": {

# &nbsp;       color: "#4285F4",      // Primary color

# &nbsp;       icon: "users",         // Lucide icon name

# &nbsp;       description: "Team description"

# &nbsp;   }

# };

# ```

# 

# \### Featured Members

# Update `featuredMembers` object to change main page display:

# ```javascript

# const featuredMembers = {

# &nbsp;   "Faculty Head": "GDG-M001",

# &nbsp;   "Campus Lead": "GDG-M002", 

# &nbsp;   "Chair Person": "GDG-M003",

# &nbsp;   "Technical Lead": "GDG-M004"

# };

# ```

# 

# \## 🚀 Getting Started

# 

# \### 1. Setup

# ```bash

# \# Clone/download the project

# \# Ensure proper file structure

# \# Add member images to /assets/images/

# ```

# 

# \### 2. Customize Content

# \- Edit member data in `/js/members-data.js`

# \- Add/replace member images

# \- Update team information and colors

# \- Customize featured members for main page

# 

# \### 3. Deploy

# \- Upload to web server

# \- Ensure proper MIME types for .js files

# \- Test all pages and functionality

# 

# \## 📱 Browser Support

# 

# \- ✅ Chrome/Edge 90+

# \- ✅ Firefox 85+  

# \- ✅ Safari 14+

# \- ✅ Mobile browsers

# \- ✅ Tablets and responsive designs

# 

# \## 🔧 Dependencies

# 

# \- \*\*Tailwind CSS\*\* (CDN): Utility-first CSS framework

# \- \*\*Lucide Icons\*\* (CDN): Beautiful, customizable icons

# \- \*\*Inter Font\*\* (Google Fonts): Modern, readable typography

# 

# No build process required - everything runs in the browser!

# 

# \## 🎯 Performance Features

# 

# \- \*\*Optimized Images\*\*: Automatic fallbacks and lazy loading

# \- \*\*Efficient Animations\*\*: Hardware-accelerated CSS transitions

# \- \*\*Minimal JavaScript\*\*: Vanilla JS for maximum performance

# \- \*\*CDN Resources\*\*: Fast loading of external dependencies

# 

# \## ♿ Accessibility Features

# 

# \- \*\*Keyboard Navigation\*\*: Full keyboard accessibility

# \- \*\*Screen Reader Support\*\*: Proper ARIA labels and structure

# \- \*\*High Contrast Support\*\*: Dark mode and high contrast compatibility

# \- \*\*Focus Indicators\*\*: Clear visual focus states

# \- \*\*Responsive Text\*\*: Scalable font sizes

# 

# \## 🔄 Future Enhancements

# 

# \- \[ ] Content Management System integration

# \- \[ ] Member photo upload functionality  

# \- \[ ] Event calendar integration

# \- \[ ] Newsletter signup system

# \- \[ ] Advanced search filters

# \- \[ ] Member statistics dashboard

# \- \[ ] Export functionality for member data

# 

# \## 📞 Support

# 

# For questions or support with the GDG Wah Campus website:

# 

# \- \*\*Email\*\*: gdg.wahcampus@example.com

# \- \*\*GitHub Issues\*\*: Create issues for bugs or feature requests

# \- \*\*Documentation\*\*: Refer to `project-structure.txt` for detailed info

# 

# \## 📄 License

# 

# This project is developed for GDG Wah Campus. Please respect Google Developer Group branding guidelines when customizing.

# 

# ---

# 

# \*\*Built with ❤️ for the GDG Wah Campus community\*\*

# 

# \*Last updated: January 2025\*

