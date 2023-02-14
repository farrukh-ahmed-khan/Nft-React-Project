import React, { useEffect, useRef, useState } from "react";
import userIcon from "../../../Assets/images/Icons-PNG/UserIcon.png";
import lockIcon from "../../../Assets/images/Icons-PNG/PassIcon.png";
import emailIcon from "../../../Assets/images/Icons-PNG/Message-01.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/actions/UserActions/userActions";
import Loader from "../../CommonComponents/Loader";
import MessageBox from "../../CommonComponents/MessageBox";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const { loading, error } = userRegister;

  const passNotSame = useRef();

  const RegisterHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password are not same");
      passNotSame.current.textContent = "Password not Same"
    } else {
      dispatch(register(name, email, password));
    }
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
            <h1 className="main-title-md">Become a User</h1>
            <form onSubmit={RegisterHandler}>
              <div className="row">
                {
                  error && <div>
                    <MessageBox variant="danger">{error}</MessageBox>
                  </div>
                }
                <div className="col-12">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control auth-input-field"
                      placeholder="Username"
                      required
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
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control auth-input-field"
                      placeholder="Email"
                      required
                    />
                    <span>
                      <img src={emailIcon} alt="emailIcon" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="input-wrapper">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control auth-input-field"
                      placeholder="Create Password"
                      required
                    />
                    <span>
                      <img src={lockIcon} alt="lockIcon" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="input-wrapper">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control auth-input-field"
                      placeholder="Retype Password"
                      required
                    />
                    <span>
                      <img src={lockIcon} alt="lockIcon" />
                    </span>
                  </div>
                </div>
                {password !== confirmPassword &&
                  <div className="text-danger passNotSame" ref={passNotSame}></div>}
                {loading && <Loader />}
              </div>
              <div className="btn-group-theme mt-4 mb-4">
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={() => navigate("/login")}
                      className="btn btn-theme btn-theme-dark w-100"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-theme btn-theme-light w-100"
                    >
                      Sign Up
                    </button>
                  </div>
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
