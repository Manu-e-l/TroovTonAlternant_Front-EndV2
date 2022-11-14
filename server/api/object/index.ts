import ObjectModel from "~~/models/Object.model";

export default defineEventHandler(async (event) => {
    return await ObjectModel.find().populate("user");
});
