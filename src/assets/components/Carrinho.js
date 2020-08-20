import React from 'react';
import styled from 'styled-components';
import {} from './Styled.js';

export class Carrinho extends React.Component {
  render() {
    return(
      <li>
        {this.props.quantidadeProduto} x {this.props.tituloProduto}
        <img 
          onClick={this.props.clickDeletarProduto}  
          src={this.props.iconeDeletar} 
          alt="icone deletar"
        />
      </li>
    )
  }
}