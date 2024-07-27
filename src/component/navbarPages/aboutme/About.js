import React from 'react'
import Animation from '../animation/Animation'
import './about.css'
import TextSpan from '../../TextSpan'

function About() {
  const sentance1 = 'About_me'.split('')

  return (
    <>
      <div className='animation-container'>
        <Animation position='left' />
        <div className='about-outter'>
          <div className='about-profile-card'>
            <div className='about-text-data'>
              <div className='name'>
                {sentance1.map((letter, index) => (
                  <TextSpan key={index}>
                    <span>{letter === '' ? '\u00A0' : letter}</span>
                  </TextSpan>
                ))}
              </div>
              <h3>
                I am Anshul Rawat, a passionate Front-End Developer dedicated to
                creating visually stunning and highly functional web
                applications. With a strong background in modern web
                technologies, I excel in crafting user interfaces that are both
                engaging and intuitive. My journey in front-end development
                began with a curiosity for how websites work and a desire to
                bring creative ideas to life on the web. Over the years, I've
                honed my skills in HTML, CSS, JavaScript, and frameworks like
                React to build responsive, dynamic, and accessible websites.
              </h3>
              <div className='what-i-do'>
                <h2>What I Do</h2>
                <ul>
                  <li>
                    <strong>Web Development:</strong> I specialize in building
                    responsive web applications using HTML5, CSS3, and
                    JavaScript. I ensure that my code is clean, efficient, and
                    maintainable.
                  </li>
                  <li>
                    <strong>React Development:</strong> React is my framework of
                    choice for creating dynamic and interactive user interfaces.
                    I have experience with state management libraries like Redux
                    and Context API to build scalable applications.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> I have a keen eye for design
                    and a strong understanding of user experience principles. I
                    strive to create interfaces that are not only aesthetically
                    pleasing but also user-friendly.
                  </li>
                  <li>
                    <strong>Performance Optimization:</strong> I prioritize
                    performance and accessibility in my projects, utilizing
                    tools and techniques to ensure fast load times and smooth
                    user experiences.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Animation position='right' />
      </div>
    </>
  )
}

export default About
