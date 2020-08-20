import React from 'react';
import {Cabecalho} from './assets/components/Cabecalho'
import {Card} from './assets/components/Card'
import {Filtro} from './assets/components/Filtro'
import {Rodape} from './assets/components/Rodape'
import {AppContainer} from './assets/components/Styled'
import bendego from './assets/img/bendego.jpg'
import condritoBrecha from './assets/img/condrito-brecha.jpg'
import condrulesAustralian from './assets/img/condrules-australian.jpg'
import parkForest from './assets/img/park-forest.jpg'
import sikhoteAlin from './assets/img/sikhote-alin.jpg'
import varreSai from './assets/img/varre-sai.jpg'
import viscenio from './assets/img/bendego.jpg'
import tatahouine from './assets/img/tatahouine.jpg'

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Bendegó",
        preco: 100,
        image: {bendego}
      },
      {
        id: 2,
        name: "Condrito Brecha",
        preco: 150,
        image: {condritoBrecha}
      },
      {
        id: 3,
        name: "Côndrules Australian",
        preco: 300,
        image: {condrulesAustralian},
      },
      {
        id: 4,
        name: "Park Forest",
        preco: 200,
        image: {parkForest},
      },
      {
        id: 5,
        name: "Sikhote-Alin",
        preco: 400,
        image: {sikhoteAlin},
      },
      {
        id: 6,
        name: "Tatahouine",
        preco: 250,
        image: {tatahouine},
      },
      {
        id: 7,
        name: "Varre-sai",
        preco: 350,
        image: {varreSai},
      },
      {
        id: 8,
        name: "Viscenio",
        preco: 280,
        image: {viscenio},
      }
    ],
    carrinho: [],
    buscaValor: '',
    minimoValor: '',
    maximoValor: '',
    ordemValor: '',
    totalCarrinho: 0,
    carrinhoAberto: false
  }
  
  // onChanges
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

  // Funções
  abrirCarrinho = () => {
    this.setState({carrinhoAberto: !this.state.carrinhoAberto})
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

    let componenteCarrinho
    if(this.state.carrinhoAberto) {
      componenteCarrinho = (
        this.state.produtos.map(produto => {
          return (
            <Carrinho
              // quantidadeProduto={}
              tituloProduto={produto.name}
              clickDeletarProduto={() => this.deletarItemCarrinho(produto.id)}
              // iconeDeletar={}
            />
          )
        })
      )
    }

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
          {componenteCarrinho}
        </MainContainer>
        <Rodape/>
      </AppContainer>
    );
  }
}
