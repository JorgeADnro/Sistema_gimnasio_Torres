import {Schema,model} from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    roles: [{
        ref:"Role",
        type:Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

UserSchema.statics.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

UserSchema.statics.comparePassword = async(password,recivedPassword)=>{
    return await bcrypt.compare(password,recivedPassword);
}

export default model('User',UserSchema);