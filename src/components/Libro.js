import React from 'react'
import styled from 'styled-components'

const LibroStyled = styled.div`
color: white;
grid-row: 3/span 4;

.libro{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

@media(min-width:1440px){
    grid-row: 3/span 5;
}

@media(max-width: 750px){
    margin-bottom: 40px;
}
`
function Libro() {
    return (
        <LibroStyled>
            <img className="libro" src="https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/libro.jpg" alt="Promesas a la Muerte"/> 
        </LibroStyled>
    )
}

export default Libro
