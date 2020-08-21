import styled from 'styled-components'

export const AppContainer = styled.div`
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  font-size: 22px;
  color: whitesmoke;
  > h1 {
    font-family:'Lobster', cursive;
    font-size: 50px;
    color: coral;
  }
`
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.carrinhoAberto ? '1fr 3fr 1fr' : '1fr 3fr'};
  padding: 10px;
  gap: 20px;
  background-color: whitesmoke;
`

export const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  padding: 20px;
  border-radius: 10px;
  > input {
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    box-shadow: 2px 2px 4px gray;
    :focus {
      box-shadow: 2px 2px 4px coral;
    } 
  }
`
export const Chapolin = styled.img`
  margin-top: 40px;  
  border-radius: 7px;
  
`
export const CardContainer = styled.div`
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: whitesmoke;
  font-size: 12px;
`
export const HeaderCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;

  > select {
    padding: 8px;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
  }
`
export const CardProduto = styled.div`
  border: none;
  border-radius: 15px;
  padding: 5px;
  margin: 5px;
  text-align: center;
  background-color: white;
  box-shadow: 2px 2px 4px gray;
  > button {
    background-color: black;
    color: white;
    border: unset;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 17px;
    transition: 0.5s;
    outline: none;
    :hover {
      background: coral;
    }
    cursor: pointer;
  }
`
export const ImagemCard = styled.img`
  width: 100%;
  border-radius: 15px;
`
export const BotaoCarrinho = styled.div`
 display: flex;
 justify-content: center;
 background-color: black;
 width: 80px;
 height: 80px;
 border-radius: 50%;
 box-shadow: 0 0 10px coral;
 position: fixed;
 right: 20px;
 bottom: 120px;
 cursor: pointer;
 transition: 0.5s;
  :hover {
    box-shadow: 0 0 20px coral;
  }
`
export const CarrinhoListaProdutos = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ProdutoNoCarrinho = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-bottom: 1px dashed black;
  padding: 5px 0;
`

export const ImgDeletar = styled.img`
  margin-left: 15px;
  cursor: pointer;
  transition: 0.8s;
  border-radius: 50%;
  
  :hover {
    background-color: red;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  font-weight: bold;
  color: whitesmoke;
`