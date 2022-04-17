import React, {useState} from 'react'
import {Button} from '../ButtonElements'
// import image
import Paper from '@mui/material/Paper';

import network2 from '../../images/svg-3.svg'
import { ButtonB,FormWrapper,HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1
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

const Req = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }


    // useEffect(() => {

    //     const file = await Storage.get("video.mp4", {
    //         level: "public"
    //     });
    
     
        
    // }, )
    
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));
      
    
      const [job, setJob] = useState('');

      const handleChange = (event) => {
        setJob(event.target.value);
      };


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

    const handleQua = (event) => {
        const {
        target: { value },
        } = event;
        setSkill(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

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
            
           
           
            <form>
            
            <TextField
             sx={{ m: 2, width: '35ch' }}
                required
                id="outlined-required"
                label="Full Name"
                type="name"
                />
           
            <TextField
            sx={{ m: 2, width: '35ch' }}
            required
            id="outlined-required"
            label="Email Address"
                type="email"
           
            />
       

           <FormControl sx={{ m: 2,  width: '33ch'}}>
                <InputLabel id="demo-simple-select-helper-label">Occupation</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={job}
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
                
                    />

       
                    <FormControl sx={{ m: 2, width: 480}}>
                        <InputLabel id="demo-multiple-chip-label">Qualifications and Skills</InputLabel>
                        <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={skill}
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
                        {quaname.map((name) => (
                            <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, skill, theme)}
                            >
                            {name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <TextField
                    sx={{ m: 2, width: 500, marginBottom: '70px'}}
                        id="outlined-multiline-static"
                        label="Reasons to join"
                        multiline
                        rows={5}
                        defaultValue="Justify your application..."
                        />

                   


            </form>
            
            <ButtonB sx={{ m: 2, width: 480}} variant="contained">Submit Your Request</ButtonB>
           
        </FormWrapper>
        

      
    </HeroContainer>
    
    </>

  );
};
export default Req