import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudantesDetalheComponent } from './estudantes-detalhe/estudantes-detalhe.component';
import { MensagensComponent } from './mensagens/mensagens.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudantesDetalheComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

