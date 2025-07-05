<script setup>
import Button from './Button.vue'
import { Icon } from '@iconify/vue'

const experiences = [
  {
    id: 1,
    position: 'Associate Creative Director',
    period: 'Aug 2023 – Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 2,
    position: 'Senior Product Designer',
    period: 'May 2021 – Jun 2023',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
  },
  {
    id: 3,
    position: 'UI/UX Designer',
    period: 'Jan 2019 – Apr 2021',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

const education = [
  {
    id: 1,
    degree: 'MSc in Innovation Design',
    period: 'Nov 2017 – Dec 2019',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.'
  },
  {
    id: 2,
    degree: 'BSc in Design',
    period: 'Aug 2013 – Oct 2016',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
  }
]
</script>

<template>
  <div class="about">
    <div class="about__title">
      <h3 class="section-title">About Me</h3>
      <h2 class="section-description">
        Fullstack developer turning complex ideas into clean, functional apps —
        front to back.
      </h2>
    </div>
    <div class="about__description">
      <div class="email">
        <div class="email__image">
          <img src="/src/assets/content/about.jfif" alt="Profile">
        </div>
        <div class="email__info">
          <span>get in touch</span>
          <p>alexander.malikov0619@gmail.com</p>
        </div>
      </div>
      <p>I specialize in building complete digital solutions — from intuitive user interfaces to robust backend systems.
      I believe great products are born from shared values, transparent communication, strong technical expertise, and deep respect for the end user.</p>
    </div>

    <div class="timeline-container">
      <div class="timeline-section">
        <h3 class="timeline-title">Experience</h3>
        <div class="timeline">
          <div v-for="exp in experiences" :key="'exp-' + exp.id" class="timeline-item">
            <div class="timeline-bullet"></div>
            <div class="timeline-content">
              <div class="timeline-period">{{ exp.period }}</div>
              <h4 class="timeline-position">{{ exp.position }}</h4>
              <p class="timeline-description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h3 class="timeline-title">Education</h3>
        <div class="timeline">
          <div v-for="edu in education" :key="'edu-' + edu.id" class="timeline-item">
            <div class="timeline-bullet"></div>
            <div class="timeline-content">
              <div class="timeline-period">{{ edu.period }}</div>
              <h4 class="timeline-position">{{ edu.degree }}</h4>
              <p class="timeline-description">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
        </div>

    <div class="numbers-section">
      <h3 class="section-title">The Numbers</h3>
      <div class="numbers-grid">
        <div class="number-item">
          <div class="number">12+</div>
          <div class="label">Years of experience</div>
        </div>
        <div class="number-item">
          <div class="number">6</div>
          <div class="label">Awards won</div>
        </div>
        <div class="number-item">
          <div class="number">30+</div>
          <div class="label">Projects completed</div>
        </div>
        <div class="number-item">
          <div class="number">4K</div>
          <div class="label">Happy clients</div>
        </div>
      </div>
    </div>

    <div class="technologies-section">
      <h3 class="section-title">Tools & Skills</h3>
      <div class="technologies-grid">
        <div class="technology-category">
          <h4 class="category-title">Frontend</h4>
          <div class="technology-items">
            <Button href="https://react.dev/" tooltip="React">
              <Icon class="icon" icon="logos:react" />
            </Button>
            <Button href="https://vuejs.org/" tooltip="Vue.js">
              <Icon class="icon" icon="logos:vue" />
            </Button>
            <Button href="https://developer.mozilla.org/en-US/docs/Web/HTML" tooltip="HTML5">
              <Icon class="icon" icon="devicon:html5" />
            </Button>
            <Button href="https://ui.shadcn.com/" tooltip="Shadcn/ui">
              <Icon class="icon" icon="simple-icons:shadcnui" />
            </Button>
            <Button href="https://tailwindcss.com/" tooltip="Tailwind CSS">
              <Icon class="icon" icon="logos:tailwindcss-icon" />
            </Button>
            <Button href="https://getbootstrap.com/" tooltip="Bootstrap">
              <Icon class="icon" icon="logos:bootstrap" />
            </Button>
            <Button href="https://developer.mozilla.org/en-US/docs/Web/CSS" tooltip="Css3">
              <Icon class="icon" icon="devicon:css3" />
            </Button>
            <Button href="https://sass-lang.com/" tooltip="Sass">
              <Icon class="icon" icon="material-icon-theme:sass" />
            </Button>
            <Button href="https://figma.com/" tooltip="Figma">
              <Icon class="icon" icon="logos:figma" />
            </Button>
            <Button href="https://wordpress.org/" tooltip="WordPress">
              <Icon class="icon" icon="bi:wordpress" />
            </Button>
            <Button href="https://vite.dev/" tooltip="Vite">
              <Icon class="icon" icon="logos:vitejs" />
            </Button>
            <Button href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" tooltip="Progressive Web App">
              <Icon class="icon" icon="logos:pwa" />
            </Button>

          </div>
        </div>
        
        <div class="technology-category">
          <h4 class="category-title">Backend</h4>
          <div class="technology-items">
            <Button href="https://nodejs.org/" tooltip="Node.js">
              <Icon class="icon" icon="logos:nodejs-icon-alt" />
            </Button>
            <Button href="https://expressjs.com/" tooltip="Express">
              <Icon class="icon" icon="skill-icons:expressjs-light" />
            </Button>
            <Button href="https://nextjs.org/" tooltip="Next.js">
              <Icon class="icon" icon="skill-icons:nextjs-light" />
            </Button>
            <Button href="https://www.djangoproject.com/" tooltip="Django">
              <Icon class="icon" icon="logos:django-icon" />
            </Button>
            <Button href="https://fastapi.tiangolo.com/" tooltip="Fastapi">
              <Icon class="icon" icon="logos:fastapi-icon" />
            </Button>
          </div>
        </div>
        
        <div class="technology-category">
          <h4 class="category-title">Database</h4>
          <div class="technology-items">
            <Button href="https://www.mongodb.com/" tooltip="MongoDB">
              <Icon class="icon" icon="logos:mongodb-icon" />
            </Button>
            <Button href="https://www.postgresql.org/" tooltip="PostgreSQL">
              <Icon class="icon" icon="logos:postgresql" />
            </Button>
            <Button href="https://www.sqlite.org/" tooltip="SQLite3">
              <Icon class="icon" icon="devicon:sqlite" />
            </Button>
            <Button href="https://supabase.com/" tooltip="Supabase">
              <Icon class="icon" icon="logos:supabase-icon" />
            </Button>
          </div>
        </div>
        
        <div class="technology-category">
          <h4 class="category-title">DevOps & Tools</h4>
          <div class="technology-items">
            <Button href="https://www.aapanel.com/" tooltip="aaPanel">
              <Icon class="icon" icon="tabler:hexagon-letter-a-filled" />
            </Button>
            <Button href="https://git-scm.com/" tooltip="Git">
              <Icon class="icon" icon="logos:git-icon" />
            </Button>
            <Button href="https://github.com/" tooltip="CI/CD">
              <Icon class="icon" icon="mdi:source-branch" />
            </Button>
            <Button href="https://www.linux.org/" tooltip="Linux">
              <Icon class="icon" icon="logos:linux-tux" />
            </Button>
            <Button href="https://www.vps.com/" tooltip="VPS & Server">
              <Icon class="icon" icon="material-icon-theme:folder-server" />
            </Button>
          </div>
        </div>
        <div class="technology-category">
          <h4 class="category-title">Programming Languages</h4>
          <div class="technology-items">
            <Button href="https://www.c-lang.org/" tooltip="C">
              <Icon class="icon" icon="streamline-logos:c-language-logo-solid" />
            </Button>
            <Button href="https://www.python.org/" tooltip="Python">
              <Icon class="icon" icon="logos:python" />
            </Button>
            <Button href="https://www.javascript.com/" tooltip="JavaScript">
              <Icon class="icon" icon="logos:javascript" />
            </Button>
            <Button href="https://www.typescriptlang.org/" tooltip="TypeScript">
              <Icon class="icon" icon="logos:typescript-icon" />
            </Button>
          </div>
        </div>
        <div class="technology-category">
          <h4 class="category-title">Languages</h4>
          <div class="technology-items">
            <Button tooltip="English">
              <Icon class="icon" icon="circle-flags:en" />
            </Button>
            <Button tooltip="Uzbek">
              <Icon class="icon" icon="circle-flags:uz" />
            </Button>
            <Button tooltip="Russian">
              <Icon class="icon" icon="circle-flags:ru" />
            </Button>
            <Button tooltip="Kazakh">
              <Icon class="icon" icon="circle-flags:kz" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 200px;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
}

.about__title {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 80px;
}

.about__description {
  width: 100%;
  display: flex;
  gap: 50px;
  margin-bottom: 80px;
}

.about__description p {
  font-size: var(--font-2xl);
  line-height: 1.6;
  color: var(--text-muted);
  flex: 1;
}

.email {
  display: flex;
  gap: 15px;
  background-color: var(--color-900);
  padding: 20px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-800);
  cursor: pointer;
  align-items: center;
  min-width: 350px;
  height: fit-content;
  transition: all 0.3s ease;
}

.email:hover {
  background-color: var(--color-800);
  transform: translateY(-2px);
}

.email__image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: grid;
  place-items: center;
  border-radius: var(--radius-lg);
  flex-shrink: 0;
}

.email__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.email__info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.email__info span {
  font-size: var(--font-2xl);
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: var(--font-1);
}

.timeline-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  margin-top: 40px;
}

.timeline-section {
  border: 1px solid var(--color-800);
  border-radius: var(--radius-xl);
  padding: 32px;
  height: fit-content;
}

.timeline-title {
  font-size: var(--font-4xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-800);
}

.timeline {
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 60%;
  width: 1px;
  background: var(--text-normal);
  cursor: pointer;
  transition: all 0.5s ease;

}

.timeline-content:hover::before {
	bottom: 0;
}


.timeline-content {
	display: flex;
	flex-direction: column;
	gap:   15px;
	cursor: pointer;
  padding-left: 30px;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-bullet {
  position: absolute;
  left: -6px;
  top: 0px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--text-normal);
  z-index: 1;
}

.timeline-position {
  font-size: var(--font-3xl);
  font-weight: 600;
  color: var(--text);
}

.timeline-period {
  font-size: var(--font-lg);
  color: var(--text-muted);
}

.timeline-description {
  font-size: var(--font-xl);
  line-height: 1.6;
  color: var(--text-muted);
}

@media (max-width: 1200px) {
  .about {
    padding: 80px 100px;
  }
  
  .timeline-container {
    grid-template-columns: 1fr;
  }
}

.numbers-section {
  width: 100%;
  margin-top: 80px;
}

.numbers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--color-800);
  border-radius: var(--radius-xl);
  padding: 20px;
}

.number-item {
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.number {
  font-size: var(--font-7xl);
  font-weight: 700;
  color: var(--text);
  font-family: var(--font-3);
}

.label {
  font-size: var(--font-3xl);
  color: var(--text-muted);
}

@media (max-width: 1200px) {
  .numbers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .number-item:nth-child(2n)::after {
    display: none;
  }
  
  .number-item:nth-child(2) {
    border-right: none;
  }
}

/* Technologies Section */
.technologies-section {
  margin-top: 80px;
  width: 100%;
}

.technologies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.technology-category {
  border: 1px solid var(--color-800);
  border-radius: var(--radius-xl);
  padding: 35px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}


.category-title {
  font-size: var(--font-3xl);
  color: var(--text-normal);
  margin-bottom: 25px;
  font-weight: 600;
}

.technology-items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  place-items: center;
}

.technology-items .btn-component {
  position: relative;
  display: grid;
  place-items: center;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-800);
  cursor: pointer;
  padding: 10px;
  font-size: var(--font-2xl);
}

.technology-items .btn-component .icon{
  width: var(--font-2xl);
  height: var(--font-2xl);
  object-fit: contain;
  display: block;
  margin: auto;
}



@media (max-width: 768px) {
  .technologies-grid {
    grid-template-columns: 1fr;
  }
  
  .technology-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about {
    padding: 60px 24px;
  }
  
  .about__description {
    flex-direction: column;
    gap: 24px;
  }
  
  .email {
    width: 100%;
    min-width: auto;
  }
}


.email__info p {
	font-size: var(--font-2xl);
	font-weight: 600;
	color: var(--text-normal);
	letter-spacing: 1px;
}

</style>
