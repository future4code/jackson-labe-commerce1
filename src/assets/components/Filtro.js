import React from 'react';
import styled from 'styled-componentes';
import {} from './Styled';

export class Filtro extends React.Component{
  render(){
    return (
      <div>
        <input 
          type='number' 
          value={this.props.valueMinimo}
          onChange={this.props.changeMinimo}  
        />
        <input 
          type='number' 
          value={this.props.valueMaximo} 
          onChange={this.props.changeMaximo}
        />
        <input 
          value={this.props.valueBusca}
          onChange={this.props.changeBusca}
        />
      </div>
    )
  }
}