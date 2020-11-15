import { useEffect } from "react";
import axios from "axios";
export const SEARCH_RESULT = "SEARCH_RESULT";

export const searchResult = (searchWord) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://swapi.dev/api/planets/?search=${searchWord}`,
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: SEARCH_RESULT,
        searchData: searchWord.length > 0 ? response.data.results : [],
      });
    });
  };
};
