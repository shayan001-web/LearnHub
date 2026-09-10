const mongoose = require("mongoose");
const studentSchema= new mongoose.Schema(
    {
        name:{type: String, require: true},
        email:{type: String, require: true},
        age:{type: Number, require: true},
        city:{type: String, require: true},
        course:{type: String, require: true},
        phone:{type: String, require: true},
    },
    { timestamps: true}
)
module.exports = mongoose.model("Student",studentSchema);