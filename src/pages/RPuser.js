
import React, {createContext, useEffect, useState} from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { UserPool, AdminPool} from '../components/Signin/userpool';
import {Navigate, Route, Routes} from 'react-router-dom'
import {CognitoUserAttribute} from 'amazon-cognito-identity-js'

import {Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavLinks, NavItem,
  NavBtn, NavBtnLink} from '../components/AdminDash/NavbarElements'
import {FaBars} from 'react-icons/fa'
import Avatar from '@mui/material/Avatar';

import {Formwrapper, Line,ButtonSign2, ButtonSign,Pic,Title, Container, Banner } from './DesignPage/RPuserelement';
import stock from '../images/stock.png'

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';


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

  const [username, setUsername] = useState('')




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
const [isOpen, setIsOpen] = useState(false);
const toggle = () =>{
  setIsOpen(!isOpen)
}


  return (
    
    // <div>
    //     <h1>Main Page for RP after logged In</h1>
    //     <button onClick={logout}>Logout</button>
    //     {logoutdirect ? <Navigate to='/login'/> : null}
    // </div>

    <>
    <Container>
    <Nav>

      <NavbarContainer>
          <NavLogo to='/'>NetCounsel</NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
              <NavBtn>
              <NavBtnLink onClick={logout}>Logout</NavBtnLink>
              </NavBtn>
          </NavMenu>
          
      </NavbarContainer>
      </Nav>

      <Banner>
        <Title>Profile</Title>
      </Banner>

     
      <Avatar
        alt="Remy Sharp"
        src={stock}
        sx={{ width: 180, height: 180, left: '140px',
          top: '290px'} }
      />
      <Line></Line>
      <ButtonSign>Upload Picture</ButtonSign>

      <Formwrapper>
        <form>

        <TextField sx={{ m: 2, width: '30ch' }}
        id="input-with-icon-textfield"
        label="Display Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

          <TextField
            sx={{ m: 2, width: '35ch' }}
            required
            id="outlined-required-2"
            label="Preferred Contact Email"
                type="email"
                // value={email}
                // onChange={event=>setEmail(event.target.value)}
           
            />

                <TextField
             sx={{ m: 2, width: '35ch' }}
                required
                id="outlined-required-1"
                label="Display Title"
                type="name"
                // value={name}
                // onChange={event=>setName(event.target.value)}
                />

                <TextField
             sx={{ m: 2, width: '35ch' }}
                required
                id="outlined-required-1"
                label="Technical Specialism"
                type="name"
                // value={name}
                // onChange={event=>setName(event.target.value)}
                />


          <TextField  sx={{ m: 2, width: '45ch' }}
          id="outlined-multiline-static"
          label="Bio"
          multiline
          rows={6}
          defaultValue="Introduce a bit about yourself..."
          />
        </form>

        <ButtonSign2>Post Profile</ButtonSign2>


      </Formwrapper>

      </Container>


    </>
  
  )
}

export default RPuser