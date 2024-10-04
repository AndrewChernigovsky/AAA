<template>
  <div class="form-wrapper" v-if="show">
    <form @submit.prevent="registration">
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
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="E-mail"
        required
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>войти с помощью</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const email = ref('');
const router = useRouter();
let show = ref(true);

const registration = async () => {
  try {
    const response = await fetch('http://aaa/registration.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: username.value,
        password: password.value,
        email: email.value,
      }),
    });

    const data = await response.json();
    console.log(data, data.status, 'DATA');

    if (data.status === 'success') {
      console.log(data.message);
      localStorage.setItem('username', username.value);
      router.push('/dashboard');
      show.value = false;
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
  }
};
</script>
<style lang="scss" scoped>
.form-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  background: linear-gradient(black, rgba(255, 255, 255, 0.6));
}

form {
  display: grid;
  gap: 10px;
  align-content: center;
  justify-content: center;
}
</style>
