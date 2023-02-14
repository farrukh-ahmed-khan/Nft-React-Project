import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Sidebar from "../CommonComponents/Sidebar";
import ChatBox from "../Home/ChatBox/Chat";
import NftComponent from "../CommonComponents/LatestNftComponent";
// import img from "../../Assets/images/profile-images/fto5lYX.jpg";
import Slider from "../CommonComponents/nftSlider";
import ProfileNavBar from "../CommonComponents/ProfileNavBar";
import PostComposer from "../CommonComponents/PostComposer";
import Post from "../CommonComponents/Post";
import SearchBar from "../CommonComponents/SearchBar";
import "../../Assets/css/profile.css";
import MessageBox from "../CommonComponents/MessageBox";
import { useSelector } from "react-redux";
const Profile = ({userData,userPosts,loading}) => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  const [combined_posts, set_combined_posts] = useState([]);

  let { allPostLoading, allPostError, allPosts } = useSelector(
    (state) => state.allPosts
  );

    useEffect(() => {
      if (allPosts && userPosts) {
        let shared_posts = allPosts.filter(post => post.sharedBy === userData?._id );
        set_combined_posts([...shared_posts, ...userPosts]);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPosts]);

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-12 col-lg-6 middle">
              <ProfileNavBar userData={userData} />
              <div className="row mt-3">
                <div className="col-md-7 order-last order-lg-first">
                  <PostComposer />
                  <div className="my-4 row">
                    <div className="">
                      <Slider />
                    </div>
                  </div>
                  {loading ? (
                    <div className="loader">loading...</div>
                  ) : (
                    combined_posts?.map((data, index) => (
                      <Post key={index} data={data} />
                    ))
                  )}
                </div>
                <div className="col-md-5 order-first order-lg-last">
                  <div className="card-post">
                    <div className="cardPostContent">
                      <h2 className="home-title">About</h2>
                      <div className="text-center px-4 text-capitalize aboutText standardText">
                        {userData?.about?.headlineStatus}
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="editButton">Edit Bio</button>
                      </div>
                      <ul className="standardText">
                        <li>{userData?.about?.workplace}</li>
                        <li>{userData?.about?.education}</li>
                        <li>{userData?.about?.placelived}</li>
                        <li>{userData?.about?.contact}</li>
                        <li>{userData?.about?.status}</li>
                        <li>Joined {userData?.about?.joinedDate}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-post">
                    <div className="cardPostPictures">
                      <div className="d-flex justify-content-between align-items-center px-4">
                        <h2 className="home-title pt-2">Photos</h2>
                        <span>See All Photos</span>
                      </div>

                      <div className="ProfilePhotosDiv">
                        <div className="ProfileImagesDiv">
                          {userData?.photos ? (
                            userData?.photos?.map((data, index) => {
                              return (
                                <img
                                  style={{ height: "11vh" }}
                                  key={index}
                                  src={data.image}
                                  alt="userImage"
                                />
                              );
                            })
                          ) : (
                            <MessageBox variant="info">
                              No Photos Found !
                            </MessageBox>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-post">
                    <div className="cardPostPictures">
                      <div className="d-flex justify-content-between align-items-center px-4">
                        <h2 className="home-title pt-2">Friend</h2>
                        <span>See All Friends</span>
                      </div>

                      <div className="ProfilePhotosDiv">
                        <div className="ProfileImagesDiv">
                          {userData
                            ? userData?.friends.map((data, index) => {
                                return (
                                  <img
                                    style={{ height: "11vh" }}
                                    key={index}
                                    src={data.picture}
                                    alt="userImage"
                                  />
                                );
                              })
                            : null}
                          {/* <img src={img} alt="testImg" />
                          <img src={img} alt="testImg" />
                          <img src={img} alt="testImg" />

                          <img src={img} alt="testImg" />
                          <img src={img} alt="testImg" />
                          <img src={img} alt="testImg" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 top">
              <SearchBar />
              {/* <div className="card-post empty"></div> */}
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
                <NftComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChatBox />
    </>
  );
};

export default Profile;
