import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl,size}) => (
    <div className={`${size} menu-item`}>
        {/* We dont want this image to get bigger on scale, just want to get the effect
        get bigger on hover, size of our content should remain same, hence the reason
        for a separate div */}
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem
