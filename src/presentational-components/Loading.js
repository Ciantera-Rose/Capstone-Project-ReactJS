import React from "react";

const Loading = (props) => {
  return (
    <div className={`${props.asOverlay && "spinner-overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
