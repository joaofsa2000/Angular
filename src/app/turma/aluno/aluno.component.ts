import { Component, OnInit } from '@angular/core';
import {Aluno} from '../../aluno';
import {AlunoService} from '../aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos: Aluno;
  alunoSeleccionado: Aluno;
  alunoID=1;
  constructor(private studentsService: AlunoService) { }

  ngOnInit() {
    this.getStudents();
  }

selectStudent(aluno: Aluno){
  this.studentsService.setAluno(aluno);
}
addStudent(name: string, age: number){
  if(name && age){
  this.alunos.push(new Aluno(this.alunoID++,name,age));
  }
}
removeStudent(aluno: number){
  if(aluno){    
    let index = this.findWithAttr(aluno);    
    this.alunos.splice(index,1);
  }
}
findWithAttr(aluno: number) {
  
    for(let i = 0; i < this.alunos.length; i ++) {
        if(this.alunos[i].id == aluno) {
            return i;
        }
    }
    return -1;
}
getStudents():void{
  this.studentsService.getStudents().subscribe(dados=>this.alunos=dados.results);

}

}