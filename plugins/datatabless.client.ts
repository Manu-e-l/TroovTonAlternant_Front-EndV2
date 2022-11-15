import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

// Pour utiliser le plugin Vue3EasyDataTable comme un components globa qui pour être use dans l'app 
// Préciser .client puisque c'est un plug-in coté client 

export default defineNuxtPlugin((app) => {
    app.vueApp.component("EasyDataTable", Vue3EasyDataTable);
});