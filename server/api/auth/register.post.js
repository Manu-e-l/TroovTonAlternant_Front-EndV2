import {sendError} from "h3";
import { createUser } from "~~/server/db/users";
import { userTransformer } from "~~/server/transformers/user";


export default defineEventHandler(async (event) =>{
    const body = await useBody(event);

    const {username, email, password, repeatPassword, name} = body;

    if (!username || !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({
            statusCode : 400, 
            statusMessage: "Invalid params"
        }));
    }
    
    if (password !== repeatPassword) {
        return sendError(event, createError({ 
            statusCode: 400,
            statusMessage: "les mots de passe sont différents."
        }));
    }
     
    const userData = {
        username,
        email,
        password,
        name
    };
    
    const user = await createUser(userData);

    return {
        body: userTransformer(user)
    };

});