import React from 'react'
import { useNavigate } from 'react-router-dom';

import {
    InfoContainer, InfoWrapper, InfoRow,
    Column1, Column2,TextWrapper, TopLine
    ,Heading, Subtitle, BtnWrap, ImgWrap, Img
} from './InfoElements'
import { homeObjOne } from './Data'
import styled from '@emotion/styled'
import { Navigate } from 'react-router-dom'


export const Button = styled.button`

    border-radius: 50px;
    background: ${({primary}) => (primary ? '#56e8e3' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
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



const InfoSection = ({lightBg, id, imgStart,topLine, lightText, headline, darkText, 
    description, buttonLabel, img, alt, primary, dark, dark2, routing}) => {

     
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button onClick={routing}
                            smooth={true} duration={500} spy={true} exact={true}
                            offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ?1:0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    
    </>
  )
}

export default InfoSection