import React from 'react'

import About from '../navbarPages/aboutme/About'

import Projects from '../navbarPages/project/Projects'
import HomePage from '../navbarPages/homePage/HomePage'
import Resume from '../navbarPages/resuma/Resume'
import { Route, Routes, Link } from 'react-router-dom'
import Buttons from '../button/Buttons'
import Contact from '../navbarPages/contact/Contact'
import './navBar.css'

function Navbar() {
  const buttonName = [
    {
      id: '1',
      name: 'Home',
      link: '/',
    },
    {
      id: '2',
      name: 'About',
      link: '/about',
    },
    {
      id: '3',
      name: 'Projects',
      link: '/projects',
    },

    {
      id: '5',
      name: 'Resume',
      link: '/resume',
    },
    {
      id: '6',
      name: 'Contact',
      link: '/contact',
    },
  ]
  return (
    <>
      <div className='navbar_outter'>
        <nav>
          <ul className='navbar__menu'>
            {buttonName.map((button) => (
              <li className='navbar__item' key={button.id}>
                <Link to={button.link}>
                  <Buttons buttonName={[button]} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />

        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Navbar
