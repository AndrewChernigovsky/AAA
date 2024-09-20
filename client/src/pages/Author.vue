<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="primary-title">Об Авторе</h1>
      <p class="primary-title">ыпаыпыпвыплвыавыждла</p>
    </div>
  </div>
</template>

<script setup>
import gifPath from '@/assets/images/gif-1.webp';
</script>

<style lang="scss" scoped>
.container {
  z-index: 20;
  min-height: 800px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 0;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.905),
        rgba(255, 0, 106, 0.6)
      ),
      url('@/assets/images/L.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
.wrapper {
  z-index: 2;
  display: grid;
  gap: 10px;
  align-content: center;
  justify-content: center;
  min-height: 100%;
}
.gif-wrapper {
  width: 150px;
  height: 150px;
  margin: 0 auto;

  @media screen and (min-width: $TABLET) {
    width: 300px;
    height: 300px;
  }
}
.gif {
  position: absolute;
  bottom: -12px;
  z-index: 1;
  width: inherit;
  @media screen and (min-width: $TABLET) {
    bottom: -24px;
  }
}
</style>
