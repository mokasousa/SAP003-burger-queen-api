import { Router } from 'express';
import { createAuthor, getAuthors, getOneAuthor, deleteOneAuthor, updateOneAuthor, getAuthorsByPublisher } from '../controllers/authors.controler';

const router = Router();

// /api/authors/
router.post('/', createAuthor);
router.get('/', getAuthors);

// /api/authors/:id/
router.delete('/:id', deleteOneAuthor);
router.put('/:id', updateOneAuthor);
router.get('/:id', getOneAuthor);


// /api/authors/publisher/:publisher_id
router.get('/publisher/:publisher_id', getAuthorsByPublisher)

export default router;