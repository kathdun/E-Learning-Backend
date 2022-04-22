import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getUsers = asyncHandler(async(req, res) => {
    const Users = await User.find({})
    res.json(Users)
})

//getUserById function to retrieve user by id
export const getUserById  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    //if user id match param id send user else throw error
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "Post not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})