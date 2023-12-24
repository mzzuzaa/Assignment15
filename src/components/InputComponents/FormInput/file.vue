<template>
    <div>
      <label for="fileInput" class="file-label">
        <span>Choose a file</span>
        <input
          id="fileInput"
          class="form-input file-input"
          type="file"
          v-on:change="handleFileInputChange"
          ref="input"
          hidden
        />
      </label> 
      <p v-if="selectedFile">{{ selectedFile.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FileInput',
    data() {
      return {
        selectedFile: null,
      };
    },
    methods: {
      handleFileInputChange(event) {
        const file = event.target.files[0];
        this.selectedFile = file;
      
      },
    },
  };
  </script>
  
  <style scoped>
  .file-label {
    display: inline-block;
    padding: 8px 12px;
    background-color: #3498db;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .file-label:hover {
    background-color: #2980b9;
  }
  
  p {
    margin-top: 8px;
    font-size: 14px;
    color: #333;
  }
  </style>
  