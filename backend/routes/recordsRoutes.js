import { Router } from 'express';
import recordController from '../controller/recordController.js';

//Router for '/records'
const router = Router();

router.get('/', recordController.findAll);
router.get('/hot');
router.get('/s');
router.get('/:id');

export default router;
