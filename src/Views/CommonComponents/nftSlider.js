import Carousel from "react-multi-carousel";
import "../../Assets/css/carousel.css";
import "react-multi-carousel/lib/styles.css";
import CarouselCardData from "../../Data/CrouselCardData";
// import { useState } from "react";
import CrouselCard from "../Profile/CrouselCard";

export default function Slider() {
  // let colorcodes = ["#333", "#222"];
  // let bgc = colorcodes[Math.floor(Math.random() * colorcodes.length)];
  // console.log(colorcodes[Math.floor(Math.random() * colorcodes.length)]);

  // const [carouselCardData, setCarouselCardData] = useState(CarouselCardData);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} autoPlay={false}>
        {CarouselCardData.map((value, index) => {
          return (
              <CrouselCard data={value} key={index} />
          );
        })}
      </Carousel>
    </div>
  );
}
