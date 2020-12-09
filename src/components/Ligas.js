import React  from 'react'
import styled from 'styled-components'

const LigasStyled = styled.div`

color: white;
padding: 24px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-radius: 15px;
background-image: url("https://res.cloudinary.com/dieglitter/image/upload/v1607456331/taby/palm_2_2_uhksr1.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
grid-row: 9/span 1;

a{
    color: black;
    text-decoration: underline;
    font-size: 20px;
    &:hover{
        background: -webkit-linear-gradient(#004FE9,#0075FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
    }
}

p{
    font-size: 16px;
}

.disclaimer{
    font-size: 12px;
}

.instagram{
    width: 24px;
}

@media(min-width:1440px){
    grid-row : 10/span 1;
}

@media(max-width:900px){

}
    
@media(max-width: 750px){
    margin-bottom: 40px;
}
`

function Ligas() {

    return (
        <LigasStyled >
            <div className="links">
                <a href="https://www.amazon.com/dp/B08MHRRJT2" 
                target="_blank"
                rel="noreferrer"
                >
                    Disponible en Amazon  (Pasta Blanda y Kindle)
                </a>

            <p className="disclaimer">Para pedir la versión en pasta blanda asegúrate de <br/>hacer la compra desde Amazon Estados Unidos.</p>

            </div>
            <a href="https://www.instagram.com/promesasalamuerte/"
               target="_blank"
               rel="noreferrer"
               className="instagram"
            ><img className="instagram" alt="instagram" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSIwIDAgNTExIDUxMS45IiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTUxMC45NDkyMTkgMTUwLjVjLTEuMTk5MjE5LTI3LjE5OTIxOS01LjU5NzY1Ny00NS44OTg0MzgtMTEuODk4NDM4LTYyLjEwMTU2Mi02LjUtMTcuMTk5MjE5LTE2LjUtMzIuNTk3NjU3LTI5LjYwMTU2Mi00NS4zOTg0MzgtMTIuODAwNzgxLTEzLTI4LjMwMDc4MS0yMy4xMDE1NjItNDUuMzAwNzgxLTI5LjUtMTYuMjk2ODc2LTYuMzAwNzgxLTM0Ljg5ODQzOC0xMC42OTkyMTktNjIuMDk3NjU3LTExLjg5ODQzOC0yNy40MDIzNDMtMS4zMDA3ODEtMzYuMTAxNTYyLTEuNjAxNTYyLTEwNS42MDE1NjItMS42MDE1NjJzLTc4LjE5OTIxOS4zMDA3ODEtMTA1LjUgMS41Yy0yNy4xOTkyMTkgMS4xOTkyMTktNDUuODk4NDM4IDUuNjAxNTYyLTYyLjA5NzY1NyAxMS44OTg0MzgtMTcuMjAzMTI0IDYuNS0zMi42MDE1NjIgMTYuNS00NS40MDIzNDMgMjkuNjAxNTYyLTEzIDEyLjgwMDc4MS0yMy4wOTc2NTcgMjguMzAwNzgxLTI5LjUgNDUuMzAwNzgxLTYuMzAwNzgxIDE2LjMwMDc4MS0xMC42OTkyMTkgMzQuODk4NDM4LTExLjg5ODQzOCA2Mi4wOTc2NTctMS4zMDA3ODEgMjcuNDAyMzQzLTEuNjAxNTYyIDM2LjEwMTU2Mi0xLjYwMTU2MiAxMDUuNjAxNTYycy4zMDA3ODEgNzguMTk5MjE5IDEuNSAxMDUuNWMxLjE5OTIxOSAyNy4xOTkyMTkgNS42MDE1NjIgNDUuODk4NDM4IDExLjkwMjM0MyA2Mi4xMDE1NjIgNi41IDE3LjE5OTIxOSAxNi41OTc2NTcgMzIuNTk3NjU3IDI5LjU5NzY1NyA0NS4zOTg0MzggMTIuODAwNzgxIDEzIDI4LjMwMDc4MSAyMy4xMDE1NjIgNDUuMzAwNzgxIDI5LjUgMTYuMzAwNzgxIDYuMzAwNzgxIDM0Ljg5ODQzOCAxMC42OTkyMTkgNjIuMTAxNTYyIDExLjg5ODQzOCAyNy4yOTY4NzYgMS4yMDMxMjQgMzYgMS41IDEwNS41IDEuNXM3OC4xOTkyMTktLjI5Njg3NiAxMDUuNS0xLjVjMjcuMTk5MjE5LTEuMTk5MjE5IDQ1Ljg5ODQzOC01LjU5NzY1NyA2Mi4wOTc2NTctMTEuODk4NDM4IDM0LjQwMjM0My0xMy4zMDA3ODEgNjEuNjAxNTYyLTQwLjUgNzQuOTAyMzQzLTc0Ljg5ODQzOCA2LjI5Njg3Ni0xNi4zMDA3ODEgMTAuNjk5MjE5LTM0LjkwMjM0MyAxMS44OTg0MzgtNjIuMTAxNTYyIDEuMTk5MjE5LTI3LjMwMDc4MSAxLjUtMzYgMS41LTEwNS41cy0uMTAxNTYyLTc4LjE5OTIxOS0xLjMwMDc4MS0xMDUuNXptLTQ2LjA5NzY1NyAyMDljLTEuMTAxNTYyIDI1LTUuMzAwNzgxIDM4LjUtOC44MDA3ODEgNDcuNS04LjYwMTU2MiAyMi4zMDA3ODEtMjYuMzAwNzgxIDQwLTQ4LjYwMTU2MiA0OC42MDE1NjItOSAzLjUtMjIuNTk3NjU3IDcuNjk5MjE5LTQ3LjUgOC43OTY4NzYtMjcgMS4yMDMxMjQtMzUuMDk3NjU3IDEuNS0xMDMuMzk4NDM4IDEuNXMtNzYuNS0uMjk2ODc2LTEwMy40MDIzNDMtMS41Yy0yNS0xLjA5NzY1Ny0zOC41LTUuMjk2ODc2LTQ3LjUtOC43OTY4NzYtMTEuMDk3NjU3LTQuMTAxNTYyLTIxLjE5OTIxOS0xMC42MDE1NjItMjkuMzk4NDM4LTE5LjEwMTU2Mi04LjUtOC4zMDA3ODEtMTUtMTguMzAwNzgxLTE5LjEwMTU2Mi0yOS4zOTg0MzgtMy41LTktNy42OTkyMTktMjIuNjAxNTYyLTguNzk2ODc2LTQ3LjUtMS4yMDMxMjQtMjctMS41LTM1LjEwMTU2Mi0xLjUtMTAzLjQwMjM0M3MuMjk2ODc2LTc2LjUgMS41LTEwMy4zOTg0MzhjMS4wOTc2NTctMjUgNS4yOTY4NzYtMzguNSA4Ljc5Njg3Ni00Ny41IDQuMTAxNTYyLTExLjEwMTU2MiAxMC42MDE1NjItMjEuMTk5MjE5IDE5LjIwMzEyNC0yOS40MDIzNDMgOC4yOTY4NzYtOC41IDE4LjI5Njg3Ni0xNSAyOS4zOTg0MzgtMTkuMDk3NjU3IDktMy41IDIyLjYwMTU2Mi03LjY5OTIxOSA0Ny41LTguODAwNzgxIDI3LTEuMTk5MjE5IDM1LjEwMTU2Mi0xLjUgMTAzLjM5ODQzOC0xLjUgNjguNDAyMzQzIDAgNzYuNS4zMDA3ODEgMTAzLjQwMjM0MyAxLjUgMjUgMS4xMDE1NjIgMzguNSA1LjMwMDc4MSA0Ny41IDguODAwNzgxIDExLjA5NzY1NyA0LjA5NzY1NyAyMS4xOTkyMTkgMTAuNTk3NjU3IDI5LjM5ODQzOCAxOS4wOTc2NTcgOC41IDguMzAwNzgxIDE1IDE4LjMwMDc4MSAxOS4xMDE1NjIgMjkuNDAyMzQzIDMuNSA5IDcuNjk5MjE5IDIyLjU5NzY1NyA4LjgwMDc4MSA0Ny41IDEuMTk5MjE5IDI3IDEuNSAzNS4wOTc2NTcgMS41IDEwMy4zOTg0MzhzLS4zMDA3ODEgNzYuMzAwNzgxLTEuNSAxMDMuMzAwNzgxem0wIDAiLz48cGF0aCBkPSJtMjU2LjQ0OTIxOSAxMjQuNWMtNzIuNTk3NjU3IDAtMTMxLjUgNTguODk4NDM4LTEzMS41IDEzMS41czU4LjkwMjM0MyAxMzEuNSAxMzEuNSAxMzEuNWM3Mi42MDE1NjIgMCAxMzEuNS01OC44OTg0MzggMTMxLjUtMTMxLjVzLTU4Ljg5ODQzOC0xMzEuNS0xMzEuNS0xMzEuNXptMCAyMTYuODAwNzgxYy00Ny4wOTc2NTcgMC04NS4zMDA3ODEtMzguMTk5MjE5LTg1LjMwMDc4MS04NS4zMDA3ODFzMzguMjAzMTI0LTg1LjMwMDc4MSA4NS4zMDA3ODEtODUuMzAwNzgxYzQ3LjEwMTU2MiAwIDg1LjMwMDc4MSAzOC4xOTkyMTkgODUuMzAwNzgxIDg1LjMwMDc4MXMtMzguMTk5MjE5IDg1LjMwMDc4MS04NS4zMDA3ODEgODUuMzAwNzgxem0wIDAiLz48cGF0aCBkPSJtNDIzLjg1MTU2MiAxMTkuMzAwNzgxYzAgMTYuOTUzMTI1LTEzLjc0NjA5MyAzMC42OTkyMTktMzAuNzAzMTI0IDMwLjY5OTIxOS0xNi45NTMxMjYgMC0zMC42OTkyMTktMTMuNzQ2MDk0LTMwLjY5OTIxOS0zMC42OTkyMTkgMC0xNi45NTcwMzEgMTMuNzQ2MDkzLTMwLjY5OTIxOSAzMC42OTkyMTktMzAuNjk5MjE5IDE2Ljk1NzAzMSAwIDMwLjcwMzEyNCAxMy43NDIxODggMzAuNzAzMTI0IDMwLjY5OTIxOXptMCAwIi8+PC9zdmc+" /></a>
        </LigasStyled >
    )
}

export default Ligas
