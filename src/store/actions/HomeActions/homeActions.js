import { GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQ, GET_ALL_POSTS_SUCCESS, UPDATE_ALL_POST_REQUEST,
  UPDATE_ALL_POST_SUCCESS, UPDATE_ALL_POST_FAIL , USER_POST_FAIL, USER_POST_REQUEST, USER_POST_SUCCESS } from "../../../Constants/HomeConstants";

  
import AllTimelinePosts from "../../../Data/DummyPosts";
// import axios from 'axios'

// Update Timeline Posts
export const UpdateTimelinePosts = (reqData) => async (dispatch) => {
  dispatch({
    type: UPDATE_ALL_POST_REQUEST,
    payload: { reqData },
  });
  try {
    // const { data } = await axios.post("/postRequest", { reqData });
    dispatch({
      type: UPDATE_ALL_POST_SUCCESS,
      payload: reqData,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ALL_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//get All timeline posts
export const getAllTimelinePosts = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_POSTS_REQ,
  });
  try {
    // const { AllTimelinePosts } = await axios.get("/getposts");
    dispatch({
      type: GET_ALL_POSTS_SUCCESS,
      payload: AllTimelinePosts,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getUserPost = (userId) => async (dispatch, getState) => {
  dispatch({ type: USER_POST_REQUEST, payload: userId });
  try {
    const { userData: { userData }, } = getState();
    const { allPosts: { allPosts }, } = getState();
    
    // const { data } = await Axios.get(`/profile/userId`);
    if(userId){
      const filteredPost = allPosts?.filter((e)=>e.postBy===userId)
      dispatch({ type: USER_POST_SUCCESS, payload: filteredPost });
    }else{
      const filteredPost = allPosts?.filter((e)=>e.postBy===userData._id)
      dispatch({ type: USER_POST_SUCCESS, payload: filteredPost });
    }
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.messag;
    dispatch({ type: USER_POST_FAIL, payload: message });
  }
};