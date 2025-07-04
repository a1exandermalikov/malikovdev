<template>
	<main class="admin">
		<section class="admin__wrapper">
			<h1 class="admin__title">Управление новостями</h1>

			<form
				@submit.prevent="addNews"
				class="admin__form"
				aria-label="Добавить новость"
			>
				<label class="admin__field">
					<span class="admin__label">Заголовок</span>
					<input
						v-model="title"
						type="text"
						required
						class="admin__input"
						placeholder="Введите заголовок"
					/>
				</label>

				<label class="admin__field">
					<span class="admin__label">Описание</span>
					<textarea
						v-model="description"
						class="admin__textarea"
						rows="4"
						placeholder="Введите текст новости"
					/>
				</label>

				<button type="submit" class="admin__button">Опубликовать</button>
			</form>

			<section v-if="news.length" class="admin__list">
				<article v-for="item in news" :key="item.id" class="admin__card">
					<header class="admin__card-header">
						<h2 class="admin__card-title">{{ item.title }}</h2>
						<button
							@click="confirmDelete(item.id)"
							class="admin__delete"
							aria-label="Удалить"
						>
							×
						</button>
					</header>
					<p v-if="item.description" class="admin__card-body">
						{{ item.description }}
					</p>
					<time class="admin__card-date">{{
						formatDate(item.created_at)
					}}</time>
				</article>
			</section>

			<p v-else class="admin__empty">Новостей пока нет</p>
		</section>
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase.js'

const title = ref('')
const description = ref('')
const news = ref([])

const fetchNews = async () => {
	const { data, error } = await supabase
		.from('news')
		.select('*')
		.order('created_at', { ascending: false })
	if (!error) news.value = data
}

const addNews = async () => {
	if (!title.value.trim()) return

	const { error } = await supabase.from('news').insert([
		{
			title: title.value.trim(),
			body: description.value.trim() || null,
		},
	])

	if (!error) {
		title.value = ''
		description.value = ''
		await fetchNews()
	}
}

const confirmDelete = async id => {
	if (confirm('Удалить эту новость?')) {
		await supabase.from('news').delete().eq('id', id)
		await fetchNews()
	}
}

const formatDate = timestamp => {
	return new Date(timestamp).toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})
}

onMounted(fetchNews)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap');

.admin {
	background: #0a0a0a;
	color: #f4f4f4;
	font-family: 'Outfit', sans-serif;
	min-height: 100vh;
	padding: 2rem 1rem;
	display: flex;
	justify-content: center;
}

.admin__wrapper {
	width: 100%;
	max-width: 720px;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
}

.admin__title {
	text-align: center;
	font-size: 2rem;
	font-weight: 600;
	color: #ffffff;
}

.admin__form {
	background: #1a1a1a;
	border: 1px solid #444;
	border-radius: 0.75rem;
	padding: 1.75rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.admin__field {
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
}

.admin__label {
	font-size: 0.95rem;
	font-weight: 500;
	color: #bbbbbb;
}

.admin__input,
.admin__textarea {
	background: #000000;
	color: #f4f4f4;
	border: 1px solid #444;
	border-radius: 0.5rem;
	padding: 0.75rem 1rem;
	font-size: 1rem;
	transition: border 0.2s, background-color 0.2s;
}

.admin__input:focus,
.admin__textarea:focus {
	outline: none;
	border-color: #4f46e5;
	background-color: #252525;
}

.admin__button {
	align-self: flex-start;
	background: #4f46e5;
	color: white;
	font-weight: 600;
	padding: 0.6rem 1.3rem;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: background 0.2s;
}

.admin__button:hover {
	background: #3d38b2;
}

.admin__list {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.admin__card {
	background: #000000;
	border: 1px solid #444;
	border-radius: 0.75rem;
	padding: 1.25rem;
}

.admin__card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.admin__card-title {
	font-size: 1.2rem;
	font-weight: 600;
	color: #fdfdfd;
}

.admin__delete {
	background: none;
	border: none;
	color: #e63946;
	font-size: 1.5rem;
	cursor: pointer;
	transition: color 0.2s;
}

.admin__delete:hover {
	color: #c02936;
}

.admin__card-body {
	margin-top: 0.75rem;
	color: #d2d2d2;
	line-height: 1.5;
}

.admin__card-date {
	margin-top: 0.5rem;
	font-size: 0.85rem;
	color: #bbbbbb;
}

.admin__empty {
	text-align: center;
	color: #777;
}
</style>
