import { Router } from 'express';
import recordController from '../controller/recordController.js';

//Router for '/record'
const router = Router();

router.get('/', recordController.findAll);
router.get('/s', recordController.findBy);
router.get('/hot', recordController.findHot);
router.get('/:id', recordController.findById);

export default router;
