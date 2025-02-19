const pool = require('../config/db');

const addTrain = async (source, destination, totalSeats) => {
    const result = await pool.query(
        'INSERT INTO trains (source, destination, total_seats, available_seats) VALUES ($1, $2, $3, $4) RETURNING *',
        [source, destination, totalSeats, totalSeats]
    );
    return result.rows[0];
};

const getTrains = async (source, destination) => {
    const result = await pool.query(
        'SELECT * FROM trains WHERE source = $1 AND destination = $2',
        [source, destination]
    );
    return result.rows;
};

const deleteTrain = async (trainId) => {
    await pool.query('DELETE FROM trains WHERE id = $1', [trainId]);
};

module.exports = { addTrain, getTrains, deleteTrain };