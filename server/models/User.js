import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {type: String, require: true},
    email: {type: String, required: true},
    full_name: {type: String, required: true},
    username: {type: String, require: true},
    username: {type: String, unique: true},
    bio: {type: String, default: 'Hey there! I am using PingUp.'},
    profile_picture: {type: String, default: ''},
    cover_photo: {type: String,default: ''},
    location: {type: String, default: ''},
    followers: [{type:String,ref:'User'}],
    following: [{type: String, ref:'User'}],
    connections: [{type: String,ref: 'User'}],
},{timestamps: true, minimize: flase})

const User = mongoose.model('User',userSchema)

export default User