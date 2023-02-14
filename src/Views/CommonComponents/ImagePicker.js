import React, { useRef } from "react";
import imageIcon from "../../Assets/images/Icons-PNG/image.PNG";

export default function ImagePicker({ setPostImage }) {
  // const [image, setImage] = useState([]);
  const pickRef = useRef(null);

  const handleConvertImage = (e) => {
    setPostImage([URL.createObjectURL(e.target.files[0])]);
    // imageToBase64(image)
    //     .then(
    //         (response) => {
    //             console.log("base64 res",response);
    //             setImage(response)
    //         }
    //     )
    //     .catch(
    //         (error) => {
    //             console.log(error);
    //         }
    //     )
  };
  return (
    <>
      <li ref={pickRef}>
        <label style={{ cursor: "pointer" }} htmlFor="img-input">
          <img src={imageIcon} alt="imageIcon" />
        </label>
        <input
          style={{ display: "none" }}
          name="img-input"
          id="img-input"
          accept="image/*"
          type="file"
          onInput={handleConvertImage}
        />
      </li>
    </>
  );
}
