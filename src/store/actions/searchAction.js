import axios from "axios";
export const SEARCH_RESULT = "SEARCH_RESULT";

export const searchResult = (searchWord) => {
  return (dispatch) => {
    axios
      .get(`https://swapi.dev/api/planets/?search=${searchWord}`)
      .then((response) => {
        dispatch({
          type: SEARCH_RESULT,
          searchData: searchWord.length > 0 ? response.data.results : [],
        });
      });
  };
};
