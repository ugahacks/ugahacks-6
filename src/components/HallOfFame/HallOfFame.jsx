import React from 'react';
import './HallOfFame.css';

import MediaCard from './MediaCard.jsx';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import team_wand from "./media/wand.png"



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    2400: { items: 5 },
    3400: { items: 6 },
};

const overall_items = [
  <MediaCard 
    teamImage={team_wand} 
    placement="[UGAHacks] 1st" 
    teamName="Reading Buddy" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[UGAHacks] 2nd" 
    teamName="AstroDog" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[UGAHacks] 3rd" 
    teamName="Luxstra" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Byte Fan Art] 1st" 
    teamName="Danielle Mawson" 
    link="https://gooogle.com"
    buttonText="See Artwork"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Byte Fan Art] 2nd" 
    teamName="Lauren Lin" 
    link="https://gooogle.com"
    buttonText="See Artwork"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="Best Octocat Drawing" 
    teamName="@ThePigOverlord" 
    link="https://gooogle.com"
    buttonText="See Tweet"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="Best Domain" 
    teamName="m4cro.space" 
    link="https://m4cro.space"
    buttonText="Go to Wesbite"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="Best Solo Hack" 
    teamName="Reading Buddy" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="Best First Time Hacker" 
    teamName="Sign Assist" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Digi Key] 1st" 
    teamName="Sign Assist" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Digi Key] 2nd" 
    teamName="AstroDog" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="Best Hardware Track" 
    teamName="AstroDog" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Best Meal] 1st" 
    teamName="Anita Yep" 
    link="https://gooogle.com"
    buttonText="See Meal"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Best Meal] 2nd" 
    teamName="Ngan Tran" 
    link="https://gooogle.com"
    buttonText="See Meal"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Best Meal] 3rd" 
    teamName="Deeksha Koya" 
    link="https://gooogle.com"
    buttonText="See Meal"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Best Workspace] 1st" 
    teamName="Rachel Moan" 
    link="https://gooogle.com"
    buttonText="See Workspace"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Best Workspace] 2nd" 
    teamName="Katie Park" 
    link="https://gooogle.com"
    buttonText="See Workspace"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Best Workspace] 3rd" 
    teamName="Brandon Yau" 
    link="https://gooogle.com"
    buttonText="See Workspace"
  />,
];

const category_items = [
  <MediaCard 
    teamImage={team_wand} 
    placement="[NCR] 1st" 
    teamName="InvenTrack" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[NCR] 2nd" 
    teamName="ChopChop" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[NCR] 3rd" 
    teamName="ATM-Pal" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[State Farm] 1st" 
    teamName="Luxstra" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Capital One] 1st" 
    teamName="WAND" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Capital One] 2nd" 
    teamName="WAND2" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[GCP] 1st" 
    teamName="Luxstra" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Blackrock] 1st" 
    teamName="Solvit Sustainable" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
  <MediaCard 
    teamImage={team_wand} 
    placement="[Blackrock] 2nd" 
    teamName="Landr" 
    link="https://gooogle.com"
    buttonText="See on Devpost"
  />,
];



const HallOfFame = () => {
  return (
    <section className="section hof-section" id="hof">
      <div id="HallOfFame">
        <h1 className="header">HALL OF FAME</h1>
        <h2 className="subheader">Congratulations to Our Winners!</h2>
        <div className="carousel overall-winners">
          <h3 className="title">Overall Winners</h3>
          <AliceCarousel disableButtonsControls mouseTracking responsive={responsive} items={overall_items} />
        </div>
        <div className="carousel art-winners">
          <h3 className="title">Sponsor Winners</h3>
          <AliceCarousel disableButtonsControls mouseTracking responsive={responsive} items={category_items} />
        </div>
      </div>
    </section>
  );
}


export default HallOfFame;
