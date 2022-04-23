import React, {useState} from 'react'

// import image
import Paper from '@mui/material/Paper';

import network2 from '../../images/svg-3.svg'
import {ButtonB,FormWrapper,HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1
        } from './HeroElements'

import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// import Amplify, { Storage } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Req = () => {

    const [hover, setHover] = useState(false)
    const [postdata, setPostdata] = useState([])


// handle POST operation //////////


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [occupation, setOccupation] = useState('')
const [company, setCompany] = useState('')
const [qualifications, setQua] = useState([])
const [reason, setReason] = useState('Justify Your Application...')
const [conarray, setConarray] = useState('')


const handleName =(event) =>{
  setName(event.target.value)
}

const handleEmail =(event) =>{
  setEmail(event.target.value)
}

const handleChange = (event) => {
  setOccupation(event.target.value);
};

const handleCompany =(event) =>{
  setCompany(event.target.value)
}

const handleQua = (event) => {

  // setQua(event.target.value)
  // console.log(setQua)
  const {
  target: { value },
  } = event;
  setQua(
  // On autofill we get a stringified value.
  typeof value === 'string' ? value.join(',') : value,
  );
  const str = qualifications.join(', ');
  setConarray(str);
  
};

const handleReason =(event) =>{
  setReason(event.target.value)
}


const resetField= () =>{

  setName("");
  setEmail("");
  setOccupation("");
  setCompany("");
  setQua([])
  setReason("");

}

const handleSubmit = async (e)=>{
  e.preventDefault()
  //setPostdata({name, email, occupation, company, qualifications, reason})
 // console.log(postdata)

  const newRequest = {
    name: name,
    email: email,
    occupation: occupation,
    company: company,
  //  qualifications: qualifications,
    reason: reason

  }

  try{

    const response = await axios.post('https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/', 
    JSON.stringify({
      name: name,
      email: email,
      occupation: occupation,
      company: company,
      qualifications: conarray,
      reason: reason

    }))

    console.log(response.data)

    handleClick()

    resetField();

  }catch (err){

    console.log(`Error: ${err.message}`)
  }
 
}



////////////////////


    const onHover = () =>{
        setHover(!hover)
    }



      //chip select for qualifications

      const ITEM_HEIGHT = 48;
      const ITEM_PADDING_TOP = 8;
      const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };
      
      const quaname = [
        'CompTIA Network+',
        'Cisco Certified Network Associate (CCNA)',
        'VMWare Network Virtualization',
        'Wireshark Certified Network Analyst',
       ' SolarWinds Certified Professional'

      ];
      
      function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }
      const theme = useTheme();
     const [skill, setSkill] = useState([]);



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
    <HeroContainer>
       
        <HeroBg>
        <ImgBg src={network2} alt="Client Background Image" />
        </HeroBg>
       
        <HeroContent>
            <HeroH1>Connect To Your Clients</HeroH1>
            <HeroH1>Starts Here</HeroH1>
    
        </HeroContent>
        <FormWrapper>
            
           
           
            <form onSubmit={handleSubmit}>
            
            <TextField
             sx={{ m: 2, width: '35ch' }}
                required
                id="outlined-required"
                label="Full Name"
                type="name"
                value={name}
                onChange={handleName}
                />
           
            <TextField
            sx={{ m: 2, width: '35ch' }}
            required
            id="outlined-required"
            label="Email Address"
                type="email"
                value={email}
                onChange={handleEmail}
           
            />
       

           <FormControl sx={{ m: 2,  width: '33ch'}}>
                <InputLabel id="demo-simple-select-helper-label">Occupation</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={occupation}
                label="Occupation"
                onChange={handleChange}
                >
               
                <MenuItem value={'Network Specialist'}>Network Specialist</MenuItem>
                <MenuItem value={'Penetration Tester'}>Penetration Tester</MenuItem>
                <MenuItem value={'Network Site Survey Specialist'}>Network Site Survey Specialist</MenuItem>
                <MenuItem value={'Network Engineer'}>Network Engineer</MenuItem>
                <MenuItem value={'Network Operation Advisor'}>Network Operation Advisor</MenuItem>
                <MenuItem value={'Student'}>Student</MenuItem>
                <MenuItem value={'Others'}>Others</MenuItem>
                <MenuItem value="">
                    <em>Unemployed</em>
                </MenuItem>
                </Select>
               
                {/* <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    /> */}
                    </FormControl>
                    <TextField
                    sx={{ m: 2, width: '24ch' }}
                    required
                    id="outlined-required"
                    label="Company"
                        type="name"
                        value={company}
                        onChange={handleCompany}
                    />

       
                    <FormControl sx={{ m: 2, width: 480}} required>
                        <InputLabel id="demo-multiple-chip-label">Qualifications and Skills</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={qualifications}
                        onChange={handleQua}
                        input={<OutlinedInput id="select-multiple-chip" label="Qualifications and Skills" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                        >
                        {quaname.map((namee) => (
                            <MenuItem
                            key={namee}
                            value={namee}
                            style={getStyles(namee, qualifications, theme)}
                            >
                            {namee}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <TextField required
                    sx={{ m: 2, width: 500, marginBottom: '70px'}}
                        id="outlined-multiline-static"
                        label="Reasons to join"
                        value={reason}
                        onChange={handleReason}
                        multiline
                        rows={5}
                        
                        />

                   
                    <ButtonB  type="submit" >Submit Your Request</ButtonB>

            </form>
            
          
        </FormWrapper>
        
        <Snackbar open={open} autoHideDuration={4500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your request is sent !
        </Alert>
      </Snackbar>   
      
    </HeroContainer>
    
    </>

  );
};
export default Req