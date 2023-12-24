<template>
    <div class="divider">
      <div class="line"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DividerComponent",
  };
  </script>
  
  <style scoped>
  .divider {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }
  
  .line {
    flex-grow: 1;
    height: 1px;
    background-color: #3498db;
    opacity: 0.7;
  }
  </style>
  