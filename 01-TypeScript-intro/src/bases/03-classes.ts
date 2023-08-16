// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ) { }
}


export const charmander = new Pokemon(0, 'charmander');

// charmander.id = 10; // no funciona por el readonly
charmander.name = 'pikachu'; //funciona