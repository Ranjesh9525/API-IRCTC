const pool = require('../config/db');

const bookSeat = async (userId, trainId, seats) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const trainResult = await client.query('SELECT available_seats FROM trains WHERE id = $1 FOR UPDATE', [trainId]);
        const availableSeats = trainResult.rows[0].available_seats;

        if (availableSeats < seats) {
            throw new Error('Not enough seats available');
        }

        await client.query('UPDATE trains SET available_seats = available_seats - $1 WHERE id = $2', [seats, trainId]);
        const bookingResult = await client.query(
            'INSERT INTO bookings (user_id, train_id, seats_booked) VALUES ($1, $2, $3) RETURNING *',
            [userId, trainId, seats]
        );

        await client.query('COMMIT');
        return bookingResult.rows[0];
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

const getBookingDetails = async (bookingId) => {
    const result = await pool.query('SELECT * FROM bookings WHERE id = $1', [bookingId]);
    return result.rows[0];
};

const deleteBooking = async (bookingId, userId) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        // Get the booking details
        const bookingResult = await client.query('SELECT * FROM bookings WHERE id = $1 AND user_id = $2', [bookingId, userId]);
        if (bookingResult.rows.length === 0) {
            throw new Error('Booking not found or unauthorized');
        }

        const { train_id, seats_booked } = bookingResult.rows[0];

        // Update the available seats in the train
        await client.query('UPDATE trains SET available_seats = available_seats + $1 WHERE id = $2', [seats_booked, train_id]);

        // Delete the booking
        await client.query('DELETE FROM bookings WHERE id = $1', [bookingId]);

        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

module.exports = { bookSeat, getBookingDetails, deleteBooking };