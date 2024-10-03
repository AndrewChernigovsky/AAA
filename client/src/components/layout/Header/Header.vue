<template>
  <header class="header">
    <div class="container">
      <Menu />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;

  &__image {
    background-color: black;
    display: flex;
    justify-content: center;
    position: relative;

    &-bg {
      height: 200px;
      object-fit: cover;
      max-width: 100%;

      @media screen and (min-width: $TABLET) {
        height: 400px;
      }
    }

    &-logo {
      position: absolute;
      display: block;
      top: -45px;
      height: 90px;
      object-fit: cover;
      width: 90px;
      right: 0;
      max-width: 100%;
      border: 1px solid $BASE_TEXT;
      z-index: 3;

      @media screen and (min-width: $TABLET) {
        top: -90px;
        height: 165px;
        width: 165px;
      }
    }
  }
}
</style>
