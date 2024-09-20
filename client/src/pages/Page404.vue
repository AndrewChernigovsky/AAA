<template>
  <div class="container">
    <img class="gif" :src="gifPath" alt="" />
    <div>
      <h2>404 Not Found</h2>
      <p>Страница, которую вы ищете, не существует.</p>
    </div>
  </div>
</template>

<script setup>
import gifPath from '@/assets/images/404.webp';
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 30px;
  align-items: center;
}
</style>
