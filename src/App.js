

import './App.css';
import Navbar from './components/Navbar/index' 
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// import Sidebar from './components/Sidebar'
//Import Pages

import Home from './pages';
import SignUp from './pages/signUp';
import LogIn from './pages/signin';  //careful of the naming component name with filename confuse lol
import RPuser from './pages/RPuser'
import Status from './components/Signin/Status'
import  {Account}  from './components/Signin/Acconts';
import Admin from './pages/Admin';
import Request from './pages/Request';


Amplify.configure(awsExports);


function App() {
  return (
   
    <Router>
       
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} /> {/*probably need special or hosting other server or have sub domain group name*/}
        <Route path="/login/*" element={<LogIn/>} />
       
       
        <Route path="/rpuser" element={<RPuser/>} />
        <Route path="/admin" element={<Admin/>} />
         <Route path="/request" element={<Request/>} />


         
      </Routes>
      
    
    </Router>
   
  );
}

export default App;
