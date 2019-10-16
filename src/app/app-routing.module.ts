import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratoFormComponent } from './components/contrato-form/contrato-form.component';
import { ContaComponent } from './components/conta/conta.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'contratos', component: ContratoComponent },
  { path: 'novo-contrato', component: ContratoFormComponent },
  { path: 'editar-contrato/:id', component: ContratoFormComponent },
  { path: 'contas', component: ContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
