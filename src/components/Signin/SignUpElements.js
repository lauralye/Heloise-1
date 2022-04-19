import styled from 'styled-components'
import React from 'react'
import img2 from '../../images/svg-5.svg'

export const H1 = styled.h1`

    color: #212121;
    font-size: 48px;
    margin:auto;
    position: relative;
    padding: 40px 40px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`
export const Imgdiv = styled.div`

        background-size: cover;
        display: flex;
        position: relative;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: auto;

`
export const InfoRow = styled.div`

    background-size: cover;
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
  
    height: auto;
   
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    // grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    // @media screen and (max-width 768px){

    //     grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col1 col2'`)};

    // }


`

export const HeroP = styled.p`

    margin-top: 5px;
    color: #212121;
    font-size: 30px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`

export const Formwrapper = styled.div`



            display: flex;
            position: relative;
            flex-direction: column
            align-items: center;
            justify-content: center;
            //width: 800px;
            flex:1;
            // height: 700px;
            

             max-width: 800px;
           
            padding: 26px 30px;
            margin-top: 60px;
            background-color: white;
            box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
            border-radius: 12px;
            min-height: 600px;
            overflow: hidden;

            @media screen and (max-width: 768px) {
                
            
               // position:absolute;
                width: 400px;

            }


`

export const Backgrounddiv = styled.div`
    
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: auto;
    flex:1;


`


export const ButtonSign = styled.button`

    border-radius: 50px;
    
    margin:auto;
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