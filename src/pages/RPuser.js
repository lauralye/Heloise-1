
import React, {createContext, useEffect, useState} from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { UserPool, AdminPool} from '../components/Signin/userpool';
import {Navigate, Route, Routes} from 'react-router-dom'


const RPuser = () => {

    // const { getSession, logout} = useContext(AccountContext);

    // const [status, setStatus] = useState(false);
  //   useEffect(()=>{
  //     getSession()
  //     .then(session =>{
  //         console.log('Session:', session);
  //         setStatus(true);
  //     })


  // });
//   const [status, setStatus] = useState(false);
//   useEffect(()=>{
//     getSession()
//     .then(session =>{
//         console.log('Session:', session);
//         setStatus(true);
//     })


// });
const [logoutdirect, setLogoutdirect] =useState(false);


  const getSession = async () => await new Promise((resolve, reject) =>{

    const user = UserPool.getCurrentUser();
    if(user){
        user.getSession((err, session)=>{
            if(err){
                reject();
            }else{
                resolve(session);
            }
        });
    }else{
        reject();
    }
})

const logout = () =>{
  const user = UserPool.getCurrentUser();
  if(user){
      user.signOut();
      console.log("user logged out!")
      setLogoutdirect(true)
  }

}

// if(!status){
//   return <Navigate to='/login'/>
// }

  return (
    
    <div>
        <h1>Main Page for RP after logged In</h1>
        <button onClick={logout}>Logout</button>
        {logoutdirect ? <Navigate to='/login'/> : null}
    </div>
  
  )
}

export default RPuser