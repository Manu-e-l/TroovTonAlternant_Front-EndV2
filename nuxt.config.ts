// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon","@pinia/nuxt"],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        jwtAccesSecret: process.env.JWT_ACCES_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET    
    // MONGO_URI: process.env.MONGO_URI
    },
    // register nitro plugin
    nitro: {
       
    },
    /// transpile  afew packages
    build: {
        transpile: ["@headlessui/vue", "vue-toastification", "@headlessui/tailwindcss"],
    },

});
