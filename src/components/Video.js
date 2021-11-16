import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VideoStyled = styled.div`
background-image: url("https://filedn.eu/lKgCej4LmUqu4jd08olI6Jy/palm_textura_4.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
border-radius: 15px;
grid-row:5/span 3;

@media(min-width:1440px){
    grid-row: 5/span 3;
}

@media(max-width:900px){

}

@media(max-width: 750px){
    margin-bottom: 40px;
    border-radius: 15px;
}
`

function Video({url}) {
    return (
        <VideoStyled>
            <ReactPlayer
                className="player"
                width="inherit"
                url={url}
                //light={true}
                //playing="false" 
                //loop="false"
                muted="true"
                controls="true"
                volume="0.5"
                />    
        </VideoStyled>
    )
}

export default Video
