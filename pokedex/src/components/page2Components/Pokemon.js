import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: '',
    habitat: '',
    names: '',
    weight: '',
    height: '',
    moves: ''
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;
    
    const pokemonCharacterUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonCharacterSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
    

    fetch(pokemonCharacterUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        name: data['name'],
        imageUrl: data['sprites']['front_default'],
        types: Object.values(data['types']).map((type) => (
          `${(type['type']['name'])}`
          )).join(`, `),
        weight: data['weight'],
        height: data['height']
      })
      data['moves'] !== null 
      ? this.setState({
        moves: Object.values(data['moves']).map((move) => (
          `${(move['move']['name'])}`
          )).join(`, `)
      })
      : this.setState({
        moves: 'unknown'
      })
    })

    fetch(pokemonCharacterSpeciesUrl)
    .then(response => response.json())
    .then(data => {
      data['habitat'] !== null 
      ? this.setState({
        habitat: data['habitat']['name']
      })
      : this.setState({
        habitat: 'unknown'
      })
      data['names'] !=null
      ? this.setState({
        names: data['names'][0]['name']
      })
      : this.setState({
        names: ''
      })
    })
  }

  render() {
    return (
      <div className="pokemonContainer">
        <img 
          className="pokemonImage" 
          src={this.state.imageUrl} 
          alt={this.state.name}
        />
        <div>
          <div className="pokemonTitle">
            <h1 className="titles" style={{textTransform: 'capitalize'}}>{this.state.name}</h1>
            <h1 style={{fontWeight: 'normal'}}>{this.state.names}</h1>
          </div> 
          <div className="facts">
            <h5 className="titles">Types:</h5>
            <h5>{this.state.types}</h5>
          </div>
          <div className="facts">
            <h5 className="titles">Habitat:</h5>
            <h5>{this.state.habitat}</h5>
          </div>
          <div className="facts">
            <h5 className="titles">Weight: </h5>
            <h5>{this.state.weight}</h5>
          </div>
          <div className="facts">
            <h5 className="titles">Height: </h5>
            <h5>{this.state.height}</h5>
          </div>
          <div className="moves">
            <h5 className="titles">Moves: </h5>
            <h5 className="movesList">{this.state.moves}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Pokemon);
