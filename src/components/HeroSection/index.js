import React, {useState} from 'react'
import {Button} from '../ButtonElements'
// import Video from '../../videos/video.mp4'

import {Video} from '../../Data/mul'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper,
        ArrowForward, ArrowRight } from './HeroElements'

// import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }


    // useEffect(() => {

    //     const file = await Storage.get("video.mp4", {
    //         level: "public"
    //     });
    
     
        
    // }, )
    
   
    

  return (
    
    <HeroContainer id="home">
       
        <HeroBg>
        <VideoBg autoPlay loop muted src={Video.backgroundvid} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Wi-Fi Planning Made Easy</HeroH1>
            <HeroP>Explore and Configure Today</HeroP>
        <HeroBtnWrapper>
            <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                Get Started {hover? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
        
    </HeroContainer>

  );
};
export default HeroSection;