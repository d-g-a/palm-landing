import React from 'react'
import styled from 'styled-components'

const SinopsisStyled = styled.div`

border-radius: 15px;
padding: 24px;
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456331/taby/palm_2_3_nywxd6.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 5/span 4;

p{
    font-size: 16px;
}

@media(max-width:900px){
 padding:16px;
 
 p{
     font-size: 14px;
     }
}

@media(max-width:750px){
   
}
`

function Sinopsis() {
    return (
        <SinopsisStyled>
            <p>
            Con una mezcla de flashbacks autobiográficos, alegorías en clave soundtrack y ficción contemporánea, la novela Promesas a la Muerte dialoga con la ruptura de paradigmas sobre los vínculos afectivos, la masculinidad y el descubrimiento de las conexiones realmente significativas.<br/><br/>
            Promesas a la Muerte es, también, un reflejo de la ruptura de paradigmas de Luis Roberto Pérez-Aguirre, quien cambió el mundo corporativo por el emprendimiento ambiental y la estrategia financiera por una auténtica exploración creativa y emocional. Así surgió esta primera novela, una apuesta por las historias que nos acercan al cambio, al autodescubrimiento y a la empatía mientras escuchamos una buena canción.
            </p>
        </SinopsisStyled>
    )
}

export default Sinopsis
