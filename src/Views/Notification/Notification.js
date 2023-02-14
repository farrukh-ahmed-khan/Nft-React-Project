import React, { useEffect, useState } from "react";
import SearchBar from "../CommonComponents/SearchBar";
import Sidebar from "../CommonComponents/Sidebar";
import "../../Assets/css/notification.css";

import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../store/actions/NotificationsActions/notificationActions";
import { Alert } from "react-bootstrap";
import Loader from "../CommonComponents/Loader";
import MessageBox from "../CommonComponents/MessageBox";
import NftComponent from "../CommonComponents/LatestNftComponent";
const Notification = () => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);
  const [type, setType] = useState("all");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  const state = useSelector((state) => state.notifications);
  const { loading, error, notificationData } = state;

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-6 middle">
              <h1 className="home-title">Notification</h1>
              {loading ? (
                <Loader />
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <div className="noti-container">
                  <div className="noti-header" style={{ border: "none" }}>
                    <div className="left-col--wrap">
                      <div className="profile-text">
                        <button
                          className="all"
                          onClick={() => {
                            setType("all");
                          }}
                        >
                          <h5>All</h5>
                        </button>
                      </div>
                      <div className="unread profile-text">
                        <button
                          className="unread-btn"
                          onClick={() => {
                            setType("unread");
                          }}
                        >
                          <h5>Unread</h5>
                        </button>
                      </div>
                    </div>
                  </div>
                  {type === "all" ? (
                    <div className="noti-content">
                      <div className="noti-area">
                        {notificationData?.map((item, index) => (
                          <div className="sender" key={index}>
                            <div className="img"></div>
                            <div className="text">
                              <p style={{ color: "black" }} className="para">
                                {item.name} {item.message}
                              </p>
                              <div className="time">{item.time}</div>
                              {item.read === false ? (
                                <span className="dot">.</span>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="noti-content">
                      <div className="noti-area">
                        {notificationData
                          ?.filter((item) => item.read === false)
                          ?.map((item, index) => {
                            return (
                              <div className="sender" key={index}>
                                <div className="img"></div>
                                <div className="text">
                                  <p style={{ color: "black" }}>
                                    {item.name} {item.message}
                                  </p>
                                  <div className="time">{item.time}</div>
                                  {item.read === false ? (
                                    <span className="dot">.</span>
                                  ) : null}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                  {!notificationData ? (
                    <div>
                      <Alert variant="primary">No Nft's Found..</Alert>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            <div className="col-12 col-md-3 col-lg-3 top">
              <SearchBar />
              <div className="card-post empty"></div>
              <h2 className="home-title">Latest Current NFT</h2>
              <div
                className={`current-nft--wrapper ${
                  openCurrentNft ? "show" : ""
                }`}
              >
                <div className="show-more">
                  <span className="btn btn-link" onClick={showCurrentNft}>
                    {openCurrentNft ? "show less" : "show"}
                  </span>
                </div>
                <NftComponent/>
                <NftComponent/>
                <NftComponent/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notification;
