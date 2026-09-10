require("dotenv").config();
const mongoose = require('mongoose');
const Course = require("./models/course");

const sampleCourse = [
    {
        title:"Web development",
        description :"learn to build modern website from starch using HTML , CSS , and JavaScript.",
        instructor:"Sarah Ahmed",
        duration: "8 week",
        level: "Beeginner",
        price: "49",
        category : "Web Devlopment",
        image : "https://th.bing.com/th/id/R.260df90d353cc44162f816d46aa97d09?rik=fdQwbDGcUFeqAw&pid=ImgRaw&r=0"

    },
    {
        title:"JavaScript Essentials",
        description :"Master JavaScript fundamentals: variables,functions,array,objects,and DOM.",
        duration: "4 week",
        level: "Beeginner",
        price: "50",
        category : "Programming",
        image : "https://tse4.mm.bing.net/th/id/OIP.iarHnvsjB0mpa2geM8t8zQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        instructor:"Bilal"
    },
{
        title:"Application development",
        description :"learn to build modern website from starch using HTML , CSS , and JavaScript.",
        duration: "8 week",
        level: "Beeginner",
        price: "49",
        category : "Mobile Application",
        image : "https://tse1.mm.bing.net/th/id/OIP.C9A-_av-5pc8IjbgvPf9uwHaE8?r=0&w=1920&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3",
instructor:" Ahmed"
    },
{
        title:"English Language",
        description :"Easiest Way to talk in aboard.",
        duration: "8 week",
        level: "Beeginner",
        price: "49",
        category : "Language",
        image : "https://www.bing.com/th/id/OIP.P5AVHBgYV84nIQ99BXheqQAAAA?w=193&h=208&c=8&rs=1&qlt=90&o=6&pid=ImgAns&rm=2",
        instructor:"Sarah "
    },
{
        title:"React J.s From Beginner",
        description :"Built interactive interface.",
        duration: "8 week",
        level: "Beeginner",
        price: "49",
        category : "JavaScript",
        image : "https://th.bing.com/th/id/OIP.arz7MLlpnbI_EXq3YTDLswHaE8?w=298&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        instructor:"Abdullah"
    },
{
        title:"Node.Js & Express",
        description :"Build powerful backend server.",
        duration: "8 week",
        level: "Beeginner",
        price: "49",
        category : "Web Devlopment",
        image : "data:image/webp;base64,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",
        instructor:"Ubaid"
    }
];
mongoose.connect(process.env.MONGO_URI)
.then(async (req,res)=>{
    await Course.deleteMany();
    await Course.insertMany(sampleCourse);
    console.log("sample courses added to MongoDB Atlas");
    mongoose.connection.close();
})
.catch((err)=>console.error( "Seed Error:",err.message));