import React, {useContext, useEffect, useState} from 'react'
import { Account, AccountContext } from '../components/Signin/Acconts'
import {  AdminPool} from '../components/Signin/userpool';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import axios from "axios"


import Amplify, { API } from 'aws-amplify';


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
          console.log(data)

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

    }

    )

    // const fetchData = () =>{

    //   return axios.get("https://c8or9cmye3.execute-api.ap-southeast-1.amazonaws.com/dev")
    //   .then((response)=> setData(response.json));
      
    // }

    // useEffect(() =>{
    //   fetchData()
      
    //   console.log(data)
     
    // }, []

    // )

  //  async function fetchData (){
  //     const apiData = await API.get('MockApi', '/')
  //     setData(apiData.message)
      

  //  }

  //  useEffect(()=> {
  //    fetchData()
  //    console.log(data)
  //  }, [])

  // const Arrayobject = () =>{
  //   <div>
  //     {
  //       data.body[0].map(function(d,idx){
  //         return (<li key={idx}>{d.name}</li>)
  //       })
  //     }
  //   </div>
  // }

  return (
    
    <div>
    <h1>Main Page for Admin after logged In</h1>

    {/* {
      Object.keys(data).map((key, i)=> (
        <p key={i}>
          <span>Key Name: {key}</span>
          <span>Value: {data[key]}</span>
        </p>
      )

      )
    } */}
    {/* <Arrayobject/> */}
    {/* <p>{data.id}</p> */}
    
      {/* <ul>
      
        {data.map(s => (<li>{s}</li>))}

   
      </ul> */}
      
        
        {data.map((user) => ( 
          <ul>
          <li key={user.id}>{user.name}</li>
          <li key={user.id}>{user.email}</li>
          </ul>
          
         
         

        ))}
        
   
    
    <button onClick={logoutAdmin}>Logout</button>
    {logoutdirect ? <Navigate to='/login'/> : null}
    </div>

  )
}

export default Admin


// {data.length > 0 && (
//   <ul>
//   {data.map(user => ( 
//     <li key={user.id}>{user.name}</li>

//   ))}
//   </ul>
// )}


  // {/* {data.length > 0 && (
  //     <ul>
  //     {data.map(user => ( 
  //       <li key={user.id}>{user.name}</li>

  //     ))}
  //     </ul>
  //   )}
  //    */}