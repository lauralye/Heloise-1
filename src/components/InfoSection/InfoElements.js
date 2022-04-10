import styled from "styled-components"


export const InfoContainer = styled.div`

    color:#fff;
    background: ${({lightBg}) => (lightBg ? '#0f9f9f9' : '#010606')};


    @media scren and (max-width: 768px){

        padding: 100px 0;

    }
    
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;



`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-column:
    align-items:
    grid-template-areas:



`