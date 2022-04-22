import Post from '../models/postModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getPosts = asyncHandler(async(req, res) => {
    const Posts = await Post.find({})
    res.json(Posts)
})

//getUserById function to retrieve user by id
export const getPostById  = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id)

    //if user id match param id send user else throw error
    if(post){
       res.json(post)
    }else{
        res.status(404).json({message: "Post not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})

export const getBiggestId = asyncHandler(async(req, res) => {
    const post = await Post.find({}).sort({"id":-1}).limit(1);

    //if user id match param id send user else throw error
    if(post){
        res.json(post)
        
    }else{
        res.status(404).json({message: "Post not found"})
        res.status(404)
        throw new Error('Post not found')
    }
})

export const createPost = asyncHandler(async(req, res) => {
    console.log(req.body.data)
    var post=new Post(req.body.data);
    post.save()
    .then(item => {res.send("Post saved to database")})
    .catch(err => {
        res.status(400)
        .send("unable to save to database")
    })
})
