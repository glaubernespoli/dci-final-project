import { Router } from 'express';
import adminController from '../controller/adminController.js';
import { checkAdmin, jwtCheck } from '../src/middleware/auth.js';

//Router for '/admin'
const router = Router();

//every route should be authenticated
router.use(jwtCheck);
router.use(checkAdmin);

router.get('/records', adminController.getRecords);

export default router;
