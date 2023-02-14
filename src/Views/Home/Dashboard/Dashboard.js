import React, { useEffect, useState } from "react";

import Sidebar from "../../CommonComponents/Sidebar";
import PostSearch from "../../CommonComponents/PostSearch";
import ChatBox from "../ChatBox/Chat";
import { Link } from "react-router-dom";
import PostComposer from "../../CommonComponents/PostComposer";
import Post from "../../CommonComponents/Post";
import NftComponent from "../../CommonComponents/LatestNftComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllTimelinePosts} from "../../../store/actions/HomeActions/homeActions";
import { getUserData } from "../../../store/actions/UserActions/userActions";

const Dashboard = () => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  let { allPostLoading, allPostError, allPosts } = useSelector(
    (state) => state.allPosts
  );

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTimelinePosts())
    dispatch(getUserData())
  }, [dispatch])

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-6 middle">
              <h1 className="home-title">Home</h1>
              <PostComposer />
              {allPostLoading ? (
                <div className="loader">loading...</div>
              ) : (
                allPosts?.map((data, index) => <Post key={index} data={data} />)
              )}
            </div>
            <div className="col-12 col-md-3 col-lg-3 top">
              <PostSearch/>
              <div className="card-post empty"></div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <ChatBox />
    </>
  );
};

export default Dashboard;
