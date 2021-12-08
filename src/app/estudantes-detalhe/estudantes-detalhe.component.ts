import { Component, OnInit } from '@angular/core';
import { Estudantes } from '../estudantes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EstudantesService } from '../estudantes.service';

@Component({
  selector: 'app-estudantes-detalhe',
  templateUrl: './estudantes-detalhe.component.html',
  styleUrls: ['./estudantes-detalhe.component.css']
})
export class EstudantesDetalheComponent implements OnInit {

  estudantes: Estudantes | undefined;

  constructor(
    private route: ActivatedRoute,
    private estudantesService: EstudantesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEstudante();
  }

  getEstudante(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estudantesService.getEstudante(id)
      .subscribe(estudantes => this.estudantes = estudantes);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.estudantes) {
      this.estudantesService.updateEstudante(this.estudantes)
        .subscribe(() => this.goBack());
    }
  }

}