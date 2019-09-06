import { Component, OnInit } from '@angular/core';
import {alunos} from '../../alunos';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos = alunos;
  constructor() { }

  ngOnInit() {
  }

}