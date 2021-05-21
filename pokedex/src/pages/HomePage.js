import React, { Component } from 'react';
import PokemonCharacterList from '../components/page1Components/PokemonCharacterList';

export default class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="cardContainer">
          <PokemonCharacterList />
        </div>
      </div>
    )
  }
}
