import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../../Assets/css/carousel.css";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserNfts } from "../../../store/actions/NftMarketActions/nftmarketActions";
import OwnNft from "../OwnNft";
const NavUserNfts = () => {

    const state = useSelector((state) => state.UserNfts);
    //   const { loading, error, nftsData } = state;
    const params = useParams();

    const { id: userId } = params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserNfts(userId))
    }, [dispatch,userId])

    return (
        <>
            <OwnNft state={state} />
        </>
    );
};

export default NavUserNfts;
