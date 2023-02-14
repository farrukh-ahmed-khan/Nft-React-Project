import React, { useEffect } from "react";
import "../../../Assets/css/carousel.css";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserNfts } from "../../../store/actions/NftMarketActions/nftmarketActions";
import OwnNft from "../OwnNft";
const UserNfts = () => {

    const state = useSelector((state) => state.UserNfts);
    //   const { loading, error, nftsData } = state;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserNfts())
    }, [dispatch])

    return (
        <>
            <OwnNft state={state} />
        </>
    );
};

export default UserNfts;
