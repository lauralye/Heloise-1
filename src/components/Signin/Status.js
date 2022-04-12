import React, {useState, useContext, useEffect} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { AccountContext, Account } from './Acconts'
import RPuser from '../../pages/RPuser'
import LogIn from './LogIndex'
import ProtectedRoutes from './ProtectedRoutes'

const Status = () =>{

    const [status, setStatus] = useState(false);
    const { getSession, logout} = useContext(AccountContext);

    useEffect(()=>{
        getSession()
        .then(session =>{
            console.log('Session:', session);
            setStatus(true);
        })


    });

    if(!status){
        return <h1>NOt Log in </h1>
    }
    
    return status


    
    
}

export default Status;
   




// if(!status){

    //     return <Navigate to="/rpuser" />;
    // }

    // return <Route {...props} />

// return(
    //     <div>
    //         <h1>  {status ? (<div>Your are logged in.<button
    //         onClick={logout}>Logout</button></div>): 'Please login below'}</h1>
          
    //     </div>
    // );


    // return(
    //     <AccountContext.Provider value={{

    //          getSession, logout
    //     }}>
    //     <div>
    //         <h1>  {status ? <RPuser/> : <Routes><Route path="/login/*" element={<LogIn/>} /></Routes>   }</h1>
          
    //     </div>
    //     </AccountContext.Provider>
    // );
    

    // if(!status){
    //     return <Routes><Route path="/signin" element={LogIn}/></Routes>
    // }

    // return <Account><Navigate to="/rpuser"/></Account>; 