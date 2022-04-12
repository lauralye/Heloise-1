import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, {useState, useContext} from 'react'
import { AccountContext } from './Acconts';
import { UserPool, AdminPool } from './userpool';




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
  const { authenticate} = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();
    
    authenticate(email, password).then(data=>{
        console.log('logged in!', data)
    })
    .catch(err =>{
        console.error('Failed to Log In!', err)
    })

  };



  // for admin user
  const onSubmitAdmin = event => {
    event.preventDefault();
        const user = new CognitoUser({
            Username: emailAdmin,
            Pool: AdminPool

        }
        );

        const authDetails = new AuthenticationDetails({
            Username: emailAdmin,
            Password: passwordAdmin
        });

        user.authenticateUser(authDetails, {
            onSuccess: data =>{
                console.log('onSuccess:', data);
            },
            onFailure: err =>{
                console.error('onFailure:', err);
            },
            newPasswordRequire: data =>{
                console.log('newPasswordRequired:', data);
            }
        });
        

  };



  return (
    
    <>
      <div>
      <h1>LOG IN User RP</h1>
       
        <form onSubmit={onSubmit}>
          
          <input value={email} onChange={event=>setEmail(event.target.value)}/>
  
          <input value={password} onChange={event=>setPassword(event.target.value)}/>

          {/* <input value={name} onChange={event=>setName(event.target.value)}/>

          <input value={gender} onChange={event=>setGender(event.target.value)}/>

          <input value={phone} onChange={event=>setPhone(event.target.value)}/> */}
          <button type='submit'>Log In</button>
        </form>
      </div>
      <div>
      <h1>LOG IN User Admin</h1>
      <div></div>
      
      <form onSubmit={onSubmitAdmin}>
        
        <input value={emailAdmin} onChange={event=>setEmailAdmin(event.target.value)}/>

        <input value={passwordAdmin} onChange={event=>setPasswordAdmin(event.target.value)}/>

        {/* <input value={name} onChange={event=>setName(event.target.value)}/>

        <input value={gender} onChange={event=>setGender(event.target.value)}/>

        <input value={phone} onChange={event=>setPhone(event.target.value)}/> */}
        <button type='submit'>Log In</button>
      </form>
    </div>
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