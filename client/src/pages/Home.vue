<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="primary-title">
        Мир веба схож с миром аниме, он тоже таит в себе много боли и страданий,
        которые не заметны за монитором или экрана телефона.
      </h1>
      <p class="primary-title">
        И как главный герой, нам предстоит вынести ряд испытаний прежде чем мы
        сможем получить необходимый уровень фурьёку как Йо Асакура=))
      </p>
      <Transition name="fade-1">
        <p class="base-text" v-if="show">
          Начинай изучать программирование уже сейчас!
        </p>
      </Transition>
      <Transition name="fade-2">
        <p class="base-text" v-if="show">Это легче чем ты думаешь!</p>
      </Transition>
      <Transition name="fade-3">
        <p class="base-text" v-if="show">
          <strong>Следуй за своей мечтой!</strong>
        </p>
      </Transition>
      <Transition name="fade-4">
        <blockquote v-if="show">
          «Многое может быть достигнуто, если вы в это верите». <br />
          <strong>(c) - Йо Асакура</strong>
        </blockquote>
      </Transition>
    </div>

    <div class="gif-wrapper">
      <img class="gif" :src="gifPath" alt="" />
    </div>
  </div>
</template>

<script setup>
import gifPath from '@/assets/images/gif.webp';
import { ref, onMounted } from 'vue';

const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<style lang="scss" scoped>
blockquote {
  position: absolute;
  bottom: 50px;
  right: 50px;
  margin: 0;
  padding: 20px;
  border: 1px solid $BASE_TEXT;
  border-radius: 5px;
  background-color: $PINK_4B0725;
}

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
      url('@/assets/images/shaman.webp');
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
  bottom: -22px;
  z-index: 1;
  width: inherit;

  @media screen and (min-width: $TABLET) {
    bottom: -42px;
  }
}

.fade-1-enter-active,
.fade-1-leave-active {
  transition: opacity 1s ease;
}

.fade-1-enter-from,
.fade-1-leave-to {
  opacity: 0;
}

.fade-2-enter-active,
.fade-2-leave-active {
  transition: opacity 1s ease 2s;
}

.fade-2-enter-from,
.fade-2-leave-to {
  opacity: 0;
}

.fade-3-enter-active,
.fade-3-leave-active {
  transition: opacity 2s ease 3s;
}

.fade-3-enter-from,
.fade-3-leave-to {
  opacity: 0;
}

.fade-4-enter-active,
.fade-4-leave-active {
  transition: opacity 3s ease 4s;
}

.fade-4-enter-from,
.fade-4-leave-to {
  opacity: 0;
}
</style>
