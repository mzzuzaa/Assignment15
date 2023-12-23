<template>
    <input
      class="form-input number-input"
      type="number"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Enter number..."
    />
  </template>
  
  <script>
  export default {
    name: 'NumberInput',
    props: {
      value: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Базовые стили для number input */
  .number-input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #9b59b6;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
  }
  
  .number-input:focus {
    border-color: #8e44ad;
    box-shadow: 0 0 5px rgba(142, 68, 173, 0.5);
  }
  </style>
  