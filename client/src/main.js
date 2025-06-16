// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- импортируем роутер
import './styles/global.css'

createApp(App).use(router).mount('#app') // <-- подключаем
