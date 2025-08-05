# 💡 Code Reviewer – AI-Powered Code Feedback Tool

A full-stack AI-powered web app that analyzes and reviews your code in real-time using **Google Gemini API**.

---

## 🛠 Tech Stack

**Frontend:**
- React
- PrismJS (syntax highlighting)
- React Simple Code Editor
- React Markdown + Rehype Highlight
- Axios
- Vite

**Backend:**
- Node.js
- Express.js
- @google/generative-ai (Gemini API)

**Deployment:**
- Frontend → [Vercel](https://vercel.com/)
- Backend → [Render](https://render.com/)

---

## 📁 Project Structure

```
CODE-REVIEWER/
├── BackEnd/
│   ├── .env.example
│   ├── server.js
│   ├── package.json
│   └── src/
│       └── app.js
├── FrontEnd/
│   ├── .env.example
│   ├── index.html
│   ├── App.jsx
│   ├── App.css
│   └── ...
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/code-reviewer.git
cd code-reviewer
```

---

### 🔹 2. Backend Setup (Render)

```bash
cd BackEnd
cp .env.example .env          # Add your Google Gemini API key
npm install
node server.js                # or set up with Render
```

#### 🔐 Required Environment Variable

```
GOOGLE_GEMINI_KEY=your-gemini-api-key
```

---

### 🔹 3. Frontend Setup (Vercel or Local)

```bash
cd FrontEnd
cp .env.example .env          # Add backend URL
npm install
npm run dev                   # Runs on http://localhost:5173
```

#### 🔐 Required Environment Variable

```
VITE_API_URL=https://your-backend.onrender.com/
```

---

## 🌐 Live Demo URLs

- 🔗 Frontend (Vercel): https://your-vercel-project.vercel.app
- 🔗 Backend (Render): https://code-reviewer-1j3w.onrender.com

---

## ✨ Features

- Real-time code analysis with Gemini
- Clean, modern editor UI
- Markdown-formatted review results
- Loading state management
- Error handling
- Responsive layout

---

## 📦 Deployment Summary

| Platform | Path      | Description             |
|----------|-----------|-------------------------|
| Render   | `/BackEnd`  | Node.js Express backend |
| Vercel   | `/FrontEnd` | React frontend app      |

---

## 🧑‍💻 Author

**Yash Rathore**  
Email: yashrathore2004.yr@gmail.com  
Website: [ai-code-reviewer](https://code-reviewer-neon.vercel.app/)

---

