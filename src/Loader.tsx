import React from "react";
import "./LoaderStyles.css";

export default () => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="centered loader"></div>
      </div>
    </div>
  );
};
