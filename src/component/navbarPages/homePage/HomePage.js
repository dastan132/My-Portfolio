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
            </div>
          </div>
        </div>
        <div className='home-profile-card'>
          <div className='home-text-data'>
            <h2>Welcome to My Portfolio</h2>
          </div>
        </div>
        {/* <div className='home-profile-card'>
          <div className='home-text-data'>
          </div>
        </div> */}

        <div className='home-profile-card'>
          <div className='home-text-data'>
            <h2>I'am Anshul Rawat</h2>
            <h4>
              A passionate Front-End Developer based in Dehradun, with a knack
              for creating visually appealing and highly functional web
              applications. With a solid background in modern web technologies
              and a keen eye for design, I strive to deliver exceptional user
              experiences through my work.
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
