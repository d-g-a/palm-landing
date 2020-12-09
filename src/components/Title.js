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
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456327/taby/palm_2_4_cqgmfn.jpg");
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
    height: 64px;
    h1{
    font-size: 24px;
    }
    p{
        font-size: 14px;
    } 
}

@media(max-width:410px){

    h1{
        font-size:22px;
    }
    p{
        font-size:12px;
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
