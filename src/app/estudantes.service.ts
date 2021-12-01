import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Estudantes } from './estudantes';
import { ESTUDANTES } from './mock-estudantes';
import { MensagemService } from './mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {
  
  constructor(private mensagemService: MensagemService) { }

  getEstudantes(): Observable<Estudantes[]> {
    const estudantes = of(ESTUDANTES);
    this.mensagemService.add('Mensagem: fetched Estudantes');
    return estudantes;
  }
}