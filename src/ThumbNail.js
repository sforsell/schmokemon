import React, { Component } from 'react';
import axios from 'axios';


export class ThumbNail extends Component {
  constructor(){
    super()
    this.state = {name: "", url: ""}
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    axios.get(this.props.data)
    .then((response) => {
      this.setState({pokeName: response.data.name, url: response.data.sprites.front_default})
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onSelect(this.props.data)
  }

  render(){
    return(
        <a className="thumbs" onClick={this.handleClick} href={this.props.data}>
          <div className="thumb col s2 ">
            <img src={this.state.url} alt="" />
            <p> {this.state.pokeName} </p>
          </div>
        </a>
      )
  }

}
