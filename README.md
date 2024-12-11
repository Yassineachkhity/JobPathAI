# JobPath AI

JobPath AI is an innovative platform designed to merge Artificial Intelligence technologies with job search APIs, offering users a streamlined and effective experience in building professional CVs and finding tailored job opportunities.

---

## 📖 Overview

### **Context**
JobPath AI aims to:
- Enable users to create professional dynamic CVs without requiring prior registration.
- Assist users in finding job offers tailored to their skills by analyzing their CVs using AI.

---

## 🎯 Project Objectives

### **Functional Goals**
1. **Dynamic CV Creation**  
   - Users can create a dynamic CV via an interactive form.  
   - AI algorithms analyze user-provided information to generate a personalized CV.
   - AI-driven features include:  
     - Extracting relevant keywords.  
     - Recommending real-time job offers through API integrations.  

### **Technical Goals**
- Universal accessibility: No registration required for core features.  
- Integration with job search APIs (e.g., Adzuna, Jooble, CareerJet).  
- Intuitive user interface and smooth user experience.  
- Compliance with GDPR standards for handling user data.

---

## 🏗️ Architecture & Features

### **1. CV Creation**
- **Dynamic Form**  
  - Sections include: personal information, work experience, skills, education, languages, etc.  
  - AI-powered suggestions to enrich CV content.  

- **Integrated AI**  
  - Syntax analysis to detect inconsistencies or missing details.  
  - Automatically formatted and downloadable CVs in PDF or Word formats.  

### **2. Job Search**
- **CV Upload**  
  - Users can upload existing CVs in PDF or Word formats.  

- **AI Analysis**  
  - Automatic keyword extraction (skills, experience).  
  - Matching with available job offers via integrated APIs.  

- **Job Suggestions**  
  - Results ranked by relevance.  
  - Filters for refining search results (e.g., location, job type, salary).

---

## 🚀 Quick Setup Guide

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### Step-by-Step Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Yassineachkhity/JobPathAI.git
cd JobPathAI
```

2. **Clean Installation (if you encounter any issues):**
```bash
# Remove existing node_modules and lock files
rm -rf node_modules
rm package-lock.json

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install

# If you still get errors, try:
npm install --legacy-peer-deps
```

3. **Install Required Dependencies:**

```bash
# Core Dependencies
npm install react react-dom @types/react @types/react-dom
npm install -D typescript @types/node

# TailwindCSS Setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Three.js and related packages
npm install three @types/three @react-three/fiber @react-three/drei
npm install @react-three/postprocessing

# Animation Libraries
npm install framer-motion
npm install gsap

# Routing
npm install react-router-dom @types/react-router-dom

# UI Components and Icons
npm install @headlessui/react
npm install @heroicons/react
```

4. **Configure TailwindCSS:**

Create or update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      fontFamily: {
        // Add your custom fonts here
      }
    },
  },
  plugins: [],
}
```

5. **Set up PostCSS:**

Create or update `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

6. **Add TailwindCSS to your CSS:**

In your `src/styles/index.css` or main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles here */
```

7. **Start the development server:**
```bash
npm run dev
```

### 🔧 Troubleshooting Common Issues

1. **TailwindCSS classes not working:**
- Make sure your CSS file is imported in your main entry file (main.tsx)
- Verify tailwind.config.js content paths are correct
- Try rebuilding the project:
```bash
npm run build
npm run dev
```

2. **TypeScript errors:**
```bash
# Reinstall TypeScript dependencies
npm install -D typescript @types/node @types/react @types/react-dom

# Create/Reset tsconfig
npx tsc --init
```

3. **Three.js issues:**
```bash
# Reinstall Three.js and its dependencies
npm install three @types/three @react-three/fiber @react-three/drei
```

4. **Vite issues:**
```bash
# Reinstall Vite and its React plugin
npm install -D vite @vitejs/plugin-react
```

### 📦 Using TailwindCSS

1. **Utility Classes:**
```jsx
// Example component using Tailwind classes
const Button = () => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click me
  </button>
);
```

2. **Custom Components:**
```css
/* In your CSS file */
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
```

### 🎨 Using Three.js

```jsx
// Example Three.js component
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeScene = () => (
  <Canvas>
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </Canvas>
);
```

## 🛠️ Tech Stack
- React 18
- TypeScript 5
- TailwindCSS 3
- Three.js
- Vite
- React Router DOM
- Framer Motion
- GSAP

## 📝 Note
If you encounter any issues during setup, please:
1. Check if all dependencies are installed correctly
2. Verify your Node.js and npm versions
3. Clear your npm cache and node_modules if needed
4. Open an issue in the repository if the problem persists

## 👥 Contributors
- Yassine Achkhity
- Adnane Karmouch
- Assim Ayoub

## Created By : ACHKHITY YASSINE in Collaboration with ASSIM AYOUB and KARMOUCH ADNANE
