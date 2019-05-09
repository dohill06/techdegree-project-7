import React from 'react';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const Gallery = props => {

    const results = props.data;
    let pics;
    
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
            <h2>Results</h2>
            <ul>
                {pics}          
            </ul>
        </div>
    );
}

export default Gallery;