import { Component, Input, OnInit } from '@angular/core';
import { Estudantes } from '../estudantes';

@Component({
  selector: 'app-estudantes-detalhe',
  templateUrl: './estudantes-detalhe.component.html',
  styleUrls: ['./estudantes-detalhe.component.css']
})
export class EstudantesDetalheComponent implements OnInit {

  @Input() estudantes?: Estudantes;

  constructor() { }

  ngOnInit(): void {
  }

}
