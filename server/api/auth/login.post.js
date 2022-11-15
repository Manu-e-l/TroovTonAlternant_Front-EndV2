import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens } from "~~/utils/jwt";

export default defineEventHandler(async (event) => {
    const body = await useBody(event);

    const {username, password} = body;

    if(!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Champs incorrects"
        }));
    }

    // Si log réussi

    const user = await getUserByUsername(username);
    
    if (!user) {
        return sendError(event, createError({
            statusCode:400,
            statusMessage: "Pseudo ou mot de passe incorrect"
        }));
    }
    // Comparer password
    const verifPassword = await bcrypt.compare(password, user.password);

    if


    // 
    const {accesToken, refreshToken} = generateTokens()

    return {
        user: user,
        verifPassword
    };
});