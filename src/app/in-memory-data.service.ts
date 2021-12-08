import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Estudantes } from './estudantes';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const estudantes = [
      { id: 1, name: 'Vinicius Pires' },
      { id: 11, name: 'Jorge Campos' },
      { id: 12, name: 'Roberto Junior' },
      { id: 13, name: 'Micah el' },
      { id: 14, name: 'João Lendo' },
      { id: 15, name: 'Junior' },
      { id: 16, name: 'Cleber' },
    ];
    return {estudantes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(estudantes: Estudantes[]): number {
    return estudantes.length > 0 ? Math.max(...estudantes.map(estudantes => estudantes.id)) + 1 : 11;
  }
}