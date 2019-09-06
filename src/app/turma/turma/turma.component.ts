import { Component, OnInit} from '@angular/core';
import { formatDate } from "@angular/common";
import { Turma } from '../../turma';
@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turma:Turma = {
    name:"TPSIP 10.18",
    description:"Programação",
    beginDate: new Date(2018,9,22)
  }
  constructor() { }

  ngOnInit() {
  }

}