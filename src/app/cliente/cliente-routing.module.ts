import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaFormComponent } from '../shared/components/incidencia-form/incidencia-form.component';
import { ClienteComponent } from './pages/cliente.component';

const routes: Routes = [
  {path:"",component:ClienteComponent},
  {path:"newInc",component:IncidenciaFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
