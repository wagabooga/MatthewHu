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
        I'm a Full-Stack Web Developer and self taught Graphic Designer. I enjoy expressing my creativity through building web applications. 
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
