import { FORGET_PASSWORD_FAIL, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, GET_USER_INFO_FAIL, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, USER_DATA_FAIL, USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../../../Constants/UserConstants";

export const userDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return { loading: true };
        case GET_USER_INFO_SUCCESS:
            return { loading: false, userData: action.payload };
        case GET_USER_INFO_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

//GET USER BY ID
export const userByidDataReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DATA_REQUEST:
            return { loading: true };
        case USER_DATA_SUCCESS:
            return { loading: false, userData: action.payload };
        case USER_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


//signin reducer
export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };


//Register reducer
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };
export const forgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case FORGET_PASSWORD_REQUEST:
        return { loading: true };
      case FORGET_PASSWORD_SUCCESS:
        return { loading: false, resetCode: action.payload };
      case FORGET_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };