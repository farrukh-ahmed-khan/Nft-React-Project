import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
const Index = () => {

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin

  const navigate = useNavigate();
  const redirect = '/dashboard'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6"></div>
          <div className="col-12 col-md-4 col-lg-4">
            <p className="top-text">WE MAKE INSPIRATIONAL PRODUCT</p>
            <h1 className="main-title">
              <span>Inspiring Better</span>
              <span>Strategies</span>
            </h1>
            <p className="main-sm-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut{" "}
            </p>
            <div className="btn-group-theme">
              <button
                onClick={() => navigate("/login")}
                className="btn btn-theme btn-theme-dark me-3"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="btn btn-theme btn-theme-light"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
