<script setup>
import Button from './Button.vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
	activeSection: String,
})

function scrollTo(id) {
	const el = document.getElementById(id)
	if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<header>
		<div class="logo">
			<img src="/src/assets/content/logo.png" alt="#" />
			<h1>malikovdev</h1>
		</div>
		<nav class="desktop-nav">
			<Button
				variant="link"
				:class="{ active: activeSection === 'services' }"
				@click="scrollTo('services')"
			>
				services
			</Button>
			<Button
				variant="link"
				:class="{ active: activeSection === 'works' }"
				@click="scrollTo('works')"
			>
				works
			</Button>
			<Button
				variant="link"
				:class="{ active: activeSection === 'blog' }"
				@click="scrollTo('blog')"
			>
				blog
			</Button>
			<Button
				variant="link"
				:class="{ active: activeSection === 'about' }"
				@click="scrollTo('about')"
			>
				about me
			</Button>
			<Button
				variant="link"
				:class="{ active: activeSection === 'contact' }"
				@click="scrollTo('contact')"
			>
				contact
			</Button>
		</nav>
		
		<Button style="padding: 10px 15px" variant="primary">
			<Icon
				style="font-size: var(--font-2xl)"
				icon="material-symbols-light:business-center-rounded"
			/>
			book me
		</Button>
		<div class="mobile-nav">
			<Button
				variant="link"
				@click="showMobileNav = !showMobileNav"
				style="padding: 10px;"
			>
				<Icon
					style="font-size: var(--font-3xl)"
					icon="mingcute:menu-fill"
				/>
			</Button>
			<nav v-if="showMobileNav" class="mobile-nav-list">
				<Button
					variant="link"
					:class="{ active: activeSection === 'services' }"
					@click="scrollTo('services')"
				>
					services
				</Button>
				<Button
					variant="link"
					:class="{ active: activeSection === 'works' }"
					@click="scrollTo('works')"
				>
					works
				</Button>
				<Button
					variant="link"
					:class="{ active: activeSection === 'blog' }"
					@click="scrollTo('blog')"
				>
					blog
				</Button>
				<Button
					variant="link"
					:class="{ active: activeSection === 'about' }"
					@click="scrollTo('about')"
				>
					about me
				</Button>
				<Button
					variant="link"
					:class="{ active: activeSection === 'contact' }"
					@click="scrollTo('contact')"
				>
					contact
				</Button>
			</nav>
		</div>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 60px;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1000;
	background-color: var(--color-950);
	border-bottom: 2px solid var(--color-900);
	filter: drop-shadow(0 0 150px rgba(255, 255, 255, 0.137));
}

header > .btn-component {
	margin-left: auto;
	margin-right: 0;
}

.logo {
	display: flex;
	align-items: center;
	gap: 7px;
}

.logo img {
	width: var(--font-5xl);
}

.logo h1 {
	font-size: var(--font-4xl);
}

nav {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-left: auto;
}

.mobile-nav {
	display: none;
}


.mobile-nav .btn-component{
	background-color: var(--text-normal);
	color: var(--color-950);
}
.mobile-nav-list {
	position: absolute;
	top: 100%;
	right: 0;
	background-color: var(--color-950);
	border: 1px solid var(--color-900);
	border-radius: var(--radius-lg);
	padding: 10px;
}

@media (max-width: 768px) {
	header > .btn-component {
		margin-right: 20px;
	}
	header {
		padding: 20px 20px;
	}
	.desktop-nav {
		display: none;
	}
	.mobile-nav {
		display: block;
	}
	
}
</style>
