<template>
    <div class="accordion">
      <div class="accordion-item" v-for="(item, index) in items" :key="index">
        <div class="accordion-header" @click="toggle(index)">
          {{ item.header }}
        </div>
        <div class="accordion-content" v-show="openIndex === index">
          <slot :name="`content-${index}`"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccordionContainer',
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        openIndex: null
      };
    },
    methods: {
      toggle(index) {
        this.openIndex = this.openIndex === index ? null : index;
      }
    }
  }
  </script>
  
  <style scoped>
  .accordion-header {
    cursor: pointer;
    padding: 12px;
    border: 1px solid #e8e8e8;
    margin-bottom: 8px;
    background-color: #f7f7f7;
  }
  .accordion-content {
    padding: 12px;
    border: 1px solid #e8e8e8;
    margin-bottom: 8px;
  }
  </style>
  