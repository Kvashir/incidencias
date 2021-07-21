import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { IndexFormComponent } from './components/index-form/index-form.component';
import { TecnicoRoutingModule } from './tecnico-routing.module';
import { IncidenciasModule } from '../shared/components/incidencias.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from '../cliente/cliente-routing.module';
import { IonicModule } from '@ionic/angular';
import { PerfilModule } from '../shared/components/perfil/perfil.module';

@NgModule({
  declarations: [
    IndexComponent,
    IndexFormComponent
  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    IncidenciasModule,
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    IonicModule,
    PerfilModule,
  ]
})
export class TecnicoModule { }
