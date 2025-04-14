const canvas = document.getElementById('connectionCanvas')
const ctx = canvas.getContext('2d')

let particlesWhite = []
let connectionsWhite = []
let maxParticles = 100
let maxDistance = 150
let maxSpeed = 1.5

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Проверка на мобильное устройство или планшет
function isMobileOrTablet() {
	return window.innerWidth <= 768
}

// Создание частиц для белого канваса
function createParticlesWhite() {
	// Изменяем параметры, если это мобильное устройство или планшет
	if (isMobileOrTablet()) {
		maxDistance = 100 // Уменьшаем расстояние между частицами
		maxParticles = 70 // Уменьшаем количество частиц
	}

	for (let i = 0; i < maxParticles; i++) {
		particlesWhite.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * maxSpeed,
			vy: (Math.random() - 0.5) * maxSpeed,
			size: Math.random() * 0.6 + 0.2, // Уменьшаем размер точек
			color: 'rgba(200, 200, 200, 0.8)',
		})
	}
}

// Отображение частиц для белого канваса
function drawParticlesWhite() {
	particlesWhite.forEach(p => {
		ctx.beginPath()
		ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
		ctx.fillStyle = p.color
		ctx.fill()
	})
}

// Обновление положения частиц для белого канваса
function updateParticlesWhite() {
	particlesWhite.forEach(p => {
		p.x += p.vx
		p.y += p.vy

		if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx
		if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy
	})
}

// Отображение связей между частицами для белого канваса
function drawConnectionsWhite() {
	connectionsWhite = []
	for (let i = 0; i < particlesWhite.length; i++) {
		for (let j = i + 1; j < particlesWhite.length; j++) {
			const p1 = particlesWhite[i]
			const p2 = particlesWhite[j]
			const dx = p2.x - p1.x
			const dy = p2.y - p1.y
			const distance = Math.sqrt(dx * dx + dy * dy)

			if (distance < maxDistance) {
				ctx.beginPath()
				ctx.moveTo(p1.x, p1.y)
				ctx.lineTo(p2.x, p2.y)
				ctx.strokeStyle = `rgba(200, 200, 200, ${1 - distance / maxDistance})`
				ctx.lineWidth = 0.5
				ctx.stroke()
				connectionsWhite.push([p1, p2])
			}
		}
	}
}

// Анимация для белого канваса
function animateWhite() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	updateParticlesWhite()
	drawParticlesWhite()
	drawConnectionsWhite()

	requestAnimationFrame(animateWhite)
}

// Инициализация для белого канваса
createParticlesWhite()
animateWhite()

// ---------------------- Particles Canvas (Black) ----------------------
const canvasBlack = document.getElementById('connectionCanvasBlack')
const ctxBlack = canvasBlack.getContext('2d')

let particlesBlack = []
let connectionsBlack = []
const maxParticlesBlack = 60
const maxSpeedBlack = 1.5

canvasBlack.width = window.innerWidth
canvasBlack.height = window.innerHeight

const isMobile = window.innerWidth < 768
const maxDistanceBlack = isMobile ? 80 : 150

// Создание частиц для черного канваса
function createParticlesBlack() {
	for (let i = 0; i < maxParticlesBlack; i++) {
		particlesBlack.push({
			x: Math.random() * canvasBlack.width,
			y: Math.random() * canvasBlack.height,
			vx: (Math.random() - 0.5) * maxSpeedBlack,
			vy: (Math.random() - 0.5) * maxSpeedBlack,
			size: Math.random() * 0.5 + 0.1,
			color: 'rgba(0, 0, 0, 0.8)',
		})
	}
}

// Отображение частиц для черного канваса
function drawParticlesBlack() {
	particlesBlack.forEach(p => {
		ctxBlack.beginPath()
		ctxBlack.arc(p.x, p.y, p.size, 0, Math.PI * 2)
		ctxBlack.fillStyle = p.color
		ctxBlack.fill()
	})
}

// Обновление положения частиц для черного канваса
function updateParticlesBlack() {
	particlesBlack.forEach(p => {
		p.x += p.vx
		p.y += p.vy

		if (p.x < 0 || p.x > canvasBlack.width) p.vx = -p.vx
		if (p.y < 0 || p.y > canvasBlack.height) p.vy = -p.vy
	})
}

// Отображение связей между частицами для черного канваса
function drawConnectionsBlack() {
	connectionsBlack = []
	for (let i = 0; i < particlesBlack.length; i++) {
		for (let j = i + 1; j < particlesBlack.length; j++) {
			const p1 = particlesBlack[i]
			const p2 = particlesBlack[j]
			const dx = p2.x - p1.x
			const dy = p2.y - p1.y
			const distance = Math.sqrt(dx * dx + dy * dy)

			if (distance < maxDistanceBlack) {
				ctxBlack.beginPath()
				ctxBlack.moveTo(p1.x, p1.y)
				ctxBlack.lineTo(p2.x, p2.y)
				ctxBlack.strokeStyle = `rgba(0, 0, 0, ${
					1 - distance / maxDistanceBlack
				})`
				ctxBlack.lineWidth = 0.3
				ctxBlack.stroke()
				connectionsBlack.push([p1, p2])
			}
		}
	}
}

// Анимация для черного канваса
function animateBlack() {
	ctxBlack.clearRect(0, 0, canvasBlack.width, canvasBlack.height)

	updateParticlesBlack()
	drawParticlesBlack()
	drawConnectionsBlack()

	requestAnimationFrame(animateBlack)
}

// Инициализация для черного канваса
createParticlesBlack()
animateBlack()
