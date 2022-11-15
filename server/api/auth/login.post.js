import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/utils/jwt";
import { createRefreshToken } from "~~/server/db/refreshTokens";
import { userTransformer } from "~~/server/transformers/user";
import { sendError } from "h3";


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

    if (!verifPassword){
        return sendError(event, createError({
            statusCode:400,
            statusMessage: "Pseudo ou mot de passe incorrect"
        }));

    }

    // création 2 Tokens (Acces et refresh) 
    const {accesToken, refreshToken} = generateTokens(user);

    // Save dans db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    });

    //  Add http only dans un cookie
    sendRefreshToken(event, refreshToken);

    return {
        acces_Token: accesToken,
        user: userTransformer(user),
       
    };
});