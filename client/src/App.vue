<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import Header from './components/Header.vue'
import TechBackground from './components/TechBackground.vue'
import Button from './components/Button.vue'

const sections = ref([])
let currentIndex = 0
let isScrolling = false

const scrollToIndex = index => {
	if (index < 0 || index >= sections.value.length) return
	currentIndex = index
	isScrolling = true
	sections.value[currentIndex].scrollIntoView({ behavior: 'smooth' })
	setTimeout(() => {
		isScrolling = false
	}, 800)
}

const goTo = id => {
	const index = sections.value.findIndex(s => s.querySelector(`#${id}`))
	if (index !== -1) scrollToIndex(index)
}

onMounted(() => {
	sections.value = [...document.querySelectorAll('.viewport-section')]

	const handleWheel = e => {
		if (isScrolling) return
		if (e.deltaY > 0 && currentIndex < sections.value.length - 1) {
			scrollToIndex(currentIndex + 1)
		} else if (e.deltaY < 0 && currentIndex > 0) {
			scrollToIndex(currentIndex - 1)
		}
	}

	let touchStartY = 0
	let touchEndY = 0

	const handleTouchStart = e => {
		touchStartY = e.changedTouches[0].clientY
	}

	const handleTouchEnd = e => {
		touchEndY = e.changedTouches[0].clientY
		const diff = touchStartY - touchEndY
		if (Math.abs(diff) < 50 || isScrolling) return

		if (diff > 0 && currentIndex < sections.value.length - 1) {
			scrollToIndex(currentIndex + 1)
		} else if (diff < 0 && currentIndex > 0) {
			scrollToIndex(currentIndex - 1)
		}
	}

	window.addEventListener('wheel', handleWheel, { passive: true })
	window.addEventListener('touchstart', handleTouchStart, { passive: true })
	window.addEventListener('touchend', handleTouchEnd, { passive: true })

	onUnmounted(() => {
		window.removeEventListener('wheel', handleWheel)
		window.removeEventListener('touchstart', handleTouchStart)
		window.removeEventListener('touchend', handleTouchEnd)
	})
})
</script>

<template>
	<div class="application-container">
		<!-- Hero -->
		<section class="viewport-section">
			<div class="landing-hero">
				<Header />
				<TechBackground />

				<div class="hero-content-wrapper">
					<div class="hero-content-inner">
						<h2>Engineering the web, end to end.</h2>
						<p>- Fullstack development that solves real problems. -</p>
						<div class="social-links-container">
							<Button
								href="https://github.com/a1exandermalikov"
								tooltip="GitHub"
							>
								<Icon icon="mdi:github" class="icon" />
							</Button>
							<Button tooltip="Telegram" href="https://t.me/alexander_malikov">
								<Icon icon="mdi:telegram" class="icon" />
							</Button>
							<Button
								tooltip="Instagram"
								href="https://instagram.com/a1exander_malikov"
							>
								<Icon icon="mdi:instagram" class="icon" />
							</Button>
						</div>
					</div>
				</div>

				<div class="navigation-indicator">
					<Icon icon="mdi:arrow-down" class="icon" />
				</div>
			</div>
		</section>

		<!-- About -->
		<section id="about" class="viewport-section">
			<div class="section-content">
				<div class="profile-section">
					<div class="achievements-sidebar">
						<div class="timeline-component">
							<h3 class="timeline-header">Latest achievements</h3>
							<div class="timeline-content">
								<div class="timeline-entry">
									<span class="timeline-marker"></span>
									<div>
										<div class="entry-timestamp">2 days ago</div>
										<div class="entry-description">
											Created 3 portfolios and 18 projects for members of the
											<strong>InFlow</strong> community — handcrafted by me.
										</div>
									</div>
								</div>

								<div class="timeline-entry">
									<span class="timeline-marker"></span>
									<div>
										<div class="entry-timestamp">1 month ago</div>
										<div class="entry-description">
											Started development of the developer community platform
											<strong>Information Flow</strong>.
										</div>
									</div>
								</div>
								<div class="timeline-entry">
									<span class="timeline-marker"></span>
									<div>
										<div class="entry-timestamp">1 year ago</div>
										<div class="entry-description">
											Developed the ideology of an artificial mind:
											<strong>Edit and Emmet</strong>. Development paused due to
											lack of sufficient knowledge.
										</div>
									</div>
								</div>

								<div class="timeline-footer">
									<a href="#" class="timeline-link">View full log →</a>
								</div>
							</div>
						</div>
					</div>
					<div class="profile-content">
						<div class="profile-image-section">
							<div class="developer-portrait">
								<img src="/src/assets/content/about.jfif" alt="about" />
							</div>
						</div>
						<div class="profile-information">
							<div class="biography-section">
								<h3>About Me</h3>
								<h4>Alexander Malikov</h4>
								<p>
									I'm a fullstack developer with a passion for clean code,
									intuitive UX, and modern technologies. From crafting
									responsive frontends in Vue, Tailwind and TypeScript to
									building scalable backends with Node.js and Express — I build
									web solutions that are both beautiful and functional. I'm
									confident with Git workflows, use Vite for blazing-fast
									development, and have experience with tools like Bootstrap,
									ShadCN, and Iconify. I'm constantly learning and evolving,
									always looking to solve real-world problems through code.
									Whether it's a landing page, an Electron app, or a fullstack
									platform — I engineer the web, end to end.
								</p>
							</div>
							<div class="technology-stack">
								<Button tooltip="HTML5"
									><Icon icon="devicon:html5" class="icon"
								/></Button>
								<Button tooltip="CSS3"
									><Icon icon="devicon:css3" class="icon"
								/></Button>
								<Button tooltip="Figma"
									><Icon icon="logos:figma" class="icon"
								/></Button>
								<Button tooltip="JavaScript"
									><Icon icon="logos:javascript" class="icon"
								/></Button>
								<Button tooltip="Python"
									><Icon icon="logos:python" class="icon"
								/></Button>
								<Button tooltip="C"
									><Icon icon="devicon:c" class="icon"
								/></Button>
								<Button tooltip="Git"
									><Icon icon="logos:git-icon" class="icon"
								/></Button>
								<Button tooltip="Sass"
									><Icon icon="material-icon-theme:sass" class="icon"
								/></Button>
								<Button tooltip="Bootstrap"
									><Icon icon="devicon:bootstrap" class="icon"
								/></Button>
								<Button tooltip="WordPress"
									><Icon icon="bi:wordpress" class="icon"
								/></Button>
								<Button tooltip="Vue.js"
									><Icon icon="logos:vue" class="icon"
								/></Button>
								<Button tooltip="React"
									><Icon icon="devicon:react" class="icon"
								/></Button>
								<Button tooltip="TypeScript"
									><Icon icon="devicon:typescript" class="icon"
								/></Button>
								<Button tooltip="Tailwind CSS"
									><Icon icon="logos:tailwindcss-icon" class="icon"
								/></Button>
								<Button tooltip="Vite"
									><Icon icon="logos:vitejs" class="icon"
								/></Button>
								<Button tooltip="Node.js"
									><Icon icon="logos:nodejs-icon-alt" class="icon"
								/></Button>
								<Button tooltip="Express.js"
									><Icon icon="skill-icons:expressjs-light" class="icon"
								/></Button>
								<Button tooltip="Next.js"
									><Icon icon="skill-icons:nextjs-light" class="icon"
								/></Button>
								<Button tooltip="Electron"
									><Icon icon="logos:electron" class="icon"
								/></Button>
								<Button tooltip="Supabase"
									><Icon icon="logos:supabase-icon" class="icon"
								/></Button>
								<Button tooltip="Shadcn UI"
									><Icon icon="simple-icons:shadcnui" class="icon"
								/></Button>
								<Button tooltip="Firebase"
									><Icon icon="devicon:firebase" class="icon"
								/></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Projects -->
		<section id="projects" class="viewport-section">
			<div class="section-content">
				<div class="landing-hero contact-variant">
					<h2>Contact</h2>
					<p>Feel free to reach out on Telegram or GitHub.</p>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.icon {
	width: 24px;
	height: 24px;
}
.application-container {
	height: 100vh;
	position: relative;
}

.viewport-section {
	height: 100vh;
	width: 100%;
	display: grid;
	place-items: center;
}

.section-content {
	height: calc(100vh - 80px);
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	margin-top: 80px;
	background-color: var(--color-950);
	padding: 30px;
}

.landing-hero {
	display: flex;
	flex-direction: column;
	height: 100dvh;
	position: relative;
	overflow: hidden;
}
.hero-content-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100% - 80px);
	margin-top: 80px;
	padding: 20px;
	position: relative;
}
.hero-content-inner {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	opacity: 0;
	transform: translateY(20px);
	animation: fadeSlideIn 0.8s ease-out 0.2s forwards;
}
@keyframes fadeSlideIn {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.hero-content-inner h2 {
	font-size: var(--font-8xl);
	color: var(--color-green-500);
	font-family: var(--font-8);
	font-weight: 900;
	filter: drop-shadow(0 0 100px var(--color-green-500));
	text-align: center;
}
.hero-content-inner p {
	font-size: var(--font-4xl);
	color: var(--text-muted);
	font-family: var(--font-6);
}
.social-links-container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
}
.social-links-container .btn-component {
	display: grid;
	place-items: center;
	width: 40px;
	height: 40px;
	padding: 0;
}

.social-links-container .btn-component:hover .icon {
	color: var(--color-green-600);
}
.social-links-container .icon {
	width: var(--font-4xl);
	height: var(--font-4xl);
	object-fit: contain;
	display: block;
	vertical-align: middle;
	color: var(--text-muted);
}

.navigation-indicator {
	position: absolute;
	bottom: 40px;
	left: 50%;
	transform: translateX(-50%);
	color: var(--text-normal);
	font-size: var(--font-3xl);
	animation: scrollBlink 2s infinite;
	opacity: 0.7;
	pointer-events: none;
}
@keyframes scrollBlink {
	0%,
	100% {
		transform: translateX(-50%) translateY(0);
		opacity: 0.7;
	}
	50% {
		transform: translateX(-50%) translateY(10px);
		opacity: 1;
	}
}

.profile-section {
	display: flex;
	gap: 50px;
}

.profile-content {
	height: max-content;
	display: flex;
	align-items: stretch;
	justify-content: start;
	gap: 50px;
	width: max-content;
}
.profile-image-section {
	display: grid;
	place-items: center;
}
.profile-information {
	width: 50%;
	color: var(--text-muted);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 40px;
}

.biography-section {
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.biography-section h3 {
	font-size: var(--font-7xl);
	font-family: var(--font-8);
	color: var(--text-normal);
	letter-spacing: 1px;
}
.biography-section h4 {
	font-size: var(--font-4xl);
	font-family: var(--font-6);
	color: var(--color-green-500);
	letter-spacing: 1px;
}
.biography-section p {
	font-size: var(--font-xl);
	font-family: var(--font-7);
	color: var(--text-muted);
	font-weight: 500;
	max-width: 500px;
	line-height: 1.5;
}
.developer-portrait {
	display: grid;
	place-items: center;
	width: 400px;
	height: 100%;
	overflow: hidden;
	border-radius: var(--radius);
	border: 2px solid var(--color-800);
}
.developer-portrait img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.technology-stack {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	width: max-content;
	gap: 10px;
}
.technology-stack .btn-component {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	padding: 0;
	border-color: var(--color-800);
	background-color: var(--color-900);
}

.technology-stack .btn-component:hover {
	background-color: var(--color-800);
	border-color: var(--color-700);
}

.technology-stack .icon {
	width: var(--font-3xl);
	height: var(--font-3xl);
	object-fit: contain;
	display: block;
	vertical-align: middle;
}

.timeline-component {
	background: var(--color-900);
	border: 2px solid var(--color-800);
	border-radius: var(--radius);
	padding: 24px;
	width: 350px;
	height: 100%;
	color: var(--text-muted);
	font-family: var(--font-6);
	height: fit-content;
}

.timeline-header {
	font-size: var(--font-4xl);
	font-family: var(--font-6);
	color: var(--text-normal);
	margin-bottom: 34px;
	font-weight: 700;
}

.timeline-content {
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
	border-left: 2px solid var(--color-800);
	padding-left: 20px;
	margin-left: 8px;
}

.timeline-entry {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	position: relative;
}

.timeline-marker {
	width: 8px;
	height: 8px;
	background: var(--text-muted);
	border-radius: 50%;
	position: absolute;
	left: -25px;
	top: 2px;
	box-shadow: 0 0 0 3px var(--color-900);
}

.entry-timestamp {
	font-size: var(--font-lg);
	color: var(--text-muted);
	margin-bottom: 8px;
	font-weight: 500;
}

.entry-description {
	font-size: var(--font-xl);
	color: var(--text-normal);
	line-height: 1.4;
	font-weight: 500;
}

.timeline-footer {
	margin-top: 16px;
	padding-top: 16px;
	border-top: 2px solid var(--color-800);
}

.timeline-link {
	font-size: var(--font-lg);
	color: var(--color-green-500);
	text-decoration: none;
	font-weight: 600;
	transition: all 0.2s ease;
}

.timeline-link:hover {
	text-decoration: underline;
	color: var(--color-green-400);
}

/* Desktop и большие планшеты */
@media (max-width: 1200px) {
	.profile-section {
		gap: 40px;
		padding: 0 20px;
	}

	.profile-content {
		gap: 40px;
	}

	.developer-portrait {
		width: 350px;
		height: 480px;
	}

	.biography-section p {
		max-width: 600px;
	}

	.timeline-component {
		width: 320px;
	}
}

@media (max-width: 1024px) {
	.section-content {
		height: calc(100vh - 70px);
		margin-top: 70px;
		padding: 0 20px;
	}

	.hero-content-wrapper {
		height: calc(100% - 70px);
		margin-top: 70px;
	}

	.hero-content-inner h2 {
		font-size: clamp(2.5rem, 5vw, var(--font-6xl));
	}

	.hero-content-inner p {
		font-size: clamp(1.25rem, 3vw, var(--font-3xl));
	}

	.profile-section {
		flex-direction: column;
		align-items: center;
		gap: 30px;
		padding: 0 20px;
		height: 100%;
		justify-content: center;
	}

	.achievements-sidebar {
		order: 2;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.timeline-component {
		width: 100%;
		max-width: 600px;
		padding: 20px;
	}

	.profile-content {
		flex-direction: column;
		align-items: center;
		padding: 0;
		order: 1;
		gap: 30px;
	}

	.profile-image-section,
	.profile-information {
		width: 100%;
		max-width: 600px;
	}

	.developer-portrait {
		width: 300px;
		height: 380px;
	}

	.biography-section {
		text-align: center;
		align-items: center;
		gap: 20px;
	}

	.biography-section h3 {
		font-size: clamp(2rem, 6vw, var(--font-6xl));
	}

	.biography-section h4 {
		font-size: clamp(1.5rem, 4vw, var(--font-3xl));
	}

	.biography-section p {
		font-size: clamp(1rem, 2.5vw, var(--font-lg));
		max-width: 100%;
	}

	.technology-stack {
		grid-template-columns: repeat(6, minmax(0, 1fr));
		justify-self: center;
	}

	.timeline-header {
		font-size: clamp(1.5rem, 4vw, var(--font-2xl));
	}
}

@media (max-width: 768px) {
	/* Общие отступы и структура */
	.viewport-section {
		flex-direction: column;
	}

	.section-content {
		width: 100%;
		height: 100%;
		padding: 16px;
		gap: 24px;
	}

	/* Главный блок героя */
	.hero-content-wrapper {
		margin-top: 60px;
		padding: 12px;
		text-align: center;
	}

	.hero-content-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}

	.hero-content-inner h2 {
		font-size: clamp(1.5rem, 6vw, 2rem);
	}

	.hero-content-inner p {
		font-size: clamp(0.9rem, 4.5vw, 1.1rem);
	}

	/* Социальные иконки */
	.social-links-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 12px;
	}

	.social-links-container .btn-component {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		width: 20px;
		height: 20px;
	}

	/* Секция профиля */
	.profile-section {
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}

	.profile-content {
		flex-direction: column;
		align-items: center;
		gap: 24px;
		width: 100%;
	}
	.profile-information {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.profile-image-section {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.developer-portrait {
		width: 180px;
		height: 200px;
		border-radius: 12px;
		overflow: hidden;
	}

	.developer-portrait img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	/* Биография */
	.biography-section {
		align-items: center;
		text-align: center;
		gap: 16px;
	}

	.biography-section h3 {
		font-size: clamp(1.3rem, 5vw, 1.6rem);
	}

	.biography-section h4 {
		font-size: clamp(1rem, 4vw, 1.3rem);
		color: #aaa;
	}

	.biography-section p {
		font-size: var(--font-xl);
		line-height: 1.5;
	}

	/* Технологии */
	.technology-stack {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 8px;
		justify-items: center;
	}

	.technology-stack .btn-component {
		width: 36px;
		height: 36px;
	}

	/* Таймлайн */
	.timeline-component {
		display: none;
	}

	.timeline-header {
		font-size: clamp(1.1rem, 5vw, 1.3rem);
		text-align: center;
		margin-bottom: 10px;
	}

	.timeline-content {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-left: 12px;
	}

	.timeline-entry {
		display: flex;
		gap: 10px;
		position: relative;
	}

	.timeline-marker {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: white;
		position: absolute;
		left: -14px;
		top: 8px;
	}

	.entry-timestamp {
		font-size: clamp(0.7rem, 3.5vw, 0.85rem);
		color: #ccc;
	}

	.entry-description {
		font-size: clamp(0.8rem, 4vw, 1rem);
		line-height: 1.4;
	}

	.timeline-link {
		font-size: clamp(0.75rem, 3vw, 0.9rem);
		color: #3af;
		text-align: center;
		margin-top: 12px;
		display: block;
	}

	.navigation-indicator {
		margin-top: 20px;
		text-align: center;
		font-size: 1.5rem;
	}
}
</style>
