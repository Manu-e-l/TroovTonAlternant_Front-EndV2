import { useToast as toasty } from "vue-toastification";

// Cela va définir toast  qui sera utilisé dans notre apploication 
// Pour l'use = useToast(). ensuite appeler la () voulue de ce composables
export default function () {
    const toast = toasty();
    // export toast function
    return toast;
}