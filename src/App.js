import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navbar from './component/navBar/Navbar.js'
import Cursor from './component/cursor/Cursor.js'
import { socialprofils } from './content_option.js'
import './index.css'
import Footer from './component/footer/Footer.js'

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Cursor />
        <Footer
          githubUrl={socialprofils.github}
          instagramUrl={socialprofils.instagram}
          linkedinUrl={socialprofils.linkedin}
          facebookUrl={socialprofils.facebook}
        />
      </div>
    </>
  )
}

export default App
library.add(fab, fas, far)
