import React from 'react';
import Cabecalho from './assets/components/Cabecalho'
import Card from './assets/components/Card'
import Filtro from './assets/components/Filtro'
import Rodape from './assets/components/Rodape'
import { AppContainer } from './assets/components/Styled'

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 4,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 3,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 7,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      },
      {
        id: 8,
        name: "Foguete da Missão Apollo 11",
        preco: 10000.0,
        image: "https://picsum.photos/200/200",
      }
    ],
    carrinho: [],
    buscaValor: '',
    minimoValor: '',
    maximoValor: '',
    ordemValor: '',
    totalCarrinho: 0
  }

  onChangeBusca = (event) => {
    this.setState({ buscaValor: event.target.value })
  }

  onChangeMinimo = (event) => {
    this.setState({ minimoValor: event.target.value })
  }

  onChangeMaximo = (event) => {
    this.setState({ maximoValor: event.target.value })
  }

  onChangeOrdem = (event) => {
    this.setState({ ordemValor: event.target.value })
  }

  adicionarCarrinho = (id) => {
    const novoProduto = this.state.produtos.filter(produto => {
      return produto.id === id
    })

    const carrinhoExpectativa = [...this.state.carrinho, novoProduto]

    const novoTotal = this.state.totalCarrinho + novoProduto.value 

    this.setState({ 
      carrinho: carrinhoExpectativa,
      totalCarrinho: novoTotal
     })
  }

  deletarItemCarrinho = (id) => {
    const carrinhoRealidade = this.state.carrinho.filter(produto => {
      return produto.id !== id
    })

    this.setState({ carrinho: carrinhoRealidade })
  }

  render () {
  
    return (
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <Filtro
            valueMinimo={this.state.minimoValor}
            valueMaximo={this.state.maximoValor}
            valueBusca={this.state.buscaValor}
            changeBusca={onChangeBusca}
            changeMinimo={onChangeMinimo}
            changeMaximo={onChangeMaximo}
          />
          <CardContainer>
            <HeaderCards>
              <p>Quantidade de produtos: 8</p>
              <select>
                <option value='crescente'>Preço: crescente</option>
                <option value='decrescente'>Preço: decrescente</option>
              </select>
            </HeaderCards>
            <Card
              srcImg={this.state.image}
              tituloCard={this.state.nome}
              precoCard={this.state.value}
              clickAddCarrinho={adicionarCarrinho}
            />
          </CardContainer>
          <Carrinho/>
        </MainContainer>
        <Rodape/>
      </AppContainer>
    );
  }
}
