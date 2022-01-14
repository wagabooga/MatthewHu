import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="work">
      <ServicesH1> Our Services </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Lorem Ipsum</ServicesH2>
          <ServicesP>Lorem Ipsum Asd Greek Something Idk but Temp Text!!1</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Lorem Ipsum2</ServicesH2>
          <ServicesP>Lorem Ipsum Asd Greek Something Idk but Temp Text!!2</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Lorem Ipsum3</ServicesH2>
          <ServicesP>Lorem Ipsum Asd Greek Something Idk but Temp Text!!3</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
