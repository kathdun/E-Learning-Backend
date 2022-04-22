import { getQuestions, getQuestiontById,getQuestionByPostId,getQuestionCountByPostId,updateLikes } from "../controllers/questionController.js";
import express from 'express'
const questionRouter = express.Router()


// express router method to create route for getting all users
questionRouter.route('/').get(getQuestions)

// express questionRouter method to create route for getting users by id
questionRouter.route('/:id').get(getQuestiontById)
questionRouter.route('/p/:postId').get(getQuestionByPostId)
questionRouter.route('/count/:postId').get(getQuestionCountByPostId)
questionRouter.route('/addLikes/:id').put(updateLikes)


export default questionRouter
