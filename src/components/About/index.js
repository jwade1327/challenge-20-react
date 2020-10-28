import React from 'react';
!!!!! NEED TO UPDATE PIC import coverImage from '../../assets/cover/';

function About() {
    return (
        <section>
            <h2 id="about" className="section-header"> About Me </h2>
            <img src={coverImage} style= !!!!! NEED TO UPDATE>
            <p className="about-text">
                My name is Jess and I'm fairly new to Web Developing. I have been a Sign Language Interpreter since 2012.
                I have worked in various school settings working with students ranging from age 4 to age 21. I am a hard working, recently engaged, mother of 3.
                I decided to enroll at the University of Wisconsin Extended Campus-Coding Bootcamp to begin a new adventure in mine and my families' lives!
            </p>
        </section>
    )
}

export default About;