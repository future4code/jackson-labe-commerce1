import React from 'react';
import {Cabecalho} from './assets/components/Cabecalho';
import {Card} from './assets/components/Card';
import {Carrinho} from './assets/components/Carrinho';
import {Filtro} from './assets/components/Filtro';
import {Rodape} from './assets/components/Rodape';
import {
  AppContainer, 
  MainContainer, 
  CardContainer,
  Cards, 
  HeaderCards,
  BotaoCarrinho
} from './assets/components/Styled';
import bendego from './assets/img/bendego.jpg';
import condritoBrecha from './assets/img/condrito-brecha.jpg';
import condrulesAustralian from './assets/img/condrules-australian.jpg';
import parkForest from './assets/img/park-forest.jpg';
import sikhoteAlin from './assets/img/sikhote-alin.jpg';
import varreSai from './assets/img/varre-sai.jpg';
import viscenio from './assets/img/viscenio.jpg';
import tatahouine from './assets/img/tatahouine.jpg';
import botaoCarrinho from './assets/img/shopping-white.svg';
import iconeDeletar from './assets/img/delete.svg';

export default class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        titulo: "Bendegó",
        preco: 100,
        imagem: bendego,
        quantidade: 1
      },
      {
        id: 2,
        titulo: "Condrito Brecha",
        preco: 150,
        imagem: condritoBrecha,
        quantidade: 1
      },
      {
        id: 3,
        titulo: "Côndrules",
        preco: 300,
        imagem: condrulesAustralian,
        quantidade: 1
      },
      {
        id: 4,
        titulo: "Park Forest",
        preco: 200,
        imagem: parkForest,
        quantidade: 1
      },
      {
        id: 5,
        titulo: "Sikhote-Alin",
        preco: 400,
        imagem: sikhoteAlin,
        quantidade: 1
      },
      {
        id: 6,
        titulo: "Tatahouine",
        preco: 250,
        imagem: tatahouine,
        quantidade: 1
      },
      {
        id: 7,
        titulo: "Varre-sai",
        preco: 350,
        imagem: varreSai,
        quantidade: 1
      },
      {
        id: 8,
        titulo: "Viscenio",
        preco: 280,
        imagem: viscenio,
        quantidade: 1
      }
    ],
    carrinho: [],
    buscaValor: '',
    ordemValor: '',
    totalCarrinho: 0,
    carrinhoAberto: false,
    filtros: {
      minimoValor: null,
      maximoValor: null
    }
  };

  componentDidUpdate() {
    const comprasCarrinho = this.state.carrinho
    localStorage.setItem('carrinho', JSON.stringify(comprasCarrinho))
  }

  componentDidMount() {
    const carrinhoString = localStorage.getItem('carrinho')
    if (carrinhoString) {
      const carrinhoArray = JSON.parse(carrinhoString)
      this.setState({ carrinho: carrinhoArray })
    }
  }

  onChangeBusca = (event) => {
    this.setState({ buscaValor: event.target.value })
  };


  atualizarFiltro = (novoValorFiltro) => {
    this.setState ({
      filtros: {
        ...this.state.filtros,
        ...novoValorFiltro
      }
    })
  }

  filtrarProdutos() {
    const produtos = this.state.produtos
    const filtros = this.state.filtros
    const buscaValor = this.state.buscaValor

    let produtosFiltrados = produtos.filter(produto => {
      return produto.titulo.toLowerCase().indexOf(buscaValor.toLowerCase()) > -1
    }).filter(produto => {
      return produto.preco < (filtros.maximoValor || Infinity)
    }).filter(produto => {
      return produto.preco > (filtros.minimoValor || 0)
    })
  
  return produtosFiltrados
  }


  onChangeOrdem = (event) => {
    let listaOrdenada = [];
    if (event.target.value === 'crescente') {
      listaOrdenada = [...this.state.produtos];
      listaOrdenada.sort ((a, b) => {
        return a.preco - b.preco;
      })
    }
    if ( event.target.value === 'decrescente' ) {
      listaOrdenada = [...this.state.produtos];
      listaOrdenada.sort ((b, a) => {
        return a.preco - b.preco;
      })
    }
    this.setState({ produtos: listaOrdenada })
  };


  abrirCarrinho = () => {
    this.setState({carrinhoAberto: !this.state.carrinhoAberto});
  };

 
  adicionarCarrinho = (id) => {
    const produtoSelecionado = this.state.produtos.find(produto => {
      return produto.id === id
    })
    const posicaoDoProdutoNoCarrinho = this.state.carrinho.findIndex(produto => {
      return produto.id === id
    });
    const existeNoCarrinho = posicaoDoProdutoNoCarrinho > -1
    let novoCarrinho = [...this.state.carrinho]
    if (existeNoCarrinho) {
      novoCarrinho = novoCarrinho.map(produto => {
        if (produto.id === id ) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
    } else {
      novoCarrinho.push(produtoSelecionado)
    }
    this.setState({carrinho: novoCarrinho})
  };


  deletarProdutoCarrinho = (id) => {
    const carrinhoRealidade = this.state.carrinho.filter(produto => {
      return (produto.id === id) ? false : true
    });
    this.setState({carrinho: carrinhoRealidade});
  };


  renderCarrinho =  () => {
    let resultado = 0;
    this.state.carrinho.forEach(produto => {
      if (produto) {
        resultado += (produto.preco * produto.quantidade)
      }
    })
    return (
        <div>
          <h2>Carrinho</h2>
          {this.state.carrinho.map(produto => {
            if (produto.quantidade > 0 ) {
              return <Carrinho 
              tituloProduto={produto.titulo} 
              quantidadeProduto={produto.quantidade} 
              clickDeletarProduto={() => this.deletarProdutoCarrinho(produto.id)}
              iconeDeletar={iconeDeletar}
            />
            }
          })}
          <p><strong>Total: R$ {resultado}</strong></p>
        </div>
    )
  };

  render () {
    const produtosFiltrados = this.filtrarProdutos()

    return (
      <AppContainer>
        <Cabecalho/>
        <MainContainer carrinhoAberto={ this.state.carrinhoAberto }>
          <Filtro
            onChangeFiltro={ this.atualizarFiltro }
            valorBusca={ this.state.buscaValor }
            mudarBusca={ this.onChangeBusca }
          />
          <CardContainer>
            <HeaderCards>
              <p>Quantidade de produtos: { produtosFiltrados.length } </p>
              <select onChange={this.onChangeOrdem}>
                <option value='crescente'>Preço: crescente</option>
                <option value='decrescente'>Preço: decrescente</option>
              </select>
            </HeaderCards>
            <Cards>
              { produtosFiltrados.map(produto => {
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
          {this.state.carrinhoAberto && this.renderCarrinho()}
        </MainContainer>
        <Rodape/>
        <BotaoCarrinho onClick={this.abrirCarrinho}>
          <img alt='Icone carrinho' src={botaoCarrinho} />
        </BotaoCarrinho>
      </AppContainer>
    );
  }
}
