import React from 'react'
import styled from 'styled-components'

const ExtractoStyled = styled.div`
color: white;
padding: 24px;
border-radius: 15px;
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456327/taby/palm_2_4_cqgmfn.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 2/span 3;
p{
    font-size: 20px;
}

@media(max-width:1180px){
    p{
        font-size: 18px;  
        }

}

@media(max-width:900px){
    padding: 16px;
    p{
        font-size: 14px;  
        }

}

@media(max-width: 750px){
    margin-bottom: 40px;
}
`

function Extracto() {
    return (
        <ExtractoStyled>
            <p>
            En este relato no les voy a platicar lo que quieren escuchar. No es una historia de redención. No es una historia en que el amor lo puede con todo: es una historia de muerte, una historia de almas que se encuentran y se separan.<br/><br/>
            Esto es el relato de un hombre imperfecto que fue absorbido en un agujero negro -que también es dorado-, con el destino maldito y sagrado de habitar en el interior.<br/><br/>
            -Rufino
            </p>
            
        </ExtractoStyled>
    )
}

export default Extracto
