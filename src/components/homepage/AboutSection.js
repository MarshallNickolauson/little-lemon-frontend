import React from "react";

import chefs1 from '../../images/chefs-1.png'
import chefs2 from '../../images/chefs-2.png'

export default function AboutSection() {
    return (
        <div className="about-container">
            <div className="about-section">
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chigaco</h2>
                    <p>
                        Founded by Adrian and Mario, Little Lemon is a family-owned Mediterranean restaurant.
                        Growing up in a Mediterranean household, they cherished traditional recipes and dreamed of sharing them.
                        Today, they bring a modern twist to classic dishes, creating a beloved dining experience in the heart of Chicago.
                    </p>
                </div>
                <div>
                    <img className="chef-1" src={chefs1} />
                    <img className="chef-2" src={chefs2} />
                </div>
            </div>
        </div>
    );
}