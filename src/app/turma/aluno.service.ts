import { Injectable } from '@angular/core';
import { Aluno} from '../aluno';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import{ALUNOS} from '../alunos';
@Injectable()
export class AlunoService {
  private alunoSeleccionado = new BehaviorSubject(null);
  private apiUrl = 'https://swapi.co/api/';
  private results: Observable<Aluno>;
  constructor(private http:HttpClient) { 
  this.results=this.http.get<Aluno>(this.apiUrl+'people/');    
  }


getStudents(): Observable<Aluno> {    
     return this.results;
     
}
removeStudent(aluno: Aluno){
  
}
 getAluno(): Observable<Aluno> {
    return this.alunoSeleccionado;
  }
getAlunoById(id:number): Aluno {  
      let alunot:Aluno; 
      return this.http.get<Aluno>(this.apiUrl+'people/'+id+1);
   // return this.http.get<Aluno>('https://swapi.co/api/people/'+id);
  }

  setAluno(aluno): void {    
    this.alunoSeleccionado.next(aluno);
  }
}