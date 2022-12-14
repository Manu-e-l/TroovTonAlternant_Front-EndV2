/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter"],
            },
            colors: {
                primary: {
                    DEFAULT: colors.orange[500],
                    ...colors.orange,
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
