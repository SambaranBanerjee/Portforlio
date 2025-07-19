import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/api/projects', require('./routes/projects.js'));

console.log('Server is running on port', PORT);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to mongoDB');
})
.catch((err)=> {
    console.error('Error connecting to MongoDB',err);
});