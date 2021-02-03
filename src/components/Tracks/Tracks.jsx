import React from "react";
import "./Tracks.css";
import Button from '@material-ui/core/Button';
import winnerByte from "./images/winnerbyte-01.png";


function Tracks(props) {

  return (
    <>
      <section className="section tracks-section" id="tracks">
        <div className="tracks-container">
          <div className="tracks-text-container">
            <h1>Tracks and Challenges</h1>
            <p>Tracks are a certain focus for our hackathon this year that will have specific mentor help, workshops, times, and special prizes if a project does align with that focus.
            Our Track this year is <b>Hardware!</b> Builder Byte is excited to see what you will build using different forms of hardware technology such as arduino kits, raspberry pis, etc!
            UGAHacks will not be providing any hardware materials this year, but you can purchase your own materials and your group may be eligible for a reimbursement from UGAHacks. More details can be found on page 14 of the pre-event guide!</p>
            <p>In addition to tracks, some sponsors will even have their own challenges geared around a specific theme/tool for hackers to participate in.
            <b> There may even be a chance to score some sweet prizes!</b></p>
            <p>Stay tuned to the opening cermony where more details will be revealed!</p>
            <Button className="show-more-black" variant="contained" size="large" id="show-more" href="/guide">Check Out Our Pre-event Guide</Button>
          </div>
          <img className="winner-byte" alt="Winner Byte" src={winnerByte}/>
        </div>
      </section>
    </>

  );
}

//             <Button className="show-more-black" variant="contained" size="large" id="show-more" href="">Read More in Our Pre-event Packet</Button>
export default Tracks;
