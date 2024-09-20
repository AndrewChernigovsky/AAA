<template>
  <div class="content">
<<<<<<< HEAD
    <div class="intro" v-if="show">
=======
    <!-- <div class="intro" v-if="show">
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
      <div class="intro__wrapper">
        <p>Ты попал на сайт по веб-программированию, рад встрече)</p>
        <div class="intro__buttons">
          <CustomButton @click="setTheme('simple')"
            >Кто проживает на дне океана?</CustomButton
          >
          <CustomButton @click="setTheme('hard')">
            Сайт для серьезных дядь</CustomButton
          >
        </div>
      </div>
    </div>
    <div v-if="themeStore.choosenTheme === 'simple'">
      <div class="content">
        <Header />
        <main class="main"><router-view /></main>
        <Footer />
      </div>
<<<<<<< HEAD
    </div>
    <div v-if="themeStore.choosenTheme === 'hard'">
=======
    </div> -->
    <!-- <div v-if="themeStore.choosenTheme === 'hard'"> -->
    <div>
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
      <div class="content" @mousemove="updateCursor" @mouseleave="hideCursor">
        <Header />
        <main class="main"><router-view /></main>
        <Footer />
<<<<<<< HEAD
        <CursorTracker />
=======
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
        <div
          v-if="isCursorVisible"
          class="cursor"
          :style="{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { startJS } from '@/custom/index';
import { ref, onMounted } from 'vue';
import { useThemesStore } from '@/store/themes';

const theme = ref('');
let show = ref(true);

const themeStore = useThemesStore();

function setTheme(theme) {
  // themeStore.setTheme(theme);
  // show.value = false;
}

let getTheme = '';

const cursorPosition = ref({ x: 0, y: 0 });
const isCursorVisible = ref(false);

function updateCursor(event) {
  cursorPosition.value.x = event.clientX;
  cursorPosition.value.y = event.clientY;
  isCursorVisible.value = true;
}

function hideCursor() {
  isCursorVisible.value = false;
}

onMounted(() => {
  // getTheme = themeStore.getTheme();
  // console.log(getTheme, 'getTheme');
  if (getTheme != '') show.value = false;
});
</script>

<style lang="scss" scoped>
.intro {
  display: grid;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  background-color: $PINK_4B0725;
  border: 1px solid $BASE_TEXT;
  border-radius: 15px;
  padding: 10px;
  cursor: auto;

  &__buttons {
    display: flex;

    button {
      color: $WHITE;
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
    }
  }
}

.content {
  @media screen and (min-width: $DESKTOP) {
    cursor: none;
  }
}

.cursor {
  @media screen and (min-width: $DESKTOP) {
    position: fixed;
    width: 50px;
    height: 50px;
    z-index: 100;
    background-image: url('@/assets/images/onepunchman.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: opacity 1s ease;
    pointer-events: none;
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
