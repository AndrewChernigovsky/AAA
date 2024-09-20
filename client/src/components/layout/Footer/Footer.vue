<template>
  <footer>
    <div class="container">
      <nav class="nav">
        <router-link class="nav__link" active-class="active" to="/"
          >Главная</router-link
        >
        <router-link class="nav__link" active-class="active" to="/academy"
          >Академия</router-link
        >
        <router-link class="nav__link" active-class="active" to="/author"
          >Об Авторе</router-link
        >
        <router-link class="nav__link" active-class="active" to="/news"
          >Новости</router-link
        >
      </nav>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer .container {
  border-top: 2px solid $BASE_TEXT;
}
</style>
