// routes/index.js
const express = require('express');
const userRoutes = require('./user');
const quizRoutes = require('./quiz');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;