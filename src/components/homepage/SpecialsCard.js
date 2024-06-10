import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SpecialsCard({ picture, title, description, price }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/menu');
    }

    return (
        <div className="specials-card" onClick={handleClick}>
            <div className="specials-image">
                <img src={picture} alt={title} />
            </div>
            <div className="specials-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="specials-price">{price}</p>
            </div>
        </div>
    );
}