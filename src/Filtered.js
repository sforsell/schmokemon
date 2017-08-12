import React, { Component } from 'react';
import axios from 'axios'
import {ThumbNail} from './ThumbNail'



export class Filtered extends Component {
  constructor(){
    super()
    this.state = {pokemons: []}
  }

  componentWillMount(){
    axios.get(this.props.endPoint)
    .then((response) => {

      this.setState({pokemons: response.data.pokemon});
    })
  }

  render(){
    return(
      <div className="row">
        { this.state.pokemons.map((pokemon, i) => {
            return <ThumbNail key={i} onSelect={this.props.onSelectPokemon} data={pokemon ? pokemon.pokemon.url : ''} />
        })}
      </div>
    )
  }
}



