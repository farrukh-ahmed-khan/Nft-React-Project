import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import { forgetPassword } from "../../../store/actions/UserActions/userActions";
// import Loader from "../../CommonComponents/Loader";
// import MessageBox from "../../CommonComponents/MessageBox";

const Index = () => {

  const [email, setEmail] = useState('')

  // const {loading,error,resetCode} = useSelector(state=>state.forgetPassword);

  // const dispatch = useDispatch()
  const forgetPassHandler=(e)=>{
    e.preventDefault();
    // dispatch(forgetPassword(email))
  }
  
  
  // const redirect = '/signin'
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (resetCode) {
  //     navigate(redirect);
  //     alert('Reset Code sent tou you!')
  //   }
  // }, [navigate, redirect, resetCode]);


  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6"></div>
          <div className="col-12 col-md-4 col-lg-4">
            <h1 className="main-title-md">Forgot Password</h1>
            <form onSubmit={forgetPassHandler}>
              <div className="row">
                <div className="col-12">
                  <div className="auth-avatar">
                    {/* <img src="" alt="" /> */}
                  </div>
                  <p className="text-forgot">
                    Enter an email address <br />
                    associate with your account
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="form-control auth-input-field-forgot"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <p className="text-forgot underline">
                    If you didn't get a code{" "}
                    <span>
                      <Link to="/">Click Here!</Link>
                    </span>
                  </p>
                </div>
              </div>
              {/* {loading && <Loader />}
                {
                  error && <div>
                    <MessageBox variant="danger">{error}</MessageBox>
                  </div>
                } */}
              <div className="btn-group-theme mt-4 mb-4">
                <div className="row">
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-theme btn-theme-dark">
                      Send
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
