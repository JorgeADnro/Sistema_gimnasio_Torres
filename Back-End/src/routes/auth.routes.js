import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import { verifySignup } from "../middlewares";

router.post('/signup',
[verifySignup.checkDuplicateUsernameOrEmail,verifySignup.checkRolesExisted],
authCtrl.singUp);

router.post('/signin',authCtrl.singIn);

export default router;

