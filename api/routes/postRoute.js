import { getPosts, getPostById,getBiggestId,createPost} from "../controllers/postController.js";
import express from 'express'
const postRouter = express.Router()


// express router method to create route for getting all users
postRouter.route('/').get(getPosts)

// express postRouter method to create route for getting users by id
postRouter.route('/:id').get(getPostById)
postRouter.route('/').get(getBiggestId)
postRouter.route('/').post(createPost)



export default postRouter

