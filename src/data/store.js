import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  imagePath: "http://127.0.0.1:8000/storage/",
  categories: [],
  dishes: [],
  restaurants: [],
  filteredRestaurants: [],
  filterCategories: [],
  searchedRestaurants: [],
  search: false,
  cart: [
    { name: "Pizza Margherita", price: 8.5 },
    { name: "Hamburger", price: 9.99 },
    { name: "Insalata Caesar", price: 6.95 },
    { name: "Pizza Margherita", price: 8.5 },
    { name: "Insalata Caesar", price: 6.95 },
  ],
});
