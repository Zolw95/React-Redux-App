import { GET_JOBS, SEARCH_JOBS } from "./types";
import axios from "axios";

// export const getJobs = () => {
//dispatch({type: GET_JOBS})

//   axios
//     .get(
//       "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
//     )
//     .then((res) => {
//       dispatch({
//         type: GET_JOBS,
//         payload: res.data,
//       });
//     })
//     .catch((error) => console.log(error));

export const getJobs = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
    );
    const data = await res.data;
    console.log("data", data);
    dispatch({
      type: GET_JOBS,
      payload: data,
    });
  };
};

export const searchJobs = (text) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${text}`
    );
    const data = await res.data;
    console.log("data", data);
    dispatch({
      type: SEARCH_JOBS,
      payload: data,
    });
  };
};
