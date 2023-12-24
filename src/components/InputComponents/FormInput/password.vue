<template>
    <input
      class="form-input password-input"
      type="password"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Enter password..."
    />
  </template>
  
  <script>
  export default {
    name: 'PasswordInput',
    props: {
      value: String,
    },
  };
  </script>
  
  <style scoped>
  .password-input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #27ae60;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
  }
  
  .password-input:focus {
    border-color: #2ecc71;
    box-shadow: 0 0 5px rgba(46, 204, 113, 0.5);
  }
  </style>
  