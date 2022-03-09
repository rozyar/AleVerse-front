import React from "react";
import "./header.css";
import { Nftcard } from "../../components";
import nft from "../../assets/Beiço.jpg";
const Header = () => {
  return (
    <div className="aleVerse_header section_padding" id="home">
      <div className="aleVerse_header-content">
        <h1 className="gradient_text">
          Let's create and sell some amazing NFT'S with Aleverse{" "}
        </h1>
        <p>
          Explore a large library of nfts from Alexandre buy some and have them
          for ur life, edit them, have fun you are free to do whatever you want
          with them, click below on the explore button to see more
        </p>
        <div className="aleVerse_header-content_input">
          {/*<input type="email" placeholder="Your Email"></input>*/}
          <button type="button">Explore</button>
        </div>
        <div className="aleVerse_header-content_people">
          {/*<img src="" alt=""></img>*/}
          <p>More than 1,000 people had explored in last 24hours</p>
        </div>
      </div>
      <div className="aleVerse_header-card">
        <Nftcard
          image={nft}
          nftname="Deliciosas apresentações"
          text="Louquinho mordendo os beiços por apresentações"
          price="1 ETH"
          countdown="3 days"
          author="Rayzor"
        />
      </div>
    </div>
  );
};

export default Header;
