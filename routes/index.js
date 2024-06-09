// routes/index.js
const express = require('express');
const quizRoutes = require('./quiz');

const router = express.Router();

router.use('/quiz', quizRoutes);

module.exports = router;