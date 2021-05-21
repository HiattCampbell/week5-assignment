import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokedexLogo from'../../pokedexLogo.png';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav 
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
        >
          <Link 
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            href=""
            to={`/`}
          >
            <img className="pokedexLogo" src={pokedexLogo} alt=""></img>
          </Link>
        </nav>
      </div>
    )
  }
}
