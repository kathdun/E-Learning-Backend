import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    auteur:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
    cours: {
        type: String,
        required: true
    },
    questions: {
        type: Number,
        required: true
    },
    contentURL: {
        type: String,
        required: true
    },
    classesConcernees: {
        type: Array,
        required: true
    },
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post