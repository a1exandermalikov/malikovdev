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

const fullClassName = computed(() => {
	const external = attrs.class ?? ''
	return `btn-component variant-${props.variant} ${props.className} ${external}`.trim()
})

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
	text-transform: capitalize;
	font-family: var(--font-1);
	display: inline-flex;
	align-items: center;
	gap: 5px;
}

.variant-default {
	border: 2px solid var(--color-700);
	background-color: var(--color-900);
	color: var(--text-normal);
}

.variant-default:hover {
	border: 2px solid var(--color-700);
	background-color: var(--color-800);
}

.variant-primary {
	background-color: var(--text-normal);
	color: var(--color-900);
	border: none;
	font-weight: 900;
}

.variant-primary:hover {
	background-color: var(--color-300);
}

.variant-link {
	color: var(--text-muted);
	font-weight: 900;
	background: none;
	border: none;
}

/* Активная кнопка */
.variant-link.active {
	color: var(--text-normal);
	font-weight: 900;
	background: none;
	background-color: var(--color-900);
	border: none;
}

.variant-link:hover {
	color: var(--text-normal);
	font-weight: 900;
	background: none;
	background-color: var(--color-900);
	border: none;
}

.variant-secondary {
	border: 2px solid var(--color-green-500);
	background-color: var(--color-green-950);
	color: var(--text-normal);
}

.variant-secondary:hover {
	border: 2px solid var(--color-green-400);
	background-color: var(--color-green-900);
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
