// Code MovieReviews Here
import React from 'react'


const MovieReviews = ({reviews}) => (
    <div className="review-list" >
        {reviews.map(review => (
            //  console.log(review),
            <div className="review" key={review.display_title}>
            <h4>{review.display_title}</h4>
            <h5>By: {review.byline}</h5>
            <h5>Critics Pick: {review.critics_pick}</h5>
            </div>
        ))}
    </div>
)

export default MovieReviews