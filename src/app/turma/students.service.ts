import { Injectable } from '@angular/core';
import { Aluno} from '../aluno';
import {Observable, of, BehaviorSubject} from 'rxjs';

import{ALUNOS} from '../alunos';
@Injectable()
export class StudentsService {

  constructor() { }


getStudents(): Observable<Aluno[]> {
  return ALUNOS;
}
removeStudent(aluno: Aluno){
  
}
}