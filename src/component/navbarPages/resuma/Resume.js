import React from 'react'

import './resume.css'
import TextSpan from '../../TextSpan'

function Resume() {
  const sentance = 'Resume'.split('')

  const education = [
    {
      institution: 'GRD INSTITUTE OF MANAGEMENT AND TECHNOLOGY UTTARAKHAND',
      degree:
        'Bachelor of Technology, Major in Computer Science and Engineering ',
      year: '2018 - 2021',
    },
    {
      institution: 'GOVERNMENT POLYTECHNIC PITTHUWALA UTTARAKHAND',
      degree: 'Diploma in Engineering',
      year: '2015 - 2018',
    },
  ]

  const experience = [
    {
      company: 'Newtown Technologies Pvt. Ltd',
      role: 'Front-End Developer',
      year: 'July2022-May2023',
      description:
        'Developed and maintained the front end of various web applications using React.js and other technologies.',
    },
    {
      company: 'Phiof Services Pvt. Ltd.',
      role: 'Front-End Developer',
      year: 'Jan2022 - Jun2022',
      description:
        'Assisted in the development of web applications and learned about industry best practices.',
    },
  ]

  const skills = ['JavaScript', 'React', 'CSS', 'HTML5', 'Git', 'TypeScript', 'BootStrap']
  return (
    <div className='resume-outter'>
      <div className='resume-profile-card'>
        <div className='resume-text-data'>
          <div className='name'>
            {sentance.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  <span>{letter === '' ? '\u00A0' : letter}</span>
                </TextSpan>
              )
            })}
          </div>
          <div className='resume'>
            <div className='resume-section'>
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className='resume-item'>
                  <h4>{edu.institution}</h4>
                  <p>{edu.degree}</p>
                  <p>{edu.year}</p>
                </div>
              ))}
            </div>

            <div className='resume-section'>
              <h3>Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className='resume-item'>
                  <h4>{exp.company}</h4>
                  <p>{exp.role}</p>
                  <p>{exp.year}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>

            <div className='resume-section'>
              <h3>Skills</h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume
