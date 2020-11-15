import { SEARCH_RESULT, LOAD_MORE } from "../actions/searchAction";
const initialState = {
  searchData: [],
  noResult: false,
  next: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        searchData: action.searchData,
        next: action.next,
      };
    case LOAD_MORE:
      return {
        ...state,
        searchData: [...state.searchData, ...action.searchData],
        next: action.next
      }
    default:
      return state;
  }
};

export default searchReducer;
