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
import { confirmAlert } from 'react-confirm-alert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import { SnackbarProvider, useSnackbar } from 'notistack';
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




  const [selectedRows, setSelectedRows] = useState([]);
  const [empty, setEmpty] = useState([]);
  const [pageSize, setPageSize]= useState(5)
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [occupation, setOccupation]= useState('')
  const [company, setCompany]= useState('')
  const [idd, setIdd]= useState('')


  const refreshdata = () =>{

   // setData([]);
   window.location.reload();
  }

  const sendMail = async (props) =>{
    
    //parsingData(datas)

   await emailjs.send('service_pqya14m', 'template_u262k1s', {name: props.name, occupation: props.occupation, company: props.company, to_email: props.email }, 'mD4Tm6VlbxJIbHSMY')
    .then((result) => {
        console.log(result.text);
        console.log('Email Sent!')
         handleClickSnack2()

    }, (error) => {
        console.log(error.text);
    });
   
    return (console.log("done"))

  }

  const handleDeleteDecline= async (datoo) =>{
    
   

    datoo.map((datas) =>{
    
      //setIdd(datas.id)
      console.log("the id to be deleted:" +datas.id)
      try{

        axios.delete('https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/',
         { data: {id: datas.id} }
        ).then(console.log("DELETED") )
      //  handleClickSnack() 
  
      }catch(err){
        console.log(`Error: ${err.message}`)
      }


      emailjs.send('service_pqya14m', 'template_u28gjbi', {name: datas.name, to_email:datas.email}, 'mD4Tm6VlbxJIbHSMY')
      .then((result) => {
          console.log(result.text);
          console.log('Email Sent!')
           
  
      }, (error) => {
          console.log(error.text);
      });

      handleClickSnack()
    }
  
  )
  //setTimeout(refreshdata(), 5000)
}


  const handleDelete= async (datoo) =>{
    
   

      datoo.map((datas) =>{
      
        //setIdd(datas.id)
        console.log("the id to be deleted:" +datas.id)
        try{

          axios.delete('https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/',
           { data: {id: datas.id} }
          ).then(console.log("DELETED") )
        //  handleClickSnack()
          
    
        }catch(err){
          console.log(`Error: ${err.message}`)
        }
      }
    
    )

      

    //setTimeout(refreshdata(), 5000)
  }



  const parsingData = (daa) =>{

  //  handleClickOpen()

   //console.log(selectedRows.name)

    daa.map((datas, index) =>{
        
        
        setName(datas.name)
        setEmail(datas.email)
        setOccupation(datas.occupation)
        setCompany(datas.company)
        setIdd(datas.id) 
        console.log(datas.name)
        console.log(datas.id)

        emailjs.send('service_pqya14m', 'template_u262k1s', {name: datas.name, occupation: datas.occupation, company: datas.company, to_email:datas.email }, 'mD4Tm6VlbxJIbHSMY')
      .then((result) => {
        console.log(result.text);
        console.log('Email Sent!')
         handleClickSnack2()


         const response =  axios.post('https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev/profiles', 
         JSON.stringify({
      
           email: datas.email,
         
     
         }))
     
         console.log(response.data)


    }, (error) => {
        console.log(error.text);
    });

       
       
        handleDelete(selectedRows)
        
           
      }

      
      )

      //post smthing

}




// dialog box
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const [open, setOpen] = useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (ev) => {


    let id = ev.target.id

    if(id ==="clicked"){
        parsingData()
    }else{
      setOpen(false);
    }

    
  // refreshdata()
  };


    
const handleConfirm = () =>{

  setOpen(false);
  //parsingData()
  // setTimeout(parsingData(selectedRows), 5000)
  // setTimeout(refreshdata(), 5000)
  
}

const submitDelete = (data) => {

  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => handleDelete(data)
      },
      {
        label: 'No',
        //onClick: () => alert('Click No')
      }
    ]
  });
}
  

//first snack bar
const [opensnack, setOpenSnack] = React.useState(false);

    const handleClickSnack = () => {
     setOpenSnack(true);
   };

    const handleCloseSnack = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
 
     setOpenSnack(false);
   };

   const Alert = React.forwardRef(function Alert(props, ref) {
     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });
   
   //second snackbar

   const [opensnack2, setOpenSnack2] = React.useState(false);

    const handleClickSnack2 = () => {
     setOpenSnack2(true);
   };

    const handleCloseSnack2 = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
 
     setOpenSnack2(false);
   };

   const Alert2 = React.forwardRef(function Alert(props, ref) {
     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });
 

  const columns = [
    { field: 'id', headerName: 'ID', width: 35 },
    { field: 'name', headerName: 'Requestor Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'occupation', headerName: 'Occupation', width: 210},
    { field: 'company', headerName: 'Company', width: 135},
    { field: 'qualifications', headerName: 'Qualifications', width: 400 },
    { field: 'reason', headerName: 'Reason to Join', width: 370 },
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
              height: "600px", width: '100%' }}>
                
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
                console.log(selectedRows)
              }}



              />
              </div >

              <Grid container justifyContent="center" alignItems="center" spacing={8}>

                <Grid item >
                <Button onClick={()=> {parsingData(selectedRows)}} sx={{backgroundColor: "#56e8e3"}} variant="contained" size="large"  endIcon={<ForwardToInboxIcon />}>
                   Approve Request 
                 </Button>

                 
                {/* <Button  variant="contained" onClick={handleClickOpen}>Click</Button> */}
                </Grid>

                <Grid item >
                <Button onClick={()=> {handleDeleteDecline(selectedRows)}} sx={{backgroundColor: "#56e8e3"}} variant="contained" size="large"  >
                   Decline Request
                 </Button>

                 
                {/* <Button  variant="contained" onClick={handleClickOpen}>Click</Button> */}
                </Grid>
               

              </Grid>

                <div>
              {/* <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Confirm Approve?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Approving will trigger sending an invitation email to the selected requestors: 
                   Name: {name}  |  Email: {email}.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button id="clicked" onClick={handleClose}>Confirm</Button>
                </DialogActions>
              </Dialog> */}
              </div>
              {/* {
                parsingData(selectedRows)
              } */}
                 <SnackbarProvider>
                 <Snackbar open={opensnack} autoHideDuration={4500} onClose={handleCloseSnack}>
              <Alert onClose={handleCloseSnack} severity="info" sx={{ width: '100%' }}>
                Reject Email Sent to Requestor !
              </Alert>
            </Snackbar> 

            <Snackbar open={opensnack2} autoHideDuration={4500} onClose={handleCloseSnack2}>
              <Alert2 onClose={handleCloseSnack2} severity="success" sx={{ width: '100%' }}>
                Sign Up Invitation Email Sent !
              </Alert2>
            </Snackbar> 
            </SnackbarProvider>
                 
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