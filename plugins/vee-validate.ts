import { defineRule } from "vee-validate";
import { required, min, min_value, max, max_value } from "@vee-validate/rules";

// Import et gestion de vee-validate (lib populaire pour la validation et gestion des forms sur vue)

export default defineNuxtPlugin(() => {
    defineRule("required", required);
    defineRule("min", min);
    defineRule("min_value", min_value);
    defineRule("max", max);
    defineRule("max_value", max_value);
});