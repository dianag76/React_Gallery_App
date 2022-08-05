import React from "react";
import NotFound from "./NotFound";
import Photo from "./Photo";

const PhotoList = (props) => {
  const results = props.data;
  let photos;
  if (results.length > 0){
    photos = results.map((photo) => (
    <Photo
      key={photo.id}
      url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
    />
  ));
  } else {
    photos= <NotFound/>
  }
  

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoList;
