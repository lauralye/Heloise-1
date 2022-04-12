import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, {useState, useContext} from 'react'
import { AccountContext } from './Acconts';
import { UserPool, AdminPool } from './userpool';
import styled from 'styled-components'

//for UI imports

import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LoginFormModal from './HeroLogin/LoginFormFei';
import LoginFormFei from './HeroLogin/LoginFormFei';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { createTheme, ThemeProvider } from '@mui/material/styles';
//login form component
// export const ModalForm= (props) =>{
  
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 480,
//     height: 700,
//     bgcolor: 'background.paper',
//     alignItems:'center',
//     justifyContent:'center',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p:5,
//     borderRadius: 17
//   };

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [open1, setOpen1] = useState(false);

//   const handleOpen1 = () => setOpen1(true);
//   const handleClose1 = () => setOpen1(false);


//   //for input textfield
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');

//   // const handleChange = (event) => {
//   //   setEmail(event.target.value);
//   // };
//   // const handlePass = (event) => {
//   //   setPass(event.target.value);
//   // };


  
//   // const handleOpen0 = () =>{

//   //   setOpen(true);
//   //   console.log("Modal1")
    
//   // }
//   const customTheme = createTheme({
//     palette: {
//       primary: {
//         main: "#56e8e3"
//       }
//     }
//   });
  
//   const customThemew = createTheme({
//     palette: {
//       primary: {
//         main: "#fff"
//       }
//     }
//   });


//   const LoginTitle = styled.h1`
//     color: #000;
//     font-size: 40px;
//     text-align: center;
//     letter-spacing: 1px;
//     line-height: 60px;
//     @media screen and (max-width: 768px){
//         font-size: 40px;
//     }
//     @media screen and (max-width: 480px){
//         font-size: 32px;
//     }

//   `

//   const Divforbut = styled.div`
  
//     display:flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 30px;
//   `
  
//   const theme = createTheme();

//   const avatarStyle = { 
    
//     backgroundColor: "#56e8e3",
//     width: 70,
//     height:70,
//     padding: theme.spacing(4)
//    };

//   return(

//     <>
//     <Divforbut >
//     <Button variant="contained" size="large" theme={customTheme} onClick={handleOpen} >Specialist Sign In</Button>
//     {open? <Modal
//     open={open}
//     onClose={handleClose}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
//   >

//    <Box sx={style}  alignItems="center"
//         justifyContent="center" >
     
  
//       <Grid
//           container
//           spacing={3}
//           direction="column"
//           alignItems="center"
//           sx={{marginTop:1}}
//           // justify="center"
//           // style={{ minHeight: '100vh' }}
          
//         >
//           <LoginTitle>Sign Into Your Account.</LoginTitle>
//           <Grid item xs={4} sx={{marginTop:2}} >
//             <Avatar style={avatarStyle} >
//               <LockIcon fontSize="large" />

//             </Avatar>
//             </Grid>
//             <Grid item xs={4} sx={{marginTop:4}}>
//               <FormControl>
//                  <TextField
//                     id="outlined-textarea"
//                     label="Email Address"
//                     placeholder="Enter Your Email"
//                     value={props.email}
//                     onChange={props.handleChange}
//                     type="email"
                    
//                   />
//                 </FormControl>
//          </Grid>
//          <Grid item xs={4} >
//               <FormControl>

//                   <TextField
//                     id="outlined-textarea"
//                     label="Password"
//                     placeholder="Enter Your Password"
//                     type="password"
//                     value={props.pass}
//                     onChange={props.handlePass}
                    
//                   />
//                 </FormControl>
//          </Grid>
//          <Grid item xs={4} sx={{marginTop:2}} >
//          <Button variant="contained" size="large" theme={customTheme} 
//          onClick={props.signin}
//          >Sign In</Button>
         
//          </Grid>

//          <Grid item xs={4}  >
//          <Button variant="contained" size="medium" theme={customThemew} onClick={handleClose}>Cancel</Button>
//          </Grid>
//         </Grid>
        
          

     
//     </Box>
   
//   </Modal> : null}


    
      

//     <Button variant="contained" size="large" theme={customTheme} onClick={handleOpen1}>Admin Sign In</Button>
//         <Modal
//           open={open1}
//           onClose={handleClose1}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Typography id="modal-modal-title" variant="h6" component="h2">
//              second model
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//           </Box>
//         </Modal>

//     </Divforbut>
//   </>
//   )
// }


export const LoginTitle = styled.h1`
color: #000;
font-size: 35px;
text-align: center;
letter-spacing: 1px;
line-height: 60px;
margin: auto;
@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}

`

const Divforbut = styled.div`
  
  display: ;
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding: 40px ;


`





const LogIn = () => {

  // const userAttributes = {
  //   phone_number: '',
  //   preferred_username: ''
  // }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAdmin, setEmailAdmin] = useState('');
  const [passwordAdmin, setPasswordAdmin] = useState('');
//   const [phone, setPhone] = useState('');
//   const [gender, setGender] = useState('');
//   const [name, setName] = useState('');

  //const userAttribute = [];

  // for RP user
  const loadRefreshContent = () =>{
		window.location.reload();
	}

  const { authenticate, authenticateAdmin} = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();
    
    authenticate(email, password).then(data=>{
        console.log('logged in!', data)
    })
    .catch(err =>{
        console.error('Failed to Log In!', err)
    });

    loadRefreshContent();

  };



  // for admin user
  // const { authenticateAdmin} = useContext(AccountContext);
  const onSubmitAdmin = event => {
    event.preventDefault();
    
    authenticateAdmin(emailAdmin, passwordAdmin).then(data=>{
        console.log('logged in!', data)
    })
    .catch(err =>{
        console.error('Failed to Log In!', err)
    })

    

  };


///styleling GUI components



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    height: 700,
    bgcolor: 'background.paper',
    alignItems:'center',
    justifyContent:'center',
    border: '2px solid #000',
    boxShadow: 24,
    p:5,
    borderRadius: 17
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


  //for input textfield
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');

  // const handleChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePass = (event) => {
  //   setPass(event.target.value);
  // };


  
  // const handleOpen0 = () =>{

  //   setOpen(true);
  //   console.log("Modal1")
    
  // }
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#56e8e3"
      }
    }
  });
  
  const customThemew = createTheme({
    palette: {
      primary: {
        main: "#fff"
      }
    }
  });



 
  
  const theme = createTheme();

  const avatarStyle = { 
    
    backgroundColor: "#56e8e3",
    width: 70,
    height:70,
    padding: theme.spacing(4)
   };

  return(

    <>
    <Divforbut >
    <Button variant="contained" size="large" theme={customTheme} onClick={handleOpen} >Specialist Sign In</Button>
    {open? <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

   <Box sx={style}  alignItems="center"
        justifyContent="center" >
     
  
      <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          sx={{marginTop:1}}
          // justify="center"
          // style={{ minHeight: '100vh' }}
          
        >
          <LoginTitle>Specialist Account Sign In.</LoginTitle>
          <Grid item xs={4} sx={{marginTop:2}} >
            <Avatar style={avatarStyle} >
              <LockIcon fontSize="large" />

            </Avatar>
            </Grid>
            <Grid item xs={4} sx={{marginTop:4}}>
              <FormControl>
                 <TextField
                    id="outlined-textarea1"
                    label="Email Address"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={event=>setEmail(event.target.value)}
                    type="email"
                    
                  />
                </FormControl>
         </Grid>
         <Grid item xs={4} >
              <FormControl>

                  <TextField
                    id="outlined-textarea2"
                    label="Password"
                    placeholder="Enter Your Password"
                    type="password"
                    value={password}
                    onChange={event=>setPassword(event.target.value)}
                    
                  />
                </FormControl>
         </Grid>
         <Grid item xs={4} sx={{marginTop:2}} >
         <Button variant="contained" size="large" theme={customTheme} 
         onClick={onSubmit}
         >Sign In</Button>
         
         </Grid>

         <Grid item xs={4}  >
         <Button variant="contained" size="medium" theme={customThemew} onClick={handleClose}>Cancel</Button>
         </Grid>
        </Grid>
        
          

     
    </Box>
   
  </Modal> : null}


    </Divforbut>
      

    <Divforbut >
    <Button variant="contained" size="large" theme={customTheme} onClick={handleOpen1}>Admin Sign In</Button>
    {open1? <Modal
    open={open1}
    onClose={handleClose1}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

   <Box sx={style}  alignItems="center"
        justifyContent="center" >
     
  
      <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          sx={{marginTop:1}}
          // justify="center"
          // style={{ minHeight: '100vh' }}
          
        >
          <LoginTitle>Admin Account Log In.</LoginTitle>
          <Grid item xs={4} sx={{marginTop:2}} >
            <Avatar style={avatarStyle} >
              <LockIcon fontSize="large" />

            </Avatar>
            </Grid>
            <Grid item xs={4} sx={{marginTop:4}}>
              <FormControl>
                 <TextField
                    id="outlined-textarea1"
                    label="Email Address"
                    placeholder="Enter Your Email"
                    value={emailAdmin}
                    onChange={event=>setEmailAdmin(event.target.value)}
                    type="email"
                    
                  />
                </FormControl>
         </Grid>
         <Grid item xs={4} >
              <FormControl>

                  <TextField
                    id="outlined-textarea2"
                    label="Password"
                    placeholder="Enter Your Password"
                    type="password"
                    value={passwordAdmin}
                    onChange={event=>setPasswordAdmin(event.target.value)}
                    
                  />
                </FormControl>
         </Grid>
         <Grid item xs={4} sx={{marginTop:2}} >
         <Button variant="contained" size="large" theme={customTheme} 
         onClick={onSubmitAdmin}
         >Sign In</Button>
         
         </Grid>

         <Grid item xs={4}  >
         <Button variant="contained" size="medium" theme={customThemew} onClick={handleClose1}>Cancel</Button>
         </Grid>
        </Grid>
        
          

     
    </Box>
   
  </Modal> : null}

    </Divforbut>
  </>
  )
}


export default LogIn;


// <Container>
    //     <FormWrap>
    //         <Icon>hello</Icon>
    //         <FormContent>
    //             <Form action="#">
    //                 <FormH1>Sign in to your account</FormH1>
    //                 <FormLabel>Email</FormLabel>
    //                 <FormInput/>
    //                 <FormLabel>Password</FormLabel>
    //                 <FormInput/>
    //                 <FormButton>Continue</FormButton>
    //                 <Text>Forgot Password</Text>
    //             </Form>
    //         </FormContent>

    //     </FormWrap>
    // </Container>



    // const onSubmitAdmin = event => {
    //   event.preventDefault();
    //       const user = new CognitoUser({
    //           Username: emailAdmin,
    //           Pool: AdminPool
  
    //       }
    //       );
  
    //       const authDetails = new AuthenticationDetails({
    //           Username: emailAdmin,
    //           Password: passwordAdmin
    //       });
  
    //       user.authenticateUser(authDetails, {
    //           onSuccess: data =>{
    //               console.log('onSuccess:', data);
    //           },
    //           onFailure: err =>{
    //               console.error('onFailure:', err);
    //           },
    //           newPasswordRequire: data =>{
    //               console.log('newPasswordRequired:', data);
    //           }
    //       });
          
  
    // };
  



                  //     {/* <InputLabel htmlFor="component-outlined" 
                  // placeholder="Enter Your Password..."
                  // >Password</InputLabel>
                  // <OutlinedInput
                  //   id="password"
                  //   value={pass}
                  //   onChange={handlePass}
                  //   label="Password"
                    
                  // /> */}



                  
    // <>
    //   <div>
    //   <h1>LOG IN User RP</h1>
       
    //     <form onSubmit={onSubmit}>
          
    //       <input value={email} onChange={event=>setEmail(event.target.value)}/>
  
    //       <input value={password} onChange={event=>setPassword(event.target.value)}/>

    //       {/* <input value={name} onChange={event=>setName(event.target.value)}/>

    //       <input value={gender} onChange={event=>setGender(event.target.value)}/>

    //       <input value={phone} onChange={event=>setPhone(event.target.value)}/> */}
    //       <button type='submit'>Log In</button>
    //     </form>
    //   </div>
    //   <div>
    //   <h1>LOG IN User Admin</h1>
    //   <div></div>
      
    //   <form onSubmit={onSubmitAdmin}>
        
    //     <input value={emailAdmin} onChange={event=>setEmailAdmin(event.target.value)}/>

    //     <input value={passwordAdmin} onChange={event=>setPasswordAdmin(event.target.value)}/>

    //     {/* <input value={name} onChange={event=>setName(event.target.value)}/>

    //     <input value={gender} onChange={event=>setGender(event.target.value)}/>

    //     <input value={phone} onChange={event=>setPhone(event.target.value)}/> */}
    //     <button type='submit'>Log In</button>
    //   </form>
    // </div>
    // </>