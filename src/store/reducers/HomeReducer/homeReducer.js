import { GET_ALL_POSTS_FAIL, GET_ALL_POSTS_REQ, GET_ALL_POSTS_SUCCESS,
    UPDATE_ALL_POST_REQUEST,
    UPDATE_ALL_POST_SUCCESS, UPDATE_ALL_POST_FAIL ,USER_POST_FAIL, USER_POST_REQUEST, USER_POST_SUCCESS } from "../../../Constants/HomeConstants";

export const getAllPostsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_POSTS_REQ:
            return { loading: true };
        case GET_ALL_POSTS_SUCCESS:
            return { loading: false, allPosts: action.payload };
        case GET_ALL_POSTS_FAIL:
            return { loading: false, error: action.payload };

        case UPDATE_ALL_POST_REQUEST:
            return { loading: true };
        case UPDATE_ALL_POST_SUCCESS:
            return { loading: false, allPosts: action.payload };
        case UPDATE_ALL_POST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getUserPostReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_POST_REQUEST:
            return { loading: true };
        case USER_POST_SUCCESS:
            return { loading: false, userPosts: action.payload };
        case USER_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};