import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
  };

  const outofFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventswipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLestScreen={() => outofFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgurl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
