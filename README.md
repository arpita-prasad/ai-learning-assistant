# AI-Powered Personalized Learning Assistant

A full-stack web application that transforms static PDF documents into interactive, AI-driven learning experiences with smart chat, auto-generated flashcards, quizzes, summaries, and progress tracking.

---

## Live Demo
https://synaptiqai.vercel.app

---

## Features

| # | Feature
|---|---------|
| 1. | User Authentication (JWT) |
| 2. | PDF Upload & Management |
| 3. | Embedded PDF Viewer |
| 4. | AI-Powered Chat (RAG) |
| 5. | AI Document Summary |
| 6. | AI Concept Explainer |
| 7. | Auto-Generated Flashcards |
| 8. | AI Quiz Generator |
| 9. | Quiz Results & Analytics |
| 10. | Progress Tracking Dashboard |
| 11. | Favourites System |
| 12. | Responsive UI |

---

## Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS v4
- React Router v7
- Axios
- React Hot Toast
- React Markdown + Syntax Highlighter
- Lucide React Icons
- Moment.js

### Backend
- Node.js + Express 5
- MongoDB + Mongoose
- JWT + bcryptjs (Authentication)
- Multer (File Upload)
- express-validator
- express-rate-limit
- pdfjs-dist (PDF Text Extraction)

### AI
- Google Gemini API (@google/genai)
- Custom RAG (Retrieval-Augmented Generation) Pipeline
- Keyword-based Text Chunking & Retrieval

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## Project Structure

```
ai-learning-assistant/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ai/
│   │   │   ├── auth/
│   │   │   ├── chat/
│   │   │   ├── common/
│   │   │   ├── documents/
│   │   │   ├── flashcards/
│   │   │   ├── layout/
│   │   │   └── quizzes/
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Documents/
│   │   │   ├── Flashcards/
│   │   │   ├── Profile/
│   │   │   └── Quizzes/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
└── backend/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── utils/
    └── server.js
```

---

## Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Google Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/arpita-prasad/ai-learning-assistant.git
cd ai-learning-assistant
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
GEMINI_API_KEY=your_gemini_api_key
PORT=8000
NODE_ENV=development
MAX_FILE_SIZE=10485760
BASE_URL=http://localhost:8000
```

Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:8000
```

Start the frontend:
```bash
npm run dev
```

### 4. Open the app
Visit `http://localhost:5173` in your browser.

---

## How the AI Works

The app uses a lightweight **RAG (Retrieval-Augmented Generation)** pipeline:

1. When a PDF is uploaded, text is extracted using **pdfjs-dist**
2. The text is split into overlapping chunks (500 words, 50-word overlap)
3. Chunks are stored in **MongoDB**
4. When a user asks a question, relevant chunks are retrieved using **keyword scoring**
5. Top 3 chunks are sent to **Google Gemini** as context
6. Gemini generates a grounded response based only on the document content

---

## Security

- Passwords hashed with **bcryptjs**
- Authentication via **JWT tokens**
- Rate limiting on AI routes (20 requests per 15 minutes)
- Environment variables for all sensitive data
- Protected routes on both frontend and backend

---

## Author

**Arpita Prasad**
- GitHub: [@arpita-prasad](https://github.com/arpita-prasad)
