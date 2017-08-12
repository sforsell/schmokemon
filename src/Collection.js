import React, { Component } from 'react';
import axios from 'axios'
import {ThumbNail} from './ThumbNail'



export class Collection extends Component {
  constructor(){
    super()
    this.state = {pokemons: []}
  }

  componentDidMount(){
    axios.get(this.props.endPoint)
    .then((response) => {
      this.setState({pokemons: response.data.results});
    })
  }

  render(){
    return(
      <div className="row">
        {this.state.pokemons.map((pokemon, i) => {
          return <ThumbNail key={i} onSelect={this.props.onSelectPokemon} data={pokemon.url} />
        })}
      </div>
    )
  }
}



