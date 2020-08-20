import React from 'react';
import styled from 'styled-components';
import {ImagemCard} from './Styled';

export class Card extends React.Component{
  render(){
    return (
      <div>
        <ImagemCard src={this.props.srcImg}/>
        <h2>{this.props.tituloCard}</h2>
        <h4>{this.props.precoCard}</h4>
        <button onClick={this.props.clickAddCarrinho}>Adicionar ao carrinho</button>
      </div>
    )
  }
}