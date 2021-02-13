import React from 'react';
import './HallOfFame.css';

import MediaCard from './MediaCard.jsx';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import team_wand from "./media/wand.png"
import reading_buddy from "./media/reading_buddy.png";
import astrodog from "./media/astrodog.png";
import luxstra from "./media/luxstra.png";
import octocat from "./media/octocat.png";
import macro from "./media/macro.png";
import sign_assist from "./media/sign_assist.png";
import inventrack from "./media/inventrack.png";
import chopchop from "./media/chopchop.png";
import atm_pal from "./media/atm_pal.png";
import landr from "./media/landr.png";
import solvit_sus from "./media/solvit_sus.png";
import oz from "./media/oz.png";
import magic from "./media/magic.png";
import food_1 from "./media/food_1.png";
import food_2 from "./media/food_2.png";
import food_3 from "./media/food_3.png";
import workspace_1 from "./media/workspace_1.png";
import workspace_2 from "./media/workspace_2.png";
import workspace_3 from "./media/workspace_3.png";




const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    2400: { items: 6},
    2800: { items: 8 },
    3400: { items: 10 },
};

const overall_items = [
  <MediaCard
    teamImage={reading_buddy}
    placement="[UGAHacks] 1st"
    teamName="Reading Buddy"
    link="https://devpost.com/software/reading-buddy-0idbug"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="[UGAHacks] 2nd"
    teamName="AstroDog"
    link="https://devpost.com/software/astrodog"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[UGAHacks] 3rd"
    teamName="Luxstra"
    link="https://devpost.com/software/luxstra"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={oz}
    placement="[Art Contest] 1st"
    teamName="Danielle Mawson"
    link="https://gooogle.com"
    buttonText="See Artwork"
  />,
  <MediaCard
    teamImage={magic}
    placement="[Art Contest] 2nd"
    teamName="Lauren Lin"
    link="https://gooogle.com"
    buttonText="See Artwork"
  />,
  <MediaCard
    teamImage={octocat}
    placement="Best Octocat Drawing"
    teamName="@ThePigOverlord"
    link="https://twitter.com/ThePigOverlord/status/1357845688743124993?s=20"
    buttonText="See Tweet"
  />,
  <MediaCard
    teamImage={macro}
    placement="Best Domain"
    teamName="m4cro.space"
    link="https://m4cro.space"
    buttonText="Go to Wesbite"
  />,
  <MediaCard
    teamImage={reading_buddy}
    placement="Best Solo Hack"
    teamName="Reading Buddy"
    link="https://devpost.com/software/reading-buddy-0idbug"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={sign_assist}
    placement="Best First Time Hacker"
    teamName="Sign Assist"
    link="https://devpost.com/software/sign-assist"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={sign_assist}
    placement="[Digi Key] 1st"
    teamName="Sign Assist"
    link="https://devpost.com/software/sign-assist"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="[Digi Key] 2nd"
    teamName="AstroDog"
    link="https://devpost.com/software/astrodog"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="Best Hardware Track"
    teamName="AstroDog"
    link="https://devpost.com/software/astrodog"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={food_1}
    placement="[Best Meal] 1st"
    teamName="Anita Yep"
    link="https://gooogle.com"
    buttonText="See Meal"
  />,
  <MediaCard
    teamImage={food_2}
    placement="[Best Meal] 2nd"
    teamName="Ngan Tran"
    link="https://gooogle.com"
    buttonText="See Meal"
  />,
  <MediaCard
    teamImage={food_3}
    placement="[Best Meal] 3rd"
    teamName="Deeksha Koya"
    link="https://gooogle.com"
    buttonText="See Meal"
  />,
  <MediaCard
    teamImage={workspace_1}
    placement="[Best Workspace] 1st"
    teamName="Rachel Moan"
    link="https://gooogle.com"
    buttonText="See Workspace"
  />,
  <MediaCard
    teamImage={workspace_2}
    placement="[Best Workspace] 2nd"
    teamName="Katie Park"
    link="https://gooogle.com"
    buttonText="See Workspace"
  />,
  <MediaCard
    teamImage={workspace_3}
    placement="[Best Workspace] 3rd"
    teamName="Brandon Yau"
    link="https://gooogle.com"
    buttonText="See Workspace"
  />,
];

const category_items = [
  <MediaCard
    teamImage={inventrack}
    placement="[NCR] 1st"
    teamName="InvenTrack"
    link="https://devpost.com/software/inventrack"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={chopchop}
    placement="[NCR] 2nd"
    teamName="ChopChop"
    link="https://devpost.com/software/chopchop"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[NCR] 3rd"
    teamName="ATM-Pal"
    link="https://devpost.com/software/atm-pal"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[State Farm] 1st"
    teamName="Luxstra"
    link="https://devpost.com/software/luxstra"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[Capital One] 1st"
    teamName="ATM Pal"
    link="https://devpost.com/software/atm-pal"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[GCP] 1st"
    teamName="Luxstra"
    link="https://devpost.com/software/luxstra"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={landr}
    placement="[BlackRock] 1st"
    teamName="Landr"
    link="https://devpost.com/software/landr"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={solvit_sus}
    placement="[BlackRock] 2nd"
    teamName="Solvit Sustainable"
    link="https://devpost.com/software/solvit-eja01g"
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
