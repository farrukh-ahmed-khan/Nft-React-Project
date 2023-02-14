import React , { useEffect, useState } from "react";
import "../../Assets/css/nftMarket.css";

import searchIcon from "../../Assets/images/Icons-PNG/search-icon-1.png";
import Sidebar from "../CommonComponents/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { nftsMarketPosts } from "../../store/actions/NftMarketActions/nftmarketActions";
import MessageBox from "../CommonComponents/MessageBox";
import Loader from "../CommonComponents/Loader";
import NftCard from "../NFT Market/NftCard";

const Search = () => {

  const state = useSelector(state => state.nftsMarketPost);
  const { loading, error, nftsData } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nftsMarketPosts())
  }, [dispatch])

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(nftsData);
  const searchNfts = (e) => {
    setSearch(e.target.value);
    if (setSearch === "") {
      dispatch(nftsMarketPosts())
      // <NftCard data={nftsData} />
    }
    else {
      const result = nftsData.filter(nft => nft.collection.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchResult(result);
      <NftCard data={result} />
    }

  }
  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className="col-12 col-md-6 col-lg-8 middle">
              <div className="d-flex justify-content-between">
                <h1 className="home-title">Search</h1>
                <div className="search-wrap">
                  <input
                  value={search}
                    onChange={(e) => searchNfts(e)}
                    type="text"
                    className="form-control search-field"
                    placeholder="Search..."
                  />
                  <span>
                    <img src={searchIcon} alt="searchIcon" />
                  </span>
                </div>
              </div>
              {
                loading ? <Loader /> : error ? <MessageBox>{error}</MessageBox> :
                  <div className="row">
                    {searchResult ?
                      searchResult.map((value, index) => {
                        return (
                         <NftCard data={value} key={index}/>
                        );
                      }) :
                      <div><MessageBox>No Nft's Found..</MessageBox></div>}
                  </div>
              }
            </div>
            <div className="col-12 col-md-3 col-lg-1 top"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;