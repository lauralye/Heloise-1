
import React, {createContext, useEffect, useState, useContext} from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { UserPool} from '../components/Signin/userpool';
import {Navigate, Route, Routes} from 'react-router-dom'
import {CognitoUserAttribute} from 'amazon-cognito-identity-js'

import {Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavLinks, NavItem,
  NavBtn, NavBtnLink} from '../components/AdminDash/NavbarElements'
import {FaBars} from 'react-icons/fa'
import Avatar from '@mui/material/Avatar';

import { Formwrapper,Line,ButtonSign2, ButtonSign,Pic,Title, Container, Banner, Formwrapper2 } from './DesignPage/RPuserelement';
import stock from '../images/stock.png'

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { lineHeight } from '@mui/system';
// import { emailvar } from '../components/Signin/LogIndex';

// export class mail{

//   constructor(mail){
//     this.setMail = mail;
//   }

//   getMail(){
//     return this.mail;
//   }

//   setMail(newmail){
//     this.mail = newmail;
//   }
// }

const RPuser = () => {

  //const { email} = useContext(LoginContext);


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

const [email1, setEmail1] = useState('')
const [title, setTitle] = useState('')
const [specialism, setSpecialism] = useState('')
const [bio, setBio] = useState('')
const [preff_email, setPreff] = useState('')

const getEmail = () =>{

  // const user = UserPool.getCurrentUser();
  // user.getUsername()
  // console.log(user.getUsername)
  // setEmail1(email)
  // console.log(email)
}

// const onSubmit = () ={




// }


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

      <button onClick={getEmail}>CLICK</button>

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

    <form>
    <input type="file" accept="image/*" />
    <ButtonSign type="submit">Upload Picture</ButtonSign>
    </form>
      
      


      <Formwrapper2> 
          <h5 >Displaying Name: </h5><br></br>
          <h5>Contact Email: </h5>
          <h5>Title: </h5>
          <h5>Technical Specialism: </h5>
          <h5>Bio: </h5>

      </Formwrapper2>

      <Formwrapper>
        <form >

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

        <ButtonSign2 type='submit'>Post Profile</ButtonSign2>


      </Formwrapper>

      </Container>

      <div> {logoutdirect ? <Navigate to='/login'/> : null}</div>

     

    </>
  
  )
}

export default RPuser