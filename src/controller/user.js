const userServices = require('../services/user');

const getUsers = (req, res) => {
    res.status(200).json(userServices.getUsers());
};

const getUser = (req, res) => {
    const {id} = req.params;

    res.status(200).json(userServices.getUser(Number(id)));
}

const postUser = (req, res) => {
    const {name} = req.body;

    res.status(200).json(userServices.postUser(name));
}

module.exports = { getUsers, getUser, postUser};