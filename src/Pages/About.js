import { Avatar } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

function About() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div
      style={{ height: '100vh' }}
      id='About'
      className='container'>
      {isMdScreen ? (
        <div
          className='aboutHeaderContainer'
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'Center',
          }}>
          <h1
            className='aboutHeader'
            style={{
              position: 'absolute',
              textAlign: 'center',
              top: 'calc(110% + 40px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50%',
            }}>
            About Me
          </h1>
        </div>
      ) : (
        <div
          className='aboutHeaderContainer'
          style={{ width: '50%' }}>
          <h1
            className='aboutHeader'
            >
            About Me
          </h1>
        </div>
      )}

      {isMdScreen ? (
        <p
          className='aboutText'
          style={{ width: '80vw' }}>
          I&apos;m Kevin Xu, a junior software engineer with experience in
          HTML/CSS/JavaScript, Node.js/Express.js, React, Java/Python, RESTful
          API, MySql/MongoDB, and Apollo/GraphQL. I recently completed a Full
          Stack Developer Bootcamp at UC Berkeley Extension and hold a Bachelor
          of Science in Health Sciences with minors in Computer Science from the
          University of Miami. In addition to my technical skills, I have
          experience in leadership and teamwork roles as a Scribe/Ambassador for
          Scribe America and a Homecoming Vice Chair/Committee Member at the
          University of Miami. I&apos;m passionate about working in the tech
          industry and have completed various projects, such as a weather
          application, a chat application, a blog site, and a CLI. Feel free to
          check out my work on GitHub or you can contact me using the buttons
          below!
        </p>
      ) : (
        <p className='aboutText'>
          I&apos;m Kevin Xu, a junior software engineer with experience in
          HTML/CSS/JavaScript, Node.js/Express.js, React, Java/Python, RESTful
          API, MySql/MongoDB, and Apollo/GraphQL. I recently completed a Full
          Stack Developer Bootcamp at UC Berkeley Extension and hold a Bachelor
          of Science in Health Sciences with minors in Computer Science from the
          University of Miami. In addition to my technical skills, I have
          experience in leadership and teamwork roles as a Scribe/Ambassador for
          Scribe America and a Homecoming Vice Chair/Committee Member at the
          University of Miami. I&apos;m passionate about working in the tech
          industry and have completed various projects, such as a weather
          application, a chat application, a blog site, and a CLI. Feel free to
          check out my work on GitHub or you can contact me using the buttons
          below!
        </p>
      )}

      {isMdScreen ? (
        <Avatar
          sx={{ width: 150, height: 150 }}
          style={{
            position: 'absolute',
            top: '115%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          src={ProfilePic}></Avatar>
      ) : (
        <Avatar
          sx={{ width: 250, height: 250 }}
          style={{ position: 'absolute', top: '130%', right: '10%' }}
          src={ProfilePic}></Avatar>
      )}
    </div>
  );
}

export default About;
