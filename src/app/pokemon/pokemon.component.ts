import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import pokemons from '../../pokemons.json';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemons = pokemons;
}
