import React from 'react';
import styled from 'styled-components';
import { FiltroContainer } from './Styled';

export class Filtro extends React.Component{
  render(){
    return (
      <FiltroContainer>
        <h3>Filtros:</h3>
        <p>Valor Máximo</p>
        <input 
          type='number' 
          value={this.props.valueMinimo}
          onChange={this.props.changeMinimo}  
        />
        <p>Valor Mínimo</p>
        <input 
          type='number' 
          value={this.props.valueMaximo} 
          onChange={this.props.changeMaximo}
        />
        <p>Buscar Produto</p>
        <input 
          value={this.props.valueBusca}
          onChange={this.props.changeBusca}
        />
      </FiltroContainer>
    )
  }
}