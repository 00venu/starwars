import { SEARCH_RESULT } from "../actions/searchAction";
const initialState = {
  searchData: [],
  noResult: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
};

export default searchReducer;
