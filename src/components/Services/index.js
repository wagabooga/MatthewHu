import React from 'react'
import onlinespotifyclientImg from '../../images/onlinespotifyclient.png'
import SpotterImg from '../../images/Spotter-mobile.png'
import SchedulerImg from '../../images/Scheduler-main.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="projects">
      <ServicesH1> My Projects </ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={(e) => { e.preventDefault(); window.location = "https://onlinespotifyclient.vercel.app/";}} >
          <ServicesIcon src={onlinespotifyclientImg}  />
          <ServicesH2>Online-spotify-client</ServicesH2>
          <ServicesP>Similar to Spotify open, Log in with spotify and start browsing and playing your Spotify playlists!</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={(e) => { e.preventDefault(); window.location = "https://hardcore-wilson-719e0a.netlify.app/";}} >
          <ServicesIcon src={SchedulerImg}/>
          <ServicesH2>Scheduler</ServicesH2>
          <ServicesP>Simple CRUD app where you can schedule interviews. (Remote database via Heroku! Wait 30s and refresh if blank)</ServicesP>
        </ServicesCard>
        <ServicesCard onClick={(e) => { e.preventDefault(); window.location = "https://github.com/wagabooga/Spotter"; e.preventDefault();}} >
          <ServicesIcon src={SpotterImg}/>
          <ServicesH2>Spotter</ServicesH2>
          <ServicesP>Social-media app that combines Twitter and Spotify</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
