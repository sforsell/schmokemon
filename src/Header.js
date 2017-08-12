import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'


export class Header extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event) {
    event.preventDefault();
    this.props.onSelectHome();
  }


  render(){
    return (
        <Navbar onClick={this.handleClick} className="red darken-4 header" brand='Schmokémon' right>
          <NavItem  href='#'>profile</NavItem>
        </Navbar>
      )
  }
}
