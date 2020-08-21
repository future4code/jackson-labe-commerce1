import React from 'react';
import {
  CarrinhoListaProdutos,
  ProdutoNoCarrinho,
  RemoverProduto
} from './Styled.js';

export class Carrinho extends React.Component {
  render() {
    return(
      <CarrinhoListaProdutos>
        <ProdutoNoCarrinho>
          {this.props.quantidadeProduto}x {this.props.tituloProduto}
          <RemoverProduto 
            onClick={this.props.clickDeletarProduto}  
            src={this.props.iconeDeletar} 
            alt="icone deletar"
          />
        </ProdutoNoCarrinho>
      </CarrinhoListaProdutos>
    );
  };
};