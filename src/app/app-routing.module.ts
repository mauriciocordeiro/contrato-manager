import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratoComponent } from './components/contrato/contrato.component';
import { ContaComponent } from './components/conta/conta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'contrato', component: ContratoComponent },
  { path: 'conta', component: ContaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
