export interface PokemonData {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  stats: StatElement[];
  types: Type[];
  weight: number;
}

interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface StatElement {
  base_stat: number;
  effort: number;
  stat: TypeClass;
}

interface TypeClass {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: TypeClass;
}
