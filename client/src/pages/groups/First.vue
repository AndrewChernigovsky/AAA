<template>
  <div class="container">
    <h1 class="primary-title">Новости для группы по программированию</h1>
<<<<<<< HEAD
    <section class="section">
      <h2 class="secondary-title">Ваша сборка</h2>
      <p class="base-text">Вся необходимая информация в файле Readme.md</p>
      <p class="base-text" id="download"></p>
    </section>
    <section class="section">
      <h2 class="secondary-title">Материалы для подготовки</h2>
      <p class="base-text">Вся необходимая информация в файле Readme.md</p>
      <router-link to="/helper" class="base-link">Памятка</router-link>
    </section>
=======
    <div class="wrapper">
      <div class="sections">
        <section class="section">
          <h2 class="secondary-title">Ваша сборка</h2>
          <p class="base-text">Вся необходимая информация в файле Readme.md</p>
          <p class="base-text" id="download"></p>
        </section>
        <section class="section">
          <h2 class="secondary-title">Материалы для подготовки</h2>
          <p class="base-text">Вся необходимая информация в файле Readme.md</p>
          <router-link to="/helper" class="base-link">Памятка</router-link>
        </section>
      </div>
      <aside class="section">
        <h2 class="secondary-title">Видеозаписи созвонов</h2>
        <NewsVideoPost />
      </aside>
    </div>
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
  </div>
</template>

<script setup>
const username = 'AndrewChernigovsky'; // Замените на имя пользователя
const reponame = 'webkit-starter'; // Замените на имя репозитория

fetch(`https://api.github.com/repos/${username}/${reponame}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Сеть ответила с ошибкой: ' + response.status);
    }
    return response.json();
  })
  .then((data) => {
    // Получаем имя ветки, по умолчанию используем 'main'
    const branch = data.default_branch || 'main';

    // Создаем URL для скачивания ZIP-архива
    const downloadUrl = `https://github.com/${username}/${reponame}/archive/refs/heads/${branch}.zip`;

    if (document.querySelector('#download .base-link') === null) {
      // Создаем ссылку
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${reponame}-${branch}.zip`; // Указываем имя файла для скачивания
      link.textContent = 'Скачать репозиторий';
      link.classList.add('base-link');

      // Добавляем ссылку на страницу
      document.querySelector('#download').appendChild(link);
    } else return;
  })
  .catch((error) => console.error('Ошибка:', error));
<<<<<<< HEAD
</script>

<style lang="scss">
.container {
  display: grid;
  gap: 20px;
=======

// const posts = [
//   {
//     id: 1,
//     texts: [
//       '2024-08-21 Разбираем методы javascript по работе с DOM-деревом.',
//       'document.querySelector, document.querySelectorAll e.t.c',
//       'Разбираем методы работы с коллекциями ( живые и неживые )',
//       'Обзор на библиотеку Three.js',
//     ],
//     videoLink:
//       'https://vk.com/video_ext.php?oid=-200155321&id=456239031&autoplay=0',
//     presentationLink: 'presentation-2024-08-21.pdf',
//   },
//   {
//     id: 2,
//     texts: [
//       '2024-08-21 Разбираем методы javascript по работе с DOM-деревом.',
//       'document.querySelector, document.querySelectorAll e.t.c',
//       'Разбираем методы работы с коллекциями ( живые и неживые )',
//       'Обзор на библиотеку Three.js',
//     ],
//     videoLink:
//       'https://vk.com/video_ext.php?oid=-200155321&id=456239031&autoplay=0',
//     presentationLink: 'presentation-2024-08-21.pdf',
//   },
// ];
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  gap: 20px;

  @media screen and (min-width: $TABLET) {
    grid-template-columns: repeat(12, 1fr);
  }
}

.sections {
  display: grid;
  gap: 20px;
  align-self: baseline;

  @media screen and (min-width: $TABLET) {
    grid-column: 1/5;
  }
}

.primary-title {
  grid-column: 1/13;
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
}

.section {
  border: 2px solid $BASE_TEXT;
  padding: 20px;
}
<<<<<<< HEAD
=======

aside.section {
  @media screen and (min-width: $TABLET) {
    grid-column: 5/13;
  }
}

.aside-list {
  display: grid;
  gap: 20px;

  &__item {
    &:not(:first-of-type) {
      padding-top: 10px;
      border-top: 1px solid $BASE_TEXT;
    }

    .base-link {
      padding-left: 10px;
      position: relative;
      color: red;

      &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: 50%;
        z-index: 12;
        color: $BASE_TEXT;
        display: block;
        transform: translateY(-50%);
        background-image: url('@/assets/images/sprite.svg#document');
        width: 50px;
        height: 50px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px 15px;
      }
    }
  }
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: $BASE_TEXT;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
</style>
