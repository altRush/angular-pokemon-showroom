import { Component } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import pokemons from '../../pokemons.json';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemons = pokemons;
}
