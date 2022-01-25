import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Matthew Who?
        </HeroH1>
        <HeroP>
        Welcome! I enjoy designing creating, and launching my own personal web projects.
        I began coding by creating text-based games in Python, but now mostly focus on building web ideas to life.
        </HeroP>
        <HeroP>
        I also have been following my ABC's (always be coding) and am seeking full-time employment as a developer.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
