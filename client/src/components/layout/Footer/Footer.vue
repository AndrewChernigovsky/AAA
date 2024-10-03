<template>
  <footer>
    <div class="container">
      <nav class="nav">
        <router-link
          v-for="link in links"
          :key="link.path"
          class="nav__link"
          active-class="active"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue';
const links = ref([
  { name: 'Главная', path: '/' },
  { name: 'Учебник', path: '/manual' },
]);
</script>
<style lang="scss" scoped>
footer .container {
  border-top: 2px solid $BASE_TEXT;
}
</style>
