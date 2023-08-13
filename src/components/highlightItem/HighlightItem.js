import React from "react";
import Scooter from "../../assets/scooter.svg";

const HighlightItem = ({ data }) => {
  return (
    <div className="highlight-item">
      <img src={data.pic} alt="Greek salad" />
      <div className="item-inner">
        <div className="item-details">
          <h4 className="item-name">{data.title}</h4>
          <h4 className="item-price">{data.price}</h4>
        </div>
        <div style={{ height: ".5rem" }}></div>
        <p>{data.description}</p>
        <div style={{ height: "2rem" }}></div>
        <div className="btn-container">
          <span className="secondary-btn">Order a delivery</span>
          <img src={Scooter} alt="scooter" />
        </div>
      </div>
    </div>
  );
};

export default HighlightItem;
