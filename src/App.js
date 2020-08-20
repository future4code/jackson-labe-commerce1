import React from 'react';
import {Cabecalho} from './assets/components/Cabecalho'
import {Card} from './assets/components/Card'
import {Carrinho} from './assets/components/Carrinho'
import {Filtro} from './assets/components/Filtro'
import {Rodape} from './assets/components/Rodape'
import {
  AppContainer, 
  MainContainer, 
  CardContainer,
  Cards, 
  HeaderCards,
  BotaoCarrinho
} from './assets/components/Styled'
import bendego from './assets/img/bendego.jpg'
import condritoBrecha from './assets/img/condrito-brecha.jpg'
import condrulesAustralian from './assets/img/condrules-australian.jpg'
import parkForest from './assets/img/park-forest.jpg'
import sikhoteAlin from './assets/img/sikhote-alin.jpg'
import varreSai from './assets/img/varre-sai.jpg'
import viscenio from './assets/img/viscenio.jpg'
import tatahouine from './assets/img/tatahouine.jpg'
import botaoCarrinho from './assets/img/shopping-white.svg'
import iconeDeletar from './assets/img/delete.svg'

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        titulo: "Bendegó",
        preco: 100,
        imagem: bendego
      },
      {
        id: 2,
        titulo: "Condrito Brecha",
        preco: 150,
        imagem: condritoBrecha
      },
      {
        id: 3,
        titulo: "Côndrules Australian",
        preco: 300,
        imagem: condrulesAustralian
      },
      {
        id: 4,
        titulo: "Park Forest",
        preco: 200,
        imagem: parkForest
      },
      {
        id: 5,
        titulo: "Sikhote-Alin",
        preco: 400,
        imagem: sikhoteAlin
      },
      {
        id: 6,
        titulo: "Tatahouine",
        preco: 250,
        imagem: tatahouine
      },
      {
        id: 7,
        titulo: "Varre-sai",
        preco: 350,
        imagem: varreSai
      },
      {
        id: 8,
        titulo: "Viscenio",
        preco: 280,
        imagem: viscenio
      }
    ],
    carrinho: [],
    buscaValor: '',
    minimoValor: '',
    maximoValor: '',
    ordemValor: '',
    totalCarrinho: 0,
    carrinhoAberto: true
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
    console.log('Carrinho Aberto:', this.state.carrinhoAberto)
  }
  
  // adicionarCarrinho = (id) => {
  //   const novoProduto = this.state.produtos.filter(produto => {
  //     return produto.id === id
  //   })
  //   const carrinhoExpectativa = [...this.state.carrinho, novoProduto]
  //   const novoTotal = this.state.totalCarrinho + novoProduto.preco 
  //   this.setState({ 
  //     carrinho: carrinhoExpectativa,
  //     totalCarrinho: novoTotal
  //   })
  //   console.log(this.state.carrinho)
  // }

  adicionarCarrinho = (produto) => {    
    const carrinhoExpectativa = [...this.state.carrinho]
    const indiceNovoProduto = this.state.carrinho.findIndex(item => {
      return item.produto.id === produto.id
    })

    if (indiceNovoProduto > -1) {
      carrinhoExpectativa[indiceNovoProduto].quantidade += 1
    } else {
      carrinhoExpectativa.push({
        id: produto.id,
        titulo: produto.titulo,
        preco: produto.preco,
        quantidade: 1
      })
    }

    this.setState({ carrinho: carrinhoExpectativa })
    console.log(this.state.carrinho)
  }

  deletarItemCarrinho = (id) => {
    const carrinhoRealidade = this.state.carrinho.filter(produto => {
      return produto.id !== id
    })
    this.setState({ carrinho: carrinhoRealidade })
  }

  renderizaCarrinho =  () => {
    let resultado = 0;
    this.state.carrinho.forEach(produto => {
      if (produto) {
        resultado += produto.preco
      }
    })
    return (
        <div>
          <h2>Carrinho</h2>
          {this.state.carrinho.map(produto => {
            if (produto.quantidade > 0) {
              return <Carrinho 
                tituloProduto={produto.titulo} 
                // quantidadeProduto={produto.quantidade} 
                clickDeletarProduto={() => this.deletarItemCarrinho(produto.id)}
              />
            }

          })}
          <p><strong>R$ {resultado}</strong></p>
        </div>
    )
  }

  render () {

    // let componenteCarrinho
    // if(this.state.carrinhoAberto) {
    //   componenteCarrinho = (
    //     this.state.carrinho.map(produto => {
    //       return (
    //         <Carrinho
    //           // quantidadeProduto={}
    //           tituloProduto={produto.titulo}
    //           clickDeletarProduto={() => this.deletarItemCarrinho(produto.id)}
    //           iconeDeletar={ iconeDeletar }
    //         />
    //       )
    //     })
    //   )
    // }

    return (
      <AppContainer>
        <Cabecalho/>
        <MainContainer carrinhoAberto={ this.state.carrinhoAberto }>
          <Filtro
            valueMinimo={this.state.minimoValor}
            valueMaximo={this.state.maximoValor}
            valueBusca={this.state.buscaValor}
            changeBusca={this.onChangeBusca}
            changeMinimo={this.onChangeMinimo}
            changeMaximo={this.onChangeMaximo}
          />
          <CardContainer>
            <HeaderCards>
              <p>Quantidade de produtos: 8</p>
              <select>
                <option value='crescente'>Preço: crescente</option>
                <option value='decrescente'>Preço: decrescente</option>
              </select>
            </HeaderCards>
            <Cards>
              { this.state.produtos.map(produto => {
                return (
                  <Card
                    srcImg={produto.imagem}
                    tituloCard={produto.titulo}
                    precoCard={produto.preco}
                    clickAddCarrinho={() => this.adicionarCarrinho(produto.id)}
                  />
                )
              }) }
            </Cards>
          </CardContainer>
          {this.state.abrirCarrinho && this.renderizaCarrinho()}
        </MainContainer>
        <Rodape/>
        <BotaoCarrinho onClick={this.abrirCarrinho}>
          <img src={ botaoCarrinho } />
        </BotaoCarrinho>
      </AppContainer>
    );
  }
}
