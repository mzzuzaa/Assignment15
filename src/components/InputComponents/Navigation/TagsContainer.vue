<template>
  <div class="tag-container">
    <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array, },
};
</script>

<style scoped>
.tag-container {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  background-color: #e0e0e0;
  color: #333;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
}
</style>
