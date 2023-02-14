import { GET_EXPLORE_PAGE_DATA_FAIL, GET_EXPLORE_PAGE_DATA_REQ, GET_EXPLORE_PAGE_DATA_SUCCESS } from "../../../Constants/ExploreConstants";

export const explorePageReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EXPLORE_PAGE_DATA_REQ:
            return { loading: true };
        case GET_EXPLORE_PAGE_DATA_SUCCESS:
            return { loading: false, exploreData: action.payload };
        case GET_EXPLORE_PAGE_DATA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};