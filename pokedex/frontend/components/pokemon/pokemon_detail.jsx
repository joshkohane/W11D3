import React from 'react';
import Item from '../item/item';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestPokemon(this.props.match.params.pokemonId);
        }
    }

    render() {
        const { pokemon, moves, items } = this.props;
        if (!pokemon) return null;
        // debugger;
        return (
            <section className="pokemon-detail">
                <figure>
                    <img src={pokemon.imageUrl} />
                </figure>
                <ul>
                    <li><h2>{pokemon.name}</h2></li>
                    <li>Type: {pokemon.pokeType}</li>
                    <li>Attack: {pokemon.attack}</li>
                    <li>Defense: {pokemon.defense}</li>
                    <li>Moves: {moves.join(', ')}</li>
                </ul>

                <section className='toys'>
                    <h3>Items</h3>
                    {/* <ul> */}
                    <ul className='toy-list'>
                        {items.map(item => (
                            <Item key={item.name} item={item} />
                        ))}
                    </ul>
                </section>
            </section>
        );
    }
}

export default PokemonDetail;