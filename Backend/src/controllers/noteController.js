import Note from "../models/Note.js";

export const getAllNotes = async (req,res) =>{
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes" ,error);
        res.status(500).send("Server Error");
    }
}

export const getNotesById = async (req,res) =>{
    try {
        const notes = await Note.findById(req.params.id);
        if(!notes) return res.status(404).json({"massage":"Note not found"});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getNotesbyID" ,error);
        res.status(500).send("Server Error");
    }
}

export const createNote = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const newNote = new Note({title,content});
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error in createNote" ,error);
        res.status(500).send("Server Error");
    }
}

export const updateNote = async (req,res) =>{
    try {
        const {title,content} = req.body;
        const newNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!newNote) return res.status(404).json({"massage":"Note not found"});
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error in createNote" ,error);
        res.status(500).send("Server Error");
    }
}

export const deleteNote = async (req,res) =>{
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({"massage":"Note not found"});
        res.status(200).json({"massage":"Note deleted successfully"});
    } catch (error) {
        console.error("Error in createNote" ,error);
        res.status(500).send("Server Error");
    }
}