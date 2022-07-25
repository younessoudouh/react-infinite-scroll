import React, { useEffect, useRef, useState } from "react";

import { IMAGES } from "../../images";
import { ImageCover } from "../../components/image-cover/image-cover";

export const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadingdRef = useRef(null);

  useEffect(() => {
    const imagesToDisplay = IMAGES.slice(0, page * 10);
    setImages(imagesToDisplay);
    if (imagesToDisplay.length === IMAGES.length) setHasMore(false);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entrie]) => {
      if (entrie.isIntersecting) setPage((page) => page + 1);
    });

    observer.observe(loadingdRef.current);
  }, []);

  return (
    <div>
      <h1 className="title">Birds Images </h1>
      <div className="images-container">
        {images.map((image) => (
          <ImageCover image={image} key={image} />
        ))}
      </div>
      {hasMore ? (
        <h2 ref={loadingdRef} className="loading">
          loading....
        </h2>
      ) : (
        <h2 className="no-more">No More Birds Pictures</h2>
      )}
    </div>
  );
};
