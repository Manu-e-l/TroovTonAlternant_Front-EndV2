import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Import pour use dans l'app de vue-toast ( pop-up "notif")
// Préciser .client puisque c'est un plug-in coté client 

export default defineNuxtPlugin((app) => {
    app.vueApp.use(Toast);
});