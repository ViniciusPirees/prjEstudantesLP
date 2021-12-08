import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Estudantes } from './estudantes';
import { MensagemService } from './mensagem.service';


@Injectable({ providedIn: 'root' })
export class EstudantesService {

  private estudantesUrl = 'api/estudantes'; 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private mensagemService: MensagemService) { }

  getEstudantes(): Observable<Estudantes[]> {
    return this.http.get<Estudantes[]>(this.estudantesUrl)
      .pipe(
        tap(_ => this.log('fetched estudantes')),
        catchError(this.handleError<Estudantes[]>('getEstudantes', []))
      );
  }

  getEstudantesNo404<Data>(id: number): Observable<Estudantes> {
    const url = `${this.estudantesUrl}/?id=${id}`;
    return this.http.get<Estudantes[]>(url)
      .pipe(
        map(estudantes => estudantes[0]), // returns a {0|1} element array
        tap(e => {
          const outcome = e ? `buscado` : `não encontrou`;
          this.log(`${outcome} estudantes id=${id}`);
        }),
        catchError(this.handleError<Estudantes>(`getEstudante id=${id}`))
      );
  }


  getEstudante(id: number): Observable<Estudantes> {
    const url = `${this.estudantesUrl}/${id}`;
    return this.http.get<Estudantes>(url).pipe(
      tap(_ => this.log(`estudante buscado id=${id}`)),
      catchError(this.handleError<Estudantes>(`getEstudante id=${id}`))
    );
  }

  searchEstudantes(term: string): Observable<Estudantes[]> {
    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Estudantes[]>(`${this.estudantesUrl}/?nome=${term}`).pipe(
      tap(x => x.length ?
         this.log(`Encontrados estudantes correspondentes: "${term}"`) :
         this.log(`Nenhum estudante correspondente "${term}"`)),
      catchError(this.handleError<Estudantes[]>('searchEstudantes', []))
    );
  }

  
  addEstudante(estudante: Estudantes): Observable<Estudantes> {
    return this.http.post<Estudantes>(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap((newEstudante: Estudantes) => this.log(`Estudante adicionado c/ id=${newEstudante.id}`)),
      catchError(this.handleError<Estudantes>('addEstudante'))
    );
  }

  deleteEstudante(id: number): Observable<Estudantes> {
    const url = `${this.estudantesUrl}/${id}`;

    return this.http.delete<Estudantes>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Estudante deletado id=${id}`)),
      catchError(this.handleError<Estudantes>('deleteEstudante'))
    );
  }

  updateEstudante(estudante: Estudantes): Observable<any> {
    return this.http.put(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap(_ => this.log(`Estudante atualizado id=${estudante.id}`)),
      catchError(this.handleError<any>('updateEstudante'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.mensagemService.add(`MensagemService: ${message}`);
  }
}