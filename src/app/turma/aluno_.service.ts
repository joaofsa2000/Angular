import { Injectable } from '@angular/core';
import { Aluno} from '../aluno';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{ALUNOS} from '../alunos';
@Injectable()
export class AlunoService {
  private alunoSeleccionado = new BehaviorSubject(null);
  private apiUrl = 'https://swapi.co/api/';
  constructor(private http:HttpClient) { }


getStudents(): Observable<Aluno[]> {
  return of(ALUNOS);
    // return this.http.get<Aluno[]>('https://swapi.co/api/people/');
}
removeStudent(aluno: Aluno){
  
}
getAlunoById(id:number): Observable<Aluno> {
    // return of(ALUNOS[id]);
    return this.http.get<Aluno>('https://swapi.co/api/people/'+id);
  }

  setAluno(aluno): void {    
    this.alunoSeleccionado.next(aluno);
  }
}