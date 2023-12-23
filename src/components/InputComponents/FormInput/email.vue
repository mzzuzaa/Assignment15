<template>
    <input
      class="form-input email-input"
      type="email"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Enter email..."
    />
  </template>
  
  <script>
  export default {
    name: 'EmailInput',
    props: {
      value: String,
    },
  };
  </script>
  
  <style scoped>
  /* Базовые стили для email input */
  .email-input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #3498db;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
  }
  
  .email-input:focus {
    border-color: #2980b9;
    box-shadow: 0 0 5px rgba(41, 128, 185, 0.5);
  }
  </style>
  