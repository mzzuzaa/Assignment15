<template>
  <nav class="navigation-links">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: Array, // Массив объектов с данными о ссылках (to и text)
  },
};
</script>

<style scoped>
.navigation-links {
  background-color: #333;
  color: #2d78ea;
  padding: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

router-link {
  color: #770f0f;
  text-decoration: none;
  transition: color 0.3s;
}

router-link:hover {
  color: #800404;
}
</style>
