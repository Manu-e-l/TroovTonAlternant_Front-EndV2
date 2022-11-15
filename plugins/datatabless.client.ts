import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

// Pour utiliser le plugin vue3 - easy data table  et pouvoir avoir le component "EasyDataTable" de dispo dans l'app 

export default defineNuxtPlugin((app) => {
    app.vueApp.component("EasyDataTable", Vue3EasyDataTable);
});