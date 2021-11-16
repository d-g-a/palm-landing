import React from 'react'
import styled from 'styled-components'

const SinopsisStyled = styled.div`

border-radius: 15px;
padding: 24px;
background-image: url("https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_3.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 8/span 4;

p{
    font-size: 20px;
}

@media(min-width:1440px){
    grid-row: 8/span 3;
}

@media(max-width:1180px){
    p{
        font-size: 18px;  
        }

}

@media(max-width:940px){
 padding:16px;
 
 p{
     font-size: 14px;
     }
}

@media(max-width: 750px){
    margin-bottom: 40px;
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
