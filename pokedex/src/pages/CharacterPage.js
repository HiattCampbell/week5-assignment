import React, { Component } from 'react';
import Pokemon from '../components/page2Components/Pokemon';

export default class CharacterPage extends Component {
  render() {
    return (
      <div>
        <div className="pokemonPage">
          <Pokemon />
        </div>
      </div>
    )
  }
}