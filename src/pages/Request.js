import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/index'
import RequestPage from '../components/Request/index'


const Request = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <>
       
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <RequestPage />


    </>
  )
}

export default Request