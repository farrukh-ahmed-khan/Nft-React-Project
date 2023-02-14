import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../store/actions/UserActions/userActions";
import Friends from "../Friends";

const NavUserFriends = () => {

    const state = useSelector(state => state.userById)

    const params = useParams();
    const { id: userId } = params;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserById(userId));
    }, [dispatch, userId])

    return (
        <>
            <Friends state={state} />
        </>
    );
};

export default NavUserFriends;