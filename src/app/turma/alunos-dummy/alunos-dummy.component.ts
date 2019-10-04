import { Component, OnInit, Input } from "@angular/core";
import { Aluno } from "../../aluno";
import { ActivatedRoute } from "@angular/router";
import { AlunoService } from "../aluno.service";
@Component({
  selector: "app-alunos-dummy",
  templateUrl: "./alunos-dummy.component.html",
  styleUrls: ["./alunos-dummy.component.css"]
})
export class AlunosDummyComponent implements OnInit {
  alunoSeleccionado: Aluno;
  idAlunoSeleccionado: number;

  editableName = false;
  editableAge = false;
  constructor(
    private route: ActivatedRoute, private alunosService: AlunoService
  ) {}

  enableEditName() {
    this.editableName = !this.editableName;
  }
  enableEditAge() {
    this.editableAge = !this.editableAge;
  }

  ngOnInit() {
 this.route.paramMap
             .subscribe(params => this.idAlunoSeleccionado = +params.get('alunoId'));
            
    this.alunosService.getAlunoById(this.idAlunoSeleccionado)
              .subscribe(aluno => this.alunoSeleccionado = aluno);
     console.log(this.alunoSeleccionado);
  }
}
