const express = require('express');
const { bookTrainSeat, getBooking, deleteBooking } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/bookings', authenticate, bookTrainSeat);
router.get('/bookings/:bookingId', authenticate, getBooking);
router.delete('/bookings/:bookingId', authenticate, deleteBooking);

module.exports = router;