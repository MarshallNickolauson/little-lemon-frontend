import React from 'react';
import { Link } from 'react-router-dom';

function SpecialsCard({ picture, title, description, price }) {

    return (
        <div className="Specials-Card">
            <div className="Specials-Image">
                <img src={picture} alt={title} />
            </div>
            <div className="Specials-Details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="Specials-Price">{price}</p>
            </div>
        </div>
    );
}    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/menu');
    };

export default SpecialsCard;