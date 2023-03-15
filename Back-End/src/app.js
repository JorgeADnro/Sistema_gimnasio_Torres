import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import usuariosRouts from './routes/usuarios.routes';

const app = express();

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

app.use('/usuarios',usuariosRouts);

export default app;