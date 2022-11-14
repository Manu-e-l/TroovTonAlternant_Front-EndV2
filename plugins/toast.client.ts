import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Import pour use dans l'app de vue-toast ( pop-up "notif")

export default defineNuxtPlugin((app) => {
    app.vueApp.use(Toast);
});