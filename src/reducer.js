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
      case SET_STORIES:
         return {
            ...state,
            isLoading: false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages,
         };
        //  remove story by filtering out id
      case REMOVE_STORY:
        return { ...state, hits:state.hits.filter(h => h.objectID  !== action.payload)}
      default:
         throw new Error(`${action.type}`);
   }
};
export default reducer;
