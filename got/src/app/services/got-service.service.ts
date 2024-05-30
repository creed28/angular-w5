import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDetails } from '../interfaces/character-details';

const BASE_URL = "https://thronesapi.com/api/v2/Characters";
@Injectable({
  providedIn: 'root'
})
export class GameOfThronesService {
  private http = inject(HttpClient);

  constructor() { }

  getCharacters() : Observable<CharacterDetails>{
    return this.http.get<CharacterDetails>(BASE_URL);
  }
}
