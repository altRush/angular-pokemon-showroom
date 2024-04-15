import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { NgFor } from '@angular/common';
import { GetPokemonTeamService } from '../core/services/get-pokemon-team.service';
import { Observable, catchError, map } from 'rxjs';
import { PokemonTeam } from '../core/models/pokemon-team.interface';
import { PokemonProfile } from '../core/models/pokemon-profile.interface';

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [PokemonComponent, NgFor],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.css',
})
export class ShowroomComponent implements OnInit {
  pokemons: PokemonProfile[] = [];
  constructor(private getPokemonTeamService: GetPokemonTeamService) {}

  ngOnInit(): void {
    this.getPokemonTeamService
      .getPokemonTeam('661b8bdae271f2e3e28b4d18')
      .pipe(
        map((team) => {
          console.warn({ team });
          this.pokemons = team.pokemonMembers;
        }),
        catchError((err) => {
          console.error(err);
          return err;
        })
      )
      .subscribe();
  }
}
