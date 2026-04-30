import express from 'express';
import { body } from 'express-validator';
import {
    generateFlashcards,
    generateQuiz,
    generateSummary,
    chat,
    explainConcept,
    getChatHistory
} from '../controllers/aiController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

const documentIdValidation = [
    body('documentId')
        .notEmpty()
        .withMessage('Please provide a documentId')
];

router.use(protect);
router.post('/generate-flashcards', generateFlashcards);
router.post('/generate-quiz', generateQuiz);
router.post('/generate-summary', generateSummary);
router.post('/chat', chat);
router.post('/explain-concept', explainConcept);
router.get('/chat-history/:documentId', getChatHistory);

export default router;