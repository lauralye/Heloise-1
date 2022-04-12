import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import LogIndex from '../components/Signin/LogIndex'
import { Account } from '../components/Signin/Acconts'
import Status from '../components/Signin/Status'
import RPuser from './RPuser'


const LogIn = () => {


  return (
   <>
    <Account>   
        
        <Status/>
        <LogIndex/>
        <Route path="/rpuser" element={<Status />}>
          <Route element={<RPuser/>} />
        </Route>
        
    </Account>
   </>
  )
}

export default LogIn