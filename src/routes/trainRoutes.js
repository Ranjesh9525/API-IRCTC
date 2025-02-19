const express = require('express');
const { createTrain, getTrainAvailability, deleteTrain } = require('../controllers/trainController');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/trains', authenticate, authorizeAdmin, createTrain);
router.get('/trains', getTrainAvailability);
router.delete('/trains/:trainId', authenticate, authorizeAdmin, deleteTrain);

module.exports = router;