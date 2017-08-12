import React, { Component } from 'react';

export class Header extends Component {
  constructor(){
    super()
    this.handleHomeClick = this.handleHomeClick.bind(this)
    this.handleProfileClick = this.handleProfileClick.bind(this)

  }

  handleHomeClick(event) {
    event.preventDefault();
    this.props.onSelectHome();
  }

  handleProfileClick(event){
    event.preventDefault();
    this.props.onSelectProfile();
  }

  render(){
    return (
      <nav>
        <div className="nav-wrapper red darken-4">
          <a href="" className="brand-logo" onClick={this.handleHomeClick}> Schmokémon </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="" onClick={this.handleProfileClick}>profile </a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
