<template>
    <div class="text-typography">
      <p :class="textStyle">{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "TextTypography",
    props: {
      content: String,
      textStyle: String,
    },
  };
  </script>
  
  <style scoped>
  .text-typography {
    margin-bottom: 16px;
  }
  
  .title-text {
    font-size: 24px;
    font-weight: bold;
    color: #333; 
    text-transform: uppercase;
  }
  
  .body-text {
    font-size: 16px;
    line-height: 1.5;
    color: #666;
  }
  
  .highlight-text {
    font-size: 18px;
    color: #ff6600; 
  }
  
  </style>
  