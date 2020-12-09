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
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456331/taby/palm_2_g6djpx.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 9/span 2;

p{
    font-size: 32px;
    font-weight: bold; 
}

@media(max-width:900px){
    
}
@media(max-width:750px){
    
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
