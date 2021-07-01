import { ADD_POST, REMOVE_POST, GET_ALL_POSTS, CHANGING_POSTS_FORM, CHANGE_PATH } from '../actionTypes';
import Cookie from 'js-cookie';

const DEFAULT_STATE = {
  postsList: { vehicles: [], realEstate: [], freeStuff: [], electronics: [], musicalInstruments: [], gamesAndToys: [], householdSupplies: [], family: [], pets: [], homeDecorationSupplies: [], sports: [], fun: [] },
  categories: ['Apartments & Flats', 'Free stuff', 'Computer & related'],
  postForm: {
    imageUrl: [],
    title: '',
    price: '',
    category: 'Vehicles',
    description: '',
    location: ''
  },
  history: {
    path: '/',
    class: 'all'
  }
}

const filteringCategories = (posts) => {
  const filteredData = { vehicles: [], realEstate: [], freeStuff: [], electronics: [], musicalInstruments: [], gamesAndToys: [], householdSupplies: [], family: [], pets: [], homeDecorationSupplies: [], sports: [], fun: [] }
  posts.forEach(val => {
    switch (val.category[0]) {
      case 'Apartments & Flats':
        filteredData.realEstate.push(val);
        break
      case 'Free stuff':
        filteredData.freeStuff.push(val);
        break
      case 'Electronics' || 'electronics':
        filteredData.electronics.push(val);
        break
      default:
        break
    }
  })
  return filteredData;
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      const posts = filteringCategories(action.posts)
      return {
        ...state,
        postsList: posts
      }
    case ADD_POST:
      return {
        ...state,
        postsList: action.post
      }
    case CHANGING_POSTS_FORM:
      return {
        ...state,
        postForm: action.formData
      }
    case REMOVE_POST:
      return {
        ...state,
        postsList: action.postsList
      }
    case CHANGE_PATH:
      Cookie.set('path', action.history, { expires: 9999999999 });
      return {
        ...state,
        history: action.history,
        postForm: {
          imageUrl: [],
          title: '',
          price: '',
          category: 'Vehicles',
          description: '',
          location: ''
        }
      }
    default:
      return state;
  }
}