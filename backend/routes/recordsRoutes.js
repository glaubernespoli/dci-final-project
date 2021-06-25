import { Router } from 'express';
import recordController from '../controller/recordController.js';

//Router for '/record'
const router = Router();

router.get('/', recordController.findAll);
router.get('/hot');
router.get('/s');
router.get('/:id', recordController.findById);

export default router;
