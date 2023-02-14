import React, { useEffect, useState } from "react";
import "../../Assets/css/nftMarket.css";

import Sidebar from "../CommonComponents/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { nftsMarketPosts } from "../../store/actions/NftMarketActions/nftmarketActions";
import MessageBox from "../CommonComponents/MessageBox";
import Loader from "../CommonComponents/Loader";
import SearchBar from "../CommonComponents/SearchBar";
import NftCard from "./NftCard";
import FilterSideBar from "../CommonComponents/FilterSideBar";
import AppliedFilters from "../CommonComponents/AppliedFilters";

const NftMarket = () => {
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [openFilterBar, setOpenFilterBar] = useState(false);

  const state = useSelector((state) => state.nftsMarketPost);
  const { loading, error, nftsData } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nftsMarketPosts());
    setData(nftsData);
  }, [dispatch, nftsData]);

  const [Data, setData] = useState([]);
  const [noOfElement, setnoOfElement] = useState(4);
  const slice = Data?.slice(0, noOfElement);

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const [searchQuery,setSearchQuery] = useState("");

  let columnClass = openFilterBar ? "col-md-8" : "col-md-6";
  let cardClass = openFilterBar ? "col-md-3" : "col-md-4";
  let filterBarclass = openFilterBar ? "col-md-1" : "col-md-3";
  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            <div className={`col-sm-12 ${columnClass} middle`}>
              <div className="d-flex justify-content-between">
                <h1 className="home-title">NFT Marketplace</h1>
                <SearchBar setSearchQuery={setSearchQuery} />
              </div>
              <AppliedFilters
                appliedFilters={appliedFilters}
                setAppliedFilters={setAppliedFilters}
                setData={setData}
              />
              {loading ? (
                <Loader />
              ) : error ? (
                <MessageBox>{error}</MessageBox>
              ) : (
                <div className="row">
                  
                  {Data ? searchQuery === ""  ? (
                    slice?.map((value, index) => {
                      return <NftCard cardClass={cardClass} data={value} key={index} />;
                    })
                  ) : (
                    slice?.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())).map((value,index)=>{
                      return <NftCard cardClass={cardClass} data={value} key={index} />;
                   })
                  ) : (
                  <div>
                    <MessageBox>Search nfts</MessageBox>
                  </div>
                  )
                }
                </div>
              )}
              <div className={`loadMoreDiv ${slice?.length === Data?.length ? "hidden-element" : ""}`}>
                <img
                  className="loadMorebtn"
                  onClick={() => loadMore()}
                  src={require("../../Assets/images/Icons-PNG/load-more.png")}
                  alt="LoadMoreImg"
                />
              </div>
            </div>
            <div className={`col-sm-12 ${filterBarclass} top`}>
              <FilterSideBar
                openFilterBar={openFilterBar}
                setOpenFilterBar={setOpenFilterBar}
                appliedFilters={appliedFilters}
                setAppliedFilters={setAppliedFilters}
                updateData={setData}
                data={nftsData}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NftMarket;
