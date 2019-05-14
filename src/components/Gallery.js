import React from 'react';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = props => {
// pass in props
    const results = props.data;
    let pics;
    // map over data to render gallery
    if (results.length > 0) {
        pics = results.map(pic => 
            <GalleryItem 
                url={
                `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
                }
                key={pic.id}
            />                    
        );
    } else {
        pics = <NotFound />;
    }


    return (
        <div className="photo-container">
            <h2>{props.query}</h2>
            <ul>
                {pics}          
            </ul>
        </div>
    );
}

export default Gallery;