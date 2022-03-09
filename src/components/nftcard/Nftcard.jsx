import React from "react";
import "./nftcard.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon-ethereum.svg";
import clock from "../../assets/icon-clock.svg";
import profile from "../../assets/Black.jpg";

const Nftcard = (props) => {
  return (
    <div className="card">
      <div className="card_header">
        <div className="card_product-img">
          <img src={props.image} alt=""></img>
        </div>
      </div>
      <div className="card_body">
        <Link to="/">
          <h3 className="card_title">{props.nftname}</h3>
        </Link>

        <p className="card_text">{props.text}</p>

        <div className="wrapper">
          <div className="card_price">
            <img src={icon} alt="cardIcon" className="card_icon"></img>
            <span>{props.price}</span>
          </div>
          <div className="card_countdown">
            <img src={clock} alt="" className="card_icon"></img>
            <span>{props.countdown}</span>
          </div>
        </div>
      </div>
      <div className="card_footer">
        <img src={profile} className="card_author-img"></img>

        <p className="card_author-name">
          Creation of <Link to="/">{props.author}</Link>
        </p>
      </div>
    </div>
  );
};

export default Nftcard;
