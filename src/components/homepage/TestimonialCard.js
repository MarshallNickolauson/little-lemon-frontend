import React from "react";

export default function TestimonialCard({ rating, picture, customerName, message }) {
    return(
        <div className="testimonial-card">
            <h1>Rating: {rating}</h1>
            <div className="testimonial-image">
                <img src={picture} alt='picture' />
            </div>
            <h2>{customerName}</h2>
            <p>{message}</p>
        </div>
    );
}

