const express = require('express');
const {
    getAllScore,
    postScore,
    updateScore,
    deleteScore,
    deleteAll
} = require('../controllers/score');
const router = express.Router();

router.get('/all', getAllScore);
router.post('/create', postScore);
router.put('/update/:uuid', updateScore);
router.delete('/delete/:uuid', deleteScore);
router.delete('/delete/all', deleteAll);

module.exports = router;