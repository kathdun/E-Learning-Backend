import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    postId:{
        type: Number,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    contenu: {
        type: String,
        required: true
    },
    likes:{
        type:Array,
        required:true
    }
}, {
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

export default Question