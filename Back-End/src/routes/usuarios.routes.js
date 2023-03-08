import {Router} from 'express';
import * as usuarioContrl from '../controllers/usuarios.controller';
const router = Router();

router.post('/',usuarioContrl.createUsuarios);

router.get('/',usuarioContrl.getUsuarios);

router.get('/:usuarioId',usuarioContrl.getUsuarioById);

router.put('/:usuarioId',usuarioContrl.updateUsuariosById);

router.delete('/:usuarioId',usuarioContrl.deleteUsuariosById);


export default router;