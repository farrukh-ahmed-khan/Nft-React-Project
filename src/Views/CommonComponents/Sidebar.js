import React, { useState, useRef } from "react";
// Left Side Bar Icons
import homeIcon from "../../Assets/images/Icons-PNG/Home-01.png";
import Explore from "../../Assets/images/Icons-PNG/Explore.png";
import Notification from "../../Assets/images/Icons-PNG/Notification-01.png";
import Message from "../../Assets/images/Icons-PNG/Message-01.png";
import BookMark from "../../Assets/images/Icons-PNG/BookMark-01.png";
import nftMarker from "../../Assets/images/Icons-PNG/NFT-Marker-01.png";
import Profile from "../../Assets/images/Icons-PNG/Profile-01.png";
import More from "../../Assets/images/Icons-PNG/More-01.png";
import Logout from "../../Assets/images/Icons-PNG/logout.png";
// import toggleIcon from "../../../Assets/images/hamburger-alt.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "../../store/actions/UserActions/userActions";

const Sidebar = () => {

  const [openSidebar, setOpenSideBar] = useState(false);
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin

  //user data
  const { userData } = useSelector(state => state.userData);

  const showSideBar = () => {
    setOpenSideBar(!openSidebar);
  };

  const dispatch = useDispatch();
  const SignOut=()=>{
    dispatch(userSignOut());
  }
  let submenuRef = useRef();

  let toggleSubMenu = () => {
    if (submenuRef.current.style.display === "block") {
      submenuRef.current.style.display = "none";
    } else {
      submenuRef.current.style.display = "block";
    }
  };

  return (
    <div className="col-12 col-md-2 col-lg-3 w-0">
      <div className="toggle-icon">
        <div className="hamburger" onClick={showSideBar}>
          <div className="line pt-0"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={`left-sidebar ${openSidebar ? "show" : "hide"}`}>
        <div className="close-icon" onClick={showSideBar}>
          <span>X</span>
        </div>
        <div className="profile-wrapper">
          <div className="profile-avatar">
            <img width={"100%"} src={userData?.picture} alt="profileImg"/>
          </div>
          <div className="profile-text">
            <h4>{userData?.name || "Anonymous"}</h4>
            <p>{userData?.username || ""}</p>
          </div>
        </div>
        <nav>
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <Link to="/dashboard">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={homeIcon} alt="homeIcon" />
                  </div>
                  <div className="nav-text">
                    <span>Home</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <div className="nav-icon-text">
                <div className="nav-icon">
                  <img src={Explore} alt="Explore" />
                </div>
                <div className="nav-text" onClick={toggleSubMenu}>
                  <span>
                    Explore
                    <svg
                      className="down-caret ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
                    </svg>
                  </span>
                </div>
              </div>
              <ul ref={submenuRef} className="submenu">
                <Link to="/explore/art"> Art</Link>
                <Link to="/explore/collectibles"> Collectibles</Link>
                <Link to="/explore/domain-names"> Domain Names</Link>
                <Link to="/explore/photography"> Photography</Link>
                <Link to="/explore/Music"> Music</Link>
                <Link to="/explore/Sports"> Sports</Link>
                <Link to="/explore/Trading-Cards"> Trading Cards</Link>
                <Link to="/explore/Utility"> Utility</Link>
                <Link to="/explore/virtual-worlds"> Virtual Worlds</Link>
              </ul>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/notification">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={Notification} alt="Notification" />
                  </div>
                  <div className="nav-text">
                    <span>Notification</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/messages">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={Message} alt="Message" />
                  </div>
                  <div className="nav-text">
                    <span>Messages</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={BookMark} alt="BookMark" />
                  </div>
                  <div className="nav-text">
                    <span>BookMark</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/nftmarket">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={nftMarker} alt="nftMarker" />
                  </div>
                  <div className="nav-text">
                    <span>NFT Market</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="sidebar-nav-item">
              <Link to="/profile">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={Profile} alt="Profile" />
                  </div>
                  <div className="nav-text">
                    <span>Profile</span>
                  </div>
                </div>
              </Link>
            </li>
            {
              userInfo &&
              <li className="sidebar-nav-item" onClick={SignOut}>
                <Link to="/">
                  <div className="nav-icon-text">
                    <div className="nav-icon">
                      <img src={Logout} alt="Profile" />
                    </div>
                    <div className="nav-text">
                      <span>Logout</span>
                    </div>
                  </div>
                </Link>
              </li>
            }
            <li className="sidebar-nav-item">
              <Link to="/">
                <div className="nav-icon-text">
                  <div className="nav-icon">
                    <img src={More} alt="More" />
                  </div>
                  <div className="nav-text">
                    <span>More</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
