import React, { useState } from "react";
import Sidebar from "../CommonComponents/Sidebar";
import SearchBar from "../CommonComponents/SearchBar";
import { Link } from "react-router-dom";
import ProfileNavBar from "../CommonComponents/ProfileNavBar";
import "../../Assets/css/about.css";
import NftComponent from "../CommonComponents/LatestNftComponent";
import MessageBox from "../CommonComponents/MessageBox";

const About = ({ state }) => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  const { userData } = state;
  const [type, setType] = useState(" ");

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };
  const handleType = (e) => {
    setType(e);
  };

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-6 middle">
              <ProfileNavBar userData={userData} />
              <div className="d-flex mt-3 flex-wrap justify-content-around">
                <div className="bg-white p-3 about">
                  <h3>About</h3>
                  <p
                    onClick={() => {
                      handleType("Overview");
                    }}
                  >
                    Overview
                  </p>
                  <p
                    onClick={() => {
                      handleType("workplace");
                    }}
                  >
                    Workplace
                  </p>
                  <p
                    onClick={() => {
                      handleType("Places Lived");
                    }}
                  >
                    Places Lived
                  </p>
                  <p
                    onClick={() => {
                      handleType("Contact and basic info");
                    }}
                  >
                    Contact and basic info
                  </p>
                  <p
                    onClick={() => {
                      handleType("Life Events");
                    }}
                  >
                    Life Events
                  </p>
                </div>
                <div className="bg-white p-3 about-desc">
                  <span>
                    <div>
                      {type === "workplace" ? (
                        <p className="about-data">{userData.about.workplace}</p>
                      ) : type === "Places Lived" ? (
                        <p className="about-data">
                          {userData.about.placelived}
                        </p>
                      ) : type === "Contact and basic info" ? (
                        <>
                          <p className="about-data">
                            {userData.about.education}
                          </p>
                          <p className="about-data">{userData.about.contact}</p>
                          <p className="about-data">{userData.about.status}</p>
                          <p className="about-data">
                            Joined {userData.about.joinedDate}
                          </p>
                        </>
                      ) : type === "Life Events" ? (
                        <p className="about-data">
                          Joined {userData.about.joinedDate}
                        </p>
                      ) : type === "Life Events" ? (
                        <p className="about-data">
                          Joined {userData.about.joinedDate}
                        </p>
                      ) : type === "Overview" ? (
                        <>
                          <p className="about-data">
                            {userData.about.workplace}
                          </p>
                          <p className="about-data">
                            {userData.about.overview}
                          </p>
                          <p className="about-data">
                            {userData.about.education}
                          </p>
                          <p className="about-data">
                            {userData.about.placelived}
                          </p>
                          <p className="about-data">{userData.about.contact}</p>
                          <p className="about-data">{userData.about.status}</p>
                          <p className="about-data">
                            Joined {userData.about.joinedDate}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="about-data">
                            {userData.about.workplace}
                          </p>
                          <p className="about-data">
                            {userData.about.overview}
                          </p>
                          <p className="about-data">
                            {userData.about.education}
                          </p>
                          <p className="about-data">
                            {userData.about.placelived}
                          </p>
                          <p className="about-data">{userData.about.contact}</p>
                          <p className="about-data">{userData.about.status}</p>
                          <p className="about-data">
                            Joined {userData.about.joinedDate}
                          </p>
                        </>
                      )}
                    </div>
                  </span>
                </div>
              </div>

              <div className="photos-section">
                <div className="d-flex justify-content-between px-5 py-3 photos-innderdiv">
                  <h3>Photos</h3>
                  <p>See all photos</p>
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                  {userData.photos ? (
                    userData?.photos?.map((data, index) => {
                      return (
                        <div key={index} className=" mt-1">
                          <img
                            className="images mt-1"
                            src={data.image}
                            alt="userImage"
                          />
                        </div>
                      );
                    })
                  ) : (
                    <MessageBox variant="info">No Photos Found !</MessageBox>
                  )}
                </div>
              </div>

              <div className="videos-section">
                <div className="d-flex justify-content-between px-5 py-3 videos-innderdiv">
                  <h3>Videos</h3>
                  <p>Add photos and Videos</p>
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                  {userData.videos.length >= 1 ? (
                    userData?.videos?.map((data, index) => {
                      return (
                        <div className="images mt-1">
                          <img src={data.image} alt="userImage" />
                        </div>
                      );
                    })
                  ) : (
                    <MessageBox variant="info">No Videos Found !</MessageBox>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <SearchBar />

              <h2 className="home-title">Latest Current NFT</h2>
              <div
                className={`current-nft--wrapper ${
                  openCurrentNft ? "show" : ""
                }`}
              >
                <div className="show-more">
                  <Link
                    to="#"
                    className="btn btn-link"
                    onClick={showCurrentNft}
                  >
                    {openCurrentNft ? "show less" : "show"}
                  </Link>
                </div>
                <NftComponent />
                <NftComponent />
                <NftComponent />
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

export default About;
