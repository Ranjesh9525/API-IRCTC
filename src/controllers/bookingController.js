const { bookSeat, getBookingDetails, deleteBooking } = require('../models/bookingModel');

const bookTrainSeat = async (req, res) => {
    const { trainId, seats } = req.body;
    const userId = req.user.id;
    try {
        const booking = await bookSeat(userId, trainId, seats);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getBooking = async (req, res) => {
    const { bookingId } = req.params;
    try {
        const booking = await getBookingDetails(bookingId);
        res.json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteBooking = async (req, res) => {
    const { bookingId } = req.params;
    const userId = req.user.id;
    try {
        await deleteBooking(bookingId, userId);
        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { bookTrainSeat, getBooking, deleteBooking };