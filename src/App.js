

import './App.css';
import Navbar from './components/Navbar/index' 
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Sidebar from './components/Sidebar'
import Home from './pages'
import SignIn from './pages/signin';




Amplify.configure(awsExports);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />

      </Routes>


    </Router>
  );
}

export default App;
