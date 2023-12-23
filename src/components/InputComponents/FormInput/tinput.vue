<template>
  <input
    class="custom-input" 
    type="text"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    placeholder="Enter text..."
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    value: String,
  },
};
</script>

<style scoped>
/* Базовые стили для текстового поля */
.custom-input {
  width: 100%; /* Занимает всю доступную ширину */
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc; /* Тонкая рамка */
  border-radius: 4px; /* Небольшие закругленные углы */
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s; /* Плавные переходы при фокусе */
}

/* Стили при фокусе на текстовом поле */
.custom-input:focus {
  border-color: #54c7ec; /* Изменение цвета рамки при фокусе */
  box-shadow: 0 0 5px rgba(84, 199, 236, 0.7); /* Подсветка тени при фокусе */
}
</style>
