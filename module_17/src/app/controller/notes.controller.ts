import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  // notesRoutesroach -1 of creating a data
  // const myNote = new Note({
  //   title: "Learning Note",
  //   tags: {
  //     label: "database",
  //   },
  // });
  // await myNote.save();

  // notesRoutesroach - 2
  const note = await Note.create(body);
  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note: note,
  });
});
notesRoutes.get("", async (req: Request, res: Response) => {
  const notes = await Note.find();
  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note: notes,
  });
});
notesRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  // const note = await Note.findOne({
  //   title: "Learning Express",
  // });
  res.status(201).json({
    success: true,
    message: "Note created successfully",
    note: note,
  });
});
notesRoutes.patch("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedBody = req.body;
  // const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
  // const note = await Note.updateOne({ _id: noteId }, updatedBody, {
  //   new: true,
  // });
  const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "Note updated successfully",
    note: note,
  });
});
notesRoutes.delete("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);
  // const note1 = await Note.deleteOne({ _id: noteId });
  // const note2 = await Note.findOneAndUpdate({ _id: noteId });

  res.status(201).json({
    success: true,
    message: "Note updated successfully",
    note: note,
  });
});
