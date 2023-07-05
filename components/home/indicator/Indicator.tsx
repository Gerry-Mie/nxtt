import React from "react";
import "./indicator.css";

function Indicator() {
  return (
    <div className="container">
      <div className="circle">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="box box-top-left"></div>
        <div className="box box-bottom-left"></div>
        <div className="box box-bottom-right"></div>
        <div className="box box-top-right"></div>
      </div>
    </div>
  );
}

export default Indicator;
