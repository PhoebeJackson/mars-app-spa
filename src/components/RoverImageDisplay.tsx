import React, {useContext} from 'react';
import {ImageFormContext} from "../contexts/ImageFormContext";

function RoverImageDisplay() {
    const context = useContext(ImageFormContext)
    const listImages = context.imageURLS.map((url) =>
        <img key={url} src={url}/>

    );
    return (
        <div>{listImages}</div>
    )
}

export default RoverImageDisplay