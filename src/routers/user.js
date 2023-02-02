const express = require('express');
const { getUsers, getUser, postUser} = require('../controller/user');

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);

userRouter.post('/', postUser)

module.exports = userRouter;