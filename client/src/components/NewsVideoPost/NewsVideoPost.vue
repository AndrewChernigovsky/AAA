<template>
  <ul class="aside-list">
    <li class="aside-list__item" v-for="post of posts" :key="post.id">
      <ol>
        <li v-for="text of post.texts" :key="text">
          <p class="base-text">{{ text }}</p>
        </li>
      </ol>
      <div class="iframe-container">
        <iframe
          :src="post.videoLink"
          width="426"
          height="240"
          allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <a class="base-link" :href="post.presentationLink"
        >Краткая презентация и резюме созвона</a
      >
    </li>
  </ul>
</template>
<script setup>
import { onMounted, ref } from 'vue';

let posts = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://aaa/server/api.php');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    posts.value = await response.json();
    console.log(posts.value);
  } catch (error) {
    console.error('Произошла ошибка при получении данных:', error);
  }
});
</script>

<style lang="scss" scoped></style>
