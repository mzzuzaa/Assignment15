<template>
    <div class="toggle-switch">
        <input
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="$emit('update:checked', $event.target.checked)"
      class="toggle-input"
    >      <label :for="id" class="toggle-label"></label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToggleSwitch',
    props: {
      id: String,
      checked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleChange() {
        this.$emit('change', this.checked);
      }
    }
  }
  </script>
  
  <style scoped>
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .toggle-label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #130202;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  
  .toggle-label:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  
  .toggle-input:checked + .toggle-label {
    background-color: #2196F3;
  }
  
  .toggle-input:focus + .toggle-label {
    box-shadow: 0 0 1px #2196F3;
  }
  
  .toggle-input:checked + .toggle-label:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  </style>
  