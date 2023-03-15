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

export const getUsuarioById = (req,res)=>{

}

export const updateUsuariosById = (req,res)=>{

}

export const deleteUsuariosById = (req,res)=>{

}