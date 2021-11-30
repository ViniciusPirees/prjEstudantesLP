import { Component, OnInit } from '@angular/core';
import { Estudantes } from '../estudantes';
import { ESTUDANTES } from '../mock-estudantes';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes = ESTUDANTES;
  estudanteSele?: Estudantes;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(estudantes : Estudantes): void {
    this.estudanteSele = estudantes;
  }

}


