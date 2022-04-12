import React, {useState} from 'react'
import {Button} from '../../ButtonElements'
import Video from '../../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper,
        ArrowForward, ArrowRight } from './HeroElements'

const HeroSectionLogin = (props) => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }



  return (
    
    <HeroContainer id="/login">
       
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            {props.children}
        </HeroContent>
        
    </HeroContainer>

  );
};
export default HeroSectionLogin;