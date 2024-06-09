const express = require('express');
const { getAllQuiz, postQuiz } = require('../controllers/quiz');
const router = express.Router();

router.get('/all', getAllQuiz);
router.post('/create', postQuiz);

module.exports = router;