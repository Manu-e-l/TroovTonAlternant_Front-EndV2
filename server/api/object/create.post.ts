import ObjectModel from "~~/models/Object.model";
import { ObjectSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // Obtenir data depuis  body
    const body = await useBody(event);

    // validité du schéma mep par Joi
    const { error } = ObjectSchema.validate(body);
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // objet crée 
    try {
        await ObjectModel.create(body);
        return { message: "Objet crée" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});