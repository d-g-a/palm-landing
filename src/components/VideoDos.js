import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const VideoDosStyled = styled.div`
border-radius: 15px;
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456327/taby/palm_2_4_cqgmfn.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row:9/span 2;


@media(min-width:1440px){
    grid-row: 10/span 2;
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
                loop="true"
                muted="true"
                controls="true"
                volume="0.5"
                />    
        </VideoDosStyled>
    )
}

export default VideoDos
