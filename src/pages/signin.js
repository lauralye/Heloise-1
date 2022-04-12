import React , {useState} from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import LogIndex from '../components/Signin/LogIndex'
import { Account } from '../components/Signin/Acconts'
import Status from '../components/Signin/Status'
import RPuser from './RPuser'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionLogin from '../components/Signin/HeroLogin'


const LogIn = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggle = () =>{
      setIsOpen(!isOpen)
  }


  return (
   <>
    <Account>   
       <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>

        <HeroSectionLogin>
          <Status/>
         <LogIndex/>
        </HeroSectionLogin>

{/* //keeps on looping the status probably */}
        


        
       
        {/* <Route path="/rpuser" element={<Status />}>
          <Route element={<RPuser/>} />
        </Route> */}
        
    </Account>
   </>
  )
}

export default LogIn