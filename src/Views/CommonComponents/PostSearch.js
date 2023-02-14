import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../Assets/images/Icons-PNG/search-icon-1.png";

function PostSearch() {
  return (
    <>
      <Link to="../SearchPost">
        <div className="search-wrap">
          <input
            type="text"
            className="form-control search-field"
            placeholder="Search..."
          />
          <span>
            <img src={searchIcon} alt="searchIcon"/>
          </span>
        </div>
      </Link>
    </>
  );
}

export default PostSearch;
