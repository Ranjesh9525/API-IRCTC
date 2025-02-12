const express = require('express');
const { bookTrainSeat, getBooking } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/bookings', authenticate, bookTrainSeat);
router.get('/bookings/:bookingId', authenticate, getBooking);

module.exports = router;