import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who is Cristian Acevedo?</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
      <p>
        Born and raised in San Juan, Puerto Rico and moved to Orlando Florida at the age of 12.  
        As a kid, Cristian was always interested in computer technology and what were making the computers work.  For 2 years, Cristian attended 
        Valencia College doing a major in Computer Programming Analysis. The first taste in computer programming was displaying 
        "hello world" on Android Gingerbread, and since that day, Cristian started creating other applications with iOS and JAVA (Uploading soon 
        those projects on my Github Account stay tune).  Currently, Cristian is attending at UCF and he is starting to tackle doing websites on the side (Like this one), 
        There is more projects he is doing on the side, please visit the Github <a href="https://github.com/cacevedo2011">page</a> 
      </p>
      </div>
    </section>
  )
}

export default About