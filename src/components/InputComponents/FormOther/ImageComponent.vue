<template>
    <div class="image-component">
      <img :src="imageUrl" alt="Image" />
    </div>
  </template>
  
  <script>

  export default {
    name: "ImageComponent",
    props: {
      imageUrl: String,
    },
  };
  </script>
  
  <style scoped>
  .image-component {
    width: 100%;
    max-width: 300px;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  </style>
  