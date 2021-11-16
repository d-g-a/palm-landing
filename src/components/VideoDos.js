import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VideoDosStyled = styled.div`
border-radius: 15px;
background-image: url("https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_2.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row:9/span 3;


@media(min-width:1440px){
    grid-row: 10/span 3;
}

@media(max-width: 750px){
    margin-bottom:  40px;
    border-radius: 15px;
}

`
function VideoDos({url}) {
    return (
        <VideoDosStyled>
             <ReactPlayer
                className="player"
                width="inherit"
                url={url}
                playing="false" 
                loop="false"
                muted="true"
                controls="true"
                volume="0.5"
                />    
        </VideoDosStyled>
    )
}

export default VideoDos
