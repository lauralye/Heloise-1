import React, {createContext} from 'react';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { UserPool, AdminPool} from './userpool';





const AccountContext = createContext();

const Account = props => {


    const getSession = async () => await new Promise((resolve, reject) =>{

        const user = UserPool.getCurrentUser();
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

    const authenticate = async(Username, Password) => 
    await new Promise((resolve, reject) =>{

        const user = new CognitoUser({
            Username,
            Pool: UserPool

        });

        const authDetails = new AuthenticationDetails({
                Username,
                Password
        });
    
        user.authenticateUser(authDetails, {
            onSuccess: data =>{
                console.log('onSuccess:', data);
                resolve(data);
            },
            onFailure: err =>{
                console.error('onFailure:', err);
                reject(err);
            },
            newPasswordRequire: data =>{
                console.log('newPasswordRequired:', data);
                resolve(data);
            }
        });

    })

    const logout = () =>{
        const user = UserPool.getCurrentUser();
        if(user){
            user.signOut();
            console.log("user logged out!")
        }

    }


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

    const authenticateAdmin = async(Username, Password) => 
    await new Promise((resolve, reject) =>{

        const user = new CognitoUser({
            Username,
            Pool: AdminPool

        });

        const authDetails = new AuthenticationDetails({
                Username,
                Password
        });
    
        user.authenticateUser(authDetails, {
            onSuccess: data =>{
                console.log('onSuccess:', data);
                resolve(data);
            },
            onFailure: err =>{
                console.error('onFailure:', err);
                reject(err);
            },
            newPasswordRequire: data =>{
                console.log('newPasswordRequired:', data);
                resolve(data);
            }
        });

    })

    const logoutAdmin = () =>{
        const user = AdminPool.getCurrentUser();
        if(user){
            user.signOut();
            console.log("Admin logged out!")
        }

    }
    return(

        <AccountContext.Provider value={{

            authenticate, getSession, logout, authenticateAdmin, getSessionAdmin, logoutAdmin
        }}>
            {props.children}
        </AccountContext.Provider>
    )
}

export {Account, AccountContext};