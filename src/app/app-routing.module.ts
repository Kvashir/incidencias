import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/pages/login.component';
import { RegisterComponent } from './user/pages/register.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"register", component:RegisterComponent},
  {path:"client",
  loadChildren: ()=> import('./cliente/cliente.module').then(m => m.ClienteModule),
  },
  {path:"tec",
  loadChildren: ()=> import('./tecnico/tecnico.module').then(m => m.TecnicoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
