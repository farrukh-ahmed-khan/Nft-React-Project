import React, { useEffect } from "react";
import "../../../Assets/css/about.css";
import { useDispatch, useSelector } from "react-redux";
import About from "../About";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../store/actions/UserActions/userActions";

const UserAbout = () => {

    const state = useSelector(state => state.userById)

    const params = useParams();
    const { id: userId } = params;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserById(userId));
    }, [dispatch, userId])

    return (
        <>
            <About state={state} />
        </>
    );
};

export default UserAbout;