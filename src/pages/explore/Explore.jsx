import React from "react";
import { Navbar } from "../../components";
import { useState, useEffect } from "react";
import { api } from "../../api/index";
import { Nftcard } from "../../components";
import "./explore.css"
const Explore = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    async function fetchNfts() {
      try {
        const response = await api.get("/create/all-nfts");
        setNfts([...response.data]);
      } catch (error) {}
    }
    fetchNfts();
  }, []);


  return (
    <>
      <div className="gradient_bg">
        <Navbar />
        <div className="Cards">
          {nfts.map((currentGoal) => {
            return (
              <Nftcard 
                image={currentGoal.nftPicture}
                nftname={currentGoal.title}
                text={currentGoal.text}
                price={currentGoal.price}
                author="Rayzor"
              />
            );
          })}
        </div>
        </div>
    </>
  );
};

export default Explore;
