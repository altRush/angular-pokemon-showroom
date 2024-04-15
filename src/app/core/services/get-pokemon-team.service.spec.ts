import { TestBed } from '@angular/core/testing';

import { GetPokemonTeamService } from './get-pokemon-team.service';

describe('GetPokemonTeamService', () => {
  let service: GetPokemonTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokemonTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
