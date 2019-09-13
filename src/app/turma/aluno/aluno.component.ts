import { Component, OnInit } from '@angular/core';
import {Aluno} from '../../aluno';
import {StudentsService} from '../students.service';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos: Aluno[];
  alunoSelecionado: Aluno;
  alunoID=1;
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

selectStudent(aluno: Aluno){
  this.alunoSelecionado = aluno;
}
addStudent(name: string, age: number){
  if(name && age){
  this.alunos.push(new Aluno(this.alunoID++,name,age));
  }
}
removeStudent(aluno: Aluno){
  if(aluno){
    let index = this.findWithAttr(aluno);
    console.log(index);
    this.alunos.splice(index,1);
  }
}
findWithAttr(aluno: Aluno) {
  console.log(aluno.id);
    for(let i = 0; i < this.alunos.length; i ++) {
      console.log(this.alunos[i].id);      
        if(this.alunos[i].id == aluno.id) {
          console.log(i);
            return i;
        }
    }
    return -1;
}
getStudents():void{
  this.alunos= this.studentsService.getStudents();
}

}