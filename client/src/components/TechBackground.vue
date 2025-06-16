<template>
	<canvas ref="canvas" class="tech-canvas"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let ctx, width, height, animationId
let points = []

const POINT_COUNT = 100
const LINE_DISTANCE = 120

function initCanvas() {
	const el = canvas.value
	ctx = el.getContext('2d')
	resizeCanvas()

	points = Array.from({ length: POINT_COUNT }, () => ({
		x: Math.random() * width,
		y: Math.random() * height,
		dx: (Math.random() - 0.5) * 0.5,
		dy: (Math.random() - 0.5) * 0.5,
	}))

	animate()
}

function resizeCanvas() {
	width = window.innerWidth
	height = window.innerHeight
	canvas.value.width = width
	canvas.value.height = height
}

function draw() {
	ctx.clearRect(0, 0, width, height)
	ctx.fillStyle = '#15803d'

	points.forEach(p => {
		p.x += p.dx
		p.y += p.dy

		// отскок от границ
		if (p.x < 0 || p.x > width) p.dx *= -1
		if (p.y < 0 || p.y > height) p.dy *= -1

		ctx.beginPath()
		ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
		ctx.fill()
	})

	// линии между близкими точками
	for (let i = 0; i < points.length; i++) {
		for (let j = i + 1; j < points.length; j++) {
			const a = points[i]
			const b = points[j]
			const dist = Math.hypot(a.x - b.x, a.y - b.y)

			if (dist < LINE_DISTANCE) {
				ctx.beginPath()
				ctx.moveTo(a.x, a.y)
				ctx.lineTo(b.x, b.y)
				ctx.strokeStyle = `rgba(21, 128, 61, ${1 - dist / LINE_DISTANCE})`
				ctx.lineWidth = 1
				ctx.stroke()
			}
		}
	}
}

function animate() {
	draw()
	animationId = requestAnimationFrame(animate)
}

onMounted(() => {
	initCanvas()
	window.addEventListener('resize', resizeCanvas)
})

onBeforeUnmount(() => {
	cancelAnimationFrame(animationId)
	window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.tech-canvas {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000; /* тёмный фон для контраста */
	z-index: -1;
}
</style>
