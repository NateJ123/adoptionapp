import mongoose, { Schema, Document, Model } from "mongoose";

interface User extends Document {
    username: String,
    password: String,
    phonenumber: String,
    email: String,
    address: String
}

const userSchema = new Schema<User> ({
username: {
    type:String,
    required: true,
    unique: true
},
password: {
    type:String,
    required: true
},
phonenumber: {
    type:String,
    required: true,
    unique: true
},
email: {
    type:String,
    required: true,
    unique: true
},
address: {
    type:String,
    required: true
}

})

const user2: Model<User> = mongoose.models.User || mongoose.model<User>("User", userSchema);
export default user2;