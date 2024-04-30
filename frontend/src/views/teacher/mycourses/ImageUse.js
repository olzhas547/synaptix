import React,{useState, useEffect} from 'react';
import axios from "axios";
function ImageUse(props) {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        axios.get('https://your_api_url_here')
            .then(response => {
                setImageSrc(response.data.imageSrc); // Replace with actual path to image in your response
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            <img src={imageSrc} alt="Description of the image for screen readers"/>
        </div>
    );
}

export default ImageUse;