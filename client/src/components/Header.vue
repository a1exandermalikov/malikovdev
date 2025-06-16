<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Icon from './Icon.vue'

const isScrolled = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 20
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})

const isMobileMenuOpen = ref(false)
const toggleMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Плавная прокрутка к блоку
const scrollToSection = id => {
	const el = document.getElementById(id)
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' })
		isMobileMenuOpen.value = false
	}
}
</script>

<template>
	<header :class="{ scrolled: isScrolled }">
		<div class="header-logo">
			<img src="/src/assets/content/logo.png" alt="logo" />
			<h1>malikovdev</h1>
		</div>

		<nav class="desktop-nav">
			<ul class="nav-list">
				<li>
					<a @click.prevent="scrollToSection('about')">
						<Icon class="fa-solid" name="question" /> About Me
					</a>
				</li>
				<li>
					<a @click.prevent="scrollToSection('projects')">
						<Icon class="fa-solid" name="code" /> Projects
					</a>
				</li>
				<li>
					<a href="https://a1exandermalikov.github.io/maelson/" target="_blank">
						<Icon class="fa-solid" name="handshake-simple" /> Maelson
					</a>
				</li>
				<li>
					<a href="https://t.me/inflow_com" target="_blank">
						<Icon class="fa-solid" name="user-group" /> Information Flow
					</a>
				</li>
			</ul>
		</nav>

		<!-- Мобильный переключатель -->
		<div class="mobile-toggle" @click="toggleMenu">
			<Icon class="fa-solid" name="bars" />
		</div>

		<!-- Мобильное меню -->
		<nav class="mobile-nav" v-if="isMobileMenuOpen">
			<ul class="nav-list">
				<li><a @click="scrollToSection('about')">About Me</a></li>
				<li><a @click="scrollToSection('projects')">Projects</a></li>
				<li><a @click="scrollToSection('contact')">Contact</a></li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25px 30px;
	background-color: transparent;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	box-shadow: none;
	transition: padding 0.3s ease, box-shadow 0.3s ease;
	transform: translateY(-100%);
	animation: slideIn 0.6s ease forwards;
	background-color: var(--color-950);
}

header.scrolled {
	padding: 15px 30px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

@keyframes slideIn {
	to {
		transform: translateY(0);
	}
}

.header-logo {
	color: var(--text-normal);
	display: flex;
	align-items: center;
	gap: 5px;
}

.header-logo img {
	width: var(--font-5xl);
}

.header-logo {
	color: var(--text-normal);
}

.header-logo h1 {
	font-size: var(--font-3xl);
	font-family: var(--font-7);
	position: relative;
}

.header-logo h1::after {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 120%;
	height: 120%;
	background: radial-gradient(circle, #15803d22, transparent 70%);
	border-radius: 50%;
	z-index: -1;
}

.nav-list {
	display: flex;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;
	flex-direction: row;
}

.nav-list li a {
	color: var(--text-muted);
	font-family: var(--font-7);
	font-size: var(--font-lg);
	font-weight: 700;
	text-decoration: none;
	position: relative;
	transition: color 0.3s ease, transform 0.3s ease;
	display: flex;
	align-items: center;
	cursor: pointer;
}

.nav-list li a:hover {
	color: var(--text-normal);
}

.nav-list li a :deep(.fa-solid) {
	margin-right: 5px;
	color: var(--text-muted);
	font-size: var(--font-lg);
	transition: color 0.3s ease;
}

.nav-list li a:hover :deep(.fa-solid) {
	color: var(--text-normal);
}

.desktop-nav {
	display: flex;
}

.mobile-toggle {
	display: none;
	font-size: 1.5rem;
	color: var(--text-normal);
	cursor: pointer;
}

.mobile-nav {
	position: absolute;
	top: 100%;
	right: 0;
	background: rgba(0, 0, 0, 0.8);
	padding: 1rem 2rem;
	border-radius: 0 0 8px 8px;
	backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
	header {
		padding: 15px 20px;
	}
	.header-logo h1 {
		font-size: var(--font-4xl);
	}

	.header-logo img {
		width: var(--font-6xl);
	}

	.desktop-nav {
		display: none;
	}

	.mobile-toggle {
		display: block;
	}

	.nav-list {
		flex-direction: column;
		gap: 1rem;
	}

	.nav-list li a {
		font-size: 1.2rem;
	}
}
</style>
