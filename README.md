💼 React Jobs CRUD Website

A Job Listings CRUD application built with React as part of a learning project.
It uses React Router DOM v6, TailwindCSS, React Toastify for notifications, and JSON Server as a mock API backend.

🔗 GitHub: fabianoGDB/react-traversy-course

✨ Features

🏠 Home page with featured job listings

📋 View all jobs page

➕ Add new jobs

✏️ Edit existing jobs

❌ Delete jobs

🔔 Toast notifications for success & error states

🌐 JSON Server as a mock REST API

🛠️ Tech Stack

⚛️ React 18+

🎨 Tailwind CSS

🛣️ React Router DOM v6

🔔 React Toastify

🗄️ JSON Server

📂 Project Structure
src/
├── components/ # Reusable UI components
│ ├── Card.jsx
│ ├── Job.jsx
│ ├── JobListings.jsx
│ ├── Navbar.jsx
│ └── Spinner.jsx
│
├── layouts/ # Page layouts
│ └── MainLayout.jsx
│
├── pages/ # Application pages
│ ├── HomePage.jsx
│ ├── JobsPage.jsx
│ ├── JobPage.jsx
│ ├── AddJobPage.jsx
│ ├── EditJobPage.jsx
│ └── NotFoundPage.jsx
│
├── App.jsx # Main App with routes
├── main.jsx # React entry point
├── index.css # Global styles
└── jobs.json # Mock data for JSON server

⚡ Installation & Setup

1. Clone the repo
   git clone https://github.com/fabianoGDB/react-traversy-course.git
   cd react-traversy-course

2. Install dependencies
   npm install

3. Run JSON Server (Mock API)
   npx json-server --watch src/jobs.json --port 5000

Your API will run at: http://localhost:5000/jobs

4. Run the React app
   npm run dev

Open in browser: http://localhost:5173

🎮 Usage

Home Page → View featured jobs

All Jobs → See the complete job listing

Add Job → Create new job posts

Edit Job → Update existing jobs

Delete Job → Remove jobs

Notifications → Toasts appear for CRUD actions

📸 Screenshots
Home Page Jobs Page Add Job

(Replace placeholders with real screenshots)

🚀 Future Improvements

🔐 Add authentication (login/register)

📱 Make fully responsive for all devices

🌎 Connect to a real backend (Node.js / .NET API)

👨‍💻 Author

Fabiano Guilherme Dionizio Bortolussi
🔗 GitHub

✅ This README makes your project look professional and portfolio-ready.

Would you like me to also generate real screenshots of your project (Home, Jobs, Add Job page) so you can replace the placeholders in the README?
