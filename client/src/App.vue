<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Works from './components/Works.vue'
import About from './components/About.vue'

const activeSection = ref('')

onMounted(() => {
	const sections = document.querySelectorAll('[id]')
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					activeSection.value = entry.target.id
				}
			})
		},
		{
			rootMargin: '-30% 0px -60% 0px',
			threshold: 0,
		}
	)

	sections.forEach(section => observer.observe(section))
	onUnmounted(() => observer.disconnect())
})
</script>

<template>
	<div
		style="
			height: 100vh;
			display: flex;
			flex-direction: column;
			overflow: visible;
		"
	>
		<Header :activeSection="activeSection" />
		<Hero />
	</div>

	<Services />
	<Works />
	<About />
</template>
