import { Router } from 'express';
import TableController from '../controllers/tables.controller';

const router = Router();

// /api/tables/
router.post('/', TableController.createTable);
router.get('/', TableController.getAllTables);

// /api/tables/:id/
router.get('/:id', TableController.getTable);
router.put('/:id', TableController.updateTable);
router.delete('/:id', TableController.deleteTable);


export default router;