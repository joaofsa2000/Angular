import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TurmaComponent } from './turma/turma/turma.component';
import { AlunoComponent } from './turma/aluno/aluno.component';
import { AlunosDummyComponent } from './turma/alunos-dummy/alunos-dummy.component';
import { StudentsService } from './turma/students.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TurmaComponent, AlunoComponent, AlunosDummyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StudentsService]
})
export class AppModule { }
