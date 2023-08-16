import axios from "axios";
import { isValid } from './01-types';


// export class Pokemon {
//     public id: number;
//     public name: string;


//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}/${this.name}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string,
    ) { }


    /// public por defecto
    /// private solo dentro de la clase
    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name} ${this.id}`);
    }

    async getMoves() {
        // const moves = 10;

        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data;
    }

}


export const charmander = new Pokemon(0, 'charmander');

// charmander.id = 10; // no funciona por el readonly
// charmander.name = 'pikachu'; //funciona

// console.log(charmander);
// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves() + 10);
charmander.getMoves();