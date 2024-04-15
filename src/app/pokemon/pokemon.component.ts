import { Component, Input, input } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  @Input() pokemon: any;
}
