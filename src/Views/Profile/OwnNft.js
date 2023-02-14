import React, { useState } from "react";
import Sidebar from "../CommonComponents/Sidebar";
import { Link } from "react-router-dom";
import ProfileNavBar from "../CommonComponents/ProfileNavBar";
import Slider from "../CommonComponents/nftSlider";
import "../../Assets/css/carousel.css";
import "react-multi-carousel/lib/styles.css";
import NftCard from "../NFT Market/NftCard";
import MessageBox from "../CommonComponents/MessageBox";
import Loader from "../CommonComponents/Loader";
const OwnNft = ({ state }) => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  const { loading, error, nftsData } = state;

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
              <ProfileNavBar />
              <div className="d-flex mt-3 flex-wrap justify-content-around"></div>
              <Slider />
              <div className="row">
                {loading ? (
                  <Loader />
                ) : nftsData?.length >= 1 ? (
                  nftsData.map((value, index) => {
                    return (
                      <NftCard
                        cardClass={"col-md-4"}
                        data={value}
                        key={index}
                      />
                    );
                  })
                ) : (
                  <div className="my-5">
                    <MessageBox>No Nft's found</MessageBox>
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 top">
              <div className="search-wrap">
                <input
                  type="text"
                  className="form-control search-field"
                  placeholder="Search..."
                />
              </div>

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
                <div className="card-post mb-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-post mb-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-post mb-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-post mb-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-post mb-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-post mb-sm">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-post">
                  <div className="row">
                    <div className="col-12">
                      <div className="right-side-card">
                        <div className="profile-wrapper">
                          <div className="profile-avatar"></div>
                          <div className="profile-text">
                            <h4>Hassan Nadeem</h4>
                            <p>@hasssan_09</p>
                          </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnNft;
