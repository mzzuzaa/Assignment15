<template>
    <div class="collapse-container">
      <button class="collapse-btn" @click="isCollapsed = !isCollapsed">
        <slot name="button"></slot>
      </button>
      <div class="collapse-content" v-show="isCollapsed">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CollapseContainer',
    data() {
      return {
        isCollapsed: false
      };
    }
  }
  </script>
  
  <style scoped>
  .collapse-container {
    margin: 16px 0;
  }
  .collapse-btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .collapse-content {
    border: 1px solid #e8e8e8;
    padding: 16px;
    border-radius: 4px;
  }
  </style>
  