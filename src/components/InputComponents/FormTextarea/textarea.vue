<template>
    <div class="form-textarea">
      <label :for="id">{{ label }}</label>
      <textarea :id="id" v-model="inputText" class="custom-textarea" rows="4"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormTextarea',
    props: {
      id: String,
      label: String,
    },
    data() {
      return {
        inputText: '',
      };
    },
  };
  </script>
  
  <style scoped>
  
  .form-textarea {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
  }
  
  .custom-textarea {
    width: 300px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    resize: vertical; 
  }
  </style>
  