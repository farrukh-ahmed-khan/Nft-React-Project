// import axios from 'axios'
import notificationData from '../../../Data/notificationsData'
import { NOTIFICATIONS_FAIL, NOTIFICATIONS_REQUEST, NOTIFICATIONS_SUCCESS } from "../../../Constants/NotificationContants";

export const getNotifications = () => async (dispatch) => {
  dispatch({
    type: NOTIFICATIONS_REQUEST
  });
  try {
    // const { notificationData } = await axios.get("/getNotification", { reqData });
    dispatch({
      type: NOTIFICATIONS_SUCCESS,
      payload: notificationData,
    });
  } catch (error) {
    dispatch({
      type: NOTIFICATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};