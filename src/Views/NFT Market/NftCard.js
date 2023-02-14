import React from "react";
import "../../Assets/css/nftMarket.css";

const NftCard = ({ data ,cardClass }) => {
  const { imgSrc, collection, title, price } = data;
  return (
    <div className={`${cardClass} col-sm-6 col-xs-12`}>
      <div className="bg-white rounded my-2 cardNft">
        <img
          src={require(`../../Assets/images/NftMarket/${imgSrc}`)}
          className="img-fluid cardImg"
          alt="nft"
        />
        <div>
          <div className="text-secondary p-2 cardTitle">{collection}</div>
          <p className="px-2 text-dark cardTitleAndNo">{title}</p>
        </div>
        <div className="d-flex justify-content-end flex-column p-2 cardPrice">
          <div className="priceHeading">Price</div>
          <div className="price">{price}</div>
          <div className="days">a day left</div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
