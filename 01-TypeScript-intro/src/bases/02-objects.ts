export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// pokemonIds.push("texto"); // ERROR

pokemonIds.push(99);

console.log(pokemonIds);

export const bulbasaur: Pokemon = {
    id: 1,
    name: "bulbasaur",
    age: 20,
};



// los primeros 2 son requeridos
interface Pokemon {
    id: number,
    name: string | string,// puede aceptar 2 opciones
    age?: number,  // puede ser nulo
}


export const pokemons: Pokemon[] = [
    {
        id: 1,
        name: 'pikachu',
    }
];

pokemons.push({
    id: 2,
    name: 'charmander',
});

pokemons.push(bulbasaur);