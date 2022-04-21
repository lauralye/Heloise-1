import React, {useState} from 'react'
import Navbar from '../components/Navbar/index'
import Sidebar from '../components/Sidebar/index'
import HeroSection from '../components/HeroSection';
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import svg1 from '../images/svg-1.svg'
import { images } from './DesignPage/Prodata';


import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from '../pages/DesignPage/Prodata';
// import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
  Row,
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from '../pages/DesignPage/Carousel';

export const ExploreCon = styled.div`

    background: #0c0c0c;
    display:flex;
    flex-direction: column
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    // :before{
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     background: Linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent);
    //     z-index: 2;

    // }


`
export const HomeDiv = styled.div`

      display:flex;
      vertical-align: text-top;
      flex-direction: column
      justify-content: center;
      align-items: center;
      padding: 0 30px;
      height: 750px;



`
export const HeroContent = styled.div`

    display: inline-block;
    flex-direction: column
    align-items: center;
    
    z-index: 2;
    max-width: 1200px;
    position: relative;
    padding: 35px 40px;
    margin: auto;
    

`

export const HeroH1 = styled.h1`

    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const HeroH2 = styled.h1`

    color:#171717;
    font-size: 34px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 36px;
    }
    @media screen and (max-width: 480px){
        font-size: 28px;
    }

  `
const Explore = () => {

  const [sliderRef, setSliderRef] = useState(null);

    const [isOpen, setIsOpen] = useState(false);


    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <ExploreCon>
            <HeroContent>
              <HeroH1>Planning For Your Home? or Office.</HeroH1>
            </HeroContent>
            
            <Grid container sx={{ flexGrow:2}}  spacing={10}>

            <Grid item>
                <Card sx={{ maxWidth: 350, maxHeight:375}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  
                  image={images.homeimg}
                  alt="wifi img"
                />
                <CardContent sx={{padding: 3, textAlign: "center"}}>
                  <Typography gutterBottom variant="h5" component="div" >
                   Home
                  </Typography>
                
                </CardContent>
              </CardActionArea>
              
            </Card>
            </Grid>

            <Grid item>
            <Card sx={{maxWidth: 400, maxHeight:500}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  
                  image={images.officeimg}
                  alt="wifi img"
                />
                <CardContent sx={{padding: 2, textAlign: "center"}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Office
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              
            </Card>
            </Grid>

            </Grid>
           
            {/* <HeroContent>
                <HeroH1>Explore Page Coming Soon...</HeroH1>
            </HeroContent> */}
        </ExploreCon>

              <HeroContent>
                  <HeroH2>Planning For Home WiFi. These Are What You Need</HeroH2>
                  <HeroH2> Wireless Router</HeroH2>
                  <ButtonContainer>
                      <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
                        <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
                        <FaArrowCircleRight onClick={sliderRef?.slickNext} />
                      </IconContext.Provider>
                    </ButtonContainer>
                </HeroContent>

              <HomeDiv>
                


                
                    
                    
              
                    
                <ReviewSlider {...sliderSettings} ref={setSliderRef}>
                  {data.map((el, index) => (
                    <Card sx={{ maxWidth: 350, maxHeight:600}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        
                        image={el.image}
                        alt="routerimg"
                      />
                      <CardContent sx={{padding: 3, textAlign: "center"}}>
                        <Typography gutterBottom variant="h5" component="div" >
                        {el.title}
                        </Typography>
                        </CardContent>
                        <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {el.description}
                        </Typography>
                      
                      </CardContent>
                    </CardActionArea>
                    
                  </Card>
                  ))}
                </ReviewSlider>

               








              </HomeDiv>
            




        <Grid container>
     

    <Card sx={{ marginLeft:10,marginTop: 10,maxWidth: 400, maxHeight:600}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          
          image={svg1}
          alt="wifi img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Wi-Fi Deployment Plan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Take the Wi-Fi quiz now and you will get the suitable deployment plan suggestions
            based on your conditions and criteria regarding premises, hardware, and more
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Plan Now
        </Button>
      </CardActions>
    </Card>
    </Grid>
    
    </>

  )
}

export default Explore