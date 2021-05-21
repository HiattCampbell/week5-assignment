import React, { Component } from 'react';
import PokemonCharacter from './PokemonCharacter';

export default class PokemonCharacterList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon',
    pokemon: null
  }

  componentDidMount() {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
      .then(response => response.json())
      .then(data => {
        this.setState({pokemon: data['results']})
      })
      
  }

  
  render() {
    return (
      <React.Fragment > 
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCharacter 
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>) : (<h1>Loading Pokédex...</h1>)
        }
       </React.Fragment>
    )
  }
}
