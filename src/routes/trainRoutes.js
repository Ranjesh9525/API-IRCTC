const express = require('express');
const { createTrain, getTrainAvailability } = require('../controllers/trainController');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/trains', authenticate, authorizeAdmin, createTrain);
router.get('/trains', getTrainAvailability);

module.exports = router;