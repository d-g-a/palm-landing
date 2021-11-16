import React from 'react'
import styled from 'styled-components'

const CitaStyled = styled.div`
color: white;
padding: 24px;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-image: url("https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_1.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 12/span 2;

p{
    font-size: 32px;
    font-weight: bold; 
}

@media(min-width:1440px){
    grid-row: 11/span 2;
}

@media(max-width:900px){
    
}
@media(max-width: 750px){
    margin-bottom: 40px;
}

`

function Cita() {
    return (
        <CitaStyled >
            <p>”We are accidents, waiting, waiting to happen…”</p>
        </CitaStyled >
    )
}

export default Cita
