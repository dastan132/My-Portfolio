import React from 'react'

import './home.css'
import TextSpan from '../../TextSpan'

function HomePage() {
  const sentance = 'Hello'.split('')

  return (
    <>
      <div>
        <div className='home-outter'>
          <div className='home-profile-card'>
            <div className='home-text-data'>
              <div className='name'>
                {sentance.map((letter, index) => {
                  return (
                    <TextSpan key={index}>
                      <span>{letter === '' ? '\u00A0' : letter}</span>
                    </TextSpan>
                  )
                })}
              </div>
              <h1>Welcome to My Portfolio</h1>
              <h2>I'am Anshul Rawat</h2>

              <h3>
                A passionate Front-End Developer based in Dehradun, with a knack
                for creating visually appealing and highly functional web
                applications. With a solid background in modern web technologies
                and a keen eye for design, I strive to deliver exceptional user
                experiences through my work.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
