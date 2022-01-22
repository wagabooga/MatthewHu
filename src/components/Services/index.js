import React from 'react'
import BlpImg from '../../images/BLP-main.jpeg'
import SpotterImg from '../../images/Spotter-mobile.png'
import SchedulerImg from '../../images/Scheduler-main.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  let redirectScheduler = function () {
    window.location.replace("https://hardcore-wilson-719e0a.netlify.app/")
  }

  let redirectSpotter = function () {
    window.location.replace("https://github.com/wagabooga/Spotter")
  }
  let redirectBLP = function () {
    window.location.replace("https://github.com/wagabooga/Bucket-List-Project")
  }

  return (
    <ServicesContainer id="projects">
      <ServicesH1> My Projects </ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={redirectBLP} >
          <ServicesIcon src={BlpImg}  />
          <ServicesH2>Bucket-List-Project</ServicesH2>
          <ServicesP>Currently a work in progress! Come back soon!</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={redirectScheduler}>
          <ServicesIcon src={SchedulerImg}/>
          <ServicesH2>Scheduler</ServicesH2>
          <ServicesP>Simple CRUD app where you can schedule interviews</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={redirectSpotter}>
          <ServicesIcon src={SpotterImg}/>
          <ServicesH2>Spotter</ServicesH2>
          <ServicesP>Social-media app that combines Twitter and Spotify</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
