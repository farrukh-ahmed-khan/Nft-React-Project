import React, { useEffect, useState } from "react";
import userIcon from "../../../Assets/images/Icons-PNG/UserIcon.png";
import lockIcon from "../../../Assets/images/Icons-PNG/PassIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../../store/actions/UserActions/userActions";
import MessageBox from '../../CommonComponents/MessageBox'
import Loader from '../../CommonComponents/Loader'

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userSignin = useSelector(state => state.userSignin)

  const { loading, error, userInfo } = userSignin
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signin(email, password));
  }


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
            <h1 className="main-title-md">Already a User</h1>
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col-12">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      required
                      className="form-control auth-input-field"
                      placeholder="Email or Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />
                    <span>
                      <img src={userIcon} alt="userIcon" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="input-wrapper">
                    <input
                      type="password"
                      required
                      className="form-control auth-input-field"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>
                      <img src={lockIcon} alt="lockIcon" />
                    </span>
                  </div>
                </div>
                {loading && <Loader />}
                {
                  error && <div>
                    <MessageBox variant="danger">{error}</MessageBox>
                  </div>
                }
              </div>
              <div className="btn-group-theme mt-4 mb-4">
                <div className="row">
                  <div className="col-6">
                    <button
                      type='submit'
                      className="btn btn-theme btn-theme-dark w-100"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => navigate("/sign-up")}
                      className="btn btn-theme btn-theme-light w-100"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-forgot">
                    Forgot Password?{" "}
                    <span>
                      <Link
                        className="cursor-pointor"
                        to="/forgot"
                      >
                        Click Here!
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
