<template>
    <div class="user-profile">
      <div class="user-image">
        <img :src="userImage" alt="Изображение пользователя">
      </div>
      <div class="user-name">
        {{ userName }}
      </div>
      <div class="user-description">
        {{ userDescription }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfileImage',
    props: {
      userImage: String,
      userName: String,
      userDescription: String
    }
  };
  </script>
  
  <style scoped>  .user-profile {
    border: 2px solid #262faf;
    padding: 20px;
    width: 300px;
    text-align: center;
    background-color: #e5bfbf;
    border-radius: 10px;
  }
  
  .user-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 10px;
  }
  
  .user-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .user-info {
    font-size: 14px;
  }
  
  .user-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .user-description {
   
    font-size: 14px;
  color: #333; 
  margin-top: 5px; 
  }
  </style>