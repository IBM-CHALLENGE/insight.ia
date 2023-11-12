import React, { useState } from 'react';
import { Image } from 'react-native';

const FallbackImage = ({ source, fallbackSource, style }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <React.Fragment>
            {imageError ? (
                <Image source={fallbackSource} style={style} />
            ) : (
                <Image source={source} style={style} onError={handleImageError} />
            )}
        </React.Fragment>
    );
};

export default FallbackImage