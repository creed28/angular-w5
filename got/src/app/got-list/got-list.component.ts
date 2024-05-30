import { Component, Injectable, OnInit, inject } from '@angular/core';
import { GameOfThronesService } from '../services/got-service.service';
import { CharacterDetails } from '../interfaces/character-details';

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-got-list',
  standalone: true,
  imports: [],
  templateUrl: './got-list.component.html',
  styleUrls: ['./got-list.component.css']
})
export class GotListComponent implements OnInit {
  private characterService = inject(GameOfThronesService);
  characters: CharacterDetails[] = [];
  
  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getCharacters().subscribe({
      next: (res: any) => {
        this.characters = res as CharacterDetails[];
        console.log(res);
        console.log("Fetch successful.");
      },
      error: (error) => console.error("Error: ", error)
    });
  }
}
