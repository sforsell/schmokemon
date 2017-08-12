import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Header} from './Header'
import {SideBar} from './Sidebar'
import {Collection} from './Collection';
import {Pokemon} from './Pokemon';
import {Filtered} from './Filtered';


class App extends Component {
  constructor(){
    super()
    this.selectPokemon = this.selectPokemon.bind(this);
    this.selectHome = this.selectHome.bind(this);
    this.selectType = this.selectType.bind(this);
    this.state = {view: <Collection  endPoint='http://pokeapi.co/api/v2/pokemon/?limit=30' onSelectPokemon={this.selectPokemon} />}
  }

  selectType(url) {
    this.setState({view: <Filtered endPoint={url} onSelectPokemon={this.selectPokemon} />});
  }

  selectHome() {
    this.setState({view: <Collection endPoint='http://pokeapi.co/api/v2/pokemon/?limit=30' onSelectPokemon={this.selectPokemon} />});
  }

  selectPokemon(url){
    let pokemon = <Pokemon url={url} />;
    axios.get(url)
    .then((response) => {
      this.setState({view: pokemon});
    })
  }

  render() {
    return (
      <div className="App">
        <Header onSelectHome={ this.selectHome } />
        <SideBar onSelectType={ this.selectType } />
        <div id="main">
          {this.state.view}
        </div>
      </div>
    );
  }
}

export default App;
