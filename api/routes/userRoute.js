import { getUsers, getUserById} from "../controllers/userController.js";
import express from 'express'
const userRouter = express.Router()


// express userRouter method to create route for getting all users
userRouter.route('/').get(getUsers)

// express userRouter method to create route for getting users by id
userRouter.route('/:id').get(getUserById)



export default userRouter
