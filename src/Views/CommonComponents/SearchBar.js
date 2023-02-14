import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../Assets/images/Icons-PNG/search-icon-1.png";

function SearchBar({setSearchQuery}) {
  return (
    <>
      {/* <Link to="../Search"> */}
        <div className="search-wrap">
          <input
            type="text"
            className="form-control search-field"
            placeholder="Search..."
            onChange={e=>setSearchQuery(e.target.value)}
          />
          <span>
            <img src={searchIcon} alt="searchIcon"/>
          </span>
        </div>
      {/* </Link> */}
    </>
  );
}

export default SearchBar;
