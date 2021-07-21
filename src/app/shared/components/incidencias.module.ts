import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { IncidenciaComponent } from './incidencia/incidencia.component';
import { IonicModule } from '@ionic/angular';
import { IncidenciaFormComponent } from './incidencia-form/incidencia-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaIncidenciasComponent,
    IncidenciaComponent,
    IncidenciaFormComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    ListaIncidenciasComponent,
    IncidenciaComponent,
    IncidenciaFormComponent,
  ]
})
export class IncidenciasModule { }
