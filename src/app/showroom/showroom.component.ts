import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.css',
})
export class ShowroomComponent {}
