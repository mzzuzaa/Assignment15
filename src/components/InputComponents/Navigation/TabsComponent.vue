<template>
    <div class="tabs">
      <ul>
        <li :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">Tab 1</li>
        <li :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">Tab 2</li>
        <li :class="{ active: activeTab === 'tab3' }" @click="activeTab = 'tab3'">Tab 3</li>
      </ul>
      <div v-if="activeTab === 'tab1'">Содержимое вкладки 1</div>
      <div v-if="activeTab === 'tab2'">Содержимое вкладки 2</div>
      <div v-if="activeTab === 'tab3'">Содержимое вкладки 3</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TabsComponent",
    data() {
      return {
        activeTab: "tab1",
      };
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  li {
    margin-right: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .active {
    color: #007bff;
  }
  
  div {
    margin-top: 10px;
  }
  </style>
  