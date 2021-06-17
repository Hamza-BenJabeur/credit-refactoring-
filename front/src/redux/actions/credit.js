import {
    FETCH_ALL,
    CREATE,
    UPDATE_BY_ADDING,
    UPDATE_BY_SUBSTRACTING,
    DELETE
} from '../constants/actionsType.js';

import * as api from '../../api/index.js'

export const getCredits = () => async (dispatch) => {
    try {
      const { data } = await api.fetchCredits();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createCredit = (credit) => async (dispatch) => {
    try {
      const { data } = await api.createCredit(credit);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  

  export const updateCreditByAdding = (id, newCredit) => async (dispatch) => {
    try {
      const { data } = await api.updateCreditByAdding(id, newCredit);
  
      dispatch({ type: UPDATE_BY_ADDING, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateCreditBySubstracting = (id, newCredit) => async (dispatch) => {
    try {
      const { data } = await api.updateCreditBySubstracting(id, newCredit);
  
      dispatch({ type: UPDATE_BY_SUBSTRACTING, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  
  export const deleteCredit = (id) => async (dispatch) => {
    try {
      await api.deleteCredit(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };


