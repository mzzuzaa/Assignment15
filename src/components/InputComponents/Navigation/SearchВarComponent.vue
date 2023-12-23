<template>
    <div class="search-bar">
      <input type="text" v-model="searchQuery" @input="handleSearch">
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
      };
    },
    methods: {
      handleSearch() {
        // Ваш код для обработки изменений в поле поиска
      },
      search() {
        // Ваш код для выполнения поиска
        console.log("Выполняем поиск:", this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  