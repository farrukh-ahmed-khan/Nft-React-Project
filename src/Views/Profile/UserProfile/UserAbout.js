import React from "react";
import "../../../Assets/css/about.css";
import { useSelector } from "react-redux";
import About from "../About";

const UserAbout = () => {

  const state = useSelector((state) => state.userData);

  return (
    <>
      <About state={state}/>
    </>
  );
};

export default UserAbout;