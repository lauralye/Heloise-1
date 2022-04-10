

import './App.css';
import Navbar from './components/Navbar/index' 
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {BrowserRouter as Router} from 'react-router-dom'
// import Sidebar from './components/Sidebar'
import Home from './pages'



Amplify.configure(awsExports);


function App() {
  return (
    <Router>
      <Home/>


    </Router>
  );
}

export default App;
