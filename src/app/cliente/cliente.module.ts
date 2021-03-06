import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './pages/cliente.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { IonicModule } from '@ionic/angular';
import { IncidenciasModule } from '../shared/components/incidencias.module';



@NgModule({
  declarations: [
    ClienteComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    IonicModule,
    IncidenciasModule
  ]
})
export class ClienteModule { }
