import React, {useState} from 'react'
import { UserPool } from './userpool';




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

  //const userAttribute = [];

  

  const onSubmit = event => {
    event.preventDefault();

    // userAttributes.phone_number = phone;
    // userAttributes.preferred_username = username;

    UserPool.signUp(email,password,[{Name: 'name', Value: name},{Name: 'phone_number', Value: phone}, {Name: 'gender', Value: gender}], null, (err, data)=>{
        if(err) console.error(err);
        console.log(data);


    });
  };



  return (

      <div>
        <h1>Sign in Section to be done</h1>
        <div></div>
        <h1>Sign up Section Specialists</h1>
        <form onSubmit={onSubmit}>
          
          <input value={email} onChange={event=>setEmail(event.target.value)}/>
  
          <input value={password} onChange={event=>setPassword(event.target.value)}/>

          <input value={name} onChange={event=>setName(event.target.value)}/>

          <input value={gender} onChange={event=>setGender(event.target.value)}/>

          <input value={phone} onChange={event=>setPhone(event.target.value)}/>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    
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