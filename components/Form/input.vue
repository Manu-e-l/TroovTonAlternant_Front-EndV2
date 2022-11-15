<template>
    <div class="w-full">
        <label v-if="label" :for="$attrs.id">{{label}}</label>
    </div>
  
</template>

<script setup>
    import {useField} from "vee-validate";
    const props = defineProps({
        label : String,
        name : String,
        rules : String,
        modelValue: [String, Number], 
    })
    // Obtient une valeur et un message pour use dans le template 
	const { errorMessage, value } = useField(ref(props.name), props.rules, {
		initialValue: props.modelValue, // set init value
		label: props.label || props.name, // label used for displaying errors
	});
</script>

<script>
	// stop component from inheriting attrs
	export default {
		inheritAttrs: false,
	};
</script>

<style></style>

