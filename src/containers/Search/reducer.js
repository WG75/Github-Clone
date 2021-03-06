import {
  LOADING_SEARCH_RESULTS,
  SUCCESS_SEARCH,
  ERROR_SEARCH,
  CLEAR_SEARCH_RESULTS,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  success: false,
  results: [],
  query: null,
  page: 0,
  lastPage: null,
};

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SEARCH_RESULTS:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
        query: action.query,
        results: action.query !== state.query ? [] : state.results,
      };

    case ERROR_SEARCH:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
      };

    case SUCCESS_SEARCH:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        results: action.page > state.page ? state.results.concat(action.results) : action.results,
        page: action.page,
        lastPage: action.pagination
          ? action.pagination.last
            ? action.pagination.last.page
            : null
          : null,
      };

    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        loading: false,
        error: false,
        success: false,
        query: '',
        page: 0,
        lastPage: null,
        results: [],
      };

    default:
      return state;
  }
};

export default searchResults;
