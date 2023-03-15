import {Schema,model} from 'mongoose';

const UseruarioSchema = new Schema({
    name: String,
    role: String,
    imgURL: String,
    age: Number
},{
    timestamps: true,
    versionKey: false
})

export default model('Usuario', UseruarioSchema);