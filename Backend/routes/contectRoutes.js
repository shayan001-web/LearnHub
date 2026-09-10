const express = require("express");
const router = express.Router();
const Contect = require("../models/contact");


router.get('/',async (req,res)=>{
    try{
        const contects = await Contect.find().sort({createdAt: -1});

            res.status(200).json(contects) 
    }
        catch(err){
            res.status(500).json({message: err.message});
    }
});

// router.get("/:id",async (req,res)=>{
//     try{
//         const contect = await contect.findById(req.params.id);
//          if (!contect) return res.status(404).json({message: "contect not Found"});
//          res.status(200).json(course);
//     }
//     catch(err){
//         res.status(500).json({message: err.message});
//     } 
// });
router.post('/',async(req,res)=>{
    try {
      const {name,email,subject,message}= req.body;
      if(!name || !email || !subject || !message){
        return res.status(400).json({message: "All fields are required"});
      }
      const newContact = new Student({name , email , subject , message});
      const savedContact = await newContact.save();
      res.status(201).json({savedContact})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})
// router.post('/',async(req,res)=>{
//     try {
//       const  newCourse = new Course(req.body)
//       const savedCourse = await newCourse.save();
//         res.status(201).json({savedCourse});
//     }
//     catch(err){
//         res.status(400).json({message: err.message})
//     }
// });

// router.put('/',async (req,res)=>{
//     try{
//         const updatedCourse = await Student.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true, runValidators: true}
//         );
//         if(!updatedCourse)return res.status(404).json({message: "Course not found"});
//         res.status(200).json(updatedCourse); 
//     }
//     catch(err){
//         res.status(400).json({message: err.message });
//     }
// })

router.delete('/:id',async (req,res)=>{
    try{
        const deleteContect = await Contect.findByIdAndDelete(req.params.id);
        if(!deleteContect) return res.status(404).json({message: "Contect not found" });
        res.status(200).json({message: "Contect Deleted SucessFully"});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})
module.exports = router ;