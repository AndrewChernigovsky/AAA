<template>
  <div class="container">
    <h1 class="primary-title">Памятка для работы над проектом</h1>

    <p>
      вся разметка пишется в теге <strong>template</strong> такой тег в
      компоненте может быть только 1, можно вкладывать внутрь тег такой, но быть
      на <strong>одном уровне два таких тега не могут быть.</strong>
    </p>
    <p>Разметка возвращаемая из этого тега должна быть единым целым.</p>
    <p>Так неправильно:</p>
    <pre class="code-example">
      <code>
        {{
          `<template>
          <div>content</div>
          <div>content</div>
        </template>`
        }}   
      </code>
    </pre>

    <p>Так правильно:</p>
    <pre class="code-example">
      <code>
        {{`<template>
          <div> <== 'Добавили обертку'
            <div>content</div>
            <div>content</div>
          </div>
        </template>`}}
      </code>
    </pre>

    <p>стили глобальные пишут в папке styles</p>
    <p>стили для БЭМ для компонента пишутся внутри него самого</p>

    <pre class="code-example">
      <code>
        {{
          `<template>
            Здесь пишется вся разметка для компонента
            <section class="products container">
              <h2 class="secondary-title">Горячие закуски</h2>
              <ul class="products-list">
                <li v-for="product in products" :key="product.id">
                  <Product :product="product" />
                </li>
              </ul>
            </section>
          </template>

          <script setup>
<<<<<<< HEAD
            Здесь пишутся ваши скрипты, которые относятся непосредственно к компоненту
=======
            // Здесь пишутся ваши скрипты, которые относятся непосредственно к компоненту
>>>>>>> 487843bb21af1f78916303553e17964fda4c91b7
          </script>

          <style lang="scss">
            Здесь пишутся ваши стили
            .products-list {
              display: flex;
              gap: 10px;
            }
          </style>`
        }}
      </code>
    </pre>

    <p>
      Чтобы импортировать компонент и вставить его на страницу нужно сделать так
    </p>
    <pre class="code-example">
      <code>
        {{
          `<Footer/> - название берется из названия файла Footer.vue
          <Header/> - название берется из названия файла Header.vue`
        }}
      </code>
    </pre>
    <p>
      Во так вставляется наш компонент, вставлять компоненты можно друг друга и
      неограниченное количество раз
    </p>
    <pre class="code-example">
      <code>
        {{
          `<template>
            <div>
              <Header />
              <main class="main"><router-view /></main>
              <Footer />
            </div>
          </template>`
        }}
      </code>
    </pre>
    <p>
      Если нужно писать кастомный js, то используйте эту вставку в компоненте, в
      котором нужен этот скрипт.
    </p>
    <pre class="code-example">
      <code>
        {{
          `<script setup>
            import { startJS } from '@/custom/index';
            import { onMounted, nextTick } from 'vue';

            onMounted(() => {
              nextTick(() => {
                startJS();
              });
            });
          </script>`
        }}
      </code>
    </pre>
    <h3 class="third-title">Материалы для ознакомления</h3>
    <oll>
      <li>
        <a
          class="base-link"
          href="https://v3.ru.vuejs.org/ru/guide/installation.html#cli"
          >Документация</a
        >
      </li>
      <li>
        <a
          class="base-link"
          href="https://vuejs.org/api/built-in-directives.htm"
          >Документация-2</a
        >
      </li>
      <li>
        <a class="base-link" href="https://metanit.com/web/vue/1.1.php"
          >Туториал</a
        >
      </li>
      <li>
        <a class="base-link" href="https://learn.javascript.ru/object-methods"
          >Учебник</a
        >
      </li>
      <li>
        <a
          class="base-link"
          href="https://code.mu/ru/javascript/book/oop/classes-objects/"
          >Про классы</a
        >
      </li>
    </oll>
    <ul class="videos list-style-none">
      <li>
        <h4>Видео Vue от А-Я</h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XzLuMtDelGk?si=VtPLQ3RqI0Jqcyh9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </li>
      <li>
        <h4>Видео Vue от А-Я</h4>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/p059z-0JTFg?si=adRdc9PWUhNn87Dk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </li>
    </ul>
  </div>
</template>
<script setup></script>
<style lang="scss">
.code-example {
  background-color: $PINK_4B0725; /* Светло-серый фон для кода */
  border: 1px solid $BASE_TEXT; /* Рамка вокруг кода */
  border-radius: 5px; /* Закругленные углы */
  padding: 10px; /* Отступы внутри блока */
  overflow-x: auto; /* Горизонтальная прокрутка для длинных строк */
}

code {
  font-family: 'Courier New', Courier, monospace; /* Моноширинный шрифт для кода */
  white-space: pre; /* Сохранение пробелов и отступов */
}

.videos {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  iframe {
    height: auto;
    width: 300px;

    @media screen and (min-width: $TABLET) {
      width: 500px;
      height: 315px;
    }
    @media screen and (min-width: $DESKTOP) {
      width: 670px;
      height: 415px;
    }
  }
}
</style>
