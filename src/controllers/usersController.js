const usersModel = require('../models/usersModel');

const getAll = async (req, res) => {
    const users = await usersModel.getAll();

    return res.status(200).json(users);
};

module.exports = {
    getAll
};