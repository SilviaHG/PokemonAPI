export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    },
    stats: {
        base_stat: number;
    },
    abilities: {
        ability: {
            name: string;
        };
    },
    moves: {
        move: {     
            name: string;
        };
    },
    height: number;
    weight: number;
    
}