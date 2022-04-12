
import React, {useState, useContext, useEffect} from 'react'
import { Account, AccountContext } from '../components/Signin/Acconts'

const RPuser = () => {

    const { getSession, logout} = useContext(AccountContext);

    const [status, setStatus] = useState(false);
  //   useEffect(()=>{
  //     getSession()
  //     .then(session =>{
  //         console.log('Session:', session);
  //         setStatus(true);
  //     })


  // });

  return (
    
    <div>
        <h1>Main Page for RP after logged In</h1>
        <button onClick={logout}>Logout</button>
    </div>
  
  )
}

export default RPuser