import { sendError } from "h3";
import { getRefreshTokenByToken } from "~~/server/db/refreshTokens";
import { decodeRefreshToken, generateTokens } from "~~/utils/jwt";
import { getUserById } from "~~/server/db/users";

export default defineEventHandler(async (event) => {
    
    const cookies = useCookies(event);

    const refreshToken = cookies.refresh_token;
    
    // Toujours faire un save checK
    if(!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh Token n'est pas fonctionnel "
        }));
    }

    const rToken = await getRefreshTokenByToken(refreshToken);
    
    
    if(!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Refresh Token n'est pas fonctionnel "
        }));
    }
    
    // Vérifions que le RefreshToken est dans la Db
    const token = decodeRefreshToken(refreshToken);

    try {
        // Obtention de l'user 
        const user = await getUserById(token.userId);

        // Génere un nouveau groupe de Tokens (acces et refresh)
        const { accesToken } = generateTokens(user);

        return {
            acces_token: accesToken
        };
        
    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: "Quelque chose s'est mal passé"
        }));
        
    }
});