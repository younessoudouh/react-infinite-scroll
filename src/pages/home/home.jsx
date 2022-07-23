import React, { useEffect, useRef, useState } from "react";

import { IMAGES } from "../../images";
import { ImageCover } from "../../components/image-cover/image-cover";

export const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadingdRef = useRef(null);

  const isInViewPort = ([entries]) => {
    if (entries.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    setImages(imagesToDisplay(page));
    if (images.length === IMAGES.length) {
      setHasMore(false);
    }
  }, [page]);

  const imagesToDisplay = (page) => {
    return IMAGES.slice(0, page * 10);
  };

  const observer = new IntersectionObserver(isInViewPort);

  useEffect(() => {
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
      {hasMore && (
        <h2 ref={loadingdRef} className="loading">
          loading....
        </h2>
      )}
    </div>
  );
};
