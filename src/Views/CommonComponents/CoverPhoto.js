import React, { useRef } from "react";

export default function CoverPhoto({ setImage }) {
  const pickRef = useRef(null);

  const handleConvertImage = (e) => {
    setImage([URL.createObjectURL(e.target.files[0])]);

  };
  return (
    <>
      <div className="cover">
        <li ref={pickRef} style={{listStyle:"none"}}>
          <label style={{ cursor: "pointer"}} htmlFor="img-input">
            <h6>UPLOAD YOUR COVER HERE</h6>
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
      </div>
      
    </>
  );
}
