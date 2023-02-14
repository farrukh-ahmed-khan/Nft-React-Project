import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from 'clsx';
import styles from "../../Assets/css/Explore.module.css";
import searchIcon from "../../Assets/images/Icons-PNG/search-icon-1.png";
import Sidebar from "../CommonComponents/Sidebar";
import ExploreCard from "./ExploreCard";
import { useDispatch, useSelector } from "react-redux";
import { getExplorePageData } from "../../store/actions/ExploreActions/exploreActions";
import { Alert } from "react-bootstrap";
import Loader from '../CommonComponents/Loader'
import MessageBox from '../CommonComponents/MessageBox'
import NftComponent from "../CommonComponents/LatestNftComponent";

const Explore = () => {
  const [page_data, setPageData] = useState([]);

  const [openCurrentNft, setOpenCurrentNft] = useState(false);

  const [searchQuery, setSearchQuery] = useState("")

  const dispatch = useDispatch();

  const state = useSelector(state => state.explorePage);
  const { loading, error, exploreData } = state;

  const showCurrentNft = () => {
    setOpenCurrentNft(!openCurrentNft);
  };
  let { page_id } = useParams();

  useEffect(() => {
    dispatch(getExplorePageData());

    if (exploreData?.find(item => item?.type?.toLowerCase() === page_id?.toLowerCase())) {
      setPageData(exploreData?.find(item => item.type.toLowerCase() === page_id.toLowerCase()));
    }
  }, [page_id, dispatch, exploreData]);

  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row mobo-view">
            <Sidebar />
            {
              loading ? <Loader /> : error ? <MessageBox>{error}</MessageBox> :
                <div className="col-12 col-md-8 col-lg-6 middle">
                  <h1 className={styles["explore-title"]}>Explore : {page_data.type}</h1>
                  <img
                    className="img-fluid"
                    src={require("../../Assets/images/explore/bg.png")}
                    alt="explore-banner"
                  />
                  <div className={clsx(styles["explore-desc-wrapper"], "py-4", "px-3")}>
                    <h1 className={styles["explore-title"]}>Explore {page_data.type}</h1>
                    <p className={styles["explore-desc"]}>
                      {page_data.type_desc}
                    </p>
                  </div>
                  <hr className={styles.split} />
                  <h3 className={clsx("text-center", styles["trending-title"])}>Trending collections in {page_data.type}</h3>
                  <div className="cards row  d-flex flex-wrap">
                  {
                    page_data?.data ?
                      searchQuery === "" ? page_data.data?.map((value, index) => <ExploreCard data={value} key={index} />)
                      : 
                        page_data.data?.filter(e=>e.title.includes(searchQuery)).map((value, index) => <ExploreCard data={value} key={index} />)
                      :
                    <div><Alert variant='primary'>
                      No data Found..
                    </Alert></div>
                  }
                  </div> 

                </div>
            }
            <div className="col-12 col-md-2 col-lg-3 top">
              <div className="search-wrap">
                <input
                  type="text"
                  className="form-control search-field"
                  placeholder="Search..."
                  onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <span>
                  <img src={searchIcon} alt="searchIcon" />
                </span>
              </div>
              <h2 className="home-title">Latest Current NFT</h2>
              <div
                className={`current-nft--wrapper ${openCurrentNft ? "show" : ""
                  }`}
              >
                <div className="show-more">
                  <button className="btn btn-link" onClick={showCurrentNft}>
                    {openCurrentNft ? "show less" : "show"}
                  </button>
                </div>
                <NftComponent/>
                <NftComponent/>
                <NftComponent/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
