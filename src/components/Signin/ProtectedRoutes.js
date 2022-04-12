import React from 'react'
import {Route, Navigate} from 'react-router-dom'

const ProtectedRoutes = ({isAuth: IsAuth, element: Element, ...rest}) => {
  return (
    <Route {...rest} render={(props)=>{ 
        if (IsAuth){
            return <Element />
        }return <Navigate to={{pathname: '/login', state: {from: props.location}}}  />
    }}/>
  )
}


export default ProtectedRoutes