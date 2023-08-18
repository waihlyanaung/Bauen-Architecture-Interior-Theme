// import React from 'react'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Blog from './Blog'
import Contact from './Contact'
import Footer from '../components/Footer'
import ScrollBtn from '../components/ScrollBtn'

const Path = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Portfolio/>
      <Services/>
      <Blog/>
      <Contact/>
      <Footer/>
      <ScrollBtn/>
    </div>
  )
}

export default Path
