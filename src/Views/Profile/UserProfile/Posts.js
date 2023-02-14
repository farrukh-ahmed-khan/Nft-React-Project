import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../Assets/css/profile.css";
import Profile from '../profile'
import { getUserPost } from "../../../store/actions/HomeActions/homeActions";
const Posts = () => {
  
  const { userData } = useSelector(state => state.userData);

  const { loading, userPosts } = useSelector(state => state.userPost)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserPost());
  }, [dispatch])
  
  return (
    <>
      <Profile userData={userData} userPosts={userPosts} loading={loading} />
    </>
  );
};

export default Posts;
