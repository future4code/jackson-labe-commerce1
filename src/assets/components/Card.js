import React from 'react';
import styled from 'styled-components';
import {ImagemCard, CardProduto} from './Styled';

export class Card extends React.Component{
  render(){
    return (
      <CardProduto>
        <ImagemCard src={this.props.srcImg}/>
        <h2>{this.props.tituloCard}</h2>
        <h3>R${this.props.precoCard}</h3>
        <button onClick={this.props.clickAddCarrinho}>Adicionar ao carrinho</button>
      </CardProduto>
    );
  };
};