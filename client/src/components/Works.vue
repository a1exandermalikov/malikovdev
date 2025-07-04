<script setup>
import { Icon } from '@iconify/vue'
import Button from './Button.vue'
</script>

<template>
	<div id="works" class="works">
		<div class="works__title">
			<h3 class="section-title">Works</h3>
			<h2 class="section-description">Featured projects</h2>
			<div class="works__filter">
				<label class="radio">
					<input type="radio" name="filter" value="all" checked />
					<span class="radio-custom"></span>
					<span class="radio-label">all</span>
				</label>
				<label class="radio">
					<input type="radio" name="filter" value="landing" />
					<span class="radio-custom"></span>
					<span class="radio-label">landing</span>
				</label>
				<label class="radio">
					<input type="radio" name="filter" value="platforms" />
					<span class="radio-custom"></span>
					<span class="radio-label">platforms</span>
				</label>
				<label class="radio">
					<input type="radio" name="filter" value="desktop" />
					<span class="radio-custom"></span>
					<span class="radio-label">desktop</span>
				</label>
			</div>
		</div>
	</div>
</template>

<style scoped>
.works {
	display: flex;
	flex-direction: column;
	background-color: var(--color-900);
	padding: 100px 200px;
}

.works__title {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
}

.works__filter {
	display: flex;
	align-items: center;
	gap: 40px;
}

.radio {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	position: relative;
	user-select: none;
	font-family: var(--font-3);
	font-weight: 700;
	font-size: var(--font-xl);
}

.radio input[type="radio"] {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

.radio-custom {
	width: 16px;
	height: 16px;
	border: 2px solid var(--color-300);
	border-radius: 50%;
	box-sizing: border-box;
	transition: all 0.2s ease;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

/* Внутренняя точка */
.radio-custom::after {
	content: "";
	width: 6px;
	height: 6px;
	background: #fff;
	border-radius: 50%;
	transform: scale(0);
	transition: transform 0.2s ease;
}

/* Hover эффект */
.radio:hover .radio-custom {
	border-color: white;
	background-color: white;
}

/* Выбранная кнопка */
.radio input[type="radio"]:checked + .radio-custom {
	background-color: white;
	border-color: white;
}

.radio input[type="radio"]:checked + .radio-custom::after {
	transform: scale(1);
}
</style>
