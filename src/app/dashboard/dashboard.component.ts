import { Component, OnInit } from '@angular/core';
import { Estudantes } from '../estudantes';
import { EstudantesService } from '../estudantes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  estudantes: Estudantes[] = [];

  constructor(private estudantesService: EstudantesService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudantesService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes.slice(1, 5));
  }

}

