import { Router } from 'express';
import profileController from '../controller/profileController.js';
import { jwtCheck } from '../src/middleware/auth.js';

//Router for '/profile'
const router = Router();

//every route should be authenticated
router.use(jwtCheck);

router.get('/', profileController.getLoggedUser);

export default router;
