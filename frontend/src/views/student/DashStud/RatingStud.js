import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RatingStud({ apiUrl }) {
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                // Check if the response and data are defined
                if (response && response.data && response.data.rating !== undefined) {
                    setRating(response.data.rating);
                } else {
                    // Handle undefined data
                    setError('Rating data is missing from the response');
                    console.error('Rating data is missing from the response');
                }
            })
            .catch(error => {
                // Handle errors in fetching data
                setError('Error fetching rating: ' + error.message);
                console.error('Error fetching rating:', error);
            });
    }, [apiUrl]);

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg key={i} width="50" height="50" viewBox="0 0 24 24" fill={i < rating ? 'gold' : 'lightgray'} aria-hidden="true">
                    <path d="M12 .587l3.668 7.431 8.332 1.209-6.004 5.843 1.416 8.265L12 18.896l-7.412 3.9 1.416-8.265-6.004-5.843 8.332-1.209L12 .587z"/>
                </svg>
            );
        }
        return stars;
    };

    return (
        <div>
            <h2>Rating:</h2>
        </div>
    );
}

export default RatingStud;