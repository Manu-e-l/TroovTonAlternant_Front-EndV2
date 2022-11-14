import { useToast as toasty } from "vue-toastification";

// Pour importer et utiliser la librairie "vue-toastification"
export default function () {
    const toast = toasty();
    // export toast function
    return toast;
}