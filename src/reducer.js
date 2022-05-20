import {
   SET_LOADING,
   SET_STORIES,
   REMOVE_STORY,
   HANDLE_PAGE,
   HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
   switch (action.type) {
      case SET_LOADING:
         // return previous value using state
         return { ...state, isLoading: true };
      default:
         throw new Error(`${action.type}`);
   }
};
export default reducer;
