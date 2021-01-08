import React from 'react';
import './Sponsors.css';
import SponsorLogo from './SponsorLogo';
import ncr from './images/sponsorlogos/NCR.png';
import digitalOcean from './images/sponsorlogos/DigitalOcean.svg';
import stickerMule from './images/sponsorlogos/stickermule.svg';
import echoAR from './images/sponsorlogos/echoAR.png';
import entreProg from './images/sponsorlogos/ENTR.png';
import equifax from './images/sponsorlogos/equifax.png';
import statefarm from './images/sponsorlogos/statefarm.png';
import uga from './images/sponsorlogos/uga-combo.png';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';

// const CustomButton = withStyles({
//   root: {
//     backgroundColor: '#fafafa',
//     paddingLeft: '55px',
//     paddingRight: '55px',
//     fontWeight: 600,
//     fontSize: '1.1em',
//     fontFamily: 'Poppins',
//     borderRadius: '50px',
//     marginTop: '25px',
//     maxWidth: '500px',
//     width: '75vw',
//     '@media (max-width:480px)': {
//       width: '100%',
//       fontSize: '1em',
//       paddingRight: '10px',
//       paddingLeft: '10px',
//     }
//   }
// })(Button);

function Sponsors(props) {
  return (
    <section className='section sponsors-section' id="sponsors">
      <div className="sponsors-container">
        <h2>Sponsors</h2>
        <SponsorLogo image={ncr} alt="NCR logo" tier="mansion" link="https://www.ncr.com/" />
        <div className="logo-container">
          <SponsorLogo image={statefarm} alt="StateFarm" tier="penthouse" link="https://www.statefarm.com/about-us" />
          <SponsorLogo image={equifax} alt="Equifax" tier="penthouse" link="https://www.equifax.com/personal/" />
          <SponsorLogo image={entreProg} alt="UGA Entrepreneurship Program" tier="apartment" link="https://www.terry.uga.edu/academics/entrepreneurship/index.php" />
          <SponsorLogo id="ugacombologo" image={uga} alt="UGA Department of Computer Science, Parents Leadership Council, Resident Hall Association, Student Government Association" tier="apartment" link="https://www.cs.uga.edu/" />
        </div>
        <h2>Partners</h2>
        <div className="logo-container">
          <SponsorLogo image={digitalOcean} alt="Digital Ocean logo" tier="partner" link="https://www.digitalocean.com/" />
          <SponsorLogo image={echoAR} alt="echoAR Logo" tier="partner" link="https://www.echoar.xyz/" />
          <SponsorLogo image={stickerMule} alt="StickerMule" tier="partner" link="https://hackp.ac/mlh-stickermule-hackathons" />
        </div>
        <p><i>This event is supported in part by the President's Venture Fund through the generous gifts of University of Georgia donors.</i></p>
      </div>
    </section>
  );
  // return (
  //   <section className='section sponsors-section' id="sponsors">
  //     <div className="sponsors-container">
  //       <div className="packet-text">
  //         <h2>Interested in sponsoring us?</h2>
  //         <p>By sponsoring UGAHacks, your company will have the opportunity to inspire new programmers while also reaching
  //         out to and recruiting the rising stars of the tech industry.</p>
  //         <CustomButton variant="contained" size="large" href="https://www.ugahacks.com/sponsorship-packet">See Our Sponsorship Packet</CustomButton>
  //         <br></br>
  //         <CustomButton variant="contained" size="large" href="mailto:sponsor@ugahacks.com">Contact our sponsorship team</CustomButton>
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default Sponsors;
