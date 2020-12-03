import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import { selectPokemonItems, selectPokemonMovesNames } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    const currPoke = state.entities.pokemon[ownProps.match.params.pokemonId];
    return {
        pokemon: currPoke,
        moves: selectPokemonMovesNames(state),
        items: selectPokemonItems(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    requestPokemon: (pokemon) => dispatch(requestPokemon(pokemon)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail)