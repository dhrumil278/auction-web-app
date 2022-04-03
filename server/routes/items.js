import express from 'express';
import { getItems, addItem, itemInformation } from '../controllers/itemsControllers.js';

const router = express.Router();

router.get('/', getItems );
router.post('/add', addItem );

export default router;