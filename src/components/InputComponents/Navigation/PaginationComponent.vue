<template>
    <nav class="pagination">
      <ul>
        <li v-if="currentPage > 1">
          <button @click="changePage(currentPage - 1)">Previous</button>
        </li>
        <li v-for="page in pages" :key="page">
          <button @click="changePage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
        </li>
        <li v-if="currentPage < totalPages">
          <button @click="changePage(currentPage + 1)">Next</button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
  name: 'PaginationComponent',
  props: {
    currentPage: Number,
     totalPages: Number,
  },
    
    computed: {
      pages() {
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
        return pages;
      },
    },
    methods: {nextPage() {
      this.$emit('change-page', this.currentPage + 1);
    
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    font-size: 16px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  
  li {
    margin: 0 5px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.active {
    background-color: #0056b3;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  