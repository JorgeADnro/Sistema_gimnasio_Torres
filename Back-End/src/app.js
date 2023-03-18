import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import {createRoles} from './libs/initSetup';

import usuariosRoutes from './routes/usuarios.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from "./routes/user.routes";

const app = express();
createRoles();

app.set('pkg',pkg);

app.use(express.json());

app.use(morgan('dev'));

app.get('/',(req,res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

app.use('/api/usuarios',usuariosRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/user',userRoutes);

export default app;