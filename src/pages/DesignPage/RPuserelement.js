import styled from 'styled-components'
import React from 'react'


export const Banner = styled.div`

        position: absolute;
        width: 100%;
        height: 217px;
        left: 0px;
        //top: 86px;

        background: #F0F0F0;


`


export const Container = styled.div`
            
        position: absolute;
        width: 100%;
        height: 1113px;
        left: 0px;
        top: 0px;



`

export const Title = styled.h1`

    position: absolute;
    width: 138px;
    height: 56.52px;
    left: 109px;
    top: 150px;

    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 52px;

    color: #000000;


`

export const Pic = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 221px;
    top: 409px;

  //  background: url(image.png);
    border: 5px solid #A5A58D;
    box-sizing: border-box;


`

export const ButtonSign = styled.button`

    border-radius: 50px;
    position: absolute;
    left: 100px;
    top: 195px;
    // margin:auto;
    background: ${({primary}) => (primary ? '#56e8e3' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 80px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '17px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    position:relative;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    margin-top:170px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#56e8e3' )};
    }

`

export const Line =styled.div`
    position: absolute;
    width: 800.41px;
    height: 2px;
    left: 120px;
    top: 760px;

    background: #56E8E3;
    transform: matrix(0, 1, 1, 0, 0, 0);



`


export const Formwrapper = styled.div`



            display: flex;
            position: relative;
            flex-direction: column
            align-items: center;
            justify-content: center;
            width: 700px;
            flex:1;
             height: 700px;
            

            // max-width: 600px;
           
            padding: 26px 30px;
          //  margin-top: 60px;
            background-color: white;
            box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
            border-radius: 12px;
           // min-height: 300px;
            overflow: hidden;
            left: 600px;
            top: -80px;

            @media screen and (max-width: 768px) {
                
            
               // position:absolute;
                width: 400px;

            }


`



export const ButtonSign2 = styled.button`

    border-radius: 50px;
    
    left: -50px;
    top:300px;
     margin:auto;
    background: ${({primary}) => (primary ? '#56e8e3' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 52px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '17px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    position:relative;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
   // margin-top:170px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#56e8e3' )};
    }

`
