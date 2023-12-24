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
.custom-input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc; 
  border-radius: 4px; 
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s; }

.custom-input:focus {
  border-color: #54c7ec; 
  box-shadow: 0 0 5px rgba(84, 199, 236, 0.7);
}
</style>
