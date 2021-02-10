import React from 'react';
import './HallOfFame.css';

import MediaCard from './MediaCard.jsx';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import team_wand from "./media/wand.png"


const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    2400: { items: 5 },
    3400: { items: 6 },
};

const items = [
  <MediaCard placement="1st Place" teamName="WAND" devpost="https://gooogle.com" />,
  <MediaCard placement="2nd Place" teamName="WAND2" devpost="https://gooogle.com" />,
  <MediaCard placement="3rd Place" teamName="WAND3" devpost="https://gooogle.com" />,
  <MediaCard />,
  <MediaCard />,
  <MediaCard />,
];

const HallOfFame = () => {
  return (
    <section className="section hof-section" id="hof">
      <div id="HallOfFame">
        <h1 className="header">HALL OF FAME</h1>
        <h2 className="subheader">Congratulations to Our Winners!</h2>
        <div className="carousel overall-winners">
          <h3 className="title">Overall Winners</h3>
          <AliceCarousel disableButtonsControls mouseTracking responsive={responsive} items={items} />
        </div>
        <div className="carousel art-winners">
          <h3 className="title">Categorey Winners</h3>
          <AliceCarousel disableButtonsControls mouseTracking responsive={responsive} items={items} />
        </div>
      </div>
    </section>
  );
}


export default HallOfFame;
