import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudantesDetalheComponent } from './estudantes-detalhe/estudantes-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalhe/:id', component: EstudantesDetalheComponent },
  { path: 'estudantes', component: EstudantesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
