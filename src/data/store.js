import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  imagePath: "http://127.0.0.1:8000/storage/",
  tomTomKey: "G9SmJgO7aKYKDtmbd5IeDrSUAkYOvUVG",
  categories: [],
  dishes: [],
  restaurants: [],
  filteredRestaurants: [],
  filterCategories: [],
  searchedRestaurants: [],
  search: false,
  cart: [],
  darkMode: false,
  token: null,
  categoryLoading: false,
  restaurantsLoading: false,
  checkout: null,
});
