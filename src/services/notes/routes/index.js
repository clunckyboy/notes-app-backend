import express from 'express';
import { validate, validateQuery } from '../../../middlewares/validate.js';
import { notePayloadSchema, noteQuerySchema } from '../validator/schema.js';
import {
  createNote,
  editNoteById,
  getAllNotes,
  getNoteById,
  deleteNoteById
} from '../controller/note-controller.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', validateQuery(noteQuerySchema), getAllNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(notePayloadSchema), editNoteById);
router.delete('/notes/:id', deleteNoteById);

export default router;