import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { getAllPostsReducer, getUserPostReducer } from "./reducers/HomeReducer/homeReducer";
import thunk from "redux-thunk";
import { nftByUserReducer, nftMarketPostReducer } from "./reducers/NftMarketReducer.js/nftmarketReducer";
import { notificationsReducer } from "./reducers/NotificationReducer/notificationReducer";
import { forgetPasswordReducer, userByidDataReducer, userDataReducer, userRegisterReducer, userSigninReducer } from "./reducers/UserReducer/userInfoReducer";
import { explorePageReducer } from "./reducers/ExploreReducer/exploreReducer";

const INITIAL_STATE = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
  },
  userData: {
    userData: localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null
  },
};

const reducer = combineReducers({
  nftsMarketPost: nftMarketPostReducer,
  notifications: notificationsReducer,
  userData:userDataReducer,
  explorePage:explorePageReducer,
  userSignin:userSigninReducer,
  userRegister:userRegisterReducer,
  allPosts:getAllPostsReducer,
  forgetPassword:forgetPasswordReducer,
  userPost:getUserPostReducer,
  userById:userByidDataReducer,
  UserNfts:nftByUserReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
