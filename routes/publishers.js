import { Router } from 'express';
import { createPublisher, getPublishers, getOnePublisher, deleteOnePublisher, updateOnePublisher } from '../controllers/publishers.controler';

const router = Router();

// /api/publishers/
router.post('/', createPublisher);
router.get('/', getPublishers);

// /api/publishers/:publisherId // : -> express function 
router.get('/:id', getOnePublisher);
router.delete('/:id', deleteOnePublisher)
router.put('/:id', updateOnePublisher)

export default router;