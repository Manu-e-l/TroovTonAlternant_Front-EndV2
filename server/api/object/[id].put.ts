import ObjectModel from "~~/models/Object.model";
import { ObjectSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // Obtenir data depuis body
    const body = await useBody(event);

    // Obtention id (simi req.params.id)
    const id = event.context.params.id;

    // validité du schéma mise en place par Joi 
    const { error } = ObjectSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // objet modifié 
    try {
        await ObjectModel.findByIdAndUpdate(id, body);
        return { message: "Objet modifié" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});