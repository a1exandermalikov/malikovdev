<script setup>
import { Icon } from '@iconify/vue'
import Button from './Button.vue'
</script>

<template>
	<div id="hero" class="hero">
		<div class="hero__top">
			<div class="hero__left">
				<h2>
					<span>
						<div><img src="/src/assets/content/about.jfif" alt="#" /></div>
						<Icon icon="hugeicons:arrow-right-02" class="icon" />
						Hi, I'm
					</span>
					<span>Alexander</span>
					<span>
						Malikov
						<Icon icon="noto:waving-hand-light-skin-tone" class="icon" />
					</span>
				</h2>
			</div>
			<div class="hero__right">
				<p>
					A fullstack developer, turning <br />ideas into fully <br />
					functional, elegant web solutions.
				</p>
				<div class="hero__buttons">
					<Button>our community</Button>
					<Button variant="primary">download resume</Button>
				</div>
			</div>
		</div>

		<!-- 🎯 Слайдер логотипов -->
		<div class="hero__bottom">
			<div class="logo-slider">
				<div class="logo-track">
					<div class="slide-group">
						<img src="/src/assets/content/logoipsum-1.png" alt="#" />
						<img src="/src/assets/content/logoipsum-2.png" alt="#" />
						<img src="/src/assets/content/logoipsum-3.png" alt="#" />
						<img src="/src/assets/content/logoipsum-4.png" alt="#" />
						<img src="/src/assets/content/logoipsum-5.png" alt="#" />
						<img src="/src/assets/content/logoipsum-6.png" alt="#" />
						<img src="/src/assets/content/logoipsum-7.png" alt="#" />
						<img src="/src/assets/content/logoipsum-8.png" alt="#" />
					</div>
					<div class="slide-group">
						<img src="/src/assets/content/logoipsum-1.png" alt="#" />
						<img src="/src/assets/content/logoipsum-2.png" alt="#" />
						<img src="/src/assets/content/logoipsum-3.png" alt="#" />
						<img src="/src/assets/content/logoipsum-4.png" alt="#" />
						<img src="/src/assets/content/logoipsum-5.png" alt="#" />
						<img src="/src/assets/content/logoipsum-6.png" alt="#" />
						<img src="/src/assets/content/logoipsum-7.png" alt="#" />
						<img src="/src/assets/content/logoipsum-8.png" alt="#" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.hero {
	display: flex;
	flex-direction: column;
	margin-top: 15vh;
	height: calc(100% - 15vh);
	justify-content: space-between;
}

.hero__top {
	display: flex;
	padding: 0 200px;
	height: 100%;
	align-items: center;
}

.hero__left {
	flex-basis: 50%;
	display: flex;
	align-items: center;
}

.hero__left h2 {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.hero__left h2 span {
	display: flex;
	align-items: center;
	gap: 15px;
	font-size: var(--font-9xl);
	text-transform: uppercase;
	color: var(--text-normal);
	font-family: var(--font-3);
	font-weight: 800;
	letter-spacing: 2px;
}

.hero__left h2 span div {
	width: 90px;
	height: 90px;
	overflow: hidden;
	border-radius: 50%;
	display: grid;
	place-items: center;
	border: 3px solid var(--color-500);
	padding: 5px;
	cursor: pointer;
}

.hero__left h2 span div img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
}

.hero__left h2 .icon {
	font-size: var(--font-8xl);
	color: var(--text-muted);
}

.hero__right {
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: end;
	gap: 50px;
}

.hero__right p {
	font-size: var(--font-4xl);
	text-align: end;
	line-height: 1.7;
}

.hero__buttons {
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: end;
}

.hero__buttons .btn-component {
	font-size: var(--font-2xl);
	padding: 15px 40px;
}

/* 🎯 Слайдер */
.logo-slider {
	overflow: hidden;
	width: 100%;
	padding: 40px 0;
	position: relative;
}

.logo-track {
	display: flex;
	width: max-content;
	animation: scroll 40s linear infinite;
	will-change: transform;
	gap: 160px;
}

.slide-group {
	display: flex;
	gap: 160px;
	align-items: center;
}

.logo-track img {
	width: 120px;
	flex-shrink: 0;
	filter: grayscale(100%);
	opacity: 0.6;
	transition: all 0.3s ease;
	cursor: pointer;
}

.logo-track img:hover {
	filter: none;
	opacity: 1;
}

@keyframes scroll {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}

@media (max-width: 768px) {

	.hero__top{
		padding: 50px;
		flex-direction: column;
		align-items: center;
	}

	.hero__left h2{
		line-height: 1.5;
		align-items: center;
	}
	.hero__left h2 span {
		font-size: var(--font-11xl);
	}
	.hero__left h2 span div{
		width: 70px;
		height: 70px;
	}

	.hero__left h2 span .icon{
		font-size: var(--font-10xl);
	}

	.hero__right{
		align-items: center;
		justify-content: center;
	}

	.hero__right p{
		font-size: var(--font-5xl);
		line-height: 2;
		text-align: center;
		color: var(--text-muted);
		margin-bottom: 0;
	}

	.hero__buttons{
		align-items: center;		
		gap: 25px;
	}

	.hero__buttons .btn-component{
		font-size: var(--font-3xl);
		padding: 15px 25px;
	}

	.logo-slider{
		padding: 30px 0; 
	}

	.logo-slider img{
		width: 80px;
	}

	.slide-group{
		gap: 50px;
	}

	.logo-track{
		gap: 50px;
	}
	
}
</style>
