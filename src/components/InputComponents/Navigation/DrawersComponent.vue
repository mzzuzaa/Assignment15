<template>
    <div class="drawers">
      <button @click="toggleDrawer">Открыть ящик</button>
      <div v-if="isDrawerOpen" class="drawer-content">
        <h3>Содержимое ящика</h3>
        <p>Zdes dolzhen bit text.</p>
        <button @click="toggleDrawer">Закрыть</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DrawersComponent",
    data() {
      return {
        isDrawerOpen: false,
      };
    },
    methods: {
      toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .drawers {
    padding: 20px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  .drawer-content {
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-top: 10px;
  }
  
  h3 {
    color: #333;
    font-size: 20px;
  }
  
  p {
    color: #666;
  }
  
  button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>
  