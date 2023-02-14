import react from "react";

const CrouselCard = ({ data }) => {
  const { imgSrc, cardTitle, cardDesc, colorCode } = data;
  return (
    <div>
      <div className="card carouselStoryCard">
        <img
          src={require(`../../Assets/images/profile-images/${imgSrc}`)}
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body cardBodyTextCarouse"
          style={{ backgroundColor: colorCode }}
        >
          <p className="card-text text-center text-white">{cardTitle}</p>
          <div className="text-white text-center card-desc">{cardDesc}</div>
        </div>
      </div>
    </div>
  );
};

export default CrouselCard;
