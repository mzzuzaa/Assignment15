<template>
    <nav class="breadcrumb">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb {
    font-size: 16px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  
  li:not(:last-child)::after {
    content: "›";
    margin: 0 10px;
  }
  
  router-link {
    text-decoration: none;
    color: #007bff;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  