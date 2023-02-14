import { GET_EXPLORE_PAGE_DATA_FAIL, GET_EXPLORE_PAGE_DATA_REQ, GET_EXPLORE_PAGE_DATA_SUCCESS } from "../../../Constants/ExploreConstants";
// import axios from 'axios'
import {data} from '../../../Data/ExploreData'

export const getExplorePageData = () => async (dispatch) => {
  dispatch({
    type: GET_EXPLORE_PAGE_DATA_REQ
  });
  try {
    // const { data } = await axios.get("/getExploreData");
    dispatch({
      type: GET_EXPLORE_PAGE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EXPLORE_PAGE_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};