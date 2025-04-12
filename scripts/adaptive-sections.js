if (window.innerWidth <= 768) {
	// Изменить разметку или добавить новый контейнер
	const about = document.querySelector('.about')
	// Тут можно добавить обработчик для показа скрытого меню
	about.innerHTML = ` <div class="about__content">
					<div class="about__content__img">
						<img src="./images/profile.jpg" alt="developer" />
						<h1>
							I'm Alexander Malikov, <br />
							Web Designer & Web Developer <br />
							from Uzbekistan
						</h1>
					</div>
					<div class="about__content__text">
						<p>
							I have rich experience in website design, development, and full customization. With over 3 years in the field, I specialize in creating beautiful, responsive, and interactive websites with smooth animations and clean code. I’m skilled in HTML, CSS, JavaScript, Tailwind, jQuery, Bootstrap, and animation libraries — and always focused on delivering user-friendly, high-performance results. I’d love to talk with you about your project and bring your ideas to life. Feel free to reach out via email anytime!
						</p>
						<a href="">Download resume</a>
					</div>
				</div> `
}
