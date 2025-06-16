<template>
	<component
		:is="componentType"
		v-bind="componentProps"
		:class="fullClassName"
		@click="onClick"
	>
		<slot />
		<span v-if="tooltip" class="tooltip">{{ tooltip }}</span>
	</component>
</template>

<script setup>
import { computed, useAttrs } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
	path: String,
	href: String,
	variant: {
		type: String,
		default: 'default',
	},
	className: {
		type: String,
		default: '',
	},
	onClick: Function,
	tooltip: String,
})

const attrs = useAttrs()

const fullClassName = computed(() =>
	`btn-component variant-${props.variant} ${props.className}`.trim()
)

const componentType = computed(() => {
	if (props.href) return 'a'
	if (props.path) return RouterLink
	return 'button'
})

const componentProps = computed(() => {
	if (props.href) {
		return {
			href: props.href,
			target: '_blank',
			rel: 'noopener noreferrer',
			...attrs,
		}
	}
	if (props.path) {
		return {
			to: props.path,
			...attrs,
		}
	}
	return {
		type: 'button',
		...attrs,
	}
})
</script>

<style scoped>
.btn-component {
	position: relative;
	padding: 10px 20px;
	border-radius: var(--radius);
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.25s ease;
}

.variant-default {
	border: 2px solid var(--color-900);
	background-color: var(--color-950);
	color: var(--text-normal);
}

.variant-default:hover {
	border: 2px solid var(--color-800);
	background-color: var(--color-900);
}

/* Tooltip */
.tooltip {
	position: absolute;
	bottom: 115%;
	left: 50%;
	transform: translateX(-50%);
	background-color: var(--color-800);
	color: var(--text-light);
	padding: 5px 10px;
	border-radius: 4px;
	white-space: nowrap;
	font-size: 12px;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.2s ease;
	z-index: 10;
}

.btn-component:hover .tooltip {
	opacity: 1;
}
</style>
