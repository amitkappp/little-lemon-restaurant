import React from "react";
import HighlightItem from "../highlightItem";
import GreekSalad from "../../assets/greek salad.jpg";

const firstItemData = {
  pic: GreekSalad,
  title: "Greek Salad",
  price: "$12.99",
  description:
    "The famous greek salad of crisspy lettuce, peppers, olives and our Chicago style feta cheese granished with crunchy gralic and rosemary croutons",
};

const Highlights = () => {
  return (
    <section className="highlights-section">
      <div className="center-column">
        <div className="highlights-layout">
          <section className="highlights-header">
            <h1>This week specials!</h1>
            <div className="primary-btn">Online Menu</div>
          </section>
          <section className="highlights-body">
            <HighlightItem data={firstItemData} />
            <HighlightItem data={firstItemData} />
            <HighlightItem data={firstItemData} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
