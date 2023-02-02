import express from 'express';
import userControllers from '../controller/user.js';

const userRouter = express.Router();

userRouter.get('/', userControllers.getUsers);
userRouter.get('/:id', userControllers.getUser);

userRouter.post('/', userControllers.postUser);

export default userRouter;