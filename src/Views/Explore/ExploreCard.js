import React from "react";
import clsx from 'clsx'
import styles from "../../Assets/css/Explore.module.css";
import { Link } from "react-router-dom";

function ExploreArtCard({data}) {
  let { title, description,image, dp, artist } = data;
  return (
    <>
      <div className={clsx(styles["explore-art-card"], "card" , "my-2")}>
          <img src={require(`../../Assets/images/explore/${image}`)} alt="profile" />
          <div className={clsx(styles.content,"px-2")}>
            <div className={styles.profilePic}><img src={require(`../../Assets/images/explore/${dp}`)} className={styles.dp} alt="dp" /></div>
            <h3>{title}</h3>
            <span className={styles.author}>By <Link className="text-primary" to="/">{artist} </Link> <img width={13} height={13} src={require("../../Assets/images/explore/tick.png")} alt="" /></span>
              <p>{description}</p>
              <span className={styles.eth}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
              </span>
          </div>
      </div>
    </>
  );
}

export default ExploreArtCard;
