import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.div`

background-color: blue;
color: white;
`

function Title() {
    return (
        <TitleStyled>
            <h1>Promesas a la Muerte</h1>
            <p>Una novela de Luis Roberto Pérez-Aguirre  
                sobre transformación, caniones y postalgia.</p>

        </TitleStyled>
    )
}

export default Title
