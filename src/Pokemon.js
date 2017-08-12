import React, { Component } from 'react';
import axios from 'axios';
import {Chip} from 'react-materialize';

let pokemon;
export class Pokemon extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
    this.state = {pokemon: pokemon}
  }

  componentWillMount(){
    axios.get(this.props.url)
    .then((response) => {
      this.setState({pokemon: response.data});
    })
  }

  handleClick(event){
    event.preventDefault();
    const id = event.target.id
    axios.post('http://localhost:8080/users/1/pokemons', {id: id})
  }


  render(){

    let {name, id, species, sprites, moves, weight, types} = this.state.pokemon ? this.state.pokemon : '';

    function makeTypeString(typeObject){
      return typeObject.map(function(type) {
        return type.type.name;
      }).toLocaleString();
    }

    function makeMoves(movesObject) {
      return movesObject.map(function(move) {
        return move.move.name
      })
    }

    let moveStrings = [];
    moves ? moveStrings = makeMoves(moves) : [];
    return(
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image center-align">
                <img className="half-size" src={sprites ? sprites.front_default : 'http://www.pngall.com/wp-content/uploads/2016/06/Pokemon-PNG-Pic.png'} alt=""/>
                <a onClick={this.handleClick} className="btn-floating pokeball halfway-fab waves-effect waves-light white "  >
                  <img className="pokeball" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' id={id} alt='' />
                </a>
                <span className="card-title ">{name}</span>
              </div>
              <div className="card-content">
                <ul>
                  <li>Species: {species ? species.name : "" }</li>
                  <li>Weight: {weight}</li>
                  <li>Type: {types ? makeTypeString(types) : ''}</li>
                  <li> Moves: </li>
                </ul>

                { moveStrings.map(function(move, i){
                    return <Chip close={false} key={i}> {move} </Chip>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
