import { Component, Input } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import { PokemonProfile } from '../core/models/pokemon-profile.interface';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  @Input() pokemon: PokemonProfile = {
    name: '',
    id: '',
    imageUrl: '',
    type1: '',
    type2: '',
  };
}
