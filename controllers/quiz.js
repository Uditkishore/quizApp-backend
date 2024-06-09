// controllers/quiz.js
const Quiz = require('../models/Quiz');

const getAllQuiz = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postQuiz = async (req, res) => {
    const quiz = req.body;
    try {
        const savedQuiz = await Quiz.create(quiz);
        res.status(201).json(savedQuiz);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllQuiz,
    postQuiz
};
