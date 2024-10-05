<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await fetch('http://aaa/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      console.log(data.message);
      localStorage.setItem('username', username.value);
      localStorage.setItem('role', data.role); // Сохраняем роль пользователя
      router.push('/dashboard'); // Перенаправление на личный кабинет
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
  }
};
</script>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
