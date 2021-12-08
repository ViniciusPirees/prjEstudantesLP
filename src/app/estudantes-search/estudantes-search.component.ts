import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Estudantes } from '../estudantes';
import { EstudantesService } from '../estudantes.service';

@Component({
  selector: 'app-estudantes-search',
  templateUrl: './estudantes-search.component.html',
  styleUrls: [ './estudantes-search.component.css' ]
})
export class EstudantesSearchComponent implements OnInit {
  estudantes$!: Observable<Estudantes[]>;
  private searchTerms = new Subject<string>();

  constructor(private estudantesService: EstudantesService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.estudantes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.estudantesService.searchEstudantes(term)),
    );
  }
}