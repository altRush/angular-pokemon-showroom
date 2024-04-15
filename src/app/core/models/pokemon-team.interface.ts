import { PokemonProfile } from './pokemon-profile.interface';

export interface PokemonTeam {
  name: string;
  pokemonMembers: Array<PokemonProfile>;
}
