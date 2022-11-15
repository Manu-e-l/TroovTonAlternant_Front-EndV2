import jwt from "jsonwebtoken";

const generateAccesToken =  (user) => {
    
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtAccesSecret,{
        expiresIn: "10m"
    });
};

const generateRefreshToken =  (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtRefreshSecret,{
        expiresIn: "3h"
    });
};

export const generateTokens = (user) => {
    const accesToken = generateAccesToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        accesToken: accesToken,
        refreshToken: refreshToken
    };
};

export const sendRefreshToken = (event, token) => {
    setCookie(event, "refresh_token", token, {
        httpOnly:true,
        sameSite:true
    });
};