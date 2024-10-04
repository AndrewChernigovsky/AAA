<template>
  <form @submit.prevent="login" v-if="show">
    <input
      type="text"
      v-model="username"
      name="username"
      placeholder="Username"
      required
    />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password"
      required
    />
    <button type="submit">Войти</button>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();
let show = ref(true);

const login = async () => {
  try {
    const response = await fetch('http://aaa/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username.value, // Используем username из ref
        password: password.value, // Используем password из ref
      }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      console.log(data.message);
      localStorage.setItem('username', username.value); // Сохраняем имя пользователя
      router.push('/dashboard'); // Перенаправление на личный кабинет
      show.value = false;
    } else {
      alert(data.message); // Обработка ошибок
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
  }
};
</script>
<style lang="scss" scoped>
form {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 10px;
  align-content: center;
  justify-content: center;
  background: linear-gradient(black, rgba(255, 255, 255, 0.6));
}
</style>
