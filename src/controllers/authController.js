const { registerUser, loginUser } = require('../models/userModel');

const register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await registerUser(username, password, role);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const { token } = await loginUser(username, password);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { register, login };