import { NOTIFICATIONS_FAIL, NOTIFICATIONS_REQUEST, NOTIFICATIONS_SUCCESS } from "../../../Constants/NotificationContants";

export const notificationsReducer = (state = {}, action) => {
    switch (action.type) {
        case NOTIFICATIONS_REQUEST:
            return { loading: true };
        case NOTIFICATIONS_SUCCESS:
            return { loading: false, notificationData: action.payload };
        case NOTIFICATIONS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};