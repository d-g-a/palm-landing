import React from 'react'
import styled from 'styled-components'

const LibroStyled = styled.div`
color: white;
background-color: burlywood;
`
function Libro() {
    return (
        <LibroStyled>
            <img src="../images/libro.jpg" alt="Promesas a la Muerte"/> 
        </LibroStyled>
    )
}

export default Libro
