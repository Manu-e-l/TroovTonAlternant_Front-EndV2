import Joi from "joi";

export const ObjectSchema = Joi.object({
    objectName: Joi.string()
        .trim()
        .required()
        .min(2),
    userWhoFound: Joi.array(),
    foundDate: Joi.date()
        .required(),
    pageCount: Joi.number()
});

export const UserSchema = Joi.object({
    email: Joi.string()
        .required()
        .lowercase()
        .trim(),
    password: Joi.string()
        .required()
        .max(133)
        .min(6)
});