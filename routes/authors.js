import { Router } from 'express';
import { createAuthor, getAuthors, getOneAuthor, deleteOneAuthor, updateOneAuthor } from '../controllers/authors.controler';

const router = Router();

// /api/authors/
router.post('/', createAuthor)

export default router;