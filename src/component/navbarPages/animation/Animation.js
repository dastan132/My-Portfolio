import React from 'react';
import { faLinkedin, faYoutube, faFacebook, faInstagram, faPhp, faAws, faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './animation.css';

function Animation({ position }) {
  const cubeClass = position === 'left' ? 'stage-cube-cont' : 'stage-cube-cont-1';

  return (
    <div className={cubeClass}>
      <div className='cubespinner'>
        <div className='face1'>
          <FontAwesomeIcon icon={position === 'left' ? faAngular : faLinkedin} color='#DD0031' />
        </div>
        <div className='face2'>
          <FontAwesomeIcon icon={position === 'left' ? faHtml5 : faYoutube} color='#F06529' />
        </div>
        <div className='face3'>
          <FontAwesomeIcon icon={position === 'left' ? faCss3 : faFacebook} color='#28A4D9' />
        </div>
        <div className='face4'>
          <FontAwesomeIcon icon={position === 'left' ? faReact : faInstagram} color='#5ED4F4' />
        </div>
        <div className='face5'>
          <FontAwesomeIcon icon={position === 'left' ? faJsSquare : faPhp} color='#EFD81D' />
        </div>
        <div className='face6'>
          <FontAwesomeIcon icon={position === 'left' ? faGitAlt : faAws} color='#EC4D28' />
        </div>
      </div>
    </div>
  );
}

export default Animation;
