import React from 'react';
// gallery items to fill gallery
const GalleryItem = props => {
  return (
      <li>
        <img src={props.url} alt="" />
      </li>
  );
}

export default GalleryItem;