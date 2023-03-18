import {Router} from 'express';
import * as usuarioContrl from '../controllers/usuarios.controller';
const router = Router();
import { authJwt } from "../middlewares";

router.post('/',[authJwt.verifyToken,authJwt.isAdmin],usuarioContrl.createUsuarios);

router.get('/',usuarioContrl.getUsuarios);

router.get('/:usuarioId',usuarioContrl.getUsuarioById);

router.put('/:usuarioId',[authJwt.verifyToken,authJwt.isAdmin],usuarioContrl.updateUsuariosById);

router.delete('/:usuarioId',[authJwt.verifyToken,authJwt.isAdmin],usuarioContrl.deleteUsuariosById);

export default router;