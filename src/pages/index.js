import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection';
import { homeObjOne , homeObjTwo} from '../components/InfoSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    //toggle for operning side bar
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    const navigate = useNavigate();

    const routeChange = () =>{
        navigate('/request')

    }

    const routeChange2 = () =>{
        navigate('/explore')

    }

  return (
    <>
    
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne} routing={routeChange2}/> 
        <InfoSection {...homeObjTwo} routing={routeChange}/> 
        {/* <InfoSection {...homeObjThree}/>  */}
    </>
  )
}

export default Home