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

export const ExploreCon = styled.div`

    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: Linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent);
        z-index: 2;

    }


`

export const HeroContent = styled.div`

    display: inline-block;
    flex-direction: column
    align-items: center;
    
    z-index: 5;
    max-width: 1200px;
    position: absolute;
    padding: 50px 50px;
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
const Explore = () => {


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
                <HeroH1>Explore Page Coming Soon...</HeroH1>
            </HeroContent>
        </ExploreCon>

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