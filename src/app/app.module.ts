import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TurmaComponent } from "./turma/turma/turma.component";
import { AlunoComponent } from "./turma/aluno/aluno.component";
import { AlunosDummyComponent } from "./turma/alunos-dummy/alunos-dummy.component";
import { AlunoService } from "./turma/aluno.service";

const routes: Routes = [
  { path: '', component: AlunoComponent },
  { path: 'alunos/:alunoId', component: AlunosDummyComponent }
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TurmaComponent,
    AlunoComponent,
    AlunosDummyComponent
  ],
  bootstrap: [AppComponent],
  providers: [AlunoService]
})
export class AppModule {}
