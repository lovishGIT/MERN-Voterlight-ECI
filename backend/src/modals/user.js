import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI)

const UserSchema= new Schema(
    {
        name: {type: String},
        aadharNumber: {type: String},
        contactNumber: {type: String}, 
        password: {type: String},
        confirmPassword: {type: String},
    }
)


const User= mongoose.models["Users"] || mongoose.model("Users", UserSchema);
export default User;