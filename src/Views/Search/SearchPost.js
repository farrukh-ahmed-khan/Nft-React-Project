import React, { useEffect, useState } from "react";

import Sidebar from "../CommonComponents/Sidebar";
import ChatBox from "../Home/ChatBox/Chat";
import { Link } from "react-router-dom";
import PostComposer from "../CommonComponents/PostComposer";
import Post from "../CommonComponents/Post";
import NftComponent from "../CommonComponents/LatestNftComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllTimelinePosts } from "../../store/actions/HomeActions/homeActions";
import searchIcon from "../../Assets/images/Icons-PNG/search-icon-1.png";


const SearchPost = () => {
  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  let { allPostLoading, allPostError, allPosts } = useSelector(
    (state) => state.allPosts
  );

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTimelinePosts());
  }, [dispatch]);
  const[search, setSearch]=useState("");
  const [searchResult, setSearchResult] = useState(allPosts);

    const searchPost = (e) => {
        setSearch(e.target.value);
        if (setSearch === "") {
            dispatch(getAllTimelinePosts());
        } else {
            const result = allPosts.filter(
            (post) =>
                post.text.toLowerCase().includes(e.target.value.toLowerCase()) ||
                post.postOwnerName.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchResult(result);
        }
    }

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
                searchResult?.map((data, index) => <Post key={index} data={data} />)
              )}
            </div>
            <div className="col-12 col-md-3 col-lg-3 top">
              <div className="search-wrap">
                <input
                  value={search}
                  onChange={(e) => searchPost(e)}
                  type="text"
                  className="form-control search-field"
                  placeholder="Search..."
                />
                <span>
                  <img src={searchIcon} alt="searchIcon" />
                </span>
              </div>
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

export default SearchPost;
