import React, { useState } from "react";
import searchIcon from "../../Assets/images/Icons-PNG/search-icon-1.png";
import ProfileNavBar from "../CommonComponents/ProfileNavBar";
import Sidebar from "../CommonComponents/Sidebar";
import SearchBar from "../CommonComponents/SearchBar";
import "../../Assets/css/friends.css";
import NftComponent from "../CommonComponents/LatestNftComponent";

const Friends = ({ state }) => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  const { userData } = state;

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const searchFriends = (e) => {
    setSearch(e.target.value);
    if (setSearch === "") {
      setSearchResult(userData);
    } else {
      const result = userData.friends.filter((friend) =>
        friend.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(result);
      setSearchResult(result);
    }
  };

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-6 middle">
              <ProfileNavBar />
              <div className="friendsmain-section bg-white ">
                <div className="d-flex justify-content-between flex-wrap">
                  <div>
                    <h6 className="px-4 py-2 left-txt">Friends</h6>
                  </div>
                  <div className="d-flex">
                    <div className="search-wrap search-bar">
                      <input
                        type="text"
                        className="form-control search-field search-box"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => searchFriends(e)}
                      />
                      <span>
                        <img src={searchIcon} alt="searchIcon" />
                      </span>
                    </div>
                    <h6 className="px-2 txt1">Friend Request</h6>
                    <h6 className="txt2">Find Friend</h6>
                  </div>
                </div>
                <div>
                  <ul className="d-flex sec-nav">
                    <h6>
                      <li>Friends</li>
                    </h6>
                    <h6>
                      <li className="px-3">Recently Added</li>
                    </h6>
                    <h6>
                      <li className="px-3">Birthdays</li>
                    </h6>
                    <h6>
                      <li className="px-3">College</li>
                    </h6>
                  </ul>
                </div>
                <div className="all-friends">
                  {searchResult
                    ? searchResult.map((data, index) => {
                        return (
                          <div className="mt-1" key={index}>
                            <img
                              src={data.picture}
                              alt="278w"
                              className="first mt-1"
                            />
                          </div>
                        );
                      })
                    : userData
                    ? userData?.friends.map((data, index) => {
                        return (
                          <div className="mt-1" key={index}>
                            <img
                              src={data.picture}
                              alt="278w"
                              className="first mt-1"
                            />
                          </div>
                        );
                      })
                    : null}
                  {/* <div className="second"></div> */}
                </div>
                {/* <div className="all-friends">
                  <div className="first"></div>
                  <div className="second"></div>
                </div>
                <div className="all-friends">
                  <div className="first"></div>
                  <div className="second"></div>
                </div>
                <div className="all-friends">
                  <div className="first"></div>
                  <div className="second"></div>
                </div>
                <div className="all-friends">
                  <div className="first"></div>
                  <div className="second"></div>
                </div> */}
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
                  <span className="btn btn-link" onClick={showCurrentNft}>
                    {openCurrentNft ? "show less" : "show"}
                  </span>
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

export default Friends;
