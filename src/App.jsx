import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactsUs from './components/ContactsUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
   
     const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')

  return (
    <div className='dark:bg-black'>
      <Toaster/>
      <Navbar  theme={theme} settheme={settheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactsUs/>
      <Footer theme={theme} />
    </div>
  )
}

export default App