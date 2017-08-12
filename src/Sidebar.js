import React, { Component } from 'react';
import axios from 'axios';

export class SideBar extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {types: []}
  }

  componentDidMount(){
    axios.get('http://pokeapi.co/api/v2/type/')
    .then((response) => {
      this.setState({types: response.data.results});
    })
  }

  handleClick(event) {
    event.preventDefault();
    console.log()
    this.props.onSelectType(event.target.href)

  }


  render(){
    return(
     <div className="side-bar">
        <ul>
          { this.state.types.map((type, i) => {
            return <li key={i}><a href={type ? type.url : '' } onClick={this.handleClick}> {type ? type.name : ""} </a></li>
          })}
        </ul>
      </div>
    )
  }
}
