import React from "react";

import "./image-cover.css";

const BASE_PATH = "https://neoos.s3.eu-west-1.amazonaws.com/img/birds/";
const INFINTE_SCROLL_IMAGE_URL =
  "https://via.placeholder.com/500x470.png?text=infinite-scrolling";

export const ImageCover = ({ image }) => {
  const replaceImageOnError = (event) =>
    (event.target.src = INFINTE_SCROLL_IMAGE_URL);

  return (
    <div className="image-cover">
      <h1 className="image-title">{image}</h1>
      <img
        className="image"
        src={BASE_PATH + image}
        onError={(event) => replaceImageOnError(event)}
        alt="bird"
      />
    </div>
  );
};
