import { Router } from 'express';
import adminRecordController from '../controller/adminRecordController';

//Router for '/record'
const router = Router();

router.post('/', adminRecordController.findAll);
// router.get('/hot');
// router.get('/s');
// router.get('/:id');

export default router;
