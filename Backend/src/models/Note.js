import mongoose from "mongoose";

//1 - we need to create a schema
//2 - create  a model based off of  that schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
},
    {timestamps:true} // createAt and UpdatedAt feilds auto
);

const Note = mongoose.model("Note",noteSchema);

export default Note;