import { GET_JOBS, SEARCH_JOBS } from "../actions/types";
const initialState = {
  jobs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SEARCH_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};
