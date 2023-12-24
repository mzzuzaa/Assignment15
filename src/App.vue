<template>
  <div id="app">
    <h1>Welcome to My App</h1>
    <tinput v-model="tinputValue" />
    <email v-model="emailValue" />
    <password v-model="passwordValue" />
    <number v-model="numberValue" />
    <file v-model="fileValue" />
    <datatime v-model="datatime"/>
    <checkbox v-model="checkbox"/>
    <radiobox label="Choose an option:" :options="radioOptions" v-model="radiobox" />
    <FormSelect id="select" label="Select a fruit" :options="fruitOptions" v-model="selectedFruit" @change="handleFruitChange" />
    <toggle-switch id="unique-toggle" v-model="toggleState" @change="handleToggle"></toggle-switch>
    <custom-button @click="handleButtonClick">
      Нажми меня
    </custom-button>
   
    <div id="app">
    <card>
      <template v-slot:#header>
        <h2>Card Header</h2>
      </template>
      This is a card.
      <template v-slot:#footer>
        <small>Card Footer</small>
      </template>
    </card>

    <accordion :items="accordionItems">
      <template v-for="(item, index) in accordionItems" v-slot:[`content-${index}`] :key="index">
        {{ item.content }}
      </template>
    </accordion>

    <collapse>
      <template #button>Toggle Collapse</template>
      This content will be shown or hidden in the collapse component.
    </collapse>
  </div>
    <div>
      <header>
      <SearchBar @search="performSearch" />
      <Breadcrumb :items="breadcrumbItems" />
    </header>
    <main>
      <ul>
        <li v-for="item in displayedItems" :key="item.id">{{ item.name }}</li>
      </ul>
    </main>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="handlePageChange" />
    <TagsContainer :tags="tags" />
    <ListGroupContainer :title="listTitle" :items="listItems" /> 
    <NavigationLinksContainer :links="navLinks" /> 
    <NavbarComponent/>
    <TabsComponent/>
    <DrawersComponent/>
    <DividerComponent/>
    <SpinLoaderComponent/>

    <ImageComponent :imageUrl="require('@/assets/image1.jpg')" />
    <TextTypography content="Заголовок" textStyle="title-text" />
<TextTypography content="Основной текст" textStyle="body-text" />
<TextTypography content="Выделенный текст" textStyle="highlight-text" />
<user-profile
      user-image="@/assets/image2.jpg"
      user-name="@/assets/image3/jpg"
      user-description="@/assets/image3/jpg"
    ></user-profile>
  
    <UserProfileImage/>



    
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import tinput from './components/InputComponents/FormInput/tinput.vue';
import email from './components/InputComponents/FormInput/email.vue';
import password from './components/InputComponents/FormInput/password.vue';
import number from './components/InputComponents/FormInput/number.vue';
import file from './components/InputComponents/FormInput/file.vue';
import datatime from './components/InputComponents/FormInput/datatime.vue';
import checkbox from './components/InputComponents/FormCheckbox/checkbox.vue';
import radiobox from './components/InputComponents/FormRadiobox/radiobox.vue';
import FormSelect from './components/InputComponents/FormSelect/select.vue';
import ToggleSwitch from './components/InputComponents/FormToggleSwitch/toggleswitch.vue';
import CustomButton from './components/InputComponents/ButtonsDropdown/custombutton.vue';
import Card from './components/InputComponents/Containers/CardContainer.vue';
import Accordion from './components/InputComponents/Containers/AccordionContainer.vue';
import Collapse from './components/InputComponents/Containers/CollapseContainer.vue';
import SearchBar from './components/InputComponents/Navigation/SearchВarComponent.vue';
import Breadcrumb from './components/InputComponents/Navigation/BreadCrumbComponent.vue';
import Pagination from './components/InputComponents/Navigation/PaginationComponent.vue';
import TagsContainer from './components/InputComponents/Navigation/TagsContainer.vue';
import ListGroupContainer from './components/InputComponents/Navigation/ListGroupContainer.vue';
import NavigationLinksContainer from './components/InputComponents/Navigation/NavigationLinksContainer.vue';
import DrawersComponent from './components/InputComponents/Navigation/DrawersComponent.vue';
import NavbarComponent from './components/InputComponents/Navigation/NavbarComponent.vue';
import TabsComponent from './components/InputComponents/Navigation/TabsComponent.vue';
import DividerComponent from './components/InputComponents/FormOther/DividerComponent.vue';
import ImageComponent from './components/InputComponents/FormOther/ImageComponent.vue';
import SpinLoaderComponent from './components/InputComponents/FormOther/SpinLoaderComponent.vue';
import UserProfileImage from './components/InputComponents/FormOther/UserProfileImage.vue';

export default {
  name: 'App',
  components: {
    tinput,
    email,
    password,
    number,
    file,
    datatime,
    checkbox,
    radiobox,
    FormSelect,
    'toggle-switch': ToggleSwitch,
    CustomButton,
    Card,
    Accordion,
    Collapse,
    SearchBar,
    Breadcrumb,Pagination,
    TagsContainer,
    ListGroupContainer,
    NavigationLinksContainer,
    NavbarComponent,
    DrawersComponent,
    TabsComponent,
    ImageComponent,
    DividerComponent,
    SpinLoaderComponent,
    UserProfileImage,
   
  },
  data() {

       return {
      tinput: '',
      email:'',
      password:'',
      number:'',
      file:'',
      datatime:'',
      checkbox:'',
      radiobox:'',

      
      radioOptions: ['Option 1','Option 2','Option 3'],
      FormSelect:'',
      toggleState: false,
      accordionItems: [
        { header: 'Accordion Header 1', content: 'Content 1' },
        { header: 'Accordion Header 2', content: 'Content 2' },
        { header: 'Accordion Header 3', content: 'Content 3' }
      ],
      currentPage: 1,
      totalPages: 9,
      searchQuery: "",
      breadcrumbItems: [
        { label: "Home", to: "/" },
        { label: "Category", to: "/category" },
        { label: "Subcategory", to: "/subcategory" },
      ],
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      tags: ["Vue.js", "Компоненты", "Дизайн", "Структура"],
      listTitle: "Список элементов",
      listItems: ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4"],
      navLinks: [
        { to: "/", text: "Главная" },
        { to: "/about", text: "О нас" },
        { to: "/contact", text: "Контакты" },
      ],
    
      
    }
  },
  computed: {
    displayedItems() {
      const startIndex = (this.currentPage - 1) * 5; 
      const endIndex = startIndex + 5;
      return this.items.slice(startIndex, endIndex);
    },
  },
  methods: {
    handleToggle(newValue) {
      console.log('Toggle State changed:', newValue);
    },
    handleButtonClick() {
      alert('Кнопка нажата!');
    },
    performSearch() {
    
    axios.get(`/api/search?q=${this.searchQuery}`)
      .then(response => {
        console.log("Результаты поиска:", response.data);
      })
      .catch(error => {
        console.error("Ошибка при выполнении поиска:", error);
      });
    },
    changePage(page) {
   
    axios.get(`/api/loadPage?page=${page}`)
      .then(response => {
        console.log("Загруженные данные для страницы", page, ":", response.data);
        this.currentPage = page;
      })
      .catch(error => {
        console.error("Ошибка при загрузке страницы:", error);
      });
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: #f0f0f0;
  padding: 10px 0;
}

main {
  padding: 20px;
}

footer {
  background-color: #f0f0f0;
  padding: 10px 0;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
