import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/index'

import Req from '../components/Request/index'


const AccountReq = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <>
       
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Req />


    </>
  )
}

export default AccountReq