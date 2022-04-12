import React, {useContext, useState} from 'react'
import { Account, AccountContext } from '../components/Signin/Acconts'
const Admin = () => {


    const { getSessionAdmin, logoutAdmin} = useContext(AccountContext);

    const [statusAdmin, setStatusAdmin] = useState(false);



  return (
    
    <div>
    <h1>Main Page for Admin after logged In</h1>
    <button onClick={logoutAdmin}>Logout</button>
    </div>
  )
}

export default Admin