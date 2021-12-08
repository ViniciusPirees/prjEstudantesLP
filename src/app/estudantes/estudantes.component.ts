import { Component, OnInit } from '@angular/core';
import { Estudantes } from '../estudantes';

import { EstudantesService } from '../estudantes.service';
import { MensagemService } from '../mensagem.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes: Estudantes [] = [];

  constructor(private estudantesService: EstudantesService, private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudantesService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.estudantesService.addEstudante({ nome } as Estudantes)
      .subscribe(estudantes => {
        this.estudantes.push(estudantes);
      });
  }

  delete(estudantes: Estudantes): void {
    this.estudantes = this.estudantes.filter(e => e !== estudantes);
    this.estudantesService.deleteEstudante(estudantes.id).subscribe();
  }

}

