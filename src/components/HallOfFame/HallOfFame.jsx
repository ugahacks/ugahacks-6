import React from 'react';
import './HallOfFame.css';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import team_wand from "./media/wand.png"

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    2400: { items: 5 },
    3400: { items: 6 },
};

const items = [
  <img src={team_wand} />,
  <img src={team_wand} />,
  <img src={team_wand} />,
  <img src={team_wand} />,
  <img src={team_wand} />,
  <img src={team_wand} />,
];

const HallOfFame = () => {
  return (
    <div id="HallOfFame" className="section hof-section" id="hof">
      <h1 className="header">HALL OF FAME</h1>
      <h2 className="subheader">Congratulations to Our Winners!</h2>
      <div className="carousel overall-winners">
        <h3 className="title">Overall Winners</h3>
        <AliceCarousel mouseTracking responsive={responsive} items={items} />
      </div>
      <div className="carousel art-winners">
        <h3 className="title">Categorey Winners</h3>
        <AliceCarousel mouseTracking responsive={responsive} items={items} />
      </div>
    </div>
  );
}


export default HallOfFame;
