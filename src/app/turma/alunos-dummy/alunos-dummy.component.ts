import { Component, OnInit,Input } from '@angular/core';
import {Aluno} from '../../aluno'
@Component({
  selector: 'app-alunos-dummy',
  templateUrl: './alunos-dummy.component.html',
  styleUrls: ['./alunos-dummy.component.css']
})
export class AlunosDummyComponent implements OnInit {
@Input() aluno: Aluno;

editableName = false;
editableAge = false;
enableEditName(){
  this.editableName = !this.editableName;
}
enableEditAge(){
  this.editableAge = !this.editableAge;
}
  constructor() { }

  ngOnInit() {
  }

}