import { NFT_BY_USER_FAIL, NFT_BY_USER_REQ, NFT_BY_USER_SUCCESS, NFT_POST_FAIL, NFT_POST_REQUEST, NFT_POST_SUCCESS } from "../../../Constants/NftsMarketConstants";

export const nftMarketPostReducer = (state = {}, action) => {
    switch (action.type) {
        case NFT_POST_REQUEST:
            return { loading: true };
        case NFT_POST_SUCCESS:
            return { loading: false, nftsData: action.payload };
        case NFT_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const nftByUserReducer = (state = {}, action) => {
    switch (action.type) {
        case NFT_BY_USER_REQ:
            return { loading: true };
        case NFT_BY_USER_SUCCESS:
            return { loading: false, nftsData: action.payload };
        case NFT_BY_USER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};