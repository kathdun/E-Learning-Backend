import Question from '../models/questionModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getQuestions = asyncHandler(async(req, res) => {
    const Questions = await Question.find({}).sort({"likes":-1});
    
    res.json(Questions)
})

//getUserById function to retrieve user by id
export const getQuestiontById  = asyncHandler(async(req, res) => {
    const question = await Question.find({id:req.params.id})

    //if user id match param id send user else throw error
    if(question){
        res.json(question)
    }else{
        res.status(404).json({message: "question not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})

export const getQuestionByPostId  = asyncHandler(async(req, res) => {
    const question = await Question.find({postId:req.params.postId})

    //if user id match param id send user else throw error
    if(question){
        res.json(question)
    }else{
        res.status(404).json({message: "question not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})

export const getQuestionCountByPostId  = asyncHandler(async(req, res) => {
    const count = await Question.find({postId:req.params.postId}).count()

    //if user id match param id send user else throw error
    if(count){
        res.json(count)
    }else{
        res.status(404).json({message: "question not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})

//update({name: 'Tom'}, {$set: {age: 29}})
export const updateLikes = asyncHandler(async(req, res) => {
   const count = await Question.updateOne({id:req.params.id}, {$set: {likes: req.body}})
    console.log(req)
    //if user id match param id send user else throw error
    if(count){
        res.json({message: "Done!!"})
    }else{
        res.status(404).json({message: "question not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})
