import React from 'react';
import profileImage from "../../assets/profile.jpg";
import { Media, Image } from 'react-bootstrap';



function About() {
  return (
    <Media>
      <Image
        id="photo"
        className="align-self-center mr-3"
        src={profileImage} fluid
        alt="Cristian Acevedo profile image" />

      <Media.Body>
        <h2 class="section-title">About Me</h2>
        <p>
        Born and raised in San Juan, Puerto Rico and moved to Orlando Florida at the age of 12.  
        As a kid, Cristian was always interested in computer technology and what were making the computers work.  For 2 years, Cristian attended 
        Valencia College doing a major in Computer Programming Analysis. The first taste in computer programming was displaying 
        "hello world" on Android Gingerbread, and since that day, Cristian started creating other applications with iOS and JAVA (Uploading soon 
        those projects on my Github Account stay tune).  Currently, Cristian is attending at UCF and he is starting to tackle doing websites on the side (Like this one), 
        There is more projects he is doing on the side, please visit the Github <a href="https://github.com/cacevedo2011">page</a> 
        </p>
      </Media.Body>
    </Media>
  );
}

export default About