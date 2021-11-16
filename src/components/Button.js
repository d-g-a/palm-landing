import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.div`
color: white;
padding: 24px;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
background-image: url("https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_2.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 1/span 1;
  a{
    color: white;
    font-size: 30px;
    font-weight: 500;
    text-decoration: underline;
        &:hover{
        background: -webkit-linear-gradient(#004FE9,#0075FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }
}

@media(max-width:900px){
    color: blue;
    padding: 16px;

    a{
        font-size: 22px;
    }
}

@media(max-width:780px){
    padding:16px;
    a{
        font-size:20px;
        }
}

@media(max-width: 750px){
    margin-bottom: 40px;
}

@media(max-width: 320px){
    a{
        font-size: 14px;
    }
}

`

function Button() {
    return (
        <ButtonStyled>
            <a href="https://www.amazon.com/dp/B08MHRRJT2" target="_blank" rel="noreferrer">QUIERO MI PROMESA</a>
        </ButtonStyled>
    )
}

export default Button
