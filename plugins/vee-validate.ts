import { defineRule } from "vee-validate";
import { required, min, min_value, max, max_value } from "@vee-validate/rules";

// Import et gestion de vee-validate (lib populaire pour la validation et gestion des forms sur Vue)
// Import des règles !


export default defineNuxtPlugin(() => {
    defineRule("required", required);
    // min est utilisé pour les Strings
    defineRule("min", min);
    // min-value est utilisé pour les nombres
    defineRule("min_value", min_value);
    defineRule("max", max);
    defineRule("max_value", max_value);
});