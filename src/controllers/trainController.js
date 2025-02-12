const { addTrain, getTrains } = require('../models/trainModel');

const createTrain = async (req, res) => {
    const { source, destination, totalSeats } = req.body;
    try {
        const train = await addTrain(source, destination, totalSeats);
        res.status(201).json(train);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTrainAvailability = async (req, res) => {
    const { source, destination } = req.query;
    try {
        const trains = await getTrains(source, destination);
        res.json(trains);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createTrain, getTrainAvailability };