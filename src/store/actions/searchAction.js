import axios from "axios";
import { getnewData } from '../../components/search/contentSearchService';

export const SEARCH_RESULT = "SEARCH_RESULT";
export const LOAD_MORE = 'LOAD_MORE';

export const searchResult = (searchWord) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://swapi.dev/api/planets/?search=${searchWord}`,
    }).then((response) => {
      dispatch({
        type: SEARCH_RESULT,
        searchData: searchWord.length > 0 ? getnewData(response.data.results) : [],
        next: response.data.next,
      });
    });
  };
};

export const loadMoreAction = (url) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      // console.log(response.data);
      dispatch({
        type: LOAD_MORE,
        searchData: getnewData(response.data.results),
        next: response.data.next,
      });
    });
  };
}
