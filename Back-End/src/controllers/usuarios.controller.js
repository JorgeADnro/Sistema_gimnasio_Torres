import Usuario from '../models/Usuario';

export const createUsuarios = async (req,res)=>{
    const {name,role,imgURL,age} = req.body;

    const newUsuario=new Usuario({name,role,imgURL,age});

    const usuarioSaved = await newUsuario.save()

    res.status(201).json(usuarioSaved);
}

export const getUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

export const getUsuarioById = async (req,res)=>{
    const usuarios = await Usuario.findById(req.params.usuarioId);
    res.json(usuarios);
}

export const updateUsuariosById = async (req,res)=>{
    const usuarioUpdated = await Usuario.findByIdAndUpdate(req.params.usuarioId, req.body,{
        new:true
    });
    res.status(204).json(usuarioUpdated);
}

export const deleteUsuariosById = async (req,res)=>{
    const {usuarioId} = req.params;
    await Usuario.findByIdAndDelete(usuarioId);
    res.status(204).json();
}