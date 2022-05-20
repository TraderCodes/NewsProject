import React, { useContext, useEffect, useReducer } from 'react';

import {
   SET_LOADING,
   SET_STORIES,
   REMOVE_STORY,
   HANDLE_PAGE,
   HANDLE_SEARCH,
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
   isLoading: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   // set reducer
   const [state, dispatch] = useReducer(reducer, initialState);
   // fetch
   const fetchStories = async (url) => {
      dispatch({ type: SET_LOADING });
   };
   // when app load useEffect
   useEffect(() => {
      fetchStories();
   }, []);

   return (
      <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
   );
};
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
