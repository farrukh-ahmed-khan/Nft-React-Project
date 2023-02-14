import React, { useState } from "react";

import { useSelector } from "react-redux";
import Friends from "../Friends";

const UserFriends = () => {

  const state = useSelector(state => state.userData);

  return (
    <>
    <Friends state={state}/>
    </>
  );
};

export default UserFriends;