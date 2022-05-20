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
   //  the total list of hits
   hits: [],
   query: 'react',
   page: 0,
   nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   // set reducer
   const [state, dispatch] = useReducer(reducer, initialState);
   // fetch
   const fetchStories = async (url) => {
      dispatch({ type: SET_LOADING });
      try {
         const response = await fetch(url);
         const data = await response.json();
         console.log(data);
         dispatch({
            type: SET_STORIES,
            payload: { hits: data.hits, nbPages: data.nbPages },
         });
      } catch (error) {
         console.log(error);
      }
   };
   //  remove story
   const removeStory = (id) => {
      // setup dispatch and pass in the id from Stories which is the opjectID
      dispatch({ type: REMOVE_STORY, payload: id });
   };
   const handleSearch = (query) => {
      dispatch({ type: HANDLE_SEARCH, payload: query });
   };
   // when app load useEffect
   useEffect(() => {
      fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
      // everytime query value changes fetchStories
   }, [state.query]);
   return (
      <AppContext.Provider value={{ ...state, removeStory, handleSearch }}>
         {children}
      </AppContext.Provider>
   );
};
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
