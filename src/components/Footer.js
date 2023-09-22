import React from 'react';
import './Footer.css'
import myImage from './Images/fm.jpg';
import linkedin from './Images/linkedin.png'
import instagram from './Images/instagram.png'
import github from './Images/github.png'
import twitter from './Images/twitter.png'

const Footer = () => {
  const size={
    height:'30px',
    width:'30px'
  };
  return (
    <>
      <div class="container-fluid" id="reach_div">
            <div class="row" id="rachdiv">
                <div class="col-lg-6  mb-12">
                <img id='myimg' src={myImage} alt="My Image" />
                </div>
                <div class="col-lg-6  mb-12" id="reachhead" >
                    <h1 id="reachout">Reach Out</h1>
                    <h1 id="name">Kashif Ali</h1>
                    <h3 id="gmail">KashifAli@gmail.com</h3>
                    <h3 id="number">+923245521001</h3>
                    <a id="cv" href="img/Abu%20Bakar%20Siddique%20CV%20Resume.pdf" target="_blank">Click Here to See CV</a>
                    <h3 id="contactme">CONNECT WITH ME</h3>
                    <a href="https://www.linkedin.com/" target="_blank"><img   src={linkedin} style={size} alt="Linkdin" id="Linkdin"/></a>
                    <a href="https://www.instagram.com//" target="_blank"><img style={size} src={instagram} alt="Instagram" id="Instagram"/></a>
                    <a href="https://github.com/" target="_blank"><img style={size} src={github} alt="Github" id="Github"/></a>
                    <a href="https://twitter.com/"><img style={size} src={twitter} alt="Twitter" id="Twitter"/></a>
                </div>
            </div>
        </div>
    </>
  );
};

export default Footer;