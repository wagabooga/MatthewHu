import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState('')

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne }/>
      <Services />
      <InfoSection {...homeObjTwo }/>
      <Footer />
    </>
  )
}

export default Home
