const express = require("express");
const router = express.Router();
const Course = require("../models/course");



router.get('/',async (req,res)=>{
    try{
        const courses = await Course.find().sort({createdAt: -1});

            res.status(200).json(courses) 
    }
        catch(err){
            res.status(500).json({message: err.message});
    }
});

router.get("/:id",async (req,res)=>{
    try{
        const course = await student.findById(req.params.id);
         if (!course) return res.status(404).json({message: "course not Found"});
         res.status(200).json(course);
    }
    catch(err){
        res.status(500).json({message: err.message});
    } 
});

router.post('/',async(req,res)=>{
    try {
      const  newCourse = new Course(req.body)
      const savedCourse = await newCourse.save();
        res.status(201).json({savedCourse});
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
});

router.put('/',async (req,res)=>{
    try{
        const updatedCourse = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        if(!updatedCourse)return res.status(404).json({message: "Course not found"});
        res.status(200).json(updatedCourse); 
    }
    catch(err){
        res.status(400).json({message: err.message });
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const deleteCourse = await Course.findByIdAndDelete(req.params.id);
        if(!deleteCourse) return res.status(404).json({message: "Course not found" });
        res.status(200).json({message: "Course Deleted SucessFully"});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})
module.exports = router ;