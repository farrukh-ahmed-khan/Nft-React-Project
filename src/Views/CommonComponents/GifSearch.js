import React, { useRef } from "react";
import { useState } from "react";
import { Overlay, Popover, Spinner } from "react-bootstrap";
import gifIcon from "../../Assets/images/Icons-PNG/gif-icon.PNG";

function GifSearch({setSelectedGif , variant}) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const gifRef = useRef(null);
  const [search, setsearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.giphyApiKey || "Vvq6WfdGbuskcJ3NOt0hv4cgU823D7Nj";
  const GIPHYAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=8&offset=0&q=`;
  
  const searchgif = () => {
    if (search.length > 0) {
      setLoading(true);

      fetch(GIPHYAPI + search)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          let new_gifs = result.data.map((gif) => {
            return gif.images.fixed_height.url;
          })
          setGifs(new_gifs);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  const openGifSearch = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
      <li ref={gifRef} style={{ cursor: "pointer" }}>
        <span onClick={openGifSearch}>
          <img src={gifIcon} alt="gifIcon" />
        </span>
      </li>
      <Overlay
        show={show}
        target={target}
        placement={variant}
        container={gifRef}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <div className="gif-search-wrap">
              <input
                type="text"
                className="form-control search-field"
                placeholder="Search..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <span onClick={searchgif}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
              </span>
            </div>
            {loading && <Spinner animation="border" role="status"></Spinner>}
            <div className="listOfGiph">
              {gifs.map((item, ind) => {
                return (
                  <div className="giph" key={ind}>
                    <img
                      src={item}
                      style={{ cursor: "pointer" }}
                      alt="img"
                      onClick={() => {
                        setSelectedGif([item]);
                        setShow(false);
                      }}
                      width="400px"
                    />
                  </div>
                );
              })}
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
      {/* <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Search Your Gif
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="search-wrap">
                        <input
                            type="text"
                            className="form-control search-field"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                        />
                        <span onClick={searchgif}>
                            <img src={searchIcon} alt="searchIcon" />
                        </span>
                    </div>
                    {
                        loading &&
                        <Spinner animation="border" role="status">
                        </Spinner>
                    }
                    <div className='listOfGiff'>
                        {
                            gifs.map((item, ind) => {
                                return (
                                    <div className='giff' key={ind}>
                                        <img src={item} style={{ cursor: 'pointer' }} alt="img" onClick={() => {
                                            setSelectGif([item])
                                            setModalShow(false)
                                        }}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal> */}
    </>
  );
}

export default GifSearch;
