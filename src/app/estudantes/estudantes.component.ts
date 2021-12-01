import { Component, OnInit } from '@angular/core';
import { Estudantes } from '../estudantes';
import { MensagemService } from '../mensagem.service';
import { EstudantesService } from '../estudantes.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudanteSele?: Estudantes;
  estudantes: Estudantes [] = [];

  constructor(private estudantesService: EstudantesService, private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  onSelect(estudantes: Estudantes): void {
    this.estudanteSele = estudantes;
    this.mensagemService.add(`EstudantesComponent: ID do Estudante Selecionado=${estudantes.id}`);
  }

  getEstudantes(): void {
    this.estudantesService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }

}