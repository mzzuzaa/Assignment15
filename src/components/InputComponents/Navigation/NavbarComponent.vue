<template>
    <div class="navbar">
      <nav>
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  nav li {
    margin-right: 20px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  