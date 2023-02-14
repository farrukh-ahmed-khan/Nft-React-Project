import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../../../Assets/css/profile.css";
import { getUserPost } from "../../../store/actions/HomeActions/homeActions";
import { getUserById } from "../../../store/actions/UserActions/userActions";
import Profile from "../profile";
const Posts = () => {

    const { loading, userPosts } = useSelector(state => state.userPost)

    const { userData } = useSelector(state => state.userById)

    const params = useParams();
    const { id: userId } = params;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserPost(userId));
        dispatch(getUserById(userId));
    }, [dispatch, userId])

    return (
        <>
            <Profile userData={userData} userPosts={userPosts} loading={loading} />
        </>
    );
};

export default Posts;
