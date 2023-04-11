import { Avatar } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';
import React from 'react';

function About() {
  return (
    <div
      style={{ height: '100vh' }}
      id='About'
      className='container'>
      <div className='aboutHeaderContainer'>
        <h1 className='aboutHeader'>About Me</h1>
      </div>
      <p className='aboutText'>
        I&apos;m Kevin Xu, a junior software engineer with experience in
        HTML/CSS/JavaScript, Node.js/Express.js, React, Java/Python, RESTful
        API, MySql/MongoDB, and Apollo/GraphQL. I recently completed a Full
        Stack Developer Bootcamp at UC Berkeley Extension and hold a Bachelor of
        Science in Health Sciences with minors in Computer Science from the
        University of Miami. In addition to my technical skills, I have
        experience in leadership and teamwork roles as a Scribe/Ambassador for
        Scribe America and a Homecoming Vice Chair/Committee Member at the
        University of Miami. I&apos;m passionate about working in the tech
        industry and have completed various projects, such as a weather
        application, a chat application, a blog site, and a CLI. Feel free to
        check out my work on GitHub or you can contact me using the buttons
        below!
      </p>

      <Avatar
        sx={{ width: 250, height: 250 }}
        style={{ position: 'absolute', top: '130%', right: '10%' }}
        src={ProfilePic}></Avatar>
    </div>
  );
}

export default About;
