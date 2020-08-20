import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: red;
`
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 10px;
  gap: 20px;
  background-color: lightblue;
`

export const CardContainer = styled.div`
  background-color: green;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: green;
`

export const HeaderCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
`

export const ImagemCard = styled.img`
  width: 100%;
`
export const BotaoCarrinho = styled.div`
display: flex;
justify-content: center;
background-color: black;
width: 100px;
height: 100px;
border-radius: 50px;
position: fixed;
right: 20px;
bottom: 100px;
cursor: pointer;
`