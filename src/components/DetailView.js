import React from "react";
import "./styles/DetailView.css";

const DetailView = () => {
  return (
    <section className="detail-view">
      <div className="data-wrapper">
        <img className="sprite-image" alt="sprite" />
        <div className="data-name">
          <p className="data-char"></p>
        </div>
      </div>
    </section>
  );
};

export default DetailView;
