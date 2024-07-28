import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from '../navbarPages/aboutme/About';
import Projects from '../navbarPages/project/Projects';
import HomePage from '../navbarPages/homePage/HomePage';
import Resume from '../navbarPages/resuma/Resume';
import Contact from '../navbarPages/contact/Contact';
import Buttons from '../button/Buttons';
import DarkMode from '../darkMode/DarkMode';
import './navBar.css';
import './navBar.css';

function Navbar() {
  const location = useLocation();
  const buttonName = [
    { id: '1', name: 'Home', link: '/' },
    { id: '2', name: 'About', link: '/about' },
    { id: '3', name: 'Projects', link: '/projects' },
    { id: '5', name: 'Resume', link: '/resume' },
    { id: '6', name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <div className="navbar_outter">
        <nav>
          <ul className="navbar__menu">
            {buttonName.map((button) => (
              <li className="navbar__item" key={button.id}>
                <Link to={button.link}>
                  <Buttons buttonName={[button]} />
                </Link>
              </li>
            ))}
            <DarkMode />
          </ul>
        </nav>
      </div>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={600}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Navbar;
