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

const AppStyled = styled.div`
padding: 40px;
background-color: black;

.body{
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(10,100px);
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
            <Sinopsis className="sinopsis"/>
            <Postalgia className="postalgia"/>
            <Cita className="cita"/>
            <Ligas className="ligas"/>
        </div>
       
    </AppStyled>
  );
}

export default App;
