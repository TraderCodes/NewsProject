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
         return {
            ...state,
            hits: state.hits.filter((h) => h.objectID !== action.payload),
         };
      case HANDLE_SEARCH:
         return { ...state, query: action.payload, page: 0 };
      case HANDLE_PAGE:
         if (action.payload === 'inc') {
            //  next page  = current state page plus 1
            let nextPage = state.page + 1;
            // ! If nextPage is > than the total page -1 page set to 1
            if (nextPage > state.nbPages - 1) {
               nextPage = 0;
            }
            return { ...state, page: nextPage };
         }
         if (action.payload === 'dec') {
            //  next page  = current state page plus 1
            let prevPage = state.page - 1;
            // ! If nextPage is > than the total page -1 page set to 1
            if (prevPage < 0) {
               prevPage = state.nbPages - 1;
            }
            return { ...state, page: prevPage };
         }
      //  Dont forget to fetch after the page changes or else nothing will move
      default:
         throw new Error(`${action.type}`);
   }
};
export default reducer;
