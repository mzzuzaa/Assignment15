<template>
    <div class="form-checkbox">
      <label class="checkbox-label">
        <input type="checkbox" :checked="isChecked" @change="handleChange" class="checkbox-input" />
        <span class="checkmark"></span>
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormCheckbox',
    props: {
      label: String,
      value: Boolean
    },
    computed: {
      isChecked: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('input', event.target.checked);
      }
    }
  };
  </script>
  
  <style scoped>
  .form-checkbox {
    margin-bottom: 20px;
  }
  
  .checkbox-label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
  }
  
  .checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .checkbox-input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .checkbox-input:checked ~ .checkmark:after {
    display: block;
  }
  
  .checkbox-input:checked ~ .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  </style>
  