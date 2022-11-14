import ObjectModel from "~~/models/Object.model";

export default defineEventHandler(async (event) => {

    const id = event.context.params.id;

    // objet supprimé
    try {
        await ObjectModel.findByIdAndDelete(id);
        return { message: "Objet supprimé" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }

});