import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonTeam } from '../models/pokemon-team.interface';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonTeamService {
  constructor(private http: HttpClient) {}

  getPokemonTeam(teamId: string): Observable<PokemonTeam> {
    return this.http.get<PokemonTeam>(
      `http://localhost:3000/pokemon-teams/find-team/${teamId}`
    );
  }
}
