import React, {useContext, useEffect, useState} from 'react'
import { Account, AccountContext } from '../components/Signin/Acconts'
import {  AdminPool} from '../components/Signin/userpool';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import axios from "axios"
import {Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavLinks, NavItem,
  NavBtn, NavBtnLink} from '../components/AdminDash/NavbarElements'
import {FaBars} from 'react-icons/fa'
import AdminTable from '../Data/AdminTable';
import Amplify, { API } from 'aws-amplify';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import emailjs from '@emailjs/browser';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
//styling for table
//import { makeStyles } from '@mui/styles/makeStyles';
// import { Grid , Avatar} from '@mui/material';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { cyan } from '@mui/material/colors';
// import { createTheme } from '@mui/material';
// import { ThemeProvider } from 'styled-components';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';

/////////////////////////////////////////////////////
Amplify.configure({
    // OPTIONAL - if your API requires authentication 
    API: {
        endpoints: [
            {
              name: "MockApi",
              endpoint: "https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/"
            }
        ]
    }
});

const Admin = () => {

  const [openC, setOpenC] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () =>{
      setIsOpen(!isOpen)
  }


    // const { getSessionAdmin, logoutAdmin} = useContext(AccountContext);

    // const [statusAdmin, setStatusAdmin] = useState(false);
    const [data, setData] = useState([])
   // const [pro, setPro] = useState([])

      const [logoutdirect, setLogoutdirect] =useState(false);

    const getSessionAdmin = async () => await new Promise((resolve, reject) =>{

      const user = AdminPool.getCurrentUser();
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

    const logoutAdmin = () =>{
      const user = AdminPool.getCurrentUser();
      if(user){
          user.signOut();
          console.log("user logged out!")
         setLogoutdirect(true)
      }
     
    
    }

    useEffect(()=>{
      const fetchData = async()=>{
        try{
          const response = await axios.get("https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev")
          setData(response.data)
          //console.log(data)

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

    ///styling fucntion
    const  style = {
      table: {
        minWidth: 650,
      },
      tableContainer: {
          borderRadius: 15,
          margin: '10px 10px',
          maxWidth: 950
      },
      tableHeaderCell: {
          fontWeight: 'bold',
          // backgroundColor: theme.palette.primary.dark,
          // color: theme.palette.getContrastText(theme.palette.primary.dark)
      },
      avatar: {
          // backgroundColor: theme.palette.primary.light,
          // color: theme.palette.getContrastText(theme.palette.primary.light)
      },
      name: {
          fontWeight: 'bold',
          // color: theme.palette.secondary.dark
      },
      status: {
          fontWeight: 'bold',
          fontSize: '0.75rem',
          color: 'white',
          backgroundColor: 'grey',
          borderRadius: 8,
          padding: '3px 10px',
          display: 'inline-block'
      }
    };


    
// function Row(props) {
//   const { row } = props;
//   const [openC, setOpen] = useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!openC)}
//           >
//             {openC ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.email}</TableCell>
//         <TableCell align="right">{row.occupation}</TableCell>
//         <TableCell align="right">{row.company}</TableCell>
//         <TableCell align="right">{row.qualifications}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={openC} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>

//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// const ExpandableTableRow = (props, children) => {
//   const [isExpanded, setIsExpanded] = useState(true);


//   const onOpen = () =>{
//     setIsExpanded(!isExpanded)
//   }
//   return (
//     <>
    
//         <TableCell padding="checkbox">
//           <IconButton  aria-label="expand row"
//             onClick={() => setIsExpanded(!isExpanded)}>
//             {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//       {children}
    
     
//       {isExpanded ? (
//         <TableRow key={props.id}>
//           <TableCell padding="checkbox" />
//          <TableCell>{props.reason}</TableCell>
//         </TableRow>
//       ): null}
//     </>
//   );
// };






   // const classes = useStyles();

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // const handleChangePage = (event, newPage) => {
    //   setPage(newPage);
    // };
  
    // const handleChangeRowsPerPage = (event) => {
    //   setRowsPerPage(+event.target.value);
    //   setPage(0);
    // };

    // let USERS = [];

    // for(let i=0; i<data.length; i++){

    //   USERS[i]={
    //     id: data.id,
    //     name: data.name,
    //     email:data.email,
    //     occupation: data.occupation,
    //     qualifications: data.qualifications,
    //     company: data.company,
    //     reason: data.reason
    //   }
    // }


    // const theme = createTheme({

    //   palette:{
    //     primary:{
    //       main: cyan[500],
    //     },
    //     secondary:{
    //       main: '#00e5ff',
    //     }
    //   }
    // }

    // )


  //  const [disable, setDisable] = useState(false)
  //   const  [removedata, setRemovedata] = useState(data)
  //   const [testid, setTestid] = useState()


  //  const handleSend = () =>{

    
  //   setDisable(true)

  //  }

  //  const handleRemove = (id) =>{
  //   const dataCopy = [...data];

  //  // const index = data.findIndex((con)=> con.id === id);
    
  //   dataCopy.splice(id, 1);
  //   setData(dataCopy);
  // }

  // const rowdata = [
  //   {}

  // ]
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageSize, setPageSize]= useState(5)
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [occupation, setOccupation]= useState('')
  const [company, setCompany]= useState('')
  const [idd, setIdd]= useState('')


  
  const sendMail = () =>{
    
    //parsingData(datas)

    emailjs.send('service_pqya14m', 'template_u262k1s', {name: name, occupation: occupation, company: company, to_email: email }, 'mD4Tm6VlbxJIbHSMY')
    .then((result) => {
        console.log(result.text);
        console.log('Email Sent!')
       

    }, (error) => {
        console.log(error.text);
    });

    return (console.log("SUCCESS SENT MAIL!"))

  }



  const parsingData = (dataa) =>{

    handleClickOpen()
    
    dataa.map((datas) =>{
        setName(datas.name)
        setEmail(datas.email)
        setOccupation(datas.occupation)
        setCompany(datas.company)
        setIdd(datas.id)
      }
    

  )

  //DO YOU really wanna send

  console.log([name, email, occupation, idd])

  sendMail();

  const handleDelete= async () =>{
    try{

      await axios.delete('https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/',
       { data: {id: idd} }
      ).then(console.log("DELETED") )
      

    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  }

  handleDelete()
 
  

}

// dialog box
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    
const handleConfirm = () =>{



  parsingData(selectedRows)
}


  

 

  const columns = [
    { field: 'id', headerName: 'ID', width: 35 },
    { field: 'name', headerName: 'Requestor Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'occupation', headerName: 'Occupation', width: 150},
    { field: 'company', headerName: 'Company', width: 110},
    { field: 'qualifications', headerName: 'Qualifications', width: 280 },
    { field: 'reason', headerName: 'Reason to Join', width: 350 },
];
  return (
    
    <>
         <Nav>

          <NavbarContainer>
              <NavLogo to='/'>NetCounsel</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars/>
              </MobileIcon>
              <NavMenu>
                  <NavBtn>
                  <NavBtnLink onClick={logoutAdmin}>Logout</NavBtnLink>
                  </NavBtn>
              </NavMenu>
              
          </NavbarContainer>
          </Nav>
         
        

 


            
              <div  style={{ margin: "auto", marginTop:"70px", marginBottom:"60px",
              height: 500, width: '100%' }}>
                
              <DataGrid align={"center"}
              rows={data} columns={columns} 
            
             
             
              loading={!data.length}
              pagination
              pageSize={pageSize}
              onPageSizeChange={(pageSize)=> setPageSize()}
              rowsPerPageOptions={[5,9,15]}
              disableMultipleSelection={true}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = data.filter((rows) =>
                  selectedIDs.has(rows.id),
                );
      
                setSelectedRows(selectedRows);
              }}



              />
              </div >

              <Grid container justifyContent="center" alignItems="center" spacing={8}>

                <Grid item >
                <Button onClick={()=> {parsingData(selectedRows)}} sx={{backgroundColor: "#56e8e3"}} variant="contained" size="large"  endIcon={<ForwardToInboxIcon />}>
                   Send Registration Link
                 </Button>
                <Button  variant="contained" onClick={handleClickOpen}>Click</Button>
                </Grid>
               

              </Grid>

                <div>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
              </Dialog>
              </div>
              {/* {
                parsingData(selectedRows)
              } */}
                 

             
                 
              {/* <pre style={{ fontSize: 30 }}>
                {JSON.stringify(selectedRows, null, 4)}
              </pre> */}
              {/* {console.log(selectedRows)} */}


              <div>
             
              {logoutdirect ? <Navigate to='/login'/> : null}
           </div>



         




    </>

  )
}

export default Admin



// <TableContainer component={Paper} className={style.tableContainer}>
//       <Table aria-label="simple table" className={style.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell className={style.tableHeaderCell}>Requestor Name</TableCell>
//             <TableCell>Occupation</TableCell>
//             <TableCell>Company</TableCell>
//             <TableCell >Email</TableCell>
//             <TableCell >Reason</TableCell>
//           </TableRow>
//         </TableHead>
       
//           {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            
//             <TableBody>
//             <TableRow key={row.id} >
             

                
//               <TableCell>
//                   <Grid container>
//                       <Grid item lg={2}>
//                           <Avatar alt={row.name} src='.' />
//                       </Grid>
//                       <Grid item >
//                           <Typography >{row.name}</Typography>
//                           <Typography color="textSecondary" variant="body2">{row.email}</Typography>
//                           {/* <Typography color="textSecondary" variant="body2">{row.name}</Typography> */}
//                       </Grid>
//                   </Grid>
//                 </TableCell>
//               <TableCell>
//                   <Typography color="primary" variant="subtitle2">{row.occupation}</Typography>
//                   {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
//                 </TableCell>
//               <TableCell>{row.company}</TableCell>
//               <TableCell>{row.email}</TableCell>
//               <TableCell>{row.reason}</TableCell>

             
//             </TableRow>


//             </TableBody>
//           ))}


//         <TableFooter>
//         <TablePagination
//             rowsPerPageOptions={[5, 10, 15]}
//             component="div"
//             count={USERS.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onChangePage={handleChangePage}
//             onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//         </TableFooter>
//       </Table>
//     </TableContainer>


// <TableContainer style={{margin: 'auto' }}  component={Paper} >
// <Table aria-label="simple table" minwidth='650'>
//   <TableHead >
//     <TableRow>
//       <TableCell style={{ backgroundColor: "#80deea"}}/>
//       <TableCell  style={{ backgroundColor: "#80deea"}} >Requestor Name</TableCell>
//       {/* <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="right">Email</TableCell> */}
//       <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="right">Occupation</TableCell>
//       <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="right">Company</TableCell>
//       <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="right">Qualifications</TableCell>
//       <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="left">Reasons to Join</TableCell>
//       <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="center">Actions</TableCell>
//       <TableCell style={{fontweight: 'bold', backgroundColor: "#80deea"}} align="left"></TableCell>
      
//     </TableRow>
//   </TableHead>
//  <TableBody>
//   {data.map(rows => (
//       // <ExpandableTableRow id={rows.id} reason={rows.reason}/>
//       <TableRow key={rows.id}>
       
       
//         <TableCell padding="checkbox"></TableCell>
//         <TableCell component="th" scope="row">
//         <Grid container>
//                 <Grid item lg={2}>
//                     <Avatar alt={rows.name} src='.' />
//                 </Grid>
//                 <Grid item lg={10}>
//                     <Typography >{rows.name}</Typography>
//                     <Typography color="textSecondary" variant="body2">{rows.email}</Typography>
                   
//                 </Grid>
//             </Grid>
//         </TableCell>
//         {/* <TableCell align="right">{rows.email}</TableCell> */}
//         <TableCell align="right">{rows.occupation}</TableCell>
//         <TableCell align="right">{rows.company}</TableCell>
//         <TableCell align="right">{rows.qualifications}</TableCell>
//         <TableCell align="left">{rows.reason}</TableCell>
//         <TableCell align="left"><Button id={rows.id} variant="outlined" onClick={()=> handleSend(rows.id)}  disabled={disable} endIcon={<ForwardToInboxIcon />}>
//               Send Link
//             </Button> 
//             </TableCell>

//             <TableCell align="left"><IconButton aria-label="delete" onClick={()=> handleRemove(rows.id)}>
//                 <DeleteOutlineIcon />
//               </IconButton></TableCell>
        
//         {/* <TableCell align="right">{row.reason}</TableCell> */}
        
//      </TableRow>
//     ))}
//  </TableBody>
// </Table>
// </TableContainer>