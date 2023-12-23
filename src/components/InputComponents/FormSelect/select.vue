<template>
    <div class="form-select">
    <label :for="id">{{ label }}</label>
    <select :id="id" v-model="selectedOption" @change="handleChange">
      <option :value="null" disabled>Select an option</option>
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
  </template>
  
  <script>
  export default {
    name: 'FormSelect',
    props: {
      id: String,
      label: String,
      options: Array,
      defaultOption: { // Новый пропс для выбора опции по умолчанию
        type: String,
        default: null,
      },
    },
    data() {
      return {
        selectedOption: this.defaultOption, // Устанавливаем выбранную опцию по умолчанию
      };
    },
    methods: {
    handleChange() {
      // Вызываем это событие при изменении выбора
      this.$emit('change', this.selectedOption);
    },
  },
  };
  </script>
  
  <style scoped>

.form-select {
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f7f7f7;
  color: #333;
}

select:hover {
  border-color: #666;
}

select option:checked {
  background-color: #ddd;
  font-weight: bold;
}
  </style>
  