import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciaComponent } from './shared/components/incidencia/incidencia.component';
import { LoginComponent } from './user/pages/login.component';
import { RegisterComponent } from './user/pages/register.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"", redirectTo:"client", pathMatch:"full"},
  {path:"register", component:RegisterComponent},
  {path:"client",
  loadChildren: ()=> import('./cliente/cliente.module').then(m => m.ClienteModule),
    
  },
  {path:"tec",
  loadChildren: ()=> import('./tecnico/tecnico.module').then(m => m.TecnicoModule),
  },
  {path:"incidencia/:id", component:IncidenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
