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
height: 100vh;
`

function App() {
  return (
    <AppStyled>
        <Title/>
        <Button/>
        <Cita/>
        <Extracto/>
        <Libro/>
        <Newsletter/>
        <Ligas/>
        <Postalgia/>
        <Sinopsis/>
    </AppStyled>
  );
}

export default App;
