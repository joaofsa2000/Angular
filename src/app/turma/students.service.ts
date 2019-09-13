import { Injectable } from '@angular/core';
import { Aluno} from '../aluno';


import{ALUNOS} from '../alunos';
@Injectable()
export class StudentsService {

  constructor() { }


getStudents(): Aluno[] {
  return ALUNOS;
}
removeStudent(aluno: Aluno){
  
}
}