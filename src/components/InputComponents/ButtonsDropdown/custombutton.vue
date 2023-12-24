<template>
    <button class="custom-button" @click="onClick">
      <slot></slot> 
    </button>
  </template>
  
  <script>
  export default {
    name: 'CustomButton',
    emits: ['click'],
    methods: {
      onClick(event) {
        this.$emit('click', event);
      }
    }
  }
  </script>
  
  <style scoped>
  .custom-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50; 
    color: white;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  
  .custom-button:hover {
    background-color: white;
    color: black;
    border: 1px solid #4CAF50; 
  }
  </style>
  