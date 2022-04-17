

import './App.css';
import Navbar from './components/Navbar/index' 
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {Router, Route, Routes} from 'react-router-dom'

// import Sidebar from './components/Sidebar'
//Import Pages

import Home from './pages';
import SignUp from './pages/signUp';
import LogIn from './pages/signin';  //careful of the naming component name with filename confuse lol
import RPuser from './pages/RPuser'
import Status from './components/Signin/Status'
import  {Account}  from './components/Signin/Acconts';
import Admin from './pages/Admin';

import Explore from './pages/Explore';
import AccountReq from './pages/AccountReq';



Amplify.configure(awsExports);


function App() {
  return (
   
   
       
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} /> {/*probably need special or hosting other server or have sub domain group name*/}
        <Route path="/login/*" element={<LogIn/>} />
        <Route path="/explore" element={<Explore/>} />

        <Route path="/request" element={<AccountReq/>} />
       
        <Route path="/rpuser" element={<RPuser/>} />
        <Route path="/admin" element={<Admin/>} />
       


         
      </Routes>
      
    
   
   
  );
}

export default App;
