import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VideoStyled = styled.div`
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456331/taby/palm_2_2_uhksr1.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
grid-row:5/span 1;

@media(min-width:1440px){
    grid-row: 5/span 1;
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
                playing="false" 
                loop="true"
                muted="true"
                controls="true"
                volume="0.5"
                />    
        </VideoStyled>
    )
}

export default Video
