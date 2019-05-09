import React from 'react';

const Gallery = () => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <GalleryItem />
        {/*}-- Not Found */}
        <NotFound />
      </ul>
    </div>
  );
}

export default Gallery;