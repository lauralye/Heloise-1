import React, {useState} from 'react'
import { UserPool } from './userpool';
import {ButtonSign, Imgdiv, InfoRow, H1, HeroP, Backgrounddiv, Formwrapper} from './SignUpElements'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Cleave from 'cleave.js/react';

import img1 from '../../images/svg-4.svg'
import img2 from '../../images/svg-5.svg'

const SignUpIndex = () => {

  // const userAttributes = {
  //   phone_number: '',
  //   preferred_username: ''
  // }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  const [confirmpass, setConfirm] = useState('')
  //const userAttribute = [];

  
  

  const onSubmit = event => {
    event.preventDefault();

    if(password !== confirmpass){
      alert("Password doesn't match!")
    }else{
      
     // setPhone("+"+phone)
      UserPool.signUp(email,password,[{Name: 'name', Value: name},{Name: 'phone_number', Value: phone}, {Name: 'gender', Value: gender}], null, (err, data)=>{
        if(err) console.error(err);
        console.log(data);


    });

    }

    // userAttributes.phone_number = phone;
    // userAttributes.preferred_username = username;

    
  };



  return (

      <>
      <Imgdiv>
     
      <Backgrounddiv>
      <H1>Sign Up Now</H1>
        
      </Backgrounddiv>
      </Imgdiv>
       <Backgrounddiv>
       <HeroP>To NetCounsel</HeroP>
       </Backgrounddiv>
       
       
      <Backgrounddiv>
      
      <Formwrapper>
        
       
        <form onSubmit={onSubmit}>


          <TextField
             sx={{ m: 2, width: '35ch' }}
                required
                id="outlined-required-1"
                label="Full Name"
                type="name"
                value={name}
                onChange={event=>setName(event.target.value)}
                />

          <TextField
            sx={{ m: 2, width: '35ch' }}
            required
            id="outlined-required-2"
            label="Email Address"
                type="email"
                value={email}
                onChange={event=>setEmail(event.target.value)}
           
            />
            <TextField
            sx={{ m: 2, width: '30ch' }}
            required
            id="outlined-required-3"
            label="Password"
                type="password"
                value={password}
                onChange={event=>setPassword(event.target.value)}
           
            />

            <TextField
            sx={{ m: 2, width: '30ch' }}
            required
            id="outlined-required-4"
            label="Password"
                type="password"
                value={confirmpass}
                onChange={event=>setConfirm(event.target.value)}
           
            />



          <FormControl sx={{ m: 2,  width: '15ch'}}>
                <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={gender}
                label="Gender"
                onChange={event=>setGender(event.target.value)}
                >
               
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Others'}>Male</MenuItem>
            
                <MenuItem value="">
                    <em>Unspecified</em>
                </MenuItem>
                </Select>
               
             
            </FormControl>

            <TextField
            sx={{ m: 2, width: '30ch' }}
            required
            id="outlined-required-5"
            label="Phone Number"
              
            //    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                value={phone}
                onChange={event=>setPhone(event.target.value)}
           
            />
             {/* {console.log(phone)
} */}
        




          <ButtonSign type='submit'>Sign Up</ButtonSign>
        </form>

        </Formwrapper>
        
      </Backgrounddiv>
      <Backgrounddiv>
        
          <img src={img1} alt="network img"></img>
          
         

        </Backgrounddiv>

       
      </>
    
  )
}



export default SignUpIndex;


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



      // {/* <input value={email} onChange={event=>setEmail(event.target.value)}/> */}
  
      //     {/* <input value={password} onChange={event=>setPassword(event.target.value)}/> */}

      //     {/* <input value={name} onChange={event=>setName(event.target.value)}/> */}

      //     {/* <input value={gender} onChange={event=>setGender(event.target.value)}/> */}

      //     {/* <input value={phone} onChange={event=>setPhone(event.target.value)}/> */}