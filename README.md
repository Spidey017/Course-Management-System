# Course Management System

An intuitive course platform for discovering, managing, and purchasing learning resources. Authenticated users can browse courses, view details, and manage a cart, while administrators can manage the course catalogue.

## Features

- 🔐 User registration and login
- 📚 Protected course catalogue and course details
- 🛒 Shopping cart for authenticated users
- 🛠️ Administrator-only course creation, editing, and deletion
- 🔔 Toast notifications for user actions
- 💾 JSON Server persistence for users and courses

## Tech Stack

- ⚛️ React 19
- ⚡ Vite
- 🧭 React Router
- 🌐 Axios
- 🎨 Tailwind CSS
- 🗄️ JSON Server

## Prerequisites

- 🟢 Node.js 18 or later
- 📦 npm

## Getting Started

1. 📁 From the `course-management-frontend` directory, install the frontend dependencies:

   ```bash
   npm install
   ```

2. 🔌 Start JSON Server in a separate terminal. The frontend expects the API at `http://localhost:5000`:

   ```bash
   npx json-server ../backend/database.json --port 5000
   ```

3. 🚀 Start the Vite development server in another terminal:

   ```bash
   npm run dev
   ```

4. 🌍 Open the URL shown by Vite, usually `http://localhost:5173`.

## 🧭 Available Routes

| Route | Access | Description |
| --- | --- | --- |
| `/` | Logged-in users | Browse all courses |
| `/course/:id` | Logged-in users | View course details |
| `/cart` | Logged-in users | View the shopping cart |
| `/login` | Public | Sign in |
| `/signup` | Public | Create an account |
| `/addcourse` | Administrators | Add a course |
| `/update/:id` | Administrators | Update a course |

Seed users and courses are stored in [`../backend/database.json`](../backend/database.json). The administrator role controls access to course management actions.

## 📜 NPM Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## 🗂️ Project Structure

```text
src/
├── components/   Reusable UI components
├── context/      User and course state providers
├── pages/        Application pages
└── routes/       Protected and private route guards
```
