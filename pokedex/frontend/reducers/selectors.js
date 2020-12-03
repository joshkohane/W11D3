export const selectAllPokemon = (state) => (
    // { pokemon: { 1: { ... }, 2: ... }}
    Object.values(state.entities.pokemon)
);

export const selectPokemonMovesNames = (state) => {
    let moves = [];
    Object.values(state.entities.moves).forEach(move => {
        moves.push(move.name);
    });
    return moves;
}

export const selectPokemonItems = (state) => (
    Object.values(state.entities.items)
);