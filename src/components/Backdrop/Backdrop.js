import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backedrop",
    props.show ? "BackedropOpen" : "BackedropClose",
  ];
  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
