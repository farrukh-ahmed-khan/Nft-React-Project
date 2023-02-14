import React, { useState } from "react";
import { useSelector } from "react-redux";
import Videos from "../Videos";

const UserVideos = () => {
    
  const state = useSelector(
    (state) => state.userData
  );

  return (
    <>
      <Videos state={state}/>
    </>
  );
};

export default UserVideos;