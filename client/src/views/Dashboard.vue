<template>
  <div>
    <h1>Добро пожаловать, {{ username }}!</h1>
    <div v-if="role === 'admin'">
      <p>Вы администратор. Здесь вы можете управлять сайтом.</p>
      <!-- Дополнительный контент для администраторов -->
    </div>
    <div v-else-if="role === 'user'">
      <p>Вы обычный пользователь. Здесь ваш личный контент.</p>
      <!-- Контент для обычных пользователей -->
    </div>
    <div v-else>
      <p>Неизвестная роль.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Получаем имя пользователя и роль из локального хранилища
const username = ref(localStorage.getItem('username') || 'Гость');
const role = ref(localStorage.getItem('role') || 'user'); // Получаем роль из локального хранилища
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
