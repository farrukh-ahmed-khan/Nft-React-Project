import React from "react";
import { Alert } from "react-bootstrap";

function MessageBox(props) {
  return (
    <div>
      <Alert className="border-0" variant={`${props.variant || 'info'}`}>
        {props.children}
      </Alert>
    </div>
  );
}

export default MessageBox;
