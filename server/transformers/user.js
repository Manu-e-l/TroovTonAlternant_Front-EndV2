export const userTransormer = (user ) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username
    };

};