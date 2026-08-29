import { Avatar } from '@mui/material';
import ProfilePic from '../../src/Assets/images/ProfilePic.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

const bioParagraphs = [
  "I am a driven and innovative junior software engineer currently pursuing a Master's degree in Computer Science at Northeastern University. My background includes a Bachelor of Science in Health Sciences with a minor in Computer Science from the University of Miami and a Full Stack Development Certificate from the University of California, Berkeley.",
  'With a solid foundation in HTML/CSS, JavaScript/TypeScript, Node.js, React, Java, Python, and database management using MySQL and MongoDB, I excel in developing full-stack applications. I am proficient in RESTful API design and have experience with modern technologies such as Apollo/GraphQL.',
  'My projects range from a fitness tracking mobile app leveraging Android Studio to an AI agent for playing complex games using Python and Pytorch. These experiences highlight my ability to combine deep technical skills with user-centric design.',
  'In addition to technical expertise, I bring strong leadership and teamwork skills, honed through roles such as a Homecoming Vice Chair at the University of Miami and a Scribe/Ambassador at Scribe America. My passion for technology drives me to continuously learn and contribute to the tech industry.',
  'Feel free to explore my projects on GitHub or connect with me on LinkedIn.',
];

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

      <div
        className='aboutText'
        style={{
          width: isMdScreen ? '80vw' : '60%',
          height: 'auto',
          lineHeight: 1.6,
          textAlign: 'justify',
          padding: '20px',
        }}>
        {bioParagraphs.map((text, i) => (
          <p key={i} style={{ marginBottom: '1em' }}>
            {text}
          </p>
        ))}
      </div>

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
