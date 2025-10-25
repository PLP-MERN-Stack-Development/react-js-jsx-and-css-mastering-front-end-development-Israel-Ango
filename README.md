# TaskMaster - React Task Management App

A modern, responsive task management application built with React, Tailwind CSS, and Vite. Features dark/light theme switching, API integration, and local storage persistence.

![TaskMaster Screenshot](./screenshots/app-preview.png)

## 🚀 Features

- ✅ **Task Management** - Add, complete, and delete tasks
- 🌙 **Dark/Light Theme** - Toggle between themes with persistent preference
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🔍 **User Search & Pagination** - Browse users from JSONPlaceholder API
- 💾 **Local Storage** - Tasks persist between browser sessions
- 🎨 **Tailwind CSS** - Modern, utility-first styling with custom animations

## 🛠️ Tech Stack

- **Frontend:** React 18, JSX
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** React Hooks (useState, useEffect, useContext)
- **API:** JSONPlaceholder REST API
- **Icons:** Emoji-based icons

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd weather-dashboard
2. Install dependencies
bash
npm install
3. Start development server
bash
npm run dev
4. Open your browser
Navigate to http://localhost:5173/

🏗️ Project Structure
text
src/
├── components/          # Reusable UI components
│   ├── button.jsx      # Button with variants
│   ├── card.jsx        # Card container
│   ├── navbar.jsx      # Navigation header
│   ├── footer.jsx      # Site footer
│   ├── layout.jsx      # App layout wrapper
│   ├── taskmanager.jsx # Task management component
│   └── userlist.jsx    # User list from API
├── context/            # React Context
│   └── ThemeContext.jsx # Theme management
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.js # Local storage hook
│   └── useApi.js       # API data fetching hook
├── pages/              # Page components
│   ├── home.jsx        # Homepage
│   └── about.jsx       # About page
└── App.jsx             # Main app component
🎯 Usage
Managing Tasks
Add Task: Type in the input field and click "Add Task" or press Enter

Complete Task: Click the checkbox to mark tasks as completed

Delete Task: Click the "Delete" button to remove tasks

Filter Tasks: Use the filter buttons (All/Active/Completed)

Theme Switching
Click the moon/sun icon in the navbar to toggle between dark and light themes

Theme preference is saved in local storage

User Management
Browse users fetched from JSONPlaceholder API

Search users by name or email

Navigate through pages with pagination

📱 Responsive Design
The app is fully responsive with breakpoints for:

Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

🚀 Deployment
Deploy to Vercel
Build the project:

bash
npm run build
Install Vercel CLI:

bash
npm install -g vercel
Deploy:

bash
vercel --prod
Alternative: Deploy via GitHub
Push your code to GitHub

Connect your repository to Vercel

Vercel will automatically deploy on push

📸 Screenshots
Light Theme
https://./screenshots/light-theme.png

Dark Theme
https://./screenshots/dark-theme.png

Mobile View
https://./screenshots/mobile-view.png

Task Management
https://./screenshots/task-management.png

User List
https://./screenshots/user-list.png

🔧 Customization
Adding New Components
Create component in src/components/

Export as default function

Import and use in desired pages

Modifying Styles
Update Tailwind classes in components

Modify tailwind.config.js for custom themes

Add custom animations in the config file

Adding New API Endpoints
Create new custom hook in src/hooks/

Follow the pattern in useApi.js

Use the hook in your components

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
React - UI library

Tailwind CSS - CSS framework

Vite - Build tool

JSONPlaceholder - Fake API

Vercel - Deployment platform

text

**Create screenshots folder and add placeholder files:**
```bash
mkdir screenshots
echo "Add your actual screenshots here" > screenshots/README.txt

Vercel Link: https://myreactassignmentweek3.netlify.app/
