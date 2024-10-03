<template>
  <div class="dashboard">
    <h1>Добро пожаловать, {{ username }}!</h1>
    <!-- Здесь можно добавить другие элементы интерфейса личного кабинета -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Получаем имя пользователя из сессии или локального хранилища
const username = ref(localStorage.getItem('username') || 'Гость');

// Вы можете добавить дополнительные функции для загрузки данных пользователя
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
</style>
