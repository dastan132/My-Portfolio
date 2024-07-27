import React from 'react'
import TextSpan from '../../TextSpan'
import './project.css'
import { projectLinks } from '../../../content_option'
import { Guide, Ai, Auction, AdminPanel, GitFinder } from './import'

function Projects() {
  const sentance = 'Projects'.split('')

  const handleButtonClick = (url) => {
    window.location.href = url
  }

  return (
    <div className='project-outter'>
      <div className='project-card'>
        <div className='name'>
          {sentance.map((letter, index) => {
            return (
              <TextSpan key={index}>
                <span>{letter === '' ? '\u00A0' : letter}</span>
              </TextSpan>
            )
          })}
        </div>

        <div className='project-container'>
          <div className='cards'>
            <img src={Guide} alt='Project 1' className='project-image' />
            <h1>Uttarakhand Guide</h1>
            <button
              onClick={() => handleButtonClick(`https://${projectLinks.tour}`)}
              className='button-47'
            >
              View
            </button>
          </div>
          <div className='cards'>
            <img src={Ai} alt='Project 1' className='project-image' />
            <h1>An-Open-Ai</h1>
            <button
              onClick={() => handleButtonClick(`https://${projectLinks.ai}`)}
              className='button-47'
            >
              View
            </button>
          </div>

          <div className='cards'>
            <img src={Auction} alt='Project 1' className='project-image' />
            <h1>Online Auction</h1>
            <button
              onClick={() =>
                handleButtonClick(`https://${projectLinks.auction}`)
              }
              className='button-47'
            >
              View
            </button>
          </div>

          <div className='cards'>
            <img
              src={AdminPanel}
              alt='Project 1'
              className='project-image'
            />
            <h1>Admin Panel</h1>
            <button
              onClick={() =>
                handleButtonClick(`https://${projectLinks.adminPanel}`)
              }
              className='button-47'
            >
              View
            </button>
          </div>

          <div className='cards'>
            <img
              src={GitFinder}
              alt='Project 1'
              className='project-image'
            />
            <h1>GitFinder</h1>
            <button
              onClick={() =>
                handleButtonClick(`https://${projectLinks.gitFinder}`)
              }
              className='button-47'
            >
              View
            </button>
          </div>
          {/* <div className='cards'>
            <img
              src='https://via.placeholder.com/150'
              alt='Project 1'
              className='project-image'
            />
            <h1>Project1</h1>
            <button className='button-47'>View</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
