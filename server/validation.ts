import Joi from "joi";

export const ObjectSchema = Joi.object({
    objectName: Joi.string().trim(true).required().min(2),
    userWhoFound: Joi.array(),
    foundDate: Joi.date().required(),
    pageCount: Joi.number(),
});