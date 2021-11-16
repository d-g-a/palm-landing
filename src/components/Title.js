import React from 'react'
import styled from 'styled-components'


const TitleStyled = styled.div`
color: white;
padding: 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align: center;
border-radius: 15px;
height: 140px; 
background-image: url('https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_5.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
margin-bottom: 40px;

h1{
    font-size: 56px;
    font-weight: 500;
}

p{
    font-size: 24px;
    font-weight: 300px;
}

@media(max-width:900px){
}

@media(max-width:750px){
    height: 80px;
    h1{
    font-size: 32px;
    }
    p{
        font-size: 16px;
    }   
}

@media(max-width:480px){
    padding: 20px;
    height: 160px;
    h1{
    font-size: 48px;
    }
    p{
        font-size: 14px;
    } 
}


@media(max-width:415px){
    padding: 16px;
    height: 120px;
    h1{
        font-size:32px;
    }
    p{
        font-size:12px;
    }
}

@media(max-width: 375px){
    padding: 12px;
    height: 120px;

    h1{
        font-size:30px;
    }
    p{
        font-size:10px;
    }
}

@media(max-width: 320px){
    padding: 12px;
    height: 120px;

    h1{
        font-size:24px;
    }
    p{
        font-size:8px;
    }
}

`

function Title() {
    return (
        <TitleStyled>
            <h1>Promesas a la Muerte</h1>
            <p>Una novela de Luis Roberto Pérez-Aguirre<br/> 
                sobre transformación, canciones y postalgia.</p>

        </TitleStyled>
    )
}

export default Title
