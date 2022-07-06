import React from "react";
import './card.css'
import CardTitle from "../cardTittle/cardTitle";
import CardImage from "../cardImage/cardImage";
import CardInfo from "../cardInfo/cardInfo";

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
                <CardTitle title="Ben Kart Başlığıyım" />
                <CardImage url="https://images.unsplash.com/photo-1657091973480-c05dd01563ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80" />
                <CardInfo info="Ürün Bilgisi - 1" />
            </div>
        </div>
    )
}
export default Card