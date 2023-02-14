import { NFT_BY_USER_FAIL, NFT_BY_USER_REQ, NFT_BY_USER_SUCCESS, NFT_POST_FAIL, NFT_POST_REQUEST, NFT_POST_SUCCESS } from "../../../Constants/NftsMarketConstants";
// import axios from 'axios'
import nftData from '../../../Data/NftMarketData.js'

export const nftsMarketPosts = () => async (dispatch) => {
  dispatch({
    type: NFT_POST_REQUEST
  });
  try {
    // const { nftData } = await axios.get("/nftPostRequest", { reqData });
    dispatch({
      type: NFT_POST_SUCCESS,
      payload: nftData,
    });
  } catch (error) {
    dispatch({
      type: NFT_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserNfts = (userId) => async (dispatch,getState) => {
  
  dispatch({
    type: NFT_BY_USER_REQ
  });
  const { userData: { userData } } = getState();
  try {
    // const { nftData } = await axios.get("/userNfts");
    if(userId){
      const filterUserData = nftData?.filter((e)=>e.ownerId===userId)
      dispatch({ type: NFT_BY_USER_SUCCESS, payload: filterUserData });
    }else{
      const filterUserData = nftData?.filter((e)=>e.ownerId===userData._id)
      dispatch({ type: NFT_BY_USER_SUCCESS, payload: filterUserData });
    }
  } catch (error) {
    dispatch({
      type: NFT_BY_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};