<template>
  <header class="header">
    <img class="gif spiderman" :src="gifSpidermanPath" alt="" />
    <img class="gif venom" :src="gifVenomPath" alt="" />
    <img class="ruik" :src="gifRuikPath" alt="" />
    <div class="header__image">
      <img
        class="header__image-bg"
        src="@/assets/images/header-image.webp"
        alt=""
      />
    </div>
    <div class="container">
      <img
        class="header__image-logo"
        src="@/assets/images/logo-academy.webp"
        alt=""
      />
      <Menu />
    </div>
  </header>
</template>

<script setup>
import gifSpidermanPath from '@/assets/images/spiderman.webp';
import gifVenomPath from '@/assets/images/venom.webp';
import gifRuikPath from '@/assets/images/ruik.webp';
</script>

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

.gif {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  animation: move-left 10s linear infinite;
  width: 50px;

  @media screen and (min-width: $TABLET) {
    width: 200px;
  }
}

.spiderman {
  animation-duration: 10.5s;
}

@keyframes move-left {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100vw);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter, 
.slide-fade-leave-to /* .slide-fade-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave {
  transform: translateX(0);
  opacity: 1;
}

.ruik {
  position: absolute;
  bottom: 120px;
  right: 0;
  z-index: 1;
<<<<<<< HEAD
  // width: 30%;
  // height: 100%;

  // @media screen and (min-width: $TABLET) {
  //   width: 200px;
  // }
=======
  width: 100px;

  @media screen and (min-width: $TABLET) {
    width: 200px;
  }
  @media screen and (min-width: $DESKTOP) {
    width: 40%;
  }
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
}
</style>
