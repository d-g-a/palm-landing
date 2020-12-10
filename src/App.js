import Title from './components/Title'
import Button from './components/Button'
import Cita from './components/Cita'
import Extracto from './components/Extracto'
import Libro from './components/Libro'
import Ligas from './components/Ligas'
import Newsletter from './components/Newsletter'
import Postalgia from './components/Postalgia'
import Sinopsis from './components/Sinopsis'
import styled from 'styled-components'
import Video from './components/Video'
import VideoDos from './components/VideoDos'

const AppStyled = styled.div`
padding: 40px;
background-color: black;
display: flex;
flex-direction: column;


.body{
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(10,100px);
}



@media(min-width:2560px){
    padding: 40px 720px;
}

@media(min-width:1440px){
    padding: 40px 800px;
}

@media(min-width:1024px){
    padding: 40px 80px;
}

@media(max-width:750px){
  
  .body{
      display: flex;
      flex-direction: column;
  }
}

`

function App() {
  return (
    <AppStyled>
        <div className="title">
            <Title/>  
        </div>
        <div className="body" >
            <Button className="button"/>
            <Newsletter className="newsletter"/>
            <Extracto className="extracto"/>
            <Libro className="libro"/>
            <Video url="https://res.cloudinary.com/dieglitter/video/upload/v1607567694/taby/01_Promesas_a_la_Muerte_Teaser_One_gz57aa.mp4"/>
            <Sinopsis className="sinopsis"/>
            <Postalgia className="postalgia"/>
            <Cita className="cita"/>
            <VideoDos url="https://res.cloudinary.com/dieglitter/video/upload/v1607566370/taby/02_Promesas_a_la_Muerte_Teaser_Two_hoz7b1.mp4"/> 
            <Ligas className="ligas"/>  
        </div>
       
    </AppStyled>
  );
}

export default App;
