<template>
  <div class="content">
    <Header />
    <main class="main"><router-view /></main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
</script>

<style lang="scss" scoped></style>
