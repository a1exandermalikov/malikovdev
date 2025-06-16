<template>
	<i :class="iconClass" v-bind="attrs"></i>
</template>

<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	className: {
		type: String,
		default: '',
	},
})

const attrs = useAttrs()

const iconClass = computed(() => `fa-${props.name} ${props.className}`.trim())
</script>
