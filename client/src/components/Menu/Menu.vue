<template>
  <div class="menu-wrapper">
    <div class="wrapper" v-if="windowWidth < 768">
      <button type="button" @click="toggleMenu" id="burger-button">
        <span class="visually-hidden">Открыть меню</span>
      </button>
      <Transition name="fade">
        <div class="menu-mobile" v-if="show">
          <button
            type="button"
            @click="toggleMenu"
            class="active"
            id="burger-button"
          >
            <span class="visually-hidden">Закрыть меню</span>
          </button>
          <nav class="nav" ref="navRef">
            <router-link
              v-for="link in links"
              :key="link.path"
              class="nav__link"
              active-class="active"
              :to="link.path"
              @click="toggleMenu"
            >
              {{ link.name }}
            </router-link>
            <button type="button" @click="showLogin = !showLogin">Войти</button>
            <button type="button" @click="showRegistration = !showRegistration">
              Зарегистрироваться
            </button>
          </nav>
          <Login v-if="showLogin" />
          <Registration v-if="showRegistration" />
        </div>
      </Transition>
    </div>

    <div class="menu" ref="burgerMenuRef" v-if="windowWidth > 768">
      <nav class="nav" ref="navRef">
        <router-link
          v-for="link in links"
          :key="link.path"
          class="nav__link"
          active-class="active"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
        <button type="button" @click="showLogin = !showLogin">Войти</button>
        <button type="button" @click="showRegistration = !showRegistration">
          Зарегистрироваться
        </button>
      </nav>
      <Login v-if="showLogin" />
      <Registration v-if="showRegistration" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Login from '@/views/Login.vue';
import Registration from '@/views/Registration.vue';

const navRef = ref(null);
const show = ref(false);
const showLogin = ref(false);
const showRegistration = ref(false);

let windowWidth = window.innerWidth;

const links = ref([
  { name: 'Главная', path: '/' },
  { name: 'Учебник', path: '/manual' },
]);

function toggleMenu() {
  console.log(show);
  show.value = !show.value;
}
// Обработчик нажатия клавиши
function handleKeydown(event) {
  if (event.key === 'Escape') {
    show.value = false; // Закрываем меню при нажатии Esc
  }
}
// Добавляем слушатели событий при монтировании компонента
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

// Удаляем слушатели событий при уничтожении компонента
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
<style lang="scss" scoped>
#burger-button {
  display: block;
  width: 40px;
  height: 40px;
  position: relative;
  background: $TRANSAPRENT;
  border: 1px solid $TRANSAPRENT;

  &.active {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: 2px;
    background-color: $BASE_TEXT;
    box-shadow:
      0px 15px 0px 0px $BASE_TEXT,
      0px 30px 0px 0px $BASE_TEXT;
  }

  @media screen and (min-width: $TABLET) {
    display: none;
  }
}

.menu-mobile {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  #burger-button {
    position: absolute;
    top: 10px;
    left: 10px;

    &:after,
    &::before {
      content: '';
      position: absolute;
      top: 17px;
      left: -2px;
      width: inherit;
      height: 2px;
      background-color: $BASE_TEXT;
      box-shadow: none;
    }

    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  .nav {
    display: grid;
    gap: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
