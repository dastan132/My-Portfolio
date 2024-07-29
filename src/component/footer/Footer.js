import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

function Footer({ githubUrl, instagramUrl, linkedinUrl, facebookUrl }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const links = [
    {
      url: instagramUrl,
      backgroundColor: '#125688',
      icon: 'fa-brands fa-instagram',
    },
    {
      url: facebookUrl,
      backgroundColor: '#3B5998',
      icon: 'fa-brands fa-facebook',
    },
    { url: githubUrl, backgroundColor: '#dd4b39', icon: 'fa-brands fa-github' },
    {
      url: linkedinUrl,
      backgroundColor: '#bb0000',
      icon: 'fa-brands fa-linkedin',
    },
  ]

  return (
    <>
      <div className='outter'>
        <div className='media-button'>

          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              style={{ backgroundColor: link.backgroundColor }}
              className={`link ${hoveredIndex === index ? 'move' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <div className='font'>
          <h4>
            Designed and built by Anshul Rawat. © 2024 Anshul Rawat. All rights
            reserved.
          </h4>
        </div>
      </div>
    </>
  )
}

export default Footer
