import React from "react";

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
        <div className="secondary-btn">Order a delivery</div>
      </div>
    </div>
  );
};

export default HighlightItem;
