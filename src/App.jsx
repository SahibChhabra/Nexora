import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'

const App = () => {
   
     const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')

  return (
    <div className='dark:bg-black'>
      <Navbar  theme={theme} settheme={settheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
    </div>
  )
}

export default App