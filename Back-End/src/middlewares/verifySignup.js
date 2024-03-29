import { ROLES } from "../models/Role";
import User from "../models/User";
export const checkDuplicateUsernameOrEmail = async (req,res,next) => {
    const username = await User.findOne({username: req.body.username})

    if(username) return res.status(400).json({message: "El usuario ya ha sido registrado"})

    const email = await User.findOne({email: req.body.email})

    if(email) return res.status(400).json({message: "El email ya ha sido registrado"})

    next();
}

export const checkRolesExisted = (req,res,next)=>{
    if(req.body.roles){
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message:`Role ${req.body.roles[i]} doesn't exists`
                })
            }
        }
    }
    next();
}