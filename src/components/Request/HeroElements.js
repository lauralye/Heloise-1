import React from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`

    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: Linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent);
        z-index: 2;

    }


`
export const HeroBg = styled.div`


    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;


`
export const ImgBg = styled.img`

    width: 100%;
    height: 100%;
    // -o-object-fit: cover;
    // object-fit: cover;
    background: #fff;
  

`
export const HeroContent = styled.div`

    display: inline-block;
    flex-direction: column
    align-items: center;
    
    z-index: 5;
    max-width: 1200px;
    position: absolute;
    padding: 50px 50px;
    margin: auto;
    


`
export const HeroH1 = styled.h1`

    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const HeroP = styled.p`

    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }

`

export const FormWrapper = styled.div`
    display: inline-block;
    flex-direction: column
    align-items: center;
    
    // height: 700px;
    width: 800px;
    z-index: 5;
    // max-width: 1200px;
    position: relative;
    padding: 26px 30px;
    margin-top: 900px;
    background-color: white;
    box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
    border-radius: 12px;
    min-height: 600px;
    overflow: hidden;
    
    @media screen and (max-width: 768px) {
         
       
        position:absolute;
           width: 400px;
        
         
        
      }


`

export const FormText = styled.h1`

    color: #fff;
    margin-top: 24px;
    font-size: 48px;
    text-align: center;

`

export const HeroBtnWrapper = styled.div`

    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const ArrowForward = styled(MdArrowForward)`

    margin-left: 8px;
    font-size: 20px;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;

`

export const ButtonB = styled.button`

    border-radius: 50px;
    margin-left:auto;
    background: ${({primary}) => (primary ? '#56e8e3' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px6')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#56e8e3' )};
    }

`

