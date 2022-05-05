
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
import { AccountContext } from '../components/Signin/Acconts';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const RPuser = (props) => {

  const storeEmail = localStorage.getItem('email');
  const email = JSON.parse(storeEmail);
  const [userdata, setUserdata] = useState([])

  const [title, setTitle] = useState('')
  const [specialism, setSpecialism] = useState('')
  const [bio, setBio] = useState('')
  const [preff_email, setPreff] = useState('')
  const [name, setName] = useState('')

  const [title1, setTitle1] = useState('')
  const [specialism1, setSpecialism1] = useState('')
  const [bio1, setBio1] = useState('')
  const [preff_email1, setPreff1] = useState('')
  const [name1, setName1] = useState('')

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.post("https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/userprofile",
        JSON.stringify({
          email:email
    
        })
        )

        setUserdata(response.data)
        console.log(response.data)
        userdata.map((el, index) =>{
          setTitle(el.title)
          setSpecialism(el.specialism)
          setBio(el.bio)
          setPreff(el.preff_email)
          setName(el.name)
      })

      }catch (err){
        if(err.response){
          //not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

        }else{
          console.log(`Error: ${err.message}`)
        }
          
      }

     
    }


    fetchData();
    
    

  }, []

  )




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
      // remove
      localStorage.removeItem('my-key');

      // remove all
      localStorage.clear();
      setLogoutdirect(true)
  }

}


const [isOpen, setIsOpen] = useState(false);
const toggle = () =>{
  setIsOpen(!isOpen)
}


// const [email, setEmail] = useState(props.emailProp)




// const handleEmail =(event) =>{
//   setEmail(event.target.value)
// }

const handleTitle =(event) =>{
  setTitle(event.target.value)
}

const handleSpecial =(event) =>{
  setSpecialism(event.target.value)
}

const handleBio =(event) =>{
  setBio(event.target.value)
}
const handlePreff =(event) =>{
  setPreff(event.target.value)
}

const getEmail = () =>{

  // const user = UserPool.getCurrentUser();
  // user.getUsername()
  // console.log(user.getUsername)
  // setEmail1(email)
  // console.log(email)

 
}

const handleSubmit = async () =>{

  try{

    const response = await axios.put('https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/profiles', 
    JSON.stringify({
      name:name,
      email:email,
      title: title,
      specialism: specialism,
      bio: bio,
      preff_email: preff_email

    }))
    handleClick()
    console.log(response.data)

   

  }catch (err){

    console.log(`Error: ${err.message}`)
  }


}


const [open, setOpen] = React.useState(false);

const handleClick = () => {
 setOpen(true);
};

const handleClose = (event, reason) => {
 if (reason === 'clickaway') {
   return;
 }

 setOpen(false);
};

const Alert = React.forwardRef(function Alert(props, ref) {
 return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


  return (
    
    


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

    {/* <form>
    <input type="file" accept="image/*" />
    <ButtonSign type="submit"></ButtonSign>
    </form> */}
      
      


      {/* <Formwrapper2> 
          <h5 >Displaying Name: </h5><br></br>
          <h5>Contact Email: {email}</h5>
          <h5>Title: </h5>
          <h5>Technical Specialism: </h5>
          <h5>Bio: </h5>

      </Formwrapper2> */}

      <Formwrapper2>
        <div><h4 style={{fontFamily: 'Helvetica', fontWeight: '100', fontStyle: 'normal'}} >Username: {email}</h4></div>
        
        {/* <div> <ButtonSign2 >Click Me!</ButtonSign2></div> */}
     
      </Formwrapper2>

      <Formwrapper>
        
            <form  >

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
            value={name}
            onChange={event=>setName(event.target.value)}
    
          />
    
              <TextField
                sx={{ m: 2, width: '35ch' }}
                required
                id="outlined-required-2"
                label="Preferred Contact Email"
                    type="email"
                    value={preff_email}
                    onChange={event=>setPreff(event.target.value)}
               
                />
    
                    <TextField
                 sx={{ m: 2, width: '35ch' }}
                    required
                    id="outlined-required-1"
                    label="Display Title"
                    type="name"
                    value={title}
                    onChange={event=>setTitle(event.target.value)}
                    />
    
                    <TextField
                 sx={{ m: 2, width: '35ch' }}
                    required
                    id="outlined-required-1"
                    label="Technical Specialism"
                    type="name"
                   value={specialism}
                    onChange={event=>setSpecialism(event.target.value)}
                    />
    
    
              <TextField  sx={{ m: 2, width: '45ch' }}
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={6}
             value={bio}
             onChange={event=>setBio(event.target.value)}
              />
    
    
            </form>
       
        <ButtonSign2 onClick={handleSubmit}>Post Profile</ButtonSign2>
       


      </Formwrapper>

      </Container>

      <div> {logoutdirect ? <Navigate to='/login'/> : null}</div>

      <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your profile is posted !
        </Alert>
      </Snackbar>   

     

    </>
  
  )
}

export default RPuser