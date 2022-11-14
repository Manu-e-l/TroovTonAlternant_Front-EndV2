import mongoose from "mongoose";

const ObjectSchema = new mongoose.Schema(
    {
        objectName: {
            type: String,
            trim: true,
            required: true,
            minLength: 2
        },
        userWhoFound: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",

        }],
        foundDate: {
            type: Date,
            required: true
        },
        pageCount: {
            type: Number,
        }

    }
);

export default mongoose.model("Objet", ObjectSchema);