import { Injectable } from '@angular/core';
import { Aluno} from '../aluno';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import{ALUNOS} from '../alunos';
@Injectable()
export class AlunoService {
  private alunoSeleccionado = new BehaviorSubject(null);
  private apiUrl = 'https://randomuser.me/api/';
  private results: Observable<Aluno>;
  constructor(private http:HttpClient) { 
  this.results=this.http.get<Aluno>(this.apiUrl+'?results=30');
  }


getStudents(): Observable<Aluno> {       
     return this.results ;
}
removeStudent(aluno: Aluno){
  
}
 getAluno(): Observable<Aluno> {
    return this.alunoSeleccionado;
  }
getAlunoById(id:number): Observable<Aluno> {  
       return this.results[id];
   // return this.http.get<Aluno>('https://swapi.co/api/people/'+id);
  }

  setAluno(aluno): void {    
    this.alunoSeleccionado.next(aluno);
  }
}