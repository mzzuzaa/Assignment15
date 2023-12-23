<template>
    <div class="card">
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardContainer'
  }
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 16px 0;
  }
  </style>
  