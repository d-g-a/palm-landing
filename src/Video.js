import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VideoStyled = styled.div`

.player{
    grid-row:11/span 1;
}

@media(min-width:1440px){
    grid-row: 12/span 1;
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
