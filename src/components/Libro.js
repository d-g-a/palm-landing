import React from 'react'
import styled from 'styled-components'

const LibroStyled = styled.div`
color: white;
background-color: burlywood;
grid-row: 3/span 4;

.libro{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}
@media(max-width:900px){
    color: blue;
}
`
function Libro() {
    return (
        <LibroStyled>
            <img className="libro" src="https://res.cloudinary.com/dieglitter/image/upload/v1607123766/taby/libro_icjmjg.jpg" alt="Promesas a la Muerte"/> 
        </LibroStyled>
    )
}

export default Libro
