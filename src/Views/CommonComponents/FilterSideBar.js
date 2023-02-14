import React, { useRef, useState } from "react";
import { Collapse } from "react-bootstrap";

export default function FilterSideBar({
  openFilterBar,
  setOpenFilterBar,
  appliedFilters,
  setAppliedFilters,
  updateData,
  data,
}) {
  const [openPrice, setPriceOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openChains, setOpenChains] = useState(false);
  const [openStatusCategories, setOpenCategories] = useState(false);
  const [openStatusOnSaleIn, setOpenOnSaleIn] = useState(false);

  const [MinPrice, setMinPrice] = useState(null);
  const [MaxPrice, setMaxPrice] = useState(null);

  let filterBarRef = useRef(null);
  let filterLeftArrow = useRef(null);
  let filterTitleRef = useRef(null);

  let classNames = !openFilterBar
    ? "filter-container"
    : "filter-container hide";

  let hideFilterBar = () => {
    if (!openFilterBar) {
      filterBarRef.current.style.right = "-60%";
      filterLeftArrow.current.style.transform = "rotate(180deg)";
      filterTitleRef.current.style.display = "none";
    } else {
      filterBarRef.current.style.right = "-1rem";
      filterLeftArrow.current.style.transform = "rotate(0deg)";
      filterTitleRef.current.style.display = "flex";
    }
    setOpenFilterBar(!openFilterBar);
  };

  let applyFilter = (FilterType) => {
    if (FilterType === "status") {
      let new_data = data?.filter((d) => d.status.includes("status"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    } else if (FilterType === "onAuction") {
      let new_data = data?.filter((d) => d.status.includes("onAuction"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    } else if (FilterType === "new") {
      let new_data = data?.filter((d) => d.status.includes("new"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    } else if (FilterType === "hasOffers") {
      let new_data = data?.filter((d) => d.status.includes("hasOffers"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    } else if (FilterType === "price") {
      let new_data = data?.filter(
        (d) => d.price >= MinPrice && d.price <= MaxPrice
      );
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    }
    else if(FilterType === "collectible"){
      let new_data = data?.filter((d) => d.category.includes("collectible"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    }
    else if (FilterType === "art") {
      let new_data = data?.filter((d) => d.category.includes("art"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    }
    else if (FilterType === "ethereum") {
      let new_data = data?.filter((d) => d.chain.includes("ethereum"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    }
    else if (FilterType === "polygon") {
      let new_data = data?.filter((d) => d.chain.includes("polygon"));
      updateData(new_data);
      setAppliedFilters([
        ...appliedFilters?.filter((v, i, a) => a.indexOf(v) === i),
        FilterType,
      ]);
    }
  };

  return (
    <div className={classNames} ref={filterBarRef}>
      <div className="filter-heading">
        <span onClick={hideFilterBar} className="filter-arrow">
          <img
            src={require("../../Assets/images/Icons-PNG/left-arrow.png")}
            alt="filter"
            ref={filterLeftArrow}
          />
        </span>
        <span ref={filterTitleRef}>
          <h2>
            <span>Filter</span>
            <img
              src={require("../../Assets/images/Icons-PNG/hamburger-filter.png")}
              alt=""
            />
          </h2>
        </span>
      </div>
      <div className="sub-menu border-left">
        <div
          aria-controls="status-collapse"
          aria-expanded={openStatus}
          onClick={() => setOpenStatus(!openStatus)}
          className="cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <span>
            <img
              src={require("../../Assets/images/Icons-PNG/toggle-arrow-filter.png")}
              alt="filter-open"
            />
          </span>
          <span>Status</span>
        </div>
        <Collapse in={openStatus}>
          <div id="status-collapse" className="sub-menu-body p-3">
            <div className="row">
              <div className="col-sm-12 col-md-6 py-1">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => applyFilter("status")}
                >
                  Status
                </button>
              </div>
              <div className="col-sm-12 col-md-6 py-1">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => applyFilter("onAuction")}
                >
                  On Auction
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => applyFilter("new")}
                >
                  New
                </button>
              </div>
              <div className="col-sm-12 col-md-6">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => applyFilter("hasOffers")}
                >
                  Has Offers
                </button>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="sub-menu border-left">
        <div
          aria-controls="price-collapse"
          aria-expanded={openPrice}
          onClick={() => setPriceOpen(!openPrice)}
          className="cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <span>
            <img
              src={require("../../Assets/images/Icons-PNG/toggle-arrow-filter.png")}
              alt="filter-open"
            />
          </span>
          <span>Price</span>
        </div>
        <Collapse in={openPrice}>
          <div id="price-collapse" className="sub-menu-body p-3">
            <div className="row">
              <div className="col-sm-12 py-1 mb-1">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>United State Dollar (USD)</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <input
                  className="form-control"
                  placeholder="MIN"
                  type="number"
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-2">
                <p className="sub-menu-to">to</p>
              </div>
              <div className="col-sm-12 col-md-5">
                <input
                  id="to"
                  className="form-control"
                  placeholder="MAX"
                  type="number"
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-md-6">
                <button
                  className="btn btn-outline-secondar mt-1"
                  onClick={() => applyFilter("price")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="sub-menu border-left">
        <div
          aria-controls="collection-collapse"
          aria-expanded={openCollection}
          onClick={() => setOpenCollection(!openCollection)}
          className="cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <span>
            <img
              src={require("../../Assets/images/Icons-PNG/toggle-arrow-filter.png")}
              alt="filter-open"
            />
          </span>
          <span>Collections</span>
        </div>
        <Collapse in={openCollection}>
          <div id="collection-collapse" className="sub-menu-body p-3">
            <div className="row">
              <div className="col-12">
                <div className="search-wrap search-wrap-light">
                  <input
                    type="text"
                    className="form-control search-field"
                    placeholder="Filter"
                    onChange={(e)=>updateData(data.filter(item=>item.collection.toLowerCase().includes(e.target.value.toLowerCase())))}
                  />
                  <span>
                    <img
                      src={require("../../Assets/images/Icons-PNG/search-light.png")}
                      alt="searchIcon"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="sub-menu border-left">
        <div
          aria-controls="chains-collapse"
          aria-expanded={openChains}
          onClick={() => setOpenChains(!openChains)}
          className="cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <span>
            <img
              src={require("../../Assets/images/Icons-PNG/toggle-arrow-filter.png")}
              alt="filter-open"
            />
          </span>
          <span>Chains</span>
        </div>
        <Collapse in={openChains}>
          <div id="chains-collapse" className="sub-menu-body p-3">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li className="li-btn" onClick={()=> applyFilter("ethereum")}>
                    Ethereum
                  </li>
                  <li className="li-btn" onClick={()=>applyFilter("polygon")}>
                    Polygon
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="sub-menu border-left">
        <div
          aria-controls="categories-collapse"
          aria-expanded={openStatusCategories}
          onClick={() => setOpenCategories(!openStatusCategories)}
          className="cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <span>
            <img
              src={require("../../Assets/images/Icons-PNG/toggle-arrow-filter.png")}
              alt="filter-open"
            />
          </span>
          <span>Categories</span>
        </div>
        <Collapse in={openStatusCategories}>
          <div id="categories-collapse" className="sub-menu-body p-3">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li className="li-btn" onClick={()=> applyFilter("art")}>
                    Art
                  </li>
                  <li className="li-btn" onClick={()=> applyFilter("collectible")}>
                    Collectibles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="sub-menu border-left">
        <div
          aria-controls="onsale-collapse"
          aria-expanded={openStatusOnSaleIn}
          onClick={() => setOpenOnSaleIn(!openStatusOnSaleIn)}
          className="cursor-pointer d-flex flex-row justify-content-between align-items-center py-1 px-4 border-top border-bottom"
        >
          <span>
            <img
              src={require("../../Assets/images/Icons-PNG/toggle-arrow-filter.png")}
              alt="filter-open"
            />
          </span>
          <span>On Sale In</span>
        </div>
        <Collapse in={openStatusOnSaleIn}>
          <div id="onsale-collapse" className="sub-menu-body p-3">
            <div className="row">
              <div className="col-12">
                <div className="search-wrap search-wrap-light">
                  <input
                    type="text"
                    className="form-control search-field"
                    placeholder="Filter"
                  />
                  <span>
                    <img
                      src={require("../../Assets/images/Icons-PNG/search-light.png")}
                      alt="searchIcon"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
