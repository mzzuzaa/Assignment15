<!-- Radiobox.vue -->
<template>
    <div class="form-radiobox">
      <label class="radiobox-label">{{ label }}</label>
      <div class="options">
        <label v-for="(option, index) in options" :key="index" class="option">
          <input type="radio" :value="option" v-model="selectedOption" class="radio-input" />
          {{ option }}
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormRadiobox',
    props: {
      label: String,
      options: Array,
      value: String
    },
    computed: {
      selectedOption: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-radiobox {
    margin-bottom: 20px;
  }
  
  .radiobox-label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
    margin-top: 60px;
  }
  
  .options {
    display: flex;
    flex-direction: column;
  }
  
  .option {
    margin-bottom: 6px;
  }
  
  .radio-input {
    margin-right: 8px;
  }
  </style>
  