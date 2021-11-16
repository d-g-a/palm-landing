import React from 'react'
import styled from 'styled-components'

const PostalgiaStyled = styled.div`

color: white;
padding: 24px;
border-radius: 15px;
background-image: url("https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_1.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 7/span 2;
h4{
    font-size:24px;
}
p{
    font-size: 17px;
}

@media(min-width:1440px){
    grid-row: 8/span 2;
    h4{
        font-size: 32px;
    }
    p{
        font-size: 20px;
    }
}

@media(max-width:900px){
    
}
@media(max-width: 750px){
    margin-bottom: 40px;
}

`

function Postalgia() {
    return (
        <PostalgiaStyled>
            <h4>Postalgia</h4>
            <br/>
            <p>
            1. f. Melancolía por el hecho de que esa vivencia que te provoca tanta dicha está terminando, mientras ocurre. 
            </p>
            <br/>
            <p>
            2. Ansiedad por la naturaleza finita de un instante extraordinario que quisieras que nunca terminara.
            </p>  
        </PostalgiaStyled>
    )
}

export default Postalgia
