import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../store/actions/UserActions/userActions";
import Videos from "../Videos";

const NavUserVideos = () => {

    //   const state = useSelector(
    //     (state) => state.userData
    //   );

    const state = useSelector(state => state.userById)
    console.log("state nav about==>", state)

    const params = useParams();
    const { id: userId } = params;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserById(userId));
    }, [dispatch, userId])

    return (
        <>
            <Videos state={state} />
        </>
    );
};

export default NavUserVideos;