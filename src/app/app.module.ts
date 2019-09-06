import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TurmaComponent } from './turma/turma/turma.component';
import { AlunoComponent } from './turma/aluno/aluno.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TurmaComponent, AlunoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
