import connectDB from './config/db.js'
import postRoutes from './routes/postRoute.js'
import userRoutes from './routes/userRoute.js'
import questionRoutes from './routes/questionRoute.js'
import express from 'express'
import dotenv  from 'dotenv'
import bodyParser from 'body-parser'

//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()

//Creating API for user
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)
app.use('/api/questions', questionRoutes)



const PORT = process.env.PORT || 9001

//Express js listen method to run project on http://localhost:9001
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
