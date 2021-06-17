import {CREATE,FETCH_ALL,UPDATE_BY_SUBSTRACTING,UPDATE_BY_ADDING,DELETE}from '../constants/actionsType.js'

export default (credits = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...credits, action.payload];
      case UPDATE_BY_ADDING:
        return credits.map((credit) => (credit._id === action.payload._id ? action.payload : credit));
      case UPDATE_BY_SUBSTRACTING:
        return credits.map((credit) => (credit._id === action.payload._id ? action.payload : credit));
      case DELETE:
        return credits.filter((credit) => credit._id !== action.payload);
      default:
        return credits;
    }
  };