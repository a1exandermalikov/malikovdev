let logo = document.querySelector('.header__title')
logo.addEventListener('click', () => {
	location.href = 'https://malikovdev.uz'	
})

// ---------------------- Scroll & Header ----------------------
let lastScroll = 0
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
	const currentScroll = window.scrollY
	const triggerPoint = window.innerHeight // 100dvh

	// 1. На самом верху — просто класс 'scrolled'
	if (currentScroll < 10) {
		header.classList.remove('hide')
		header.classList.remove('scrolled')
		return
	}

	header.classList.add('scrolled') // Всегда, если не на самом верху

	// 2. Только если проскроллил ниже 100dvh
	if (currentScroll > triggerPoint) {
		if (currentScroll > lastScroll) {
			// вниз — спрятать
			header.classList.add('hide')
		} else {
			// вверх — показать
			header.classList.remove('hide')
		}
	}

	lastScroll = currentScroll
})

// ---------------------- Typing Effect ----------------------
let currentPhraseIndex = 0
let currentCharIndex = 0
const phrases = ['Developer', 'Designer', 'Freelancer', 'Coder']
const typed = document.querySelector('#typed-title')

function type() {
	const currentPhrase = phrases[currentPhraseIndex]
	typed.textContent = currentPhrase.slice(0, currentCharIndex)

	if (currentCharIndex < currentPhrase.length) {
		currentCharIndex++
		setTimeout(type, 120) // Задержка для эффекта печатания
	} else {
		// Подождать, затем начать стирать
		setTimeout(() => {
			erase() // Начинаем стирать
		}, 5000) // Задержка перед стиранием
	}
}

function erase() {
	const currentPhrase = phrases[currentPhraseIndex]

	if (currentCharIndex > 0) {
		currentCharIndex--
		typed.textContent = currentPhrase.slice(0, currentCharIndex)
		setTimeout(erase, 100) // Задержка для эффекта стирания
	} else {
		// Когда все символы стерты, переключаем на следующую фразу
		currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length
		type()
	}
}

// Начинаем с первой фразы
type()

// ---------------------- Filter Works ----------------------
function filterWorks(category) {
	// Получаем все карточки
	const cards = document.querySelectorAll('.work-card')

	// Проходим по каждой карточке
	cards.forEach(card => {
		// Если категория "all", показываем все карточки
		if (category === 'all') {
			card.classList.remove('hidden')
		} else {
			// Если категория соответствует карточке, показываем её, иначе скрываем
			if (card.classList.contains(category)) {
				card.classList.remove('hidden')
			} else {
				card.classList.add('hidden')
			}
		}
	})

	// Получаем все кнопки навигации
	const buttons = document.querySelectorAll('.works__nav__item')

	// Удаляем класс 'active' с всех кнопок
	buttons.forEach(button => {
		button.classList.remove('active')
	})

	// Добавляем класс 'active' к нажатой кнопке
	// Проверяем, соответствует ли текст кнопки категории
	const activeButton = Array.from(buttons).find(button => {
		const buttonText = button.textContent.trim().toLowerCase()
		if (category === 'all' && buttonText === 'all') return true
		return buttonText.replace(' ', '-').toLowerCase() === category
	})

	if (activeButton) {
		activeButton.classList.add('active')
	}
}

// ---------------------- Custom Cursor ----------------------
const cursor = document.createElement('div')
cursor.classList.add('custom-cursor')
document.body.appendChild(cursor)

let mouseX = 0
let mouseY = 0

// Функция для обновления позиции курсора
function updateCursorPosition(event) {
	mouseX = event.clientX
	mouseY = event.clientY

	cursor.style.left = `${mouseX + window.scrollX}px`
	cursor.style.top = `${mouseY + window.scrollY}px`
}

// Обработчик события движения мыши
document.addEventListener('mousemove', updateCursorPosition)

// Эффект увеличения курсора при наведении на элементы с классом "hoverable"
document.addEventListener('mouseover', event => {
	if (event.target.matches('.hoverable')) {
		cursor.classList.add('hovered')
	}
})

// Убираем эффект увеличения, когда мышь уходит с элемента
document.addEventListener('mouseout', event => {
	if (event.target.matches('.hoverable')) {
		cursor.classList.remove('hovered')
	}
})

// Обновляем позицию курсора при прокрутке страницы
window.addEventListener('scroll', () => {
	cursor.style.left = `${mouseX + window.scrollX}px`
	cursor.style.top = `${mouseY + window.scrollY}px`
})

// Прячем курсор, если мышь выходит за пределы страницы
document.addEventListener('mouseleave', () => {
	cursor.style.display = 'none'
})

// Показываем курсор, если он возвращается в область страницы
document.addEventListener('mouseenter', () => {
	cursor.style.display = 'block'
})

// ---------------------- Ripple Effect ----------------------
document.addEventListener('click', event => {
	const ripple = document.createElement('div')
	ripple.classList.add('ripple')

	// Устанавливаем позицию
	const x = event.clientX + window.scrollX
	const y = event.clientY + window.scrollY
	ripple.style.left = `${x}px`
	ripple.style.top = `${y}px`

	// Добавляем и удаляем элемент
	document.body.appendChild(ripple)
	setTimeout(() => ripple.remove(), 600) // время совпадает с анимацией в CSS
})
