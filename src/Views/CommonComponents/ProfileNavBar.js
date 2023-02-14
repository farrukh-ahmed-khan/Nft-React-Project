import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CoverPhoto from "./CoverPhoto";

function ProfileNavBar({ userData }) {
  const coverPicture = userData?.coverPicture;
  const [image, setImage] = useState(coverPicture || null);

  const params = useParams();
  const { id: userId } = params;

  return (
    <>
      {image ? (
        <div className="cover">
          <img
            src={image}
            alt="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : (
        <div className="cover">
          <CoverPhoto setImage={setImage} />
        </div>
      )}
      <div className="nav bg-white">
        <ul className="d-flex flex-wrap navbar">
          <h6>
            <Link to={userId ? `/profile/${userId}` : "/profile"}>
              <li className="first-child">Post</li>
            </Link>
          </h6>
          <h6>
            <Link to={userId ? `/profile/${userId}/about` : "/profile/about"}>
              <li className="px-2">About</li>
            </Link>
          </h6>
          <h6>
            <Link
              to={userId ? `/profile/${userId}/friends` : "/profile/friends"}
            >
              <li className="px-2">Friends</li>
            </Link>
          </h6>
          <h6>
            <Link to={userId ? `/profile/${userId}/ownnft` : "/profile/ownnft"}>
              <li className="px-2">Own NFT</li>
            </Link>
          </h6>
          <h6>
            <Link to={userId ? `/profile/${userId}/videos` : "/profile/videos"}>
              <li className="px-2 video last-child">Videos</li>
            </Link>
          </h6>
        </ul>
      </div>
    </>
  );
}

export default ProfileNavBar;
