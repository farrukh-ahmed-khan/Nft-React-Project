import React, { useState } from "react";

// Call Icons
import phoneIcon from "../../Assets/images/Icons-PNG/msg-phone.PNG";
import videoIcon from "../../Assets/images/Icons-PNG/msg-video.PNG";
import infoIcon from "../../Assets/images/Icons-PNG/msg-info.PNG";
import Sidebar from "../CommonComponents/Sidebar";
import SearchBar from "../CommonComponents/SearchBar";
import EmojiPicker from "../CommonComponents/EmojiPicker";
import ImagePicker from "../CommonComponents/ImagePicker";
import GifSearch from "../CommonComponents/GifSearch";
import { Link } from "react-router-dom";
import "../../Assets/css/messages.css";
import NftComponent from "../CommonComponents/LatestNftComponent";

const Messages = () => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);
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
              <h1 className="home-title">Messages</h1>
              <div className="msg-container">
                <div className="msg-header">
                  <div className="left-col--wrap">
                    <div className="profile-avatar"></div>
                    <div className="profile-text">
                      <h5>Osmar R.</h5>
                      <small>@osRam</small>
                    </div>
                  </div>
                  <div className="right-col--wrap">
                    <ul>
                      <li>
                        <Link to="#">
                          <img src={phoneIcon} alt="phoneIcon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={videoIcon} alt="videoIcon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={infoIcon} alt="infoIcon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="msg-content">
                  <div className="pro-wrap">
                    <div className="profile-avatar"></div>
                    <div className="profile-text">
                      <h5>Osmar R.</h5>
                      <small>@osRam</small>
                    </div>
                  </div>
                  <div className="msg-area">
                    <div className="sender">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="reciver">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="sender">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="reciver">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="sender">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="reciver">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="sender">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                    <div className="reciver">
                      <div className="img"></div>
                      <div className="text">
                        <small>@hasham_900</small>
                        <p>Hi, How are you?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="msg-input form-control msg-field ">
                  <input
                    className="messeges-input"
                    type="text "
                    placeholder="Type your message here!"
                  />
                  <div className="d-flex justify-content-end messegesDiv">
                    <div className="icon-btn-wrap messegesBtn">
                      <ul
                        className="icon-list messegesIcons"
                        style={{ marginTop: "-5px" }}
                      >
                        <ImagePicker />
                        <GifSearch variant="top" />
                        <EmojiPicker variant="top" />

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="black"
                          height="30px"
                        >
                          <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
                        </svg>
                      </ul>
                    </div>
                    {/* <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="black"
                        height="30px"
                      >
                        <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
                      </svg>
                    </div> */}
                  </div>
                </div>
              </div>
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
                <NftComponent />
                <NftComponent />
                <NftComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Messages;
