<template>
    <div class="list-group">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String, 
      items: Array, 
    },
  };
  </script>
  
  <style scoped>
  .list-group {
    background-color: #846c6c;
    padding: 10px;
    margin: 10px;
    border: 1px solid #040202;
    border-radius: 5px;
  }
  
  h2 {
    color: #333;
    font-size: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  </style>
  