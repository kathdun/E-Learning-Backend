import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique:true
    },
    login:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User