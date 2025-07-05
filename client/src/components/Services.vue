<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
	<div id="services" class="services">
		<div class="services__title">
			<h3 class="section-title">What I do</h3>
			<h2 class="section-description">
				Bridging Code and Infrastructure<br />
				Across the Full Stack
			</h2>
		</div>

		<div class="services__grid">
			<!-- Frontend -->
			<div class="service-card">
				<div class="service-top">
					<div class="service-title">
						<Icon class="icon" icon="fluent:design-ideas-20-filled" />
						<h3>Frontend Development</h3>
					</div>
					<div class="service-arrow">
						<Icon class="icon" icon="radix-icons:arrow-top-right" />
					</div>
				</div>
				<div class="service-bottom">
					<p class="service-text">
						Designing immersive user experiences that merge functionality with visual precision — optimized for speed, accessibility, and impact.
					</p>
					<div class="tags">
						<span><Icon class="icon" icon="mdi:human-greeting" />User Experience</span>
						<span><Icon class="icon" icon="mdi:monitor-cellphone" />Interface Design</span>
						<span><Icon class="icon" icon="mdi:eye-check-outline" />Accessibility</span>
						<span><Icon class="icon" icon="mdi:palette-swatch" />Design Systems</span>
						<span><Icon class="icon" icon="mdi:responsive" />Responsive Layouts</span>
					</div>
				</div>
			</div>

			<!-- Backend -->
			<div class="service-card">
				<div class="service-top">
					<div class="service-title">
						<Icon class="icon" icon="mdi:database" />
						<h3>Backend Development</h3>
					</div>
					<div class="service-arrow">
						<Icon class="icon" icon="radix-icons:arrow-top-right" />
					</div>
				</div>
				<div class="service-bottom">
					<p class="service-text">
						Structuring the logic, data, and infrastructure behind every interaction — secure, scalable, and built to perform under real-world load.
					</p>
					<div class="tags">
						<span><Icon class="icon" icon="mdi:api" />API Architecture</span>
						<span><Icon class="icon" icon="carbon:data-structured" />Data Modeling</span>						
						<span><Icon class="icon" icon="mdi:lock-check" />Authentication</span>
						<span><Icon class="icon" icon="mdi:cogs" />Business Logic</span>
						<span><Icon class="icon" icon="mdi:server-network" />Server Optimization</span>
					</div>
				</div>
			</div>

			<!-- DevOps -->
			<div class="service-card">
				<div class="service-top">
					<div class="service-title">
						<Icon class="icon" icon="mdi:cloud-braces" />
						<h3>DevOps & Tools</h3>
					</div>
					<div class="service-arrow">
						<Icon class="icon" icon="radix-icons:arrow-top-right" />
					</div>
				</div>
				<div class="service-bottom">
					<p class="service-text">
						Automating environments and scaling operations with modern tooling — enabling faster delivery, reliability, and system integrity.
					</p>
					<div class="tags">
						<span><Icon class="icon" icon="mdi:source-branch" />CI/CD Pipelines</span>
						<span><Icon class="icon" icon="mdi:robot-industrial-outline" />Infrastructure Automation</span>
						<span><Icon class="icon" icon="mdi:chart-line" />System Monitoring</span>
						<span><Icon class="icon" icon="mdi:cloud-upload" />Cloud Deployment</span>
						<span><Icon class="icon" icon="mdi:docker" />Container Orchestration</span>
					</div>
				</div>
			</div>

			<!-- Fullstack Integration -->
			<div class="service-card">
				<div class="service-top">
					<div class="service-title">
						<Icon class="icon" icon="mdi:code-json" />
						<h3>Fullstack Integration</h3>
					</div>
					<div class="service-arrow">
						<Icon class="icon" icon="radix-icons:arrow-top-right" />
					</div>
				</div>
				<div class="service-bottom">
					<p class="service-text">
						Bridging frontend and backend into seamless experiences — building unified, intelligent, and performant applications from concept to deployment.
					</p>
					<div class="tags">
						<span><Icon class="icon" icon="mdi:architecture" />System Architecture</span>
						<span><Icon class="icon" icon="mdi:vector-line" />Application Flow</span>
						<span><Icon class="icon" icon="mdi:link-variant" />End-to-End Solutions</span>
						<span><Icon class="icon" icon="mdi:state-machine" />State Management</span>
						<span><Icon class="icon" icon="mdi:devices" />Cross-Platform Delivery</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
.services {
	display: flex;
	flex-direction: column;
	padding: 100px 200px;
}

.services__title {
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
	gap: 20px;
}

.services__grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
	gap: 40px;
}

.service-card {
	background: var(--color-950);
	border-radius: var(--radius-xl);
	padding: 30px;
	display: flex;
	flex-direction: column;
	gap: 50px;
	justify-content: space-between;
	transition: 0.3s ease;
	border: 1px solid var(--color-800);
	cursor: pointer;
}

.service-card:hover {
	background-color: var(--color-900);
}

.service-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.service-bottom {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.service-title {
	display: flex;
	align-items: center;
	gap: 15px;
}

.service-title h3 {
	font-size: var(--font-5xl);
	font-weight: 600;
	margin: 0;
	color: var(--text-normal);
}

.service-title .icon {
	font-size: var(--font-6xl);
	color: var(--text-normal);
}

.service-arrow {
	border: 2px solid var(--color-800);
	border-radius: 50%;
	padding: 10px;
	color: var(--text-normal);
}

.service-arrow .icon {
	font-size: var(--font-4xl);
	transition: transform 0.3s ease;
}

.service-card:hover .service-arrow {
	background-color: var(--text-normal);
}

.service-card:hover .service-arrow .icon {
	transform: rotate(45deg);
	color: var(--color-950);
}

.service-text {
	font-size: var(--font-2xl);
	line-height: 1.6;
	color: var(--text-muted);
	font-weight: 300;
}

.tags {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

.tags span {
	padding: 10px 10px;
	border-radius: var(--radius);
	font-size: var(--font-lg);
	color: var(--text-muted);
	text-transform: uppercase;
	cursor: pointer;
	font-family: var(--font-1);
	font-weight: 700;
	border: 1px solid var(--color-800);
	display: flex;
	align-items: center;
	gap: 7px;
}

.tags span .icon {
	font-size: var(--font-xl);
}

@media (max-width: 768px) {
	.services {
		padding: 60px 24px;
	}
	.services__grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.service-card {
		gap: 20px;
	}

	.service-title {
		justify-content: space-between;
	}
}
</style>
