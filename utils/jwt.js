import jwt from "jsonwebtoken";

const generateAccesToken =  (user) => {

};

const generateRefreshToken =  (user) => {

    
};

export const generateTokens = (user) => {
    const accesToken = generateAccesToken(user);
    const refreshToken = generateAccesToken(user);

    return {
        accesToken: accesToken,
        refresToken: refreshToken
    };
};