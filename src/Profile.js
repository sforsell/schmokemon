import React, { Component } from 'react';
import axios from 'axios'
import {ThumbNail} from './ThumbNail'



export class Profile extends Component {
  constructor(){
    super()
    this.state = {pokemonIds: []}
  }

  componentDidMount(){
    axios.get('http://localhost:8080/users/1')
    .then((response) => {
      console.log(response);
      this.setState({pokemonIds: response.data.results});
    })
  }

  render(){
    return(
      <div className="row">
        {this.state.pokemonIds.map((id, i) => {
          return <ThumbNail key={i} onSelect={this.props.onSelectPokemon} data={'http://pokeapi.co/api/v2/pokemon/' + id} />
        })}
      </div>
    )
  }
}


