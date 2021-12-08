import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudantesDetalheComponent } from './estudantes-detalhe/estudantes-detalhe.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EstudantesSearchComponent } from './estudantes-search/estudantes-search.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudantesDetalheComponent,
    MensagensComponent,
    DashboardComponent,
    EstudantesSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }