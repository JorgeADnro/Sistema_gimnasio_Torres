import {Schema,model} from 'mongoose';

const UserSchema = new Schema({
    name: String,
    role: String,
    imgURL: String,
    age: Number
},{
    timestamps: true,
    versionKey: false
})

export default model('Usuario', UserSchema);