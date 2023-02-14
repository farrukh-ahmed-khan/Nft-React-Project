import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div>
      <Spinner animation="border" role="status"/>
    </div>
  );
}

export default Loader;
