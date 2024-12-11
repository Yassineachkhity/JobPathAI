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

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/Yassineachkhity/JobPathAI.git
cd JobPathAI
```

2. If you encounter any issues with node_modules, follow these steps:

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

3. Start the development server:
```bash
npm run dev
```

### 🔧 Troubleshooting Common Issues

1. **TailwindCSS not working:**
```bash
# Reinstall TailwindCSS dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **TypeScript errors:**
```bash
# Install TypeScript dependencies
npm install -D typescript @types/node @types/react @types/react-dom
```

3. **Vite issues:**
```bash
# Reinstall Vite
npm install -D vite @vitejs/plugin-react
```

## 💻 Technology Stack

### **Frontend**
- **React.js**: To create a dynamic and responsive user interface.

### **Job Search APIs**
- Integration with platforms like Adzuna, Jooble, or CareerJet to access job listings.

## 🛠️ Tech Stack
- React
- TypeScript
- TailwindCSS
- Vite

## 📝 Note
If you encounter any other issues during setup, please open an issue in the repository.

## 🌟 User Experience

### **Interface Design**
- **Simplicity**: Clean design, clear sections, and intuitive navigation.  
- **Efficiency**: Fast, responsive interactions, powered by AI suggestions.  

---

## 👥 Contributors
- Yassine Achkhity
- Adnane Karmouch
- Assim Ayoub

## Created By : ACHKHITY YASSINE in Collaboration with ASSIM AYOUB and KARMOUCH ADNANE
