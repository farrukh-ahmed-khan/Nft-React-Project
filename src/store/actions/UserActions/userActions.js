// import axios from 'axios'
// import userInfo from '../../../Data/UserData'
import AllUsers from '../../../Data/UserData_2'
import data from '../../../Data/SigninData'
import { FORGET_PASSWORD_FAIL, FORGET_PASSWORD_REQUEST, FORGET_PASSWORD_SUCCESS, GET_USER_INFO_FAIL, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, USER_DATA_FAIL, USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from '../../../Constants/UserConstants';
import bcrypt from "bcryptjs";

export const getUserData = () => async (dispatch,getState) => {
  dispatch({
    type: GET_USER_INFO_REQUEST
  });

  const { userSignin: { userInfo } } = getState();
  const filterUserData = AllUsers.find((e)=> e.email === userInfo.email)
  try {
    // const { userInfo } = await axios.get("/getUserInfo");
    dispatch({
      type: GET_USER_INFO_SUCCESS,
      payload: filterUserData,
    });
    localStorage.setItem("userData", JSON.stringify(filterUserData));
  } catch (error) {
    dispatch({
      type: GET_USER_INFO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserById = (userId) => async (dispatch,getState) => {
  dispatch({
    type: USER_DATA_REQUEST
  });

  // const { userSignin: { userInfo } } = getState();
  const filterUserData = AllUsers.find((e)=> e._id === userId)
  try {
    // const { userInfo } = await axios.get("/getUserInfo");
    dispatch({
      type: USER_DATA_SUCCESS,
      payload: filterUserData,
    });
  } catch (error) {
    dispatch({
      type: USER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//user signin Actions
export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    // const { data } = await axios.post("/api/users/signin", { email, password });
    const user = data?.users?.find((e) => e.email === email);
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: user,
        });
        localStorage.setItem("userInfo", JSON.stringify(user));
      } else {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: "Incorrect Password"
        });
      }
    } else {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload: "User Not found with this email"
      });
    }
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const forgetPassword = (email) => async (dispatch) => {
  dispatch({
    type: FORGET_PASSWORD_REQUEST,
    payload: { email },
  });
  try {
    // const { data } = await axios.post("/api/users/forgetPassword", { email });
    const user = data?.users?.find((e) => e.email === email);
    if (user) {
      console.log(user)
      // const generateCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
      // console.log(generateCode);
      // dispatch({
      //   type: FORGET_PASSWORD_SUCCESS,
      //   payload: generateCode
      // });
    } else {
      dispatch({
        type: FORGET_PASSWORD_FAIL,
        payload: "User Not found with this email"
      });
    }
  } catch (error) {
    dispatch({
      type: FORGET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//REGISTER A NEW USER
export const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { email, password },
  });
  try {
    // const { data } = await axios.post("/api/users/signin", { name , email, password });
    const user = data?.users?.find((e) => e.email === email);
    if (user) {
      dispatch({ type: USER_REGISTER_FAIL, payload: "User Already Registered with this email" })

    } else {

      const newUser = {
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 8),
        isAdmin: false,
      }

      data?.users?.push(newUser)

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: newUser
      });
      dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: newUser,
      });
      localStorage.setItem("userInfo", JSON.stringify(newUser));
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//signout user
export const userSignOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("userData");
  dispatch({
    type: USER_SIGNOUT
  });
}