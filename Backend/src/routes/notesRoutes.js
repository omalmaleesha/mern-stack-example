import express from "express";
import {getAllNotes,createNote,updateNote,deleteNote,getNotesById} from "../controllers/noteController.js";

const router = express.Router();

router.get("/",getAllNotes)
router.get("/:id",getNotesById)
router.post("/create",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router;