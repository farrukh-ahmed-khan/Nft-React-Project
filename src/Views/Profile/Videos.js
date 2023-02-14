import React, { useState } from "react";
import Sidebar from "../CommonComponents/Sidebar";
import SearchBar from "../CommonComponents/SearchBar";
import { Link } from "react-router-dom";
import ProfileNavBar from "../CommonComponents/ProfileNavBar";
import NftComponent from "../CommonComponents/LatestNftComponent";
import { useSelector } from "react-redux";
import MessageBox from "../CommonComponents/MessageBox";
import "../../Assets/css/videos.css";

const Videos = ({state}) => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };

  const { userData } = state

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-6 middle">
              <ProfileNavBar />
              <div className="d-flex mt-3 flex-wrap justify-content-around"></div>
              <div className="videos-section ">
                <div className="d-flex justify-content-between px-5 py-3 videos-innderdiv">
                  <h3>Videos</h3>
                  <p>Add photos and Videos</p>
                </div>
                <div className="d-flex justify-content-center mx-5">
                  {userData?.videos.length >= 1 ? (
                    userData?.videos?.map((data, index) => {
                      return (
                        <div key={index} className="images mt-1">
                          <img src={data.image} alt="userImage" />
                        </div>
                      );
                    })
                  ) : (
                    <MessageBox variant="info">No Videos Found !</MessageBox>
                  )}
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
            </div>
            <div className="col-12 col-md-3 col-lg-3 top">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;