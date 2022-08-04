import React from "react";
import Photo from "./Photo";

const PhotoList = (props) => {
  const results = props.data;
  let photos = results.map((photo) => (
    <Photo
      key={photo.id}
      url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
    />
  ));
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoList;
