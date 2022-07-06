import React from "react";
import './card.css'
import CardTitle from "../cardTittle/cardTitle";

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
                <CardTitle title="Ben Kart Başlığıyım" />
            </div>
        </div>
    )
}
export default Card