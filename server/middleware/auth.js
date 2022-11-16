// But = obtenir les infos de l'acces token et le décoder puis le sauvegarder. Ensuite les lier à la requête
// import lib UrlPattern, utilisation de cette librairie pour la gestion des :id dynamiques
import UrlPattern from "url-pattern";
import { decodeAccesToken } from "~~/utils/jwt";
import { sendError } from "h3";
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {
    // Route où le middleware fera effet
    const endpoints = [
        "/api/auth/user"
    ]

    // On sera capable de savoir si ce pattern fonctionne bien avec notre endpoint visé 
    const isHandledByThisMiddleware = endpoints.some(endpoint => {

        const pattern = new UrlPattern(endpoint);

        return pattern.match(event.req.url);
    });
    if (!isHandledByThisMiddleware) {
        return 
    }
    // Accès au token 
    const token = event.req.headers['authorization']?.split("")[1];

    const decoded = decodeAccesToken(token);

    if(!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Accès refusé"
        }));
    }

    
    try {
        const userId = decoded.userId;

        const user = await getUserById();

        event.context.auth = { user };
    } catch (error) {
        return;
    }


});