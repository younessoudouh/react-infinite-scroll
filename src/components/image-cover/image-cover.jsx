import React from "react";

import "./image-cover.css";

export const ImageCover = ({ image }) => {
  const BASE__PATH = "https://neoos.s3.eu-west-1.amazonaws.com/img/birds/";
  return (
    <div className="image-cover">
      <h1 className="image-title">{image}</h1>
      <img className="image" src={BASE__PATH + image} alt="bird" />
    </div>
  );
};
