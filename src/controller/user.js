const userServices = require('../services/user');

const getUsers = (req, res) => {
    res.status(200).json(userServices.getUsers());
};

const getUser = (req, res) => {
    const {id} = req.params;

    res.status(200).json(userServices.getUser(Number(id)));
}

module.exports = { getUsers, getUser};