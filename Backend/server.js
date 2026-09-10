const mongoose = require("mongoose")
require('dotenv').config();
const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const contectRoutes = require('./routes/contectRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students',studentRoutes);
app.use('/api/courses',courseRoutes);
app.use('/api/contect',contectRoutes);

app.get('/',(req,res)=>{
    res.send('learnHub API is running');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB Atlas Connected' );
    app.listen(PORT,()=>console.log(`Server Running On http://localhost:${PORT}`));
})
.catch((err)=> console.error("MongoDB Connection Error", err.message));





mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.error(err));






































// mongodb+srv://<db_username>:v5WUfllLNiMf3Kl7@cluster0.gq0y22p.mongodb.net/
// v5WUfllLNiMf3Kl7
// mshayanarain666_db_user