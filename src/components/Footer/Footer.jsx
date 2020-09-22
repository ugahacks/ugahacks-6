import React from 'react';
import './Footer.css';
import facebook from './images/facebook.svg';
import github from './images/github.svg';
import instagram from './images/insta.svg';
import twitter from './images/twitter.svg';
import orgsite from './images/orgsite.png';
import BugReportIcon from '@material-ui/icons/BugReport';

function Footer(props) {
  return (
        <footer>
                <a href="https://github.com/ugahacks/" target="_blank" rel="noopener noreferrer" className="footericons"><img src={github} alt="Ugahacks Github"></img></a>
                <a href="https://www.facebook.com/ugahacks/" target="_blank" rel="noopener noreferrer" className="footericons"><img src={facebook} alt="Ugahacks Facebook"></img></a>
                <a href="https://twitter.com/ugahacks" target="_blank" rel="noopener noreferrer" className="footericons"><img src={twitter} alt="Ugahacks Twitter"></img></a>
                <a href="https://www.instagram.com/ugahacks/" target="_blank" rel="noopener noreferrer" className="footericons"><img src={instagram} alt="Ugahacks Instagram"></img></a>
                <a href="https://www.ugahacks.com/" target="_blank" rel="noopener noreferrer" className="footericons"><img src={orgsite} alt="Ugahacks Organization Website"></img></a>
                <p>Spotted a <BugReportIcon></BugReportIcon>? <a href="https://github.com/ugahacks/ugahacks-6/issues/new" target="_blank" rel="noopener noreferrer">Let us know!</a></p>
                <small>Icons provided by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a></small>
        </footer>
  );
}

export default Footer;
