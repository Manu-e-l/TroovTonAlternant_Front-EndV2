import mongoose from "mongoose";
import bcrypt from "bcrypt"; 

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 133,
            minlength: 6
        },
    },
    {
        timestamps: true,
    }

);

UserSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


export default mongoose.model("user", UserSchema);

